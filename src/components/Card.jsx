import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, imageUrl, id }) {
    // Ajoute une vérification pour s'assurer que 'id' existe
    if (!id) {
        {/* La condition if (!id) vérifie si l'ID n'est pas défini (c'est-à-dire null ou undefined).
Si c'est le cas, le composant Card affiche un message d'erreur indiquant que l'ID est indisponible.
Cela permet d'éviter des erreurs potentielles lors de la construction du lien vers la page d'appartement (<Link to={/appartement/${id}}>) si l'ID est manquant.*/}
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
