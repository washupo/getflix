// Middleware d'authentification
require('dotenv').config(); // load environment variables
const jwt = require('jsonwebtoken');

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
    next();
  } catch (err) {
    res.status(401).json({ message: 'Jetons invalide.' });
  }
}

module.exports = authMiddleware;


// //Gestion de l'authentification
// const { UserModel } = require('../models/User');



// // Middleware d'authentification
// function authenticate(req, res, next) {
//   // Récupérer le token depuis l'en-tête Authorization
//   const token = req.header('Authorization');

//   // Vérifier si le token existe
//   if (!token) {
//     return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
//   }

//   try {
//     // Vérifier et décoder le token
//     const decodedToken = jwt.verify(token, 'votreCleSecrete');

//     // Ajouter les données utilisateur au objet de requête pour une utilisation ultérieure
//     req.userId = decodedToken.userId;

//     // Passer à la prochaine étape du middleware
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
//   }
// }

// // Exposer les fonctions nécessaires
// module.exports = authenticate;