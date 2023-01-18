import React from 'react';
import './About.css';
import { BsCloudDownload } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.8f39e6b0ef483205c5b1.pdf';
  return (
    <div class="about-me">
      {/* <h3 class="h3-computer">Diverse creative background</h3> */}
      <p class="paragraph">
        Welcome and thanks for stopping by! Based in Toronto, Canada, I have a{' '}
        diverse creative background in fashion, piano performance
        and music pedagogy.
        <br />
        <br />
        Always curious about the web, I graduated{' '}
        <span>General Assembly's</span>{' '}
        
          Software Engineering Immersive
        
        program where I learned full-stack development in a fast-paced
        environment.
      </p>
      <br />
      <br />
      <div className="download">
      <a class="social-links" href={resumeLink}>
          <BsCloudDownload />
        </a>
        <h1>Resume</h1>

      
      </div>
    </div>
  );
};

export default About;
