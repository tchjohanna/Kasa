// Listing.jsx
import React from 'react';
import img1 from '../assets/images/img1.png';

// Définition du composant fonctionnel Listing
function Listing() {
  // Rendu du composant avec une image, un titre, une localisation, et des tags
  return (
    <div className="listing">
      {/* Section de l'image */}
      <div className="listing-image">
        <img src={img1} alt="Description de l'image" />
      </div>
      {/* Titre de l'annonce */}
      <h1>Cozy loft on the Canal Saint-Martin</h1>
      {/* Localisation de l'annonce */}
      <p>Paris, Île-de-France</p>
      {/* Liste de tags associés à l'annonce */}
      <div className="tags">
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
    </div>
  );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Listing;
