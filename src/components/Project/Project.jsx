import React from 'react';
import "./Project.css";

const Project = () => {
  const projects = [
   {
      title: "Tomato - Food Delivery",
      desc: "A comprehensive MERN stack application featuring a user-friendly interface for food ordering, cart management, and secure checkout integration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#" // Apne GitHub ya Live link yahan dalein
    },
    {
      title: "HomeVista - Rental App",
      desc: "An Airbnb-inspired platform where users can list, discover, and book rental properties with features like image uploads and location search.",
      tech: ["MERN Stack", "Cloudinary", "MVC Pattern"],
      link: "#"
    },
    {
      title: "EchoChat - Real Time Chat",
      desc: "A real-time communication app using Socket.io for instant messaging, featuring private rooms and online status indicators.",
      tech: ["Socket.io", "React", "Node.js", "Express"],
      link: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;