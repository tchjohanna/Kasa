// Carousel.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Définition du composant fonctionnel Carousel
const Carousel = ({ pictures }) => {
    // État local pour suivre l'index actuel de l'image
    const [index, setIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const next = () => {
        // Vérifie si l'index est inférieur à la longueur du tableau d'images - 1
        if (index < pictures.length - 1) {
            // Si oui, incrémente l'index
            setIndex(index + 1);
        } else {
            // Sinon, réinitialise l'index à 0 pour boucler vers la première image
            setIndex(0);
        }
    };

    // Fonction pour passer à l'image précédente
    const previus = () => {
        // Vérifie si l'index est supérieur à 0
        if (index > 0) {
            // Si oui, décrémente l'index
            setIndex(index - 1);
        } else {
            // Sinon, définis l'index à la dernière image pour boucler vers la fin
            setIndex(pictures.length - 1);
        }
    };

    // Rendu du composant Carousel avec les flèches de navigation, l'image actuelle, et le compteur d'images
    return (
        <div className="carousel">
            <div className="content-carousel">
                {/* Flèche gauche pour passer à l'image précédente */}
                <span className="arrow left" onClick={previus}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </span>
                {/* Image actuelle */}
                <img src={pictures[index]} alt="carousel" />
                {/* Flèche droite pour passer à l'image suivante */}
                <span className="arrow right" onClick={next}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                {/* Compteur d'images */}
                <span className='counter'>
                    <span>{index + 1}</span>
                    <span>/</span>
                    <span>{pictures.length}</span>
                </span>
            </div>
        </div>
    );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Carousel;
