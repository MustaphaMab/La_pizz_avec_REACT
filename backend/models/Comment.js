const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Nom de l'utilisateur
  content: { type: String, required: true },  // Contenu du commentaire
  rating: { type: Number, required: true, min: 1, max: 5 }, // Note entre 1 et 5
  approved: { type: Boolean, default: false }, // Validation du commentaire
  createdAt: { type: Date, default: Date.now } // Date de création
});

module.exports = mongoose.model('Comment', commentSchema);
