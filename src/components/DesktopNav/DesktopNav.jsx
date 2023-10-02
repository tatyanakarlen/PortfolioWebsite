import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ImDownload } from 'react-icons/im';
import './DesktopNav.css';

const DesktopNav = () => {
  return (
    <div className="desktop-nav">
      
      <ul className="links">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <div class="social-link-container">
        <li class="social-links">
          <a
            href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
        <li class="social-links">
          <a href="https://github.com/tatyanakarlen" target="_blank">
            <BsGithub />
          </a>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default DesktopNav;
