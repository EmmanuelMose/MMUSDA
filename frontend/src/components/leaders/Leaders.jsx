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
      <h1 className="title">Leaders</h1>

      <div className="filter-box">
        <input
          type="text"
          placeholder="Search by role..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={searchByRole}>Search</button>
      </div>

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
  );
}