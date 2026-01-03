import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, TrendingUp, Users, Search, ShoppingBag, Heart,
  ChevronRight, Filter, Bell, Star, MapPin, Clock, Zap,
  BarChart3, Target, Eye, Package, AlertCircle, CheckCircle,
  ArrowUp, ArrowDown, Sparkles, MessageSquare, ThumbsUp,
  Calendar, Tag, Percent, Gift, ShoppingCart, Plus
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantDemandSignals = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('trending');
  const [timeRange, setTimeRange] = useState('7d');

  const tabs = [
    { id: 'trending', label: 'Trending Demand', icon: TrendingUp },
    { id: 'wishlists', label: 'Wishlist Signals', icon: Heart },
    { id: 'searches', label: 'Search Trends', icon: Search },
    { id: 'requests', label: 'Direct Requests', icon: MessageSquare }
  ];

  // Aggregated demand signals from users
  const demandSignals = [
    {
      id: 'DS001',
      type: 'category-surge',
      title: 'Winter Jackets',
      category: 'Fashion',
      signal: 'Search volume up 340%',
      demandScore: 95,
      userCount: 2340,
      trend: 'up',
      trendValue: 340,
      opportunity: 'High demand, low supply in your area',
      actionSuggestion: 'Add 10+ jacket variants with 15% discount',
      potentialRevenue: '₹45,000 - ₹80,000',
      timeWindow: 'Next 2 weeks',
      competitors: 3,
      yourInventory: 5
    },
    {
      id: 'DS002',
      type: 'wishlist-spike',
      title: 'Wireless Earbuds under ₹2000',
      category: 'Electronics',
      signal: '450 users added to wishlist this week',
      demandScore: 88,
      userCount: 450,
      trend: 'up',
      trendValue: 125,
      opportunity: 'Price-sensitive segment actively looking',
      actionSuggestion: 'Stock budget earbuds, offer ₹200 off coupon',
      potentialRevenue: '₹25,000 - ₹40,000',
      timeWindow: 'Immediate',
      competitors: 8,
      yourInventory: 12
    },
    {
      id: 'DS003',
      type: 'location-demand',
      title: 'Home Delivery - Sector 45',
      category: 'Service',
      signal: '89 delivery requests from this area',
      demandScore: 82,
      userCount: 89,
      trend: 'up',
      trendValue: 67,
      opportunity: 'Underserved locality with high purchase intent',
      actionSuggestion: 'Expand delivery to Sector 45, add ₹20 delivery fee',
      potentialRevenue: '₹15,000 - ₹25,000/month',
      timeWindow: 'Ongoing',
      competitors: 1,
      yourInventory: null
    },
    {
      id: 'DS004',
      type: 'price-sensitivity',
      title: 'Premium Coffee Beans',
      category: 'Grocery',
      signal: '120 price drop alerts set',
      demandScore: 75,
      userCount: 120,
      trend: 'stable',
      trendValue: 5,
      opportunity: 'Users waiting for discount to purchase',
      actionSuggestion: 'Offer 10% weekend discount to convert',
      potentialRevenue: '₹8,000 - ₹12,000',
      timeWindow: 'This weekend',
      competitors: 5,
      yourInventory: 25
    },
    {
      id: 'DS005',
      type: 'repeat-demand',
      title: 'Monthly Grocery Subscription',
      category: 'Grocery',
      signal: '67 users ordered same items 3+ times',
      demandScore: 70,
      userCount: 67,
      trend: 'up',
      trendValue: 23,
      opportunity: 'Convert repeat buyers to subscribers',
      actionSuggestion: 'Launch subscription with 5% recurring discount',
      potentialRevenue: '₹50,000/month recurring',
      timeWindow: 'Long-term',
      competitors: 2,
      yourInventory: null
    }
  ];

  // Wishlist insights
  const wishlistInsights = [
    {
      product: 'Nike Air Max 270',
      wishlists: 234,
      yourPrice: '₹12,999',
      avgMarketPrice: '₹11,500',
      priceGap: '+13%',
      recommendation: 'Price too high - consider matching market',
      conversionPotential: 'High if priced at ₹11,499'
    },
    {
      product: 'Samsung Galaxy Buds',
      wishlists: 189,
      yourPrice: '₹4,999',
      avgMarketPrice: '₹5,200',
      priceGap: '-4%',
      recommendation: 'Competitive price - push marketing',
      conversionPotential: 'Very High'
    },
    {
      product: 'Organic Honey 500g',
      wishlists: 156,
      yourPrice: null,
      avgMarketPrice: '₹450',
      priceGap: 'N/A',
      recommendation: 'Not in your inventory - consider adding',
      conversionPotential: 'Medium'
    }
  ];

  // Search trends in your category
  const searchTrends = [
    { term: 'winter sale', searches: 4500, trend: 'up', change: 280 },
    { term: 'buy 1 get 1', searches: 3200, trend: 'up', change: 150 },
    { term: 'same day delivery', searches: 2800, trend: 'up', change: 90 },
    { term: 'organic products', searches: 2100, trend: 'stable', change: 5 },
    { term: 'gift cards', searches: 1900, trend: 'up', change: 340 },
    { term: 'cash on delivery', searches: 1700, trend: 'down', change: -15 }
  ];

  // Direct user requests
  const directRequests = [
    {
      id: 'REQ001',
      type: 'product',
      request: 'Looking for vegan leather bags',
      users: 23,
      urgency: 'high',
      category: 'Fashion',
      status: 'unaddressed'
    },
    {
      id: 'REQ002',
      type: 'service',
      request: 'Need installation service for AC',
      users: 45,
      urgency: 'medium',
      category: 'Services',
      status: 'partially-addressed'
    },
    {
      id: 'REQ003',
      type: 'feature',
      request: 'Want EMI option on orders above ₹5000',
      users: 67,
      urgency: 'high',
      category: 'Payment',
      status: 'addressed'
    }
  ];

  const getDemandColor = (score) => {
    if (score >= 80) return 'green';
    if (score >= 60) return 'yellow';
    return 'orange';
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 via-gray-900 to-blue-900/50 border-b border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                  Demand Signals
                </h1>
                <p className="text-gray-400 text-sm">What your customers want</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value="24h">Last 24h</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Flow Indicator */}
        <div className="px-4 pb-4">
          <div className="bg-gray-800/50 rounded-xl p-3 border border-purple-500/30">
            <div className="flex items-center justify-center gap-2 text-xs">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">Users Search & Wishlist</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-medium">Signals Aggregated</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">You Act on Demand</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">2.3K</div>
            <div className="text-gray-400 text-sm">Active Signals</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">₹2.1L</div>
            <div className="text-gray-400 text-sm">Revenue Potential</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">890</div>
            <div className="text-gray-400 text-sm">Wishlist Items</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-orange-400">45</div>
            <div className="text-gray-400 text-sm">Direct Requests</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-4">
        {activeTab === 'trending' && (
          <>
            {/* Opportunity Alert */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Top Opportunity</span>
              </div>
              <p className="text-white font-medium">Winter Jackets demand is 340% higher than usual</p>
              <p className="text-gray-400 text-sm mt-1">
                2,340 users searching • Only 3 competitors in your area • Est. revenue ₹45K-80K
              </p>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Products to Capture Demand
              </button>
            </div>

            {/* Demand Signals */}
            {demandSignals.map(signal => (
              <div
                key={signal.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${getDemandColor(signal.demandScore)}-500/20 rounded-xl flex items-center justify-center`}>
                      <span className={`text-${getDemandColor(signal.demandScore)}-400 font-bold`}>
                        {signal.demandScore}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{signal.title}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">{signal.category}</span>
                        <span className={`flex items-center gap-1 ${
                          signal.trend === 'up' ? 'text-green-400' : signal.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          {signal.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : signal.trend === 'down' ? <ArrowDown className="w-3 h-3" /> : null}
                          {signal.trendValue > 0 ? '+' : ''}{signal.trendValue}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-blue-400">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{signal.userCount.toLocaleString()}</span>
                    </div>
                    <div className="text-gray-500 text-xs">users interested</div>
                  </div>
                </div>

                <div className="bg-purple-500/10 rounded-lg p-3 mb-3">
                  <div className="text-purple-400 text-sm font-medium mb-1">{signal.signal}</div>
                  <div className="text-gray-400 text-sm">{signal.opportunity}</div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <div className="text-green-400 font-medium text-sm">{signal.potentialRevenue}</div>
                    <div className="text-gray-500 text-xs">Est. Revenue</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <div className="text-orange-400 font-medium text-sm">{signal.competitors}</div>
                    <div className="text-gray-500 text-xs">Competitors</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <div className="text-blue-400 font-medium text-sm">{signal.yourInventory || 'N/A'}</div>
                    <div className="text-gray-500 text-xs">Your Stock</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {signal.timeWindow}
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Act Now
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'wishlists' && (
          <>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">890 Products Wishlisted by Users</span>
              </div>
              <p className="text-gray-400 text-sm">
                Users add products to wishlist when interested but not ready to buy. Price drops or discounts convert them.
              </p>
            </div>

            {wishlistInsights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{item.product}</h3>
                    <div className="flex items-center gap-1 text-pink-400 mt-1">
                      <Heart className="w-4 h-4 fill-pink-400" />
                      <span>{item.wishlists} wishlists</span>
                    </div>
                  </div>
                  <div className="text-right">
                    {item.yourPrice ? (
                      <>
                        <div className="text-white font-medium">{item.yourPrice}</div>
                        <div className={`text-sm ${item.priceGap.startsWith('+') ? 'text-red-400' : 'text-green-400'}`}>
                          {item.priceGap} vs market
                        </div>
                      </>
                    ) : (
                      <div className="text-orange-400 text-sm">Not in stock</div>
                    )}
                  </div>
                </div>

                <div className={`p-3 rounded-lg mb-3 ${
                  item.conversionPotential === 'Very High' ? 'bg-green-500/10' :
                  item.conversionPotential === 'High' ? 'bg-blue-500/10' : 'bg-orange-500/10'
                }`}>
                  <div className="text-gray-400 text-sm">{item.recommendation}</div>
                  <div className={`text-sm font-medium mt-1 ${
                    item.conversionPotential === 'Very High' ? 'text-green-400' :
                    item.conversionPotential === 'High' ? 'text-blue-400' : 'text-orange-400'
                  }`}>
                    Conversion Potential: {item.conversionPotential}
                  </div>
                </div>

                <div className="flex gap-2">
                  {item.yourPrice ? (
                    <>
                      <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm">
                        Adjust Price
                      </button>
                      <button className="flex-1 py-2 bg-gray-700 text-white rounded-lg text-sm">
                        Create Offer
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add to Inventory
                    </button>
                  )}
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'searches' && (
          <>
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" />
                Top Search Terms in Your Category
              </h3>

              {searchTrends.map((term, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-white font-medium">{term.term}</div>
                      <div className="text-gray-500 text-sm">{term.searches.toLocaleString()} searches</div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 ${
                    term.trend === 'up' ? 'text-green-400' : term.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {term.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : term.trend === 'down' ? <ArrowDown className="w-4 h-4" /> : null}
                    {term.change > 0 ? '+' : ''}{term.change}%
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Insight</span>
              </div>
              <p className="text-white">"Gift cards" searches up 340% - holiday season approaching</p>
              <p className="text-gray-400 text-sm mt-1">Consider adding gift card options to your store</p>
            </div>
          </>
        )}

        {activeTab === 'requests' && (
          <>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-medium">45 Direct User Requests</span>
              </div>
              <p className="text-gray-400 text-sm">
                Users are directly asking for products/services you don't currently offer.
              </p>
            </div>

            {directRequests.map(request => (
              <div
                key={request.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        request.type === 'product' ? 'bg-blue-500/20 text-blue-400' :
                        request.type === 'service' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {request.type}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        request.urgency === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {request.urgency} priority
                      </span>
                    </div>
                    <h3 className="text-white font-medium">{request.request}</h3>
                    <div className="text-gray-500 text-sm">{request.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-blue-400">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{request.users}</span>
                    </div>
                    <div className="text-gray-500 text-xs">users asking</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded text-xs ${
                    request.status === 'addressed' ? 'bg-green-500/20 text-green-400' :
                    request.status === 'partially-addressed' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {request.status === 'addressed' ? '✓ Addressed' :
                     request.status === 'partially-addressed' ? 'Partially Addressed' : 'Unaddressed'}
                  </span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm">
                    Address Request
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <MerchantNav />
    </div>
  );
};

export default MerchantDemandSignals;
