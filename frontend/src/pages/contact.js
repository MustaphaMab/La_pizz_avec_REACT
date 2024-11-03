import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, } from 'react-icons/fa';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contactez-nous</h1>
            <p className="contact-description">Pour toute demande ou réservation, n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous.</p>

            {/* Informations de contact */}
            <div className="contact-info">
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <span>Téléphone : 01 23 45 67 89</span>
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>Adresse : 3 Bd Michelet, 13008,  Marseille, France</span>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>Email : contact@lapizz.com</span>
                </div>
                <div className="contact-item">
                    <FaClock className="contact-icon" />
                    <span>Horaires : Lundi - Samedi : 11h - 23h</span>
                </div>
            </div>

            {/* Formulaire de contact détaillé */}
            <form className="contact-form">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre email" required />

                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" name="subject" placeholder="Sujet de votre message" required />

                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Votre message" rows="4" required></textarea>

                <button type="submit">Envoyer</button>
            </form>

            {/* Carte Google Maps */}
            <div className="map-container">
                <iframe
                    title="La Pizz' Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5051987275636!2d4.903402315711724!3d43.45491767912859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5f5f9b03e8459%3A0x8c4dd5e2937c56e!2sVitrolles%2C%20France!5e0!3m2!1sen!2sfr!4v1616946344068!5m2!1sen!2sfr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            
        </div>
    );
}

export default Contact;
