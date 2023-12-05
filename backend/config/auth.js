//Configuration de l'authentification)
require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.SECRET_KEY || 'defaultSecret'; // Use the JWT secret from the environment variable

function generateToken(user) {
    const payload = {
        user: {
            id: user.id, // ou un autre identifiant unique de l'utilisateur
        },
    };

    // // Fonction pour générer un token JWT
    // function generateToken(userId) {
    //     const payload = { userId };
    //     const options = { expiresIn: '1h' }; // Le token expire après 1 heure, ajustez selon vos besoins
    // }

    // Signer le jeton avec une clé secrète (à ne pas partager publiquement)
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

module.exports = generateToken;
