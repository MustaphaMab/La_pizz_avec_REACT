import React, { useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import './menu.css';

function Menu() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        // Faites une requête GET à l'API de pizzas
        fetch(`${process.env.REACT_APP_API_URL}/api/pizzas`) // Assurez-vous que l'URL correspond
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error("Erreur lors de la récupération des pizzas:", error));
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

            {/* Liste des pizzas */}
            <div className="pizza-list">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="pizza-item">
                        <img src={pizza.image} alt={pizza.name} className="pizza-image" />
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
        </div>
    );
}

export default Menu;
