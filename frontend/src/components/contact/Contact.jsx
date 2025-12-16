import React from 'react';
import './Contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <main className="contact-main">
        {/* Left Information Panel */}
        <div className="info-panel panel-animation">
          <h2>We're Glad You're Here!</h2>
          <p>
            Thank you for visiting our website. Whether you're seeking a place to
            worship, have questions about faith, or simply need someone to talk to, our
            church family is here for you.
          </p>
          <p>
            As a Seventh-day Adventist community, we believe in sharing the love of
            Christ, honoring the Sabbath, and living with hope in His soon return.
          </p>
          <p>
            Feel free to reach out — we'd love to connect, pray with you, or welcome
            you to one of our Sabbath services.
          </p>
          <div className="contact-details">
            <strong>Masinde Muliro University SDA Church</strong>
            <p>emmanuelmose806@gmail.com</p>
            <p>+254718146250</p>
          </div>
        </div>

        {/* Right Form and Social Panel */}
        <div className="form-panel panel-animation">
          <h2>Get in touch</h2>
          <form className="contact-form">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group message-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </div>
            
            <div className="form-right social-links-block">
              <p className="social-heading">Stay Connected:</p>
              <div className="social-item">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF className="social-icon facebook-icon" /> Facebook</a>
              </div>
              <div className="social-item">
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="social-icon twitter-icon" /> Twitter</a>
              </div>
              <div className="social-item">
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="social-icon instagram-icon" /> Instagram</a>
              </div>
              <div className="social-item">
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube className="social-icon youtube-icon" /> YouTube</a>
              </div>
              <div className="social-item">
                <a href="mailto:emmanuelmose806@gmail.com"><FaEnvelope className="social-icon email-icon" /> Email</a>
              </div>
              <div className="social-item">
                <a href="#"><SiViber className="social-icon viber-icon" /> Viber</a>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;