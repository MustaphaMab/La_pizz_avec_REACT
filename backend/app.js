import express from "express";
import dotenv from "dotenv";

// Charge les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Route de base pour vérifier que le serveur fonctionne
app.get("/", (req, res) => {
  res.send("Bienvenue chez La Pizz !");
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
