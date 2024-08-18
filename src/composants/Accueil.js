import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <section className="accueil text-center py-5">
            <img 
        src={process.env.PUBLIC_URL + '/images/photo.jpg'} 
        alt="Votre Photo" 
        className="img-fluid rounded-circle w-25 mb-4" // 25% width, responsive
      />
      <h1 className="display-4">Bienvenue sur mon Portfolio</h1>
      <p className="lead">
        Je suis Alassane Kane, un développeur passionné par le web 
        et les technologies modernes.
      </p>
    </section>
  );
}

export default Accueil;
