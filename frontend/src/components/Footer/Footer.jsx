import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nikita Aggarwal. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Nikitaagg01">GitHub</a>
        <a href="https://www.linkedin.com/in/nikita-aggarwal-79369030a">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;