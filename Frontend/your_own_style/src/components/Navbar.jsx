import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css'

function Navbar() {
  return (
    <nav className="navbar">
      
     
      
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-menu">
          
          <Link to="/Signup" className='in'>Sign In</Link>
          <Link to="/Aboutus" className='in2'>About us</Link>
          <Link to="/Contactus" className='in3'>Contact us</Link>
          <Link to="/Consultdesigner" className='in4'>Contact Designer</Link>
         
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;


