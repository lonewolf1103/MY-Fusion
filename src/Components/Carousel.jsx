import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-6 md:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Text + Price */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
            Moonlight Night Lamp
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Transform your nights with this elegant Moonlight Lamp, blending modern design and calming ambient light. Ideal for bedrooms, desks, or gifting.
          </p>

          <div className="text-2xl font-bold text-white">
            ₹1,499 <span className="text-sm font-normal line-through text-gray-500 ml-3">₹1,999</span>
          </div>

          <button className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300">
            Buy Now
          </button>
        </div>

        {/* Right Section: Video */}
        <div className="w-full flex justify-center">
          <video
            src="public\videos\WhatsApp Video 2025-05-26 at 23.05.31.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full max-w-md shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
