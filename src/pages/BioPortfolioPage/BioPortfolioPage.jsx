import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Skills from '../../components/Skills/Skills.jsx'
import { useMediaQuery } from 'react-responsive';
import About from '../../components/About/About.jsx';
import './BioPortfolioPage.css'

import { RiCopyrightFill } from 'react-icons/ri';

function BioPortfolioPage(props) {

  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div class="main-container">
      {/* <TopNav /> */}
      <div class="inner-wrapper">
      <Hero />
      <About />
      {/* { isSmallMobile && <MobileAbout />} */}
      <Skills />
      {/* <PortfolioBox projects={props.projects} /> */}
      </div>
    </div>
  );
}

export default BioPortfolioPage;
