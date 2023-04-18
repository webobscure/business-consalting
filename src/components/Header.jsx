import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <nav className="nav">
            <ul>Logo</ul>
            <ul className="nav">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#">About</a>
              </li>
              <li className="nav-link">
                <a href="#">Pricing</a>
              </li>
              <li className="nav-link">
                <a href="#">Service</a>
              </li>
              <li className="nav-link">
                <a href="#">Blog</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="control">
              <li>
                <button className="btn">Register</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
