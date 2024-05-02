// App.js

import React from 'react';
import Navbar from './Navbar';
import casualimage1 from '../assets/casualimage1.png';
import casualimg from '../assets/casualimg.jpg';

function Casual() {
  return (
    <>
      <Navbar />
      <div className='div'>
        <img src={casualimage1} alt="Collar" className='collar-top' />
        <p className='texts'>Sleeveless Jumpsuit</p>
        <img src={casualimg} alt="" className='collar-top2' />
      </div>
    </>
  );
}

export default Casual;
