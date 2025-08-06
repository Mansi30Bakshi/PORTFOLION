import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://leetcode.com/mansibakshi/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="icon leetcode" />
        </a>
        <a href="https://github.com/Mansi30Bakshi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/mansi-bakshi-386b762a7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="mailto:mansibakshi2@gmail.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
      <p className="footer-text">Thanks for visiting !</p>
    </footer>
  );
};

export default Footer;
