import React from 'react';
import { profile } from '../data/profileData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id='footer'>
      <div className="footer-container glass">
        <div className="footer-content">
          <h3>{profile.name}</h3>
          <p>{profile.role}</p>
          <div className="copyright">
            © {currentYear} {profile.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;