import React from 'react';
import './About.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const MobileAbout = () => {
  return (
    <div class="about-me">
      

      <h3 class="h3-computer">Diverse creative background</h3>
      <p class="bio">
        Those that know me can attest that a I'm a wild spirit. Hardworking, creative and inspired, 
        I have a background in fashion and piano performance.  
        <br/>
          <br/>
          Always curious about the 'secret world' of coding, I started my journey with self-learning and later enrolled in 
          General Assembly's <span class="neon-green-text">Software Engineering Immersive</span> where I learned full-stack development in a fast-paced environment.
          <br/>
          <br/>
         When I'm not coding, I'm playing or teaching piano, listening to music or reading nerdy reviews. 
         I have an unhealthy addiction to cult movies and the 80's. 
      </p>
    </div>
  );
};

export default MobileAbout;
