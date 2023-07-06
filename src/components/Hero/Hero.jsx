import React from 'react';
import './Hero.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

import ComputerIcon from '../ComputerIcon';

const Hero = () => {
  return (
    <>
      <header>
        <div className="header-inner-wrapper">
          <ComputerIcon />
          <h1>TATYANA KARLEN</h1>

          <div className="h3-container">
            <h3>FULL STACK DEVELOPER</h3>
          </div>
          <div className="header-icon-container">
            <ul>
              <li>
                <a
                  className="icon-links"
                  href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
                  target="_blank"
                >
                  <BsLinkedin className="header-icon" />
                </a>
              </li>
              <li>
                <a
                  className="icon-links"
                  href="https://github.com/tatyanakarlen"
                  target="_blank"
                >
                  <BsGithub className="header-icon" />
                </a>
              </li>
              <li>
                <a
                  className="icon-links"
                  href="mailto:tatyanakarlen@gmail.com"
                  target="_blank"
                  aria-label="Mail"
                  rel="noopener noreferrer"
                >
                  <MdOutlineMailOutline
                    id="mail-icon"
                    className="header-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
