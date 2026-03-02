import { useState } from "react";
import axios from "axios";

export default function NewPassword() {
  const email = new URLSearchParams(window.location.search).get("email");
  const code = new URLSearchParams(window.location.search).get("code");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirm) return setMessage("Passwords do not match");

    try {
      const res = await axios.post("/auth/reset-password", {
        email,
        code,
        newPassword,
      });
      setMessage(res.data.message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error resetting password");
    }
  };

  return (
    <div className="card">
      <h2>Set New Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input value={newPassword} type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
        <input value={confirm} type="password" onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm Password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}