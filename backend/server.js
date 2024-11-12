require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const helmet = require("helmet");

const Comment = require("./models/Comment");
const Message = require("./models/Message");

// Configuration du serveur
const app = express();
const PORT = process.env.PORT || 5001;
const SECRET_KEY = "votre_cle_secrete";

// Middleware de sécurité avec Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://www.googletagmanager.com", "'unsafe-inline'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        connectSrc: ["'self'", "https://la-pizz.onrender.com"], // Ajoutez ici l'URL de votre backend
      },
    },
  })
);




// Route pour approuver un commentaire
app.put(
  "/api/admin/comments/approve/:id",
  authenticateToken,
  async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(404).send("Commentaire non trouvé");
      }

      // On marque le commentaire comme approuvé
      comment.approved = true;
      await comment.save();

      res.json({ message: "Commentaire approuvé avec succès." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur lors de l'approbation du commentaire." });
    }
  }
);


function authenticateToken(req, res, next) {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(403).send("Token requis");

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send("Token invalide");
    req.user = user;
    next();
  });
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connection.on("error", (err) => {
  console.error(`Erreur de connexion MongoDB : ${err}`);
});

app.use(cors());
app.use(express.json());
app.use(express.static("frontend/public"));

let pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "tomate, mozzarella, basilic",
    price: 8,
    image: `${process.env.REACT_APP_API_URL}/images/margherita.jpg`,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "tomate, mozzarella, pepperoni",
    price: 9,
    image: `${process.env.REACT_APP_API_URL}/images/pepperoni.jpg`,
  },
  {
    id: 3,
    name: "Végétarienne",
    description: "tomate, mozzarella, poivrons, oignons, champignons",
    price: 9,
    image: `${process.env.REACT_APP_API_URL}/images/blanche-vegetarienne.jpg`,
  },
  {
    id: 4,
    name: "Napolitaine",
    description: "tomate, mozzarella, anchois, câpres",
    price: 9,
    image: `${process.env.REACT_APP_API_URL}/images/napolitaine.jpg`,
  },
  {
    id: 11,
    name: "Blanche Végétarienne",
    description: "crème, mozzarella, champignons, oignons",
    price: 10,
    image: `${process.env.REACT_APP_API_URL}/images/blanche-vegetarienne.jpg`,
  },
  {
    id: 12,
    name: "Carbonara",
    description: "crème, mozzarella, lardons, œuf",
    price: 11,
    image: `${process.env.REACT_APP_API_URL}/images/carbonara.jpg`,
  },
  {
    id: 13,
    name: "Saumon",
    description: "crème, mozzarella, saumon fumé",
    price: 12,
    image: `${process.env.REACT_APP_API_URL}/images/saumon.jpg`,
  },
  {
    id: 14,
    name: "Quatre Fromages",
    description: "crème, mozzarella, gorgonzola, chèvre, parmesan",
    price: 12,
    image: `${process.env.REACT_APP_API_URL}/images/4-fromages.jpg`,
  },
];

// Routes pour les pizzas
app.get("/api/pizzas", (req, res) => {
  res.json(pizzas);
});

app.get("/api/pizzas/:id", (req, res) => {
  const pizza = pizzas.find((p) => p.id === parseInt(req.params.id));
  if (pizza) {
    res.json(pizza);
  } else {
    res.status(404).send("Pizza non trouvée");
  }
});

// Route de connexion de l'admin
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  const adminUser = { username: "admin", password: "$2b$10$..." }; // Remplacez par le mot de passe haché réel

  bcrypt.compare(password, adminUser.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ username: adminUser.username }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    } else {
      res.status(401).send("Échec de la connexion");
    }
  });
});


// Routes sécurisées pour l'admin
app.post("/api/admin/pizzas", authenticateToken, (req, res) => {
  const newPizza = { id: pizzas.length + 1, ...req.body };
  pizzas.push(newPizza);
  res.status(201).json(newPizza);
});

app.put("/api/admin/pizzas/:id", authenticateToken, (req, res) => {
  const pizzaIndex = pizzas.findIndex((p) => p.id === parseInt(req.params.id));
  if (pizzaIndex !== -1) {
    pizzas[pizzaIndex] = { ...pizzas[pizzaIndex], ...req.body };
    res.json(pizzas[pizzaIndex]);
  } else {
    res.status(404).send("Pizza non trouvée");
  }
});

app.delete("/api/admin/pizzas/:id", authenticateToken, (req, res) => {
  const pizzaIndex = pizzas.findIndex((p) => p.id === parseInt(req.params.id));
  if (pizzaIndex !== -1) {
    const deletedPizza = pizzas.splice(pizzaIndex, 1);
    res.json(deletedPizza);
  } else {
    res.status(404).send("Pizza non trouvée");
  }
});

// Routes pour les commentaires
app.post("/api/comments", async (req, res) => {
  const { username, content, rating } = req.body;
  try {
    const comment = new Comment({ username, content, rating });
    await comment.save();
    res.status(201).json({ message: "Commentaire soumis pour approbation." });
  } catch (error) {
    console.error('Erreur lors de la soumission du commentaire:', error); // Affichage de l'erreur
    res.status(500).json({ error: "Erreur lors de la soumission du commentaire." });
  }
});


app.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ approved: true });
    res.json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des commentaires." });
  }
});

// Route pour soumettre un message
app.post("/api/messages", async (req, res) => {
  const { username, content } = req.body;

  try {
    const message = new Message({ username, content });
    await message.save();
    res.status(201).json({ message: "Message envoyé avec succès." });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error); // Affichage de l'erreur
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
});


// Route pour récupérer tous les messages (admin)
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error); // Affichage de l'erreur
    res.status(500).json({ error: "Erreur lors de la récupération des messages." });
  }
});


// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur d'API en cours sur le port ${PORT}`);
});
