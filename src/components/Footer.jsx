// Footer.jsx
import React from 'react';
import logoFooter from '../assets/images/logoFooter.png';

// Définition du composant fonctionnel Footer
function Footer() {
    // Rendu du composant Footer avec le logo et le texte des droits d'auteur
    return (
        <footer>
            {/* Image du logo dans le footer */}
            <img src={logoFooter} alt="Logo Footer Kasa" />
            {/* Texte des droits d'auteur */}
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Footer;
