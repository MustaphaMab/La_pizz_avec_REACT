import React from "react";

const pizzas = [
  { id: 1, name: "Saumon", description: "crème, saumon", price: "10" },
  { id: 2, name: "Anchois", description: "tomate, anchois", price: "7" },
  { id: 3, name: "Fromage", description: "tomate, fromage", price: "6" },
];

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
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
