import React from 'react';
import './About.css';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.8f39e6b0ef483205c5b1.pdf';
  const certificateLink = '/static/media/certificate.1fa87be4353136a2925e.png';

  return (
    <div id="about" class="about-me">
      <div class="about-me-container">
        <h3 class="section-heading">About</h3>
      </div>
      <p class="paragraph">
        Welcome and thanks for stopping by! I'm a full-stack developer with a passion for UI/UX and front-end development. Based in Toronto, Canada, I have a{' '}
        diverse creative background in fashion, piano performance and music
        pedagogy.
        Always curious about the web, I graduated from General Assembly's{' '}
        <span>Software Engineering Immersive</span> program where I learned
        full-stack development in a fast-paced environment. I have experience with React, Javascript, HTML, CSS, Sass,
        Next.js, Python, Django, Node.js, MongoDB, PostgreSQL and more. 
      </p>
     

      {/* {isMobile && (
        <a class="social-links" href={resumeLink} target="_blank">
          <div className="download">
            <i id="download-icon" class="bi bi-download"></i>
            <h1>Resume</h1>
          </div>
        </a>
      )} */}
    </div>
  );
};

export default About;
