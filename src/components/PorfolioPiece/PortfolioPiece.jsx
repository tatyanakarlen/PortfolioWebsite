import './PortfolioPiece.css';
import { useState } from 'react';
import Carousel from '../Carousel/Carousel';

import React from 'react';

const PortfolioPiece = (props) => {
  const [carouselActive, setCarouselActive] = useState(false);

  let SliderData = [];
  props.images.forEach((el) => SliderData.push({ image: el }));

  console.log('these are the new slides', SliderData);

  let lastEl = props.tech[props.tech.length - 1];

  return (
    <div>
      <div class="showcase">
        <div id="port-piece-container">
          <h3 class="project-title">{props.title}</h3>

          <br />
          <br />

          <p id="project-headline" class="project-details">
            {props.headline}

            {props.tech.map((m) => (
              <span class="tech">
                {' '}
                {m}
                {m != lastEl && <span class="punctuation">,</span>}
              </span>
            ))}
          </p>
          <br />
          <br />
          <p class="project-details">-{props.bullet1}</p>
          <br />
          <p class="project-details">-{props.bullet2}</p>
          <br />
          <p class="project-details">-{props.bullet3}</p>
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <div id="main-img-container">
          {!carouselActive ? (
            <div id="img-container">
              <img
                onClick={() => setCarouselActive(!carouselActive)}
                class="image"
                src={props.images[0]}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  verticalAlign: 'top',
                }}
                alt="slides"
              ></img>
              <br />
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
        </div>
        <br />
        <br />
        <br />
        <br />

        <div id="bottom-text-div">
          <p class="project-details">{props.body}</p>
          <br />
          <p class="project-details proj-links">
            <span class="links-text">Visit the app </span>
            <a
              style={{ color: '#b20456' }}
              href={props.deployedAppLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>here</span>
            </a>
          </p>
          <br />
          <p class="project-details proj-links">
            <span>View code on GitHub </span>
            <a
              style={{ color: '#b20456' }}
              href={props.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>here</span>
            </a>
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPiece;
