import React from 'react'
import Image11 from '../assets/1.jpg'

const Image1 = () => {
  const scrollToSection = () => {
    document.getElementById('bodybuilder-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero">
      <img src={Image11} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>PERSONAL TRAINER IN KATHMANDU</h1>
        <h2>FITNESS FOR EVERYONE</h2>
        <button className="explore-btn" onClick={scrollToSection}>Explore Here</button>
      </div>
    </div>
  )
}

export default Image1
