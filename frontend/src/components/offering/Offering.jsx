import React, { useEffect, useState } from "react";
import { createOffering, getOfferingByPhoneAndName } from "../../Features/offering/offeringAPI";
import "./Offering.css";

const Offering = () => {
  const [offering, setOffering] = useState(null);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    amount: "",
    purpose: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOffering = async () => {
      try {
        const phone = formData.phoneNumber || "defaultPhone";
        const name = formData.name || "defaultName";
        const data = await getOfferingByPhoneAndName(phone, name);
        if (data) setOffering(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOffering();
  }, [formData.phoneNumber, formData.name]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOffering = await createOffering(formData);
      setOffering(newOffering);
      setMessage("Offering created successfully");
      setFormData({ ...formData, amount: "", purpose: "" });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="offering-container">
      <div className="offering-display">
        {offering ? (
          <>
            <h2>Offering Info</h2>
            <p><strong>Phone:</strong> {offering.phoneNumber}</p>
            <p><strong>Name:</strong> {offering.name}</p>
            <p><strong>Amount:</strong> {offering.amount}</p>
            <p><strong>Purpose:</strong> {offering.purpose}</p>
          </>
        ) : (
          <p>No offering found</p>
        )}
      </div>

      <form className="offering-form" onSubmit={handleSubmit}>
        <h2>Create Offering</h2>
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