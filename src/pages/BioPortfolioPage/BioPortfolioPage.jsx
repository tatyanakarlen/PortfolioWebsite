import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';

function BioPortfolioPage(props) {
  return (
    // <div style={{backgroundColor: '#ffffff'}}>
    <div>
      <TopNav />
      <Hero />
      <PortfolioBox projects={props.projects} />
      <br />
      <br />
      <footer id="footer" class="text">
        Copyright Tatyana Karlen 2022
      </footer>
      <br />
      <br />
    </div>
  );
}

export default BioPortfolioPage;
