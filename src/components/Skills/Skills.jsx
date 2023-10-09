import React from 'react';
import './Skills.css';
import gif from '../Images/video-unscreen.gif';

const Skills = () => {
  return (
    <div className="skills section-container" id="skills">
      <h1 className="section-heading skills-heading">Skills</h1>

      <br />
      <br />

      <div className="skills-container-wrapper">
        <div className="skill-container">
          <div className="skills-icon-box">Javascript</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">React</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">Next.js</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">HTML5</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">CSS3</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">Tailwind</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">MUI</div>
        </div>

        <div className="skill-container">
          <div className="skills-icon-box">Python</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">Django</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">Node.js</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">MongoDB</div>
        </div>
        <div className="skill-container">
          <div className="skills-icon-box">PostgreSQL</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
