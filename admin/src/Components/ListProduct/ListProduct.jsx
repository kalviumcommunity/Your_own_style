import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]); // Initialize allproducts state with an empty array

    
    const fetchInfo = async () => {
        await fetch('https://your-own-style-1.onrender.com/allproducts')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    };

    useEffect(() => {
        fetchInfo(); // Fetch data when component mounts
    }, []); // Empty dependency array to ensure this effect runs only once

    const remove_product = async (id)=>{
        await fetch('https://your-own-style-1.onrender.com/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'Application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
            <hr />
            
                {allproducts.map((product, index) => {
                    return <><div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
                    </div>
                    <hr />
                    </>
                })}
            </div>
        </div>
    );
};

export default ListProduct;
