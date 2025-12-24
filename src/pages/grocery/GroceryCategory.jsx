import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function GroceryCategory() {
  const navigate = useNavigate();
  const { category } = useParams();
  const products = [
    { id: 1, name: `${category} Item 1`, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400', price: 120 },
    { id: 2, name: `${category} Item 2`, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', price: 150 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button>
          <h1 className="text-h3 font-poppins text-rez-navy dark:text-white capitalize">{category}</h1>
        </div>
      </div>
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {products.map(p => (
          <div key={p.id} onClick={() => navigate(`/grocery/product/${p.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 cursor-pointer">
            <img src={p.image} alt={p.name} className="w-full h-32 object-cover" />
            <div className="p-3"><h3 className="font-bold text-sm">{p.name}</h3><p className="text-lg font-bold">₹{p.price}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryCategory;
