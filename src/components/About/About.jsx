import React from 'react';
import './About.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const About = () => {
  return (
    <div class="about-me">
      {/* <h3 class="h3-computer">Diverse creative background</h3> */}
      <p class="paragraph">
        Welcome and thanks for stopping by! 
        Based in
        Toronto, Canada, I have a <span>diverse creative background</span> in
        fashion, piano performance and music pedagogy.
        <br />
        <br />Always curious about the web, I graduated <span>General Assembly's</span>{' '}
        <span style={{textDecoration: 'underline'}}>Software Engineering Immersive</span>{' '}
        program where I learned full-stack development in a fast-paced
        environment.
        {/* <br />
        <br />
       When I'm not coding, I'm playing or teaching piano. I'm inspired by cult movies, the 80's and much more. */}
      </p>
    </div>
  );
};

export default About;
