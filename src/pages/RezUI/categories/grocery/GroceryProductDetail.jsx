import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

function GroceryProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = { name: 'Fresh Milk 1L', price: 60, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', description: 'Fresh full cream milk', cashback: 5 };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><Heart className="w-5 h-5" /></button>
        </div>
      </div>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="px-4 py-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">{product.name}</h1>
          <p className="text-3xl font-bold text-rez-navy dark:text-white">₹{product.price}</p>
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mt-1">{product.cashback}% Cashback</p>
        </div>
        <div><h3 className="font-bold text-rez-navy dark:text-white mb-2">Description</h3><p className="text-sm text-rez-gray-700 dark:text-gray-300">{product.description}</p></div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700 p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center border-2 border-rez-gray-300 dark:border-dark-600 rounded-xl">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 font-bold">-</button>
            <span className="px-4 py-2 font-bold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 font-bold">+</button>
          </div>
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroceryProductDetail;
