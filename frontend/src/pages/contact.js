import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

// Composant de la page de contact
function Contact() {
  return (
    <div className="contact-container">
      {/* Titre de la section Contact */}
      <h1>Contactez-nous</h1>
      
      {/* Description de la section */}
      <p className="contact-description">
        Pour toute demande, vous pouvez nous contacter directement via les coordonnées ci-dessous.
      </p>

      <div className="contact-info">
        {/* Informations de contact : téléphone */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span><a href="tel:+33123456789">Téléphone : 01 23 45 67 89</a></span>
        </div>
        
        {/* Informations de contact : adresse */}
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Adresse : 3 Bd Michelet, 13008, Marseille, France</span>
        </div>

        {/* Informations de contact : email */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span><a href="mailto:contact@lapizz.com">Email : contact@lapizz.com</a></span>
        </div>

        {/* Informations de contact : horaires */}
        <div className="contact-item">
          <FaClock className="contact-icon" />
          <span>Horaires : Lundi - Samedi : 11h - 23h</span>
        </div>
      </div>

      <div className="map-container">
        {/* Intégration de la carte Google Maps pour afficher l'emplacement de la pizzeria */}
        <iframe
          title="La Pizz' Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5810.240266556617!2d5.393326575423885!3d43.269858971122886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8a778a71c19%3A0xf30ae56cc3f4dc1e!2sOrange%20V%C3%A9lodrome!5e0!3m2!1sfr!2sfr!4v1730838084026!5m2!1sfr!2sfr"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
