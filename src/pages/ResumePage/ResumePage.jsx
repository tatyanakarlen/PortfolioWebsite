import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill} from 'react-icons/bs'
import './ResumePage.css'

class ResumePage extends React.Component {
  render() {
    return (
        <div style={{ backgroundColor: 'rgba(241, 238, 238, 0.836)' }}>
      
        <TopNav />
        <div class="resume-container" style={{ backgroundColor: 'rgba(241, 238, 238, 0.836)' }}>
        <h1 id="resume-header">Resume</h1><br/>
        <h3 class="underlined">Contact Info:</h3>
        <p>tatyanakarlen@gmail.com</p>
        <p>416-662-6937</p>
        <BsLinkedin style={{ fontSize: '25px' }} />
        <a
              href="mailto:tatyanakarlen@gmail.com"
              target="_blank"
              aria-label="Mail"
            >
              <BsFillEnvelopeFill style={{ fontSize: '25px' }}/>
            </a>
        <br/>
        <br/>
        <h3 class="underlined">Profile</h3>
        <p>
          I am a developer with a passion for all things visual and dynamic. I
          successfully completed GA’s Software Engineering Immersive program
          where I learned front and back-end development and the industry’s most
          in-demand technologies. My background in fashion marketing gives me a
          creative edge. In my cohort I was known to be extremely hard working,
          humble and approachable.{' '}
        </p>
        <br />
        <h3 class="underlined">Skills</h3>
        <br />
        <ul id='skills-list'>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Bootstrap, Materialize CSS</li>
          <li>Javascript</li>
          <li>MongoDB</li>
          <li>NodeJS, Express</li>
          <li>PostgresSQL</li>
          <li>Python</li>
          <li>Django</li>
          <li>Git version control</li>
        </ul>
        <br />
        <h3 class="underlined">Projects</h3>
        <p>See portfolio page</p>
        <br />
        <h3 class="underlined">Education</h3>
        <p>Software Engineering Immersive</p>
        <p>General Assembly, 480+ hours</p>
        <p>Toronto | Mar 2022-Aug 2022</p>
        <br />
        <p>Level 10 Piano Performance (current ARCT candidate)</p>
        <p>Royal Conservatory of Music</p>
        <p>Toronto | 2010-2022</p>
        <br />
        <p>Diploma in Fashion Arts</p>
        <p>Humber College</p>
        <p>Toronto | 2004-2006</p><br/>
        <h3 class="underlined">Work Experience</h3><br/>
        <p class="job">Piano Teacher</p>
<p class="job-italic">Alla Breve Academy of Music/Private Practice, <span class="job-place-date">Toronto/Vaughan, 2016 - 2022</span></p><br/>
<p>Piano performance and music theory instructor. One-on-one music teacher to kids as young as 4, teens and adults. Other duties included schedule coordination, examinations and administration.</p>
<br/>
<p class="job">Real Estate Sales Representative</p>
<p class="job-italic">Sutton Group Realty Systems/Bosley Real Estate, <span class="job-place-date"> Toronto, 2010 - 2021</span></p><br/>
<p>Worked as a downtown Toronto condo specialist helping clients buy, sell lease, and home stage condominiums, as well as managed tenanted properties for investors. Additionally was engaged in home staging and reno/home prep. </p>
<br/>
<p class="job">Fashion Showroom Assistant</p>
<p class="job-italic">OK-47, <span class="job-place-date">Toronto, 2005 - 2006</span></p> <br/> 

<p>Worked as an intern/assistant to owner-designer of Toronto fashion label OK-47 in their Garment district showroom. Duties included inventory, showroom maintenance, working with samples, managing e-commerce orders and admin duties.</p>
<br/>
<p class="job">Fashion Associate/Visual Merchandising</p>
<p class="job-italic">Lounge, <span class="job-place-date"> Toronto |  2004 - 2005 </span></p><br/>

<p>Retail sales, showroom maintenance and store merchandising in streetwear clothing boutique Lounge (re-branded as Community 54) in the heart of the Garment district in Toronto.</p><br/>
<h3 class="underlined">References</h3><br/>
<p>Available upon request</p>



       
      </div>
      </div>
    );
  }
}

export default ResumePage;
