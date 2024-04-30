
import './Home.css';
import React from 'react';
import Navbar from './Navbar';
import green from '../assets/green.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Vector from '../assets/Vector.png'
import contact from '../assets/contact.png'
import '../App.css'

function Home() {
  return (
    <>
    <div className='whole'>
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
          <Link to="/Signup">Sign In</Link>
        </ul>
        <img src={Vector} alt="Logo" className="vector" />
        <img src={contact} alt=""  />
      </div>
    </nav>
    
    <div className='div'>
      
      <div>
        <h1 className='title2'>Discover and <br />Find your own Fashion!</h1>
      </div>     
      <img src={green} alt="" className='image' />
    </div>
   
  
    </div>

    </>

  
);
}

export default Home;
