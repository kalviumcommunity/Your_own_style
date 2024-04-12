import React from 'react';
import '../App.css';
import Navbar from './Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
      <h1>Hellooo</h1>
      <div className="container">
        <div className="image-container">
          <div className="row">
            <img src="https://images-static.cloudtailor.com/categories/dress.webp" alt="Image 1" className="circle-image" />
            <img src="https://images-static.cloudtailor.com/collections/Ethnic.webp" alt="Image 2" className="circle-image" />
            <img src="https://images-static.cloudtailor.com/collections/Casual.webp" alt="Image 3" className="circle-image" />
          </div>
          <div className="row">
            <img src="https://images-static.cloudtailor.com/collections/Formal.webp" alt="Image 4" className="circle-image" />
            <img src="https://images-static.cloudtailor.com/categories/blouse.webp" alt="Image 5" className="circle-image" />
            <img src="https://images-static.cloudtailor.com/categories/top.webp" alt="Image 6" className="circle-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



