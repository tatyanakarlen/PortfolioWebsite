import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div class="skills" id="skills">
      <p>
      <h1 class="bold-underlined-text">Experienced with the following languages and tools:</h1>
      </p>
      <br />

      <div class="skills-container-wrapper">
        <div class="skill-container">
          <div class="skills-icon-box">Javascript</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">React</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">HTML5</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">CSS3</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">Sass</div>
        </div>
        <div class="skill-container">
          <div class="skills-icon-box">Next.js</div>
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
    
      <div class="img-container">
        <img
          src="https://media.giphy.com/media/xT9KVgmGTooXz0iDPW/giphy.gif"
          alt=""
          class="gif"
        />
      </div>
    </div>
  );
};

export default Skills;
