import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Search, Filter, TrendingUp, Star, Users, Eye,
  ChevronRight, Verified, Sparkles, Heart, ShoppingBag
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CreatorsAll = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Creators', count: 156 },
    { id: 'fashion', name: 'Fashion', count: 48 },
    { id: 'beauty', name: 'Beauty', count: 32 },
    { id: 'lifestyle', name: 'Lifestyle', count: 28 },
    { id: 'tech', name: 'Tech', count: 24 },
    { id: 'fitness', name: 'Fitness', count: 24 },
  ];

  const creators = [
    {
      id: 1,
      username: 'fashionista_riya',
      name: 'Riya Sharma',
      avatar: '👩',
      verified: true,
      category: 'Fashion',
      followers: '125K',
      products: 248,
      avgRating: 4.8,
      trending: true,
      bio: 'Minimalist fashion & sustainable style',
      tags: ['Sustainable', 'Minimalist', 'Ethnic'],
    },
    {
      id: 2,
      username: 'tech_guru_arjun',
      name: 'Arjun Mehta',
      avatar: '👨',
      verified: true,
      category: 'Tech',
      followers: '95K',
      products: 156,
      avgRating: 4.9,
      trending: true,
      bio: 'Gadget reviews & tech recommendations',
      tags: ['Gadgets', 'Smart Home', 'Gaming'],
    },
    {
      id: 3,
      username: 'beauty_by_priya',
      name: 'Priya Singh',
      avatar: '👩',
      verified: true,
      category: 'Beauty',
      followers: '210K',
      products: 312,
      avgRating: 4.7,
      bio: 'Clean beauty & skincare enthusiast',
      tags: ['Skincare', 'K-Beauty', 'Organic'],
    },
    {
      id: 4,
      username: 'fit_with_vikram',
      name: 'Vikram Reddy',
      avatar: '👨',
      verified: true,
      category: 'Fitness',
      followers: '88K',
      products: 124,
      avgRating: 4.6,
      trending: true,
      bio: 'Fitness gear & nutrition expert',
      tags: ['Fitness', 'Nutrition', 'Wellness'],
    },
    {
      id: 5,
      username: 'lifestyle_neha',
      name: 'Neha Kapoor',
      avatar: '👩',
      verified: true,
      category: 'Lifestyle',
      followers: '156K',
      products: 289,
      avgRating: 4.8,
      bio: 'Home decor & lifestyle curation',
      tags: ['Home Decor', 'Plants', 'Minimal'],
    },
    {
      id: 6,
      username: 'sneaker_king',
      name: 'Rohan Gupta',
      avatar: '👨',
      verified: false,
      category: 'Fashion',
      followers: '72K',
      products: 186,
      avgRating: 4.5,
      bio: 'Sneaker culture & streetwear',
      tags: ['Sneakers', 'Streetwear', 'Limited'],
    },
    {
      id: 7,
      username: 'makeup_magic_sara',
      name: 'Sara Khan',
      avatar: '👩',
      verified: true,
      category: 'Beauty',
      followers: '142K',
      products: 267,
      avgRating: 4.9,
      trending: true,
      bio: 'Makeup artist & beauty creator',
      tags: ['Makeup', 'Bridal', 'Tutorials'],
    },
    {
      id: 8,
      username: 'gadget_geek_amit',
      name: 'Amit Patel',
      avatar: '👨',
      verified: false,
      category: 'Tech',
      followers: '64K',
      products: 98,
      avgRating: 4.4,
      bio: 'Budget tech & accessories',
      tags: ['Budget Tech', 'Accessories', 'DIY'],
    },
  ];

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || creator.category.toLowerCase() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedCreators = [...filteredCreators].sort((a, b) => {
    if (sortBy === 'trending') return b.trending ? 1 : -1;
    if (sortBy === 'followers') return parseInt(b.followers) - parseInt(a.followers);
    if (sortBy === 'rating') return b.avgRating - a.avgRating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">All Creators</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              {sortedCreators.length} creators
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rez-gray-100 dark:bg-white/5">
            <Search className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-rez-navy dark:text-white placeholder-rez-gray-600 dark:placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="px-4 pb-3 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white dark:bg-white/5 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="px-4 pb-3 flex gap-2">
          {[
            { id: 'trending', name: 'Trending', icon: TrendingUp },
            { id: 'followers', name: 'Most Followers', icon: Users },
            { id: 'rating', name: 'Top Rated', icon: Star },
          ].map((sort) => (
            <button
              key={sort.id}
              onClick={() => setSortBy(sort.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                sortBy === sort.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400'
              }`}
            >
              <sort.icon className="w-3.5 h-3.5" />
              {sort.name}
            </button>
          ))}
        </div>
      </div>

      {/* Creators Grid */}
      <div className="px-4 pt-4">
        <div className="grid grid-cols-1 gap-4">
          {sortedCreators.map((creator) => (
            <div
              key={creator.id}
              onClick={() => navigate(`/creators/${creator.username}`)}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer"
            >
              {/* Creator Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0">
                  {creator.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="font-bold text-rez-navy dark:text-white truncate">
                      {creator.name}
                    </h3>
                    {creator.verified && (
                      <Verified className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    )}
                    {creator.trending && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-500/10 text-red-600 dark:text-red-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    @{creator.username}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1">
                    {creator.bio}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {creator.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-rez-gray-200 dark:border-dark-700">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-rez-navy dark:text-white">
                      {creator.followers}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShoppingBag className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-rez-navy dark:text-white">
                      {creator.products}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold text-rez-navy dark:text-white">
                      {creator.avgRating}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Creator CTA */}
      <div className="px-4 pt-6 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border-2 border-purple-500/30 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">
            Become a ReZ Creator
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Share your picks, build your store, earn from every sale
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all">
            Apply Now
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CreatorsAll;
