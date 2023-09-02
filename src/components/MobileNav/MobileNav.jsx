import './MobileNav.css';
import React, { useState } from 'react';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  //   style props

  let expandedStyleTopBun = {};

  let expandedStyleBottomBun = {};

  let expandedStyleMeat = {};

  //   possible hamburger too
  let expandedNav = {};

  if (isNavExpanded) {
    expandedStyleTopBun = {
      transform: 'rotate(-45deg)',
      marginTop: '25px',
    };
    expandedStyleBottomBun = {
      opacity: '0',
      transform: 'rotate(45deg)',
    };
    expandedStyleMeat = {
      transform: 'rotate(45deg)',
      marginTop: '-7px',
    };
    expandedNav = {
      top: '0',
      transform: 'scale(1)',
    };
  }

  return (
    <>
      <div
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <div style={expandedStyleTopBun} className="top-bun"></div>
        <div style={expandedStyleMeat} className="meat"></div>
      </div>
      <div style={expandedNav} className="nav">
        <div className="nav-wrapper">
          <nav>
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
              HOME
            </a>
            <br />
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#about">
              ABOUT
            </a>
            <br />
            <a
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              href="#projects"
            >
              {' '}
              PROJECTS
            </a>
            <br />
            <br />
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#contact">
              {' '}
              CONTACT
            </a>
            <br />
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
