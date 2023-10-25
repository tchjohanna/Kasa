// Dans le fichier src/views/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="return-home-link">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default NotFound;
