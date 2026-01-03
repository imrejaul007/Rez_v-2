import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  UserPlus,
  UserMinus,
  UserCheck,
  X
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialFollowers = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [followingUsers, setFollowingUsers] = useState(new Set([2, 4, 6]));

  // Mock followers data - replace with API call
  const followers = [
    {
      id: 1,
      name: 'John Doe',
      username: '@johnd',
      avatar: '👨‍💼',
      bio: 'Tech enthusiast & deal hunter',
      isFollowingBack: true
    },
    {
      id: 2,
      name: 'Emily Chen',
      username: '@emilyc',
      avatar: '👩‍🎨',
      bio: 'Fashion blogger | Shopping expert',
      isFollowingBack: true
    },
    {
      id: 3,
      name: 'Mike Wilson',
      username: '@mikew',
      avatar: '👨‍🚀',
      bio: 'Gadget reviewer & tech deals',
      isFollowingBack: false
    },
    {
      id: 4,
      name: 'Sarah Kim',
      username: '@sarahk',
      avatar: '👩‍💻',
      bio: 'Couponing queen 👑',
      isFollowingBack: true
    },
    {
      id: 5,
      name: 'David Brown',
      username: '@davidb',
      avatar: '👨‍🔬',
      bio: 'Smart shopper | Money saver',
      isFollowingBack: false
    },
    {
      id: 6,
      name: 'Lisa Taylor',
      username: '@lisat',
      avatar: '👩‍🏫',
      bio: 'Deals & steals finder',
      isFollowingBack: true
    }
  ];

  const filteredFollowers = followers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFollowToggle = (userId) => {
    // API: POST /api/social/users/{userId}/follow or /unfollow
    // TODO: Implement follow/unfollow with backend

    setFollowingUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const handleRemoveFollower = (followerId) => {
    // API: DELETE /api/social/followers/{followerId}
    // TODO: Implement remove follower with backend
    console.log('Remove follower:', followerId);
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
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Followers</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              {followers.length.toLocaleString()} {followers.length === 1 ? 'follower' : 'followers'}
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
              placeholder="Search followers..."
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
        {filteredFollowers.length > 0 ? (
          filteredFollowers.map((user) => (
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
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white truncate">
                        {user.name}
                      </h3>
                      {user.isFollowingBack && (
                        <div className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10">
                          <UserCheck className="w-3 h-3 text-blue-500" />
                          <span className="text-caption text-blue-600 dark:text-blue-400">Follows you</span>
                        </div>
                      )}
                    </div>
                    <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-1">
                      {user.username}
                    </p>
                    {user.bio && (
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400 line-clamp-1">
                        {user.bio}
                      </p>
                    )}
                  </button>
                </div>

                <div className="shrink-0">
                  {isOwnProfile ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleFollowToggle(user.id)}
                        className={`px-4 py-2 rounded-rez-lg text-body-sm font-semibold transition-all ${
                          followingUsers.has(user.id)
                            ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-rez-gray-200 dark:hover:bg-white/20'
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        }`}
                      >
                        {followingUsers.has(user.id) ? 'Following' : 'Follow'}
                      </button>
                      <button
                        onClick={() => handleRemoveFollower(user.id)}
                        className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Remove follower"
                      >
                        <X className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleFollowToggle(user.id)}
                      className={`px-4 py-2 rounded-rez-lg text-body-sm font-semibold transition-all ${
                        followingUsers.has(user.id)
                          ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-rez-gray-200 dark:hover:bg-white/20'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      }`}
                    >
                      {followingUsers.has(user.id) ? 'Following' : 'Follow'}
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
              {searchQuery ? 'No followers found' : 'No followers yet'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {searchQuery
                ? 'Try searching with a different name'
                : 'Share great content to attract followers!'}
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialFollowers;
