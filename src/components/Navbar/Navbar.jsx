import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Api-data" className="navbar-link">PokeApi</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Contact" className="navbar-link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};


export { Navbar };