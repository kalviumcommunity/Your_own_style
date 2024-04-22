import React from 'react';
import logo from '../assets/logo.png';
import Vector from '../assets/Vector.png'
import contact from '../assets/contact.png'

function Navbar() {
  return (
    <nav className="navbar">
      
     
      
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-menu">
          <li>New</li>
          <li>Tops</li>
          <li>Bottoms</li>
          <li>Kids</li>
          <li>Accessories</li>
          <li>Collections</li>
          <li>Sale</li>
        </ul>
        <img src={Vector} alt="Logo" className="vector" />
        <img src={contact} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;


