import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Store, Star, MapPin, Clock } from 'lucide-react';

function GroceryStores() {
  const navigate = useNavigate();

  const stores = [
    { id: 1, name: 'FreshMart', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400', rating: 4.7, distance: 0.5, delivery: '15 mins', open: true },
    { id: 2, name: 'Organic Store', image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=400', rating: 4.9, distance: 1.2, delivery: '25 mins', open: true },
    { id: 3, name: 'Daily Needs', image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400', rating: 4.6, distance: 0.8, delivery: '20 mins', open: false },
    { id: 4, name: 'Super Bazaar', image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400', rating: 4.8, distance: 1.5, delivery: '30 mins', open: true }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-white" />
              <h1 className="text-h3 font-poppins text-white">Grocery Stores</h1>
            </div>
            <p className="text-xs text-white/80">Fresh groceries delivered</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {stores.map(store => (
          <div key={store.id} onClick={() => navigate(`/grocery/store/${store.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 transition-all cursor-pointer">
            <img src={store.image} alt={store.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-rez-navy dark:text-white mb-2">{store.name}</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold">{store.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">{store.distance} km</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className={`text-sm font-medium ${store.open ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {store.open ? store.delivery : 'Closed'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryStores;
