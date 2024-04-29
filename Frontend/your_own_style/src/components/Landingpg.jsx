import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Landing.css';
import Navbar from './Navbar';
import fabindia from '../assets/fabindia.png';
import siyaramlogo from '../assets/siyaramlogo.png';
import raymond from '../assets/raymond.png';
import Frame from '../assets/Frame 43.png';
import casual3 from '../assets/casual3.jpeg';
import occasion from '../assets/occasion.jpeg';
import redsaree from '../assets/red saree.webp';
import casualimage2 from '../assets/casualimage2.jpg';
import Frame3 from '../assets/Frame3.png';

function Landingpg() {
  return (
    <>
      <div id='land'>
        <Navbar />
      </div>
      <div className="brand-container">
        <img src={fabindia} alt="Fabindia" className="brand-logo" />
        <img src={siyaramlogo} alt="Siyaram" className="brand-logo-white-bg" />
        <img src={raymond} alt="Raymond" className="brand-logo" />
      </div>

      <div className='para'>
        <p>
          Your_own_style, is a tailoring platform designed to cater to your unique fashion <br />With an array of brands like Fabindia, Siyaram, and Raymond, along with a <br />diverse selection of clothing options for various occasions, it offers personalized <br />style solutions.  Subscribe to the newsletter for the latest updates and trends.
        </p>
        <Link to="/home" className="shop-now-button">Shop Now</Link> {/* Use Link to navigate to the home page */}
      </div>

      <div className='images'>
        <div className='image-container'>
          <Link to="/casual">
            <img src={casual3} alt="" className='img1' />
          </Link>
          <p className='image-label'>Casual Wear</p>
        </div>
        <div className='image-container'>
          <img src={casualimage2} alt="" className='img4' />
          <p className='image-label'>Party Wear</p>
        </div>
        <div className='image-container'>
          <img src={occasion} alt="" className='img2' />
          <p className='image-label'>Office Wear</p>
        </div>
        <div className='image-container'>
          <img src={redsaree} alt="" className='img3' />
          <p className='image-label'>Wedding Wear</p>
        </div>
      </div>

      <div>
        <img src={Frame3} alt="" className='img5' />
      </div>

      <div className='footer'>
        <div className='title'>
          <h2>Brand</h2>
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
      </div>
    </>
  );
}

export default Landingpg;
