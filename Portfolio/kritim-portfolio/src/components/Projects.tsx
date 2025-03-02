// src/components/Projects.tsx
import React from "react";
import "../styles/Projects.css";
import { Project } from "../types";

const projects: Project[] = [
  {
    name: "Blockchain Shopping Cart",
    desc: "A decentralized e-commerce cart built with Solidity and Node.js.",
    tech: "Solidity, Node.js, Express, MySQL",
    link: "https://github.com/KritimPrasadKafle/blockchain-cart",
  },
  {
    name: "API-Powered Marketplace",
    desc: "A scalable backend for a marketplace with optimized APIs.",
    tech: "TypeScript, Express, Docker, MySQL",
    link: "https://github.com/KritimPrasadKafle/marketplace-api",
  },
  {
    name: "Crypto Tracker",
    desc: "Real-time blockchain transaction monitoring tool.",
    tech: "JavaScript, Node.js, Solidity",
    link: "https://github.com/KritimPrasadKafle/crypto-tracker",
  },
];

const Projects: React.FC = () => (
  <section className="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((proj: Project, idx: number) => (
        <div className="project-card" key={idx}>
          <h3>{proj.name}</h3>
          <p className="project-desc">{proj.desc}</p>
          <p className="project-tech">
            <strong>Tech:</strong> {proj.tech}
          </p>
          <a href={proj.link} className="project-link">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
