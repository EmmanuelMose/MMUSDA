// src/components/AdminDrawer/AdminDrawer.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adminDrawerData } from "../aside/drawerData";
import "./AdminDrawer.css";

const AdminDrawer = ({
  isSidebarOpen,
  onToggle,
  onMenuClick,
  activeContent,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside
      className={`admin-drawer ${
        isSidebarOpen ? "expanded" : "collapsed"
      } ${activeContent ? "hidden-mobile" : ""}`}
    >
      {/* Header */}
      <div className="drawer-header">
        <span className={`drawer-title ${isSidebarOpen ? "visible" : ""}`}>
          Admin Dashboard
        </span>
        <button onClick={onToggle} className="drawer-toggle">
          {isSidebarOpen ? "❮" : "❯"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="drawer-nav">
        {adminDrawerData.map((item) => {
          if (item.id.toLowerCase() === "logout") {
            return (
              <button
                key={item.id}
                onClick={handleLogout}
                className="drawer-item logout-item"
              >
                {item.icon && <item.icon size={22} />}
                {isSidebarOpen && <span>{item.name}</span>}
              </button>
            );
          }

          return (
            <div
              key={item.id}
              className={`drawer-item`}
              onClick={() => onMenuClick(item.name)}
            >
              {item.icon && <item.icon size={22} />}
              {isSidebarOpen && <span>{item.name}</span>}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="drawer-footer">
        © {new Date().getFullYear()} Church Admin
      </div>
    </aside>
  );
};

export default AdminDrawer;