import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y, EffectCube, Autoplay,EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.min.css';
import './Slider.css'

function Slider({ slides }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation= {
        {prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'}
      }
    >
      {slides.map((slide) => (
      <SwiperSlide key={slide.content} className='slide'> 
        <p className="author">{slide.author}</p>
        <p className="content">{slide.content}</p>

      </SwiperSlide>
    ))}
    </Swiper>
     );
    };
  //   
  

export default Slider