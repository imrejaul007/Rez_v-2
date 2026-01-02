import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  Hash,
  Flame,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialTrending = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');

  // Mock trending posts - replace with API call
  const trendingPosts = [
    {
      id: 1,
      author: {
        id: 101,
        name: 'Tech Deals Hub',
        username: '@techdealshub',
        avatar: '💻',
        verified: true
      },
      content: '🔥 MEGA DEAL ALERT! iPhone 15 Pro at lowest price ever! Grab it before stock runs out! #TechDeals #iPhone',
      image: '📱',
      likes: 5234,
      comments: 456,
      shares: 234,
      views: 45200,
      trending: 1,
      timestamp: '2h ago'
    },
    {
      id: 2,
      author: {
        id: 102,
        name: 'Fashion Finds',
        username: '@fashionfinds',
        avatar: '👗',
        verified: true
      },
      content: 'BIGGEST FASHION SALE OF THE YEAR! Up to 80% off on designer brands! Limited time only! 🛍️✨ #FashionSale',
      image: '👠',
      likes: 4321,
      comments: 389,
      shares: 198,
      views: 38900,
      trending: 2,
      timestamp: '3h ago'
    },
    {
      id: 3,
      author: {
        id: 103,
        name: 'Food Explorer',
        username: '@foodexplorer',
        avatar: '🍕',
        verified: false
      },
      content: 'Best food deals this weekend! 50% off at top restaurants + free delivery! Don\'t miss out! 🍔🍕 #FoodDeals',
      image: '🍜',
      likes: 3456,
      comments: 267,
      shares: 156,
      views: 32100,
      trending: 3,
      timestamp: '5h ago'
    },
    {
      id: 4,
      author: {
        id: 104,
        name: 'Smart Shopper',
        username: '@smartshopper',
        avatar: '🛍️',
        verified: true
      },
      content: 'Exclusive discount codes that actually work! Save up to ₹5000 on your next purchase! 💰 #SaveMoney #Deals',
      image: '💳',
      likes: 2890,
      comments: 201,
      shares: 134,
      views: 28500,
      trending: 4,
      timestamp: '8h ago'
    },
    {
      id: 5,
      author: {
        id: 105,
        name: 'Travel Deals',
        username: '@traveldeals',
        avatar: '✈️',
        verified: true
      },
      content: 'Book your dream vacation NOW! Exclusive travel packages at unbelievable prices! 🌴🏖️ #TravelDeals',
      image: '🏝️',
      likes: 2567,
      comments: 178,
      shares: 112,
      views: 25400,
      trending: 5,
      timestamp: '12h ago'
    }
  ];

  // Mock trending hashtags - replace with API call
  const trendingHashtags = [
    { tag: '#WeekendDeals', posts: 12340, growth: '+234%' },
    { tag: '#TechSale', posts: 8920, growth: '+189%' },
    { tag: '#FashionFinds', posts: 5670, growth: '+156%' },
    { tag: '#SaveMoney', posts: 4320, growth: '+142%' },
    { tag: '#FoodDeals', posts: 3890, growth: '+128%' },
    { tag: '#TravelOffers', posts: 3210, growth: '+115%' },
    { tag: '#ElectronicsSale', posts: 2890, growth: '+98%' },
    { tag: '#HomeDecor', posts: 2340, growth: '+87%' },
    { tag: '#FitnessDeals', posts: 1980, growth: '+76%' },
    { tag: '#BeautyProducts', posts: 1670, growth: '+65%' }
  ];

  // Mock trending topics - replace with API call
  const trendingTopics = [
    {
      id: 1,
      title: 'Black Friday Early Access',
      description: 'Early bird deals are live now!',
      posts: 23400,
      icon: '🎉'
    },
    {
      id: 2,
      title: 'iPhone 15 Launch Offers',
      description: 'Best deals on latest iPhone',
      posts: 18900,
      icon: '📱'
    },
    {
      id: 3,
      title: 'Fashion Week Sale',
      description: 'Designer brands at lowest prices',
      posts: 15600,
      icon: '👗'
    },
    {
      id: 4,
      title: 'Grocery Discounts',
      description: 'Save big on daily essentials',
      posts: 12300,
      icon: '🛒'
    },
    {
      id: 5,
      title: 'Gadget Clearance Sale',
      description: 'Electronics at rock bottom prices',
      posts: 9870,
      icon: '💻'
    }
  ];

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
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-500" />
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Trending</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'posts'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('hashtags')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'hashtags'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Hashtags
          </button>
          <button
            onClick={() => setActiveTab('topics')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'topics'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Topics
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        {activeTab === 'posts' && (
          <div className="space-y-4">
            {trendingPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:shadow-rez-card transition-shadow"
              >
                {/* Trending Badge */}
                <div className="flex items-center gap-2 mb-3 px-3 py-1.5 rounded-rez-lg bg-gradient-to-r from-orange-500 to-red-500 text-white w-fit">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-caption font-semibold">#{post.trending} Trending</span>
                </div>

                {/* Author */}
                <div className="flex items-start gap-3 mb-3">
                  <button
                    onClick={() => navigate(`/social/profile/${post.author.id}`)}
                    className="shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl">
                      {post.author.avatar}
                    </div>
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                        {post.author.name}
                      </h3>
                      {post.author.verified && (
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                      {post.author.username} • {post.timestamp}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <button
                  onClick={() => navigate(`/social/post/${post.id}`)}
                  className="w-full text-left"
                >
                  <p className="text-body text-rez-navy dark:text-white mb-3">
                    {post.content}
                  </p>

                  {post.image && (
                    <div className="mb-4 h-56 rounded-rez-xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-7xl">
                      {post.image}
                    </div>
                  )}
                </button>

                {/* Stats */}
                <div className="flex items-center gap-4 py-3 border-t border-b border-rez-gray-200 dark:border-white/10 text-caption text-rez-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    {post.shares}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3">
                  <button className="flex-1 py-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-medium hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Like
                    </div>
                  </button>
                  <button className="flex-1 py-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-medium hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Comment
                    </div>
                  </button>
                  <button className="p-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'hashtags' && (
          <div className="space-y-3">
            {trendingHashtags.map((hashtag, index) => (
              <button
                key={index}
                onClick={() => navigate(`/social/hashtag/${hashtag.tag.slice(1)}`)}
                className="w-full p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-h3 font-poppins text-rez-gray-400 dark:text-gray-600">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                        {hashtag.tag}
                      </h3>
                      <div className="shrink-0 px-2 py-1 rounded-rez-lg bg-green-50 dark:bg-green-500/10">
                        <span className="text-caption font-semibold text-green-600 dark:text-green-400">
                          {hashtag.growth}
                        </span>
                      </div>
                    </div>
                    <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                      {hashtag.posts.toLocaleString()} posts
                    </p>
                  </div>
                  <Hash className="w-6 h-6 text-orange-500 shrink-0" />
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'topics' && (
          <div className="space-y-3">
            {trendingTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => navigate(`/social/search?q=${encodeURIComponent(topic.title)}`)}
                className="w-full p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-rez-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-3xl shrink-0">
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                        {topic.title}
                      </h3>
                      <TrendingUp className="w-5 h-5 text-orange-500 shrink-0" />
                    </div>
                    <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-2">
                      {topic.description}
                    </p>
                    <p className="text-caption text-rez-gray-500 dark:text-gray-500">
                      {topic.posts.toLocaleString()} posts
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialTrending;
