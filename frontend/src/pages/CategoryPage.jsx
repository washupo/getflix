import React, { useState, useEffect } from 'react';
import { Container, ImageList, ImageListItem } from '@mui/material';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    setSelectedCategory(category);
    if (category) {
      fetchMovies(category);
    }
  }, [location.search]);

  const fetchMovies = async (category) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=189f34649f00e131c0dc01a9028db68d&language=en-US&sort_by=release_date.desc&page=1&with_genres=${category}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <Container sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {movies.map((item) => (
            <ImageListItem key={item.id}>
              <img
                height="300px"
                key={item.id}
                srcSet={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};

export default CategoryPage;
