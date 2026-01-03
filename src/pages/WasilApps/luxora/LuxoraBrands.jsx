import React from 'react';
import { Search, Star } from 'lucide-react';

// Luxora Brands: Luxury Shopping
// Backend API: GET /api/wasil/luxora/brands

const LuxoraBrands = () => {
  const brands = [
    { id: 1, name: 'Gucci', category: 'Fashion', icon: '👜', rating: 4.9, products: 234 },
    { id: 2, name: 'Rolex', category: 'Watches', icon: '⌚', rating: 5.0, products: 89 },
    { id: 3, name: 'Louis Vuitton', category: 'Bags', icon: '💼', rating: 4.8, products: 156 },
    { id: 4, name: 'Cartier', category: 'Jewelry', icon: '💎', rating: 4.9, products: 112 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Luxury Brands</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search brands..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-5xl">{brand.icon}</span>
            <h3 className="font-bold text-gray-800 mt-3">{brand.name}</h3>
            <p className="text-xs text-gray-500">{brand.category}</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{brand.rating}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{brand.products} products</p>
            <button className="w-full mt-3 bg-amber-600 text-white py-2 rounded-lg text-sm">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxoraBrands;
