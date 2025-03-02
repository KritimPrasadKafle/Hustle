// src/components/Experience.tsx
import React from "react";
import "../styles/Experience.css";
import { ExperienceItem } from "../types";

const experiences: ExperienceItem[] = [
  {
    company: "Onebill",
    role: "Backend Developer",
    duration: "Feb 2024 - Nov 2024",
    location: "Bangalore, India",
    achievements: [
      "Designed and optimized RESTful APIs using Node.js and Express.",
      "Implemented efficient MySQL database schemas.",
    ],
  },
  {
    company: "Geek Tech Solutions",
    role: "Backend Developer",
    duration: "Jan 2025 - Present",
    location: "Kathmandu, Nepal",
    achievements: [
      "Developed scalable backend services with TypeScript.",
      "Built blockchain authentication modules with Solidity.",
    ],
  },
];

const Experience: React.FC = () => (
  <section className="experience">
    <h2 className="section-title">Experience</h2>
    <div className="experience-list">
      {experiences.map((exp: ExperienceItem, idx: number) => (
        <div className="experience-item" key={idx}>
          <h3>
            {exp.role} @ {exp.company}
          </h3>
          <p className="experience-meta">
            {exp.duration} | {exp.location}
          </p>
          <ul>
            {exp.achievements.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
