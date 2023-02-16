import React from 'react';
import './Hero.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BiChevronsDown } from 'react-icons/bi'
import { MdOutlineMailOutline } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import ComputerIcon from '../ComputerIcon';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.8f39e6b0ef483205c5b1.pdf';

  return (
    <>
      <header>
        <div class="header-inner-wrapper">
          <ComputerIcon />
          <h1>TATYANA KARLEN</h1>

          <div class="h3-container">
            <h3>FULL STACK DEVELOPER</h3>
          </div>
          <div class="header-icon-container">
            <ul>
              <li>
                <a
                  class="icon-links"
                  href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
                  target="_blank"
                >
                  <BsLinkedin class="header-icon" />
                </a>
              </li>
              <li>
                <a
                  class="icon-links"
                  href="https://github.com/tatyanakarlen"
                  target="_blank"
                >
                  <BsGithub class="header-icon" />
                </a>
              </li>
              <li>
                <a
                  class="icon-links"
                  href="mailto:tatyanakarlen@gmail.com"
                  target="_blank"
                  aria-label="Mail"
                  rel="noopener noreferrer"
                >
                  <MdOutlineMailOutline id="mail-icon" class="header-icon" />
                </a>
              </li>
            </ul>
          </div>
          {/* <BiChevronsDown class="chevron-down-icon"/> */}
       
        </div>
        
       
        
      </header>
    </>
  );
};

export default Hero;
