import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './NavBar.css';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#accueil">Mon Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#accueil" className="me-3  text-white border border-light rounded" onClick={() => setExpanded(false)}>Accueil</Nav.Link>
          <Nav.Link href="#projects" className="me-3  text-white border border-light rounded" onClick={() => setExpanded(false)}>Projets</Nav.Link>
          <Nav.Link href="#competences" className="me-3 text-white border border-light rounded" onClick={() => setExpanded(false)}>Compétences</Nav.Link>
          <Nav.Link href="#apropos" className="me-3  text-white border border-light rounded" onClick={() => setExpanded(false)}>À propos</Nav.Link>
          <Nav.Link href="#contact" className="me-3  text-white border border-light rounded" onClick={() => setExpanded(false)}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
