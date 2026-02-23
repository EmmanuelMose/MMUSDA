import React, { useState } from "react";
import { adminDrawerData } from "./drawerData";
import { NavLink } from "react-router-dom";
import "./AdminDrawer.css";
import { HiMenu, HiX } from "react-icons/hi";

const AdminDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="top-navbar">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <HiMenu size={30} />
        </button>
        <h1 className="nav-title">Admin Panel</h1>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className={`drawer ${open ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span>Admin Panel</span>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        <nav className="drawer-nav">
          {adminDrawerData.map((item) => (
            <NavLink
              key={item.id}
              to={`/dashboard/${item.link}`}
              className={({ isActive }) =>
                `drawer-item ${isActive ? "active" : ""}`
              }
            >
              {item.icon && <item.icon className="drawer-icon" />}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="drawer-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDrawer;