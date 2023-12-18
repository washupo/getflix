import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviePage from './MoviePage';
import CategoryPage from './CategoryPage'; // Importe la nouvelle page CategoryPage

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviePage />} />
      <Route path="/moviepage" element={<MoviePage />} />
      <Route path="/categorypage" element={<CategoryPage />} /> {/* Nouvelle route pour CategoryPage */}
    </Routes>
  );
};

export default Home;
