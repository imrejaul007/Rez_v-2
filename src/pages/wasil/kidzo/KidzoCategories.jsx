import React from 'react';
import { Search } from 'lucide-react';

// Kidzo Categories: Kids Activities & Classes
// Backend API: GET /api/wasil/kidzo/categories

const KidzoCategories = () => {
  const categories = [
    { id: 1, name: 'Arts & Crafts', icon: '🎨', count: 45 },
    { id: 2, name: 'Dance Classes', icon: '💃', count: 38 },
    { id: 3, name: 'Sports', icon: '⚽', count: 52 },
    { id: 4, name: 'Music', icon: '🎵', count: 41 },
    { id: 5, name: 'Coding', icon: '💻', count: 29 },
    { id: 6, name: 'Science Labs', icon: '🔬', count: 33 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Kids Activities</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search activities..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl p-4 shadow-sm text-center">
            <span className="text-5xl">{cat.icon}</span>
            <h3 className="font-bold text-gray-800 mt-3">{cat.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{cat.count} classes</p>
            <button className="w-full mt-3 bg-yellow-400 text-white py-2 rounded-lg text-sm font-medium">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidzoCategories;
