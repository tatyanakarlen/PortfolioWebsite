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

        {/* {props.projects.map((m) => (
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
      ))} */}
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default BioPortfolioPage;
