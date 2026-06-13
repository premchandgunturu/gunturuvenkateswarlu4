import { profile } from "../data/profileData";
import { motion } from "framer-motion";

function Stats() {
  return (
    <section className="section">
      <div className="stats-grid">
        {profile.stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="glass card stat-card"
          >
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;