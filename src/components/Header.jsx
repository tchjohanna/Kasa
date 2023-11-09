// Header.jsx
import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import logo from '../assets/images/logoKasa.svg';

// Définition du composant fonctionnel Header
function Header() {
    // Utilisation du hook useMatch pour déterminer si la route est active
    const isHomeActive = useMatch("/");
    const isAboutActive = useMatch("/apropos");

    // Rendu du composant Header avec le logo et les liens de navigation
    return (
        <header>
            {/* Section du logo */}
            <div>
                <img src={logo} alt="Logo Kasa" />
            </div>
            {/* Section de navigation avec des liens NavLink */}
            <nav>
                {/* Lien NavLink pour la page d'accueil */}
                <NavLink 
                    to="/" 
                    style={isHomeActive ? { textDecoration: 'underline', color: 'red' } : {}}
                >
                    Accueil
                </NavLink>
                {/* Lien NavLink pour la page "À Propos" */}
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

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Header;
