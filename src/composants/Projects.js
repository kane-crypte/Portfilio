import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects py-5">
      <div className="container">
        <h2 className="text-center mb-4">Mes Projets</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={process.env.PUBLIC_URL + '/images/project1.jpg'} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Projet 1</h5>
                <p className="card-text">Description du projet 1.</p>
              </div>
            </div>
            <div className="card mb-4">
              <img src={process.env.PUBLIC_URL + '/images/project1.jpg'} className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Projet 2</h5>
                <p className="card-text">Description du projet 1.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
