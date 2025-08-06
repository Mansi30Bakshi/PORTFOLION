import React from 'react';
import './Experience.css';
import RevealSection from '../Components/RevealSection';

const Education = () => {
  return (
    <RevealSection>
    <section className="education-section">
      <h2>Education</h2>

      <div className="edu-card">
        <h3>B.Tech in Computer Science & Engineering</h3>
        <p>Jaypee Institute of Information Technology, Noida</p>
        <span className="date">Oct 2021 – June 2025</span>
        {/* <p><strong>CGPA:</strong> 6.6</p> */}
      </div>

      <div className="edu-card">
        <h3>Class XII – 97%</h3>
        <p>DAV Centenary Public School, Panipat</p>
        <span className="date">Apr 2020 – Jul 2021</span>
      </div>

      <div className="edu-card">
        <h3>Class X – 95.33%</h3>
        <p>DAV Centenary Public School, Panipat</p>
        <span className="date">Apr 2018 – Jul 2019</span>
      </div>
    </section>
    </RevealSection>
  );
};

export default Education;
