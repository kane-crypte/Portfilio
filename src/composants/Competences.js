// src/composants/Competences.js
import React from 'react';
import './Competences.css';

const Competences = () => {
  return (
    <section id="competences" className="competences py-5">
      <div className="container">
        <h2 className="text-center mb-4">Mes Compétences</h2>
        <ul className="list-unstyled text-center">
          <li>Compétence 1</li>
          <li>Compétence 2</li>
          <li>Compétence 3</li>
        </ul>
      </div>
    </section>
  );
};

export default Competences;
