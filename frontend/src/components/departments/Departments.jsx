import { useEffect, useState } from "react";
import { fetchDepartments } from "../../Features/departments/departmentsAPI.js";
import "./Departments.css";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDepartments = async () => {
      const data = await fetchDepartments();
      setDepartments(data);
      setLoading(false);
    };
    loadDepartments();
  }, []);

  if (loading) return <p className="loading-text">Loading departments...</p>;

  return (
    <div className="departments-container">
      <header className="departments-header">
        <h1>Church Departments</h1>

        <p className="bible-verse">
          “For as the body is one and has many members, but all the members of
          that one body, being many, are one body, so also is Christ.”
          <br />— 1 Corinthians 12:12 (NKJV)
        </p>

        <p className="quote">
          “God does not call the qualified. He qualifies the called.” — Unknown
        </p>

        <p className="quote">
          “Let everything be done decently and in order.” — 1 Corinthians 14:40
        </p>
      </header>

      <div className="table-wrapper">
        <table className="departments-table">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Description</th>
              <th>Leader</th>
              <th>Contact</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id} className="table-row">
                <td>{dept.name}</td>
                <td>{dept.description || "—"}</td>
                <td>{dept.adminLeader || "—"}</td>
                <td>{dept.adminContact || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="departments-footer">
        <p>
          “Serve the Lord with gladness; come before His presence with singing.”
          — Psalm 100:2
        </p>
      </footer>
    </div>
  );
};

export default Departments;