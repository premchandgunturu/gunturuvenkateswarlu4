import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profileData'; // Adjust the import path as needed
import './Experience.css';

const Experience = () => {
  return (
    <section className="timeline-section" id='experience'>
      <h2 className="timeline-title">Professional Journey</h2>
      <div className="timeline-container">
        {profile.experience.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-card glass"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="year-badge">{exp.year}</div>
            <h3>{exp.role}</h3>
            <p className="company-name">{exp.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;