import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const cartItem = {
    name: "Star Fruit",
    price: 120,
    quantity: 4,
    image: "/src/assets/starfruit.png", // your image
  };

  const subtotal = cartItem.price * cartItem.quantity;
  const shipping = 0;
  const tax = subtotal * 0.05;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-10 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">Your Shopping Cart</h1>

      <div className="w-[90%] md:w-[85%] flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT SIDE CART ITEMS */}
        <div className="flex-1">
          {/* Clear Cart */}
          <button className="flex items-center gap-2 mb-5 text-gray-300 hover:text-white">
            <FaTrash /> Clear Cart
          </button>

          {/* Item Card */}
          <div className="bg-[#002E27] p-6 rounded-2xl shadow-lg w-[260px]">
            <img
              src={cartItem.image}
              alt="item"
              className="w-24 h-24 mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold">{cartItem.name}</h2>
            <p className="text-gray-300 mt-1">₹{cartItem.price.toFixed(2)}</p>

            {/* Quantity */}
            <div className="flex items-center justify-between mt-4">
              <button className="p-2 rounded-full bg-[#014236] hover:bg-[#01614f]">
                <FaMinus size={12} />
              </button>

              <span className="text-lg">{cartItem.quantity}</span>

              <button className="p-2 rounded-full bg-[#014236] hover:bg-[#01614f]">
                <FaPlus size={12} />
              </button>
            </div>

            {/* Remove */}
            <button className="flex items-center gap-2 mt-5 text-gray-300 hover:text-red-400">
              <FaTrash size={14} /> Remove
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ORDER SUMMARY */}
        <div className="w-full md:w-[380px] bg-[#002E27] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-3 text-gray-300">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3 text-gray-300">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>

          <div className="flex justify-between mb-3 text-gray-300">
            <span>Taxes (5%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr className="border-gray-700 my-4" />

          <div className="flex justify-between text-xl font-semibold mb-6">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-[#00D185] text-black font-semibold p-3 rounded-lg hover:bg-[#02b672] transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
