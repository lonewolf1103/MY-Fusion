import React from 'react';
import { useCart } from '../Context/CartContext'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart({
      id: 'moon-lamp',
      name: '3D Moon Lamp – 7 Color Changing | 15cm | Touch & Rechargeable',
      price: 499,
      quantity: 1,
      image: '/images/moon-lamp.jpg' // Optional: Add actual path if available
    });
    navigate('/cartpage');
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6 md:px-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section: Text + Price */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-3xl font-extrabold uppercase mt-10">
            🌕 3D Moon Lamp – 7 Color Changing | 15cm | Touch & Rechargeable
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Bring the moon into your room!<br /><br />
            Crafted with advanced 3D printing technology, this stunning moon lamp replicates the real lunar surface in breathtaking detail. Whether you're creating a cozy vibe, romantic setting, or a magical gift moment – this moon lamp does it all.
          </p>

          <div className="space-y-3 text-gray-300 text-lg">
            <p>✨ <strong>Features:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>🌈 <strong>7 Color Modes</strong> – Warm White, Cool White, Red, Green, Blue, Yellow, and Pink.</li>
              <li>🔋 <strong>Rechargeable via USB</strong> – Up to 10 hours of lighting on a single charge.</li>
              <li>📐 <strong>Perfect Size</strong> – 15cm – Strikes the ideal balance between charm and visibility.</li>
              <li>🪵 <strong>Elegant Wooden Stand</strong> – Aesthetic base to complement any space.</li>
              <li>🖐️ <strong>Touch Control</strong> – Tap anywhere on the surface to change colors or turn on/off.</li>
              <li>🌙 <strong>Safe & Eco-Friendly</strong> – Made with PLA material, non-toxic and odorless.</li>
            </ul>

            <p>🎁 <strong>Perfect For:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Bedroom décor</li>
              <li>Romantic gifts</li>
              <li>Night light for kids</li>
              <li>Diwali, Christmas & Birthday gifts</li>
              <li>Meditation and mood lighting</li>
            </ul>

            <p className="text-yellow-400 font-semibold mt-4">💡 Let the moonlight illuminate your world.</p>
          </div>

          {/* Pricing */}
          <div className="text-2xl font-bold text-white mt-6">
            ₹499 <span className="text-sm font-normal line-through text-gray-500 ml-3">₹999</span>
          </div>

          <button
            onClick={handleBuyNow}
            className="mt-4 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Buy Now
          </button>
        </div>

        {/* Right Section: Video */}
        <div className="w-full flex justify-center">
          <video
            src="/videos/WhatsApp Video 2025-05-26 at 23.05.31.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="mt-5 rounded-xl w-full max-w-md shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
