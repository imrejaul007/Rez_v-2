import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  TrendingUp,
  Hash,
  Users,
  MapPin,
  X,
  Clock
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [recentSearches, setRecentSearches] = useState([
    'Tech deals',
    'Fashion trends',
    '#SaveMoney',
    '@techdeals'
  ]);

  // Mock trending data
  const trending = [
    { type: 'hashtag', text: '#WeekendDeals', posts: 1234 },
    { type: 'hashtag', text: '#TechSale', posts: 892 },
    { type: 'hashtag', text: '#FashionFinds', posts: 567 },
    { type: 'topic', text: 'Black Friday', posts: 2341 },
    { type: 'topic', text: 'Electronics Sale', posts: 1567 }
  ];

  // Mock search results
  const searchResults = {
    users: [
      {
        id: 1,
        name: 'Tech Deals Hub',
        username: '@techdealshub',
        avatar: '💻',
        followers: 45200,
        bio: 'Best tech deals & reviews',
        verified: true
      },
      {
        id: 2,
        name: 'Fashion Finds',
        username: '@fashionfinds',
        avatar: '👗',
        followers: 32100,
        bio: 'Latest fashion trends',
        verified: false
      }
    ],
    posts: [
      {
        id: 1,
        author: { name: 'Mike Wilson', avatar: '👨‍🚀' },
        content: '🔥 Amazing deal on smartphones! 50% off',
        likes: 234,
        timestamp: '2h ago'
      },
      {
        id: 2,
        author: { name: 'Emily Chen', avatar: '👩‍🎨' },
        content: 'Best fashion deals of the season!',
        likes: 189,
        timestamp: '5h ago'
      }
    ],
    hashtags: [
      { tag: '#WeekendDeals', posts: 1234 },
      { tag: '#TechSale', posts: 892 },
      { tag: '#FashionFinds', posts: 567 }
    ],
    places: [
      {
        id: 1,
        name: 'Phoenix Mall',
        location: 'Whitefield, Bangalore',
        icon: '🏢',
        posts: 567
      },
      {
        id: 2,
        name: 'MG Road Shopping',
        location: 'MG Road, Bangalore',
        icon: '🛍️',
        posts: 432
      }
    ]
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Add to recent searches
    if (query && !recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches.slice(0, 4)]);
    }
    // API: GET /api/social/search?q={query}&type={activeTab}
    // TODO: Implement search with backend
  };

  const clearRecentSearch = (search) => {
    setRecentSearches(recentSearches.filter(s => s !== search));
  };

  const clearAllRecent = () => {
    setRecentSearches([]);
  };

  const getFilteredResults = () => {
    if (!searchQuery) return null;

    switch (activeTab) {
      case 'users':
        return searchResults.users;
      case 'posts':
        return searchResults.posts;
      case 'hashtags':
        return searchResults.hashtags;
      case 'places':
        return searchResults.places;
      default:
        return {
          users: searchResults.users.slice(0, 2),
          posts: searchResults.posts.slice(0, 2),
          hashtags: searchResults.hashtags.slice(0, 3)
        };
    }
  };

  const results = getFilteredResults();

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

          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              placeholder="Search users, posts, hashtags..."
              autoFocus
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

        {/* Tabs */}
        {searchQuery && (
          <div className="flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide">
            {['all', 'users', 'posts', 'hashtags', 'places'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="px-4 py-4">
        {!searchQuery ? (
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Recent Searches</h3>
                  <button
                    onClick={clearAllRecent}
                    className="text-body-sm font-medium text-blue-500 hover:text-blue-600"
                  >
                    Clear All
                  </button>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10"
                    >
                      <Clock className="w-5 h-5 text-rez-gray-400" />
                      <button
                        onClick={() => handleSearch(search)}
                        className="flex-1 text-left text-body text-rez-navy dark:text-white"
                      >
                        {search}
                      </button>
                      <button
                        onClick={() => clearRecentSearch(search)}
                        className="p-1 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-rez-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trending */}
            <div>
              <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Trending Now</h3>
              <div className="space-y-2">
                {trending.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(item.text)}
                    className="w-full p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-500/10">
                        {item.type === 'hashtag' ? (
                          <Hash className="w-5 h-5 text-orange-500" />
                        ) : (
                          <TrendingUp className="w-5 h-5 text-orange-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-body font-semibold text-rez-navy dark:text-white mb-1">
                          {item.text}
                        </h4>
                        <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                          {item.posts.toLocaleString()} posts
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Search Results */}
            {activeTab === 'all' && results && (
              <div className="space-y-6">
                {/* Users */}
                {results.users && results.users.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Users</h3>
                      <button
                        onClick={() => setActiveTab('users')}
                        className="text-body-sm font-medium text-blue-500 hover:text-blue-600"
                      >
                        View all
                      </button>
                    </div>
                    <div className="space-y-2">
                      {results.users.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => navigate(`/social/profile/${user.id}`)}
                          className="w-full p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                              {user.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="text-body font-semibold text-rez-navy dark:text-white">
                                  {user.name}
                                </h4>
                                {user.verified && (
                                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                  </div>
                                )}
                              </div>
                              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                                {user.username} • {user.followers.toLocaleString()} followers
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hashtags */}
                {results.hashtags && results.hashtags.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Hashtags</h3>
                      <button
                        onClick={() => setActiveTab('hashtags')}
                        className="text-body-sm font-medium text-blue-500 hover:text-blue-600"
                      >
                        View all
                      </button>
                    </div>
                    <div className="space-y-2">
                      {results.hashtags.map((hashtag, index) => (
                        <button
                          key={index}
                          onClick={() => navigate(`/social/hashtag/${hashtag.tag.slice(1)}`)}
                          className="w-full p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10">
                              <Hash className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-body font-semibold text-rez-navy dark:text-white">
                                {hashtag.tag}
                              </h4>
                              <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                                {hashtag.posts.toLocaleString()} posts
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Single Category Results */}
            {activeTab !== 'all' && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
                <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
                  No {activeTab} found
                </h3>
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                  Try searching with different keywords
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialSearch;
