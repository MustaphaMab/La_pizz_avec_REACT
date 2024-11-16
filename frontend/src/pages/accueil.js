import React from "react";
import { Link } from "react-router-dom";
import "./Accueil.css"; // Import du fichier CSS associé

const Accueil = () => {
  return (
    <div className="accueil-container">
      {/* Section de la bannière principale */}
      <header className="banniere">
        <div className="overlay">
          <h1>Bienvenue chez La Pizz'a Moos</h1>
          <p>Des pizzas artisanales faites avec amour à Marseille</p>
          <Link to="/menu" className="btn-primary">
            Voir notre menu
          </Link>
        </div>
      </header>

      {/* Section sur les points forts */}
      <section className="points-forts">
        <h2>Pourquoi choisir La Pizz'a Moos ?</h2>
        <div className="features">
          <div className="feature">
            <img src="/images/ingredients-frais.jpg" alt="Ingrédients frais" />
            <h3>Ingrédients frais</h3>
            <p>Nos pizzas sont préparées avec les meilleurs ingrédients locaux.</p>
          </div>
          <div className="feature">
            <img src="/images/livraison-rapide.jpg" alt="Livraison rapide" />
            <h3>Livraison rapide</h3>
            <p>Profitez de nos pizzas artisanales directement chez vous en moins de 30 minutes.</p>
          </div>
          <div className="feature">
            <img src="/images/menu-varie.jpg" alt="Menu varié" />
            <h3>Menu varié</h3>
            <p>Des pizzas classiques aux créations originales, il y en a pour tous les goûts.</p>
          </div>
        </div>
      </section>

      {/* Section de l'équipe */}
      <section className="equipe">
        <h2>Rencontrez notre équipe</h2>
        <div className="membres">
          <div className="membre">
            <img src="/images/chef-pizza.jpg" alt="Chef Pizzaïolo" />
            <h3>Marco Rossi</h3>
            <p>Notre maître pizzaïolo avec 15 ans d'expérience dans la création de pizzas authentiques.</p>
          </div>
          <div className="membre">
            <img src="/images/serveur.jpg" alt="Serveur" />
            <h3>Clara Dupont</h3>
            <p>Clara s'assure que chaque client est accueilli avec un sourire chaleureux et un service exceptionnel.</p>
          </div>
          <div className="membre">
            <img src="/images/livreur.jpg" alt="Livreur" />
            <h3>Amine Khelifa</h3>
            <p>Amine est notre super livreur, toujours prêt à livrer vos pizzas en un temps record.</p>
          </div>
        </div>
      </section>

      {/* Section des témoignages */}
      <section className="temoignages">
        <h2>Ce que disent nos clients</h2>
        <div className="avis">
          <blockquote>
            "La meilleure pizzeria de Marseille ! Les ingrédients sont toujours frais et le goût est incroyable."
            <span>- Sarah L.</span>
          </blockquote>
          <blockquote>
            "Livraison rapide et service au top. Je commande toutes les semaines, jamais déçu !"
            <span>- Jean P.</span>
          </blockquote>
        </div>
      </section>

      {/* Section appel à l'action */}
      <section className="cta">
        <h2>Prêt à goûter à nos pizzas ?</h2>
        <Link to="/contact" className="btn-secondary">
          Contactez-nous
        </Link>
      </section>
    </div>
  );
};

export default Accueil;
