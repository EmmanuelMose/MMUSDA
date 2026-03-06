import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import {
  getPublicPrayerRequests,
  getLatestPrayerRequests,
  createPrayerRequest,
} from "../../Features/prayerRequest/prayerRequestAPI";
import "./PrayerRequest.css";

const PrayerRequest = () => {
  const [requests, setRequests] = useState([]);
  const [allRequests, setAllRequests] = useState([]);
  const [showAll, setShowAll] = useState(false);
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

  const fetchLatest = async () => {
    const data = await getLatestPrayerRequests();
    setRequests(data);
  };

  const fetchAll = async () => {
    const data = await getPublicPrayerRequests();
    setAllRequests(data);
    setRequests(data);
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  const handleShowMore = async () => {
    await fetchAll();
    setShowAll(true);
  };

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
      fetchLatest();
      setShowAll(false);
    } catch (error) {
      setMessage(error.message || "Failed to submit request");
    }

    setLoading(false);
  };

  return (
    <motion.div className="prayer-container">
      <div className="prayer-hero">
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
          and petition, with thanksgiving, present your requests to God."
        </p>
      </div>

      <section className="prayer-form-section">
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
                placeholder="Phone Number"
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
                required
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
            <Send size={18} style={{ marginLeft: "8px" }} />
          </button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </section>

      <section className="prayer-requests-section">
        <h2>Public Prayer Requests</h2>

        {requests.length === 0 ? (
          <p className="empty-text">No public prayer requests yet.</p>
        ) : (
          <div className="prayer-list">
            {requests.map((req) => (
              <div key={req.requestId} className="prayer-item">
                <h3>{req.title}</h3>
                <p className="prayer-author">
                  by {req.firstName} {req.lastName}
                </p>
                <p className="prayer-desc">{req.description}</p>
              </div>
            ))}
          </div>
        )}

        {!showAll && requests.length >= 5 && (
          <div style={{ marginTop: "20px" }}>
            <button className="submit-btn" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </section>

      <footer className="prayer-footer">
        <p>
          "The prayer of a righteous person is powerful and effective."
        </p>
      </footer>
    </motion.div>
  );
};

export default PrayerRequest;