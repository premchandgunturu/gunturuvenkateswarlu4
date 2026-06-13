import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profileData';
import './Achievements.css';

const Achievements = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Sessions", "Professional", "Academic"];

  const filteredData = filter === "All" 
    ? profile.achievements 
    : profile.achievements.filter(item => item.category === filter);

  return (
    <section className="achievements-section" id='achievements'>
      <h1 className="achievements-title">Achievements & Sessions</h1>
      
      {/* Filter Buttons */}
      <div className="filter-nav">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={filter === cat ? "active" : ""} 
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div className="achievements-grid" layout>
        <AnimatePresence>
          {filteredData.map((item, index) => (
            <motion.div 
              key={item.text}
              className="achievement-card glass"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-wrapper">★</div>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};export default Achievements;