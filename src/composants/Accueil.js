import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <section className="accueil">
      <img src="/images/photo.jpg" alt="Votre Photo" className="profile-photo" />
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>
        Je suis Alassane Kane, un développeur passionné par le web 
        et les technologies modernes.
      </p>
    </section>
  );
}

export default Accueil;
