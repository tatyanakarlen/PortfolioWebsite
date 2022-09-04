import React from 'react';
import './Hero.css';
import { BsFillEnvelopeFill} from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { SiJavascript } from "react-icons/si"









const Hero = () => {
  return (
    <div class="hero-container">
        <div id="header-container">
      <h1 class="header">Tatyana Karlen</h1>
      <h3 class="sub-header">Front-End / Full Stack Developer</h3>
      </div>
      <br />
      <article class="article">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. 
      </article>
      {/* <br/>
      <br/> */}
      {/* <div id="skills-icon-container">
        <img src="https://img.icons8.com/color/70/000000/javascript--v1.png"/>
        <img src="https://img.icons8.com/plasticine/70/000000/react.png"/>
        <img src="https://img.icons8.com/color/70/000000/nodejs.png"/>
        <img src="https://img.icons8.com/color/70/000000/css3.png"/>
        <img src="https://img.icons8.com/color/70/000000/html-5--v1.png"/>
        <img src="https://img.icons8.com/color/70/000000/mongodb.png"/>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/70/000000/external-sql-web-hosting-flaticons-lineal-color-flat-icons.png"/>
        <img src="https://img.icons8.com/fluency/70/000000/python.png"/>
        <img src="https://img.icons8.com/windows/70/000000/django.png"/>
        
        </div> */}
      <br/>
      <br/>
      <article class="article">
        Below is a list of my portfolio projects, most of which I built on my own. 
        Looking to collaborate or hire me? Contact me below: 
        </article>
        <br/>
        <br/>
        <div id="skills-icon-container">
        <img src="https://img.icons8.com/color/70/000000/javascript--v1.png"/>
        <img src="https://img.icons8.com/plasticine/70/000000/react.png"/>
        <img src="https://img.icons8.com/color/70/000000/nodejs.png"/>
        <img src="https://img.icons8.com/color/70/000000/css3.png"/>
        <img src="https://img.icons8.com/color/70/000000/html-5--v1.png"/>
        <img src="https://img.icons8.com/color/70/000000/mongodb.png"/>
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/70/000000/external-sql-web-hosting-flaticons-lineal-color-flat-icons.png"/>
        <img src="https://img.icons8.com/fluency/70/000000/python.png"/>
        <img src="https://img.icons8.com/windows/70/000000/django.png"/>
        
        </div>
      <br/>
      <div id="icon-container">
      <a href="mailto:tatyanakarlen@gmail.com" target="_blank" aria-label="Mail"><BsFillEnvelopeFill style={{fontSize: '25px', marginRight: '25px'}} /></a>
      <BsLinkedin style={{fontSize: '25px'}}/>
      </div>
    </div>
    
  );
};

export default Hero;
