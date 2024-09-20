import React from 'react';
import Hero from '../../components/Hero/Hero';
import DesktopNav from '../../components/DesktopNav/DesktopNav';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills.jsx';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import { useMediaQuery } from 'react-responsive';
import MobileNav from '../../components/MobileNav/MobileNav';
import About from '../../components/About/About';
import './BioPortfolioPage.css';

function BioPortfolioPage(props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });

  return (
    <div>
      {isMobile ? <MobileNav /> : <DesktopNav />}

      <div className="app-container">
    
        <Hero />
        <Skills />

        <Projects projects={props.projects} />

       
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default BioPortfolioPage;
