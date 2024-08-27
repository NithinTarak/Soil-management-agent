import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-96 lg:h-[600px] w-full"
         style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-xl md:text-3xl font-bold">
          "The soil is the great connector of lives, the source and destination of all."
        </h1>
        <p className="text-white text-sm md:text-lg mt-4">
          - Wendell Berry
        </p>
      </div>
    </div>
  );
};

export default Banner;
