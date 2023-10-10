import React from 'react';
import './Hero.css';
import headshot from '../assets/headshot.jpeg';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isSmallMobile = useMediaQuery({
    query: '(max-width: 649px)',
  });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.72c080b065903cbbc344.pdf';

  return (
    <div className="section-container hero">
      <div>
        <img src={headshot} />
      </div>
      <h1>Tatyana Karlen</h1>
      <>
        {isSmallMobile ? (
          <p>
            I'm a full-stack developer with a specialization in front-end
            development and a passion for UI/UX. I am based in Toronto, Canada.
          </p>
        ) : (
          <p>
            I'm a full-stack/front-end developer with a passion for UI/UX.
            Always curious about the web, I graduated from General Assembly's
            Software Engineering Immersive program where I learned software
            development in a fast-paced environment.
          </p>
        )}
      </>
      <a
        href="mailto:tatyanakarlen@gmail.com"
        target="_blank"
        aria-label="Mail"
        rel="noopener noreferrer"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Hero;
