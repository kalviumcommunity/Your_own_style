
import React from 'react';
import Navbar from './Navbar';
import Lehenga from '../assets/Lehenga.jpeg'
import './Occasion.css'
import lehenga2 from '../assets/lehenga2.jpeg'
import occasion from '../assets/occasion.jpeg'




function Occasion(){
  return(
    <div>
      <Navbar />
      <div>
        <div>
        <img src={lehenga2} alt="" className='leh2' />

        </div>
        
        <img src={Lehenga} alt="" className='lehenga'/>
        <img src={occasion} alt=""  className='oc'/>
        
      


      </div>
     
    </div>
  )
}

export default Occasion;