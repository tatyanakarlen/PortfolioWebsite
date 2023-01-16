import React from 'react';
import './Hero.css';
import bioPic from '../Images/1660857374155.jpeg';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineMailOutline } from 'react-icons/md';
import resume  from '../assets/TATYANA_KARLEN_RESUME.pdf'

// import resume from '../assets/TATYANA_KARLEN_RESUME.pdf';
import isNavExpanded from '../TopNav/TopNav.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.8f39e6b0ef483205c5b1.pdf';

  //   <a id="mobile-resume-link" target="_blank" href={resumeLink}>
  //   Resume
  // </a>

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
                      style={{ fontSize: '4.5rem' }}
                      class="icon"
                    />
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Hero;
