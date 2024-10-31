import React, { useEffect, useState } from 'react';

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
        <div>
            <h1>PIZZA</h1>
            <div className="pizza-list">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="pizza-item">
                        <h2>{pizza.name}</h2>
                        <p>{pizza.description}</p>
                        <p>Prix : {pizza.price} €</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
