import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Star, Heart, TrendingUp } from 'lucide-react';

function BeautyProducts() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'haircare', label: 'Haircare' },
    { id: 'fragrance', label: 'Fragrance' }
  ];

  const products = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      brand: 'GlowLab',
      category: 'skincare',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
      price: 1299,
      rezPrice: 999,
      rating: 4.8,
      reviews: 567,
      cashback: 15,
      coins: 120,
      trending: true
    },
    {
      id: 2,
      name: 'Matte Lipstick - Red',
      brand: 'ColorPop',
      category: 'makeup',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',
      price: 499,
      rezPrice: 349,
      rating: 4.9,
      reviews: 892,
      cashback: 10,
      coins: 50,
      trending: true
    },
    {
      id: 3,
      name: 'Argan Oil Shampoo',
      brand: 'HairCare Pro',
      category: 'haircare',
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400',
      price: 799,
      rezPrice: 639,
      rating: 4.7,
      reviews: 423,
      cashback: 12,
      coins: 80,
      trending: false
    },
    {
      id: 4,
      name: 'Perfume - Floral',
      brand: 'Essence',
      category: 'fragrance',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
      price: 2499,
      rezPrice: 1999,
      rating: 4.6,
      reviews: 234,
      cashback: 18,
      coins: 200,
      trending: false
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-white">Beauty Products</h1>
              <p className="text-xs text-white/80">Curated for you</p>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
          </div>
        </div>
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.id ? 'bg-white text-pink-600' : 'bg-white/20 text-white hover:bg-white/30'}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map(product => (
            <div key={product.id} onClick={() => navigate(`/beauty/product/${product.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all active:scale-98 cursor-pointer">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                {product.trending && (
                  <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">Trending</span>
                  </div>
                )}
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all active:scale-95">
                  <Heart className="w-4 h-4 text-rez-gray-600" />
                </button>
              </div>
              <div className="p-3">
                <p className="text-xs text-pink-600 dark:text-pink-400 font-medium mb-1">{product.brand}</p>
                <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">{product.rating} ({product.reviews})</span>
                </div>
                <div className="mb-2">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{product.rezPrice}</span>
                  <span className="text-xs text-rez-gray-500 dark:text-gray-400 line-through ml-1">₹{product.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="px-2 py-1 rounded bg-emerald-500/20"><p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{product.cashback}% back</p></div>
                  <div className="px-2 py-1 rounded bg-amber-500/20"><p className="text-xs font-bold text-amber-600 dark:text-amber-400">+{product.coins}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeautyProducts;
