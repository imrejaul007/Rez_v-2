import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, TrendingUp, Clock, MapPin, Star, ChevronRight, Zap, Gift, Percent } from 'lucide-react';

function Deals() {
  const [activeTab, setActiveTab] = useState('all');

  const deals = [
    {
      id: 1,
      title: 'Flat 50% Off on Electronics',
      store: 'Tech Galaxy',
      category: 'electronics',
      discount: 50,
      validUntil: '2024-12-31',
      cashback: 1000,
      coins: 500,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      distance: '2.3 km',
      trending: true
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free - Fashion',
      store: 'Zara',
      category: 'fashion',
      discount: 50,
      validUntil: '2024-12-25',
      cashback: 500,
      coins: 250,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
      distance: '1.5 km',
      trending: true
    },
    {
      id: 3,
      title: '30% Off Hair Spa + Keratin',
      store: 'Glowzy Salon',
      category: 'beauty',
      discount: 30,
      validUntil: '2024-12-28',
      cashback: 300,
      coins: 150,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      distance: '800 m',
      trending: false
    },
    {
      id: 4,
      title: 'Grocery Combo Offers',
      store: 'BigBasket',
      category: 'grocery',
      discount: 25,
      validUntil: '2024-12-30',
      cashback: 200,
      coins: 100,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      distance: '3.2 km',
      trending: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Deals', icon: Tag },
    { id: 'electronics', label: 'Electronics', icon: Zap },
    { id: 'fashion', label: 'Fashion', icon: Gift },
    { id: 'beauty', label: 'Beauty', icon: Star },
    { id: 'grocery', label: 'Grocery', icon: Percent }
  ];

  const filteredDeals = activeTab === 'all'
    ? deals
    : deals.filter(deal => deal.category === activeTab);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Hot Deals</h1>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">
            Exclusive offers just for you
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === cat.id
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-700 dark:text-gray-300'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Deals Grid */}
      <div className="px-4 py-4 space-y-3">
        {filteredDeals.map((deal) => (
          <Link
            key={deal.id}
            to={`/deal/${deal.id}`}
            className="block p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 transition-all active:scale-98"
          >
            <div className="flex gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                {deal.trending && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-red-500">
                  <span className="text-xs font-bold text-white">{deal.discount}% OFF</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-2">
                  {deal.title}
                </h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{deal.store}</p>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xs">💸</span>
                    <span className="text-xs font-semibold text-emerald-500">₹{deal.cashback}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">🪙</span>
                    <span className="text-xs font-semibold text-amber-500">{deal.coins}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>Valid till {new Date(deal.validUntil).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-500">
                    <MapPin className="w-3 h-3" />
                    <span>{deal.distance}</span>
                  </div>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-rez-gray-400 flex-shrink-0 mt-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Deals;
