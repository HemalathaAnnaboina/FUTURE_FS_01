import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      {/* Technical Skills */}
      <div className="technical-skills">
        <h2>Technical Skills</h2>
        <p>
          I have acquired a wide range of technical skills throughout my journey as a developer.
          Below are some of the key technologies and tools I have experience with.
        </p>
        {[
          { name: 'HTML', level: 90, icon: <FaHtml5 className="icon" /> },
          { name: 'CSS', level: 85, icon: <FaCss3Alt className="icon" /> },
          { name: 'JavaScript', level: 80, icon: <FaJsSquare className="icon" /> },
          { name: 'React', level: 75, icon: <FaReact className="icon" /> },
          { name: 'MySQL', level: 70, icon: <FaDatabase className="icon" /> }
        ].map(skill => (
          <div className="skill-bar" key={skill.name}>
            <div className="skill-label">
              <div className="skill-left">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="bar">
              <motion.div
                className="fill"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Professional Skills */}
      <div className="professional-skills">
        <h2>Professional Skills</h2>
        <p>
          These are my soft skills that help me collaborate and succeed in a team environment.
          I continuously work to improve these skills to enhance my productivity and teamwork.
        </p>
        <div className="skills-list">
          {[
            { name: 'Communication', percent: 85 },
            { name: 'Teamwork', percent: 80 },
            { name: 'Problem Solving', percent: 75 },
            { name: 'Time Management', percent: 70 }
          ].map(skill => (
            <div className="circle-skill" key={skill.name}>
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${skill.percent}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  {skill.percent}%
                </text>
              </svg>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
