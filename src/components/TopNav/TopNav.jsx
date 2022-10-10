import React from 'react';
import './TopNav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logo from '../../components/Images/Taty.png';

export default function TopNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const linkNavStateTrigger = isNavExpanded
    ? () => {
        setIsNavExpanded(!isNavExpanded);
      }
    : '';

  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });

  let aboutScrollTo = '';
  isMobile ? (aboutScrollTo = '#about-me') : (aboutScrollTo = '#about');

  const [isChecked, setIsChecked] = useState(false);

  const hamburgerColor = {
    backgroundColor: isNavExpanded ? '#f7f7f7' : '#333',
  };

  let hamburgerStyles = {
    transform: 'rotate(-45deg)',
    marginTop: '25px',
    backgroundColor: '#f7f7f7',
    opacity: '0',
    transform: 'rotate(45deg)',
    transform: 'rotate(45deg)',
    marginTop: '-7px:',
    top: '0',
    transform: 'scale(1)',
  };

  let topBunStyles = {
    transform: 'rotate(-45deg)',
    marginTop: '25px',
    backgroundColor: '#f7f7f7',
  };

  let meatStyles = {
    transform: 'rotate(45deg)',
    marginTop: '-7px',
  };

  let bottomBun = {
    opacity: "0", 
  transform: "rotate(45deg)"
  }

  let navStyles = {
    top: '0',
    transform: 'scale(1)',
  };

  if (isChecked) {
    hamburgerStyles = '';
    topBunStyles = '';
    meatStyles = '';
    navStyles = '';
    bottomBun = ''
  }

  return (
    <>
      <input checked={isChecked} id="toggle" type="checkbox"></input>

      <label
        for="toggle"
        class="hamburger"
        
       
        onClick={() => {
          
          setIsChecked(!isChecked);
        }}
      >
        <div
          class="top-bun"
        
        ></div>
        <div
          class="meat"
          
        ></div>
        <div
          class="bottom-bun"
        
        ></div>
      </label>

      <div class="nav">
        <div class="nav-wrapper">
          <nav>
            <a onClick={() => setIsChecked(!isChecked)} href="#">
              HOME
            </a>
            <br />
            <a href="#skills" onClick={() => setIsChecked(!isChecked)}>
              SKILLS
            </a>
            <br />
            <a href="#portfolio" onClick={() => setIsChecked(!isChecked)}>
              PORTFOLIO
            </a>
            <br />
          </nav>
        </div>
      </div>
    </>
    // <div className="Nav">
    //   <div id="name-link">
    //     <a onClick={linkNavStateTrigger} className="nav-left-link" href={aboutScrollTo}>
    //       <img src={logo} style={{width: '55px', marginTop: '0.5rem'}}/>
    //     </a>

    //   </div>

    //   <button
    //     className="hamburger"
    //     onClick={() => {
    //       setIsNavExpanded(!isNavExpanded);
    //     }}
    //   >

    //     <svg
    //       style={{ backgroundColor: '#f7f7f7', color: '#2b2929' }}
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="white"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //       />
    //     </svg>
    //   </button>

    //   <div
    //     className={
    //       isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
    //     }
    //   >
    //     <ul id="ul" style={{ backgroundColor: '#f7f7f7' }}>

    //       <li>
    //         <a href="#skills" onClick={linkNavStateTrigger} className="link">
    //           SKILLS
    //         </a>
    //       </li>

    //       how to condionally style:   style={{color: currentLink ? '#c93082' : '#2e313a'}}

    //       <li>
    //         <a
    //           onClick={() => {
    //             setIsNavExpanded(!isNavExpanded);
    //           }}
    //           href="#portfolio"
    //           className="link"
    //         >
    //           PORTFOLIO
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
