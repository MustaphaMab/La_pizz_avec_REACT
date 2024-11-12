import React, { useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

import { ClipLoader } from 'react-spinners';
import './menu.css';

function Menu() {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // requête GET à l'API de pizzas
        fetch(`${process.env.REACT_APP_API_URL}/api/pizzas`) 
            .then(response => response.json())
            .then(data => {
                setPizzas(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error("Impossible de charger les pizzas", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="menu-container">
            {/* Bannière de présentation */}
            <section className="menu-banner">
                <div className="banner-overlay">
                    <h1 className="menu-title">Notre Menu</h1>
                    <p className="menu-subtitle">Découvrez nos pizzas artisanales, préparées avec passion.</p>
                </div>
            </section>

            {/* Indicateur de chargement */}
            {loading ? (
    <div className="loading-indicator">
        <ClipLoader color="#f27222" loading={loading} size={50} />
    </div>
) : (
                // Liste des pizzas une fois les données chargées
                <div className="pizza-list">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="pizza-item">
                            <div className="pizza-info">
                                <h2 className="pizza-name">{pizza.name}</h2>
                                <p className="pizza-description">{pizza.description}</p>
                                <p className="pizza-price">
                                    <FaPizzaSlice className="price-icon" /> {pizza.price} €
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
