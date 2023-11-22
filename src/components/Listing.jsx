import React from 'react';
import img1 from '../assets/images/img1.png';


function Listing() {
  return (
    <div className="listing">
       <div className="listing-image">
       <img src={img1} alt="Description de l'image" />
      </div>
      <h1>Cozy loft on the Canal Saint-Martin</h1>
      <p>Paris, Île-de-France</p>
      <div className="tags">
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
    </div>
  );
}

export default Listing;
