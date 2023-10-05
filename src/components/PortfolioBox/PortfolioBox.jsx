import './PortfolioBox.css';
import React, { useState } from 'react';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GoEyeClosed } from 'react-icons/go';
import { BsGithub } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Carousel from '../Carousel/Carousel';

const PortfolioBox = (props) => {
  const [readMoreActive, setReadMoreActive] = useState(false);

  const [carouselActive, setCarouselActive] = useState(false);

  let SliderData = [];

  props.images.forEach((el) => SliderData.push({ image: el }));

  let lastEl = props.tech[props.tech.length - 1];

  return (
    <div class="projects">
      <h3>{props.title}</h3>
      <p class="project-description">
        {props.headline}
        {props.tech.map((m) => (
          <span class="neon-green-text">
            {' '}
            {m}
            {m != lastEl && <span class="punctuation">,</span>}
          </span>
        ))}
      </p>
      {readMoreActive ? (
        <div class="read-more-pop-up">
          <div class="icon-text-container project-pop-up-icon-text">
            <GoEyeClosed
              style={{ fontSize: '2rem' }}
              onClick={() => setReadMoreActive(!readMoreActive)}
            />
            <h3
              class="read-more underlined"
              onClick={() => setReadMoreActive(!readMoreActive)}
            >
              Close
            </h3>
          </div>

          <p class="bullet">-{props.bullet1}</p>
          <p class="bullet">-{props.bullet2}</p>
          <p class="bullet">-{props.bullet3}</p>
        </div>
      ) : (
        <div class="icon-text-container project-pop-up-icon-text">
          <AiOutlineFolderOpen
            onClick={() => setReadMoreActive(!readMoreActive)}
            class="folder-icon"
          />
          <h3
            class="read-more underlined"
            onClick={() => setReadMoreActive(!readMoreActive)}
          >
            Read more
          </h3>
        </div>
      )}
      {!carouselActive ? (
        <div class="static-img-container">
          <img
            class="static-img"
            onClick={() => setCarouselActive(!carouselActive)}
            src={props.images[0]}
            alt="project-image"
          />
        </div>
      ) : (
        <div id="img-container-carousel">
          <Carousel
            setCarouselActive={setCarouselActive}
            carouselActive={carouselActive}
            SliderData={SliderData}
          />
        </div>
      )}
      <div className="demo-code-links-container">
        <div>
          <TbApps />
          <a
            href={props.deployedAppLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
        <div>
          <BsGithub />
          <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;
