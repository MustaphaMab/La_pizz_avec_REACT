// ce fichier server.js est un serveur Express.js configuré pour gérer une API de gestion de pizzas.

require('dotenv').config();

// Middleware
const express = require('express'); // Framework pour créer le serveur
const cors = require('cors'); // Autorise les requetes cross-origin
const jwt = require('jsonwebtoken');  //Utilisé pour créer et vérifier les tokens JWT
const bcrypt = require('bcryptjs'); // Sert à hacher les mots de passe.
const mongoose = require('mongoose');




// Configuration du serveur
const app = express(); //Instance du serveur Express.
const PORT = process.env.PORT || 5000; //Définition du port du serveur, configurable via une variable d'environnement.
const SECRET_KEY = "votre_cle_secrete"; // Clé utilisée pour signer les tokens JWT.



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.listen(PORT, () => {
  console.log(`Serveur d'API en cours sur le port ${PORT}`);
});




app.use(cors()); //Active les CORS pour permettre les requêtes depuis des domaines externes.
app.use(express.json()); // Permet de lire le JSON dans les requêtes.
app.use(express.static('frontend/public')); // Sert des fichiers statiques depuis frontend/public.


let pizzas = [
    // Pizzas à la sauce tomate
    { id: 1, name: 'Margherita', description: 'tomate, mozzarella, basilic', price: 8, image: `${process.env.REACT_APP_API_URL}/images/margherita.jpg` },
    { id: 2, name: 'Pepperoni', description: 'tomate, mozzarella, pepperoni', price: 9, image: `${process.env.REACT_APP_API_URL}/images/pepperoni.jpg` },
    { id: 3, name: 'Végétarienne', description: 'tomate, mozzarella, poivrons, oignons, champignons', price: 9, image: `${process.env.REACT_APP_API_URL}/images/blanche-vegetarienne.jpg` },
    { id: 4, name: 'Napolitaine', description: 'tomate, mozzarella, anchois, câpres', price: 9, image: `${process.env.REACT_APP_API_URL}/images/napolitaine.jpg` },

    // Pizzas à la crème
    { id: 11, name: 'Blanche Végétarienne', description: 'crème, mozzarella, champignons, oignons', price: 10, image: `${process.env.REACT_APP_API_URL}/images/blanche-vegetarienne.jpg` },
    { id: 12, name: 'Carbonara', description: 'crème, mozzarella, lardons, œuf', price: 11, image: `${process.env.REACT_APP_API_URL}/images/carbonara.jpg` },
    { id: 13, name: 'Saumon', description: 'crème, mozzarella, saumon fumé', price: 12, image: `${process.env.REACT_APP_API_URL}/images/saumon.jpg` },
    { id: 14, name: 'Quatre Fromages', description: 'crème, mozzarella, gorgonzola, chèvre, parmesan', price: 12, image: `${process.env.REACT_APP_API_URL}/images/4-fromages.jpg` },
];


// --- Routes pour l'utilisateur ---

// Récupération de toutes les pizzas
app.get('/api/pizzas', (req, res) => {
    res.json(pizzas);
});


// Récupération d'une pizza
app.get('/api/pizzas/:id', (req, res) => {
    const pizza = pizzas.find(p => p.id === parseInt(req.params.id));
    if (pizza) {
        res.json(pizza);
    } else {
        res.status(404).send('Pizza non trouvée');
    }
});

// --- Route de connexion de l'admin ---

//Authentifie l'admin, génère un token JWT si les identifiants sont corrects.
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    const adminUser = { username: "admin", password: "$2b$10$..." }; // Mot de passe chiffré

    // Vérification du mot de passe
    bcrypt.compare(password, adminUser.password, (err, result) => {
        if (result) {
            const token = jwt.sign({ username: adminUser.username }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Échec de la connexion');
        }
    });
});

// Middleware pour vérifier le token

//Vérifie si un token JWT valide est fourni dans l'en-tête Authorization des requêtes sécurisées.
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.status(403).send('Token requis');

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Token invalide');
        req.user = user;
        next();
    });
}

// --- Routes pour l'admin (sécurisées) ---

// Ajoute une pizza
app.post('/api/admin/pizzas', authenticateToken, (req, res) => {
    const newPizza = { id: pizzas.length + 1, ...req.body };
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
});


// Modifie une pizza
app.put('/api/admin/pizzas/:id', authenticateToken, (req, res) => {
    const pizzaIndex = pizzas.findIndex(p => p.id === parseInt(req.params.id));
    if (pizzaIndex !== -1) {
        pizzas[pizzaIndex] = { ...pizzas[pizzaIndex], ...req.body };
        res.json(pizzas[pizzaIndex]);
    } else {
        res.status(404).send('Pizza non trouvée');
    }
});

// Supprime une pizza
app.delete('/api/admin/pizzas/:id', authenticateToken, (req, res) => {
    const pizzaIndex = pizzas.findIndex(p => p.id === parseInt(req.params.id));
    if (pizzaIndex !== -1) {
        const deletedPizza = pizzas.splice(pizzaIndex, 1);
        res.json(deletedPizza);
    } else {
        res.status(404).send('Pizza non trouvée');
    }
});

// Permet de démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur d'API en cours sur le port ${PORT}`);
});
