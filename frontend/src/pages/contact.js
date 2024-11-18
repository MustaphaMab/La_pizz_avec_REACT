import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./contact.css";

// Composant de la page de contact
function Contact() {
  return (
    <div className="contact-container">
      {/* Titre de la section Contact */}
      <h1>Contactez-nous</h1>
      <div className="container-contact">
        {/* Description de la section */}
        <p className="contact-description">
          Pour toute demande, vous pouvez nous contacter directement via les
          coordonnées ci-dessous.
        </p>

        <div className="contact-info">
          {/* Informations de contact : téléphone */}
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>
              <a href="tel:+33123456789">Téléphone : 04 91 12 34 560</a>
            </span>
          </div>

          {/* Informations de contact : email */}
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>
              <a href="mailto:contact@lapizz.com">Email : contact@lapizz.com</a>
            </span>
          </div>

          {/* Informations de contact : horaires */}
          <div className="contact-item">
            <FaClock className="contact-icon" />
            <span>Horaires : Lundi - Samedi : 11h - 23h</span>
          </div>
        </div>
      </div>

      {/* Première adresse */}
      <div className="map-container">
        <h2>Marseille</h2>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>3 Bd Michelet, 13008, Marseille, France</span>
        </div>
        <iframe
          title="Pizzerria La Pizz' - Adresse Marseille"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5810.240266556617!2d5.393326575423885!3d43.269858971122886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8a778a71c19%3A0xf30ae56cc3f4dc1e!2sOrange%20V%C3%A9lodrome!5e0!3m2!1sfr!2sfr!4v1730838084026!5m2!1sfr!2sfr"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Deuxième adresse */}
      <div className="map-container">
        <h2>Vitrolles</h2>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Vitrolles, France</span>
        </div>
        <iframe
          title="Pizzerria La Pizz' - Adresse 2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.9628501438738!2d5.2460565754362785!3d43.461372771111854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9ef153eedf53b%3A0x366c3fe1f7c4981a!2sRocher%20de%20Vitrolles%2C%2013127%20Vitrolles!5e0!3m2!1sfr!2sfr!4v1731937343366!5m2!1sfr!2sfr"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Troisième adresse */}
      <div className="map-container">
        <h2>Paris</h2>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Paris, France</span>
        </div>
        <iframe
          title="Pizzerria La Pizz' - Adresse Paris"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.983252221898!2d2.29190637580237!3d48.85837007133213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1731936884711!5m2!1sfr!2sfr"
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
