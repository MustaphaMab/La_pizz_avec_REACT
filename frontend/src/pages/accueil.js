import React from 'react';

import './accueil.css';


function Accueil() {
  return (
    <div className="accueil">
      {/* Bannière Parallaxe */}
      <section className="banner" style={{ backgroundImage: "url('/images/banniere.jpg')" }} >
      </section>

      <section>
      <h1>La Pizz' de Moos</h1>
      <p>Découvrez nos pizzas artisanales, préparées avec passion</p>
      </section>

      {/* Section À Propos */}
      <section className="about">
        <h2>À Propos de Nous</h2>
        <p>Chez La Pizz', nous mettons l'accent sur la qualité et l'authenticité de nos pizzas. </p>
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
          {/* Ajoute d'autres pizzas vedettes si nécessaire */}
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <h2>Nous Contacter</h2>
        <p>Vous avez une question ? Contactez-nous pour toute information supplémentaire !</p>
        <p className="contact-info">
                Téléphone : 04 42 59 65 98
                <br />
                Adresse : 123 Rue du Bon Goût, Vitrolles, France
            </p>
      </section>
    </div>
  );
}

export default Accueil;
