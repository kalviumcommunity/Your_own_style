import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Landing.css';

function TopItem({ item, index }) {
  const sizes = [
    item.SIZE_1,
    item.SIZE_2,
    item.SIZE_3,
    item.SIZE_4,
    item.SIZE_5,
    item.SIZE_6,
  ];

  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

 


  const handleSizeClick = (index) => {
    setCurrentSizeIndex(index);
  };

  return (
    <div className="top-item" key={index}>
      <div className="navigation-arrow left" ></div>
      <img className="top-image" src={item.IMAGES} alt={item.NAME} />
      <div className="navigation-arrow right" ></div>
      <h1 className="top-name">{item.NAME}</h1>
      <p className="top-category">Category: {item.CATEGORIES}</p>
      <p className="top-rating">Rating: {item.RATING}</p>
      <p className="top-rating">COLOR: {item.COLOR}</p>
      <div className="size-options">
        {sizes.map((size, i) => (
          <div
            key={i}
            className={`size-option ${i === currentSizeIndex ? 'active' : ''}`}
            onClick={() => handleSizeClick(i)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

function Tops() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getalltops');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="tops-container">
        {data.map((item, index) => (
          <TopItem key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default Tops;
