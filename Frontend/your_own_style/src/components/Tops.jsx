import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Landing.css';

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
        {data.map((item,index) => (
          <div className="top-item" key={index}>
            <h1 className="top-name">{item.NAME}</h1>
            <p className="top-category">Category: {item.CATEGORIES}</p>
            <p className="top-rating">Rating: {item.RATING}</p>
            <p className="top-size1">Size 1: {item.SIZE_1}</p>
            <p className="top-size2">Size 2: {item.SIZE_2}</p>
            <p className="top-size3">Size 3: {item.SIZE_3}</p>
            <p className="top-size4">Size 4: {item.SIZE_4}</p>
            <p className="top-size5">Size 5: {item.SIZE_5}</p>
            <p className="top-size6">Size 6: {item.SIZE_6}</p>
            <img className="top-image" src={item.IMAGES} alt={item.NAME} />
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Tops;
