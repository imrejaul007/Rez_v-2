import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Megaphone, Tag, Clock, Store, MapPin, Star,
  ChevronRight, Gift, Percent, Zap, TrendingUp, Heart,
  Filter, Search, Sparkles, Crown, Users, Calendar,
  ShoppingCart, ArrowRight, Timer, Flame, Award
} from 'lucide-react';

const PromotionsFeed = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [savedPromotions, setSavedPromotions] = useState([]);

  const categories = [
    { id: 'all', label: 'All Promotions', icon: Megaphone },
    { id: 'flash', label: 'Flash Deals', icon: Zap },
    { id: 'weekend', label: 'Weekend Special', icon: Calendar },
    { id: 'new-user', label: 'New User', icon: Gift },
    { id: 'festive', label: 'Festive', icon: Sparkles }
  ];

  // Active promotions from participating merchants
  const activePromotions = [
    {
      id: 'PROMO001',
      title: 'Mega Diwali Sale 2024',
      description: 'Celebrate Diwali with massive discounts across 8,900+ stores',
      type: 'festive',
      badge: 'MEGA SALE',
      badgeColor: 'orange',
      discountRange: '10% - 50% OFF',
      coinBonus: '2x Coins',
      startDate: '2024-10-20',
      endDate: '2024-11-05',
      daysLeft: 15,
      participatingMerchants: 8945,
      totalMerchants: 15420,
      categories: ['All Categories'],
      featured: true,
      trending: true,
      stores: [
        { name: 'Spice Garden', category: 'Food', discount: 40, rating: 4.5, image: '🍕' },
        { name: 'Fashion Hub', category: 'Fashion', discount: 50, rating: 4.8, image: '👗' },
        { name: 'Tech World', category: 'Electronics', discount: 30, rating: 4.3, image: '📱' },
        { name: 'Beauty Palace', category: 'Beauty', discount: 35, rating: 4.6, image: '💄' }
      ]
    },
    {
      id: 'PROMO002',
      title: 'Weekend Flash Bonanza',
      description: 'Every weekend, extra savings + bonus coins at 5,200+ stores',
      type: 'weekend',
      badge: 'EVERY WEEKEND',
      badgeColor: 'blue',
      discountRange: '₹100 - ₹500 OFF',
      coinBonus: '3x Coins',
      startDate: 'Sat-Sun',
      endDate: 'Weekly',
      daysLeft: null,
      isRecurring: true,
      participatingMerchants: 5200,
      totalMerchants: 8500,
      categories: ['Food & Dining', 'Fashion'],
      featured: false,
      trending: true,
      stores: [
        { name: 'Pizza Paradise', category: 'Food', discount: 200, rating: 4.4, image: '🍕', isFlat: true },
        { name: 'Café Mocha', category: 'Café', discount: 150, rating: 4.2, image: '☕', isFlat: true },
        { name: 'Style Street', category: 'Fashion', discount: 300, rating: 4.5, image: '👔', isFlat: true }
      ]
    },
    {
      id: 'PROMO003',
      title: 'New User Welcome Offer',
      description: 'Just joined? Get exclusive discounts + 5x coins on first orders',
      type: 'new-user',
      badge: 'NEW USERS',
      badgeColor: 'green',
      discountRange: '15% - 30% OFF',
      coinBonus: '5x Coins',
      startDate: 'Always On',
      endDate: 'For New Users',
      daysLeft: null,
      isEvergreen: true,
      participatingMerchants: 12800,
      totalMerchants: 15420,
      categories: ['All Categories'],
      featured: true,
      trending: false,
      eligibility: 'Users who joined in last 7 days',
      stores: [
        { name: 'Grocery Mart', category: 'Grocery', discount: 25, rating: 4.3, image: '🛒' },
        { name: 'Fitness First', category: 'Fitness', discount: 30, rating: 4.7, image: '💪' },
        { name: 'Salon Elite', category: 'Beauty', discount: 20, rating: 4.5, image: '💇' }
      ]
    },
    {
      id: 'PROMO004',
      title: 'Flash Friday Frenzy',
      description: 'Limited time deals every Friday - first come, first served!',
      type: 'flash',
      badge: 'FLASH DEAL',
      badgeColor: 'red',
      discountRange: 'Up to 70% OFF',
      coinBonus: '4x Coins',
      startDate: 'Every Friday',
      endDate: '6 PM - 9 PM',
      daysLeft: null,
      isRecurring: true,
      isLimited: true,
      participatingMerchants: 1200,
      totalMerchants: 3000,
      categories: ['Electronics', 'Fashion'],
      featured: false,
      trending: true,
      stores: [
        { name: 'Gadget Zone', category: 'Electronics', discount: 60, rating: 4.4, image: '🎧' },
        { name: 'Shoe Palace', category: 'Fashion', discount: 70, rating: 4.6, image: '👟' }
      ]
    }
  ];

  const filteredPromotions = activeCategory === 'all'
    ? activePromotions
    : activePromotions.filter(p => p.type === activeCategory);

  const toggleSave = (promoId) => {
    setSavedPromotions(prev =>
      prev.includes(promoId)
        ? prev.filter(id => id !== promoId)
        : [...prev, promoId]
    );
  };

  const renderFeaturedPromotion = (promo) => (
    <div
      key={promo.id}
      className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-2xl overflow-hidden"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold`}>
              {promo.badge}
            </span>
            <h2 className="text-2xl font-bold text-white mt-3">{promo.title}</h2>
            <p className="text-white/80 mt-1">{promo.description}</p>
          </div>
          <button
            onClick={() => toggleSave(promo.id)}
            className={`p-2 rounded-full ${savedPromotions.includes(promo.id) ? 'bg-red-500' : 'bg-white/20'}`}
          >
            <Heart className={`w-5 h-5 ${savedPromotions.includes(promo.id) ? 'text-white fill-white' : 'text-white'}`} />
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-white font-bold text-lg">{promo.discountRange}</div>
          </div>
          <div className="bg-yellow-400/30 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-yellow-200 font-bold">{promo.coinBonus}</div>
          </div>
          {promo.daysLeft && (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <Timer className="w-4 h-4 text-white" />
              <div className="text-white font-bold">{promo.daysLeft} days left</div>
            </div>
          )}
        </div>

        {/* Participating Stores Preview */}
        <div className="mb-4">
          <div className="text-white/80 text-sm mb-2">
            {promo.participatingMerchants.toLocaleString()} stores participating
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {promo.stores.map((store, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-3 min-w-[140px]"
              >
                <div className="text-2xl mb-2">{store.image}</div>
                <div className="text-white font-medium text-sm">{store.name}</div>
                <div className="text-white/70 text-xs">{store.category}</div>
                <div className="text-green-300 font-bold text-sm mt-1">
                  {store.isFlat ? `₹${store.discount} OFF` : `${store.discount}% OFF`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate(`/promotions/${promo.id}`)}
          className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Shop Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const renderPromotionCard = (promo) => (
    <div
      key={promo.id}
      className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all"
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`px-2 py-1 bg-${promo.badgeColor}-500/20 rounded-lg`}>
              {promo.type === 'flash' && <Zap className={`w-5 h-5 text-${promo.badgeColor}-400`} />}
              {promo.type === 'weekend' && <Calendar className={`w-5 h-5 text-${promo.badgeColor}-400`} />}
              {promo.type === 'new-user' && <Gift className={`w-5 h-5 text-${promo.badgeColor}-400`} />}
              {promo.type === 'festive' && <Sparkles className={`w-5 h-5 text-${promo.badgeColor}-400`} />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-semibold">{promo.title}</h3>
                {promo.trending && (
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-red-500/20 rounded text-red-400 text-xs">
                    <Flame className="w-3 h-3" /> Trending
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{promo.description}</p>
            </div>
          </div>
          <button
            onClick={() => toggleSave(promo.id)}
            className="p-1.5"
          >
            <Heart className={`w-5 h-5 ${savedPromotions.includes(promo.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {/* Discount & Coins */}
        <div className="flex items-center gap-3 mb-3">
          <div className="px-3 py-1.5 bg-green-500/20 rounded-lg">
            <span className="text-green-400 font-bold">{promo.discountRange}</span>
          </div>
          <div className="px-3 py-1.5 bg-yellow-500/20 rounded-lg">
            <span className="text-yellow-400 font-bold">{promo.coinBonus}</span>
          </div>
          {promo.isLimited && (
            <div className="px-3 py-1.5 bg-red-500/20 rounded-lg flex items-center gap-1">
              <Timer className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-medium text-sm">Limited</span>
            </div>
          )}
        </div>

        {/* Stores Preview */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            {promo.stores.slice(0, 4).map((store, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm border-2 border-gray-800"
              >
                {store.image}
              </div>
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {promo.participatingMerchants.toLocaleString()} stores
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate(`/promotions/${promo.id}`)}
          className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          View Deals
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Promotions</h1>
                <p className="text-gray-400 text-sm">Special deals from your favorite stores</p>
              </div>
            </div>
            <button className="p-2 bg-gray-800 rounded-lg">
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Flow Indicator (for transparency) */}
      <div className="px-4 py-4">
        <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Crown className="w-4 h-4 text-orange-400" />
            <span>Platform Promotion</span>
            <ChevronRight className="w-3 h-3" />
            <Store className="w-4 h-4 text-green-400" />
            <span>Verified Stores Joined</span>
            <ChevronRight className="w-3 h-3" />
            <Users className="w-4 h-4 text-purple-400" />
            <span>You Shop & Save</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-4">
        {/* Featured Promotion */}
        {filteredPromotions.filter(p => p.featured).map(promo => renderFeaturedPromotion(promo))}

        {/* Other Promotions */}
        <div className="grid grid-cols-1 gap-4">
          {filteredPromotions.filter(p => !p.featured).map(promo => renderPromotionCard(promo))}
        </div>

        {filteredPromotions.length === 0 && (
          <div className="text-center py-12">
            <Megaphone className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <div className="text-gray-400">No promotions in this category</div>
          </div>
        )}
      </div>

      {/* Bottom Nav would go here */}
    </div>
  );
};

export default PromotionsFeed;
