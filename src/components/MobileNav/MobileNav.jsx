import './MobileNav.css';
import React, { useState } from 'react';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let expandedStyleTopBun = {};

  let expandedStyleBottomBun = {};

  let expandedStyleMeat = {};

  //   possible hamburger too
  let expandedNav = {};

  if (isNavExpanded) {
    expandedStyleTopBun = {
      transform: 'rotate(-45deg)',
      marginTop: '25px',
      backgroundColor: '#fff',
    };
    expandedStyleBottomBun = {
      opacity: '0',
      transform: 'rotate(45deg)',
    };
    expandedStyleMeat = {
      transform: 'rotate(45deg)',
      marginTop: '-6px',
      backgroundColor: '#fff',
    };
    expandedNav = {
      top: '0',
      transform: 'scale(1)',
    };
  }

  return (
    <div className="nav-container">
      <div
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <div style={expandedStyleTopBun} class="top-bun"></div>
        <div style={expandedStyleMeat} class="meat"></div>
      </div>
      <div style={expandedNav} className="nav">
        <div className="nav-wrapper">
          <nav>
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
              Home
            </a>
            <br />
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#about">
              About
            </a>
            <br />
            <a
              onClick={() => setIsNavExpanded(!isNavExpanded)}
              href="#projects"
            >
              {' '}
              Projects
            </a>
            <br />
            <br />
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#contact">
              {' '}
              Contact
            </a>
            <br />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
