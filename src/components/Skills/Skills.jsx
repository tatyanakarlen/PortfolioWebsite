import React from 'react';
import './Skills';
import css from '../../Assets/skills-imgs/css3.svg'
import django from '../../Assets/skills-imgs/django-icon-svgrepo-com.svg'
import html from '../../Assets/skills-imgs/html5.svg'
import postgreSQL from '../../Assets/skills-imgs/icons8-postgresql (1).svg'



const Skills = () => {
  return (
    <div class="section-container skills">
      <h2 class="h2-heading">Skills</h2>
      <div class="skills-container">
        <div class="skills-icon-container">
          <img id="svg" src="Assets/react-2.svg" />
          <p>React</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/next-js.svg" />
          <p>Next.js</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/js.svg" />
          <p>Javascript</p>
        </div>
        <div class="skills-icon-container">
          <img src={html} />
          <p>HTML</p>
        </div>
        <div class="skills-icon-container">
          <img src={css}/>
          <p>CSS</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/node-js.svg" />
          <p>Node</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/python.svg" />
          <p>Python</p>
        </div>
        <div class="skills-icon-container">
          <img src={django} />
          <p>Django</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/mongodb-svgrepo-com.svg" />
          <p>MongoDB</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/icons8-postgresql (1).svg" />
          <p>PostgreSQL</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/tailwind-css-icon.svg" />
          <p>Tailwind</p>
        </div>
        <div class="skills-icon-container">
          <img src="Assets/material-ui-1.svg" />
          <p>MUI</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
