import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adminDrawerData } from "../../AdminDashboard/aside/drawerData";
import "./AdminDrawer.css";

const AdminDrawer = ({ isSidebarOpen, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className={`drawer ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="drawer-header">
        <span className={`drawer-title ${isSidebarOpen ? "show" : ""}`}>
          Admin Dashboard
        </span>

        <button onClick={onToggle} className="toggle-btn">
          {isSidebarOpen ? "❮" : "❯"}
        </button>
      </div>

      <nav className="drawer-nav">
        {adminDrawerData.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className="drawer-item"
          >
            {item.icon && <item.icon size={20} className="item-icon" />}
            {isSidebarOpen && <span className="item-text">{item.name}</span>}
          </NavLink>
        ))}

        <button className="drawer-item logout" onClick={handleLogout}>
          <span className="item-icon">🚪</span>
          {isSidebarOpen && <span className="item-text">Logout</span>}
        </button>
      </nav>

      <div className="drawer-footer">
        © {new Date().getFullYear()} Church Admin
      </div>
    </aside>
  );
};

export default AdminDrawer;