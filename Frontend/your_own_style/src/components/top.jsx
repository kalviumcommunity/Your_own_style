import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Aari from '../assets/Aari.jpeg';
import Outfits from '../assets/Outfits.jpeg';
import boatneck from '../assets/boatneck.jpeg';



function Top() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='cover'>
          <img src={Aari} alt="" className='bg' />
        </div>
    
        <div className='content'>
          <img src={Outfits} alt="" className='bg2' />
          <div className='fullcont'>
          <div className='para'>
            <h2 className='tit'>Puff Blouse</h2>
            <p>
             A buff blouse is a stylish top in a soft, neutral color that looks like the shade of buff leather. <br />It's versatile, meaning it can be worn for different types of events. <br /> You can easily match it with other clothes and accessories because of its simple color. <br />Whether you're going for a casual or formal look, a buff blouse adds a touch of class and comfort to your outfit. <br /> It's a classic choice that never goes out of style, perfect for any occasion where you want to look chic and put-together.</p>
          </div>
            
          </div>
        
        </div>

        <div className='content2'>
          <img src={boatneck} alt="" className='bg3' />
          <div className='fullcont2'>
          <div className='para2'>
            <h2 className='h2'>Boat neck blouse</h2>
            <p className='tit1'>A boat neck blouse features a wide neckline that runs horizontally, resembling the shape of a boat. <br />  
             Its timeless design makes it a wardrobe essential for classic and modern fashion statements <br />   It highlights the collarbones and shoulders, offering an elegant and versatile look suitable for various occasions. <br /></p>
            
             
          </div>
            
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Top;
