// components/InteractiveResume.jsx
import React from 'react';
import './interactiveResume.css'; // Add your custom styles

const InteractiveResume = () => {
  return (
    <div className="resume-container">
      <section className="personal-info">
        <h2>Hema's Interactive Resume</h2>
        <p>Passionate Full Stack Developer with experience in building dynamic websites and applications.</p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </section>

      <section className="portfolio">
        <h3>Portfolio</h3>
        <div className="projects">
          <div className="project">
            <h4>Project 1</h4>
            <p>A full-stack application built using React and Node.js.</p>
          </div>
          <div className="project">
            <h4>Project 2</h4>
            <p>Personal portfolio site built with React.</p>
          </div>
          {/* Add more projects */}
        </div>
      </section>
    </div>
  );
};

export default InteractiveResume;
