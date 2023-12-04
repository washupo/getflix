const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/schemas');
const { User, Content } = require('./models/schemas');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 

const app = express();
const port = 3000; // Choisis le port que tu préfères, par exemple 3000

mongoose.connect('mongodb+srv://washupo:Tu6q0SYQcKxsmLBR@chillhome.x0wyt0m.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));

db.once('open', () => {
  console.log('Connecté à la base de données MongoDB');
});

// Middleware pour parser les données JSON dans les requêtes
app.use(express.json());
app.use(bodyParser.json())

// Route pour enregistrer un nouvel utilisateur
app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
  try {
    
    // Créer une nouvelle instance du modèle User
    const newUser = new User({ username, email, password: hashedPassword });

    // Enregistrer l'utilisateur dans la base de données
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
  }
});

// Route pour se connecter

// Exemple de middleware pour vérifier le token

// Route pour protéger le token

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
})