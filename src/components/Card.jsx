import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, imageUrl, id }) { // ajoutez 'id' comme prop
    return (
        <Link to={`/appartement/${id}`}> {/* utilisez 'id' pour construire le lien */}
            <div className="card">
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
            </div>
        </Link>
    );
}

export default Card;