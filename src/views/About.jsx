// Importation de la bibliothèque React et du composant AboutContent
import React from 'react';
import AboutContent from '../components/AboutContent';

// Définition du composant fonctionnel About
function About() {
  // Rendu du composant avec une classe CSS dédiée et l'inclusion du composant AboutContent
  return (
    <div className="about-page">
      {/* Inclusion du composant AboutContent pour afficher le contenu de la page À Propos */}
      <AboutContent />
    </div>
  );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default About;
