import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
function Dropdown({ title, content }) {
    // Ici, les variables title, content, et isOpen sont accessibles :
    console.log(title, content);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
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
