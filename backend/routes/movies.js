const fetch = require("node-fetch");
const cors = require("cors");

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=189f34649f00e131c0dc01a9028db68d&language=en-US'
      );
      const data = await response.json();
    return data.genres;
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

const fetchMoviesByGenre = async (category) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=189f34649f00e131c0dc01a9028db68d&language=en-US&sort_by=release_date.desc&page=1&with_genres=${category}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

// Search
const searchMovies = async (title) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_API_KEY}&query=${title}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlmMzQ2NDlmMDBlMTMxYzBkYzAxYTkwMjhkYjY4ZCIsInN1YiI6IjY1NzA4NTllNzlhMWMzMDBlMThlN2U2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6WbmzdN4CKbAjO7tpCS9dGmrmy2stUwRFDmxaPW1MbA", // Remplace par ton jeton JWT
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch popular movies from TMDB
const fetchMovies = async (page = 1) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlmMzQ2NDlmMDBlMTMxYzBkYzAxYTkwMjhkYjY4ZCIsInN1YiI6IjY1NzA4NTllNzlhMWMzMDBlMThlN2U2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6WbmzdN4CKbAjO7tpCS9dGmrmy2stUwRFDmxaPW1MbA", // Remplace par ton jeton JWT
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch popular movies from TMDB
const fetchMovie = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_DB_API_KEY}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlmMzQ2NDlmMDBlMTMxYzBkYzAxYTkwMjhkYjY4ZCIsInN1YiI6IjY1NzA4NTllNzlhMWMzMDBlMThlN2U2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6WbmzdN4CKbAjO7tpCS9dGmrmy2stUwRFDmxaPW1MbA", // Remplace par ton jeton JWT
      },
    };

    const response = await fetch(url, options);
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch popular movies from TMDB
const fetchTrailer = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.MOVIE_DB_API_KEY}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlmMzQ2NDlmMDBlMTMxYzBkYzAxYTkwMjhkYjY4ZCIsInN1YiI6IjY1NzA4NTllNzlhMWMzMDBlMThlN2U2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6WbmzdN4CKbAjO7tpCS9dGmrmy2stUwRFDmxaPW1MbA", // Remplace par ton jeton JWT
      },
    };

    const response = await fetch(url, options);
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};

let corsOptions = {
  origin: "*",
};

module.exports = function (app) {
  app.get(
    "/movie",
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const data = await fetchMovie(id);

        return res.status(200).json({
          status: 200,
          message: data.message,
          data,
        });
      } catch (err) {
        return next(err);
      }
    },
    cors(corsOptions)
  );
  app.get(
    "/movie/:id/videos",
    async (req, res, next) => {
      try {
        // const { id } = req.query;
        const movieId = parseInt(req.params.id);
        const data = await fetchTrailer(movieId);

        return res.status(200).json({
          status: 200,
          message: data.message,
          data,
        });
      } catch (err) {
        return next(err);
      }
    },
    cors(corsOptions)
  );
  app.get(
    "/movies",
    async (req, res, next) => {
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
    },
    cors(corsOptions)
  );
  app.get(
    "/search",
    async (req, res, next) => {
      try {
        const { title } = req.query;
        const data = await searchMovies(title);

        return res.status(200).json({
          status: 200,
          message: `${data.length} movies found`,
          data,
        });
      } catch (err) {
        return next(err);
      }
    },
    cors(corsOptions)
  );
  app.get(
    "/genres",
    async (req, res, next) => {
      try {
        const data = await fetchGenres();

        return res.status(200).json({
          status: 200,
          message: `${data.length} movies found`,
          data,
        });
      } catch (err) {
        return next(err);
      }
    },
    cors(corsOptions)
  );
  app.get(
    "/genre",
    async (req, res, next) => {
      try {
        const { categoryId } = req.query;
        const data = await fetchMoviesByGenre(categoryId);

        return res.status(200).json({
          status: 200,
          message: `${data.length} movies found`,
          data,
        });
      } catch (err) {
        return next(err);
      }
    },
    cors(corsOptions)
  );
};
