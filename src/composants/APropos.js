// src/composants/APropos.js
import React from 'react';
import './APropos.css';

const APropos = () => {
  return (
    <section id="a-propos" className="a-propos py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">À Propos de Moi</h2>
        <p className="text-center">Voici une brève description de mon parcours et de mes expériences.</p>
      </div>
    </section>
  );
};

export default APropos;
