import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './contact.css';

function Contact() {
  // États pour le formulaire de contact
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  // États pour les commentaires
  const [commentUsername, setCommentUsername] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [rating, setRating] = useState(1);
  
  // État pour les commentaires récupérés
  const [comments, setComments] = useState([]);

  // Récupérer les commentaires au chargement du composant
  useEffect(() => {
    fetch('/api/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Erreur lors de la récupération des commentaires:', error));
  }, []); // [] signifie qu'on ne l'appelle qu'une seule fois au chargement du composant

  // Fonction de soumission du formulaire de contact
  const handleContactSubmit = (e) => {
    e.preventDefault();
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, content }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      setUsername('');
      setContent('');
    })
    .catch(error => console.error('Erreur lors de l\'envoi du message:', error));
  };

  // Fonction de soumission du formulaire de commentaire
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: commentUsername, content: commentContent, rating }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      // Réinitialiser les champs
      setCommentUsername('');
      setCommentContent('');
      setRating(1);
      // Ajouter le commentaire directement dans la liste sans recharger
      setComments([...comments, { username: commentUsername, content: commentContent, rating }]);
    })
    .catch(error => console.error('Erreur lors de l\'envoi du commentaire:', error));
  };

  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <p className="contact-description">
        Pour toute demande ou réservation, n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous.
      </p>

      {/* Informations de contact */}
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

      {/* Formulaire de contact */}
      <form onSubmit={handleContactSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Nom"
          className="contact-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          className="contact-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="contact-submit">Envoyer</button>
      </form>

      {/* Formulaire de commentaires */}
      <div className="comment-form">
        <h2>Laissez un commentaire</h2>
        <form onSubmit={handleCommentSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Votre Nom"
            className="contact-input"
            value={commentUsername}
            onChange={(e) => setCommentUsername(e.target.value)}
            required
          />
          <textarea
            placeholder="Votre Commentaire"
            className="contact-textarea"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            required
          ></textarea>
          <div className="rating">
            <label>Note :</label>
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="contact-submit">Soumettre le commentaire</button>
        </form>
      </div>

      {/* Affichage des commentaires */}
      <div className="comments-section">
        <h3>Commentaires récents :</h3>
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <strong>{comment.username}</strong>
              <p>{comment.content}</p>
              <p>Note : {comment.rating} / 5</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Carte Google Maps */}
      <div className="map-container">
        <iframe
          title="La Pizz' Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5810.240266556617!2d5.393326575423885!3d43.269858971122886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8a778a71c19%3A0xf30ae56cc3f4dc1e!2sOrange%20V%C3%A9lodrome!5e0!3m2!1sfr!2sfr!4v1730838084026!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
