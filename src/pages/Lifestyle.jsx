import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles, ShoppingBag, Dumbbell, Calendar, UtensilsCrossed, Home as HomeIcon,
  Leaf, TrendingUp, Award, ArrowRight, User, Bell, Search, Heart,
  Flame, Clock, MapPin, Star, ChevronRight, Play, Users, Zap, Gift, Target
} from 'lucide-react';

export default function Lifestyle() {
  const navigate = useNavigate();
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  // User info (mock)
  const user = {
    name: 'Arjun',
    avatar: 'https://i.pravatar.cc/150?img=12',
    styleDNA: 'Modern Minimalist',
    sustainabilityScore: 75,
    rezCoins: 2450
  };

  // Story-like highlights
  const stories = [
    { id: 1, title: 'Take Quiz', icon: Sparkles, color: 'from-purple-500 to-pink-500', action: '/lifestyle/fashion/style-quiz' },
    { id: 2, title: 'Wardrobe', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500', action: '/lifestyle/fashion/virtual-wardrobe' },
    { id: 3, title: 'Calendar', icon: Calendar, color: 'from-orange-500 to-red-500', action: '/lifestyle/fashion/outfit-calendar' },
    { id: 4, title: 'Eco Score', icon: Leaf, color: 'from-green-500 to-teal-500', action: '/lifestyle/fashion/sustainability' },
    { id: 5, title: 'New Arrivals', icon: Flame, color: 'from-pink-500 to-rose-500', action: '/fashion' },
    { id: 6, title: 'Trending', icon: TrendingUp, color: 'from-yellow-500 to-orange-500', action: '/fashion/trending' }
  ];

  // Quick actions
  const quickActions = [
    {
      icon: Target,
      title: 'Discover Your Style',
      subtitle: 'Take 2-min quiz',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      action: '/lifestyle/fashion/style-quiz'
    },
    {
      icon: ShoppingBag,
      title: 'Shop Fashion',
      subtitle: '5000+ items',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      action: '/fashion'
    },
    {
      icon: Calendar,
      title: 'Plan Outfits',
      subtitle: '30 days ahead',
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      action: '/lifestyle/fashion/outfit-calendar'
    },
    {
      icon: Leaf,
      title: 'Go Sustainable',
      subtitle: 'Earn 2x coins',
      color: 'bg-gradient-to-br from-green-500 to-teal-500',
      action: '/lifestyle/fashion/sustainability'
    }
  ];

  // Trending now
  const trendingNow = [
    {
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=500&fit=crop',
      title: 'Minimal Whites',
      category: 'Trending',
      likes: '2.3K',
      tag: 'Hot'
    },
    {
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop',
      title: 'Boho Summer',
      category: 'Vibe',
      likes: '1.8K',
      tag: 'New'
    },
    {
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop',
      title: 'Streetwear 2025',
      category: 'Style',
      likes: '3.1K',
      tag: 'Popular'
    }
  ];

  // Categories grid
  const categories = [
    { id: 'fashion', name: 'Fashion', icon: ShoppingBag, color: 'from-purple-500 to-pink-500', active: true, path: '/fashion' },
    { id: 'beauty', name: 'Beauty', icon: Sparkles, color: 'from-pink-500 to-rose-500', active: true, path: '/beauty' },
    { id: 'fitness', name: 'Fitness', icon: Dumbbell, color: 'from-green-500 to-teal-500', active: true, path: '/fitness' },
    { id: 'events', name: 'Events', icon: Calendar, color: 'from-blue-500 to-indigo-500', soon: true },
    { id: 'food', name: 'Food', icon: UtensilsCrossed, color: 'from-orange-500 to-red-500', soon: true },
    { id: 'home', name: 'Home', icon: HomeIcon, color: 'from-amber-500 to-yellow-500', active: true, path: '/home-services' }
  ];

  // For you section
  const forYou = [
    {
      type: 'challenge',
      title: 'Build Your Capsule Wardrobe',
      description: '15 versatile pieces for endless outfits',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
      cta: 'Start Challenge',
      icon: Target
    },
    {
      type: 'reward',
      title: '2x Coins on Sustainable Fashion',
      description: 'Shop eco-friendly brands this week',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop',
      cta: 'Explore Brands',
      icon: Leaf
    }
  ];

  // Stats
  const stats = [
    { label: 'Saved This Month', value: '₹3,240', icon: Award, color: 'text-green-600' },
    { label: 'RezCoins', value: user.rezCoins.toLocaleString(), icon: Zap, color: 'text-yellow-600' },
    { label: 'Eco Score', value: `${user.sustainabilityScore}/100`, icon: Leaf, color: 'text-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-purple-600"
              />
              <div>
                <div className="text-xs text-gray-500">Welcome back,</div>
                <div className="font-bold text-gray-900">{user.name}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-6 h-6 text-gray-600" />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search fashion, outfits, styles..."
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
      </div>

      {/* Story-like Quick Access */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => {
            const Icon = story.icon;
            return (
              <button
                key={story.id}
                onClick={() => navigate(story.action)}
                className="flex flex-col items-center gap-2 flex-shrink-0"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${story.color} p-0.5`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
                <span className="text-xs text-gray-600 text-center w-16 truncate">{story.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* User Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <Icon className={`w-5 h-5 ${stat.color} mb-2`} />
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(action.action)}
                  className={`${action.color} text-white rounded-2xl p-4 text-left hover:shadow-lg transition-all`}
                >
                  <Icon className="w-8 h-8 mb-2" />
                  <div className="font-bold mb-1">{action.title}</div>
                  <div className="text-sm opacity-90">{action.subtitle}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fashion Live Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=300&fit=crop"
            alt="Fashion"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90" />
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="inline-block self-start bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">
              ✨ LIVE NOW
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Fashion Vertical is Here!</h3>
              <p className="text-purple-100 text-sm mb-3">Discover your style DNA & shop sustainably</p>
              <button
                onClick={() => navigate('/lifestyle/fashion/style-quiz')}
                className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold hover:shadow-lg inline-flex items-center gap-2"
              >
                Take Quiz <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Trending Now */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Trending Now
            </h2>
            <button className="text-sm text-purple-600 font-semibold">See All</button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {trendingNow.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-40">
                <div className="relative rounded-xl overflow-hidden mb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white text-sm font-semibold">{item.title}</div>
                    <div className="flex items-center gap-1 text-white/80 text-xs">
                      <Heart className="w-3 h-3" />
                      {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Explore Lifestyle</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => category.active && category.path && navigate(category.path)}
                  className={`relative rounded-2xl p-4 text-center transition-all ${
                    category.active
                      ? 'bg-gradient-to-br ' + category.color + ' text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                  disabled={!category.active}
                >
                  {category.soon && (
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs">
                      Soon
                    </div>
                  )}
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{category.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* For You */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">For You</h2>
          <div className="space-y-3">
            {forYou.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-28 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700">
                        {item.cta}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Your Style DNA (if completed) */}
        {user.styleDNA && (
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm opacity-90 mb-1">Your Style DNA</div>
                <div className="text-2xl font-bold">{user.styleDNA}</div>
              </div>
              <Sparkles className="w-12 h-12 opacity-50" />
            </div>
            <button
              onClick={() => navigate('/lifestyle/fashion/virtual-wardrobe')}
              className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all"
            >
              Open Virtual Wardrobe
            </button>
          </div>
        )}

        {/* Bottom Spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
