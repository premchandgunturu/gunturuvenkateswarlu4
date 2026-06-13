import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profileData'; // Ensure your import path is correct
import './Research.css';

const Research = () => {
  return (
    <section className="research-section" id='research'>
      <h2 className="research-title">Research & Publications</h2>
      
      <div className="research-grid">
        {profile.publications.map((pub, index) => (
          <motion.div 
            key={index} 
            className="research-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Meta Tags (Year & Publisher Type) */}
            <div className="pub-meta">
              <span className="year-tag">{pub.year}</span>
              <span className="type-tag">{pub.type}</span>
            </div>

            {/* Research Title */}
            <h3>{pub.title}</h3>
            
            {/* Action Button */}
            <div className="button-container">
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="research-btn"
              >
                View Publication
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;