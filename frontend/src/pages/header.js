import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        {/* Liens de navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Nos pizza</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
