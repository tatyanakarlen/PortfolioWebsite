import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="section-heading">Contact</h1>
      <p>Looking to collaborate or hire me? I'd love to hear from you!</p>
      <div className="email">
        <h3>E-mail me</h3>
        <a
          className="social-links"
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
