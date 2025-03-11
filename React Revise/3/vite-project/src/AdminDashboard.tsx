import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export const AdminDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleString()
  );
  const [activeSection, setActiveSection] = useState<"category" | "content">(
    "category"
  );
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const { name, photo } = userData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <div className="top-bar">
        <div className="top-left">
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Nepal.svg"
              alt="Nepal Logo"
              className="nepal-logo"
            />
            <span className="company-name">My Company</span>
          </div>
          <div className="current-time">{currentTime}</div>
        </div>
        <div className="top-right" onClick={handleLogout}>
          <img
            src={photo || "https://via.placeholder.com/40"}
            alt="Admin"
            className="admin-photo"
          />
          <span className="admin-name">{name || "Admin"}</span>
        </div>
      </div>
      <div className="main-container">
        <div className="sidebar">
          <ul>
            <li onClick={() => setActiveSection("category")}>
              Category Listing
            </li>
            <li onClick={() => setActiveSection("content")}>
              Content Management
            </li>
          </ul>
        </div>
        <div className="content">
          {activeSection === "category" ? (
            <div>
              <h2>Category Management</h2>
              {/* Add Category Form and List will go here */}
              <p>Category management content (WIP)</p>
            </div>
          ) : (
            <div>
              <h2>Content Management</h2>
              {/* Add Content Form and List will go here */}
              <p>Content management content (WIP)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
