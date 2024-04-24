import React from 'react';
import './Landing.css';
import Navbar from './Navbar';
import fabindia from '../assets/fabindia.png';
import siyaramlogo from '../assets/siyaramlogo.png';
import raymond from '../assets/raymond.png';
import Frame from '../assets/Frame 43.png';
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

              <div className='title2'>
                <h2>About</h2>
                <h2>contact</h2>
                
           
              </div>



              
  
        
       
           
          

        </div>
     
    </>
  );
}

export default Landingpg;

