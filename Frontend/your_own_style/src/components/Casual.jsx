// App.js

import React from 'react';
import Navbar from './Navbar';
import green from '../assets/green.png';



function Casual() {
  return (
      <>
      <Navbar />
      
      <div className='div'>
        <img src={green} alt="" className='img1' />
        <div>
          <h1 className='title2'>Discover and <br />Find your own Fashion!</h1>
        </div>     
      </div>
     
      </>
    
  );
}

export default Casual;