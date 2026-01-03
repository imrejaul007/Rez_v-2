import React, { useState } from 'react';
import { Search, Filter, Clock, Users, Trophy, TrendingUp } from 'lucide-react';

// Contests Browse: Browse All Contests
// Backend API: GET /api/growth/contests/browse
// Backend API: GET /api/growth/contests/filter

const ContestsBrowse = () => {
  const [filter, setFilter] = useState('all');

  const contests = [
    { id: 1, title: 'Grand Shopping Spree', prize: '₹50K', icon: '🛍️', deadline: '5 days', participants: '12.5K', type: 'lucky-draw' },
    { id: 2, title: 'Gadget Giveaway', prize: '₹25K', icon: '📱', deadline: '3 days', participants: '8.9K', type: 'instant' },
    { id: 3, title: 'Food Fest Winner', prize: '₹10K', icon: '🍔', deadline: '7 days', participants: '6.7K', type: 'quiz' },
    { id: 4, title: 'Travel Package', prize: '₹30K', icon: '✈️', deadline: '10 days', participants: '5.2K', type: 'photo' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Browse Contests</h1>

        {/* Search */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search contests..." className="flex-1 bg-transparent outline-none" />
          </div>
          <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['all', 'lucky-draw', 'quiz', 'photo', 'instant'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm capitalize whitespace-nowrap ${
                filter === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Contests Grid */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-2 gap-3">
          {contests.map((contest) => (
            <div key={contest.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-5xl">
                {contest.icon}
              </div>
              <div className="p-3">
                <h3 className="font-bold text-gray-800 text-sm mb-2">{contest.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {contest.deadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {contest.participants}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-600">{contest.prize}</span>
                  <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    Enter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestsBrowse;
