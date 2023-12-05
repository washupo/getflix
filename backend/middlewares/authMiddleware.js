// Middleware d'authentification
require('dotenv').config(); // load environment variables
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/User');

const jwtSecret = process.env.SECRET_KEY || 'defaultSecret'; // Use the JWT secret from the environment variable

function authMiddleware(req, res, next) {
  // Récupérer le jeton d'authentification depuis les en-têtes de la requête
  const token = req.header('Authorization');

  // Vérifier si le jeton est présent
  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Jeton manquant.' });
  }

  try {
    // Vérifier et décoder le jeton
    const decoded = jwt.verify(token, jwtSecret);

    // Ajouter l'utilisateur décodé à la requête pour une utilisation ultérieure
    req.user = decoded.user;
    // Passer à la prochaine étape du middleware
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Accès non autorisé. Jetons invalide.' });
  }
}

// Exposer les fonctions nécessaires
module.exports = authMiddleware;
