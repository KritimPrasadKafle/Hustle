// src/components/Contact.tsx
import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => (
  <section className="contact">
    <h2 className="section-title">Get in Touch</h2>
    <p className="contact-text">
      Feel free to reach out—I’m always up for a chat about code or blockchain!
    </p>
    <a href="mailto:kritim10kafle@gmail.com" className="contact-btn">
      Say Hello
    </a>
  </section>
);

export default Contact;
