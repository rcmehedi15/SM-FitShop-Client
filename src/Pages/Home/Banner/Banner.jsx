import React from 'react';
import fitness1 from '../../../assets/FitnessImg/fitness1.png'
const Banner = () => {
    return (
        <section className="bg-gray-900  mt-16">
            <div className="container mx-auto  px-4">
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                                Welcome to Our Website
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                Discover amazing products and services tailored just for you.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-bold">
                                Learn More
                            </button>
                        </div>
                        <div className="w-1/2 mt-4 ">
                            <img
                                src={fitness1}
                                alt="Slider Image"
                                className="h-auto max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
