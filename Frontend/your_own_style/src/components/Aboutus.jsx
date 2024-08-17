import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Navbar from './Navbar';
import Frame from '../assets/Frame 43.png';
import about from '../assets/about.png';
import '../App.css'


function Aboutus() {
  return (
    <>
    <div>
        <Navbar/>
        
    </div>
     

      <div className='para'>
        
      <img src={about} alt="" className='aboutlogo' />
        <p className='text1'>
          Your_own_style, is a tailoring platform designed to cater to your unique fashion <br />With an array of brands like Fabindia, Siyaram, and Raymond, along with a <br />diverse selection of clothing options for various occasions, it offers personalized <br />style solutions.  Subscribe to the newsletter for the latest updates and trends.
        </p>
        <Link to="/home" className="shop-now-aboutus">Shop Now</Link> {/* Use Link to navigate to the home page */}
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

export default Aboutus;
