import React from 'react';
import "./LeetCode.css";
import { motion } from "framer-motion";

const LeetCode = () => {
  const stats = [
    { count: "200+", label: "Problems Solved" },
    { count: "Easy/Medium", label: "Focus Area" },
    { count: "Consistent", label: "Daily Streak" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="leetcode" id="coding">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Coding Journey
      </motion.h2>

      <motion.div
        className="leetcode-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="stats-card"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="stat-item" variants={itemVariants}>
              <span className="count">{stat.count}</span>
              <span className="label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="leetcode-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I actively solve data structures and algorithms problems on <strong>LeetCode</strong> to sharpen my problem-solving skills and logic building.
          </p>
          <a href="https://leetcode.com/u/nikitaagg01/" target="_blank" rel="noopener noreferrer" className="leetcode-btn">
            View My LeetCode Profile →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeetCode;