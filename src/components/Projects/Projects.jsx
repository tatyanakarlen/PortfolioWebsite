import React from 'react';
import './Projects.css';
import PortfolioBox from '../PortfolioBox/PortfolioBox';

const Projects = ({ projects }) => {
  return (
    <div id="projects"className="section-container">
      <h2 className="section-heading">Projects</h2>
      {projects.map((m, index) => (
        <PortfolioBox
          key={index}
          title={m.title}
          headline={m.headline}
          images={m.images}
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
    </div>
  );
};

export default Projects;

