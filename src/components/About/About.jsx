import React from 'react';
import './About.css';
import { useMediaQuery } from 'react-responsive';
import { HiOutlineDownload } from 'react-icons/hi';
import resume from '../assets/TATYANA_KARLEN_RESUME.pdf';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const resumeLink =
    '/static/media/TATYANA_KARLEN_RESUME.5ffedecd3f6f0c6ab413.pdf';
  const certificateLink = '/static/media/certificate.1fa87be4353136a2925e.png';

  return (
    <div id="about" class="about-me">
      <div class="about-me-container">
        <h3 class="section-heading">About</h3>
      </div>
      <p class="paragraph">
        Welcome and thanks for stopping by! I'm a full-stack developer with a
        passion for UI/UX and front-end development. Based in Toronto, Canada, I
        have a diverse creative background in fashion, piano performance and
        music pedagogy.
        <br />
        <br />
        Always curious about the web, I graduated from General Assembly's{' '}
        <span>Software Engineering Immersive</span> program where I learned
        full-stack development in a fast-paced environment. I am currently
        interning at a startup called 905devshop as a full-stack React web
        developer.
        <br />
        <br />I have experience with React, Javascript, HTML, CSS, Sass,
        Next.js, Python, Django, Node.js, MongoDB, PostgreSQL and more. My past
        projects can be found below.
      </p>
      <br />
      <div className="resume-link-container">
        <h3>Resume</h3>
        <a target="_blank" href={resumeLink}>
        <HiOutlineDownload />
        </a>


      </div>
      {/* <div class="resume-container">
        <a class="resume-link" target="_blank" href={resumeLink}>
          <HiOutlineDownload />
          resume
        </a>
      </div> */}
    </div>
  );
};

export default About;
