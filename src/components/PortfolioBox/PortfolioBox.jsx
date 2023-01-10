import './PortfolioBox.css';
import PortfolioPiece from '../PorfolioPiece/PortfolioPiece';
import React, { useState } from 'react';

const PortfolioBox = (props) => {
  const [readMoreClicked, setReadMoreClicked] = useState(false);
  let lastEl = props.tech[props.tech.length - 1];

  return (
    <div class="projects">
      <h1 class="section-heading">Projects</h1>
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
      <h3 class="read-more underlined">Read more</h3>
      <div class="carousel-container">
        <img src={props.images[0]} alt="project-image" />
      </div>
    </div>
  );
};

export default PortfolioBox;

// {!carouselActive ? (
//   <div id="img-container">
//     <img
//       onClick={() => setCarouselActive(!carouselActive)}
//       class="image"
//       src={props.images[0]}
//       style={{
//         width: '100%',
//         height: '100%',
//         borderRadius: '10px',
//         verticalAlign: 'top',
//       }}
//       alt="slides"
//     ></img>
//     <br />
//   </div>
// ) : (
//   <div id="img-container-carousel">
//     <Carousel
//       setCarouselActive={setCarouselActive}
//       carouselActive={carouselActive}
//       SliderData={SliderData}
//     />
//   </div>
// )}

{
  /* <div class="Portfolio-Box-Container" id="portfolio">
      <div id="Projects-container">
        <h1 id="PROJECTS">&lt;Projects &#128187;&gt;</h1>
        <br />
        <br />
      </div>
      {props.projects.map((m) => (
        <PortfolioPiece
          images={m.images}
          title={m.title}
          tech={m.tech}
          headline={m.headline}
          bullet1={m.bullet1}
          bullet2={m.bullet2}
          bullet3={m.bullet3}
          body={m.body}
          deployedAppLink={m.deployedAppLink}
          gitHubLink={m.gitHubLink}
        />
      ))}
    </div> */
}
