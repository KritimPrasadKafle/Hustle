import React from 'react';
import '../Service.css';

import { GiWeightLiftingUp, GiMeat, GiLifeSupport } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: <GiLifeSupport className="service-icon" />,
      title: "24/7 Support",
      text: "Round-the-clock assistance from our expert trainers through chat, call, or video consultation."
    },
    {
      icon: <GiWeightLiftingUp className="service-icon" />,
      title: "Personal Coaching",
      text: "1-on-1 customized training programs with certified coaches for maximum results."
    },
    {
      icon: <GiMeat className="service-icon" />,
      title: "Nutrition Tracking",
      text: "AI-powered meal plans and progress tracking with weekly dietitian reviews."
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>Premium Fitness Services</h2>
        <p>Transform your body with our expert guidance</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;