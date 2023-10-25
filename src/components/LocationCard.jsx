import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function LocationCard(props) {
    return (
        <div className="location-card">
            {props.children} 
            
        </div>
    );
}

export default LocationCard;
