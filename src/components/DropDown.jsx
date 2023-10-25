import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 


function Dropdown({ title, content, isOpen, toggleDropdown }) {
    return (
      <div className="dropdown-section">
        <div className="dropdown-title" onClick={toggleDropdown}>
          <span className="title-text">{title}</span>
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="arrow-icon" />
        </div>
        {isOpen && <div className="dropdown-content">{content}</div>}
      </div>
    );
  }
  
  export default Dropdown;
  

  /**Dans le composant Dropdown, nous recevons plusieurs props :
title: Le titre de la section du dropdown.
content: Le contenu de la section du dropdown.
isOpen: Un booléen qui indique si le dropdown est ouvert ou fermé.
toggleDropdown: Une fonction pour ouvrir ou fermer le dropdown lorsqu'on clique sur le titre. */