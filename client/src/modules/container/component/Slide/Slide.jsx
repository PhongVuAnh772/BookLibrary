import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Slide(props) {
    return (
        <Carousel className={cx('slide')} interval={2500}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2030_new.jpg?v=3&w=1580&h=400"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2000_new.jpg?v=3&w=1580&h=400"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="	https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2006_new.jpg?v=3&w=1580&h=400"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;
