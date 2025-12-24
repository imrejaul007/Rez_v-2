import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

function GroceryProducts() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'Fresh Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', price: 150 },
    { id: 2, name: 'Fresh Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400', price: 200 },
    { id: 3, name: 'Dairy Products', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', price: 180 },
    { id: 4, name: 'Bakery Items', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', price: 120 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">All Products</h1>
        </div>
      </div>
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {products.map(p => (
          <div key={p.id} onClick={() => navigate(`/grocery/product/${p.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 cursor-pointer">
            <img src={p.image} alt={p.name} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-1">{p.name}</h3>
              <p className="text-lg font-bold text-rez-navy dark:text-white mb-2">₹{p.price}</p>
              <button className="w-full py-1 rounded-lg bg-emerald-500 text-white text-sm font-bold flex items-center justify-center gap-1">
                <ShoppingCart className="w-4 h-4" />Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryProducts;
