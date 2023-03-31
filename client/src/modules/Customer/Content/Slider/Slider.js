import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y, EffectCube, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.min.css';
import './Slider.css'

function Slider({ slides }) {
  return (
    <div className="Slider"><Swiper
    modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y, EffectCube]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    effect={"cube"}
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
      <SwiperSlide key={slide.image}>
        <img src={slide.image} alt={slide.title}style={{width: '1100px',height: '278px'}}/>
      </SwiperSlide>
    ))}
  </Swiper></div>
  )
}

export default Slider