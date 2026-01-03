import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Heart, ShoppingCart } from 'lucide-react';

function FashionTrending() {
  const navigate = useNavigate();

  const trending = [
    { id: 1, name: 'Oversized Blazers', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: 2999, trending: '#1', likes: 1234 },
    { id: 2, name: 'Wide Leg Jeans', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400', price: 1899, trending: '#2', likes: 987 },
    { id: 3, name: 'Crop Tops', image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400', price: 899, trending: '#3', likes: 856 },
    { id: 4, name: 'Midi Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', price: 2499, trending: '#4', likes: 723 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Trending Now</h1>
            </div>
            <p className="text-xs text-white/80">What's hot this week</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {trending.map(item => (
          <div key={item.id} onClick={() => navigate(`/fashion/trend/${item.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all cursor-pointer">
            <div className="flex">
              <div className="relative w-32">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
                <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
                  <span className="text-xs font-bold text-white">{item.trending}</span>
                </div>
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-bold text-rez-navy dark:text-white mb-2">{item.name}</h3>
                <p className="text-lg font-bold text-rez-navy dark:text-white mb-2">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="text-xs text-rez-gray-600 dark:text-gray-400">{item.likes}</span>
                  </div>
                  <button className="ml-auto px-3 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center gap-1">
                    <ShoppingCart className="w-4 h-4" />
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionTrending;
