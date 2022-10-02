import React from 'react';
import './Hero.css';
import bioPic from '../Images/1660857374155.jpeg';

const Hero = () => {
  return (
    <div class="header">
      <div id="left-div" class="inner-div">
        <img src={bioPic} />
        <h1>&lt;Tatyana Karlen&gt;</h1>
        <h3>Full-Stack Developer</h3>
        <button>Contact Me</button>
      </div>

      <div id="right-div" class="inner-div">
        <h1>&lt; &frasl; About Me&gt;</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          voluptatibus quos nemo vel pariatur obcaecati perferendis quia saepe
          maxime eaque praesentium, laborum, dignissimos nostrum vero repellat
          quibusdam iusto, porro aspernatur! Velit iure, sint tempora vero
          aliquam consectetur nemo voluptas accusantium veritatis quam. Voluptas
          necessitatibus, aperiam inventore nesciunt quasi est quisquam?
        </p>
        <div class="btn-icons-container">
          <button>Contact Me</button>
          <ul class="right-side-icons">
            <li>
              <i class="fa fa-bars"></i>
            </li>
            <li>
              <i class="fa fa-bars"></i>
            </li>
            <li>
              <i class="fa fa-bars"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div class="hero-container">
    //   <div id="header-container">
    //     <h1 class="header">Tatyana Karlen</h1>

    //     <h3 class="sub-header">full-stack / front-end developer</h3>
    //   </div>
    //   <br />
    //   <article class="article">
    //     I'm a{' '}
    //     <span style={{ color: '#cd2026', fontSize: '1.5rem' }}>full-stack</span>{' '}
    //     developer with a passion for UI. I'm experienced in front and back-end
    //     development and have a background in classical music (piano) and fashion
    //     marketing.
    //   </article>

    //   <br />

    //   <article class="article">
    //     Below is a list of my developer skills and portfolio projects. Looking
    //     to collaborate or hire me? I'd love to hear from you!
    //   </article>

    //   <br />
    //   <br />
    //   <div id="skills-icon-container">
    //     <img
    //       src="https://img.icons8.com/color/70/000000/javascript--v1.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/plasticine/70/000000/react.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/color/70/000000/nodejs.png"
    //       alt="icon"
    //     />
    //     <img src="https://img.icons8.com/color/70/000000/css3.png" alt="icon" />
    //     <img
    //       src="https://img.icons8.com/color/70/000000/html-5--v1.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/color/70/000000/mongodb.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/70/000000/external-sql-web-hosting-flaticons-lineal-color-flat-icons.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/fluency/70/000000/python.png"
    //       alt="icon"
    //     />
    //     <img
    //       src="https://img.icons8.com/windows/70/000000/django.png"
    //       alt="icon"
    //     />
    //   </div>
    //   <br />
    //   <br />
    // </div>
  );
};

export default Hero;
