import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>navbar page</h1>
      <div className="navbar-container">
        <img src="https://freedesignfile.com/upload/2017/10/Fashion-women-sign-with-logo-vectors-set-11.jpg" alt="Logo" className="logo" />
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/home">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/forms">Forms</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

