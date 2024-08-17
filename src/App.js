// src/App.js
import React from 'react';
import './App.css';
import NavBar from './composants/NavBar';
import Accueil from './composants/Accueil';
import Projects from './composants/Projects';
import Competences from './composants/Competences';
import APropos from './composants/APropos';
import Contact from './composants/Contact';

// Exemple dans App.js pour les sections
function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="accueil">
        <Accueil />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="competences">
        <Competences />
      </section>
      <section id="apropos">
        <APropos />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}


export default App;
