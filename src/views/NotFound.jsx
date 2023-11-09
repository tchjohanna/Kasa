// Importation de la bibliothèque React et du composant Link de React Router
import React from 'react';
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel NotFound
const NotFound = () => {
    return (
        // Structure du composant avec une classe CSS spécifique
        <div className="not-found">
            {/* Affichage du code d'erreur 404 et d'un message d'erreur */}
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            {/* Ajout d'un lien pour retourner à la page d'accueil */}
            <Link to="/" className="return-home-link">Retourner sur la page d’accueil</Link>
        </div>
    );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default NotFound;
