import "./Hero.css";
import profileImage from "../assets/profile.jpeg";

import { color, motion } from "framer-motion";

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

          <h1>
            Prof. Gunturu Venkateswarlu
          </h1>

          <h2>
            Ph.D Scholar in IoT & Machine Learning
          </h2>

          <p>
            Experienced educator, researcher, and cybersecurity trainer
            with more than 20 years of teaching, mentoring and industry
            training experience. Specialized in Cybersecurity,
            Ethical Hacking, Cloud Security, Blockchain,
            IoT and Machine Learning.
          </p>

          <div className="academic-highlights">

            <div className="academic-item">
              <span className="highlight-number">
                20+
              </span>
              <span>Years Experience</span>
            </div>

            <div className="academic-item">
              <span className="highlight-number">
                25+
              </span>
              <span>Certifications</span>
            </div>

            <div className="academic-item">
              <span className="highlight-number">
                1000+
              </span>
              <span>Students Mentored</span>
            </div>

          </div>

          <div className="hero-actions">

            <a
              href="#publications"
              className="primary-btn"
            >
              Publications
            </a>

            <a
              href="./assets/cv.pdf"
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact
            </a>

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
              <img
                src={profileImage}
                alt="Dr. Gunturu Venkateswarlu"
              />
            </div>

            <div className="profile-info">

              <span className="designation">
                Associate Professor @ ACE Engineering College
              </span>

              <h3 style={{color:"#D4AF37"}}>
                Dr. Gunturu Venkateswarlu
              </h3>

              <p>
                Cybersecurity Instructor
                <br />
                Ph.D Scholar (IoT & ML)
              </p>

              <div className="profile-divider"></div>

              

              <div className="social-links">

                <a href="https://www.linkedin.com/in/venkateswarlu-gunturu-647b25136/">
                  <FaLinkedin />
                </a>

                <a href="#">
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