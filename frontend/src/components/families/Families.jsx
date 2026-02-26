// src/Features/Families.jsx
import React, { useEffect, useState } from "react";
import { fetchFamilies } from "../../Features/families/familiesAPI.js";
import "./Families.css";

const Families = () => {
  const [families, setFamilies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFamilies = async () => {
      const data = await fetchFamilies();
      setFamilies(data);
      setLoading(false);
    };

    getFamilies();
  }, []);

  if (loading) {
    return <div className="families-loading">Loading families...</div>;
  }

  if (!families.length) {
    return <div className="families-empty">No families found.</div>;
  }

  return (
    <div className="families-container">
      <h2 className="families-title">Families</h2>
      <div className="families-grid">
        {families.map((family) => (
          <div key={family.familyId} className="family-card">
            <h3 className="family-name">{family.name}</h3>
            <p className="family-description">{family.description || "No description"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Families;