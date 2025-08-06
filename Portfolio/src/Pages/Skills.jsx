import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiVercel, SiNetlify, SiCplusplus } from 'react-icons/si';
import RevealSection from '../Components/RevealSection';


const skills = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f' },
    { name: 'React.js', icon: <FaReact />, color: '#61DBFB' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8' },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs />, color: '#3c873a' },
    { name: 'Express.js', icon: '⚙️', color: '#000000' },
  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
    { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt />, color: '#f1502f' },
    { name: 'GitHub', icon: <FaGithub />, color: '#000000' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
  ],
  Languages: [
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f' },
  ],
};

const Skills = () => {
  return (
    <RevealSection>
    <section className="skills-section skills-wrapper" >
      <h2>Tech Stack</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-row">
          <h3>{category}</h3>
          <div className="skill-items">
            {items.map(({ name, icon, color }) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon" style={{ color }}>{icon}</div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
    </RevealSection>
  );
};

export default Skills;
