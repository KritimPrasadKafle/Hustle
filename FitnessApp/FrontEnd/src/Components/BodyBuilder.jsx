import React from "react";
import bodybuilderImage from "../assets/3.jpg"; // Import the image
import "../App.css";

const Bodybuilder = () => {
  return (
    <div className="next-section">
      <div className="bodybuilder-container">
        {/* Image */}
        <img
          src={bodybuilderImage}
          alt="Bodybuilder"
          className="bodybuilder-image"
        />

        {/* Text Content */}
        <div className="bodybuilder-info">
          <h2>John Doe</h2>
          <p>
            John Doe is a world-class bodybuilder, fitness coach, and strength
            enthusiast. He has competed in numerous bodybuilding competitions and
            is a fitness icon who motivates people to reach their peak physical
            potential. With years of hard work, dedication, and a well-structured
            training routine, John continues to push boundaries and inspire others
            to take their fitness journey to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bodybuilder;
