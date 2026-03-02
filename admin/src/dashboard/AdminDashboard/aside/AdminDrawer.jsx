import React, { useState } from "react";
import { adminDrawerData } from "./drawerData";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./AdminDrawer.css";

const AdminDrawer = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleClick = (link) => {
    onSelect(link);
    setOpen(false);
  };

  return (
    <>
      <div className="top-navbar">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <HiMenu size={28} />
        </button>
        <h1 className="nav-title">Admin Panel</h1>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className={`drawer ${open ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span>Admin Panel</span>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <HiX size={26} />
          </button>
        </div>

        <nav className="drawer-nav">
          {adminDrawerData.map((item) => (
            <div
              key={item.id}
              className="drawer-item"
              onClick={() => handleClick(item.link)}
            >
              {item.icon && <item.icon className="drawer-icon" />}
              <span>{item.name}</span>
            </div>
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