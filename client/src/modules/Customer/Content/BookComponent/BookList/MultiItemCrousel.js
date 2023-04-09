import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIosIcon style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIosIcon style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [multiData, setMultiData] = useState([])

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:5000/api/purchaseorder');
      setMultiData(response.data);
    }
    fetchUsers();
  }, []);
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: '30px' }} className='carousel'>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          
            <div style={{ textAlign: 'center',marginLeft: '40px' }}>
              <img
                className='multi__image'
                src={item.cover_book}
                alt=''
                style={{
                  width: '100%',
                  height: '206px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <p style={{ fontSize: '16px', padding: '5px 0',color:'black',textAlign: 'center'}}>{item.book_name}</p>
              <p style={{ fontSize: '16px', padding: '5px 0', color: 'green',textAlign: 'center' }}>
              {item.book_author}
              </p>
              <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray',textAlign: 'center' }}>
              {item.book_category}
              </p>
              
            </div>
          
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  
};

export default MultiItemCarousel;
