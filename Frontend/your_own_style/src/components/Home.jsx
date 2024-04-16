import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import image from '../assets/image.jpeg'
import partywear from '../assets/partywear.jpeg'
import skirts from '../assets/skirts.jpeg'



function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hellooo</h1>
      <div className="container">
        <div className="image-container">
          
          <div className="row">
            <Link to="/top" className="image-link">
              <div className="image-wrapper">
                <img src={image} alt="Casual Wear" className="circle-image" />
                <div className="image-label">Blouse</div>
              </div>
            </Link>
            <Link to="/party-wear" className="image-link">
              <div className="image-wrapper">
                <img src="https://images-static.cloudtailor.com/collections/Ethnic.webp" alt="Party Wear" className="circle-image" />
                <div className="image-label">Occasion</div>
              </div>
            </Link>
            <Link to="/tops" className="image-link">
              <div className="image-wrapper">
                <img src="https://images-static.cloudtailor.com/collections/Casual.webp" alt="Tops" className="circle-image" />
                <div className="image-label">Casual</div>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/formal-wear" className="image-link">
              <div className="image-wrapper">
                <img src="https://images-static.cloudtailor.com/collections/Formal.webp" alt="Formal Wear" className="circle-image" />
                <div className="image-label">Formal Wear</div>
              </div>
            </Link>
            <Link to="/blouse" className="image-link">
              <div className="image-wrapper">
                <img src={skirts} alt="Blouse" className="circle-image" />
                <div className="image-label">Skirts and pants</div>
              </div>
            </Link>
            <Link to="/more-tops" className="image-link">
              <div className="image-wrapper">
                <img src={partywear} alt="More Tops" className="circle-image" />
                <div className="image-label">Party wear</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;





