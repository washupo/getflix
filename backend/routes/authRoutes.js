const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

// Routes d'authentification (inscription, déconnexion, etc.)

// Route pour l'inscription
router.post('/signup', validationMiddleware, authController.inscription);

// Route pour la connexion
router.post('/login', validationMiddleware, authController.connexion);

// Route pour la déconnexion (exige un jeton valide)
router.post('/logout', authMiddleware, authController.deconnexion);


module.exports = router;
