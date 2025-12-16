import "./Hero.css";
import nikPhoto from "../../assets/nikPhoto.jpeg";
import { motion } from "framer-motion"; // Library import karein

const Hero = () => {
  return (
    <section className="hero" id="home">
        <motion.div 
        className="hero-left"
        initial={{ opacity: 0, x: -100 }} // Shuruat mein left mein hide rahega
        animate={{ opacity: 1, x: 0 }}    // Screen par slide hokar aayega
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Hi, I'm <span>Nikita Aggarwal</span>
        </h1>
        <h2>MERN Stack Developer</h2>
        <p>
          I build modern, scalable web applications using React, Node.js & MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank">Resume</a>
          <a href="#contact" className="outline">Contact</a>
        </div>
      </motion.div>

      <motion.div 
        className="hero-right"
        initial={{ opacity: 0, x: 100 }} // Shuruat mein right mein hide rahega
        animate={{ opacity: 1, x: 0 }}   // Screen par slide hokar aayega
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={nikPhoto} alt="Nikita Aggarwal" />
    </motion.div>
    </section>
  );
};

export default Hero;
