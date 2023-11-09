// LocationCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel LocationCard
function LocationCard(props) {
  // Rendu du composant avec un conteneur et un contenu généré dynamiquement
  return (
    <div className="location-card">
      {/* Utilisation de la prop children pour inclure le contenu généré dynamiquement */}
      {props.children}
    </div>
  );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default LocationCard;
