import React from 'react';
import './About.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const MobileAbout = () => {
  return (
    <div class="about-me">
      

      <h3 class="h3-computer">Diverse creative background</h3>
      <p class="bio">
        Welcome and thanks for stopping by! I'm a <span class="bold-underlined-text">jr.full-stack developer based in Toronto, Canada.</span> I have a background in fashion, marketing and classical piano performance. 
        <br/>
          <br/>
          Always curious about the web and the secret world of coding, I started my journey with self-learning and later enrolled in 
          General Assembly's <span class="neon-green-text">Software Engineering Immersive</span> where I learned full-stack development in a fast-paced environment.
          <br/>
          <br/>
         When I'm not coding, I'm playing or teaching piano. 
         I have an unhealthy addiction to cult movies and the 80's. 
      </p>
    </div>
  );
};

export default MobileAbout;
