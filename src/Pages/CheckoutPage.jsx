import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState('COD');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/'); // Redirect if cart is empty
    }
  }, [cartItems, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic phone number validation
    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    const orderData = {
      ...formData,
      paymentMode: paymentMode === 'COD' ? 'Cash on Delivery' : 'Online Payment',
      cartItems,
      total
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('🎉 Order placed successfully!');
        clearCart();
        localStorage.removeItem('lamp-qty'); // ✅ Reset quantity for Moonlight Lamp
        navigate('/thank-you');
      } else {
        alert(`❌ Error: ${result.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('❌ Failed to place order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Shipping Info Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-black">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-black">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-black">Shipping Address</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-black">Order Notes (Optional)</label>
            <textarea
              name="notes"
              rows="2"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            ></textarea>
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block mb-1 text-black font-semibold">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="COD"
                  checked={paymentMode === 'COD'}
                  onChange={() => setPaymentMode('COD')}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="Online"
                  checked={paymentMode === 'Online'}
                  onChange={() => setPaymentMode('Online')}
                  className="mr-2"
                />
                Pay Online (Contact Us)
              </label>
            </div>
          </div>

          {paymentMode === 'Online' && (
            <div className="bg-yellow-100 border border-yellow-300 p-4 rounded text-sm text-black">
              💬 For online payment, please message us on:
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <a
                    href="https://wa.me/916353616391"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/myfusion09?igsh=MTVhMDhudWc5ZzV3eg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded shadow space-y-4">
          <h2 className="text-xl font-semibold text-black mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between text-black">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <hr />
              <div className="flex justify-between font-bold text-black">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </>
          ) : (
            <p className="text-black">🛒 Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
