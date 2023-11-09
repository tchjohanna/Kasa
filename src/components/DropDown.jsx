// Dropdown.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Définition du composant fonctionnel Dropdown
function Dropdown({ title, content }) {
    // Utilisation de l'état local pour gérer l'ouverture ou la fermeture du dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état du dropdown entre ouvert et fermé
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Rendu du composant Dropdown avec le titre, la flèche indiquant l'état, et le contenu (s'il est ouvert)
    return (
        <div className="dropdown-section">
            {/* Partie cliquable (titre) du dropdown avec la flèche indiquant l'état (ouvert/fermé) */}
            <div className="dropdown-title" onClick={toggleDropdown}>
                <span className="title-text">{title}</span>
                {/* Icône de flèche qui change en fonction de l'état du dropdown */}
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="arrow-icon" />
            </div>
            {/* Affiche le contenu seulement si le dropdown est ouvert */}
            {isOpen && <div className="dropdown-content">{content}</div>}
        </div>
    );
}

// Exportation du composant pour une utilisation dans d'autres fichiers
export default Dropdown;
