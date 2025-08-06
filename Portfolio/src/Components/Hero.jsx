import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/mansi.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm <span>Mansi Bakshi</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Full Stack Developer | MERN Enthusiast | Software Engineer
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/projects" className="btn">View Projects</Link>
            <a href="https://drive.google.com/file/d/1LyEOrozgznM9BB_dWu2NiubvDPT9in1L/view?usp=sharing" className="btn outline" download>Download Resume</a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-right"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.img 
          src={profileImg} 
          alt="Mansi Bakshi" 
          className="hero-img"
          whileHover={{ scale: 1.5, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
