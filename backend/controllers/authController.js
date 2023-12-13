const express = require('express')
//Importing the JWT package
const jwt = require('jsonwebtoken')
//Importing the bcrypt package
const bcrypt = require('bcryptjs')
//Imprtong the user model 
const userModel = require('../models/User')
//Importing the express-async-handler package
const asyncHandler = require("express-async-handler");
//Importing the uuidv4 package to generate userId
const { v4: uuidv4 } = require('uuid')

// Fonction d'inscription
const register = asyncHandler(async (req, res) => {

    //Destructuing the inputs from req.body 
    const { fullName, email, password, phoneNumber } = req.body;

    //Verifying the email address inputed is not used already 
    const verifyEmail = await userModel.findOne({ email: email })
    try {
        if (verifyEmail) {
            return res.status(403).json({
                message: "Email already used"
            })
        } else {
            //generating userId
            const userId = uuidv4()
            //using bcrypt to hash the password sent from the user
            bcrypt.hash(req.body.password, 10)
                .then((hash) => {
                    //Registering the user
                    const user = new userModel({
                        userId: userId,
                        fullName: fullName,
                        email: email,
                        password: hash,
                        phoneNumber: phoneNumber
                    });

                    //saving the data to the mongodb user collection
                    user.save()
                        .then((response) => {

                            let jwtToken = jwt.sign(
                                {
                                    email: response.email,
                                    userId: response.userId,
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: '1h',
                                }
                            );

                            res.cookie('jwtToken', jwtToken, {
                                httpOnly: true,
                                secure: true, // Set to true if your server uses HTTPS
                                sameSite: 'none', // Set to 'none' for cross-origin cookies
                            });

                            return res.status(201).json({
                                message: 'user successfully created!',
                                result: response,
                                success: true,
                                accessToken: jwtToken,
                                // Send the userId of the user that loggedin in order to fetch his data and dispaly
                                userId: response.userId
                            })
                        })
                        .catch((error) => {
                            res.status(500).json({
                                error: error,
                            })
                        })
                })
        }
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
})

// Fonction de connexion
const login = asyncHandler(async (req, res) => {
    //Destructing the inputs from req.body
    const { email, password } = req.body

    //created a variable to assign the user
    let getUser

    //verifying that the user with the email exist or not
    userModel.findOne({
        email: email
    }).then((user) => {
        if (!user) {
            //if user does not exist responding Authentication Failed
            return res.status(401).json({
                message: "Authentication Failed",
            })

        }
        //assigned the user to getUser variable
        getUser = user
        /*
    Then compare the password from the req.body and the hased password on the database 
    using the bcrypt.compare built in function
    */
        return bcrypt.compare(password, user.password)
    })
        .then((response) => {
            if (!response) {
                return res.status(401).json({
                    message: "Authentication Failed"
                })
            } else {
                let jwtToken = jwt.sign(
                    {
                        email: getUser.email,
                        userId: getUser.userId
                    },
                    //Signign the token with the JWT_SECRET in the .env
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )

                res.cookie('jwtToken', jwtToken, {
                    httpOnly: true,
                    secure: true, // Set to true if your server uses HTTPS
                    sameSite: 'none', // Set to 'none' for cross-origin cookies
                });

                return res.status(200).json({
                    accessToken: jwtToken,

                    //I like to send the userId of the user that loggedin in order to fetch his data and dispaly
                    userId: getUser.userId,
                })

            }

        })
        .catch((err) => {
            return res.status(401).json({
                messgae: err.message,
                success: false
            })
        })
})

// Fonction pour récupérer le profil de l'utilisateur
const userProfile = asyncHandler(async (req, res, next) => {

    //Destructing id from the req.params
    const { id } = req.params;
    const tokenCookie = req.cookies.jwtToken;

    try {
        //verifying if the user exist in the database
        const verifyUser = await userModel.findOne({ userId: id })

        if (!verifyUser) {
            return res.status(404).json({
                message: "user not found",
                success: false,
            })
        }

        if (!tokenCookie) {
            return res.status(401).json({
                message: 'Unauthorized - Missing token',
            });
        }

        try {
            const decoded = jwt.verify(tokenCookie, process.env.JWT_SECRET);
            // Vous pouvez accéder aux données du token avec decoded.email, decoded.userId, etc.

            // Continuez avec la logique de userProfile ici...
            return res.status(200).json({
                message: `User ${verifyUser.fullName}`,
                success: true,
                userData: verifyUser,
                decodedToken: decoded,
            });
        } catch (error) {
            return res.status(401).json({
                message: 'Unauthorized - Invalid token',
            });
        }
    } catch (error) {
        return res.status(401).json({
            sucess: false,
            message: error.message,
        })
    }
});

// Fonction pour modifier le profil de l'utilisateur
const updateUserProfile = asyncHandler(async (req, res) => {
    try {
        // Récupérer l'ID de l'utilisateur à partir du paramètre de la route - Destructuring the userId from req.params
        const userId = req.params.id;

        //Destructuring the inputs from req.body - récupérer les données à partir du corps de la requête
        const { fullName, email, password, phoneNumber } = req.body;

        // Hashing the password
        const hash = await bcrypt.hash(password, 10);

        // logique de mise à jour du profil ici
        // Fonction du modèle pour mettre à jour l'utilisateur en base de données
        // Update user in the database
        const updatedUser = await userModel.findOneAndUpdate(
            { userId: userId },
            { $set: { fullName, email, hash, phoneNumber } },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Renvoyer la réponse appropriée
        return res.status(200).json({
            success: true,
            message: "Profil mis à jour avec succès",
            userData: updatedUser
        });

    } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
        return res.status(500).json({ success: false, message: "Erreur lors de la mise à jour du profil" })
    }

})

// Fonction pour voir tous les profils des utilisateurs (Admin)
// while we are in the auth.controller.js file let's create another route that returns all users in the database, that can be accessed only by the admin of the project that you are working on.
const users = asyncHandler(async (req, res) => {

    //Fetching all users from database
    try {
        const users = await userModel.find();
        console.log(users)
        return res.status(200).json({
            data: users,
            sucess: true,
            message: "users list"
        })
    } catch (error) {
        return res.status(401).json({
            sucess: false,
            message: error.message,
        })
    }

})

// Fonction pour supprimer le profil de l'utilisateur
const deleteUserProfile = asyncHandler(async (req, res) => {

    //Destructuring the userId from req.params
    const { id } = req.params

    //verifying if the user exist in the database
    const verifyUser = await userModel.findOne({ userId: id })
    try {
        if (!verifyUser) {
            return res.status(403).json({
                message: "user not found",
                success: false,
            })
        } else {
            //Deleting the user profile
            const user = await userModel.deleteOne({ userId: id })
            return res.status(200).json({
                message: "user deleted",
                success: true,
                data: user
            })
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        })
    }

})

module.exports = {
    register,
    login,
    userProfile,
    users,
    updateUserProfile,
    deleteUserProfile
}