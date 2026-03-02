import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDrawer from "./aside/AdminDrawer";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminDrawer />
      <div className="dashboard-content">
        <div className="content-card">
          <Routes>
            <Route path="/" element={<h2>Welcome to Admin Dashboard</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;