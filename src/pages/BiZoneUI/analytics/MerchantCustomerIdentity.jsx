import React, { useState } from 'react';
import {
  ArrowLeft, Users, Search, Filter, Eye, Star, CreditCard,
  Phone, Mail, MapPin, Calendar, ShoppingBag, Coins, Tag,
  ChevronRight, TrendingUp, Heart, Clock, Award, UserCheck,
  Merge, Link2, AlertCircle, Gift
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantCustomerIdentity = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profiles');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const stats = {
    totalCustomers: 12456,
    identified: 8934,
    anonymous: 3522,
    repeatRate: 45.6,
    avgLifetimeValue: 4567
  };

  const customers = [
    {
      id: 'CUS-001',
      globalId: 'GID-78901234',
      name: 'Rahul Sharma',
      phone: '+91 98765 43210',
      email: 'rahul.sharma@email.com',
      verified: true,
      tier: 'gold',
      totalSpend: 45670,
      visits: 34,
      lastVisit: '2 hours ago',
      avgOrderValue: 1343,
      favoriteItems: ['Butter Chicken', 'Naan'],
      sources: ['pos', 'rez', 'swiggy'],
      coins: 2450,
      tags: ['foodie', 'regular', 'weekend-diner'],
      birthdate: '15 Mar',
      anniversary: '22 Sep'
    },
    {
      id: 'CUS-002',
      globalId: 'GID-78901235',
      name: 'Priya Patel',
      phone: '+91 87654 32109',
      email: 'priya.p@gmail.com',
      verified: true,
      tier: 'platinum',
      totalSpend: 89450,
      visits: 67,
      lastVisit: '1 day ago',
      avgOrderValue: 1335,
      favoriteItems: ['Paneer Tikka', 'Biryani'],
      sources: ['rez', 'zomato', 'pos'],
      coins: 5670,
      tags: ['vip', 'vegetarian', 'loyalty-member'],
      birthdate: '08 Jul',
      anniversary: null
    },
    {
      id: 'CUS-003',
      globalId: 'GID-78901236',
      name: 'Amit Kumar',
      phone: '+91 76543 21098',
      email: null,
      verified: false,
      tier: 'silver',
      totalSpend: 12340,
      visits: 12,
      lastVisit: '3 days ago',
      avgOrderValue: 1028,
      favoriteItems: ['Pizza', 'Pasta'],
      sources: ['swiggy', 'zomato'],
      coins: 890,
      tags: ['new-customer', 'italian-lover'],
      birthdate: null,
      anniversary: null
    },
    {
      id: 'CUS-004',
      globalId: 'GID-78901237',
      name: 'Sneha Reddy',
      phone: '+91 65432 10987',
      email: 'sneha.reddy@company.com',
      verified: true,
      tier: 'gold',
      totalSpend: 34560,
      visits: 28,
      lastVisit: '5 days ago',
      avgOrderValue: 1234,
      favoriteItems: ['Thali', 'South Indian'],
      sources: ['rez', 'pos'],
      coins: 3210,
      tags: ['office-orders', 'bulk-buyer', 'corporate'],
      birthdate: '12 Dec',
      anniversary: '05 Feb'
    }
  ];

  const duplicates = [
    {
      id: 1,
      customer1: { name: 'Vikram S.', phone: '+91 98765 12345', source: 'pos' },
      customer2: { name: 'Vikram Singh', phone: '+91 98765 12345', source: 'swiggy' },
      confidence: 95,
      matchedOn: 'Phone number'
    },
    {
      id: 2,
      customer1: { name: 'Neha G', phone: '+91 87654 23456', source: 'zomato' },
      customer2: { name: 'Neha Gupta', phone: '+91 87654 23456', source: 'rez' },
      confidence: 92,
      matchedOn: 'Phone number'
    }
  ];

  const segments = [
    { name: 'VIP Customers', count: 234, criteria: 'Spend > ₹50K' },
    { name: 'At Risk', count: 156, criteria: 'No visit in 30 days' },
    { name: 'New This Month', count: 89, criteria: 'First order in current month' },
    { name: 'Birthday This Week', count: 12, criteria: 'Birthday in next 7 days' },
    { name: 'Vegetarians', count: 1456, criteria: 'Veg orders > 80%' },
    { name: 'Weekend Diners', count: 2340, criteria: 'Orders mostly on weekends' }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'bg-purple-500/20 text-purple-400';
      case 'gold': return 'bg-yellow-500/20 text-yellow-400';
      case 'silver': return 'bg-gray-400/20 text-gray-300';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSourceIcon = (source) => {
    switch (source) {
      case 'pos': return '🖥️';
      case 'rez': return '📱';
      case 'swiggy': return '🍊';
      case 'zomato': return '🔴';
      case 'ondc': return '🇮🇳';
      default: return '📦';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Users size={24} className="mr-2" />
                Customer Identity
              </h1>
              <p className="text-emerald-200 text-sm">Global profile, not app-specific</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Merge size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalCustomers/1000).toFixed(1)}K</p>
            <p className="text-xs text-emerald-200">Total</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{(stats.identified/1000).toFixed(1)}K</p>
            <p className="text-xs text-emerald-200">Identified</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.repeatRate}%</p>
            <p className="text-xs text-emerald-200">Repeat</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.avgLifetimeValue/1000).toFixed(1)}K</p>
            <p className="text-xs text-emerald-200">LTV</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'profiles', label: 'Profiles' },
            { id: 'duplicates', label: 'Duplicates' },
            { id: 'segments', label: 'Segments' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-emerald-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Profiles Tab */}
      {activeTab === 'profiles' && (
        <div className="px-4">
          {/* Search */}
          <div className="flex space-x-2 mb-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, phone, email..."
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
              />
            </div>
            <button className="bg-gray-800 text-white px-4 rounded-xl">
              <Filter size={20} />
            </button>
          </div>

          {/* Global Identity Notice */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 mb-4">
            <div className="flex items-start">
              <UserCheck size={18} className="text-emerald-400 mr-2 mt-0.5" />
              <div>
                <p className="text-emerald-400 font-medium text-sm">Global Identity</p>
                <p className="text-gray-300 text-xs">
                  Customer identity is unified across all channels - not app-specific
                </p>
              </div>
            </div>
          </div>

          {/* Customer List */}
          <div className="space-y-3">
            {customers.map(customer => (
              <div
                key={customer.id}
                className="bg-gray-800 rounded-xl p-4"
                onClick={() => setSelectedCustomer(customer)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-white font-bold">{customer.name}</h3>
                        {customer.verified && (
                          <UserCheck size={14} className="text-green-400 ml-1" />
                        )}
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getTierColor(customer.tier)}`}>
                          {customer.tier}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{customer.phone}</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3 text-center text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-white font-bold">₹{(customer.totalSpend/1000).toFixed(1)}K</p>
                    <p className="text-gray-400 text-xs">Spend</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-white font-bold">{customer.visits}</p>
                    <p className="text-gray-400 text-xs">Visits</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-yellow-400 font-bold">{customer.coins}</p>
                    <p className="text-gray-400 text-xs">Coins</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-white font-bold">₹{customer.avgOrderValue}</p>
                    <p className="text-gray-400 text-xs">AOV</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    {customer.sources.map((source, idx) => (
                      <span key={idx} className="text-lg">{getSourceIcon(source)}</span>
                    ))}
                  </div>
                  <span className="text-gray-400">{customer.lastVisit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Duplicates Tab */}
      {activeTab === 'duplicates' && (
        <div className="px-4 space-y-4">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <AlertCircle size={20} className="text-yellow-400 mr-2 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-medium">Potential Duplicates Found</p>
                <p className="text-gray-300 text-sm">
                  {duplicates.length} customer profiles may be duplicates. Review and merge to maintain single identity.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {duplicates.map(dup => (
              <div key={dup.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Merge size={18} className="text-yellow-400 mr-2" />
                    <span className="text-white font-bold">{dup.confidence}% Match</span>
                  </div>
                  <span className="text-gray-400 text-sm">Matched on: {dup.matchedOn}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <span className="text-lg mr-2">{getSourceIcon(dup.customer1.source)}</span>
                      <span className="text-gray-400 text-xs">{dup.customer1.source}</span>
                    </div>
                    <p className="text-white font-medium">{dup.customer1.name}</p>
                    <p className="text-gray-400 text-sm">{dup.customer1.phone}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <span className="text-lg mr-2">{getSourceIcon(dup.customer2.source)}</span>
                      <span className="text-gray-400 text-xs">{dup.customer2.source}</span>
                    </div>
                    <p className="text-white font-medium">{dup.customer2.name}</p>
                    <p className="text-gray-400 text-sm">{dup.customer2.phone}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium">
                    Merge Profiles
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium">
                    Keep Separate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Segments Tab */}
      {activeTab === 'segments' && (
        <div className="px-4 space-y-3">
          <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center mb-4">
            <Tag size={20} className="mr-2" />
            Create New Segment
          </button>

          {segments.map((segment, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold">{segment.name}</h3>
                <span className="text-emerald-400 font-bold">{segment.count}</span>
              </div>
              <p className="text-gray-400 text-sm">{segment.criteria}</p>
              <div className="mt-3 flex space-x-2">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                  View Customers
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
                  <Gift size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[85vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                    {selectedCustomer.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold text-lg">{selectedCustomer.name}</h3>
                      {selectedCustomer.verified && (
                        <UserCheck size={16} className="text-green-400 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">Global ID: {selectedCustomer.globalId}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedCustomer(null)} className="text-gray-400">✕</button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Tier & Coins */}
              <div className="flex items-center justify-between">
                <span className={`px-4 py-1 rounded-full ${getTierColor(selectedCustomer.tier)}`}>
                  {selectedCustomer.tier.charAt(0).toUpperCase() + selectedCustomer.tier.slice(1)} Member
                </span>
                <div className="flex items-center text-yellow-400">
                  <Coins size={18} className="mr-1" />
                  <span className="font-bold">{selectedCustomer.coins} Coins</span>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-700/50 rounded-xl p-4 space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="text-gray-400 mr-3" />
                  <span className="text-white">{selectedCustomer.phone}</span>
                </div>
                {selectedCustomer.email && (
                  <div className="flex items-center">
                    <Mail size={16} className="text-gray-400 mr-3" />
                    <span className="text-white">{selectedCustomer.email}</span>
                  </div>
                )}
                {selectedCustomer.birthdate && (
                  <div className="flex items-center">
                    <Gift size={16} className="text-gray-400 mr-3" />
                    <span className="text-white">Birthday: {selectedCustomer.birthdate}</span>
                  </div>
                )}
              </div>

              {/* Sources */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm mb-3">Known From Channels</h4>
                <div className="flex space-x-2">
                  {selectedCustomer.sources.map((source, idx) => (
                    <div key={idx} className="bg-gray-600 px-3 py-2 rounded-lg flex items-center">
                      <span className="text-xl mr-2">{getSourceIcon(source)}</span>
                      <span className="text-white text-sm capitalize">{source}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCustomer.tags.map((tag, idx) => (
                    <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Favorites */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm mb-3">Favorite Items</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCustomer.favoriteItems.map((item, idx) => (
                    <span key={idx} className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Heart size={12} className="mr-1 text-red-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">₹{selectedCustomer.totalSpend.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">Lifetime Value</p>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{selectedCustomer.visits}</p>
                  <p className="text-gray-400 text-sm">Total Visits</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold">
                  Send Offer
                </button>
                <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold">
                  View History
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantCustomerIdentity;
