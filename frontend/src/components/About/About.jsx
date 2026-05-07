import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p>
          I'm a passionate <strong>MERN Stack Developer</strong> who loves building full-stack web
          applications and solving real-world problems. My journey into web development started
          with a curiosity for how things work on the internet, which turned into a career
          building modern, scalable, and user-friendly applications.
        </p>
        <p>
          I specialize in <strong>React.js, Node.js, and MongoDB</strong>. I enjoy the process
          of turning a complex problem into a simple, elegant solution through clean and efficient
          code. I am always eager to learn new technologies and stay updated with the latest
          industry trends.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new UI/UX designs or working on
          personal projects to sharpen my logic and architectural skills.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
