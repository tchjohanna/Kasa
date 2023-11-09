import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, imageUrl, id }) {
    // Ajoute une vérification pour s'assurer que 'id' existe
    if (!id) {
        // Gère l'erreur en affichant un message ou en rendant un composant d'erreur
        return (
            <div className="card error-card">
                <p>Erreur: ID indisponible</p>
            </div>
        );
    }

    // Si 'id' existe, construis le lien normalement
    return (
        <Link to={`/appartement/${id}`}>
            <div className="card">
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
            </div>
        </Link>
    );
}

export default Card;
