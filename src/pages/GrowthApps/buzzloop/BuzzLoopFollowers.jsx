import React, { useState } from 'react';
import { Users, UserPlus, UserMinus, Search, Filter } from 'lucide-react';

// BuzzLoop Followers: Followers List
// Backend API: GET /api/growth/buzzloop/followers
// Backend API: POST /api/growth/buzzloop/follow/:userId

const BuzzLoopFollowers = () => {
  const followers = [
    { id: 1, username: '@techguru', name: 'Tech Guru', avatar: '👨‍💻', followers: '45K', isFollowing: true },
    { id: 2, username: '@foodlover', name: 'Food Lover', avatar: '👨‍🍳', followers: '32K', isFollowing: false },
    { id: 3, username: '@fashionista', name: 'Fashionista', avatar: '👗', followers: '28K', isFollowing: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Followers</h1>
        <div className="flex gap-2">
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search followers..." className="flex-1 bg-transparent outline-none" />
          </div>
          <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {followers.map((follower) => (
          <div key={follower.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
              {follower.avatar}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{follower.name}</h3>
              <p className="text-sm text-gray-500">{follower.username} • {follower.followers} followers</p>
            </div>
            <button className={`px-4 py-2 rounded-lg font-medium text-sm ${
              follower.isFollowing
                ? 'bg-gray-200 text-gray-800'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
            }`}>
              {follower.isFollowing ? 'Following' : 'Follow Back'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopFollowers;
