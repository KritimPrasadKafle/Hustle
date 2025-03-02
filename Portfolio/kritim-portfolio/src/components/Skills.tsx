// src/components/Skills.tsx
import React from "react";
import "../styles/Skills.css";
import { Skill } from "../types";

const skills: Skill[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "Solidity" },
  { name: "Blockchain" },
  { name: "MySQL" },
  { name: "Git" },
  { name: "Docker" },
  { name: "Postman" },
];

const Skills: React.FC = () => (
  <section className="skills">
    <h2 className="section-title">Skills & Tools</h2>
    <div className="skills-grid">
      {skills.map((skill: Skill, idx: number) => (
        <div className="skill-item" key={idx}>
          {skill.name}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
