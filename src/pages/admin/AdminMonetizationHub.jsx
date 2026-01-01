import React, { useState } from 'react';
import {
  ArrowLeft, DollarSign, TrendingUp, Crown, Store, Megaphone,
  Target, BarChart2, Percent, Award, ChevronRight, Plus, Eye,
  Settings, Calendar, Clock, Users, Zap, Star, Gift, Shield,
  Layers, Play, Pause, Edit, Trash2, Filter, Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminMonetizationHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAuctionModal, setShowAuctionModal] = useState(false);

  // Revenue Streams Overview
  const revenueStreams = {
    totalRevenue: 4520000,
    thisMonth: 850000,
    growth: 23.5,
    breakdown: [
      { source: 'Commission', amount: 2800000, percent: 62, color: 'blue' },
      { source: 'Sponsored Placements', amount: 950000, percent: 21, color: 'purple' },
      { source: 'SaaS Subscriptions', amount: 520000, percent: 12, color: 'green' },
      { source: 'Premium Features', amount: 250000, percent: 5, color: 'yellow' },
    ]
  };

  // Merchant SaaS Tiers
  const [saasTiers, setSaasTiers] = useState([
    {
      id: 'free',
      name: 'Free',
      price: 0,
      merchants: 2500,
      features: [
        'Basic QR payments',
        'Standard reports',
        'Email support',
        '5% commission'
      ],
      limits: {
        transactions: 100,
        products: 50,
        staff: 1
      },
      color: 'gray'
    },
    {
      id: 'starter',
      name: 'Starter',
      price: 499,
      merchants: 890,
      features: [
        'Everything in Free',
        'Custom QR branding',
        'Weekly analytics',
        'Priority support',
        '4% commission'
      ],
      limits: {
        transactions: 500,
        products: 200,
        staff: 3
      },
      color: 'blue'
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 1499,
      merchants: 340,
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Customer insights',
        'Multiple outlets',
        'API access',
        '3% commission'
      ],
      limits: {
        transactions: 2000,
        products: 1000,
        staff: 10
      },
      color: 'purple',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 4999,
      merchants: 85,
      features: [
        'Everything in Growth',
        'Dedicated manager',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        '2% commission'
      ],
      limits: {
        transactions: 'Unlimited',
        products: 'Unlimited',
        staff: 'Unlimited'
      },
      color: 'yellow'
    },
  ]);

  // Sponsored Placement Auctions
  const [adAuctions, setAdAuctions] = useState([
    {
      id: 'AUC001',
      placement: 'Homepage Banner',
      description: 'Top banner on user home screen',
      impressions: '500K daily',
      currentBid: 25000,
      minBid: 15000,
      bidIncrement: 1000,
      topBidders: [
        { merchant: 'Dominos Pizza', bid: 25000, status: 'leading' },
        { merchant: 'Pizza Hut', bid: 23000, status: 'outbid' },
        { merchant: 'McDonalds', bid: 20000, status: 'outbid' },
      ],
      endsAt: '2024-12-30 23:59',
      status: 'active'
    },
    {
      id: 'AUC002',
      placement: 'Category Spotlight',
      description: 'Featured merchant in category listing',
      impressions: '200K daily',
      currentBid: 12000,
      minBid: 8000,
      bidIncrement: 500,
      topBidders: [
        { merchant: 'Bata Shoes', bid: 12000, status: 'leading' },
        { merchant: 'Nike Store', bid: 11500, status: 'outbid' },
      ],
      endsAt: '2024-12-31 23:59',
      status: 'active'
    },
    {
      id: 'AUC003',
      placement: 'Push Notification Slot',
      description: 'Sponsored push to user segment',
      impressions: '100K per push',
      currentBid: 8000,
      minBid: 5000,
      bidIncrement: 500,
      topBidders: [
        { merchant: 'Cafe Coffee Day', bid: 8000, status: 'leading' },
      ],
      endsAt: '2024-12-29 18:00',
      status: 'active'
    },
  ]);

  // Sponsored Campaigns Running
  const [activeCampaigns, setActiveCampaigns] = useState([
    {
      id: 'CAM001',
      merchant: 'Dominos Pizza',
      type: 'Homepage Banner',
      startDate: '2024-12-20',
      endDate: '2024-12-27',
      budget: 50000,
      spent: 38500,
      impressions: 425000,
      clicks: 12500,
      ctr: 2.94,
      conversions: 850,
      roi: 340,
      status: 'active'
    },
    {
      id: 'CAM002',
      merchant: 'Starbucks',
      type: 'Category Spotlight',
      startDate: '2024-12-22',
      endDate: '2024-12-29',
      budget: 25000,
      spent: 12800,
      impressions: 180000,
      clicks: 5400,
      ctr: 3.0,
      conversions: 320,
      roi: 280,
      status: 'active'
    },
  ]);

  // Premium Features
  const premiumFeatures = [
    {
      id: 'boost',
      name: 'Visibility Boost',
      description: '2x visibility in search results for 24 hours',
      price: 199,
      purchases: 1250,
      revenue: 248750,
      icon: Zap
    },
    {
      id: 'featured',
      name: 'Featured Badge',
      description: 'Golden badge on profile for 7 days',
      price: 499,
      purchases: 340,
      revenue: 169660,
      icon: Award
    },
    {
      id: 'analytics',
      name: 'Deep Analytics',
      description: 'Detailed customer behavior insights',
      price: 299,
      purchases: 450,
      revenue: 134550,
      icon: BarChart2
    },
    {
      id: 'priority',
      name: 'Priority Support',
      description: '24/7 dedicated support for 30 days',
      price: 999,
      purchases: 85,
      revenue: 84915,
      icon: Shield
    },
  ];

  // Commission Settings
  const [commissionRules, setCommissionRules] = useState([
    { category: 'Restaurants', baseRate: 5, effectiveRate: 4.2, volume: 15000000 },
    { category: 'Grocery', baseRate: 3, effectiveRate: 2.8, volume: 8500000 },
    { category: 'Fashion', baseRate: 8, effectiveRate: 7.5, volume: 6200000 },
    { category: 'Electronics', baseRate: 4, effectiveRate: 3.5, volume: 4800000 },
    { category: 'Entertainment', baseRate: 10, effectiveRate: 9.2, volume: 3200000 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Monetization Hub</h1>
              <p className="text-emerald-200 text-sm">Revenue & ad platform</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <DollarSign size={16} className="mr-1" />
            <span className="text-sm">₹{(revenueStreams.thisMonth / 100000).toFixed(1)}L MTD</span>
          </div>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">₹{(revenueStreams.totalRevenue / 100000).toFixed(1)}L</p>
            <p className="text-xs text-emerald-200">Total Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-300">+{revenueStreams.growth}%</p>
            <p className="text-xs text-emerald-200">Growth MoM</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{saasTiers.reduce((sum, t) => sum + t.merchants, 0)}</p>
            <p className="text-xs text-emerald-200">Paid Merchants</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['overview', 'saas', 'auctions', 'campaigns', 'premium'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-emerald-400 border-b-2 border-emerald-400'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Revenue Breakdown */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <BarChart2 size={18} className="text-emerald-400 mr-2" />
                Revenue Breakdown
              </h3>
              <div className="space-y-3">
                {revenueStreams.breakdown.map(stream => (
                  <div key={stream.source}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white">{stream.source}</span>
                      <span className="text-white font-bold">
                        ₹{(stream.amount / 100000).toFixed(1)}L ({stream.percent}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${stream.color}-500`}
                        style={{ width: `${stream.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commission Summary */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Percent size={18} className="text-blue-400 mr-2" />
                Commission by Category
              </h3>
              <div className="space-y-2">
                {commissionRules.map(rule => (
                  <div key={rule.category} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <div>
                      <p className="text-white font-medium">{rule.category}</p>
                      <p className="text-gray-400 text-xs">Volume: ₹{(rule.volume / 100000).toFixed(1)}L</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">{rule.effectiveRate}%</p>
                      <p className="text-gray-400 text-xs">Base: {rule.baseRate}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab('auctions')}
                className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4"
              >
                <Megaphone size={28} className="text-purple-400 mb-2" />
                <p className="text-white font-medium">Ad Auctions</p>
                <p className="text-gray-400 text-sm">{adAuctions.filter(a => a.status === 'active').length} active</p>
              </button>
              <button
                onClick={() => setActiveTab('saas')}
                className="bg-emerald-600/20 border border-emerald-500/30 rounded-xl p-4"
              >
                <Crown size={28} className="text-emerald-400 mb-2" />
                <p className="text-white font-medium">SaaS Tiers</p>
                <p className="text-gray-400 text-sm">{saasTiers.length} plans</p>
              </button>
            </div>
          </div>
        )}

        {/* SaaS Tiers Tab */}
        {activeTab === 'saas' && (
          <div className="space-y-4">
            {saasTiers.map(tier => (
              <div
                key={tier.id}
                className={`bg-gray-800 rounded-xl p-4 relative overflow-hidden ${
                  tier.popular ? 'border-2 border-purple-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className={`w-12 h-12 bg-${tier.color}-600 rounded-xl flex items-center justify-center mb-2`}>
                      <Crown size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl">{tier.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-2xl">
                      {tier.price === 0 ? 'Free' : `₹${tier.price}`}
                    </p>
                    {tier.price > 0 && <p className="text-gray-400 text-sm">/month</p>}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-4">
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Star size={12} className="text-yellow-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limits */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{tier.limits.transactions}</p>
                    <p className="text-gray-400 text-xs">Txns/mo</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{tier.limits.products}</p>
                    <p className="text-gray-400 text-xs">Products</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{tier.limits.staff}</p>
                    <p className="text-gray-400 text-xs">Staff</p>
                  </div>
                </div>

                {/* Active Merchants */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users size={16} className="text-gray-400 mr-2" />
                    <span className="text-gray-400">{tier.merchants} merchants</span>
                  </div>
                  <button className="text-emerald-400 text-sm flex items-center">
                    <Edit size={14} className="mr-1" /> Edit Plan
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Tier */}
            <button className="w-full bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl p-6 text-center">
              <Plus size={32} className="text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400">Add New Tier</p>
            </button>
          </div>
        )}

        {/* Auctions Tab */}
        {activeTab === 'auctions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">Active Ad Auctions</h3>
              <button
                onClick={() => setShowAuctionModal(true)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
              >
                <Plus size={16} className="mr-1" /> Create Auction
              </button>
            </div>

            {adAuctions.map(auction => (
              <div key={auction.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      auction.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
                    } text-white`}>
                      {auction.status}
                    </span>
                    <h3 className="text-white font-bold mt-2">{auction.placement}</h3>
                    <p className="text-gray-400 text-sm">{auction.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">Current Bid</p>
                    <p className="text-emerald-400 font-bold text-xl">₹{auction.currentBid.toLocaleString()}</p>
                  </div>
                </div>

                {/* Auction Details */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-medium">{auction.impressions}</p>
                    <p className="text-gray-400 text-xs">Impressions</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-medium">₹{auction.minBid.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Min Bid</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-orange-400 font-medium">{new Date(auction.endsAt).toLocaleDateString()}</p>
                    <p className="text-gray-400 text-xs">Ends</p>
                  </div>
                </div>

                {/* Top Bidders */}
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-400 text-xs mb-2">Top Bidders</p>
                  <div className="space-y-2">
                    {auction.topBidders.map((bidder, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                            bidder.status === 'leading' ? 'bg-emerald-600' : 'bg-gray-600'
                          } text-white text-xs`}>
                            {idx + 1}
                          </span>
                          <span className="text-white">{bidder.merchant}</span>
                        </div>
                        <div className="flex items-center">
                          <span className={`font-medium ${
                            bidder.status === 'leading' ? 'text-emerald-400' : 'text-gray-400'
                          }`}>
                            ₹{bidder.bid.toLocaleString()}
                          </span>
                          {bidder.status === 'leading' && (
                            <span className="ml-2 text-xs bg-emerald-600 text-white px-2 py-0.5 rounded">
                              Leading
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-4">
            {activeCampaigns.map(campaign => (
              <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-3">
                      <Store size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{campaign.merchant}</h3>
                      <p className="text-gray-400 text-sm">{campaign.type}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    campaign.status === 'active' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {campaign.status}
                  </span>
                </div>

                {/* Budget Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Budget Spent</span>
                    <span className="text-white">₹{campaign.spent.toLocaleString()} / ₹{campaign.budget.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500"
                      style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{(campaign.impressions / 1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-xs">Impressions</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{(campaign.clicks / 1000).toFixed(1)}K</p>
                    <p className="text-gray-400 text-xs">Clicks</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-blue-400 font-bold">{campaign.ctr}%</p>
                    <p className="text-gray-400 text-xs">CTR</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">{campaign.roi}%</p>
                    <p className="text-gray-400 text-xs">ROI</p>
                  </div>
                </div>

                {/* Date Range */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span>{campaign.startDate} → {campaign.endDate}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-yellow-400">
                      <Pause size={18} />
                    </button>
                    <button className="text-blue-400">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Premium Features Tab */}
        {activeTab === 'premium' && (
          <div className="space-y-4">
            {premiumFeatures.map(feature => (
              <div key={feature.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mr-3">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{feature.name}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-400 font-bold text-xl">₹{feature.price}</p>
                    <p className="text-gray-400 text-xs">per use</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-white font-bold">{feature.purchases.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Purchases</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-green-400 font-bold">₹{(feature.revenue / 1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-xs">Revenue</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Pricing Optimization */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-3">
                <TrendingUp size={20} className="text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Pricing Optimization Suggestion</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Based on demand elasticity analysis, increasing "Visibility Boost" price to ₹249 could increase revenue by ~15% with only 8% volume drop.
              </p>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">
                Apply Suggestion
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create Auction Modal */}
      {showAuctionModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Create New Ad Auction</h3>
              <button onClick={() => setShowAuctionModal(false)}>
                <span className="text-gray-400 text-2xl">&times;</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Placement Type</label>
                <select className="w-full bg-gray-800 text-white p-3 rounded-xl">
                  <option>Homepage Banner</option>
                  <option>Category Spotlight</option>
                  <option>Push Notification</option>
                  <option>Search Results Top</option>
                  <option>In-App Story</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Minimum Bid</label>
                  <input
                    type="number"
                    placeholder="₹10000"
                    className="w-full bg-gray-800 text-white p-3 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Bid Increment</label>
                  <input
                    type="number"
                    placeholder="₹500"
                    className="w-full bg-gray-800 text-white p-3 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Auction End Date</label>
                <input
                  type="datetime-local"
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>

              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold">
                Launch Auction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMonetizationHub;
