import React, { useState } from "react";
import AdminDrawer from "./aside/AdminDrawer";
import { Outlet } from "react-router-dom";
import "./AdminDashboard.css";
import { FaBell, FaUserCircle, FaSearch, FaBars, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">

      <div className="admin-dashboard">

        <AdminDrawer
          isSidebarOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className={`main-wrapper ${isSidebarOpen ? "" : "collapsed"}`}>

          <header className="top-nav">

            <div className="nav-left">
              <button
                className="menu-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <FaBars />
              </button>

              <h2 className="page-title">Church Admin Dashboard</h2>
            </div>

            <div className="nav-right">

              <div className="search-box">
                <FaSearch />
                <input type="text" placeholder="Search..." />
              </div>

              <button className="icon-btn">
                <FaBell />
                <span className="badge">3</span>
              </button>

              <div className="user-profile">
                <FaUserCircle className="avatar" />
                <div>
                  <span className="name">Admin</span>
                  <span className="role">Administrator</span>
                </div>
              </div>

              <button className="icon-btn logout" onClick={handleLogout}>
                <FaSignOutAlt />
              </button>

            </div>

          </header>

          <main className="main-content">
            <div className="content-box">
              <Outlet />
            </div>
          </main>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;