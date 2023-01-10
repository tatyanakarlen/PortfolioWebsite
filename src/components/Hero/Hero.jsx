import React from 'react';
import './Hero.css';
import bioPic from '../Images/1660857374155.jpeg';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive';
import { AiOutlineDown } from 'react-icons/ai';
// import { resume } from '../assets/TATYANA KARLEN-RESUME.pdf'

import resume from '../assets/TATYANA_KARLEN_RESUME.pdf';
import isNavExpanded from '../TopNav/TopNav.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.5ffedecd3f6f0c6ab413.pdf';

  //   <a
  //   class="contact-me-link"
  //   href="mailto:tatyanakarlen@gmail.com"
  //   target="_blank"
  //   aria-label="Mail"
  //   rel="noopener noreferrer"
  // >

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
                Full-stack <span>web</span> developer
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
              <a link="#">Resume</a>
            </li>
            <div class="icons-container">
              <div class="icon-text-container">
                <li class="li-text icons-hover">
                  <BsLinkedin class="icon"/>
                </li>
              </div>
              <div class="icon-text-container">
                <li class="li-text icons-hover">
                <BsGithub class="icon"/>
                </li>
              </div>
              <div class="icon-text-container">
                <li class="li-text icons-hover">
                <MdOutlineMarkEmailUnread class="icon"/>
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
