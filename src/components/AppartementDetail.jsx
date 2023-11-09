// Importation des bibliothèques et composants nécessaires
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import resourcesData from '../assets/ressources.json'; 
import Dropdown from './DropDown'; 
import Carousel from './Carousel';
import NotFound from '../views/NotFound';
import Card from '../components/Card';

// Définition du composant fonctionnel AppartementDetail
function AppartementDetail() {
    // Extraction de l'ID de l'URL avec le hook useParams de React Router
    const { id } = useParams();
    // État local pour stocker les données de l'appartement
    const [appartement, setAppartement] = useState(null);
    // États locaux pour gérer l'état des dropdowns
    const [isDescriptionDropdownOpen, setIsDescriptionDropdownOpen] = useState(false);
    const [isEquipementsDropdownOpen, setIsEquipementsDropdownOpen] = useState(false);
    // Exemples d'ID pour les composants Card
    const f72a452f = undefined;
    const bc6f7112 = null;

    // Effet useEffect pour charger les données de l'appartement lors du montage du composant
    useEffect(() => {
        try {
            // Recherche de l'appartement dans les données en fonction de l'ID extrait de l'URL
            const fetchedAppartement = resourcesData.find((resource) => {
                return resource.id === id
            });

            // Gestion de l'erreur si aucun appartement n'est trouvé avec l'ID fourni
            if (!fetchedAppartement) {
                console.error(`Erreur : ID indisponible`);
                throw new Error(`ID indisponible`);
            }

            // Mise à jour de l'état local avec les données de l'appartement
            setAppartement(fetchedAppartement);
            // Logique supplémentaire si nécessaire

        } catch (error) {
            // Gestion des erreurs potentielles lors de la recherche ou de la mise à jour des données
            console.error(`Erreur : ${error.message}`);
        }
    }, [id]);

    // Vérification de la présence de l'ID ou de l'appartement, redirection vers NotFound si nécessaire
    if (!id || !appartement) {
        console.error("Aucun ID n'a été fourni ou aucun appartement trouvé.");
        return <NotFound />;
    }
    
    // Fonction utilitaire pour formater le nom de l'hôte
    const formatName = (name) => {
        return name.replace(' ', ' \n');
    };

    // Rendu du composant
    return (
        <div className="appartement-detail">
            {/* Utilisation du composant Card avec des exemples d'images et d'ID */}
            <Card title="Exemple 1" imageUrl="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg" id={f72a452f} />
            <Card title="Exemple 2" imageUrl="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg" id={bc6f7112} />
            <Card title="Exemple 3" imageUrl="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg"  />

            {/* Utilisation du composant Carousel pour afficher les images de l'appartement */}
            <Carousel pictures={appartement.pictures} />

            {/* Section de grille pour afficher les détails de l'appartement */}
            <div className="row">
                <div className="col">
                    <div>
                        {/* Titre et emplacement de l'appartement */}
                        <h1>{appartement.title}</h1>
                        <p className="location">{appartement.location}</p>
                    </div>
                    {/* Liste de tags générée à partir des données de l'appartement */}
                    <div className="tags">
                        {appartement.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="header">
                    {/* Section pour afficher l'image et le nom de l'hôte */}
                    <div className="host-details">
                        <p className="host-name">{formatName(appartement.host.name)}</p>
                        <img src={appartement.host.picture} alt={appartement.host.name} className="host-picture" />
                    </div>
                    {/* Section pour afficher la notation de l'appartement avec des étoiles */}
                    <div className="rating">
                        {Array(5).fill().map((_, i) => (
                            <span key={i} className={i < appartement.rating ? "" : "grey"}>★</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conteneur pour les dropdowns (description et équipements) */}
            <div className="dropdown-container">
                <Dropdown 
                    title="Description" 
                    content="Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement." 
                />
                <Dropdown 
                    title="Equipements" 
                    content={appartement.description} 
                />
            </div>
        </div>
    );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default AppartementDetail;
