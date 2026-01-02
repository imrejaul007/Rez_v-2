import React, { useState } from 'react';
import {
  Search, Building2, Star, Users, Gift, ChevronRight,
  Briefcase, Trophy, Zap, Crown, CreditCard, Target,
  Percent, Coffee, Plane, ShoppingBag, Heart, Award
} from 'lucide-react';

// CorpPerks Home: Corporate Employee Benefits Platform
// Backend API: GET /api/growth/corpperks/home
// Backend API: GET /api/growth/corpperks/company/:id
// Backend API: GET /api/growth/corpperks/benefits
// Backend API: POST /api/growth/corpperks/redeem

const CorpPerksHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const myCompany = {
    name: "TechCorp India Pvt Ltd",
    employeeId: "TC-2024-1234",
    tier: "Gold",
    balance: 15000,
    perksUsed: 12,
    savings: 45600
  };

  const categories = [
    { id: 'all', name: 'All', icon: '🎁', count: 156 },
    { id: 'food', name: 'Food', icon: '🍔', count: 45 },
    { id: 'travel', name: 'Travel', icon: '✈️', count: 28 },
    { id: 'shopping', name: 'Shopping', icon: '🛍️', count: 52 },
    { id: 'health', name: 'Health', icon: '💊', count: 18 },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🎬', count: 13 }
  ];

  const featuredPerks = [
    {
      id: 1,
      name: "Swiggy Corporate",
      description: "Flat 30% off on all orders",
      icon: "🍱",
      category: "Food",
      discount: "30%",
      maxSaving: 200,
      validTill: "Dec 2025",
      exclusive: true
    },
    {
      id: 2,
      name: "MakeMyTrip",
      description: "₹2000 off on flights",
      icon: "✈️",
      category: "Travel",
      discount: "₹2000",
      maxSaving: 2000,
      validTill: "Mar 2025",
      exclusive: true
    },
    {
      id: 3,
      name: "Amazon Business",
      description: "Extra 15% on office supplies",
      icon: "📦",
      category: "Shopping",
      discount: "15%",
      maxSaving: 500,
      validTill: "Ongoing",
      exclusive: false
    },
    {
      id: 4,
      name: "Cult.fit",
      description: "50% off annual membership",
      icon: "💪",
      category: "Health",
      discount: "50%",
      maxSaving: 7500,
      validTill: "Jan 2025",
      exclusive: true
    }
  ];

  const tierBenefits = [
    { tier: "Bronze", minSpend: 0, cashback: "2%", perks: 50 },
    { tier: "Silver", minSpend: 25000, cashback: "4%", perks: 100 },
    { tier: "Gold", minSpend: 50000, cashback: "6%", perks: 156, current: true },
    { tier: "Platinum", minSpend: 100000, cashback: "10%", perks: 200 }
  ];

  const recentRedemptions = [
    { id: 1, perk: "Zomato Gold", saved: 599, date: "Jan 2" },
    { id: 2, perk: "BookMyShow", saved: 150, date: "Dec 28" },
    { id: 3, perk: "Flipkart", saved: 1200, date: "Dec 20" }
  ];

  const topCompanies = [
    { id: 1, name: "Google India", employees: 15000, logo: "🔍" },
    { id: 2, name: "Microsoft", employees: 12000, logo: "🪟" },
    { id: 3, name: "Infosys", employees: 50000, logo: "🏢" },
    { id: 4, name: "TCS", employees: 80000, logo: "📊" }
  ];

  const exclusiveDeals = [
    {
      id: 1,
      title: "Team Lunch Special",
      brand: "Multiple Restaurants",
      discount: "40% OFF",
      minOrder: "₹2000",
      icon: "🍽️"
    },
    {
      id: 2,
      title: "Office Supplies Bundle",
      brand: "Amazon Business",
      discount: "25% OFF",
      minOrder: "₹5000",
      icon: "📎"
    },
    {
      id: 3,
      title: "Corporate Travel Pack",
      brand: "MakeMyTrip",
      discount: "₹5000 OFF",
      minOrder: "₹25000",
      icon: "🧳"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-amber-400" />
              <h1 className="text-xl font-bold text-white">CorpPerks</h1>
            </div>
            <p className="text-slate-400 text-sm">Employee Benefits Hub</p>
          </div>
          <div className="bg-amber-500/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold">{myCompany.tier}</span>
          </div>
        </div>

        {/* Company Card */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-4 border border-slate-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs">Your Company</p>
              <h2 className="text-white font-bold">{myCompany.name}</h2>
              <p className="text-slate-500 text-sm">ID: {myCompany.employeeId}</p>
            </div>
            <div className="text-right">
              <p className="text-amber-400 font-bold text-xl">₹{myCompany.balance.toLocaleString()}</p>
              <p className="text-slate-500 text-xs">Credit Balance</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-600">
            <div>
              <p className="text-slate-500 text-xs">Perks Used</p>
              <p className="text-white font-bold">{myCompany.perksUsed} this month</p>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-xs">Total Savings</p>
              <p className="text-green-400 font-bold">₹{myCompany.savings.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search perks & benefits..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-gray-700 shadow-sm'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="font-medium text-sm">{cat.name}</span>
              <span className={`text-xs ${
                activeCategory === cat.id ? 'text-slate-400' : 'text-gray-400'
              }`}>({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Perks */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Featured Perks
          </h2>
          <button className="text-slate-600 text-sm">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {featuredPerks.map((perk) => (
            <div key={perk.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-20 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl relative">
                {perk.icon}
                {perk.exclusive && (
                  <div className="absolute top-2 left-2 bg-amber-500 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">
                    Exclusive
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {perk.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm">{perk.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-1">{perk.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">Save up to ₹{perk.maxSaving}</span>
                  <button className="text-slate-600 text-xs font-medium">
                    Claim
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tier Progress */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3">Your Tier Progress</h3>
          <div className="flex items-center gap-2 mb-3">
            {tierBenefits.map((t, idx) => (
              <div key={t.tier} className="flex-1">
                <div className={`h-2 rounded-full ${
                  t.current ? 'bg-amber-500' :
                  tierBenefits.findIndex(tb => tb.current) > idx ? 'bg-amber-500' :
                  'bg-slate-700'
                }`} />
                <p className={`text-xs mt-1 ${
                  t.current ? 'text-amber-400 font-bold' : 'text-slate-500'
                }`}>
                  {t.tier}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <p className="text-slate-400 text-sm">
              Spend ₹50,000 more to unlock <span className="text-amber-400 font-bold">Platinum</span> tier
            </p>
            <p className="text-amber-400 text-xs mt-1">Get 10% cashback + 200 exclusive perks</p>
          </div>
        </div>
      </div>

      {/* Exclusive Deals */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Corporate Exclusive</h2>
        <div className="space-y-3">
          {exclusiveDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-3xl">
                {deal.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{deal.title}</h3>
                <p className="text-xs text-gray-500">{deal.brand}</p>
                <p className="text-xs text-gray-400">Min. order: {deal.minOrder}</p>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-600 text-sm font-bold px-3 py-1 rounded-full">
                  {deal.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Redemptions */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Recent Savings</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentRedemptions.map((item, idx) => (
            <div key={item.id} className={`p-4 flex items-center justify-between ${
              idx !== recentRedemptions.length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <div>
                <h4 className="font-medium text-gray-800">{item.perk}</h4>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
              <span className="text-green-600 font-bold">Saved ₹{item.saved}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Companies */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Top Partner Companies</h2>
        <div className="grid grid-cols-4 gap-2">
          {topCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-3xl">{company.logo}</span>
              <p className="text-xs text-gray-700 font-medium mt-1 truncate">{company.name}</p>
              <p className="text-xs text-gray-400">{(company.employees / 1000).toFixed(0)}K+</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorpPerksHome;
