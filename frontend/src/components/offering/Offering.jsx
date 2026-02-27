import React, { useState } from "react";
import { createOffering } from "../../Features/offering/offeringAPI";
import "./Offering.css";

const Offering = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    amount: "",
    purpose: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOffering(formData);
      setMessage("Offering created successfully!");
      setFormData({ phoneNumber: "", name: "", amount: "", purpose: "" });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="offering-container">
      <form className="offering-form" onSubmit={handleSubmit}>
        <h2>Create New Offering</h2>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          placeholder="Purpose"
          required
        />
        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Offering;