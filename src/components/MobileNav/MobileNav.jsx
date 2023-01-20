import './MobileNav.css';
import React, { useState } from 'react';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  //   style props

  let expandedStyleTopBun = {}

  let expandedStyleBottomBun = {}

  let expandedStyleMeat = {}

  //   possible hamburger too
  let expandedNav = {}



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
        marginTop: '-7px',
        backgroundColor: '#fff',
      };
      expandedNav = {
        top: '0',
        transform: 'scale(1)',
      };
    

    
  }

  return (
    <>
      <div className="hamburger"
      onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <div style={expandedStyleTopBun} class="top-bun"></div>
        <div style={expandedStyleMeat } class="meat"></div>
        {/* <div style={expandedStyleBottomBun} class="bottom-bun"></div> */}
      </div>
      <div style={expandedNav}className="nav">
        <div className="nav-wrapper">
          <nav>
            <a 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            href="#">HOME</a>
            <br />
            <a 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            href="#about">ABOUT</a>
            <br />
            <a 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            href="#skills">SKILLS</a>
            <br />
            <br />
            <a 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            href="#projects"> PROJECTS</a>
            <br />
            <br />
            <a 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            href="#contact"> CONTACT</a>
            <br />
          </nav>
          
        </div>
      </div>
    </>
  );
};

export default MobileNav;

//   const [isNavExpanded, setIsNavExpanded] = useState(false);
//   const [isLinkClicked, setIsLinkClicked] = useState(false);

//   const linkNavStateTrigger = isNavExpanded
//     ? () => {
//         setIsNavExpanded(!isNavExpanded);
//       }
//     : '';

//   const isMobile = useMediaQuery({ query: '(max-width: 990px)' });

//   let aboutScrollTo = '';
//   isMobile ? (aboutScrollTo = '#about-me') : (aboutScrollTo = '#about');

//   const [isChecked, setIsChecked] = useState(false);

//   const hamburgerColor = {
//     backgroundColor: isNavExpanded ? '#f7f7f7' : '#333',
//   };

//   let hamburgerStyles = {
//     transform: 'rotate(-45deg)',
//     marginTop: '25px',
//     backgroundColor: '#f7f7f7',
//     opacity: '0',
//     transform: 'rotate(45deg)',
//     transform: 'rotate(45deg)',
//     marginTop: '-7px:',
//     top: '0',
//     transform: 'scale(1)',
//   };

//   let topBunStyles = {
//     transform: 'rotate(-45deg)',
//     marginTop: '25px',
//     backgroundColor: '#f7f7f7',
//   };

//   let meatStyles = {
//     transform: 'rotate(45deg)',
//     marginTop: '-7px',
//   };

//   let bottomBun = {
//     opacity: '0',
//     transform: 'rotate(45deg)',
//   };

//   let navStyles = {
//     top: '0',
//     transform: 'scale(1)',
//   };

//   if (isChecked) {
//     hamburgerStyles = '';
//     topBunStyles = '';
//     meatStyles = '';
//     navStyles = '';
//     bottomBun = '';
//   }

//   return (
//     <>
//       <input checked={isChecked} id="toggle" type="checkbox"></input>

//       <label
//         for="toggle"
//         class="hamburger"
//         onClick={() => {
//           setIsChecked(!isChecked);
//         }}
//       >
//         <div class="top-bun"></div>
//         <div class="meat"></div>
//         <div class="bottom-bun"></div>
//       </label>

//       <div class="nav">
//         <div class="nav-wrapper">
//           <nav>
//             <a onClick={() => setIsChecked(!isChecked)} href="#">
//               HOME
//             </a>
//             <br />
//             <a href="#skills" onClick={() => setIsChecked(!isChecked)}>
//               SKILLS
//             </a>
//             <br />
//             <a href="#portfolio" onClick={() => setIsChecked(!isChecked)}>
//               PORTFOLIO
//             </a>
//             <br />
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }
