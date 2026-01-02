import React from 'react';
import { Search } from 'lucide-react';

// Essentia+ Categories: Premium Essentials
// Backend API: GET /api/wasil/essentia/categories

const EssentiaCategories = () => {
  const categories = [
    { id: 1, name: 'Organic Groceries', icon: '🥬', count: 245 },
    { id: 2, name: 'Health Supplements', icon: '💊', count: 189 },
    { id: 3, name: 'Natural Beauty', icon: '🌿', count: 167 },
    { id: 4, name: 'Baby Care', icon: '👶', count: 134 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Categories</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search products..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-5xl">{cat.icon}</span>
            <h3 className="font-bold text-gray-800 mt-3">{cat.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{cat.count} products</p>
            <button className="w-full mt-3 bg-emerald-500 text-white py-2 rounded-lg text-sm">Browse</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentiaCategories;
