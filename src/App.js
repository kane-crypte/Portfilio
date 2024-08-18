// src/App.js
import React from 'react';
import './App.css';
import NavBar from './composants/NavBar';
import Accueil from './composants/Accueil';
import Contact from './composants/Contact';
import Projects from './composants/Projects';
import Competences from './composants/Competences';
import APropos from './composants/APropos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Accueil />
      <Projects />
      <Competences />
      <Contact />
      <APropos />
    </div>
  );
}

export default App;
