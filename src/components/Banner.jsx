// Banner.jsx
import React from 'react';
import '../assets/styles/style.scss';

// Définition du composant fonctionnel Banner
function Banner(props) {
    // Rendu du composant avec une classe CSS et une image de fond dynamique
    return (
        <div className="banner-container" style={{backgroundImage: `url(${props.imageUrl})`}}>
            {/* Contenu du composant, s'il y en a */}
        </div>
    );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Banner;
