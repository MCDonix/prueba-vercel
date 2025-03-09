import React from 'react';
import { Navbar } from '../Navbar/Navbar.jsx';
import './Layout.css';
import { Footer } from '../Footer/Footer.jsx';

const Layout = ({ children }) => {
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