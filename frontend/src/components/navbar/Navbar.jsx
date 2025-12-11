import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-heading-container">
        <h1 className="main-heading">Masinde Muliro University Seventy Day Adventist Church</h1>
      </div>
      <div className="navbar-container">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <a href="#" className="logo-link">
              <img src="/SDA_logo.png" alt="SDA Logo" className="logo" />
              <span>MMUSDA</span>
            </a>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Departments</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">About <span className="arrow">▼</span></a>
            <div className="dropdown-content">
              <a href="#">Our History</a>
              <a href="#">Beliefs</a>
              <a href="#">Mission and Vision</a>
              <a href="#">Homechurches</a>
              <a href="#">Families</a>
            </div>
          </li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Offering</a></li>
          <li><a href="#">Evangelism</a></li>
          <li><a href="#">Music</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
