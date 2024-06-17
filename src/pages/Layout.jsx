import { Outlet, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavbarText
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import "../App.css";


const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  
  

  return (
    <div>
      
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          {/*Mi Aplicación*/ }
          
          <img src="../public/logoc.jpg" alt="" width="50px" className="logo" />
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            {/*<NavLink tag={Link} to="/">
              HomeEEE
            </NavLink>*/}
            <NavLink tag={Link} to="/dashboard">
              Conciertos
            </NavLink>
            <NavLink tag={Link} to="/about">
              Musica
            </NavLink>
            <NavLink tag={Link} to="/mercancia">
              Mercancia
            </NavLink>
          </Nav>
          {/*<NavbarText>Simple Text</NavbarText>*/}
          <button onClick={toggleDarkMode}>
    {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
        </Collapse>
      </Navbar>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;