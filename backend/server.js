require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(cors());

// Middleware pour parser les données JSON dans les requêtes
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connecter à la base de données MongoDB
const dbConfig = require('./config/db');
mongoose.connect(dbConfig.url).then(() => {
  const PORT = process.env.PORT || 8000
  // Démarrer le serveur
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'écoute sur le port ${PORT}`);
  })
}).catch(err => {
  console.log(err);
});

