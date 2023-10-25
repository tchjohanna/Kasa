import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import logo from '../assets/images/logoKasa.svg';

function Header() {
    const isHomeActive = useMatch("/");
    const isAboutActive = useMatch("/apropos");

    return (
        <header>
            <div>
                <img src={logo} alt="Logo Kasa" />
            </div>
            <nav>
                <NavLink 
                    to="/" 
                    style={isHomeActive ? { textDecoration: 'underline', color: 'red' } : {}}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    style={isAboutActive ? { textDecoration: 'underline', color: 'red' } : {}}
                >
                    À Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
