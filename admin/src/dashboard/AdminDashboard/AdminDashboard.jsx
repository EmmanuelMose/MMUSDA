import React, { useState } from "react";
import AdminDrawer from "./aside/AdminDrawer";
import { adminDrawerData } from "./aside/drawerData";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeContent, setActiveContent] = useState("Welcome");

  const renderContent = () => {
    const item = adminDrawerData.find((i) => i.link === activeContent);
    if (!item) return <h2>Welcome to Admin Dashboard</h2>;
    return (
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      <AdminDrawer onSelect={setActiveContent} />
      <div className="dashboard-content">
        <div className="content-card">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;