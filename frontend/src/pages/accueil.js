import React, { useState, useEffect } from 'react';

import './accueil.css';

function Accueil() {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(1);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch('/api/comments') // Récupère les commentaires depuis l'API
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Erreur lors de la récupération des commentaires:', error));
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (username.length < 3) {
      newErrors.username = 'Le nom doit contenir au moins 3 caractères.';
    }

    if (content.length < 10) {
      newErrors.content = 'Le commentaire doit contenir au moins 10 caractères.';
    }

    if (rating < 1 || rating > 5) {
      newErrors.rating = 'La note doit être entre 1 et 5.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, content, rating }),
    })
    .then(response => response.json())
    .then(data => {
      setSuccessMessage('Votre commentaire a été soumis avec succès !');
      setUsername('');
      setContent('');
      setRating(1);
      setErrors({});
      setTimeout(() => setSuccessMessage(''), 5000); // Réinitialiser le message après 5 secondes
      
      // Recharger les commentaires
      fetch('/api/comments')
        .then(response => response.json())
        .then(data => setComments(data));
    })
    .catch(error => console.error('Erreur lors de l\'envoi du commentaire:', error));
  };

  return (
    <div className="accueil">
      {/* Section des témoignages */}
      <section className="testimonials">
        <h2 className="testimonial-title">Ce que nos clients disent</h2>
        <div className="testimonial-cards">
          {comments.map((comment, index) => (
            <div className="testimonial-card" key={index}>
              <p>{comment.content}</p>
              <h4>{comment.username}</h4>
              <p>Note: {comment.rating} / 5</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire de commentaires */}
      <section className="comment-form-section">
        <h2>Laissez un commentaire</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Nom"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
          
          <textarea
            placeholder="Commentaire"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          {errors.content && <p className="error-message">{errors.content}</p>}

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} étoile(s)
              </option>
            ))}
          </select>
          {errors.rating && <p className="error-message">{errors.rating}</p>}

          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
}

export default Accueil;
