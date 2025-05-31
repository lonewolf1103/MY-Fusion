
import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { IoTrashBin } from 'react-icons/io5';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-black py-12 px-4 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-white">
          <p>Your cart is empty.</p>
          <Link
            to="/products"
            className="mt-4 inline-block bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-6">
                  <img
                    src="/Pictures/WhatsApp Image 2025-05-26 at 23.09.55.jpeg"
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded shadow"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                    <p className="text-white">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <p className="text-lg font-bold text-white">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    <IoTrashBin />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Footer */}
          <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl font-bold text-white">
              Total: ₹{total}
            </p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
              <Link to="/checkout">
                <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
