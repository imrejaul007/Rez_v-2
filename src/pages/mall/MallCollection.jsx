import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, Zap, ChevronRight, Sparkles } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNav from '../../components/layout/BottomNav';

const MallCollection = () => {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  // Mock collections data
  const collections = {
    'work-from-home': {
      id: 'work-from-home',
      name: 'Work From Home Essentials',
      description: 'Curated products to elevate your home office setup and productivity',
      icon: '💼',
      curator: 'ReZ Team',
      itemCount: 42,
      totalValue: '₹85,000',
      avgCoins: '30%',
      color: 'from-blue-500 to-cyan-500',
      tags: ['Trending', 'Lifestyle', 'Productivity'],
      story: 'Working from home doesn\'t mean compromising on productivity or style. This collection brings together the best ergonomic furniture, tech accessories, and wellness products to create your perfect home office.',
      brands: [
        {
          id: 1,
          name: 'Featherlite',
          logo: '🪑',
          category: 'Furniture',
          product: 'Ergonomic Office Chair',
          price: 12999,
          coins: 3900,
          rating: 4.6,
          badge: '✅ Verified'
        },
        {
          id: 2,
          name: 'Dell',
          logo: '💻',
          category: 'Electronics',
          product: '27" 4K Monitor',
          price: 28999,
          coins: 7250,
          rating: 4.7,
          badge: '⭐ ReZ Preferred'
        },
        {
          id: 3,
          name: 'Logitech',
          logo: '🖱️',
          category: 'Accessories',
          product: 'MX Master 3 Mouse',
          price: 8495,
          coins: 2124,
          rating: 4.8,
          badge: '👑 Premium'
        },
        {
          id: 4,
          name: 'Philips',
          logo: '💡',
          category: 'Lighting',
          product: 'Smart Desk Lamp',
          price: 4999,
          coins: 1500,
          rating: 4.5,
          badge: '✅ Verified'
        },
        {
          id: 5,
          name: 'Bose',
          logo: '🎧',
          category: 'Audio',
          product: 'QC35 II Headphones',
          price: 21999,
          coins: 6600,
          rating: 4.8,
          badge: '👑 Premium'
        },
        {
          id: 6,
          name: 'Urban Ladder',
          logo: '🛋️',
          category: 'Furniture',
          product: 'Height Adjustable Desk',
          price: 18999,
          coins: 5700,
          rating: 4.6,
          badge: '⭐ ReZ Preferred'
        }
      ]
    },
    'festival-gifting': {
      id: 'festival-gifting',
      name: 'Festival Gifting Guide',
      description: 'Thoughtful gifts that spread joy and earn you ReZ Coins',
      icon: '🎁',
      curator: 'Lifestyle Expert',
      itemCount: 56,
      totalValue: '₹1,25,000',
      avgCoins: '35%',
      color: 'from-purple-500 to-pink-500',
      tags: ['Festival', 'Gifting', 'Special'],
      story: 'Make this festival season special with curated gifts that blend tradition with modern taste. Every purchase earns you ReZ Coins for future shopping.'
    },
    'fitness-wellness': {
      id: 'fitness-wellness',
      name: 'Fitness & Wellness',
      description: 'Everything you need for a healthier lifestyle',
      icon: '🏃',
      curator: 'Health Expert',
      itemCount: 38,
      totalValue: '₹65,000',
      avgCoins: '28%',
      color: 'from-green-500 to-emerald-500',
      tags: ['Health', 'Fitness', 'Wellness'],
      story: 'Your journey to better health starts here. We\'ve curated the best fitness equipment, supplements, and wellness products to help you achieve your goals.'
    }
  };

  const collection = collections[collectionId] || collections['work-from-home'];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Collection Header */}
      <div className="relative">
        {/* Back Button */}
        <button
          onClick={() => navigate('/mall')}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
        </button>

        {/* Banner */}
        <div className={`h-40 bg-gradient-to-br ${collection.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Collection Info Card */}
        <div className="px-4 -mt-16">
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-800 shadow-xl">
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${collection.color} flex items-center justify-center text-3xl shadow-lg`}>
                {collection.icon}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-1">{collection.name}</h1>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Curated by {collection.curator}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {collection.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-2 rounded-full ${
                    liked
                      ? 'bg-red-500/20 text-red-500'
                      : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white'
                  } hover:scale-110 transition-all`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-red-500' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 hover:bg-rez-gray-200 dark:hover:bg-dark-600 transition-colors">
                  <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-rez-gray-50 dark:bg-dark-700">
              <div className="text-center">
                <div className="text-lg font-bold text-rez-navy dark:text-white">{collection.itemCount}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-rez-navy dark:text-white">{collection.totalValue}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{collection.avgCoins}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Avg Coins</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Story */}
      <div className="px-4 mt-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-bold text-rez-navy dark:text-white">About This Collection</h3>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            {collection.story}
          </p>
        </div>
      </div>

      {/* Collection Notice */}
      <div className="px-4 mt-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                Shop the entire collection & maximize your ReZ Coins
              </p>
              <p className="text-xs text-rez-gray-700 dark:text-gray-400">
                Every product in this collection earns you ReZ Coins. The more you shop, the more you earn!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products in Collection */}
      <div className="px-4 mt-6 mb-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Products in Collection</h3>
        <div className="space-y-3">
          {collection.brands?.map((brand) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/mall/brand/${brand.id}`)}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-3xl flex-shrink-0">
                  {brand.logo}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-rez-navy dark:text-white mb-0.5">{brand.name}</h4>
                      <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-1">{brand.product}</p>
                      <p className="text-xs text-rez-gray-500 dark:text-gray-500">{brand.category}</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ml-2">
                      {brand.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold text-rez-navy dark:text-white">{brand.rating}</span>
                  </div>

                  {/* Price & Coins */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-rez-navy dark:text-white">₹{brand.price.toLocaleString()}</span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
                      <span className="text-amber-400">🪙</span>
                      <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">+{brand.coins.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white font-medium hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors">
          Load More Products
        </button>
      </div>

      {/* More Collections */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">More Collections</h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.values(collections)
            .filter((c) => c.id !== collection.id)
            .slice(0, 4)
            .map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(`/mall/collection/${c.id}`)}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl mb-3`}>
                  {c.icon}
                </div>
                <h4 className="font-bold text-sm text-rez-navy dark:text-white mb-1 line-clamp-2">{c.name}</h4>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{c.itemCount} items</p>
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                  <span>Explore</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MallCollection;
