import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import des icônes
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 La Pizz' - Tous droits réservés.</p>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Facebook">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Twitter">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
