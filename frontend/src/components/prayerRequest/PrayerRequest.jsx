import React, { useEffect, useState } from "react";
import { getPublicPrayerRequests, createPrayerRequest } from "../../Features/prayerRequest/prayerRequestAPI";
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
      setMessage("🙏 Prayer request submitted successfully!");
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
      <header className="prayer-header">
        <h1>Prayer Requests</h1>
        <p className="bible-verse">"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." – Philippians 4:6</p>
      </header>

      <section className="prayer-form-section">
        <h2>Submit Your Prayer Request</h2>
        <form className="prayer-form" onSubmit={handleSubmit}>
          <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input name="phoneNumber" placeholder="Phone Number (optional)" value={formData.phoneNumber} onChange={handleChange} />
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
          <select name="isPublic" value={formData.isPublic} onChange={handleChange}>
            <option value="yes">Public</option>
            <option value="no">Private</option>
          </select>
          <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
        </form>
        {message && <p className="form-message">{message}</p>}
      </section>

      <section className="prayer-requests-section">
        <h2>Public Prayer Requests</h2>
        {requests.length === 0 ? (
          <p>No public prayer requests yet. Be the first to submit!</p>
        ) : (
          <ul className="prayer-list">
            {requests.map((req) => (
              <li key={req.requestId} className="prayer-item">
                <h3>{req.title}</h3>
                <p className="prayer-author">by {req.firstName} {req.lastName}</p>
                <p className="prayer-desc">{req.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer className="prayer-footer">
        <p>"The prayer of a righteous person is powerful and effective." – James 5:16</p>
      </footer>
    </div>
  );
};

export default PrayerRequest;
