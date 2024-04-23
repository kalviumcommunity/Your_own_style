import React from 'react';
import './Landing.css';
import Navbar from './Navbar';
import fabindia from '../assets/fabindia.png';
import siyaramlogo from '../assets/siyaramlogo.png';
import raymond from '../assets/raymond.png';

function Landingpg() {
  return (
    <>
      <div id='land'>
        <Navbar />
        <div className="brand-container">
          <img src={fabindia} alt="Fabindia" className="brand-logo" />
          <img src={siyaramlogo} alt="Siyaram" className="brand-logo-white-bg" />
          <img src={raymond} alt="Raymond" className="brand-logo" />
        </div>
      </div>
    </>
  );
}

export default Landingpg;

