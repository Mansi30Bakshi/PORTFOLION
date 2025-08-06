import React from 'react';
import './Projects.css';
import RevealSection from '../Components/RevealSection';

const projects = [
  {
    title: 'Krishi Mitra – AI Assistant for Farmers',
    description: `Krishi Mitra is an AI-enabled smart agriculture assistant designed to empower farmers with personalized insights, crop suggestions, and weather-based recommendations. It integrates multiple modules such as a chatbot for real-time help, crop prediction, pest control advisories, soil analysis, and market pricing. The project is aimed at reducing farmer dependency and improving yield efficiency via technology.`,
    tech :['React.js', 'Node.js', 'Express.js', 'MongoDB','Google Teachable Machiene','Wit.ai'],
    image: 'krishiM.png'
  },
  {
    title: 'CollabConnect',
    description: `A social platform enabling users to take quizzes, create posts, and connect with others to find accurate jobs,internships and experiences. 
    Developed using React,Node,Express,MongoDB and React Router.`,
    tech: ['React.js', 'Redux', 'React Router','Node.js', 'Express.js', 'MongoDB','Postman'],
    image: 'CollabConnect.png',
  },
  {
    title: 'Explorex – Search Engine',
    description: `ExploreX is an intelligent search engine tailored for efficient exploration of data and reports. It leverages modern information retrieval techniques like tokenization, stemming, ranking, and vectorization to deliver accurate and personalized results. It supports semantic search using NLP, collaborative tools (annotations, comments, sharing), and dynamic result ranking using ML algorithms — all aimed at enhancing user experience in research and learning.`,
    tech: ['C++', 'HTML', 'CSS', 'JavaScript', 'Natural Language Processing'],
    image: 'ExploreX.png',
  },
];

const Projects = () => {
  return (
    <RevealSection>
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map(({ title, description, tech, image }, index) => (
          <div className="project-card" key={index}>
            <img src={image}style={{
    width: '100%',
    height: 'auto',
    maxHeight: '400px',
    objectFit: 'contain',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px'
  }} alt={title} className="project-img" />
            <div className="project-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tech-stack">
                {tech.map((item, idx) => (
                  <span key={idx} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </RevealSection>
  );
};

export default Projects;
