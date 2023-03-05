import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/assets/logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/" >Home</Link></p>
          <p><Link to="/about" >About</Link></p>
          <p><Link to="/shop" >Shop</Link></p>
          <p><Link to="/contact" >Contact</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar_search">
        <input type="text" />
      </div>
    </div>
  );
};

export default Navbar;