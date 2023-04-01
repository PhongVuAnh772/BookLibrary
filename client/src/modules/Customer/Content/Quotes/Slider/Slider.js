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
    <div className="Slider"><Swiper
    modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y, EffectCube,EffectFade]}
    spaceBetween={50}
    slidesPerView={3}
    effect={"fade"}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
  }}
    cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }}
    style={{width: '1100px',height: '278px'}}

  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.content}> 
        <p>{slide.author}</p>
        <p>{slide.content}</p>

      </SwiperSlide>
    ))}
  </Swiper></div>
  )
}

export default Slider