
import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Banner from '../components/Banner'; 
import Dropdown from './DropDown'; // Importez le composant Dropdown
import img2 from '../assets/images/img2.png';
import '../assets/styles/style.scss'; 
//import resourcesData from '../assets/ressources.json'; 




function AboutContent() {

  const sections = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

  return (
    <div className="about-content">
      <Banner imageUrl={img2} altText="Description de l'image" />

      {sections.map((item, index) => (
        <Dropdown
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default AboutContent;
