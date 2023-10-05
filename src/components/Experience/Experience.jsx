import React from 'react';
import './Experience.css';
import { IoCodeWorkingSharp } from 'react-icons/io5';

const Experience = () => {
  return (
    <div className="experience section-container">
      <h1 className="section-heading">Experience</h1>
      <div>
        <h2>
        Nuclear Media <span>Aug 2023 - Present</span>
        </h2>
        <h3>Front-end developer</h3>
      </div>
      <div>
        <h2>
        905devshop <span>Oct 2022 - Mar 2023</span>
        </h2>
        <h3>Full-stack developer intern</h3>
      </div>
      <div>
        <h2>
          Sutton Group <span>Mar 2020 - Dec 2022</span>
        </h2>
        <h3>Content/CMS developer</h3>
      </div>
    </div>
  );
};

export default Experience;
