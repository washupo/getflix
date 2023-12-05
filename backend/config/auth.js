//Configuration de l'authentification)
const jwt = require('jsonwebtoken');

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
    return jwt.sign(payload, 'votreSecretJWT', { expiresIn: '1h' });
}

module.exports = generateToken;
