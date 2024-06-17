import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">Tu sitio web</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/acerca" className="nav-link">Acerca de</a>
          </li>
          <li className="nav-item">
            <a href="/contacto" className="nav-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
