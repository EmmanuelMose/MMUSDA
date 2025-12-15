import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../../assets/images/logo1.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header">
        <h1 className="main-heading">
          Welcome To Masinde Muliro University Seventh Day Adventist Church
        </h1>
      </header>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo1} alt="MMUSDA Logo" />
            <span>MMUSDA</span>
          </div>

          {/* Menu Toggle */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/departments">Departments</Link></li>

            {/* About Dropdown */}
            <li className="dropdown">
              <span>
                About <span className="arrow">▼</span>
              </span>
              <div className="dropdown-content">
                <Link to="/about/history">Our History</Link>
                <Link to="/about/beliefs">Beliefs</Link>
                <Link to="/about/mission">Mission & Vision</Link>
              </div>
            </li>

            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/offering">Offering</Link></li>

            {/* Evangelism Dropdown */}
            <li className="dropdown">
              <span>
                Evangelism <span className="arrow">▼</span>
              </span>
              <div className="dropdown-content">
                <Link to="/sermons">Sermons</Link>
                <Link to="/lessons">Lesson Discussion</Link>
                <Link to="/books">Books</Link>
                <Link to="/bible">Bible</Link>
              </div>
            </li>

            {/* Others Dropdown */}
            <li className="dropdown">
              <span>
                Others <span className="arrow">▼</span>
              </span>
              <div className="dropdown-content">
                <Link to="/announcements">Announcements</Link>
                <Link to="/prayers">Prayer Requests</Link>
                <Link to="/donations">Donations</Link>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
