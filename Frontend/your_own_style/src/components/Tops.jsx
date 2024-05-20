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

  const handleRightClick = () => {
    setCurrentSizeIndex((prevIndex) => (prevIndex === sizes.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLeftClick = () => {
    setCurrentSizeIndex((prevIndex) => (prevIndex === 0 ? sizes.length - 1 : prevIndex - 1));
  };

  return (
    <div className="top-item" key={index}>
      <h1 className="top-name">{item.NAME}</h1>
      <p className="top-category">Category: {item.CATEGORIES}</p>
      <p className="top-rating">Rating: {item.RATING}</p>
      <p className="top-size">Size: {sizes[currentSizeIndex]}</p>
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      <img className="top-image" src={item.IMAGES} alt={item.NAME} />
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
