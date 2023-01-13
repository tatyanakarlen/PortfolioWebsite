import './TopNav.css';
import { useState, useEffect } from 'react';

const navMenuItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

const TopNav = () => {
  const [isHamburgerClicked, setisHamburgerClicked] = useState(false);
  const [animation, setAnimation] = useState("nav-item-in")
  const [hasUserClicked, setHasUserClicked] = useState(false)


  const toggleNav = () => {
    setisHamburgerClicked(!isHamburgerClicked);
    setHasUserClicked(true)
  };

  useEffect(() => {
    if (!hasUserClicked) {
      return
    }
    if (isHamburgerClicked) {
      setAnimation("nav-item-in fade-in")
    } else {
      setAnimation("nav-item-out fade-out")
    }
  }, [isHamburgerClicked, hasUserClicked]) 



  return (
    <div className="nav">
      <div onClick={toggleNav} className="hamburger">
        <span
          className="hamburger-line-straight"
          style={{
            transform: isHamburgerClicked
              ? 'translate3d(0px, 6px, 0px) rotate(45deg)'
              : 'translate3d(0px, 0px, 0px) rotate(0deg)',
          }}
        ></span>
        <span
          id="hamburger-line-1"
          className="hamburger-line-straight"
          style={{
            transform: isHamburgerClicked
              ? 'translate3d(0px, 6px, 0px) rotate(-45deg)'
              : 'translate3d(0px, 0px, 0px) rotate(0deg)',
            color: isHamburgerClicked && '#fff',
            marginTop: isHamburgerClicked ? '-1.6px' : '1.2rem',
          }}
        ></span>
      </div>
      <div className="nav-menu-container">
      <ul className="nav-menu">
        {navMenuItems.map((element, i) => (
          <li 
          style={{ animationDelay: `${i * 60}ms`}}
          className={animation} key={i}>{element}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TopNav;

// export default function TopNav() {
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
