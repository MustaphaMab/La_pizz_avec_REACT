import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contactez-nous</h1>
            <p className="contact-info">
                Téléphone : 04 42 59 65 98
                <br />
                Adresse : 123 Rue du Bon Goût, Vitrolles, France
            </p>
            
            <form className="contact-form">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Votre message" rows="4" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;
