import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section 
      className="about-container" id='about'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Column: Professional Summary */}
      <div className="glass">
        <h3>Professional Profile</h3>
        <p>
          With 20 years of experience in engineering education and technical training, 
          I specialize in bridging the gap between theoretical foundations and industrial application. 
          My expertise spans 20 years of academic instruction, including GATE/ESE preparation 
          and curriculum design.
        </p>
        <p>
          Transitioning into the cybersecurity domain, I hold advanced credentials in 
          Cloud Security and Ethical Hacking. I am a dedicated researcher currently 
          pursuing my Ph.D. at Amrita Vishwa Vidyapeetham, with a focus on the 
          integration of IoT and Machine Learning.
        </p>
      </div>

      {/* Right Column: Academic Credentials */}
      <div className="glass">
        <h3>Academic Background</h3>
        <div className="education-list">
          <p><strong>Ph.D. (Pursuing)</strong><br /> IoT + ML | Amrita Vishwa Vidyapeetham</p>
          <p><strong>M.Tech (CS)</strong><br /> 2013 | KIET, JNTUK</p>
          <p><strong>B.Tech (CSIT)</strong><br /> 2005 | KIET, JNTUH</p>
          <p><strong>Intermediate</strong><br /> 2001 | BIE India</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;