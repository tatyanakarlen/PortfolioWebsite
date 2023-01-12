import React from 'react';
import './TopNav.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import * as ReactDOM from 'react-dom';
import { MdClosedCaptionDisabled } from 'react-icons/md';

const TopNav = () => {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [isHamburgerClicked, setisHamburgerClicked] = useState(false);

  const ref = useRef([]);
  const pushRef = (el) => ref.current.push(el);

  // const ref = useRef();
  // const li = ref.current
  // li.className = "fade-out"

  // useEffect(() => {
  //   if(ref.current) console.log(ref.current)
  // }, [ref])

  // console.log(ref.current)

  // for (let i = 0; i < ref.current.length; i++) {
  //   if (ref.current[i] !== null) {
  //   ref.current[i].className = 'fade-over'
  //   }
  //   console.log(ref.current[i])
  // }

  ///// code to change class name

  const toggleNav = () => {
    for (let i = 0; i < ref.current.length; ++i) {
      if (ref.current[i] !== null) {
        fadeIn(ref.current[i], i * 60);
        // console.log(ref.current[i])
      }
    }
  };

  // 	for (let i = 0; i < ref.current.length; ++i) {
  //     if (ref.current[i] !== null) {
  //     fadeIn(ref.current[i], i * 60)
  //   }
  // }

  // console.log(ref.current)

  function fadeIn(item, delay) {
    setTimeout(() => {
      item.className = 'fade-in';
    }, delay);
  }

  return (
    <div className="nav">
      {/* onChange={(e) => {
                  const isFieldValid = e.target.value.length
                  if (isFieldValid < 3) {
                  setErrorMsg(`${e.target.name} is not valid`)
                  } else {
                    setErrorMsg('')
                  }
                  setFormValidMsg(!formValidMsg)
                  setArticle({
                    ...article,
                    tags: e.target.value,
                  })
                  setArticleFormValidation({
                    ...articleFormValidation, 
                    tags: e.target.value,
                 })
                 checkValid()
                }
              } */}

      <div
        onClick={() => {
          setisHamburgerClicked(!isHamburgerClicked);
          toggleNav();
        }}
        className="hamburger"
      >
        <span
          className="hamburger-line-straight"
          onClick={() => setisHamburgerClicked(!isHamburgerClicked)}
          style={{
            transform: isHamburgerClicked
              ? 'translate3d(0px, 6px, 0px) rotate(45deg)'
              : 'translate3d(0px, 0px, 0px) rotate(0deg)',
          }}
        ></span>
        <span
          onClick={() => setisHamburgerClicked(!isHamburgerClicked)}
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
      <ul className="nav-menu">
        <li ref={pushRef} className="fade-item">
          HOME
        </li>
        <li ref={pushRef} className="fade-item">
          ABOUT
        </li>
        <li ref={pushRef} className="fade-item">
          SKILLS
        </li>
        <li ref={pushRef} className="fade-item">
          PROJECTS
        </li>
        <li ref={pushRef} className="fade-item">
          CONTACT
        </li>
      </ul>
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
