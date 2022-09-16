import React from 'react';
import './TopNav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function TopNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  

  return (
    <div className="Nav">
      <div id='name-link'>
      <a
        className="nav-left-link"
        href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/"
      >
        Tatyana Karlen - Full Stack Developer
      </a>
      </div>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* {
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                  } */}
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul id="ul" style={{backgroundColor: '#f7f7f7'}}>
          <li id="PORTFOLIO-link">
            <Link
              className="link"
              to="/portfolio"
            >
              PORTFOLIO
            </Link>
          </li>
          {/* how to condionally style:   style={{color: currentLink ? '#c93082' : '#2e313a'}} */}

          <li>
            <Link
              className="link"
              to="/resume"
            >
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
