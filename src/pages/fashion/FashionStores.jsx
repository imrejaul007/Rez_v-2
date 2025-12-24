import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Store, Star, MapPin } from 'lucide-react';

function FashionStores() {
  const navigate = useNavigate();

  const stores = [
    { id: 1, name: 'StyleHub Fashion', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400', rating: 4.8, distance: 1.2, offers: '20% off' },
    { id: 2, name: 'Urban Wardrobe', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400', rating: 4.9, distance: 0.8, offers: 'Buy 2 Get 1' },
    { id: 3, name: 'Chic Boutique', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', rating: 4.7, distance: 2.1, offers: '30% off' },
    { id: 4, name: 'Trendy Closet', image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400', rating: 4.6, distance: 1.5, offers: 'Flash Sale' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-white" />
              <h1 className="text-h3 font-poppins text-white">Fashion Stores</h1>
            </div>
            <p className="text-xs text-white/80">Best clothing stores near you</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {stores.map(store => (
          <div key={store.id} onClick={() => navigate(`/store/${store.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 transition-all cursor-pointer">
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
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 text-center">{store.offers}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionStores;
