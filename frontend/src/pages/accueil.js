import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Styles nécessaires pour AOS
import "./accueil.css"; // Assurez-vous d'avoir un fichier CSS pour le style
import { Link } from 'react-router-dom';

const Accueil = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Meta Tags pour le SEO */}
      <head>
        <meta
          name="keywords"
          content="pizzeria, pizza, Marseille, livraison gratuite, feu de bois, pizzas authentiques"
        />
        <meta name="author" content="La Pizz'A Moos" />
        <meta
          name="description"
          content="La Pizz'A Moos - Pizzeria à Marseille, livraison gratuite et pizzas cuites au feu de bois."
        />
        <meta
          property="og:title"
          content="La Pizz'A Moos - Pizzeria à Marseille"
        />
        <meta
          property="og:description"
          content="Savourez nos pizzas authentiques cuites au feu de bois. Livraison gratuite à Marseille!"
        />
        <meta property="og:image" content="/path/to/logo.jpg" />
        <meta name="robots" content="index, follow" />
      </head>

      {/* Section Bannière */}
      <section
        className="banner"
        style={{ backgroundImage: "url(/images/banniere.jpg)" }}
      >
        <div className="banner-overlay">
          <h1 className="main-title" data-aos="fade-up">
            Bienvenue chez La Pizz'A Moos
          </h1>
          <p className="cta" data-aos="fade-up" data-aos-delay="200">
            Savourez nos pizzas authentiques cuites au feu de bois. Livraison
            gratuite à Marseille!
          </p>
          <Link
            to="/menu"
            className="cta-button"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Voir nos Pizzas
          </Link>
        </div>
      </section>

      {/* Section Séparateur */}
      <div className="section-divider" data-aos="fade-up"></div>

      {/* Section À propos */}
      <section className="about" data-aos="fade-up">
        <h2>À propos de La Pizz'A Moos</h2>
        <p>
          Notre pizzeria offre une expérience unique à Marseille. Toutes nos
          pizzas sont cuites au feu de bois pour un goût exceptionnel. Nous vous
          proposons une livraison gratuite dans toute la ville.
        </p>
      </section>

      {/* Section Menu */}
      <section className="menu" data-aos="fade-up">
        <h2>Nos Pizzas du moment</h2>
        <div className="pizza-cards">
          <div className="pizza-card" data-aos="zoom-in">
            <img src="/images/margherita.jpg" alt="Pizza Margherita" />
            <h3>Pizza Margherita</h3>
            <p>Tomate, mozzarella, basilic frais</p>
          </div>
          <div className="pizza-card" data-aos="zoom-in" data-aos-delay="200">
            <img src="/images/pépéroni.jpg" alt="Pizza Pepperoni" />
            <h3>Pizza Pepperoni</h3>
            <p>Tomate, mozzarella, pepperoni</p>
          </div>
          <div className="pizza-card" data-aos="zoom-in" data-aos-delay="400">
            <img src="/images/vegetarienne.jpg" alt="Pizza Végétarienne" />
            <h3>Pizza Végétarienne</h3>
            <p>Tomate, mozzarella, légumes frais</p>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section className="gallery" data-aos="fade-up">
        <h2>Galerie</h2>
        <div className="gallery-grid">
          <img src="/images/galerie1.jpg" alt="Pizza 1" />
          <img src="/images/galerie2.jpg" alt="Pizza 2" />
          <img src="/images/galerie3.jpg" alt="Pizza 3" />
          <img src="/images/galerie4.jpg" alt="Pizza 4" />
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials" data-aos="fade-up">
        <h2>Ce que nos clients disent</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card" data-aos="zoom-in">
            <p>
              "Les meilleures pizzas que j'ai jamais mangées ! La pâte est
              parfaite et la livraison rapide."
            </p>
            <h4>— Marc D.</h4>
          </div>
          <div
            className="testimonial-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p>
              "Un véritable délice. Une expérience culinaire unique à
              Marseille."
            </p>
            <h4>— Sophie L.</h4>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="team" data-aos="fade-up">
        <h2>Notre Équipe</h2>
        <div className="team-members">
          <div className="team-member" data-aos="zoom-in">
            <img src="/images/chef.jpg" alt="Chef John" />
            <h3>Chef John</h3>
            <p>Créateur des recettes de pizzas authentiques au feu de bois.</p>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <img src="/images/serveur.jpg" alt="serveur Giovanni" />
            <h3>Giovanni </h3>
            <p>Serveur au grand coeur.</p>
          </div>
          <div className="team-member" data-aos="zoom-in" data-aos-delay="200">
            <img src="/images/responsable.jpg" alt="Responsable Maria" />
            <h3>Maria</h3>
            <p>Responsable de la gestion et de la satisfaction client.</p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <h2 className="contact-title">Contactez-nous</h2>
        <p className="contact-description">
          Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à
          nous contacter !
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="contact-icon fas fa-phone"></i>
            <p>04 91 12 34 560</p>
          </div>
          <div className="contact-item">
            <i className="contact-icon fas fa-envelope"></i>
            <p>contact@lapizzamoos.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 La Pizz'A Moos. Tous droits réservés.</p>
      </footer>
    </>
  );
};

export default Accueil;
