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

// Fetch popular movies from TMDB
const fetchMovies = async (page) => {
  try {
    let result;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`
      )
      .then((response) => {
        result = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Routes
app.use('/api/auth', authRoutes);

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

