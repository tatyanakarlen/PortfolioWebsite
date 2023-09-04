import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <div className="section-container contact" id="contact">
      {/* <h2 className="h2-heading">Contact</h2> */}
      <p>Looking to collaborate or hire me? I'd love to hear from you!</p>
      <div className="email">
        <h2 className="h2-heading">E-mail me</h2>
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
