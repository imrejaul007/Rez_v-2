import React, { useState } from 'react';
import { Trash2, Plus, Minus, Tag, ChevronRight } from 'lucide-react';

// Shopazy Cart: Shopping Cart & Checkout
// Backend API: GET /api/wasil/shopazy/cart
// Backend API: PUT /api/wasil/shopazy/cart/update
// Backend API: DELETE /api/wasil/shopazy/cart/:id

const ShopazyCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', image: '📱', price: 134900, qty: 1, coins: 1349 },
    { id: 2, name: 'AirPods Pro', brand: 'Apple', image: '🎧', price: 24900, qty: 2, coins: 249 }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalCoins = cartItems.reduce((sum, item) => sum + (item.coins * item.qty), 0);
  const shipping = subtotal > 50000 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">Shopping Cart</h1>
        <p className="text-white/80 text-sm">{cartItems.length} items</p>
      </div>

      <div className="px-4 py-4 space-y-3">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-4xl">
                {item.image}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">{item.brand}</p>
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-lg font-bold text-gray-800 mt-1">₹{item.price.toLocaleString()}</p>
                <p className="text-xs text-yellow-600">+{item.coins * item.qty}🪙</p>
              </div>
              <button className="self-start text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg">
                <button className="px-3 py-1"><Minus className="w-4 h-4" /></button>
                <span className="font-medium">{item.qty}</span>
                <button className="px-3 py-1"><Plus className="w-4 h-4" /></button>
              </div>
              <p className="font-bold text-gray-800">₹{(item.price * item.qty).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Apply Coupon</h2>
        <div className="flex gap-2">
          <input type="text" placeholder="Enter code" className="flex-1 px-4 py-3 bg-gray-50 rounded-lg" />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Apply</button>
        </div>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Bill Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center">
            <p className="text-sm text-yellow-800">You'll earn <span className="font-bold">{totalCoins}🪙 coins</span></p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold">
          Proceed to Checkout • ₹{total.toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default ShopazyCart;
