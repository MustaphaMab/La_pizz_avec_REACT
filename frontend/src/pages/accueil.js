import React from 'react';
import './accueil.css';

function Accueil() {
  return (
    <div className="accueil">
      {/* Bannière Parallaxe */}
      <section className="banner" style={{ backgroundImage: "url('/images/banniere.jpg')" }}>
        <div className="banner-overlay">
          <h1>Bienvenue à La Pizz'</h1>
          <p>Des pizzas artisanales préparées avec amour et passion</p>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="about">
        <h2>À Propos de Nous</h2>
        <p>
          Chez <strong>La Pizz'</strong>, nous valorisons la qualité et l’authenticité.</p> 
          <p>Nos ingrédients sont sélectionnés pour vous offrir une expérience culinaire unique et mémorable.</p>
        <div className="about-highlight">
          <p>Des ingrédients frais et locaux pour des pizzas authentiques.</p>
        </div>
      </section>

      {/* Section Pizzas Vedettes */}
      <section className="featured-pizzas">
        <h2>Nos Pizzas Vedettes</h2>
        <div className="pizza-cards">
          {[
            { image: '/images/pizza1.jpg', title: 'Pizza Margherita', description: 'Tomate, mozzarella, basilic' },
            { image: '/images/pizza2.jpg', title: 'Pizza Saumon', description: 'Crème, saumon, mozzarella' },
            { image: '/images/pizza3.jpg', title: 'Pizza Végétarienne', description: 'Poivrons, champignons, olives' },
          ].map((pizza, index) => (
            <div className="pizza-card" key={index}>
              <img src={pizza.image} alt={pizza.title} />
              <h3>{pizza.title}</h3>
              <p>{pizza.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Galerie */}
      <section className="gallery">
        <h2>Galerie de Photos</h2>
        <p>Découvrez nos pizzas et notre ambiance conviviale en images.</p>
        <div className="gallery-grid">
          {['/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg', '/images/gallery4.jpg'].map((img, idx) => (
            <img src={img} alt={`Gallery ${idx + 1}`} key={idx} />
          ))}
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials">
        <h2>Ce que nos clients disent</h2>
        <div className="testimonial-cards">
          {[
            { text: "“Les meilleures pizzas que j'ai jamais goûtées !”", author: 'Marie L.' },
            { text: "“Une ambiance agréable et des pizzas de qualité.”", author: 'Julien P.' },
            { text: "“Les saveurs sont incroyables, parfait pour une soirée entre amis.”", author: 'Sophie K.' },
          ].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p>{testimonial.text}</p>
              <h4>{testimonial.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Section Équipe */}
      <section className="team">
        <h2>Rencontrez notre Équipe</h2>
        <p>Notre équipe dédiée travaille avec passion pour vous offrir le meilleur service.</p>
        <div className="team-members">
          {[
            { image: '/images/chef.jpg', name: 'Chef Giovanni', role: 'Maître pizzaiolo avec 20 ans d\'expérience' },
            { image: '/images/manager.jpg', name: 'Lisa Martin', role: 'Responsable de salle' },
            { image: '/images/delivery.jpg', name: 'Paul Dupont', role: 'Livreur rapide et toujours souriant' },
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <h2>Nous Contacter</h2>
        <p>Besoin d’informations supplémentaires ? N'hésitez pas à nous joindre !</p>
        <p className="contact-info">
          Téléphone : 04 43 59 65 98<br />
          Adresse : 123 Rue du Bon Goût, Vitrolles, France
        </p>
      </section>
    </div>
  );
}

export default Accueil;
