import React from 'react';
import Banner from '../components/Banner'; 
import MainContent from '../components/MainContent';
import LocationCard from '../components/LocationCard';
import img1 from '../assets/images/img1.png';
import { Link } from 'react-router-dom';

// import LocationCard from 'path_to_LocationCard';
// import img1 from 'path_to_img1';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <Banner>
       
      </Banner>
     
      <MainContent />
    </div>
  );
}

export default Home;
