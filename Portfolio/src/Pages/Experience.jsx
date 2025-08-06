import React from 'react';
import './Experience.css';
import RevealSection from '../Components/RevealSection';


const Experience = () => {
  return (
    <RevealSection>
    <section className="experience-section">
      <h2>Experience</h2>

      <div className="experience-card">
        <h3>The Sparks Foundation – Web Developer Intern</h3>
        <span className="date">June 2024 – July 2024</span>
        <ul>
          <li>Developed a complete Bank Management System using the MERN stack.</li>
          <li>Built responsive UI with React.js & Tailwind CSS, implemented transaction management.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Freelance – Full-Stack Developer (Allied Publications)</h3>
        <span className="date">October 2024 – June 2025</span>
        <ul>
          <li>Designed and deployed a full-stack publishing platform using React.js and MongoDB.</li>
          <li>Developed secure REST APIs with Node.js and Express.js.</li>
        </ul>
      </div>
    </section>
    </RevealSection>
  );
};

export default Experience;
