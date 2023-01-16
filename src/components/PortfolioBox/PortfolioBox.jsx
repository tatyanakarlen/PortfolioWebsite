import './PortfolioBox.css';
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece';
import React, { useState } from 'react';
// import { AiOutlineRead } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GoEyeClosed } from 'react-icons/go';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';


import Carousel from '../Carousel/Carousel';

// import CarouselActive from '../../hooks'




const PortfolioBox = (props) => {

  // const { carouselActive } = CarouselActive();

  const [readMoreActive, setReadMoreActive] = useState(false);

  const [carouselActive, setCarouselActive] = useState(false);

  let SliderData = [];

  props.images.forEach((el) => SliderData.push({ image: el }));

  let lastEl = props.tech[props.tech.length - 1];

  

  return (
  
    <div class="projects">
      <h3 class="h3-computer">{props.title}</h3>
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
      {readMoreActive ? 
      <div class="read-more-pop-up">
         <div class="icon-text-container project-pop-up-icon-text">
        <GoEyeClosed style={{fontSize: '2.75rem'}} onClick={() => setReadMoreActive(!readMoreActive)}/>
      <h3 class="read-more underlined" onClick={() => setReadMoreActive(!readMoreActive)}>Close</h3>
      </div>
     
      <p class="underlined">-{props.bullet1}</p>
          <p>-{props.bullet2}</p>
          <p>-{props.bullet3}</p>
      </div> :
      <div class="icon-text-container project-pop-up-icon-text">
        <AiOutlineFolderOpen  onClick={() => setReadMoreActive(!readMoreActive)} class="icon" />
      <h3 class="read-more underlined" onClick={() => setReadMoreActive(!readMoreActive)}>Read more</h3>
      </div>
      
}   
     {!carouselActive ? 
      <div class="static-img-container">
        <img class="static-img"
        onClick={() => setCarouselActive(!carouselActive)}
        src={props.images[0]} alt="project-image" 
        />
      </div>
      :
      <div id="img-container-carousel">
        <Carousel
           setCarouselActive={setCarouselActive}
           carouselActive={carouselActive}
          SliderData={SliderData}
          carouselActive={carouselActive}
          setCarouselActive={setCarouselActive}
         
        />
       </div>
       
   
     }
     <div className="demo-code-links-container">
      <div><TbApps />
      <a href={props.deployedAppLink}
      target="_blank"
      rel="noopener noreferrer"
      >Demo</a>
      </div>
      <div><BsGithub />
      <a href={props.gitHubLink}
      target="_blank"
      rel="noopener noreferrer"
      >Code</a>
      </div>
     </div>
     </div>
  );
};

export default PortfolioBox;



{/* <a
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
<span>here</span> */}





