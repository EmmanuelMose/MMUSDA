import React, { useEffect, useState } from "react";
import { getPublicPrayerRequests, createPrayerRequest } from "../../Features/prayerRequest/prayerRequestAPI";

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
    <div style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Submit a Prayer Request</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
      {message && <p>{message}</p>}

      <h2>Public Prayer Requests</h2>
      {requests.length === 0 ? (
        <p>No public prayer requests yet.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req.requestId}>
              <strong>{req.title}</strong> by {req.firstName} {req.lastName} <br />
              {req.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PrayerRequest;
