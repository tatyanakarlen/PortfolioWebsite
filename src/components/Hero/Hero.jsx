import React from 'react';
import './Hero.css';
import bioPic from '../Images/1660857374155.jpeg';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import resume from '../assets/TATYANA_KARLEN_RESUME.pdf';
import { useMediaQuery } from 'react-responsive';


const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 575px)' });

  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.8f39e6b0ef483205c5b1.pdf';

  return (
    <>
      <header>
        <div class="img-header-container">
          <div class="img-header-wrapper">
            <img src={bioPic} />
            <div class="h1-container">
              <h1>Tatyana Karlen</h1>

              <h3>
                Full-stack <span class="pink-neon-text">web</span> developer
              </h3>
            </div>
          </div>
        </div>
        { !isMobile ?
        <>
         <div class="bio-container">
          <p>
            My name is <span class="Tatyana">Tatyana</span> and I'm a{' '}
            <span class="full-stack-developer">full-stack developer</span> with
            a passion for front-end development. 
          </p>
        </div>
        <div class="social-icons">
          <ul>
            <li>
              {' '}
              <a id="resume-link" target="_blank" href={resumeLink}>
                Resume
              </a>
            </li>
            <div class="icons-container">
              <div class="icon-text-container">
                <li class="li-text icons-hover">
                  <a class="social-links" href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca">
                    <BsLinkedin class="icon" />
                  </a>
                </li>
              </div>
              <div class="icon-text-container">
                <li class="li-text icons-hover">
                  <a class="social-links" href="https://github.com/tatyanakarlen">
                    <BsGithub class="icon" />
                  </a>
                </li>
              </div>
              <div class="icon-text-container">
                <li class="li-text icons-hover">
                  <a
                    class="social-links"
                    href="mailto:tatyanakarlen@gmail.com"
                    target="_blank"
                    aria-label="Mail"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMailOutline
                     id="mail-icon"
                      
                      
                    />
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        </> : 


        <div className="mobile-bio-social-container">
          <div className="mobile-icon-container">
            <ul className="mobile-icon-list">
              <li>
                <a
                  class="social-links"
                  href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
                >
                  <BsLinkedin class="mobile-icon" />
                </a>
              </li>
              <li>
                <a class="social-links" href="https://github.com/tatyanakarlen">
                  <BsGithub class="mobile-icon" />
                </a>
              </li>
              <li>
                <a
                  class="social-links"
                  href="mailto:tatyanakarlen@gmail.com"
                  target="_blank"
                  aria-label="Mail"
                  rel="noopener noreferrer"
                >
                  <MdOutlineMailOutline id="mail-icon" class="mobile-icon" />
                </a>
              </li>
            </ul>
          </div>

          <h3>
            My name is <span class="Tatyana">Tatyana</span>
          </h3>
          <h1 class="mobile-bio-h1">
            I'm a full-stack developer with a passion for UI/UX
          </h1>
        </div>
        }

       
      </header>
    </>
  );
};

export default Hero;
