import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Navbar from './Navbar';
import Frame from '../assets/Frame 43.png';
import Contact from '../assets/Contact.png';
import '../App.css'


function Contactus() {
  return (
    <>
        <Navbar/>
     

      <div className='para'>
      
      <img src={Contact} alt="" className='contact' />
      <h1 className='contact_classname'>Contact Us</h1>
      
        <Link to="/" className="shop-now-aboutus">Back To Shopping</Link> {/* Use Link to navigate to the home page */}
      </div>

     
      <div className='footer'>
        <div className='title'>
          
          <h3 className='h3'>Subscribe to our newsletter</h3>
          <p className='p tag'>Your_own_style is a tailoring website <br />created specially for you  </p>
        </div>
        <h3 className="footer-heading"></h3>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email to subscribe"
            />
            <button type="submit" className="btn btn-primary">
              <img src={Frame} alt="" className='arrow' />
            </button>
            
          </div>
        </form>
        <div className='foot'>
            <h2 className='f1'>Contact</h2>
            <h2 className='f2'>About us</h2>
            <h2 className='f3'>Feedback</h2>
            <h2></h2>
        </div>
           
      </div>
    </>
  );
}

export default Contactus;
