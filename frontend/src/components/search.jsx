

import React, { useEffect, useState } from 'react';
import Film from '../components/film';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '12ch', // Largeur fixe initiale
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        '&:focus': {
          width: '20ch', // Largeur étendue en focus
          maxWidth: 'unset'
        },
      },
    },
  }));

const Searchbar = (props) => {
    const { updateMovies } = props
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Ajout de l'état isLoading

    // const handleSuggestionClick = (movie) => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${MOVIE_DB_API_KEY}`)
    //       .then((response) => {
    //         if (response.data) {
    //           setData([response.data]); // Mettre à jour les données avec le film sélectionné
    //           setSuggestions([]); // Cacher les suggestions après la sélection
    //           updateMovies(data); // Mettre à jour les films dans Home avec le film sélectionné
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Erreur lors de la récupération du film:', error);
    //         setSuggestions([]);
    //         setError(error)
    //       });
    //   };

    const MOVIE_DB_API_KEY = '189f34649f00e131c0dc01a9028db68d'; // Remplacez par votre clé d'API TMDb

    const handleSearchChange = (event) => {
      const searchWord = event.target.value;
      if (searchWord.trim() !== '') {
        setIsLoading(true);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&query=${searchWord}`)
          .then((response) => {
            if (response.data && response.data.results) {
              const movies = response.data.results;
              updateMovies(movies)
              // setSuggestions(movies);
            } else {
              console.error('Aucune suggestion trouvée.');
              updateMovies([])
              // setSuggestions([]);
            }
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Erreur de recherche:', error);
            updateMovies([])
            // setSuggestions([]);
            setIsLoading(false);
          });
      } else {
        updateMovies([]);  // Si la recherche est vide, réinitialise les suggestions
      }
    };

  return (
    <Search>
        <SearchIconWrapper> 
          {/* ... (SearchIcon) */}
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Rechercher un film..."
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchChange} // Utiliser handleSearchChange pour la recherche
            style={{ color: 'white', width: '100%', maxWidth: 'unset', background: '#2c2c2c' }} // Ajout de la largeur fixe à la barre de recherche
            />


        {/* Affichage des suggestions */}
        {/* <div>
          {suggestions.map((movie) => (
            <div key={movie.id} onClick={() => handleSuggestionClick(movie)}>{movie.title}</div>
           ))}
        </div> */}
        <div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {/* //Affichage des films */}
          {/* {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {data.map((film) => (
                <Film key={film.title} image={`https://image.tmdb.org/t/p/w500${film.poster_path}`} titre={film.title} />
              ))}
            </div>
          )} */}
        </div>
      </Search>
  )
};

export default Searchbar;