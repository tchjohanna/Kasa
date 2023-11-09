// Importation de la bibliothèque React et du composant MainContent
import React from 'react';
import MainContent from '../components/MainContent';

// Importations potentielles non utilisées
// import LocationCard from 'path_to_LocationCard';
// import img1 from 'path_to_img1';
// import { Link } from 'react-router-dom';

// Définition du composant fonctionnel Home
function Home() {
  // Rendu du composant avec une classe CSS dédiée et l'inclusion du composant MainContent
  return (
    <div className="home-page">
      {/* Inclusion du composant MainContent pour afficher le contenu principal de la page d'accueil */}
      <MainContent />
    </div>
  );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Home;
