import React from 'react';
import './accueil.css';
import { Helmet } from 'react-helmet';

function Accueil() {
  return (
    <div className="accueil">
      {/* SEO: Balises pour les moteurs de recherche */}
      <Helmet>
        <title>La Pizz'A Moos - Pizzas Authentiques à Marseille</title>
        <meta name="description" content="Découvrez La Pizz'A Moos, votre pizzeria à Marseille avec des pizzas cuites au feu de bois, livraison gratuite et une ambiance conviviale." />
        <meta property="og:title" content="La Pizz'A Moos - Pizzas Authentiques à Marseille" />
        <meta property="og:description" content="Venez goûter nos pizzas vedettes cuites au feu de bois à Marseille. Livraison gratuite !" />
        <meta property="og:image" content="/images/banniere.jpg" />
        <meta property="og:url" content="https://www.la-pizza-moos.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <header>
        {/* Bannière */}
        <section className="banner" style={{ backgroundImage: "url('/images/banniere.jpg')" }}>
          <div className="banner-overlay">
            <h1 className="main-title">LA PIZZ'A MOOS</h1>
            <h2>04 91 12 34 560</h2>
          </div>
        </section>
      </header>

      <main>
        {/* Section "À propos" */}
        <section className="about">
          <p><strong>LIVRAISON GRATUITE DANS MARSEILLE</strong></p>
          <p><strong>CUITES AU FEU DE BOIS POUR UN GOÛT EXCEPTIONNEL</strong></p>
          <p><strong>UNIQUE ET AUTHENTIQUE À MARSEILLE</strong></p>
        </section>

        {/* Pizzas vedettes */}
        <section className="featured-pizzas">
          <h2>NOS PIZZAS VEDETTES</h2>
          <div className="pizza-cards">
            {[
              { image: '/images/pizza1.jpg', title: 'Pizza Margherita', description: 'Tomate, mozzarella, basilic' },
              { image: '/images/pizza2.jpg', title: 'Pizza Saumon', description: 'Crème, saumon, mozzarella' },
              { image: '/images/pizza3.jpg', title: 'Pizza Végétarienne', description: 'Poivrons, champignons, olives' },
            ].map((pizza, index) => (
              <div className="pizza-card" key={index}>
                <img src={pizza.image} alt={`Photo de ${pizza.title}`} loading="lazy" />
                <h3>{pizza.title}</h3>
                <p>{pizza.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galerie */}
        <section className="gallery">
          <h2>CONVIVIALITÉ ET BONNE AMBIANCE !</h2>
          <div className="gallery-grid">
            {['/images/galerie1.jpg', '/images/galerie2.jpg', '/images/galerie3.jpg', '/images/galerie4.jpg'].map((img, idx) => (
              <img src={img} alt={`Ambiance chaleureuse dans notre restaurant ${idx + 1}`} key={idx} loading="lazy" />
            ))}
          </div>
        </section>

        {/* Témoignages */}
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

        {/* Équipe */}
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
                <img src={member.image} alt={`Photo de ${member.name}`} loading="lazy" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 La Pizz'A Moos - Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Accueil;
