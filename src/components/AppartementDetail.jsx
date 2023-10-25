import React from 'react';
import { useParams } from 'react-router-dom';
import resourcesData from '../assets/ressources.json'; 

console.log("Données de resourcesData:", resourcesData);

function AppartementDetail() {
    const { id } = useParams();
    console.log("ID récupéré:", id);
    
    // Convertissez l'ID en un index numérique
    const index = Number(id);

    // Accédez à l'appartement en utilisant l'index
    const appartement = resourcesData[index];

    console.log("Tous les identifiants:", resourcesData.map(appt => appt.identifiant));
    console.log("Appartement trouvé:", appartement);

    if (!appartement) {
        return <div>Appartement non trouvé</div>;
    }

    return (
        <div className="appartement-detail">
            <header className="header">
                {/* Logo et navigation */}
                <img src="path_to_logo" alt="Kosa Logo" />
                <nav>
                    <a href="/">Accueil</a>
                    <a href="/about">À propos</a>
                </nav>
            </header>
            <img src={appartement.cover} alt={appartement.title} className="appartement-image" />
            <h1>{appartement.title}</h1>
            <p className="location">{appartement.location}</p>
            <div className="tags">
                {/* Ici, vous pouvez mapper sur les mots clés de l'appartement pour les afficher */}
                {appartement["Mots clés"].map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <p className="description">{appartement.description}</p>
            {/* Autres détails comme la description, le prix, etc. */}
        </div>
    );
}

export default AppartementDetail;
