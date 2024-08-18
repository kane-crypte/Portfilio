import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contactez-moi</h2>
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" placeholder="Votre nom" />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Votre email" />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
