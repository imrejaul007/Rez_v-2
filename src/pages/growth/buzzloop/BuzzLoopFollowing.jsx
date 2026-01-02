import React from 'react';
import { UserCheck, Search, Filter } from 'lucide-react';

// BuzzLoop Following: Following List
// Backend API: GET /api/growth/buzzloop/following
// Backend API: POST /api/growth/buzzloop/unfollow/:userId

const BuzzLoopFollowing = () => {
  const following = [
    { id: 1, username: '@techguru', name: 'Tech Guru', avatar: '👨‍💻', videos: '125' },
    { id: 2, username: '@foodlover', name: 'Food Lover', avatar: '👨‍🍳', videos: '89' },
    { id: 3, username: '@fashionista', name: 'Fashionista', avatar: '👗', videos: '156' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Following</h1>
        <div className="flex gap-2">
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search..." className="flex-1 bg-transparent outline-none" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {following.map((user) => (
          <div key={user.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
              {user.avatar}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.username} • {user.videos} videos</p>
            </div>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm">
              Following
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopFollowing;
