import React, { useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import './menu.css';

// Composant de la page Menu
function Menu() {
    const [pizzas, setPizzas] = useState([]); // État pour stocker la liste des pizzas
    const [loading, setLoading] = useState(true); // État pour gérer l'indicateur de chargement

    useEffect(() => {
        // Effectue une requête GET à l'API pour récupérer la liste des pizzas
        fetch(`${process.env.REACT_APP_API_URL}/api/pizzas`) 
            .then(response => response.json())
            .then(data => {
                setPizzas(data); // Met à jour l'état avec les données des pizzas
                setLoading(false); // Cache l'indicateur de chargement une fois les données reçues
            })
            .catch(error => {
                console.error("Impossible de charger les pizzas", error); // Affiche une erreur si la requête échoue
                setLoading(false); // Cache également l'indicateur de chargement en cas d'erreur
            });
    }, []);

    return (
        <div className="menu-container">
            {/* Section bannière avec le titre et le sous-titre */}
            <section className="menu-banner">
                <div className="banner-overlay">
                    <h1 className="menu-title">Notre Menu</h1>
                    <p className="menu-subtitle">Découvrez nos pizzas artisanales, préparées avec passion.</p>
                </div>
            </section>

            {/* Affiche l'indicateur de chargement si les données sont encore en cours de récupération */}
            {loading ? (
                <div className="loading-indicator">
                    <ClipLoader color="#f27222" loading={loading} size={50} />
                </div>
            ) : (
                // Affiche la liste des pizzas une fois les données chargées
                <div className="pizza-list">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="pizza-item">
                            <div className="pizza-info">
                                <h2 className="pizza-name">{pizza.name}</h2> {/* Nom de la pizza */}
                                <p className="pizza-description">{pizza.description}</p> {/* Description de la pizza */}
                                <p className="pizza-price">
                                    <FaPizzaSlice className="price-icon" /> {pizza.price} € {/* Prix de la pizza */}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Menu;
