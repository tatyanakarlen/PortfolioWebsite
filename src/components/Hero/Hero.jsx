import React from 'react';
import './Hero.css';
import { BsFillEnvelopeFill} from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'









const Hero = () => {
  return (
    <div class="hero-container">
        <div id="header-container">
      <h1 class="header">TATYANA KARLEN</h1>
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
      <br/>
      <br/>
      <article class="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        officiis numquam ratione assumenda ex recusandae laborum rerum fuga
        optio corrupti, veritatis facere. 
        </article>
      <br/>
      <br/>
      <div id="icon-container">
      <a href="mailto:tatyanakarlen@gmail.com" target="_blank" aria-label="Mail"><BsFillEnvelopeFill style={{fontSize: '25px', marginRight: '25px'}} /></a>
      <BsLinkedin style={{fontSize: '25px'}}/>
      </div>
    </div>
    
  );
};

export default Hero;
