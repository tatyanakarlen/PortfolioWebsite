import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './Contact.css';
const Contact = () => {
  return (
    <div className="section-container contact" id="contact">
      {' '}
      <div className="connect">
        <h2 className="section-heading">Lets Connect</h2>{' '}
        <p>
          I'm always interested in learning about new opportunities and meeting
          new people. Looking to connect or hire me? I'd love to hear from you!
        </p>{' '}
        <div className="email">
          <a
            className="social-links"
            href="mailto:tatyanakarlen@gmail.com"
            target="_blank"
            aria-label="Mail"
            rel="noopener noreferrer"
          >
            {' '}
            <h2>E-mail me</h2>{' '}
          </a>{' '}
        </div>{' '}
        <div className="social">
          <a
            href="https://www.linkedin.com/in/tatyana-karlen-b1aa9941/?originalSubdomain=ca"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/tatyanakarlen" target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>{' '}
    </div>
  );
};
export default Contact;