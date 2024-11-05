const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Nom de l'utilisateur
  content: { type: String, required: true },  // Contenu du message
  createdAt: { type: Date, default: Date.now }, // Date de création
});

module.exports = mongoose.model('Message', messageSchema);
