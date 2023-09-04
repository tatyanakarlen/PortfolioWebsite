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
    <div className="project">
      <h3 className="h3-computer">{props.title}</h3>
      <p className="project-description">
        {props.headline}
        {props.tech.map((m, index) => (
          <span key={index} className="neon-green-text">
            {' '}
            {m}
            {m != lastEl && <span className="punctuation">,</span>}
          </span>
        ))}
      </p>
      {readMoreActive ? (
        <div className="read-more-pop-up">
          <div className="icon-text-container project-pop-up-icon-text">
            <GoEyeClosed
              style={{ fontSize: '2.75rem' }}
              onClick={() => setReadMoreActive(!readMoreActive)}
            />
            <h3
              className="read-more underlined"
              onClick={() => setReadMoreActive(!readMoreActive)}
            >
              Close
            </h3>
          </div>

          <p className="underlined">-{props.bullet1}</p>
          <p>-{props.bullet2}</p>
          <p>-{props.bullet3}</p>
        </div>
      ) : (
        <div className="icon-text-container project-pop-up-icon-text">
          <AiOutlineFolderOpen
            onClick={() => setReadMoreActive(!readMoreActive)}
            className="folder-icon"
          />
          <h3
            className="read-more underlined"
            onClick={() => setReadMoreActive(!readMoreActive)}
          >
            Read more
          </h3>
        </div>
      )}
      {!carouselActive ? (
        <div className="static-img-container">
          <img
            className="static-img"
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
