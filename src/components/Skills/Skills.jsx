import React from 'react';
import './Skills.css';
import gif from '../Images/video-unscreen.gif';

const Skills = () => {
  return (
    <div class="skills section-container" id="skills">
      <p>
        <h1 class="section-heading skills-heading">Skills</h1>
      </p>
      <br />
      <br />

      <div class="skills-container-wrapper">
        <div class="skill-container">
          <div class="skills-icon-box">Javascript</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">React</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">Next.js</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">HTML5</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">CSS3</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">Tailwind</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">MUI</div>
        </div>

        <div class="skill-container">
          <div class="skills-icon-box">Python</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">Django</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">Node.js</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">MongoDB</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">PostgreSQL</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
