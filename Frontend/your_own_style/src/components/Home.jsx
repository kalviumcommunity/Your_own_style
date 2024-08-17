
import './Home.css';
import React from 'react';
import Navbar from './Navbar';
import jo from '../assets/jo.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css'

function Home() {
  return (
    <>
    <div className='whole'>
    <nav className="navbar">
      
     
      
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-menu">
          
          <Link to="/Signup" className='in'>Sign In</Link>
          <Link to="/Aboutus" className='in2'>About us</Link>
          <li>Contact us</li>
          <li>Consult Designer</li>
        </ul>
       
      </div>
    </nav>
    
    <div className='div'>
      
      <div>
        <h1 className='title2'>Discover and <br />Find your own Fashion!</h1>
        <h2 className='title3'>Explore our curated collection of stylish <br /> clothings are tailored to you <br />unique taste</h2>

       
      </div>  
         
      <img src={jo} alt="" className='image' />
       
    </div>
    
    
   
  
    </div>

    </>

  
);
}

export default Home;
