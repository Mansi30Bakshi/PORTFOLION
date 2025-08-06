import React from 'react';
import './About.css';
import RevealSection from '../Components/RevealSection';

const About = () => {
  return (
    <RevealSection>
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I’m a dedicated MERN Stack Developer with a strong foundation in data structures, 
          algorithms, and web development. With over 150+ questions solved on LeetCode and real-world 
          project experience, I love building clean, responsive, and scalable web applications.
        </p>
        <p>
          I'm a B.Tech 2025 graduate from JIIT Noida, actively seeking opportunities 
          to grow as a full-stack developer or a Software engineer and contribute to impactful projects.
        </p>
      </section>
    </RevealSection>
  );
};

export default About;
