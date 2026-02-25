import { useEffect, useState } from "react";
import { fetchAllLeaders, fetchLeadersByRole } from "../../Features/leaders/leadersAPI";
import "./Leaders.css";

export default function Leaders() {
  const [leaders, setLeaders] = useState([]);
  const [role, setRole] = useState("");

  const loadLeaders = async () => {
    const allLeaders = await fetchAllLeaders();
    setLeaders(allLeaders);
  };

  const searchByRole = async () => {
    if (!role.trim()) {
      loadLeaders();
      return;
    }
    const filteredLeaders = await fetchLeadersByRole(role);
    setLeaders(filteredLeaders);
  };

  useEffect(() => {
    loadLeaders();
  }, []);

  return (
    <div className="leaders-container">
      <h1 className="title">Church Leaders</h1>

      <div className="quotes-section">
        <p className="quote">"Obey your leaders and submit to them, for they are keeping watch over your souls." – Hebrews 13:17</p>
        <p className="quote">"The greatest among you shall be your servant." – Matthew 23:11</p>
        <p className="quote">"Where there is no guidance, a people falls, but in an abundance of counselors there is safety." – Proverbs 11:14</p>
      </div>

      <div className="filter-box">
        <input
          type="text"
          placeholder="Search by role..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={searchByRole}>Search</button>
      </div>

      <div className="table-wrapper">
        <table className="leaders-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Contact Info</th>
            </tr>
          </thead>
          <tbody>
            {leaders.length > 0 ? (
              leaders.map((leader) => (
                <tr key={leader.leaderId}>
                  <td>{leader.name}</td>
                  <td>{leader.department || "-"}</td>
                  <td>{leader.role || "-"}</td>
                  <td>{leader.contactInfo || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No leaders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}