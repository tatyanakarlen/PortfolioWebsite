import React from 'react';
import './About.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const MobileAbout = () => {
  return (
    <div class="about-me">
      <h3 class="h3-computer">Diverse creative background</h3>
      <p class="bio">
        Welcome and thanks for stopping by! I'm a{' '}
        <span class="bold-underlined-text">
          jr.full-stack developer based in Toronto, Canada.
        </span>{' '}
        I have a background in fashion arts, marketing and classical piano performance.
        <br />
        <br />
        I graduated from <span>General Assembly's</span>{' '}
        <span class="neon-green-text">Software Engineering Immersive</span> program{' '}
        where I learned full-stack development in a fast-paced environment. 
        <br />
        <br />
       When I'm not coding, I'm playing or teaching piano. I'm inspired by cult movies, the 80's and a DYI aesthetic.
      </p>
    </div>
  );
};

export default MobileAbout;
