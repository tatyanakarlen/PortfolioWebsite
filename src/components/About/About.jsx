import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="section-container about">
      <h2 className="section-heading">About</h2>{' '}
      <p>
        Based in Toronto, I have a unique background in fashion, piano
        performance and music pedagogy. I have a diploma in Fashion Arts from
        Humber College and a Software Engineering Immersive certificate from
        General Assembly.
        <br />
        <br />I discovered my passion for coding while working as a web content
        developer at Sutton Group where I created and managed several websites
        using popular content management systems such as Wix. I am currently
        working as a front-end React developer at Nuclear Media.
        <br />
        <br />
        Coding satisfies my need to create and build something from nothing.
        When I'm not coding, I enjoy playing and teaching piano as I am also a
        classically-trained pianist with a deep interest in classical, jazz, and
        synthesizer music. I take pride in being modest, approachable,
        cooperative and dependable.
      </p>
    </div>
  );
};

export default About;