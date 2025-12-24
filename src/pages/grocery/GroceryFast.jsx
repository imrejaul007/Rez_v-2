import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

function GroceryFast() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'Fresh Milk', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200', price: 60, delivery: '10 mins' },
    { id: 2, name: 'Brown Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200', price: 40, delivery: '10 mins' },
    { id: 3, name: 'Fresh Eggs', image: 'https://images.unsplash.com/photo-1582722872445-44dc1f3e3ad8?w=200', price: 80, delivery: '15 mins' },
    { id: 4, name: 'Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200', price: 150, delivery: '15 mins' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Zap className="w-5 h-5 text-white fill-white" /><h1 className="text-h3 font-poppins text-white">Fast Delivery</h1></div><p className="text-xs text-white/80">Get it in 10-15 mins</p></div>
        </div>
      </div>
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {products.map(p => (
          <div key={p.id} onClick={() => navigate(`/grocery/product/${p.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-3 border border-rez-gray-200 dark:border-dark-700 cursor-pointer">
            <img src={p.image} alt={p.name} className="w-full h-24 object-cover rounded-xl mb-2" />
            <h3 className="font-bold text-sm text-rez-navy dark:text-white">{p.name}</h3>
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹{p.price}</p>
            <div className="flex items-center gap-1 mt-1"><Zap className="w-3 h-3 text-orange-500" /><span className="text-xs text-orange-600 dark:text-orange-400">{p.delivery}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryFast;
