import { useState } from "react";
import axios from "axios";

export default function ResetCode() {
  const email = new URLSearchParams(window.location.search).get("email");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/verify", { email, code });
      setMessage(res.data.message);
      setTimeout(() => {
        window.location.href = "/new-password?email=" + email + "&code=" + code;
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error");
    }
  };

  return (
    <div className="card">
      <h2>Verify Reset Code</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Reset Code" />
        <button type="submit">Verify Code</button>
      </form>
    </div>
  );
}