import './PortfolioPiece.css';
// import img from './untitled.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Carousel from '../Carousel/Carousel'

import React from 'react';

const PortfolioPiece = (props) => {
  const [enlargedPhotoActive, setenlargedPhotoActive] = useState(false);

  // const newSlides = [
  //   { url: img1 },
  //   { url: img2 },
  //   { url: img3 },

  // ];

  const [carouselActive, setCarouselActive] = useState(false)

  let SliderData = [];
  props.images.forEach((el) => SliderData.push({ ['image']: el }));

  console.log('these are the new slides', SliderData);

//   const mainImg =  
//   <div id="img-container" style={{width: '60%', height: '50%', margin: '0 auto'}}>
//   <img 
//   onClick={() => setCarouselActive(!carouselActive)}
//   class="image" 
//   src={props.images[0]} 
//   style={{width: '100%', height: '100%'}}
//   >
//   </img>
//   <br/>
//   <br/>
// </div>

  

  return (
    <div>
     

      <div class="showcase">
      
        <div id="port-piece-container">
          
          {/* <div id="right-size-text"> */}
            <h2 class="project-title">{props.title}</h2>
            <br />
            <p id="project-headline" class="project-details">{props.headline}</p>
           
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
        <div>
        {!carouselActive ? 
        <div id="img-container">
          {/* style={{width: '60%', height: '50%', margin: '0 auto'}} */}
        <img 
          onClick={() => setCarouselActive(!carouselActive)}
          class="image" 
          src={props.images[0]} 
          style={{width: '100%', height: '100%', borderRadius: '10px'}}
          >
          </img>
          <br/>
        </div>
        :
        
        <div id="img-container-carousel">
        <Carousel 
        setCarouselActive={setCarouselActive}
        carouselActive={carouselActive}
        SliderData={SliderData}/>
        </div>
        
           
      
         
        }
        </div>
        <br/>
            
        
            
        <div id="bottom-text-div">
          <p class="project-details">{props.body}</p>
          <br />
          <p class="project-details proj-links">
            <span class="links-text">Visit the app here:{' '}</span>
            <a href={props.deployedAppLink} target="_blank">
              {props.deployedAppLink}
            </a>
          </p>
          <br />
          <p class="project-details proj-links">
          <span>View code on GitHub:{' '}</span>
            <a href={props.gitHubLink} target="_blank">
              {props.gitHubLink}
            </a>
          </p>
          <br />
          <br />
          <br />
        </div>

      </div>
      {/* )} */}
    </div>
  );
};

export default PortfolioPiece;
