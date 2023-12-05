require('dotenv').config(); // load environment variables
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

// Fonction pour l'inscription
async function inscription(req, res) {
  const { username, name, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const utilisateurExistant = await UserModel.findOne({ email });

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
    const token = jwt.sign({ userId: nouvelUtilisateur._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Erreur lors de l\'inscription :', err);
    res.status(500).send('Erreur serveur');
  }
}

// Fonction pour la connexion
async function connexion(req, res) {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const utilisateur = await UserModel.findOne({ email });

    if (!utilisateur) {
      return res.status(401).json({ message: 'Informations d\'identification invalides.' });
    }

    // Vérifier si le mot de passe correspond
    const motDePasseMatch = await bcrypt.compare(password, utilisateur.password);

    if (!motDePasseMatch) {
      return res.status(401).json({ message: 'Informations d\'identification invalides.' });
    }

    // Générer un jeton JWT et le renvoyer
    const token = jwt.sign({ userId: utilisateur._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
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
