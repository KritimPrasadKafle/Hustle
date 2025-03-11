import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled", !isOpen);
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
          <a href="/login" className="navbar-button">
            Login
          </a>
          <a href="/register" className="navbar-button primary">
            Sign In
          </a>
        </div>
      </div>
      <div className="navbar-auth">
        <a href="/login" className="navbar-button">
          Login
        </a>
        <a href="/register" className="navbar-button primary">
          Sign In
        </a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};
