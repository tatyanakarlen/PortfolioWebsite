import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Skills from '../../components/Skills/Skills.jsx'
import { useMediaQuery } from 'react-responsive';
import MobileAbout from '../../components/MobileAbout/MobileAbout.jsx';

import { RiCopyrightFill } from 'react-icons/ri';

function BioPortfolioPage(props) {

  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div>
      <TopNav />
      <Hero />
      { isSmallMobile && <MobileAbout />}
      <Skills />
      <PortfolioBox projects={props.projects} />
      <br />
      <br />
      <br />
      <br />
      <footer id="footer" class="text" style={{fontSize: '1.6rem', textAlign: 'center', marginTop: '2rem'}}>
      Copyright Tatyana Karlen 2022
      </footer>
      <br />
      <br />
    </div>
  );
}

export default BioPortfolioPage;
