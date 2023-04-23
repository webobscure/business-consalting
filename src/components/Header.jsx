import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleClass}>
          {isActive ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={isActive ? 'navbar active' : 'navbar'}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
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
