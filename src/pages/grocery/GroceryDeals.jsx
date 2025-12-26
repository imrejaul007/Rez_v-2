import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Tag, Percent, Clock, Star, TrendingUp, Gift, Sparkles } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function GroceryDeals() {
  const navigate = useNavigate();

  const deals = [
    {
      id: 1,
      title: 'Buy 1 Get 1 Free',
      subtitle: 'On All Dairy Products',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
      discount: 50,
      validUntil: 'Tonight 12 AM',
      category: 'Dairy',
      minOrder: 299,
      savedAmount: 150
    },
    {
      id: 2,
      title: '30% Off on Fruits & Vegetables',
      subtitle: 'Fresh from the farm',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400',
      discount: 30,
      validUntil: 'This Weekend',
      category: 'Fresh Produce',
      minOrder: 199,
      savedAmount: 89
    },
    {
      id: 3,
      title: 'Flat ₹200 Off',
      subtitle: 'On orders above ₹999',
      image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=400',
      discount: 20,
      validUntil: 'Jan 31',
      category: 'All Items',
      minOrder: 999,
      savedAmount: 200
    },
    {
      id: 4,
      title: '40% Off on Snacks & Beverages',
      subtitle: 'Stock up your pantry',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400',
      discount: 40,
      validUntil: 'Next 3 Days',
      category: 'Snacks',
      minOrder: 399,
      savedAmount: 160
    },
    {
      id: 5,
      title: 'Weekend Special',
      subtitle: 'Extra 25% off on bakery items',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      discount: 25,
      validUntil: 'Sunday',
      category: 'Bakery',
      minOrder: 249,
      savedAmount: 75
    },
    {
      id: 6,
      title: 'Combo Offer',
      subtitle: 'Rice + Dal + Oil at ₹599 only',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
      discount: 35,
      validUntil: 'Limited Stock',
      category: 'Staples',
      minOrder: 0,
      savedAmount: 321
    }
  ];

  const categories = [
    { id: 'all', name: 'All Deals', icon: '🎁', color: 'from-emerald-500/20 to-green-500/20' },
    { id: 'dairy', name: 'Dairy', icon: '🥛', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'produce', name: 'Fresh Produce', icon: '🥬', color: 'from-green-500/20 to-lime-500/20' },
    { id: 'snacks', name: 'Snacks', icon: '🍿', color: 'from-orange-500/20 to-amber-500/20' },
    { id: 'bakery', name: 'Bakery', icon: '🍞', color: 'from-amber-500/20 to-yellow-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Savings-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600">
        <div className="px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Tag className="w-6 h-6 text-amber-400 fill-amber-400" />
                <h1 className="text-2xl font-bold text-white">Grocery Deals</h1>
              </div>
              <p className="text-sm text-white/90">Save big on daily essentials</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{deals.length}+</p>
              <p className="text-xs text-white/80">Active Deals</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">50%</p>
              <p className="text-xs text-white/80">Max Savings</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">New</p>
              <p className="text-xs text-white/80">Daily Deals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Limited Time Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-amber-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Limited Time Offers!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Grab these deals before they're gone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full bg-gradient-to-br ${cat.color} border border-white/20 whitespace-nowrap text-sm font-medium text-rez-navy dark:text-white hover:scale-105 transition-all`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Benefit Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Gift className="w-10 h-10 text-green-600 dark:text-green-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Extra Savings</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Stack deals with cashback + coins for maximum savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deals List */}
      <div className="px-4 space-y-4">
        {deals.map(deal => (
          <div
            key={deal.id}
            onClick={() => navigate(`/grocery/deal/${deal.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image Banner */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-6">
                <div className="mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                    {deal.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-sm text-white/90 mb-3">{deal.subtitle}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 w-fit">
                  <Percent className="w-5 h-5 text-white" />
                  <span className="text-lg font-bold text-white">{deal.discount}% OFF</span>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <div className="px-3 py-1.5 rounded-full bg-red-500 text-white">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{deal.validUntil}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Savings Info */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">You Save</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">₹{deal.savedAmount}</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Min Order</p>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {deal.minOrder > 0 ? `₹${deal.minOrder}` : 'No Limit'}
                  </p>
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-4">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400">
                  🎁 Extra perks: Cashback + Coins on this deal!
                </p>
              </div>

              {/* CTA */}
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:scale-105 transition-all">
                Shop This Deal
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Want to Feature Your Deals?</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Partner with ReZ and promote your offers to thousands of shoppers
          </p>
          <Link
            to="/partner/grocery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default GroceryDeals;
