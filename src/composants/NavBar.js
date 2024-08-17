// src/composants/NavBar.js
import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Mon Portfolio
        </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        
        <li onClick={closeMenu}>
          <a href="#accueil">Accueil</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#projects">Projets</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#competences">Compétences</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#apropos">À propos</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
