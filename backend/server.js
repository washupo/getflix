require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const fetch = require('node-fetch');
// Utilisation d'Axios pour effectuer des requêtes HTTP

app.use(cors());

// Middleware pour parser les données JSON dans les requêtes
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Fetch popular movies from TMDB
const fetchMovies = async (page) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlmMzQ2NDlmMDBlMTMxYzBkYzAxYTkwMjhkYjY4ZCIsInN1YiI6IjY1NzA4NTllNzlhMWMzMDBlMThlN2U2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6WbmzdN4CKbAjO7tpCS9dGmrmy2stUwRFDmxaPW1MbA' // Remplace par ton jeton JWT
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
// Routes

app.get('/movies', async (req, res, next) => {
  try {
    const { page } = req.query;
    const data = await fetchMovies(page);

    return res.status(200).json({
      status: 200,
      message: `${data.length} movies found`,
      data,
    });
  } catch (err) {
    return next(err);
  }
});

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

