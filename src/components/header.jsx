import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/main.css';
import logo from "../assets/logo.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };
  return (
    <header>
      <div className="h-par">
      <div className="h-c1">
      <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
         
        </div>
        <div className={`h-c2 ${isNavVisible ? 'show' : ''}`}>
        <HashLink to="/#" onClick={closeNav}>Home</HashLink>
        <HashLink to="/#articles" onClick={closeNav}>Products</HashLink>
          <HashLink to="/#about-us" onClick={closeNav}>About Us</HashLink>
          <Link to="/manufacturing" onClick={closeNav}>Manufacturing</Link>
          <HashLink to="/#light" onClick={closeNav}>Contact Us</HashLink>
          
        </div>

        {/* <div className="h-c3">
          <i className="fa-regular fa-user"></i> 
          <i className="fa-regular fa-heart"></i> 
          <div className="h-c31">0</div>        
        </div> */}
        
        <div className="menu-icon" onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i> 
        </div>
      </div>
    </header>
  );
}

export default Header;