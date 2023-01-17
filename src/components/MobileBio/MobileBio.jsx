import React from 'react';
import './MobileBio.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

const MobileBio = () => {
  return (
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
  );
};

export default MobileBio;
