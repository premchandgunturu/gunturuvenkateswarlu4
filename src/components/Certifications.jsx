import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profileData';
import './Certifications.css';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="certs-section" id='certifications'>
      <h2 className="certs-title">Certifications</h2>
      <div className="certs-grid">
        {/* Always show featured */}
        {profile.certifications.featured.map((cert, index) => (
          <CertCard key={index} title={cert} />
        ))}

        {/* Show additional only if toggled */}
        <AnimatePresence>
          {showAll && profile.certifications.additional.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <CertCard title={cert} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="button-container text-center">
        <button className="load-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Load More Certifications"}
        </button>
      </div>
    </section>
  );
};

// Sub-component for clean mapping
const CertCard = ({ title }) => (
  <div className="cert-card glass">
    <div className="cert-icon">✓</div>
    <p>{title}</p>
  </div>
);

export default Certifications;