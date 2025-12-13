import React, { useState } from "react";
import "./Navbar.css";
import logo1 from "../../assets/images/logo1.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </div>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li className="logo-link">
            <img src={logo1} alt="SDA Logo" className="logo" />
            <span>MMUSDA</span>
          </li>

          <li><a href="#">Home</a></li>
          <li><a href="#">Departments</a></li>

          <li className="dropdown">
            <a href="#" className="dropbtn">
              About <span className="arrow">▼</span>
            </a>
            <div className="dropdown-content">
              <a href="#">Our History</a>
              <a href="#">Beliefs</a>
              <a href="#">Mission & Vision</a>
            </div>
          </li>

          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Offering</a></li>

          <li className="dropdown">
            <a href="#" className="dropbtn">
              Evangelism <span className="arrow">▼</span>
            </a>
            <div className="dropdown-content">
              <a href="#">Sermons</a>
              <a href="#">Lesson Discussion</a>
              <a href="#">Books</a>
              <a href="#">Bible</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="#" className="dropbtn">
              Others <span className="arrow">▼</span>
            </a>
            <div className="dropdown-content">
              <a href="#">Announcements</a>
              <a href="#">Prayer Requests</a>
              <a href="#">Donations</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
