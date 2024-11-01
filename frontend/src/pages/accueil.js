import React from 'react';
import './accueil.css';

function Accueil() {
  return (
    <div className="accueil">
      {/* Bannière Parallaxe */}
      <section className="banner" style={{ backgroundImage: "url('/images/banniere.jpg')" }}>
        <div className="banner-overlay">
          <h1>Bienvenue à La Pizz'</h1>
          <p>Découvrez nos pizzas artisanales, préparées avec passion</p>
          <button className="cta-button">Voir le menu</button>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="about">
        <h2>À Propos de Nous</h2>
        <p>Chez La Pizz', nous mettons l'accent sur la qualité et l'authenticité de nos pizzas.</p>
        <p>Nos ingrédients sont soigneusement sélectionnés pour vous offrir la meilleure expérience culinaire.</p>
      </section>

      {/* Section Pizzas Vedettes */}
      <section className="featured-pizzas">
        <h2>Pizzas Vedettes</h2>
        <div className="pizza-cards">
          <div className="pizza-card">
            <img src="/images/pizza1.jpg" alt="Pizza Margherita" />
            <h3>Pizza Margherita</h3>
            <p>Tomate, mozzarella, basilic</p>
          </div>
          <div className="pizza-card">
            <img src="/images/pizza2.jpg" alt="Pizza Saumon" />
            <h3>Pizza Saumon</h3>
            <p>Crème, saumon, mozzarella</p>
          </div>
          <div className="pizza-card">
            <img src="/images/pizza3.jpg" alt="Pizza Végétarienne" />
            <h3>Pizza Végétarienne</h3>
            <p>Tomate, poivron, oignon, champignon, olives</p>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section className="gallery">
        <h2>Galerie de Photos</h2>
        <p>Explorez notre galerie pour voir nos délicieuses créations !</p>
        <div className="gallery-grid">
          <img src="/images/gallery1.jpg" alt="Pizza en préparation" />
          <img src="/images/gallery2.jpg" alt="Table de clients heureux" />
          <img src="/images/gallery3.jpg" alt="Chef en action" />
          <img src="/images/gallery4.jpg" alt="Détails d'une pizza" />
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials">
        <h2>Avis de nos Clients</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>“Les meilleures pizzas que j'ai jamais goûtées ! Le service est impeccable.”</p>
            <h4>Marie L.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Une ambiance agréable et des pizzas de qualité. Je recommande vivement !”</p>
            <h4>Julien P.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Les ingrédients sont frais et les saveurs incroyables. Parfait pour une soirée entre amis.”</p>
            <h4>Sophie K.</h4>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="team">
        <h2>Rencontrez notre Équipe</h2>
        <p>Notre équipe passionnée travaille dur pour offrir les meilleures pizzas à nos clients.</p>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/chef.jpg" alt="Chef" />
            <h3>Chef Giovanni</h3>
            <p>Maître pizzaiolo avec 20 ans d'expérience.</p>
          </div>
          <div className="team-member">
            <img src="/images/manager.jpg" alt="Manager" />
            <h3>Lisa Martin</h3>
            <p>Responsable de salle et experte en service client.</p>
          </div>
          <div className="team-member">
            <img src="/images/delivery.jpg" alt="Livreur" />
            <h3>Paul Dupont</h3>
            <p>Livreur rapide et toujours souriant.</p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <h2>Nous Contacter</h2>
        <p>Vous avez une question ? Contactez-nous pour toute information supplémentaire !</p>
        <p className="contact-info">
          Téléphone : 04 42 59 65 98<br />
          Adresse : 123 Rue du Bon Goût, Vitrolles, France
        </p>
      </section>
    </div>
  );
}

export default Accueil;
  