import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, A11y, EffectCube } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.min.css';

import Slider from './Slider/Slider'
import slider from './mock.json'
import Advertise from './Advertise/Advertise'
import Monthly from './Monthly/Monthly'
import CalendarRelease from './CalendarRelease/CalendarRelease'
import MostRead from './MostRead/MostRead'
import LatestBooks from './LatestBooks/LatestBooks'
import Comic from './Comic/Comic'
import Bestseller from './Bestseller/Bestseller'
import BestSelections from './BestSelections/BestSelections'
import BookRead from './BookRead/BookRead'
import Benefits from './Benefits/Benefits'
import Quotes from './Quotes/Quotes'
function Content() {
  return (
    <div className="content">
          <Slider slides={slider}/>
          <Advertise />
          <Monthly />
          <CalendarRelease />
          <MostRead />
          <LatestBooks />
          <Comic />
          <Bestseller />
          <BestSelections />
          <BookRead />
          <Benefits />
          <Quotes />

    </div>
  )
}

export default Content