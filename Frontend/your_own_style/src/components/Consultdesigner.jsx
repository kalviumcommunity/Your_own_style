import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Navbar from './Navbar';
import Frame from '../assets/Frame 43.png';
import Designer from '../assets/Designer.png';
import '../App.css'


function Consultdesigner() {
  return (
    <>
    <div>
        <Navbar/>
        
    </div>
    

      <div className='para'>
      
        
      <img src={Designer} alt="" className='consult_designer' />

      <p className='designer_text'>Don't Compromise</p>
      <p className='designer_text1'>Get fashion stitched in your measurements</p>

      <div className="container">
      <div className="header">
        
        <div className="speech-bubble">Can I get any design?</div>
        <div className="speech-bubble-2">Yes. You can get any style, any design, stitched just for you</div>
      </div>
      <div className="form-container">
        <h2>Our Fashion Designer will call you and design your next fashion!</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Mobile number" />
        <button>Done</button>
      </div>
    </div>
    
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

export default Consultdesigner;
