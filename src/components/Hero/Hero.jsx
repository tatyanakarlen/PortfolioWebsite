import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <div class="hero-container">
      <div id="header-container">
        <h1 class="header">Tatyana Karlen</h1>
        <h3 class="sub-header">full-stack / front-end developer</h3>
        
        
       
      </div>
      <br />
      {/* <article class="article">
        Hello! I'm a web developer with a passion for UI/front-end. I'm experienced in both front and back-end development and up-to-date with the industry’s most
        in-demand technologies. My background in fashion marketing gives me a
        creative edge. When I'm not coding I'm playing/teaching piano, thrifting or watching off-beat movies. 
      </article> */}
      <article class="article">
        I'm a <span style={{color: '#D2042D' , fontSize: '1.5rem'}}>full-stack</span> developer with a passion for the visual side of things. 
        I'm experienced in front and back-end development and have a background in classical music (piano) and fashion marketing. 
        
       

      </article>
      
      <br /> 
      
       <article class="article">
        Below is a list of my developer skills and portfolio projects. Looking to collaborate or hire me? I'd love to
        hear from you!
      </article>
      <br />
      <br />
      <div id="skills-icon-container">
        <img src="https://img.icons8.com/color/70/000000/javascript--v1.png" alt="icon"/>
        <img src="https://img.icons8.com/plasticine/70/000000/react.png" alt="icon"/>
        <img src="https://img.icons8.com/color/70/000000/nodejs.png" alt="icon"/>
        <img src="https://img.icons8.com/color/70/000000/css3.png" alt="icon"/>
        <img src="https://img.icons8.com/color/70/000000/html-5--v1.png" alt="icon"/>
        <img src="https://img.icons8.com/color/70/000000/mongodb.png" alt="icon"/>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/70/000000/external-sql-web-hosting-flaticons-lineal-color-flat-icons.png" alt="icon"/>
        <img src="https://img.icons8.com/fluency/70/000000/python.png" alt="icon"/>
        <img src="https://img.icons8.com/windows/70/000000/django.png" alt="icon"/>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Hero;
