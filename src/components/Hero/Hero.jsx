import React from 'react';
import './Hero.css';
import bioPic from '../Images/1660857374155.jpeg';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineDown } from 'react-icons/ai';
// import { resume } from '../assets/TATYANA KARLEN-RESUME.pdf'

import resume from '../assets/TATYANA_KARLEN_RESUME.pdf';
import isNavExpanded from '../TopNav/TopNav.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.3a0d044114b111a1b961.pdf';

  return (
    <>
      {' '}
      {!isMobile ? (
        <div class="outerHeroDiv" id="about">
          <div class="innerHeroDiv">
            <header class="header">
              <div class="left-img-title-container">
                <img src={bioPic}></img>
                <h1>Tatyana Karlen</h1>
                <h3>Full-Stack Developer</h3>
                <a
                  class="contact-me-link"
                  href="mailto:tatyanakarlen@gmail.com"
                  target="_blank"
                  aria-label="Mail"
                  rel="noopener noreferrer"
                >
                  Contact&nbsp;
                  <BsFillEnvelopeFill style={{ fontSize: '2rem' }} />
                </a>
              </div>
              <div class="right-about-me-container">
                <h1>About Me</h1>
                <p>
                  <span class="hi-wave-intro">
                    Hi &#128075; thanks for stopping by!
                  </span>{' '}
                  I'm a{' '}
                  <span class="full-stack-developer">full-stack developer</span>{' '}
                  with a passion for front-end development. I graduated from
                  General Assembly's{' '}
                  <span class="bold-span">Software Engineering Immersive</span>{' '}
                  program and I have a background in Fashion Arts and piano
                  performance.
                  <br />
                  <br />
                  <span class="collaborate">
                    Looking to collaborate or hire me? I'd love to hear from
                    you!
                  </span>
                </p>
                <div class="btn-icons-container">
                  <a id="resume-link" target="_blank" href={resumeLink}>
                    Resume
                  </a>
                  <ul class="right-side-icons">
                    <li>
                      <a
                        class="icon-container"
                        href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin class="icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        class="icon-container"
                        href="https://github.com/tatyanakarlen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub class="icon" />
                      </a>
                    </li>
                    <li>
                      <a class="icon-container" href="#">
                        <BsInstagram class="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
        </div>
      ) : (
        <div class="mobile-header-outer-div" id="about-me">
          <header class="mobile-header">
            <img src={bioPic}></img>
            <h1>Tatyana Karlen</h1>
            <h3>Full-Stack Developer</h3>
            <div class="btn-icons-container-mobile">
              <ul class="right-side-icons-mobile">
                <li>
                  <a
                    class="icon-container"
                    href="mailto:tatyanakarlen@gmail.com"
                    target="_blank"
                    aria-label="Mail"
                    rel="noopener noreferrer"
                  >
                    <BsFillEnvelopeFill class="icon" />
                  </a>
                </li>
                <li>
                  <a
                    class="icon-container"
                    href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin class="icon" />
                  </a>
                </li>
                <li>
                  <a
                    class="icon-container"
                    href="https://github.com/tatyanakarlen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub class="icon" />
                  </a>
                </li>
              </ul>
            </div>
            <>
              {isSmallMobile ? (
                <>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      Hi &#128075; thanks for stopping by!
                    </span>{' '}
                    I'm a{' '}
                    <span
                      style={{
                        color: '#b20456',
                        fontWeight: 'bold',
                        fontSize: '1em',
                      }}
                    >
                      full-stack developer
                    </span>{' '}
                    with a passion for front-end development.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      Hi &#128075; thanks for stopping by!
                    </span>{' '}
                    I'm a{' '}
                    <span
                      style={{
                        color: '#b20456',
                        fontWeight: 'bold',
                        fontSize: '1em',
                      }}
                    >
                      full-stack developer
                    </span>{' '}
                    with a passion for frontend development. I graduated from
                    General Assembly's{' '}
                    <span class="bold-span">
                      Software Engineering Immersive
                    </span>{' '}
                    program and I have a background in Fashion Arts and piano
                    performance. My skills and past projects can be found below.
                    <br />
                    <br />
                    <span>
                      Looking to collaborate or hire me? I'd love to hear from
                      you!
                    </span>
                  </p>
                </>
              )}
            </>
            <a id="mobile-resume-link" target="_blank" href={resumeLink}>
              Resume
            </a>
          </header>
        </div>
      )}
    </>
  );
};

export default Hero;
