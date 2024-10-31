const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = "votre_cle_secrete"; // Remplacez par une clé sécurisée

app.use(cors());
app.use(express.json());

let pizzas = [
    // Pizzas à la sauce tomate
    { id: 1, name: 'Margherita', description: 'tomate, mozzarella, basilic', price: 8 },
    { id: 2, name: 'Pepperoni', description: 'tomate, mozzarella, pepperoni', price: 9 },
    { id: 3, name: 'Végétarienne', description: 'tomate, mozzarella, poivrons, oignons, champignons', price: 9 },
    { id: 4, name: 'Napolitaine', description: 'tomate, mozzarella, anchois, câpres', price: 9 },
    { id: 5, name: 'Caprese', description: 'tomate, mozzarella, tomates cerises, basilic', price: 10 },
    { id: 6, name: 'Quatre Saisons', description: 'tomate, mozzarella, artichauts, champignons, olives', price: 11 },
    { id: 7, name: 'Diavola', description: 'tomate, mozzarella, salami piquant', price: 10 },
    { id: 8, name: 'Marinara', description: 'tomate, ail, origan', price: 7 },
    { id: 9, name: 'Prosciutto', description: 'tomate, mozzarella, prosciutto', price: 12 },
    { id: 10, name: 'Reine', description: 'tomate, jambon, champignons, mozzarella', price: 9 }, // Pizza avec jambon

    // Pizzas à la crème
    { id: 11, name: 'Blanche Végétarienne', description: 'crème, mozzarella, champignons, oignons', price: 10 },
    { id: 12, name: 'Carbonara', description: 'crème, mozzarella, lardons, œuf', price: 11 },
    { id: 13, name: 'Saumon', description: 'crème, mozzarella, saumon fumé', price: 12 },
    { id: 14, name: 'Quatre Fromages', description: 'crème, mozzarella, gorgonzola, chèvre, parmesan', price: 12 },
    { id: 15, name: 'Savoyarde', description: 'crème, mozzarella, pommes de terre, lardons, reblochon', price: 13 },
    { id: 16, name: 'Poulet Curry', description: 'crème, mozzarella, poulet, curry', price: 11 },
    { id: 17, name: 'Basilic', description: 'crème, mozzarella, basilic frais', price: 10 },
    { id: 18, name: 'Champignons', description: 'crème, mozzarella, champignons', price: 9 },
    { id: 19, name: 'Paysanne', description: 'crème, mozzarella, poivrons, oignons', price: 9 },
    { id: 20, name: 'Forestière', description: 'crème, mozzarella, champignons, oignons, persil', price: 11 },
];

// --- Routes pour l'utilisateur ---
app.get('/api/pizzas', (req, res) => {
    res.json(pizzas);
});

app.get('/api/pizzas/:id', (req, res) => {
    const pizza = pizzas.find(p => p.id === parseInt(req.params.id));
    if (pizza) {
        res.json(pizza);
    } else {
        res.status(404).send('Pizza non trouvée');
    }
});

// --- Route de connexion de l'admin ---
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
app.post('/api/admin/pizzas', authenticateToken, (req, res) => {
    const newPizza = { id: pizzas.length + 1, ...req.body };
    pizzas.push(newPizza);
    res.status(201).json(newPizza);
});

app.put('/api/admin/pizzas/:id', authenticateToken, (req, res) => {
    const pizzaIndex = pizzas.findIndex(p => p.id === parseInt(req.params.id));
    if (pizzaIndex !== -1) {
        pizzas[pizzaIndex] = { ...pizzas[pizzaIndex], ...req.body };
        res.json(pizzas[pizzaIndex]);
    } else {
        res.status(404).send('Pizza non trouvée');
    }
});

app.delete('/api/admin/pizzas/:id', authenticateToken, (req, res) => {
    const pizzaIndex = pizzas.findIndex(p => p.id === parseInt(req.params.id));
    if (pizzaIndex !== -1) {
        const deletedPizza = pizzas.splice(pizzaIndex, 1);
        res.json(deletedPizza);
    } else {
        res.status(404).send('Pizza non trouvée');
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur d'API en cours sur le port ${PORT}`);
});
