import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Carousel.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoMdCloseCircle } from 'react-icons/io';

export default function Carousel(props) {
  const SliderData = [
    {
      title: 'IMG-1',
      image:
        'https://i.pinimg.com/474x/f8/2e/9d/f82e9d000b829f8c81f500c51c8ffb60.jpg',
    },
    {
      title: 'IMG-2',
      image:
        'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/03/antique-meat-press.jpg?resize=1200%2C803&ssl=1',
    },
    {
      title: 'IMG-3',
      image:
        'https://images.bonanzastatic.com/afu/images/32b6/822a/7e3e_7413225783/s-l1600.jpg',
    },
  ];

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
        <IoMdCloseCircle
                    id="X"
                    onClick={() => props.setCarouselActive(false)}
                  />
                  <IoIosArrowForward
                    className="right-arr"
                    onClick={nextSlide}
                  />
                  <IoIosArrowBack className="left-arr" onClick={nextSlide} />
    
      {props.SliderData.map((slide, index) => {
        return (
          <div class="popup-content">
           
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              
                <>
                  <img id="image" alt="test" src={slide.image}></img>
                  {/* <IoMdCloseCircle
                    id="X"
                    onClick={() => props.setCarouselActive(false)}
                  />
                  <IoIosArrowForward
                    className="right-arr"
                    onClick={nextSlide}
                  />
                  <IoIosArrowBack className="left-arr" onClick={nextSlide} /> */}
                </>
             
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
