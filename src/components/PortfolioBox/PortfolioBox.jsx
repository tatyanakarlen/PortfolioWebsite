import './PortfolioBox.css';
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece';
import React, { useState } from 'react';
// import { AiOutlineRead } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GoEyeClosed } from 'react-icons/go';
import Carousel from '../Carousel/Carousel';
// import CarouselActive from '../../hooks'




const PortfolioBox = (props) => {

  // const { carouselActive } = CarouselActive();

  const [readMoreActive, setReadMoreActive] = useState(false);

  const [carouselActive, setCarouselActive] = useState(false);

  let SliderData = [];

  props.images.forEach((el) => SliderData.push({ image: el }));

  let lastEl = props.tech[props.tech.length - 1];

  // let opacity = '';
  // if (carouselActive) {
  //   opacity = {
  //     filter: 'blur(10px)'
  //     };
  // }

  //  console.log(opacity)

  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);

  return (
    // style={{
    //   textDecoration: completed ? 'line-through' : 'none'
    // }}
    <div class="projects">
      {/* <h1 class="section-heading">Projects</h1> */}
      <h3 class="h3-computer">{props.title}</h3>
      <p>
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
     </div>
  );
};

export default PortfolioBox;





