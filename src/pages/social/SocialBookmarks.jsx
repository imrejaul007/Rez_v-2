import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bookmark,
  Grid,
  List,
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Trash2,
  Filter
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialBookmarks = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');

  // Mock saved posts - replace with API call
  const savedPosts = [
    {
      id: 1,
      author: {
        id: 101,
        name: 'Tech Deals Hub',
        username: '@techdealshub',
        avatar: '💻'
      },
      content: '🔥 Amazing deal on smartphones! Samsung Galaxy S24 at 40% off. Limited time offer!',
      image: '📱',
      likes: 1234,
      comments: 89,
      savedAt: '2 days ago',
      category: 'tech'
    },
    {
      id: 2,
      author: {
        id: 102,
        name: 'Fashion Finds',
        username: '@fashionfinds',
        avatar: '👗'
      },
      content: 'End of season sale! Designer brands at unbelievable prices. Don\'t miss out! 🛍️',
      image: '👠',
      likes: 892,
      comments: 45,
      savedAt: '3 days ago',
      category: 'fashion'
    },
    {
      id: 3,
      author: {
        id: 103,
        name: 'Food Explorer',
        username: '@foodexplorer',
        avatar: '🍕'
      },
      content: 'Best restaurant deals this week! 50% off on your favorite cuisines 🍽️',
      image: '🍜',
      likes: 567,
      comments: 34,
      savedAt: '5 days ago',
      category: 'food'
    },
    {
      id: 4,
      author: {
        id: 104,
        name: 'Home Decor',
        username: '@homedecor',
        avatar: '🏠'
      },
      content: 'Transform your living space with these amazing furniture deals! Up to 60% off 🛋️',
      image: '🪴',
      likes: 456,
      comments: 23,
      savedAt: '1 week ago',
      category: 'home'
    },
    {
      id: 5,
      author: {
        id: 105,
        name: 'Fitness Guru',
        username: '@fitnessguru',
        avatar: '💪'
      },
      content: 'Fitness equipment sale! Build your home gym at half price 🏋️',
      image: '🏃',
      likes: 678,
      comments: 56,
      savedAt: '1 week ago',
      category: 'fitness'
    },
    {
      id: 6,
      author: {
        id: 106,
        name: 'Travel Deals',
        username: '@traveldeals',
        avatar: '✈️'
      },
      content: 'Book your dream vacation now! Exclusive travel packages with huge discounts 🌴',
      image: '🏖️',
      likes: 1023,
      comments: 67,
      savedAt: '2 weeks ago',
      category: 'travel'
    }
  ];

  const filteredPosts = filter === 'all'
    ? savedPosts
    : savedPosts.filter(post => post.category === filter);

  const handleUnsave = (postId, e) => {
    e.stopPropagation();
    // API: DELETE /api/social/bookmarks/{postId}
    // TODO: Implement unsave post with backend
    console.log('Unsave post:', postId);
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
            <div>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Saved Posts</h1>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              {viewMode === 'grid' ? (
                <List className="w-5 h-5 text-rez-navy dark:text-white" />
              ) : (
                <Grid className="w-5 h-5 text-rez-navy dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-4 pb-4 overflow-x-auto scrollbar-hide">
          {['all', 'tech', 'fashion', 'food', 'home', 'fitness', 'travel'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-rez-lg text-body-sm font-medium whitespace-nowrap transition-all ${
                filter === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        {filteredPosts.length > 0 ? (
          viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-2 gap-3">
              {filteredPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => navigate(`/social/post/${post.id}`)}
                  className="relative aspect-square rounded-rez-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 hover:opacity-90 transition-opacity group"
                >
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between text-white text-caption mb-2">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleUnsave(post.id, e)}
                    className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Bookmark className="w-4 h-4 text-white fill-white" />
                  </button>
                </button>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:shadow-rez-card transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <button
                      onClick={() => navigate(`/social/profile/${post.author.id}`)}
                      className="shrink-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                        {post.author.avatar}
                      </div>
                    </button>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white truncate">
                        {post.author.name}
                      </h3>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                        {post.author.username} • Saved {post.savedAt}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleUnsave(post.id, e)}
                      className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Bookmark className="w-5 h-5 text-blue-500 fill-blue-500" />
                    </button>
                  </div>

                  <button
                    onClick={() => navigate(`/social/post/${post.id}`)}
                    className="w-full text-left"
                  >
                    <p className="text-body text-rez-navy dark:text-white mb-3">
                      {post.content}
                    </p>

                    {post.image && (
                      <div className="mb-3 h-48 rounded-rez-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl">
                        {post.image}
                      </div>
                    )}

                    <div className="flex items-center gap-6 pt-3 border-t border-rez-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400">
                        <Heart className="w-5 h-5" />
                        <span className="text-body-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-body-sm">{post.comments}</span>
                      </div>
                      <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors ml-auto">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <Bookmark className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {filter === 'all' ? 'No saved posts yet' : `No saved ${filter} posts`}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-6">
              {filter === 'all'
                ? 'Save posts to view them later'
                : `Try viewing all saved posts or change category`}
            </p>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="px-6 py-3 rounded-rez-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                View All Saved Posts
              </button>
            )}
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialBookmarks;
