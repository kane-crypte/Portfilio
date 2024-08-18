// src/composants/Accueil.js
import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <section id="accueil" className="accueil text-center d-flex flex-column align-items-center justify-content-center">
      <img src="/images/photo.jpg" alt="Alassane Kane" className="profile-photo rounded-circle mb-4" />
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Je suis Alassane Kane, un développeur passionné par le web et les technologies modernes.</p>
    </section>
  );
}

export default Accueil;
