// src/composants/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#accueil">Alassane Kane</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#accueil">Accueil</Nav.Link>
          <Nav.Link href="#projects">Projets</Nav.Link>
          <Nav.Link href="#competences">Compétences</Nav.Link>
          <Nav.Link href="#a-propos">À Propos</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
