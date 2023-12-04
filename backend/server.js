require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/schemas');
const { User, Content } = require('./models/schemas');
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

// Route pour enregistrer un nouvel utilisateur
app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
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
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send({error: 'Utilisateur non trouvé'});
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send('Mot de passe incorrect');
    }

    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
})

// Exemple de middleware pour vérifier le token
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  try {
    if (!token) {
      res.status(403).json({ error: 'Token manquant' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Token invalide' });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
}


// Route pour protéger le token
app.get('/protected', verifyToken, (req, res) => {
  res.send('Vous avez accès à cette ressource');
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
})