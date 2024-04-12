import React from 'react';
import '../App.css';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hellooo</h1>
      <div className="container">
        <div className="image-container">
          <div className="row">
            <div className="image-wrapper">
              <img src="https://images-static.cloudtailor.com/categories/dress.webp" alt="Casual Wear" className="circle-image" />
              <div className="image-label">Casual Wear</div>
            </div>
            <div className="image-wrapper">
              <img src="https://images-static.cloudtailor.com/collections/Ethnic.webp" alt="Party Wear" className="circle-image" />
              <div className="image-label">Party Wear</div>
            </div>
            <div className="image-wrapper">
              <img src="https://images-static.cloudtailor.com/collections/Casual.webp" alt="Tops" className="circle-image" />
              <div className="image-label">Tops</div>
            </div>
          </div>
          <div className="row">
            <div className="image-wrapper">
              <img src="https://images-static.cloudtailor.com/collections/Formal.webp" alt="Formal Wear" className="circle-image" />
              <div className="image-label">Formal Wear</div>
            </div>
            <div className="image-wrapper">
              <img src="https://images-static.cloudtailor.com/categories/blouse.webp" alt="Blouse" className="circle-image" />
              <div className="image-label">Blouse</div>
            </div>
            <div className="image-wrapper">
              <img src="https://images-static.cloudtailor.com/categories/top.webp" alt="Tops" className="circle-image" />
              <div className="image-label">Tops</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




