// src/composants/Projects.js
import React from 'react';
import './Projects.css'; // Import du fichier CSS

const Projects = () => {
  const projectList = [
    { name: 'Projet 1', description: 'Description du projet 1', image: 'url_de_l_image' },
    { name: 'Projet 2', description: 'Description du projet 2', image: 'url_de_l_image' }
    // Ajoutez plus de projets ici
  ];

  return (
    <section id="projects">
      <h1>Mes Projets</h1>
      <div>
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
