const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

// const bcrypt = require('bcryptjs');
// const UserModel = require('../models/User');
// const generateToken = require('../config/auth');

// Route pour la connexion
// router.post('/login', async (req, res) => {
//   const { email, motDePasse } = req.body;

//   try {
//     // Vérifier si l'utilisateur existe dans la base de données
//     const utilisateur = await UserModel.findOne({ email });

//     if (!utilisateur) {
//       return res.status(401).json({ message: 'Informations d\'identification invalides.' });
//     }

//     // Vérifier si le mot de passe correspond
//     const motDePasseMatch = await bcrypt.compare(motDePasse, utilisateur.motDePasse);

//     if (!motDePasseMatch) {
//       return res.status(401).json({ message: 'Informations d\'identification invalides.' });
//     }

//     // Générer un jeton JWT et le renvoyer
//     const token = generateToken(utilisateur);
//     res.json({ token });
//   } catch (err) {
//     console.error('Erreur lors de la connexion :', err);
//     res.status(500).send('Erreur serveur');
//   }
// });


// Routes d'authentification (inscription, déconnexion, etc.)

// Route pour l'inscription
router.post('/signup', validationMiddleware, authController.inscription);

// Route pour la connexion
router.post('/login', validationMiddleware, authController.connexion);

// Route pour la déconnexion (exige un jeton valide)
router.post('/logout', authMiddleware, authController.deconnexion);


module.exports = router;
