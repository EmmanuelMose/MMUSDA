import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import {
  getPublicPrayerRequests,
  createPrayerRequest,
} from "../../Features/prayerRequest/prayerRequestAPI";
import "./PrayerRequest.css";

const PrayerRequest = () => {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    description: "",
    isPublic: "yes",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchRequests = async () => {
    try {
      const data = await getPublicPrayerRequests();
      setRequests(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await createPrayerRequest(formData);

      setMessage("Prayer request submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        title: "",
        description: "",
        isPublic: "yes",
      });

      fetchRequests();
    } catch (error) {
      setMessage(error.message || "Failed to submit request");
    }

    setLoading(false);
  };

  return (
    <div className="prayer-container">

      <motion.div
        className="prayer-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="hero-badge">
          <Heart size={18} />
          <span>We Pray With You</span>
        </div>

        <h1>Prayer Request</h1>

        <p className="hero-sub">
          No burden is too heavy when shared. Our prayer team is here to lift you
          up in faith.
        </p>

        <p className="bible-verse">
          "Do not be anxious about anything, but in every situation, by prayer
          and petition, with thanksgiving, present your requests to God." –
          Philippians 4:6
        </p>
      </motion.div>

      <motion.section
        className="prayer-form-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Submit Your Prayer Request</h2>

        <form className="prayer-form" onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <input
                name="phoneNumber"
                placeholder="Phone Number (optional)"
                value={formData.phoneNumber}
                onChange={handleChange}
              />

              <input
                name="title"
                placeholder="Prayer Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                placeholder="Share your prayer request..."
                value={formData.description}
                onChange={handleChange}
              />

              <select
                name="isPublic"
                value={formData.isPublic}
                onChange={handleChange}
              >
                <option value="yes">Public</option>
                <option value="no">Private</option>
              </select>
            </div>

          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Submitting..." : "Submit Prayer Request"}
          </button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </motion.section>

      <section className="prayer-requests-section">

        <h2>Public Prayer Requests</h2>

        {requests.length === 0 ? (
          <p className="empty-text">
            No public prayer requests yet. Be the first to submit!
          </p>
        ) : (
          <div className="prayer-list">

            {requests.map((req) => (
              <motion.div
                key={req.requestId}
                className="prayer-item"
                whileHover={{ y: -5 }}
              >
                <h3>{req.title}</h3>

                <p className="prayer-author">
                  by {req.firstName} {req.lastName}
                </p>

                <p className="prayer-desc">{req.description}</p>

              </motion.div>
            ))}

          </div>
        )}

      </section>

      <footer className="prayer-footer">
        <p>
          "The prayer of a righteous person is powerful and effective." –
          James 5:16
        </p>
      </footer>

    </div>
  );
};

export default PrayerRequest;