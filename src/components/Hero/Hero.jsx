import React from 'react';
import './Hero.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

import ComputerIcon from '../ComputerIcon';

const Hero = () => {
  return (
    <div className="section-container hero">
      <div class="wrapper">
        <h1 class="line__1">Tatyana</h1>
        <h1 class="line__2">Karlen</h1>
      </div>
      <h2 className="typing-demo">Full-stack developer</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
            target="_blank"
          ></a>
          <BsLinkedin />
        </li>
        <li>
          <a href="https://github.com/tatyanakarlen" target="_blank">
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="mailto:tatyanakarlen@gmail.com"
            target="_blank"
            aria-label="Mail"
            rel="noopener noreferrer"
          >
            <MdOutlineMailOutline id="mail-icon" />
          </a>
        </li>
      </ul>
      <p>
        I'm a full-stack developer with a passion for UI/UX and front-end
        development. Based in Toronto, I have a unique background in fashion,
        piano performance and music pedagogy. Always curious about the web, I
        graduated from General Assembly's Software Engineering Immersive program
        where I learned full-stack development in a fast-paced environment.
      </p>
   
      {/* <div class="section-container hero">
        <div class="typing-demo">> Tatyana Karlen</div>
        <p>
          I'm a full-stack developer with a passion for UI/UX and front-end
          development. Based in Toronto, I have a unique background in fashion,
          piano performance and music pedagogy. Always curious about
          the web, I graduated from General Assembly's Software Engineering
          Immersive program where I learned full-stack development in a
          fast-paced environment.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
              target="_blank"
            ></a>
            <BsLinkedin />
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
          </li>
          <li>
            <i class="bi bi-envelope"></i>
          </li>
        </ul>
      </div> */}
    </div>

    /* <header>
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
      </header> */
  );
};

export default Hero;
