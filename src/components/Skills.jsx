import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profileData'; // Ensure this path is correct
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {profile.skillsData.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            className="skill-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;