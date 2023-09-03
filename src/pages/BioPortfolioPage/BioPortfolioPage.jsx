import React from 'react';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About.jsx';
import Contact from '../../components/Contact/Contact';
import MobileNav from '../../components/MobileNav/MobileNav';
import Skills from '../../components/Skills/Skills';
import './BioPortfolioPage.css';

function BioPortfolioPage(props) {
  return (
    <div className="container">
      <MobileNav />
      <Hero />
      <Skills />





      {/* <div className="inner-wrapper">
        <Hero />
        <About />
        <div className="projects-headline">
          <h1 id="projects">tap project image to view gallery...</h1>
        </div>
        {props.projects.map((m, index) => (
          <PortfolioBox
            key={index}
            title={m.title}
            headline={m.headline}
            images={m.images}
            tech={m.tech}
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
      </div> */}
    </div>
  );
}

export default BioPortfolioPage;
