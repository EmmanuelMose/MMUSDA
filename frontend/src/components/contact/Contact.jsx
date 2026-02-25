import { useState } from "react";
import "./Contact.css";
import { createContact } from "../../Features/contacts/contactsAPI";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await createContact(form);

    if (res?.message) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send message");
    }

    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <div className="contact-page-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <main className="contact-main">
        <div className="info-panel glass-panel animate-left">
          <h2>We're Glad You're Here!</h2>
          <p>
            Thank you for visiting our website. Whether you're seeking a place to worship or need someone to talk to, our church family is here for you.
          </p>

          <p>
            As a Seventh-day Adventist community, we believe in sharing the love of Christ and living with hope in His soon return.
          </p>

          <div className="contact-details">
            <strong>Masinde Muliro University SDA Church</strong>
            <p>emmanuelmose806@gmail.com</p>
            <p>+254718146250</p>
          </div>
        </div>

        <div className="form-panel glass-panel animate-right">
          <h2>Get in touch</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-left">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Your Phone Number" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" required />
              </div>

              <div className="form-group message-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Your Message" required />
              </div>

              <button className="submit-btn" type="submit">Send Message</button>

              {status && <p className="status">{status}</p>}
            </div>

            <div className="form-right social-links-block">
              <p className="social-heading">Stay Connected:</p>

              <div className="social-item">
                <a href="https://facebook.com" target="_blank">
                  <FaFacebookF className="social-icon facebook-icon" /> Facebook
                </a>
              </div>

              <div className="social-item">
                <a href="https://twitter.com" target="_blank">
                  <FaTwitter className="social-icon twitter-icon" /> Twitter
                </a>
              </div>

              <div className="social-item">
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram className="social-icon instagram-icon" /> Instagram
                </a>
              </div>

              <div className="social-item">
                <a href="https://youtube.com" target="_blank">
                  <FaYoutube className="social-icon youtube-icon" /> YouTube
                </a>
              </div>

              <div className="social-item">
                <a href="mailto:emmanuelmose806@gmail.com">
                  <FaEnvelope className="social-icon email-icon" /> Email
                </a>
              </div>

              <div className="social-item">
                <a href="https://wa.me/254718146250" target="_blank">
                  <FaWhatsapp className="social-icon whatsapp-icon" /> WhatsApp
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;