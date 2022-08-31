import './PortfolioPiece.css';
// import img from './untitled.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import React from 'react';

const PortfolioPiece = (props) => {
  const [enlargedPhotoActive, setenlargedPhotoActive] = useState(false);

  // enlargedPhotoActive={props.enlargedPhotoActive}
  // setenlargedPhotoActive={props.setenlargedPhotoActive}

  return (
    <div>
      {enlargedPhotoActive ? 
      <div class="showcase-active">
      <img 
      onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
      src={props.img}
      style={{width: '100%'}}>

      </img>
      </div> :
      <div class="showcase">
        <div id="port-piece-container">
          <div class="left-size-image">
            <img
              onClick={() => setenlargedPhotoActive(!enlargedPhotoActive)}
              id="port-image"
              src={props.img}
              style={{ width: '100%', height: 'auto' }}
            ></img>
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
}
    </div>
  );
};

export default PortfolioPiece;
