import React from 'react';
import './MobileAbout.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const MobileAbout = () => {
  return (
    <div class="mobile-about-me">
      <h1>&lt;ABOUT ME&gt;</h1>
      <p>
        My name is <span class="bold-span">Tatyana</span> and I'm a <span class="bold-span">web developer</span> with a background in fashion and classical music. When I'm not coding, I'm playing or teaching piano. My skills and past
        projects can be found below.
        <br/><br/><span>Looking to collaborate or hire me? I'd love
        to hear from you!</span>
      </p>
      <a 
                  id="mobile-contact"
                  class="contact-me-link"
                  href="mailto:tatyanakarlen@gmail.com"
                  target="_blank"
                  aria-label="Mail"
                  rel="noopener noreferrer"
                >
                  Contact&nbsp;
                  <BsFillEnvelopeFill style={{ fontSize: '2rem' }} />
                </a>
    </div>
  );
};

export default MobileAbout;
