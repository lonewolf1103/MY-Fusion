import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart } from '../Context/CartContext';

const ProductPage = () => {
  const images = [
    '/Pictures/WhatsApp Image 2025-05-26 at 23.09.53.jpeg',
    '/Pictures/WhatsApp Image 2025-05-26 at 23.09.55.jpeg',
    '/Pictures/WhatsApp Image 2025-05-26 at 23.10.20.jpeg',
  ];

  const {addToCart} = useCart();
  const [quantity, setQuantity] = useState(()=>{
    const stored = localStorage.getItem('lamp-qty')
    return stored ? parseInt(stored) : 1
  });

  useEffect(() => {
   localStorage.setItem('lamp-qty', quantity);
  }, [quantity])
  

  // const [cart, setCart] = useState(null);

   const handleAddToCart = () => {
    const item = {
      name: 'Moonlight Night Lamp',
      price: 499,
      quantity,
      total: 499 * quantity,
      image: images[0] // first image for cart display
    };
    addToCart(item);
    alert(`Added ${quantity} item(s) to cart!`);
    setQuantity(1);
    localStorage.removeItem('lamp-qty')
  };
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 md:px-16 mt-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Slider Section */}
        <div>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            Moonlight Night Lamp
          </h2>

          {/* New Description */}
          <div className="text-gray-300 text-lg leading-relaxed space-y-2">
            <p>🌈 <strong>7 Color Modes</strong> – Warm White, Cool White, Red, Blue, Green, Yellow, and Pink</p>
            <p>🔋 <strong>USB Rechargeable</strong> – Up to 10 hours of light on a single charge</p>
            <p>🖐️ <strong>Touch Sensor</strong> – Tap to change color or turn ON/OFF</p>
            <p>🌕 <strong>Realistic 3D Moon Surface</strong> – Printed with advanced 3D technology</p>
            <p>🪵 <strong>Elegant Wooden Stand</strong> – Adds a stylish touch to your room décor</p>
          </div>

          {/* Pricing Section (unchanged) */}
          <div>
            <span className="text-2xl font-bold text-white">₹499</span>
            <span className="text-sm font-normal line-through text-gray-500 ml-3">₹999</span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={decreaseQty}
              className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={increaseQty}
              className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Add to Cart
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
