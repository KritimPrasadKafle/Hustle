import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLoginClick = () => {
    navigate("/login");
    setIsOpen(false); // Close mobile menu if open
  };

  const handleRegisterClick = () => {
    navigate("/register");
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">Logo</div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="/" className="navbar-link">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About Us
        </a>
        <a href="#services" className="navbar-link">
          Services
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
        <a href="#projects" className="navbar-link">
          Projects
        </a>
        <div className="navbar-auth-mobile">
          <button className="navbar-button" onClick={handleLoginClick}>
            Login
          </button>
          <button
            className="navbar-button primary"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      </div>
      <div className="navbar-auth">
        <button className="navbar-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="navbar-button primary" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};
