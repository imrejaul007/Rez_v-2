import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Plus,
  Users,
  Lock,
  Globe,
  TrendingUp,
  Star,
  X
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialGroups = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock groups data - replace with API call
  const myGroups = [
    {
      id: 1,
      name: 'Deal Hunters United',
      description: 'Best deals & discounts community',
      icon: '🎯',
      members: 5234,
      privacy: 'public',
      unreadPosts: 12,
      isJoined: true
    },
    {
      id: 2,
      name: 'Tech Deals India',
      description: 'Electronics & gadgets deals',
      icon: '💻',
      members: 3421,
      privacy: 'private',
      unreadPosts: 5,
      isJoined: true
    },
    {
      id: 3,
      name: 'Fashion Finds',
      description: 'Latest fashion trends & deals',
      icon: '👗',
      members: 2156,
      privacy: 'public',
      unreadPosts: 8,
      isJoined: true
    }
  ];

  const discoverGroups = [
    {
      id: 4,
      name: 'Smart Shopping Tips',
      description: 'Learn how to save money while shopping',
      icon: '🛍️',
      members: 8921,
      privacy: 'public',
      trending: true,
      isJoined: false
    },
    {
      id: 5,
      name: 'Grocery Deals',
      description: 'Daily grocery discounts & offers',
      icon: '🛒',
      members: 4567,
      privacy: 'public',
      featured: true,
      isJoined: false
    },
    {
      id: 6,
      name: 'Travel Deals',
      description: 'Best travel offers & packages',
      icon: '✈️',
      members: 6234,
      privacy: 'private',
      isJoined: false
    },
    {
      id: 7,
      name: 'Home & Living',
      description: 'Home decor & furniture deals',
      icon: '🏠',
      members: 3890,
      privacy: 'public',
      isJoined: false
    },
    {
      id: 8,
      name: 'Food & Dining',
      description: 'Restaurant offers & food deals',
      icon: '🍕',
      members: 5678,
      privacy: 'public',
      trending: true,
      isJoined: false
    }
  ];

  const allGroups = activeTab === 'my-groups' ? myGroups : discoverGroups;

  const filteredGroups = allGroups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleJoinGroup = (groupId) => {
    // API: POST /api/social/groups/{groupId}/join
    // TODO: Implement join group with backend
    console.log('Join group:', groupId);
  };

  const handleLeaveGroup = (groupId) => {
    // API: DELETE /api/social/groups/{groupId}/leave
    // TODO: Implement leave group with backend
    console.log('Leave group:', groupId);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Groups</h1>
          </div>
          <button
            onClick={() => navigate('/social/groups/create')}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4">
          <button
            onClick={() => setActiveTab('my-groups')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'my-groups'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            My Groups ({myGroups.length})
          </button>
          <button
            onClick={() => setActiveTab('discover')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'discover'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Discover
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search groups..."
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
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <div
              key={group.id}
              className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => navigate(`/social/groups/${group.id}`)}
                  className="shrink-0"
                >
                  <div className="w-14 h-14 rounded-rez-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl">
                    {group.icon}
                  </div>
                </button>

                <div className="flex-1 min-w-0">
                  <button
                    onClick={() => navigate(`/social/groups/${group.id}`)}
                    className="text-left w-full mb-2"
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white truncate flex-1">
                        {group.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        {group.trending && (
                          <div className="px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-orange-500" />
                            <span className="text-caption text-orange-600 dark:text-orange-400">Trending</span>
                          </div>
                        )}
                        {group.featured && (
                          <div className="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-500" />
                            <span className="text-caption text-amber-600 dark:text-amber-400">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                      {group.description}
                    </p>
                    <div className="flex items-center gap-3 text-caption text-rez-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {group.members.toLocaleString()} members
                      </div>
                      <div className="flex items-center gap-1">
                        {group.privacy === 'private' ? (
                          <>
                            <Lock className="w-4 h-4" />
                            Private
                          </>
                        ) : (
                          <>
                            <Globe className="w-4 h-4" />
                            Public
                          </>
                        )}
                      </div>
                    </div>
                  </button>

                  {group.isJoined && group.unreadPosts > 0 && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10">
                      <span className="text-caption font-medium text-blue-600 dark:text-blue-400">
                        {group.unreadPosts} new posts
                      </span>
                    </div>
                  )}
                </div>

                <div className="shrink-0">
                  {group.isJoined ? (
                    <button
                      onClick={() => handleLeaveGroup(group.id)}
                      className="px-4 py-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white text-body-sm font-semibold hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-all"
                    >
                      Joined
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoinGroup(group.id)}
                      className="px-4 py-2 rounded-rez-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-body-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
                    >
                      Join
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <Users className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {searchQuery ? 'No groups found' : activeTab === 'my-groups' ? 'No groups joined yet' : 'No groups available'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-6">
              {searchQuery
                ? 'Try searching with different keywords'
                : activeTab === 'my-groups'
                  ? 'Join groups to connect with like-minded shoppers!'
                  : 'Check back later for new groups'}
            </p>
            {!searchQuery && activeTab === 'my-groups' && (
              <button
                onClick={() => setActiveTab('discover')}
                className="px-6 py-3 rounded-rez-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Discover Groups
              </button>
            )}
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialGroups;
