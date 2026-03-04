import React, { useState } from "react";
import AdminDrawer from "../../dashboard/AdminDashboard/aside/AdminDrawer";
import { Outlet } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="admin-container">
      <AdminDrawer
        isSidebarOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((prev) => !prev)}
      />

      <main
        className={`main-content ${isSidebarOpen ? "shifted" : "collapsed"}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;