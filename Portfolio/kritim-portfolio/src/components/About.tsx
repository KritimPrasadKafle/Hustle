// src/components/About.tsx
import React from "react";
import "../styles/About.css";

const About: React.FC = () => (
  <section className="about">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <p>
        I'm Kritim Prasad Kafle, a backend developer based in Kathmandu, Nepal.
        I specialize in building scalable systems with Node.js, TypeScript, and
        MySQL, and I’m passionate about blockchain technology—especially
        Solidity. When I’m not coding, you’ll find me hiking or debugging with
        equal enthusiasm.
      </p>
    </div>
  </section>
);

export default About;
