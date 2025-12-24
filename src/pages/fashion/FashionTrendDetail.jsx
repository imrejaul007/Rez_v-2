import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Heart } from 'lucide-react';

function FashionTrendDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Oversized Blazer - Black', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: 2999, likes: 234 },
    { id: 2, name: 'Oversized Blazer - Beige', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400', price: 2999, likes: 189 },
    { id: 3, name: 'Oversized Blazer - Navy', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', price: 3299, likes: 156 },
    { id: 4, name: 'Oversized Blazer - White', image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', price: 2799, likes: 145 }
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
              <h1 className="text-h3 font-poppins text-white">Trending Item</h1>
            </div>
            <p className="text-xs text-white/80">Shop the trend</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {products.map(product => (
          <div key={product.id} onClick={() => navigate(`/fashion/product/${product.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all cursor-pointer">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-rez-gray-600" />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-lg font-bold text-rez-navy dark:text-white mb-1">₹{product.price.toLocaleString()}</p>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-pink-500" />
                <span className="text-xs text-rez-gray-600 dark:text-gray-400">{product.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionTrendDetail;
