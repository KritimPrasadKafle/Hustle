import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../assets/2.jpg"; // Your image
import "../App.css";

const LandingPage = () => {
  // Create a ref to the section you want to scroll to
  const exploreRef = useRef(null);

  // Function to scroll to the section
  const handleScrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page">
      <div className="navbar-overlay">
        {/* Logo */}
        <div className="logo-container">
          <img src={img1} alt="Logo" className="logo" />
        </div>

        <div className="landing-content">
          <h1>PERSONAL TRAINER IN KATHMANDU</h1>
          <h2>FITNESS FOR EVERYONE</h2>

          {/* Explore Button, triggering the scroll */}
          <button className="explore-btn" onClick={handleScrollToExplore}>
            Explore Here
          </button>
        </div>
      </div>

      {/* The section that you want to scroll to */}
      <div ref={exploreRef} className="explore-section">
        <h2>Explore the Bodybuilder</h2>
        <p>Some content related to the bodybuilder or whatever you wish to display here...</p>
      </div>
    </div>
  );
};

export default LandingPage;
