import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import news from '../../../assist/news-1.jpg';
import khokho from '../../../assist/kho-kho.jpeg';


const BrandCarusel = () => {
    return (
        <Carousel data-bs-theme="dark" className='mt-4'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={news}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-10"
                    src={khokho}
                    alt="Second slide"
                />
            </Carousel.Item>
           
        </Carousel>
    );
};

export default BrandCarusel;