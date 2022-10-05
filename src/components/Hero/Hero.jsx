import React from 'react';
import './Hero.css';
import bioPic from '../Images/1660857374155.jpeg';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineDown} from 'react-icons/ai';



import resume from '../assets/TATYANA KARLEN-RESUME.pdf';
import isNavExpanded from '../TopNav/TopNav.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 990px)' });

  // id={
  //   isMobile ? "about" : "about-me"
  // }

  return (
    <>
      <div class="outerHeroDiv" id="about">
        <div class="innerHeroDiv">
          <header class="header">
            <div class="left-img-title-container">
              <img src={bioPic}></img>
              <h1>&lt;Tatyana Karlen&gt;</h1>
              <h3>Full-Stack Developer</h3>
             
              { isMobile ?  <><div class="btn-icons-container" id="mobile-icon-container">
                <a class="resume-link"
                  target="_blank"
                  href="/static/media/TATYANA KARLEN-RESUME.826863f4950af7657361.pdf"
                >
                  Resume  
                </a>
                <ul class="right-side-icons">
                  <li>
                    <BsLinkedin class="icon" />
                  </li>
                  <li>
                    <BsGithub class="icon" />
                  </li>
                  <li>
                    <BsInstagram class="icon" />
                  </li>
                </ul>
              </div>
              <div class="mobile-arrow-down-container"><a href="#mobile-about"><AiOutlineDown id="arrow-down-icon"/></a></div>
              </>
              
              
              : <a class="contact-me-link" href="#">Contact Me</a>}
            </div>
            
            <div class="right-about-me-container">
             {/* { isMobile && <h1 id="mobile-about" class="mobile-H1">&lt; &frasl; About Me&gt;</h1>} */}
              <p id="mobile-about">
                Hi, thanks for stopping by! I'm a full-stack developer with a
                passion for frontend development. I have a background in classical music and
                fashion arts. When I'm not coding, I'm playing or teaching
                piano. I have a well-known addiction to terrible b-movies.
                <br />
                <br />
                Looking to collaborate or hire me? I'd love to hear from you!
              </p>
              { isMobile &&  <button class="mobile-contact-btn">Contact Me</button>}
              { !isMobile && 
              <div class="btn-icons-container">
                <a
                  target="_blank"
                  href="/static/media/TATYANA KARLEN-RESUME.826863f4950af7657361.pdf"
                >
                  Resume
                </a>
                <ul class="right-side-icons">
                  <li>
                    <BsLinkedin class="icon" />
                  </li>
                  <li>
                    <BsGithub class="icon" />
                  </li>
                  <li>
                    <BsInstagram class="icon" />
                  </li>
                </ul>
              </div>}
            </div>
          </header>
        </div>
      </div>
      {/* {isMobile ? (
        <div id="about-me" class="mobile-header-container">
          <div class="mobile-header">
          <img src={bioPic} />
          <h1>&lt;Tatyana Karlen&gt;</h1>
              <h3>I'm a full stack developer with a passion for frontend development. Check out my skills and portfolio below.
                Looking to collaborate or hire me? I'd love to hear from you!
              </h3>
              <div class="btn-icons-container">
                <a
                  target="_blank"
                  href="/static/media/TATYANA KARLEN-RESUME.826863f4950af7657361.pdf"
                >
                  Resume
                </a>
                <ul class="right-side-icons">
                  <li>
                    <BsLinkedin class="icon" />
                  </li>
                  <li>
                    <BsGithub class="icon" />
                  </li>
                  <li>
                    <BsInstagram class="icon" />
                  </li>
                </ul>
              </div>
          </div>
        </div>
      ) : (
        <div class="header" id="about">
          <div class="header-wrapper">
            <div id="left-div" class="inner-div">
              <img src={bioPic} />
              <h1>&lt;Tatyana Karlen&gt;</h1>
              <h3>Full-Stack Developer</h3>
              <button>Contact Me</button>
            </div>

            <div id="right-div" class="inner-div">
              <h1>&lt; &frasl; About Me&gt;</h1>
              <p>
                Hi, thanks for stopping by! I'm a full-stack developer with a
                passion for UI. I'm experienced in front and back-end
                development and have a background in classical music (piano) and
                fashion arts. When I'm not coding, I'm playing or teaching
                piano. I have an addiction to terrible b-movies.
                <br />
                <br />
                Looking to collaborate or hire me? I'd love to hear from you!
              </p>

              <div class="btn-icons-container">
                <a
                  target="_blank"
                  href="/static/media/TATYANA KARLEN-RESUME.826863f4950af7657361.pdf"
                >
                  Resume
                </a>
                <ul class="right-side-icons">
                  <li>
                    <BsLinkedin class="icon" />
                  </li>
                  <li>
                    <BsGithub class="icon" />
                  </li>
                  <li>
                    <BsInstagram class="icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>

    // <div class="hero-container">
    //   <div id="header-container">
    //     <h1 class="header">Tatyana Karlen</h1>

    //     <h3 class="sub-header">full-stack / front-end developer</h3>
    //   </div>
    //   <br />
    //   <article class="article">
    //     I'm a{' '}
    //     <span style={{ color: '#cd2026', fontSize: '1.5rem' }}>full-stack</span>{' '}
    //     developer with a passion for UI. I'm experienced in front and back-end
    //     development and have a background in classical music (piano) and fashion
    //     marketing.
    //   </article>

    //   <br />

    //   <article class="article">
    //     Below is a list of my developer skills and portfolio projects. Looking
    //     to collaborate or hire me? I'd love to hear from you!
    //   </article>

    //   <br />
    //   <br />
    //   <div id="skills-icon-container">
    //     <img
    //       src="https://img.icons8.com/color/70/000000/javascript--v1.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/plasticine/70/000000/react.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/color/70/000000/nodejs.png"
    //       alt="icon"
    //     />
    //     <img src="https://img.icons8.com/color/70/000000/css3.png" alt="icon" />
    //     <img
    //       src="https://img.icons8.com/color/70/000000/html-5--v1.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/color/70/000000/mongodb.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/70/000000/external-sql-web-hosting-flaticons-lineal-color-flat-icons.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/fluency/70/000000/python.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/windows/70/000000/django.png"
    //       alt="icon"
    //     />
    //   </div>
    //   <br />
    //   <br />
    // </div>
  );
};

export default Hero;
