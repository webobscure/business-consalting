import React from 'react';
import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button>Register</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
