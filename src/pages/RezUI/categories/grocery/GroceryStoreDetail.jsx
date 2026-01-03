import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock } from 'lucide-react';

function GroceryStoreDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const store = { name: 'FreshMart', rating: 4.7, distance: 0.5, hours: '7 AM - 11 PM', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400' };
  const products = [
    { id: 1, name: 'Fresh Milk', price: 60, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200' },
    { id: 2, name: 'Bread', price: 40, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4"><button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button></div>
      </div>
      <img src={store.image} alt={store.name} className="w-full h-48 object-cover" />
      <div className="px-4 py-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">{store.name}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{store.rating}</span></div>
            <div className="flex items-center gap-1"><MapPin className="w-4 h-4 text-blue-500" /><span className="text-sm text-blue-600 dark:text-blue-400">{store.distance} km</span></div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-emerald-500" /><span className="text-sm text-emerald-600 dark:text-emerald-400">{store.hours}</span></div>
          </div>
        </div>
        <div><h3 className="font-bold text-rez-navy dark:text-white mb-2">Available Products</h3>
          <div className="grid grid-cols-2 gap-3">
            {products.map(p => (
              <div key={p.id} onClick={() => navigate(`/grocery/product/${p.id}`)} className="bg-white dark:bg-dark-800 rounded-xl p-3 border border-rez-gray-200 dark:border-dark-700 cursor-pointer">
                <img src={p.image} alt={p.name} className="w-full h-20 object-cover rounded-lg mb-2" />
                <h4 className="font-semibold text-sm">{p.name}</h4><p className="text-lg font-bold">₹{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroceryStoreDetail;
