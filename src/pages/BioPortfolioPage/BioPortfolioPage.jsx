import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Skills from '../../components/Skills/Skills.jsx';
import Footer from '../../components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import About from '../../components/About/About.jsx';
import './BioPortfolioPage.css';

import { RiCopyrightFill } from 'react-icons/ri';

function BioPortfolioPage(props) {
  console.log(props.projects);

  const isSmallMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div class="main-container">
      <TopNav />
      <div class="inner-wrapper">
        <Hero />
        <h1 style={{ marginTop: '10rem' }} id="about" class="section-heading">
          About
        </h1>
        <About />
        <Skills />
        <h1
          style={{ marginTop: '10rem', marginBottom: '-5rem' }}
          class="section-heading"
          id="projects"
        >
          Projects
        </h1>
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
        <Footer />
      </div>
    </div>
  );
}

export default BioPortfolioPage;
