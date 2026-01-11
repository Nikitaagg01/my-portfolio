import React from 'react';
import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", 
    "Node.js", "Express.js", "MongoDB", "Tailwind CSS", 
    "Git & GitHub", "REST APIs"
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;