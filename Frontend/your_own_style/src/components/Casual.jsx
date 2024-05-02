// App.js

import React from 'react';
import Navbar from './Navbar';
import collar from '../assets/collar.jpeg';

function Casual() {
  return (
    <>
      <Navbar />
      <div className='div'>
        <img src={collar} alt="Collar" className='collar-top' />
        <div className="text-below-image">
          <p className='top'>Regular Fit Long Sleeve Top</p>
        </div>
      </div>
    </>
  );
}

export default Casual;
