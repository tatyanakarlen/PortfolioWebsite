import React from 'react';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Footer from '../../components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import About from '../../components/About/About.jsx';
import Contact from '../../components/Contact/Contact';
import MobileNav from '../../components/MobileNav/MobileNav';
import './BioPortfolioPage.css';
import pointDown from '../../components/Images/pointing-down-finger-svgrepo-com.svg';

function BioPortfolioPage(props) {
  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div className="main-container">
      <MobileNav />
      <div className="inner-wrapper">
        <Hero />
        <About />
        <div className="projects-headline">
          <h1 id="projects">
            <img src={pointDown} alt="" />
            tap project image to view gallery...
          </h1>
        </div>
        {props.projects.map((m, index) => (
          <PortfolioBox
            key={index}
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
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default BioPortfolioPage;
