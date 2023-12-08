//Importing Libraries 
require("dotenv").config();
const app = require(".")

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


// Importing the development support form utils/development.js 
const { printConsole } = require("./utils/development");

/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number 
  ===============================================================
*/
const PORT = process.env.PORT || 3000

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
    printConsole(
        { data: `Server is live @${PORT}` },
        { printLocation: "index.js:28" },
        {
            bgColor: "bgGreen",
            textColor: "black",
            underline: true,
        }
    )
})