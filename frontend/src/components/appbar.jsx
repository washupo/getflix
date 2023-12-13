import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';
import ColorTabs from './tabs';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Ajoutez ceci s'il n'est pas déjà importé
import Film from '../components/film';



const pages = ['Menu'];
const settings = ['Profile','Logout'];

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
    marginLeft: theme.spacing(1),
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
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// const ProfileIcon = styled(AccountCircle)(({ theme }) => ({
//   marginLeft: theme.spacing(2),
// }));


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Ajout de l'état isLoading
  const [data, setData] = useState([]); // Ajout de l'état data


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchChange = (event) => {
  const searchWord = event.target.value;
  axios.get(`http://localhost:8000/movies?search=${searchWord}`)
    .then((response) => {
      if (response.data && response.data.movies) {
        const movies = response.data.movies;
        setSuggestions(movies);
      } else {
        console.error('Aucune suggestion trouvée.');
        setSuggestions([]);
      }
      setIsLoading(false); // Arrêter l'indicateur de chargement
    })
    .catch((error) => {
      console.error('Erreur de recherche:', error);
      setSuggestions([]);
      setIsLoading(false); // Arrêter l'indicateur de chargement en cas d'erreur
    });
  setIsLoading(true); // Démarre l'indicateur de chargement lors de la recherche
};

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
           <img height="100%" width="100px" src="../assets/chill.png" alt="Logo" />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <ColorTabs /> 
</Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Search>
        <SearchIconWrapper>
          {/* ... (SearchIcon) */}
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Rechercher un film..."
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchChange} // Utiliser handleSearchChange pour la recherche */}
        />

        {/* Affichage des suggestions */}
        <div>
          {suggestions.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
        <div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {/* //Affichage des films */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {data.map((film) => (
                <Film key={film.title} image={`https://image.tmdb.org/t/p/w500${film.poster_path}`} titre={film.title} />
              ))}
            </div>
          )}
        </div>
      </Search>
    
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="......" />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;