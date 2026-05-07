import React from 'react';
import "./Project.css";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: "Foodigo - Food Delivery App",
      desc: "A comprehensive MERN stack application featuring a user-friendly interface for food ordering, cart management, and secure checkout integration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
      icon: "🍕"
    },
    {
      title: "HomeVista - Rental App",
      desc: "An Airbnb-inspired platform where users can list, discover, and book rental properties with features like image uploads and location search.",
      tech: ["MERN Stack", "Cloudinary", "MVC Pattern"],
      link: "#",
      icon: "🏠"
    },
    {
      title: "EchoChat - Real Time Chat",
      desc: "A real-time communication app using Socket.io for instant messaging, featuring private rooms and online status indicators.",
      tech: ["Socket.io", "React", "Node.js", "Express"],
      link: "#",
      icon: "💬"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((proj, index) => (
          <motion.div key={index} className="project-card" variants={itemVariants}>
            <div className="project-header">
              <span className="project-icon">{proj.icon}</span>
              <h3>{proj.title}</h3>
            </div>
            <p>{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <a href={proj.link} className="project-link">View Project →</a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;