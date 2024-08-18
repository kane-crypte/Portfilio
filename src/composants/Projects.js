// src/composants/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Mes Projets</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card mb-4 shadow-sm">
              <img src="/images/project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Projet 1</h5>
                <p className="card-text">Description du projet 1.</p>
              </div>
            </div>
          </div>
          {/* Ajoutez d'autres projets ici */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
