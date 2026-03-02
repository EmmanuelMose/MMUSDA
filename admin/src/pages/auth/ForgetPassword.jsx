import { useState } from "react";
import axios from "axios";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/forgot-password", { email });
      setMessage(res.data.message);
      setTimeout(() => {
        window.location.href = "/reset-code?email=" + email;
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error");
    }
  };

  return (
    <div className="card">
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Registered Email" />
        <button type="submit">Send Reset Code</button>
      </form>
    </div>
  );
}