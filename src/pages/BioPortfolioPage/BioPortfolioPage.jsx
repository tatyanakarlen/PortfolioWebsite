import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Skills from '../../components/Skills/Skills.jsx';
import Footer from '../../components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import About from '../../components/About/About.jsx';
import Contact from '../../components/Contact/Contact';
import MobileNav from '../../components/MobileNav/MobileNav';
import './BioPortfolioPage.css'; 
import { AiOutlineArrowDown } from 'react-icons/ai'
import pointDown from '../../components/Images/pointing-down-finger-svgrepo-com.svg'

import { RiCopyrightFill } from 'react-icons/ri';

function BioPortfolioPage(props) {
  console.log(props.projects);

  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div class="main-container">
      {/* <TopNav /> */}
      <MobileNav />
      <div class="inner-wrapper">
        <Hero />
        <h1 id="about" class="section-heading">
          About
        </h1>
        <About />
        <div class="projects-headline">
        <h1 id="projects">
          {/* <div><i class="bi bi-hand-index-thumb"></i></div> */}
          <img src={pointDown} alt="" />
          tap project image to view gallery...
        </h1>
        </div>
        {props.projects.map((m) => (
          <PortfolioBox
            title={m.title}
            headline={m.headline}
            images={m.images}
            title={m.title}
            tech={m.tech}
            headline={m.headline}
            bullet1={m.bullet1}
            bullet2={m.bullet2}
            bullet3={m.bullet3}
            body={m.body}
            deployedAppLink={m.deployedAppLink}
            gitHubLink={m.gitHubLink}
          />
        ))}
         {/* <Skills /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default BioPortfolioPage;
