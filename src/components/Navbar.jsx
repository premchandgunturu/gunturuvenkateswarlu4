import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Navbar.css";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Research",
  "Certifications",
  "Skills",
  "Achievements",
  "Contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar"
    >
      <div className="nav-container glass">
        <h2 className="logo">G.Venkateswarlu</h2>

        <div className="desktop-menu">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mobile-menu glass"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
