const express = require("express");
const router = express.Router();

//Imporing the authvalidation functions for login and register 
const {  regsiterValidation, loginValidation} = require("../middlewares/authvalidationMiddleware")
//Importing functions from auth controller
const { register, login, userProfile, users, updateUserProfile, deleteUserProfile} = require("../controllers/authController")
//Importing the JWT verifyer from auth middleware 
const verifyToken = require("../middlewares/authMiddleware") 

//Register route with register validation 
router.post("/register", regsiterValidation, register);
//Login route with register validation
router.post("/login", loginValidation, login);
//Profile route with register validation
router.get("/profile/:id", verifyToken, userProfile);
//all users route with 
router.get("/users", verifyToken, users);
//update profile route
router.put("/profile/:id", verifyToken, updateUserProfile);
//delete profile route
router.delete("/profile/:id", verifyToken, deleteUserProfile);

module.exports = router;