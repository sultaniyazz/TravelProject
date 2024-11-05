import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PackSlick = ({ images }) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings} className='h-full relative'>
                {images?.map((imgSrc, index) => (
                    <div key={index} className='flex gap-[1vw]'>
                        <div className='flex flex-col p-[1vw]'>
                            <img
                                className="w-full shadow-md h-[35vw] max-md:h-[100vw] overflow-hidden object-cover object-center rounded-[1vw] gap-[1vw] flex"
                                src={imgSrc}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PackSlick;
