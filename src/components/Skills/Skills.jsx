import React from 'react';
import './Skills.css';
import css from '../../Assets/skills-imgs/css3.svg'
import django from '../../Assets/skills-imgs/django-icon-svgrepo-com.svg'
import html from '../../Assets/skills-imgs/html5.svg'
import postgreSQL from '../../Assets/skills-imgs/icons8-postgresql (1).svg'
import javascript from '../../Assets/skills-imgs/js.svg'
import MUI from '../../Assets/skills-imgs/material-ui-1.svg'
import mongodb from '../../Assets/skills-imgs/mongodb-svgrepo-com.svg'
import nextjs from '../../Assets/skills-imgs/next-js.svg'
import nodejs from '../../Assets/skills-imgs/node-js.svg'
import python from '../../Assets/skills-imgs/python.svg'
import react from '../../Assets/skills-imgs/react-2.svg'
import tailwind from '../../Assets/skills-imgs/tailwind-css-icon.svg'





const Skills = () => {
  return (
    <div id="skills" class="section-container skills">
      <h2 class="h2-heading">Skills</h2>
      <div class="skills-container">
        <div class="skills-icon-container">
          <img src={react} />
          <p>React</p>
        </div>
        <div class="skills-icon-container">
          <img src={nextjs} />
          <p>Next.js</p>
        </div>
        <div class="skills-icon-container">
          <img src={javascript} />
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
          <img src={nodejs} />
          <p>Node</p>
        </div>
        <div class="skills-icon-container">
          <img src={python} />
          <p>Python</p>
        </div>
        <div class="skills-icon-container">
          <img src={django} />
          <p>Django</p>
        </div>
        <div class="skills-icon-container">
          <img src={mongodb} />
          <p>MongoDB</p>
        </div>
        <div class="skills-icon-container">
          <img src={postgreSQL} />
          <p>PostgreSQL</p>
        </div>
        <div class="skills-icon-container">
          <img src={tailwind} />
          <p>Tailwind</p>
        </div>
        <div class="skills-icon-container">
          <img src={MUI}/>
          <p>MUI</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
