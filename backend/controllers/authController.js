require('dotenv').config(); // load environment variables
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

// const generateToken = require('../config/auth');

// Fonction pour l'inscription
async function inscription(req, res) {
  const { username, name, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const utilisateurExistant = await UserModel.findOne({ username });

    if (utilisateurExistant) {
      return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
    }

    // Hasher le mot de passe
    const passwordHash = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const nouvelUtilisateur = new UserModel({
      username,
      name,
      email,
      password: passwordHash,
    });

    // Enregistrer l'utilisateur dans la base de données
    await nouvelUtilisateur.save();

    // Générer un jeton JWT et le renvoyer
    const token = jwt.sign({ userId: nouvelUtilisateur._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    //const token = generateToken(nouvelUtilisateur);
    res.json({ token});
  } catch (err) {
    console.error('Erreur lors de l\'inscription :', err);

    if (err.code === 11000) {
      return res.status(400).json({ message: 'L\'email est déjà utilisé.' });
    }

    res.status(500).send('Erreur serveur' + err.message);
  }
}

// Fonction pour la connexion
async function connexion(req, res) {
  const { username, password } = req.body;
  

  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const trimmedUsername = username.trim();
    const utilisateur = await UserModel.findOne({ username: { $regex: new RegExp(trimmedUsername, 'i') } });

    if (!utilisateur) {
      return res.status(401).json({ message: 'Utilisateur non existant.' });
    }

    // Vérifier si le mot de passe correspond
    const motDePasseMatch = await bcrypt.compare(password, utilisateur.password);

    if (!motDePasseMatch) {
      return res.status(401).json({ message: 'Mauvais mot de passe.' });
    }

    // Générer un jeton JWT et le renvoyer
    const token = jwt.sign({ userId: utilisateur._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    //    const token = generateToken(utilisateur);
    res.json({ token });
  } catch (err) {
    console.error('Erreur lors de la connexion :', err);
    res.status(500).send('Erreur serveur');
  }
}

// Fonction pour la déconnexion (exemple simple sans gestion de token côté client)
function deconnexion(req, res) {
  res.json({ message: 'Déconnexion réussie' });
}

module.exports = { inscription, connexion, deconnexion };

