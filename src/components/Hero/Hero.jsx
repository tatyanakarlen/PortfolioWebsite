import React from 'react';
import './Hero.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ImDownload } from 'react-icons/im';
import ComputerIcon from '../ComputerIcon';
import headshot from '../assets/headshot.jpeg';

const Hero = () => {
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.72c080b065903cbbc344.pdf';

  // <ComputerIcon />

  return (
    <div className="section-container hero">
      <div class="wrapper">
        <div>
          <img src={headshot} />
        </div>
        <h1 class="line__1">Tatyana Karlen</h1>
      </div>
      {/* <h2>Full-stack / Front-end developer</h2> */}
      {/* <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
            target="_blank"
          >
            <BsLinkedin />
          </a>
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
        <li>
          <a
            href={resumeLink}
            target="_blank"
            aria-label="Mail"
            rel="noopener noreferrer"
          >
            <ImDownload id="download-icon" />
          </a>
        </li>
      </ul> */}
      <p>
        I'm a full-stack developer with a passion for UI/UX and front-end
        development. Always curious about the web, I
        graduated from General Assembly's Software Engineering Immersive program
        where I learned software development in a fast-paced environment.
      </p>
      <button>Contact Me</button>
    </div>
  );
};

export default Hero;
