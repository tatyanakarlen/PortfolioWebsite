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

  return (
    <div className="section-container hero">
      <div>
        <img src={headshot} />
      </div>
      <h1 class="line__1">Tatyana Karlen</h1>

      <p>
        I'm a full-stack/front-end developer with a passion for UI/UX. Always
        curious about the web, I graduated from General Assembly's Software
        Engineering Immersive program where I learned software development in a
        fast-paced environment.
      </p>
      <button>Contact Me</button>
    </div>
  );
};

export default Hero;
