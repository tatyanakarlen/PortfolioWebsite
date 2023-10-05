import React from 'react';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import DesktopNav from '../../components/DesktopNav/DesktopNav'
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills.jsx';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import MobileNav from '../../components/MobileNav/MobileNav';
import About from '../../components/About/About';
import './BioPortfolioPage.css';

function BioPortfolioPage(props) {
  console.log(props.projects);

  return (
    <div>
      {/* <MobileNav /> */}
      <DesktopNav />
      <div className="app-container">
      <Hero />
      <Skills />
      {/* <Experience /> */}
     
      <Projects projects={props.projects}/>

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
