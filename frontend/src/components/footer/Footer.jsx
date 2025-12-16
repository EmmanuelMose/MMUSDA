import React from 'react';
import './Footer.css';
import { FaHome, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main-content">
        {/* Section 1: About DeKUSDA Church */}
        <div className="footer-section footer-about">
          <h3>About MMUSDA Church</h3> 
          <p>A university-based Seventh-day Adventist Church centered on nurtitual growth, fellowship, and academic excellence through Christ.</p>
          <p className="footer-location">
            Location: Masinde Muliro University Of Science And Technology <br /> drough. Welcome home.
          </p>
        </div>

        {/* Section 2: Quick-Links Header */}
        <div className="footer-section footer-quicklinks-header">
          <h3>About</h3>
          <ul>
            <li><FaHome className="icon" /> Home</li>
          </ul>
          <h3>Quick-Links</h3>
        </div>

        {/* Section 3: Quick-Links */}
        <div className="footer-section footer-quicklinks">
          <h3>Quick-Links</h3>
          <ul>
            <li>Home</li>
            <li>Tithes & Offerings</li>
            <li>Announcements</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Section 4: About Mini */}
        <div className="footer-section footer-about-mini">
          <h3>About</h3>
          <ul>
            <li><FaHome className="icon" /> About Us</li>
            <li>Ministries</li>
            <li>Email: emmanuelmose806@gmail.com</li>
          </ul>
        </div>

        {/* Section 5: Quick-Links Mini */}
        <div className="footer-section footer-quicklinks-mini">
          <h3>Quick-Links</h3>
          <ul>
            <li>About Us</li>
            <li>Ministries</li>
            <li>Tithes & Offerings</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Section 6: Inquiries */}
        <div className="footer-section footer-inquiries-schedule">
          <h3>Inquiries</h3>
          <p>Prayers: Monday & 5:02pm - ull</p>
          <p>Bible Study 6:3PM - 8:0PM</p>
          <p>Divine Service</p>
          <p>2:00PM - 1:0PM</p>
        </div>

        {/* Section 7: Footer-Section (Schedule) */}
        <div className="footer-section footer-schedule-1">
          <h3>Footer-section</h3>
          <p><FaHome className="icon" /> Prayers: Monday & Wednesday 6:0PM</p>
          <p>Famle Study - 8:0PM</p>
          <p>Sabbatt School</p>
          <p>Callong a 1.8mtp</p>
        </div>

        {/* Section 8: Worship Hours */}
        <div className="footer-section footer-schedule-2">
          <h3>Worship Hours</h3>
          <p>Prayers: Monday & Wednesday</p>
          <p>Tuesday 7:00PM - 8:0PM</p>
          <br />
          <p>Vespers: Friday 6.20PM - 8:0PM</p>
          <p>Sabbatt School - 10:00AM</p>
          <p>Divine Service: 11:0PM</p>
          <p>Afteroom Fellowship</p>
          <p>2:00PM - 5:0PM</p>
        </div>

        {/* Section 9: For Inquiries (Contact Form) */}
        <div className="footer-section footer-contact-form">
          <h3>For Inquiries</h3>
          <p className="contact-subtext">Don't miss updates! Make an inquiry:</p>
          <div className="email-form">
            <input type="email" placeholder="Your mail here" />
            <button><FaEnvelope /></button>
          </div>
          <p className="social-text">Stay Connected:</p>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <SiViber className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaEnvelope className="social-icon" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Banner */}
      <div className="footer-bottom-banner">
        Footer bottom DeKUSDA Churd by Faith & Technology. | Built with ❤️ for our community ❤️
      </div>

      {/* Footer Bottom Links */}
      <div className="footer-bottom-links">
        <p>© 2025 MMUSDA Church. Powered by Faith & Technology. | Accessibility | Leaders</p>
        <div className="links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Accessibility</span>
          <span>| Leaders</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;