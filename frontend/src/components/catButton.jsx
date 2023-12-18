import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=189f34649f00e131c0dc01a9028db68d&language=en-US'
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (categoryId) => {
    handleClose();
    // Naviguer vers la page des films avec le genre sélectionné
    navigate(`/categorypage?category=${categoryId}`);
  };

  return (
    <div>
      <Button
        id="category-button"
        aria-controls="category-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
      >
        Categories
      </Button>
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} onClick={() => handleCategorySelect(genre.id)}>
            {genre.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MyComponent;
