import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <img src="/images/logo_pizza.jpg" alt="Logo Pizza" className="header-logo" />

        {/* Icône burger avec animation */}
        <button className={`burger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>

        {/* Liens de navigation avec affichage conditionnel */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
