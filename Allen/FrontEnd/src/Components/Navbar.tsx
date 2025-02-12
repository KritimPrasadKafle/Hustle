import { NavLink } from "react-router-dom";
import { MdMessage, MdMenu, MdClose } from "react-icons/md"; // Import icons
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <h1 className="logo">Allen</h1>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MdClose /> : <MdMenu />}
      </div>

      {/* NAVIGATION LINKS */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {[
          "Courses",
          "Test Series",
          "Scholarships",
          "Results",
          "Study Materials",
          "About Us",
          "Talk to us",
          "Login",
        ].map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className={
                item === "Talk to us"
                  ? "talk-button"
                  : item === "Login"
                  ? "login-button"
                  : ""
              }
            >
              {item === "Talk to us" && <MdMessage className="talk-icon" />}
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
