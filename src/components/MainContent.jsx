import React from 'react';
import Card from './Card'; 
import resourcesData from '../assets/ressources.json'; 
import '../assets/styles/style.scss'; 
import img1 from '../assets/images/img1.png';
import Banner from '../components/Banner'; 
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';




function MainContent() {
    const allResources = resourcesData;
    
    return (
        <div>
            <Banner imageUrl={img1} altText="Description de l'image" />
            <div className="locations">
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


export default MainContent;
