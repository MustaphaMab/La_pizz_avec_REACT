import React, { useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { Helmet } from 'react-helmet'; // Import React Helmet pour le SEO
import './menu.css';

// Composant de la page Menu
function Menu() {
    const [pizzas, setPizzas] = useState([]); // État pour stocker la liste des pizzas
    const [loading, setLoading] = useState(true); // État pour gérer l'indicateur de chargement
    const [visiblePizzas, setVisiblePizzas] = useState(5); // Limite de pizzas affichées au départ

    // Fonction pour charger plus de pizzas
    const loadMore = () => {
        setVisiblePizzas((prev) => prev + 5);
    };

    // Requête API pour récupérer les pizzas
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/pizzas`) 
            .then(response => response.json())
            .then(data => {
                setPizzas(data); // Met à jour l'état avec les données des pizzas
                setLoading(false); // Cache l'indicateur de chargement
            })
            .catch(error => {
                console.error("Impossible de charger les pizzas", error);
                setLoading(false); // Gère les erreurs
            });
    }, []);

    return (
        <>
            {/* SEO avec Helmet */}
            <Helmet>
                <title>Notre Menu | La Pizza Moos</title>
                <meta name="description" content="Découvrez notre menu de pizzas artisanales, préparées avec des ingrédients frais et de qualité." />
                <meta property="og:title" content="Notre Menu | La Pizza Moos" />
                <meta property="og:description" content="Explorez notre sélection de pizzas artisanales. Commandez dès maintenant !" />

                <meta property="og:url" content="https://www.la-pizza-moos.com/menu" />
            </Helmet>

            <div className="menu-container">
                {/* Bannière avec titre */}
                <section className="menu-banner">
                    <div className="banner-overlay">
                        <h1 className="menu-title">Nos pizzas</h1>
                        <p className="menu-subtitle">Découvrez nos pizzas artisanales, préparées avec passion.</p>
                    </div>
                </section>

                {/* Indicateur de chargement */}
                {loading ? (
                    <div className="loading-indicator">
                        <ClipLoader color="#f27222" loading={loading} size={50} />
                    </div>
                ) : (
                    <section className="pizza-list">
                        {/* Affichage des pizzas avec une limite */}
                        {pizzas.slice(0, visiblePizzas).map((pizza) => (
                            <article key={pizza.id} className="pizza-item">
                                <header>
                                    <h2 className="pizza-name">{pizza.name}</h2> {/* Nom */}
                                </header>
                                <p className="pizza-description">{pizza.description}</p> {/* Description */}
                                <p className="pizza-price">
                                    <FaPizzaSlice className="price-icon" /> {pizza.price} € {/* Prix */}
                                </p>
                            </article>
                        ))}
                        {/* Bouton pour charger plus */}
                        {visiblePizzas < pizzas.length && (
                            <button onClick={loadMore} className="load-more">
                                Charger plus
                            </button>
                        )}
                    </section>
                )}
            </div>
        </>
    );
}

export default Menu;
