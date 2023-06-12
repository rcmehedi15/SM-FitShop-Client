import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import backgroundPhoto from '../../../assets/FitnessImg/backgroundPhoto.png';
import fitness1 from '../../../assets/FitnessImg/fitness1.png';
import fitness2 from '../../../assets/FitnessImg/fitness2.png';
import fitness3 from '../../../assets/FitnessImg/fitness3.png';




SwiperCore.use([Autoplay, Navigation, Pagination]);

SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <section
            className="bg-gray-900 mt-16 "
            style={{ backgroundImage: `url(${backgroundPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        >
            <div className="mx-9 mt-20">
                <div className="flex items-center justify-center ">
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="w-1/2 ">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                                        MAKE YOURSELF <span className='text-[#fc541a]'>STRONGER</span> THAN YOUR <span className='text-[#fc541a]'>EXCUSES</span>
                                    </h1>
                                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                        Experience the power of physical activity and transform yourself both physically and mentally. Join our Fitness School today!
                                    </p>
                                    <button className="bg-[#fc541a] hover:bg-[#193038] text-white py-3 px-6 rounded-full text-lg font-bold">
                                        GET STARTED
                                    </button>
                                </div>
                                <div className="w-1/2 mt-4">
                                    <img
                                        src={fitness1}
                                        alt="Slider Image"
                                        className="h-auto max-w-full"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                                        <span className='text-[#fc541a]'>TRANSFORM</span> YOUR BODY AND <span className='text-[#fc541a]'>MIND</span>
                                    </h1>
                                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                        Achieve your fitness goals, build strength, increase flexibility, and improve overall well-being with our expert guidance.
                                    </p>
                                    <button className="bg-[#fc541a] hover:bg-[#193038] text-white py-3 px-6 rounded-full text-lg font-bold">
                                        GET STARTED
                                    </button>
                                </div>
                                <div className="w-1/2 mt-4">
                                    <img
                                        src={fitness2}
                                        alt="Slider Image"
                                        className="h-auto max-w-full"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                                        DISCOVER THE JOY OF <span className='text-[#fc541a]'>FITNESS</span>
                                    </h1>
                                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                        Join our supportive community, find your passion for fitness, and unlock a healthier, happier you.
                                    </p>
                                    <button className="bg-[#fc541a] hover:bg-[#193038] text-white py-3 px-6 rounded-full text-lg font-bold">
                                        GET STARTED
                                    </button>
                                </div>
                                <div className="w-1/2 mt-4">
                                    <img
                                        src={fitness3}
                                        alt="Slider Image"
                                        className="h-auto max-w-full"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                       
                       
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Slider;
