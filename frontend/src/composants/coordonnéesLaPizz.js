import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './coordonnéesLaPizz.css';

function coordonnéesLaPizz() {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <span>Téléphone : 01 23 45 67 89</span>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt className="contact-icon" />
        <span>Adresse : 3 Bd Michelet, 13008, Marseille, France</span>
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
  );
}

export default coordonnéesLaPizz;
