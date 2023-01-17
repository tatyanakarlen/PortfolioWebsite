import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <div class="contact" id="contact">
      <h1 class="section-heading">Contact</h1>
      <p>Looking to collborate or hire me? I'd love to hear from you!</p>
      <div class="email">
        <h3>E-mail me</h3>
        <a
          class="social-links"
          href="mailto:tatyanakarlen@gmail.com"
          target="_blank"
          aria-label="Mail"
          rel="noopener noreferrer"
        >
          <MdOutlineMailOutline />
        </a>
      </div>
    </div>
  );
};

export default Contact;
