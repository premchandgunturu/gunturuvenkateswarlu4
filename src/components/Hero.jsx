import "./Hero.css";
import profileImage from "../assets/profile.jpeg";
import { motion } from "framer-motion"; // Cleaned: Removed unused 'color'
import {
  FaLinkedin,
  FaResearchgate,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section className="faculty-hero" id="home">
      <div className="faculty-container">
        <motion.div
          className="faculty-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="faculty-badge">
            Associate Professor • Cybersecurity Instructor
          </span>

          <h1>Mr. Gunturu Venkateswarlu (PhD)</h1>

          <h2>Ph.D Scholar in IoT & Machine Learning</h2>

          <p>
            Experienced educator, researcher and cybersecurity trainer
            with more than 20 years of teaching, mentoring and industry
            training experience. Specialized in Cybersecurity,
            Ethical Hacking, Cloud Security, Blockchain,
            IoT and Machine Learning.
          </p>

          <div className="academic-highlights">
            <div className="academic-item">
              <span className="highlight-number">20+</span>
              <span>Years Experience</span>
            </div>
            <div className="academic-item">
              <span className="highlight-number">25+</span>
              <span>Certifications</span>
            </div>
            <div className="academic-item">
              <span className="highlight-number">100000+</span>
              <span>Students Mentored</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#research" className="primary-btn">Publications</a>
            {/* Fixed: Path set to root /cv.pdf (Ensure file is in 'public' folder) */}
            <a
              href="/cv.pdf"
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a href="#contact" className="secondary-btn">Contact</a>
          </div>
        </motion.div>

        <motion.div
          className="faculty-profile"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-card">
            <div className="image-ring">
              <img src={profileImage} alt="Mr. Gunturu Venkateswarlu (Ph.D)" />
            </div>
            <div className="profile-info">
              <span className="designation">
                Associate Professor @ ACE Engineering College
              </span>
              <h3 style={{ color: "#D4AF37" }}>Mr. Gunturu Venkateswarlu (Ph.D)</h3>
              <p>
                Cybersecurity Instructor
                <br />
                Ph.D Scholar (IoT & ML)
              </p>
              <div className="profile-divider"></div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/venkateswarlu-gunturu-647b25136/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                {/* Fixed: Valid href provided */}
                <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">
                  <FaResearchgate />
                </a>
                <a href="mailto:gunturu.g7@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;