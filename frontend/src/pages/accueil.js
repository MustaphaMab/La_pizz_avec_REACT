import React from 'react';


import './accueil.css';

function Accueil() {
  return (
    <div className="accueil">
      <section className="banner" style={{ backgroundImage: "url('/images/banniere.jpg')" }}>
        <div className="banner-overlay">
          <h1 className="main-title">LA PIZZ'A MOOS</h1>
          <h2>04 43 59 65 98</h2>
        </div>
      </section>

      <section className="about">
        <p><strong>LIVRAISON GRATUITE</strong></p>
        <p><strong>CUITES AU FEU DE BOIS</strong></p>
      </section>

      <div className="section-divider"></div> {/* Séparation moderne */}

      <section className="featured-pizzas">
        <h2>NOS PIZZAS VEDETTES</h2>
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

      <div className="section-divider"></div> {/* Séparation moderne */}

      <section className="gallery">
        <h2>CONVIVIALITE ET BONNE AMBIANCE !</h2>
        <div className="gallery-grid">
          {['/images/galerie1.jpg', '/images/galerie2.jpg', '/images/galerie3.jpg', '/images/galerie4.jpg'].map((img, idx) => (
            <img src={img} alt={`Gallery ${idx + 1}`} key={idx} />
          ))}
        </div>
      </section>

      <div className="section-divider"></div> {/* Séparation moderne */}

      <section className="testimonials">
        <h2 className="testimonial-title">Ce que nos clients disent</h2>
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

      <div className="section-divider"></div> {/* Séparation moderne */}

      <section className="team">
        <h2>Rencontrez notre Équipe</h2>
        <p>Notre équipe dédiée travaille avec passion pour vous offrir le meilleur service.</p>
        <div className="team-members">
          {[
            { image: '/images/maitre_pizzaiolo.jpg', name: 'Chef Giovanni', role: 'Maître pizzaiolo avec 20 ans d\'expérience' },
            { image: '/images/chef_salle.jpg', name: 'Lisa Martin', role: 'Responsable de salle' },
            { image: '/images/serveur_restaurant.png', name: 'Paul Dupont', role: 'Livreur rapide et toujours souriant' },
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div> {/* Séparation moderne */}

    </div>
  );
}



export default Accueil;