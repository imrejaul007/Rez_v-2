import React, { useState } from 'react';
import { Search, Hash, Music, User, TrendingUp, Clock } from 'lucide-react';

// BuzzLoop Search: Search Videos, Users, Hashtags
// Backend API: POST /api/growth/buzzloop/search
// Backend API: GET /api/growth/buzzloop/search/trending

const BuzzLoopSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('top');

  const trendingSearches = [
    { query: '#viral', icon: '🔥', type: 'hashtag' },
    { query: 'food hacks', icon: '🍔', type: 'keyword' },
    { query: '@techguru', icon: '👨‍💻', type: 'user' },
    { query: 'dance challenge', icon: '💃', type: 'keyword' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos, users, sounds..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto">
          {['top', 'videos', 'users', 'sounds', 'hashtags'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm capitalize whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-pink-500" />
          Trending Searches
        </h2>

        <div className="space-y-2">
          {trendingSearches.map((item, idx) => (
            <button key={idx} className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 active:bg-gray-50">
              <div className="text-2xl">{item.icon}</div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-800">{item.query}</p>
                <p className="text-xs text-gray-500 capitalize">{item.type}</p>
              </div>
              <Clock className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopSearch;
