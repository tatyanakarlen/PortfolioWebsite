import React from 'react';
import './MobileAbout.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const MobileAbout = () => {
  return (
    <div class="mobile-about-me">
      <h1>&lt;ABOUT ME&gt;</h1>
      <p>
        My name is Tatyana and I'm a creative full-stack{' '}
        <span class="bold-span">web developer</span>. I graduated from General Assembly's{' '}
        <span class="bold-span">Software Engineering Immersive</span> program
        and I have a background in Fashion Arts and piano performance. My skills and
        past projects can be found below.
        <br />
        <br />
        <span>
          Looking to collaborate or hire me? I'd love to hear from you!
        </span>
      </p>
      <a
        id="mobile-contact"
        class="contact-me-link"
        href="mailto:tatyanakarlen@gmail.com"
        target="_blank"
        aria-label="Mail"
        rel="noopener noreferrer"
      >
        Contact Me
      </a>
    </div>
  );
};

export default MobileAbout;
