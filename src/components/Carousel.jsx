import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Définition du composant Carousel qui prend `pictures` comme prop
const Carousel = ({ pictures }) => {
    // Utilisation du hook useState pour gérer l'index de l'image actuelle
    const [index, setIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const next = () => {
        if (index < pictures.length - 1) setIndex(index + 1);
        else setIndex(0); // Retour au début si on est sur la dernière image
    };

    // Fonction pour revenir à l'image précédente
    const previous = () => {
        if (index > 0) setIndex(index - 1);
        else setIndex(pictures.length - 1); // Aller à la dernière image si on est sur la première
    };

    return (
        <div className="carousel">
            <div className="content-carousel">
                {/* Rendu conditionnel du chevron gauche : affiché seulement s'il y a plus d'une image */}
                {pictures.length > 1 && (
                    <span className="arrow left" onClick={previous}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                )}

                {/* Image actuelle du carrousel */}
                <img src={pictures[index]} alt="carousel" />

                {/* Rendu conditionnel du chevron droit : affiché seulement s'il y a plus d'une image */}
                {pictures.length > 1 && (
                    <span className="arrow right" onClick={next}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                )}

                {/* Affichage de l'index de l'image actuelle et du nombre total d'images */}
                <span className='counter'>
                    <span>{index + 1}</span>
                    <span>/</span>
                    <span>{pictures.length}</span>
                </span>
            </div>
        </div>
    );
};

export default Carousel;
