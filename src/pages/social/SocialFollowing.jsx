import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  UserMinus,
  X
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialFollowing = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [followingUsers, setFollowingUsers] = useState(new Set([1, 2, 3, 4, 5, 6]));

  // Mock following data - replace with API call
  const following = [
    {
      id: 1,
      name: 'Tech Deals Hub',
      username: '@techdealshub',
      avatar: '💻',
      bio: 'Best tech deals & gadget reviews',
      followers: 45200
    },
    {
      id: 2,
      name: 'Fashion Finds',
      username: '@fashionfinds',
      avatar: '👗',
      bio: 'Latest fashion trends & deals',
      followers: 32100
    },
    {
      id: 3,
      name: 'Food Explorer',
      username: '@foodexplorer',
      avatar: '🍕',
      bio: 'Restaurant reviews & food deals',
      followers: 28500
    },
    {
      id: 4,
      name: 'Smart Shopper',
      username: '@smartshopper',
      avatar: '🛍️',
      bio: 'Money saving tips & tricks',
      followers: 51800
    },
    {
      id: 5,
      name: 'Fitness Guru',
      username: '@fitnessguru',
      avatar: '💪',
      bio: 'Fitness gear & nutrition deals',
      followers: 19400
    },
    {
      id: 6,
      name: 'Home Decor',
      username: '@homedecor',
      avatar: '🏠',
      bio: 'Home improvement & decor deals',
      followers: 24700
    }
  ];

  const filteredFollowing = following.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUnfollow = (userId) => {
    // API: DELETE /api/social/users/{userId}/follow
    // TODO: Implement unfollow with backend

    setFollowingUsers(prev => {
      const newSet = new Set(prev);
      newSet.delete(userId);
      return newSet;
    });
  };

  const isOwnProfile = !userId || userId === 'me';

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Following</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              {followingUsers.size.toLocaleString()} accounts
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search following..."
              className="w-full pl-12 pr-10 py-3 rounded-rez-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-rez-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-rez-gray-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {filteredFollowing.length > 0 ? (
          filteredFollowing.map((user) => (
            <div
              key={user.id}
              className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => navigate(`/social/profile/${user.id}`)}
                  className="shrink-0"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                    {user.avatar}
                  </div>
                </button>

                <div className="flex-1 min-w-0">
                  <button
                    onClick={() => navigate(`/social/profile/${user.id}`)}
                    className="text-left w-full"
                  >
                    <h3 className="text-body font-semibold text-rez-navy dark:text-white truncate mb-1">
                      {user.name}
                    </h3>
                    <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-1">
                      {user.username}
                    </p>
                    {user.bio && (
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400 line-clamp-1 mb-1">
                        {user.bio}
                      </p>
                    )}
                    <p className="text-caption text-rez-gray-500 dark:text-gray-500">
                      {user.followers.toLocaleString()} followers
                    </p>
                  </button>
                </div>

                <div className="shrink-0">
                  {isOwnProfile && followingUsers.has(user.id) && (
                    <button
                      onClick={() => handleUnfollow(user.id)}
                      className="px-4 py-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white text-body-sm font-semibold hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-all"
                    >
                      Following
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {searchQuery ? 'No results found' : 'Not following anyone yet'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {searchQuery
                ? 'Try searching with a different name'
                : 'Start following users to see their posts!'}
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialFollowing;
