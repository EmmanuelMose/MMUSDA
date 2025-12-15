import React, { useState } from "react";
import "./Navbar.css";
import logo1 from "../../assets/images/logo1.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*HEADER (UNCHANGED STYLING)*/}
      <header className="header">
        <h1 className="main-heading">
          Welcome To Masinde Muliro University Seventh Day Adventist Church
        </h1>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo1} alt="MMUSDA Logo" />
            <span>MMUSDA</span>
          </div>

          {/* Menu Toggle */}
          <div
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/departments">Departments</Link></li>
            <li className="dropdown">
              <a href="#">
                About <span className="arrow">▼</span>
              </a>
              <div className="dropdown-content">
                <Link to="/about/history">Our History</Link>
                <Link to="/about/beliefs">Beliefs</Link>
                <Link to="/about/mission">Mission & Vision</Link>
              </div>
            </li>

            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/offering">Offering</Link></li>

            <li className="dropdown">
              <a href="#">
                Evangelism <span className="arrow">▼</span>
              </a>
              <div className="dropdown-content">
                 <Link to="/sermons">Sermons</Link>
                <Link to="/lessons">Lesson Discussion</Link>
                <Link to="/books">Books</Link>
                <Link to="/bible">Bible</Link>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">
                Others <span className="arrow">▼</span>
              </a>
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
