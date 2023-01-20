import React from 'react';
import './About.css';
import { BsCloudDownload } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.8f39e6b0ef483205c5b1.pdf';
  const certificateLink = '/static/media/certificate.1fa87be4353136a2925e.png';

  return (
    <div class="about-me">
      <p class="paragraph">
        Welcome and thanks for stopping by! Based in Toronto, Canada, I have a{' '}
        diverse creative background in fashion, piano performance and music
        pedagogy.
        <br />
        <br />
        Always curious about the web, I graduated from General Assembly's{' '}
        <span>Software Engineering Immersive</span> program where I learned
        full-stack development in a fast-paced environment.
        <br />
        <br />
        When I'm not coding, I'm playing or teaching piano. I'm inspired by cult movies, the 80's and much more.
      </p>

      {isMobile ? (
        <a class="social-links" href={resumeLink} target="_blank">
          <div className="download">
            <i id="download-icon" class="bi bi-download"></i>
            <h1>Resume</h1>
          </div>
        </a>
      ) : (
        <a class="social-links" href={certificateLink} target="_blank">
          <div className="download">
            <i id="download-icon" class="bi bi-download"></i>
            <h1>Certificate</h1>
          </div>
        </a>
      )}
    </div>
  );
};

export default About;
