import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Carousel.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoMdCloseCircle } from 'react-icons/io';
import { CgCloseO } from 'react-icons/cg';

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
    console.log(length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
    console.log(length);
  };

  let popUpVisibleStyles = '';

  if (props.carouselActive) {
    popUpVisibleStyles = {
      opacity: '1',
      visibility: 'visible',
    };
  }

  return (
    <div class="popup" style={popUpVisibleStyles}>
      {props.SliderData.map((slide, index) => {
        return (
          <div class="popup-content">
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div class="img-icon-container">
                  <img id="image" alt="test" src={slide.image}></img>
                  <CgCloseO
                    id="X"
                    onClick={() => props.setCarouselActive(false)}
                  />
                  <IoIosArrowForward
                    className="right-arr"
                    onClick={nextSlide}
                  />
                  <IoIosArrowBack className="left-arr" onClick={prevSlide} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

{
  /* <div class="popup" id="popup">
<div class="popup-content">
  <img></img>
</div>
</div> */
}

{
  /* <div className="col-2-pics">
{props.SliderData.map((slide, index) => {
  return (
    <div
      className={index === current ? 'slide active' : 'slide'}
      key={index}
    >
      {index === current && (
        <div>
          <img id="image" alt="test" src={slide.image}></img>
          <IoMdCloseCircle
            id="X"
            onClick={() => props.setCarouselActive(false)}
          />
          <IoIosArrowForward className="right-arr" onClick={nextSlide} />
          <IoIosArrowBack className="left-arr" onClick={nextSlide} />
        </div>
      )}
    </div>
  );
})}
</div> */
}
