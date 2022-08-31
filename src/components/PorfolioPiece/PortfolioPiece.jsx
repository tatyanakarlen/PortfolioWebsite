import './PortfolioPiece.css';
// import img from './untitled.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider'

import React from 'react';

const PortfolioPiece = (props) => {
  const [enlargedPhotoActive, setenlargedPhotoActive] = useState(false);

  // const newSlides = [
  //   { url: img1 },
  //   { url: img2 },
  //   { url: img3 },

  // ];

  let slides = [];
  props.images.forEach((el) => slides.push({ ['url']: el }));

  console.log('these are the new slides', slides);

  const containerStyles = {
    width: "100%",
    height: "100%",
    // margin: "0 auto",
  };

  const containerStylesShow = {
    width: "100%",
    // height: "100%",
    // margin: "0 auto",
  };

  return (
    <div>
      {/* {enlargedPhotoActive ? (
        <div class="showcase-active"
        onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
        >
           <div style={containerStylesShow}>
          <ImageSlider slides={slides}/>
          </div> */}
          {/* <img
            onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
            src={props.images}
            style={{ width: '100%' }}
          ></img> */}
        {/* </div> */}
      {/* ) : ( */}
        
        <div class="showcase">
          {/* <div style={containerStyles}>
          <ImageSlider slides={slides}/>
          </div> */}
          <div id="port-piece-container">
            <div class="left-size-image"
            onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
            >
            <div style={containerStyles}>
          <ImageSlider slides={slides}/>
          </div>
          <br/>
              {/* {props.images.map((el) => (
                <img
                  onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
                  id="port-image"
                  src={el}
                  style={{ width: '50%', height: 'auto' }}
                ></img>
              ))} */}
              {/* <img
              onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
              id="port-image"
              src={props.img}
              style={{ width: '100%', height: 'auto' }}
            ></img> */}
            </div>
            <div id="right-size-text">
              <h2>{props.title}</h2>
              <br />
              <br />
              <p>{props.headline}</p>
              <br />
              <p>-{props.bullet1}</p>
              <br />
              <p>-{props.bullet2}</p>
              <br />
              <p>-{props.bullet3}</p>
              <br />

              <br />
            </div>
          </div>
          <div id="bottom-text-div">
            <p>{props.body}</p>
            <br />
            <p>
              Visit the app here:{' '}
              <a href={props.deployedAppLink} target="_blank">
                {props.deployedAppLink}
              </a>
            </p>
            <br />
            <p>
              View code on GitHub:{' '}
              <a href={props.gitHubLink} target="_blank">
                {props.gitHubLink}
              </a>
            </p>
            <br />
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default PortfolioPiece;
