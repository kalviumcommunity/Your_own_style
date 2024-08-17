import React from 'react';
import './Navbar.css';
import navlogo from  "../../assets/nav-logo.svg";
import navProfile from '../../assets/Nav-logo1.jpg';

const Navbar = () => {
    return (
        <div className='navbar'> 
            <img src={navlogo} alt="" className="nav-logo" />
            <div className='nav-img'>
                <img src={navProfile} alt="" className="nav-profile" />
            </div>
        </div>
    );
}

export default Navbar;
