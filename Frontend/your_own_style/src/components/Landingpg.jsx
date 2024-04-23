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
        <div className='footer'>
          <div className='sb_footer section_padding'>
            <div className='sb_footer-links-div1'>
            

              <div className='sb_footer-links_div2'>
                <h4 className='title'>partners</h4>
                <a href="/employe">
                  <p className='yash'>Yash apparels</p>
                </a>
              </div>

              <div className='sb_footer-links_div'>
                <h4 className='text'>company</h4>
               
             
                <a href="/about">
                  <p className='t2'>about us</p>
                </a>
                <a href="/career">
                  <p className='t3'>Help</p>
                </a>
                <a href="/contact">
                  <p className='t4'>contact</p>
                </a>

              </div>

              
              <div className='socialmedia'>
                <p><img src="{fb}" alt="" /></p>
                <p><img src="{insta}" alt="" /></p>
                <p><img src="{wht}" alt="" /></p>
                <p><img src="{tw}" alt="" /></p>

              </div>
            </div>
          </div>
          <hr></hr>
          <div className='sb_footer-below'>
            <div className='sb_footer-copyright'>
              <p>
                @{new Date().getFullYear()} Your_own_style. All right reserved.
              </p>
            </div>
            <div className='sb_footer-below-links'>
              <a href="/terms"> <div><p>Terms and conditions</p></div></a>
              <a href="/privacy"> <div><p>privacy</p></div></a>  
              <a href="/secu"> <div><p>Security</p></div></a> 
              <a href="/coookie"> <div><p>cookie declaration</p></div></a>     
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Landingpg;

