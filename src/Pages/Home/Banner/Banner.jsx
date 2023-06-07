import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="max-w-lg">
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
        </div>
      </div>
    </section>
  );
};

export default Banner;
