// src/App.tsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import PersonalTouch from "./components/PersonalTouch";
import Contact from "./components/Contact";
import "./styles/global.css";

const App: React.FC = () => (
  <div className="app">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <PersonalTouch />
    <Contact />
  </div>
);

export default App;
