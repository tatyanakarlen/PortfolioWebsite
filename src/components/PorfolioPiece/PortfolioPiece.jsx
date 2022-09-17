import './PortfolioPiece.css';
import { useState } from 'react';
import Carousel from '../Carousel/Carousel';

import React from 'react';

const PortfolioPiece = (props) => {
  const [carouselActive, setCarouselActive] = useState(false);

  let SliderData = [];
  props.images.forEach((el) => SliderData.push({ 'image': el }));

  console.log('these are the new slides', SliderData);

  return (
    <div>
      <div class="showcase">
        <div id="port-piece-container">
          <h3 class="project-title">{props.title}</h3>
          <br />
          <p id="project-headline" class="project-details">
            {props.headline}
          </p>

          <br />
          <p class="project-details">-{props.bullet1}</p>
          <br />
          <p class="project-details">-{props.bullet2}</p>
          <br />
          <p class="project-details">-{props.bullet3}</p>
          <br />

          <br />
          {/* </div> */}
        </div>
        <div id='main-img-container'>
          {!carouselActive ? (
            <div id="img-container">
              <img
                onClick={() => setCarouselActive(!carouselActive)}
                class="image"
                src={props.images[0]}
                style={{ width: '100%', height: '100%', borderRadius: '10px', verticalAlign: 'top' }}
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

        <div id="bottom-text-div">
          <p class="project-details">{props.body}</p>
          <br />
          <p class="project-details proj-links">
            <span class="links-text">Visit the app here: </span>
            <a href={props.deployedAppLink} target="_blank" rel="noopener noreferrer">
              {props.deployedAppLink}
            </a>
          </p>
          <br />
          <p class="project-details proj-links">
            <span>View code on GitHub: </span>
            <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer">
              {props.gitHubLink}
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
