import React from 'react';
import { Search, Crown } from 'lucide-react';

// Royale+ Categories: Premium Memberships
// Backend API: GET /api/wasil/royale/categories

const RoyaleCategories = () => {
  const categories = [
    { id: 1, name: 'Golf Club', icon: '⛳', members: '2,340', price: '₹50,000/year' },
    { id: 2, name: 'Country Club', icon: '🏌️', members: '1,890', price: '₹75,000/year' },
    { id: 3, name: 'Yacht Club', icon: '⛵', members: '456', price: '₹2,00,000/year' },
    { id: 4, name: 'Wine Club', icon: '🍷', members: '890', price: '₹30,000/year' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-yellow-600 to-amber-700 px-4 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Royale+ Clubs</h1>
        </div>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search clubs..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl flex items-center justify-center text-4xl">
                {cat.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{cat.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.members} members</p>
                <p className="text-amber-700 font-bold mt-2">{cat.price}</p>
              </div>
              <button className="self-center bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoyaleCategories;
