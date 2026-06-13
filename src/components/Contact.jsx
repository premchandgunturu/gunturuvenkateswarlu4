import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profileData';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id='contact'>
      <h2 className="contact-title">Contact Information</h2>
      <motion.div 
        className="contact-container glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="contact-intro">Available for academic collaboration, guest lectures, and technical consulting.</p>
        
        <div className="contact-info">
          <a href={`mailto:${profile.email}`} className="contact-item">
            <span className="icon">📧</span>
            <div className="text-content">
              <span>Email</span>
              <p>{profile.email}</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/venkateswarlu-gunturu-647b25136/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="icon">💼</span>
            <div className="text-content">
              <span>LinkedIn</span>
              <p>Professional Profile</p>
            </div>
          </a>
          
          <a href={`tel:${profile.phone}`} className="contact-item">
            <span className="icon">📱</span>
            <div className="text-content">
              <span>Phone</span>
              <p>{profile.phone}</p>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;