import React from 'react';
import fitness1 from '../../../assets/FitnessImg/fitness1.png'
import backgroundPhoto from '../../../assets/FitnessImg/backgroundPhoto.gif'
const Banner = () => {
    return (
        <section className="bg-gray-900 mt-16" style={{ backgroundImage: `url(${backgroundPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                                MAKE YOURSELF <span className='text-[#fc541a]'>STRONGER</span> THAN YOUR <span className='text-[#fc541a]'>EXCUSES</span>
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                Regular physical activity can improve your muscle instance and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your card cardiovascular system work more efficiently
                            </p>
                            <button className="bg-[#fc541a] hover:bg-success text-white py-3 px-6 rounded-full text-lg font-bold">
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
                </div>
            </div>
        </section>
    );
};

export default Banner;
