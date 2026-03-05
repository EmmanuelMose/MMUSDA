import { useState } from "react";
import { motion } from "framer-motion";
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
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    <section className="contact-section">

      <div className="contact-container">

        <div className="contact-grid">

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <h2>
              Get in Touch with Our <span>MMUSDA CHURCH</span>
            </h2>

            <p className="contact-subtext">
              Whether you have a question, need counseling, or want to connect
              with our church family, we are here for you.
            </p>

            <div className="contact-cards">

              <div className="contact-card">
                <Mail size={22} />
                <div>
                  <p className="label">Email</p>
                  <p className="value">emmanuelmose806@gmail.com</p>
                </div>
              </div>

              <div className="contact-card">
                <Phone size={22} />
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+254718146250</p>
                </div>
              </div>

              <div className="contact-card">
                <MapPin size={22} />
                <div>
                  <p className="label">Location</p>
                  <p className="value">MMUST Campus, Kakamega</p>
                </div>
              </div>

            </div>

            <div className="social-links">

              <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
              </a>

              <a href="https://twitter.com" target="_blank">
                <FaTwitter />
              </a>

              <a href="https://instagram.com" target="_blank">
                <FaInstagram />
              </a>

              <a href="https://youtube.com" target="_blank">
                <FaYoutube />
              </a>

              <a href="mailto:emmanuelmose806@gmail.com">
                <FaEnvelope />
              </a>

              <a href="https://wa.me/254718146250" target="_blank">
                <FaWhatsapp />
              </a>

            </div>

          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h3>Send Message</h3>

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@email.com"
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+254..."
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="Counseling"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button className="contact-submit-btn" type="submit">
                Send Message
                <Send size={18} />
              </button>

              {status && <p className="status">{status}</p>}

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;