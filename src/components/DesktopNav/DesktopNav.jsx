import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './DesktopNav.css';

const DesktopNav = () => {
  return (
    <div className="desktop-nav">
      <ul className="links">
      <a href="#about"><li>About</li></a>
      <a href="#projects"> <li>Projects</li></a>
      <a href="#contact"><li>Contact</li></a>
      
      </ul>
    </div>
  );
};

export default DesktopNav;
