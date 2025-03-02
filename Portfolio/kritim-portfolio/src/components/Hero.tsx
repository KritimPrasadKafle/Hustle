// src/components/Hero.tsx
import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Kritim Prasad Kafle</h1>
      <p className="hero-subtitle">Backend Developer & Blockchain Enthusiast</p>
      <div className="hero-links">
        <a href="https://github.com/KritimPrasadKafle" className="hero-btn">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kritimprasadkafle/"
          className="hero-btn"
        >
          LinkedIn
        </a>
        <a href="mailto:kritim10kafle@gmail.com" className="hero-btn">
          Email
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
