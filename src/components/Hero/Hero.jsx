import React from 'react';
import './Hero.css';
import { BsFillEnvelopeFill} from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'









const Hero = () => {
  return (
    <div class="hero-container">
        <div style={{letterSpacing: '0.5px'}}>
      <h1>TATYANA KARLEN</h1>
      <h3>Front-End / Full Stack Developer</h3>
      </div>
      <br />
      <article>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </article>
      <br/>
      <br/>
      <article>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        officiis numquam ratione assumenda ex recusandae laborum rerum fuga
        optio corrupti, veritatis facere. 
        </article>
      <br/>
      <br/>
      <div id="icon-container">
      <BsFillEnvelopeFill style={{fontSize: '20px', marginRight: '20px'}} />
      <BsLinkedin style={{fontSize: '20px'}}/>
      </div>
    </div>
    
  );
};

export default Hero;
