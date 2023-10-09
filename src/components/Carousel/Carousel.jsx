import React, { useState } from 'react';
import './Carousel.css';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { CgCloseO } from 'react-icons/cg';

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const length = props.SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
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
    <div className="popup" style={popUpVisibleStyles}>
      {props.SliderData.map((slide, index) => {
        return (
          <div className="popup-content">
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div className="img-icon-container">
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
