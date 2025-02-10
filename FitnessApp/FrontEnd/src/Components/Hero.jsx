import React from 'react';
import heroImage from '../assets/1.jpg'; // Fix: Direct import
import '../App.css';

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('bodybuilder').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>PERSONAL TRAINER IN KATHMANDU</h1>
        <h2>FITNESS FOR EVERYONE</h2>
        <button className="cta-button" onClick={scrollToSection}>Explore Here</button>
      </div>
    </div>
  );
};

export default Hero;