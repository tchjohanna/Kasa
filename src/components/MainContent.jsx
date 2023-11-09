// Importation des bibliothèques et composants nécessaires
import React from 'react';
import Card from './Card';
import resourcesData from '../assets/ressources.json';
import '../assets/styles/style.scss';
import img1 from '../assets/images/img1.png';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel MainContent
function MainContent() {
  // Récupération de toutes les ressources depuis le fichier JSON
  const allResources = resourcesData;

  // Rendu du composant avec une bannière et une liste de cartes générées dynamiquement
  return (
    <div>
      {/* Utilisation du composant Banner avec une image d'illustration */}
      <Banner imageUrl={img1} altText="Description de l'image" />
      
      {/* Conteneur pour afficher la liste des locations (cartes) */}
      <div className="locations">
        {/* Utilisation de la méthode map pour générer dynamiquement les cartes pour chaque ressource */}
        {allResources.map((resource) => (
          <Card
            key={resource.id}
            id={resource.id}
            title={resource.title}
            imageUrl={resource.cover}
          />
        ))}
      </div>
    </div>
  );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default MainContent;
