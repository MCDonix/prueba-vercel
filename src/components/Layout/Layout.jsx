import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar.jsx';
import './Layout.css';
import { Footer } from '../Footer/Footer.jsx';

const Layout = ({ children }) => {

  const location = useLocation();

  // Mapeo de rutas a títulos
  const routeTitles = {
    '/': 'Pokeworld el Mundo de los Maestros Pokemon!',
    '/Api-data': 'Obten tus primeros Pokemon - Pokeworld',
    '/Contact': 'Contacto - Pokeworld',
  };

  useEffect(() => {
    // Cambiar el título según la ruta
    document.title = routeTitles[location.pathname] || 'Pokeworld';
  }, [location]);
  return (
    <>
      <header className="header">
        <div className="header-content"><a href="/"><img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokémon Logo"
          className="logo"
        /></a>
          <Navbar />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};


export { Layout }