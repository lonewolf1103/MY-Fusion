import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-6 md:px-20 mt-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-6 uppercase">About Us</h1>
        <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto">
          ✨ We don't just sell lamps — we create experiences that spark emotion, beauty, and calm in your space.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🌙 Our Journey</h2>
            <p className="text-gray-300">
              MoonGlow started with a dream: to bring a piece of the night sky into your hands. With one product — the 3D Moon Lamp — we launched our mission to combine art and technology to elevate your everyday environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-300 font-semibold mb-2">💡 Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>🌈 Unique & aesthetic lighting solutions</li>
              <li>🖐️ Thoughtful craftsmanship & detail</li>
              <li>🚚 Fast & reliable shipping across India</li>
              <li>🌱 Eco-friendly packaging, safe materials</li>
              <li>💬 Personalized customer support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🎯 Our Mission</h2>
            <p className="text-gray-300">
              To spread light — literally and metaphorically. Our products are designed to create comfort, inspiration, and joy for you and your loved ones.
            </p>
          </div>

          {/* <div>
            <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🧡 Loved by Thousands</h2>
            <p className="text-gray-300">
              With 10,000+ happy customers across India, our Moon Lamps have brightened bedrooms, gifted smiles, and transformed countless corners into cozy havens.
            </p>
            <blockquote className="italic text-yellow-100 border-l-4 border-yellow-400 pl-4 mt-4">
              “Absolutely beautiful product! The glow is magical. Makes for the perfect gift.” — Sneha, Delhi
            </blockquote>
          </div> */}

          <div>
            <h2 className="text-2xl text-yellow-300 font-semibold mb-2">📬 Stay Connected</h2>
            <p className="text-gray-300">
              Follow us on <span className="underline text-yellow-400">Instagram</span>, <span className="underline text-yellow-400">Facebook</span>, and <span className="underline text-yellow-400">YouTube</span> for behind-the-scenes, offers, and more.
              <br />📩 Email us at: <span className="text-white font-medium">myfusionn.108@gmail.com</span>
            </p>
          </div>
        </section>

        <p className="text-center text-yellow-400 italic text-lg pt-10">
          "Let’s light up the world, one moon at a time."
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
