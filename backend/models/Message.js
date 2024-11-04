const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Nom de l'utilisateur
  content: { type: String, required: true },  // Contenu du message
  response: { type: String }, // Réponse du propriétaire
  createdAt: { type: Date, default: Date.now }, // Date de création du message
  respondedAt: { type: Date } // Date de la réponse
});

module.exports = mongoose.model('Message', messageSchema);
