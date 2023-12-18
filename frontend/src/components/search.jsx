import React, { useState } from 'react'
import axios from 'axios'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

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
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

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
                maxWidth: 'unset',
            },
        },
    },
}))

const Searchbar = (props) => {
    const { updateMovies } = props
    const [error, setError] = useState('')

    const handleSearchChange = (event) => {
        const searchWord = event.target.value
        if (searchWord.trim() !== '') {
            axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&query=${searchWord}`
                )
                .then((response) => {
                    if (response.data && response.data.results) {
                        const movies = response.data.results
                        updateMovies(movies)
                    } else {
                        console.error('Aucune suggestion trouvée.')
                        updateMovies([])
                        setError(error)
                    }
                })
                .catch((error) => {
                    console.error('Erreur de recherche:', error)
                    updateMovies([])
                    setError(error)
                })
        } else {
            updateMovies([]) // Si la recherche est vide, réinitialise les suggestions
        }
    }

    return (
        <Search>
            <SearchIconWrapper>{/* ... (SearchIcon) */}</SearchIconWrapper>
            <StyledInputBase
                placeholder="Rechercher un film..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange} // Utiliser handleSearchChange pour la recherche
                style={{
                    color: 'white',
                    width: '100%',
                    maxWidth: 'unset',
                    background: '#2c2c2c',
                }} // Ajout de la largeur fixe à la barre de recherche
            />

            <div>{error && <div style={{ color: 'red' }}>{error}</div>}</div>
        </Search>
    )
}

export default Searchbar
