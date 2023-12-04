// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-red-400 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo ou nom du site */}
        <div className="text-white font-bold text-lg">MonSite</div>

        {/* Liens de navigation */}
        <div className="flex space-x-4">
          <a href="#" className="text-white">Accueil</a>
          <a href="#" className="text-white">À propos</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
