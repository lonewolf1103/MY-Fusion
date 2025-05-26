import React, { useContext, useEffect } from 'react';
import { DataContext } from '../Context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Carousel = () => {
    const { data, fetchAllProducts } = useContext(DataContext);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={className} style={{ ...style, zIndex: 3 }}>
                <AiOutlineArrowRight
                    className="arrows"
                    style={{
                        display: 'block',
                        borderRadius: '50px',
                        background: '#f53347',
                        color: 'white',
                        position: 'absolute',
                        padding: '8px',
                        right: '25px',
                        fontSize: '30px',
                    }}
                />
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={className} style={{ ...style, zIndex: 3 }}>
                <AiOutlineArrowLeft
                    className="arrows"
                    style={{
                        display: 'block',
                        borderRadius: '50px',
                        background: '#f53347',
                        color: 'white',
                        position: 'absolute',
                        padding: '8px',
                        left: '25px',
                        fontSize: '30px',
                    }}
                />
            </div>
        );
    };

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div>
            <Slider {...settings}>
                {data?.slice(0, 7)?.map((item, index) => (
                    <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
                        <div className='flex gap-10 justify-center items-center h-[600px] px-4'>
                            <div className='space-y-6 text-white'>
                                <h3 className='font-semibold font-sans text-sm'>
                                    Powering your world with the best in electronics
                                </h3>
                                <h1 className='text-3xl font-bold uppercase line-clamp-3 md:w-[500px]'>
                                    {item.title}
                                </h1>
                                <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>
                                    {item.description}
                                </p>
                                <button className='bg-gradient-to-r from-red-500 to-purple-500 px-3 py-2 rounded-md cursor-pointer mt-2'>
                                    Shop Now
                                </button>
                            </div>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
