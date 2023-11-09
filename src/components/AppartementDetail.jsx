import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import resourcesData from '../assets/ressources.json'; 
import Dropdown from './DropDown'; 
import Carousel from './Carousel';
import NotFound from '../views/NotFound';
function AppartementDetail() {
    const { id } = useParams();

    const appartement = resourcesData.find((resource) => {
        return resource.id === id
    });

    const [isDescriptionDropdownOpen, setIsDescriptionDropdownOpen] = useState(false);
    const [isEquipementsDropdownOpen, setIsEquipementsDropdownOpen] = useState(false);

    const formatName = (name) => {
        return name.replace(' ', ' \n');
    };
    

 


    if (!appartement) {
        return <NotFound />;
    }

    return (
        <div className="appartement-detail">
            <Carousel pictures={appartement.pictures} />
            <div className="row">
                <div className="col">
                    <div>
                        <h1>{appartement.title}</h1>
                        <p className="location">{appartement.location}</p>
                    </div>
                    <div className="tags">
                        {appartement.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="header">
                    {/* Ici j'ai ajouté le rendu de l'image et du nom de l'hôte */}
                    
                    <div className="host-details">
                        <p className="host-name">{formatName(appartement.host.name)}</p>
                        <img src={appartement.host.picture} alt={appartement.host.name} className="host-picture" />

                    </div>
                    <div className="rating">
                        {Array(5).fill().map((_, i) => (
                            <span key={i} className={i < appartement.rating ? "" : "grey"}>★</span>
                        ))}
                    </div>
                </div>
            </div>
            
            
            
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

export default AppartementDetail;
