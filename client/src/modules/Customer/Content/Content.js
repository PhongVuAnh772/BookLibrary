import {React,useState} from 'react'
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
import './Content.css'
function Content() {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
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
          <div className="sidebar">
            <li>
            <div className="sidebar-news">
    
             </div>
             <button style={{border: '0px', display: visible ? 'inline' : 'none' }} className="sidebar-backtop" onClick={scrollToTop}>
            </button>
            </li>
          </div>
          <div className="massages">
            <div className="massages-icons">
            </div>
            <div className="massages-text">
              <p className="massages-text-content">Hỗ trợ</p>
            </div>
          </div>
    </div>
  )
}

export default Content