import { useState } from "react";
import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";
import "./NewPassword.css";

export default function NewPassword() {
  const email = new URLSearchParams(window.location.search).get("email");
  const code = new URLSearchParams(window.location.search).get("code");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pwd);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) return setMessage("Password must be 8+ chars, uppercase, lowercase, number & special");
    if (newPassword !== confirm) return setMessage("Passwords do not match");

    setLoading(true);
    setMessage("Resetting password...");
    try {
      const res = await axios.post(`${APIDomain}/api/auth/reset-password`, { email, code, newPassword });
      setMessage(res.data.message);
      setTimeout(() => window.location.href="/login", 1500);
    } catch(err){
      setMessage(err.response?.data?.error || "Error resetting password");
    } finally { setLoading(false); }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="panel-title">RESET PASSWORD PANEL</h1>
        <h2>Set New Password</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>New Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</span>
            </div>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <div className="password-box">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
              <span onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? "Hide" : "Show"}</span>
            </div>
          </div>
          <button type="submit" className="register-btn" disabled={loading}>{loading ? "Resetting..." : "Reset Password"}</button>
        </form>
        <button className="link-btn" onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
}