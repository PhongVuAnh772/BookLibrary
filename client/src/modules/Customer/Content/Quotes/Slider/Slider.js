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
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation= {
        {prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'}
      }
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
    >
      {slides.map((slide) => (
      <SwiperSlide key={slide.content} className='slide'> 
        <img alt="" src="https://ebook.waka.vn/themes/desktop/reactjs/images/icon/quote-icon.png" style={{position:'relative',top:'-20px'}}/>
        <p className="author">{slide.author}</p>
        <p className="content">{slide.content}</p>

      </SwiperSlide>
    ))}
    </Swiper>
     );
    };
  //   
  

export default Slider