import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import './ResumePage.css';

class ResumePage extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <TopNav />
        <div
          class="resume-container"
          style={{ backgroundColor: '#FFFFFF' }}
          
        >
          <h1 id="resume-header">Resume</h1>
          <br />
          <h3 class="underlined">Contact Info:</h3>
          <p class="text">tatyanakarlen@gmail.com</p>
          <p class="text">416-662-6937</p>
          <div id="icon-container-resume">
            <a
              href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin class="icon" style={{ fontSize: '25px' }} />
            </a>

            <a
              href="mailto:tatyanakarlen@gmail.com"
              target="_blank"
              aria-label="Mail"
              rel="noopener noreferrer"
            >
              <BsFillEnvelopeFill
                id="envelope"
                class="icon"
                style={{ fontSize: '25px' }}
              />
            </a>
          </div>
          <br />
          <br />
          <h3 class="underlined">Profile</h3>
          <p class="text">
            I'm a full-stack developer with a passion for all things visual and dynamic. I
            successfully completed GA’s Software Engineering Immersive program
            where I learned front and back-end development and the industry’s
            most in-demand technologies. My background in fashion marketing
            gives me a creative edge. In my cohort I was known to be hard working, determined, social and approachable.{' '}
          </p>
          <br />
          <h3 class="underlined">Skills</h3>
          <ul id="skills-list">
            <li class="text">React</li>
            <li class="text">HTML/CSS</li>
            <li class="text">Bootstrap, Materialize CSS</li>
            <li class="text">Javascript</li>
            <li class="text">MongoDB</li>
            <li class="text">NodeJS, Express</li>
            <li class="text">PostgresSQL</li>
            <li class="text">Python</li>
            <li class="text">Django</li>
            <li class="text">Git version control</li>
          </ul>
          <br />
          <h3 class="underlined">Projects</h3>
          <p class="text">See <Link id="portfolio-link" 
          to="/portfolio">portfolio</Link> page</p>
          <br />
          <h3 class="underlined">Education</h3> <br />
          <p class="text level">Software Engineering Immersive</p>
          <p class="text school">General Assembly, 480+ hours</p>
          <p class="text">Toronto | Mar 2022-Aug 2022</p>
          <br />
          <p class="text level">
            Level 10 Piano Performance (current ARCT candidate)
          </p>
          <p class="text school">Royal Conservatory of Music</p>
          <p class="text">Toronto | 2010-2022</p>
          <br />
          <p class="text level">Diploma in Fashion Arts</p>
          <p class="text school">Humber College</p>
          <p class="text">Toronto | 2004-2006</p>
          <br />
          <h3 class="underlined">Work Experience</h3>
          <br />
          <p class="job text">Piano Teacher</p>
          <p class="job-italic text">
            Alla Breve Academy of Music/Private Practice,{' '}
            <span class="job-place-date">Toronto/Vaughan, 2016 - 2022</span>
          </p>
          <br />
          <p class="text">
            Piano performance and music theory instructor. One-on-one music
            teacher to kids as young as 4, teens and adults. Other duties
            included schedule coordination, examinations and administration.
          </p>
          <br />
          <p class="job text">Real Estate Sales Representative</p>
          <p class="job-italic text">
            Sutton Group Realty Systems/Bosley Real Estate,{' '}
            <span class="job-place-date"> Toronto, 2010 - 2021</span>
          </p>
          <br />
          <p class="text">
            Worked as a downtown Toronto condo specialist helping clients buy,
            sell lease, and home stage condominiums, as well as managed tenanted
            properties for investors. Additionally was engaged in home staging
            and reno/home prep.{' '}
          </p>
          <br />
          <p class="job text">Fashion Showroom Assistant</p>
          <p class="job-italic text">
            OK-47, <span class="job-place-date text">Toronto, 2005 - 2006</span>
          </p>{' '}
          <br />
          <p class="text">
            Worked as an intern/assistant to owner-designer of Toronto fashion
            label OK-47 in their Garment district showroom. Duties included
            inventory, showroom maintenance, working with samples, managing
            e-commerce orders and admin duties.
          </p>
          <br />
          <p class="job text">Fashion Associate/Visual Merchandising</p>
          <p class="job-italic text">
            Lounge,{' '}
            <span class="job-place-date text"> Toronto | 2004 - 2005 </span>
          </p>
          <br />
          <p class="text">
            Retail sales, showroom maintenance and store merchandising in
            streetwear clothing boutique Lounge (re-branded as Community 54) in
            the heart of the Garment district in Toronto.
          </p>
          <br />
          <h3 class="underlined">References</h3>
          <br />
          <p class="text">Available upon request</p>
          <br />
          <br />
          <footer id="footer" class="text">
            Copyright Tatyana Karlen 2022
          </footer>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default ResumePage;
