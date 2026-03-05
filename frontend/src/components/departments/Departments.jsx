import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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

      <motion.div
        className="departments-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {departments.map((dept) => (
          <motion.div
            key={dept.id}
            className="department-card"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
          >
            <h2>{dept.name}</h2>
            <p className="dept-desc">{dept.description || "—"}</p>
            <p className="dept-leader">Leader: {dept.adminLeader || "—"}</p>
            <p className="dept-contact">Contact: {dept.adminContact || "—"}</p>
          </motion.div>
        ))}
      </motion.div>

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