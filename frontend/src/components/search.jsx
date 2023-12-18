import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { searchMovies } from '../api'

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

    const handleSearchChange = (event) => {
        const searchWord = event.target.value
        if (searchWord.trim() !== '') {
            searchMovies(searchWord, updateMovies)
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
        </Search>
    )
}

export default Searchbar
