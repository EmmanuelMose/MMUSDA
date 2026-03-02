import { useState } from "react";
import axios from "axios";

export default function VerifyUser() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/verify", { email, code });
      setMessage(res.data.message);
      window.location.href = "/login";
    } catch (err) {
      setMessage(err.response?.data?.error || "Verification failed");
    }
  };

  return (
    <div className="card">
      <h2>Verify Account</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleVerify}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Verification Code" />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}