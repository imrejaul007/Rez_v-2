import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, MessageSquare, Heart, Search, Bell, Plus,
  ChevronRight, Star, MapPin, Clock, CheckCircle, Users,
  ThumbsUp, Send, Filter, TrendingUp, Package, Store,
  Zap, Gift, Tag, Sparkles, ArrowUp, Eye, AlertCircle
} from 'lucide-react';

const UserDemandRequests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my-requests');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [newRequest, setNewRequest] = useState({ type: 'product', text: '', category: '' });

  const tabs = [
    { id: 'my-requests', label: 'My Requests', count: 5 },
    { id: 'trending', label: 'Trending Requests', count: 156 },
    { id: 'fulfilled', label: 'Recently Fulfilled', count: 23 }
  ];

  const categories = [
    'Electronics', 'Fashion', 'Grocery', 'Food & Dining',
    'Beauty', 'Home', 'Services', 'Other'
  ];

  // User's own requests
  const myRequests = [
    {
      id: 'REQ001',
      type: 'product',
      request: 'Looking for vegan leather laptop bags under ₹3000',
      category: 'Fashion',
      createdAt: '2 days ago',
      status: 'active',
      upvotes: 45,
      merchantResponses: 3,
      notifications: true
    },
    {
      id: 'REQ002',
      type: 'service',
      request: 'Need same-day AC repair service in Sector 22',
      category: 'Services',
      createdAt: '5 days ago',
      status: 'fulfilled',
      upvotes: 12,
      merchantResponses: 5,
      fulfilledBy: 'CoolAir Services',
      notifications: true
    },
    {
      id: 'REQ003',
      type: 'product',
      request: 'Organic cold-pressed coconut oil 1L',
      category: 'Grocery',
      createdAt: '1 week ago',
      status: 'active',
      upvotes: 89,
      merchantResponses: 2,
      notifications: false
    }
  ];

  // Trending community requests
  const trendingRequests = [
    {
      id: 'TR001',
      request: 'Affordable gym membership with flexible timings',
      category: 'Fitness',
      upvotes: 342,
      users: 156,
      trend: 'hot',
      merchantInterest: 8,
      userJoined: false
    },
    {
      id: 'TR002',
      request: 'Pet-friendly cafes in the city',
      category: 'Food & Dining',
      upvotes: 289,
      users: 134,
      trend: 'rising',
      merchantInterest: 5,
      userJoined: true
    },
    {
      id: 'TR003',
      request: 'Electric scooter rental for short commutes',
      category: 'Transport',
      upvotes: 234,
      users: 98,
      trend: 'hot',
      merchantInterest: 3,
      userJoined: false
    },
    {
      id: 'TR004',
      request: 'Subscription box for local artisan products',
      category: 'Lifestyle',
      upvotes: 198,
      users: 87,
      trend: 'rising',
      merchantInterest: 12,
      userJoined: false
    },
    {
      id: 'TR005',
      request: 'Late night food delivery after 11 PM',
      category: 'Food & Dining',
      upvotes: 456,
      users: 234,
      trend: 'hot',
      merchantInterest: 15,
      userJoined: true
    }
  ];

  // Recently fulfilled requests
  const fulfilledRequests = [
    {
      id: 'FUL001',
      request: 'Need a store that sells imported cheese varieties',
      category: 'Grocery',
      originalUsers: 67,
      fulfilledBy: 'Gourmet Corner',
      fulfilledDate: '3 days ago',
      rating: 4.5,
      discount: '10% for early supporters'
    },
    {
      id: 'FUL002',
      request: 'Looking for plant-based protein powders',
      category: 'Health',
      originalUsers: 123,
      fulfilledBy: 'FitNutrition Store',
      fulfilledDate: '1 week ago',
      rating: 4.8,
      discount: '15% launch offer'
    },
    {
      id: 'FUL003',
      request: 'Craft beer home delivery',
      category: 'Beverages',
      originalUsers: 89,
      fulfilledBy: 'BrewBox Delivery',
      fulfilledDate: '2 weeks ago',
      rating: 4.3,
      discount: 'Free delivery for first order'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 via-gray-900 to-purple-900/50 border-b border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                  Request What You Want
                </h1>
                <p className="text-gray-400 text-sm">Tell merchants what you're looking for</p>
              </div>
            </div>
            <button
              onClick={() => setShowRequestModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Request
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="px-4 pb-4">
          <div className="bg-gray-800/50 rounded-xl p-3 border border-blue-500/30">
            <div className="flex items-center justify-center gap-2 text-xs">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium">You Request</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-medium">Community Upvotes</span>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <Store className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">Merchants Fulfill</span>
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
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-blue-500' : 'bg-gray-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
            <div className="text-2xl font-bold text-blue-400">156</div>
            <div className="text-gray-400 text-sm">Active Requests</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
            <div className="text-2xl font-bold text-green-400">23</div>
            <div className="text-gray-400 text-sm">Fulfilled This Week</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
            <div className="text-2xl font-bold text-purple-400">45</div>
            <div className="text-gray-400 text-sm">Merchants Listening</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-4">
        {activeTab === 'my-requests' && (
          <>
            {myRequests.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <div className="text-gray-400 mb-4">You haven't made any requests yet</div>
                <button
                  onClick={() => setShowRequestModal(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium"
                >
                  Make Your First Request
                </button>
              </div>
            ) : (
              myRequests.map(request => (
                <div
                  key={request.id}
                  className={`bg-gray-800/50 rounded-xl border ${
                    request.status === 'fulfilled' ? 'border-green-500/30' : 'border-gray-700'
                  } p-4`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          request.type === 'product' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {request.type}
                        </span>
                        <span className="text-gray-500 text-sm">{request.category}</span>
                        {request.status === 'fulfilled' && (
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Fulfilled
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-medium">{request.request}</h3>
                      <div className="text-gray-500 text-sm mt-1">{request.createdAt}</div>
                    </div>
                    <button className={`p-2 rounded-lg ${request.notifications ? 'bg-blue-500/20' : 'bg-gray-700'}`}>
                      <Bell className={`w-5 h-5 ${request.notifications ? 'text-blue-400' : 'text-gray-500'}`} />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1 text-purple-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="font-medium">{request.upvotes}</span>
                      <span className="text-gray-500 text-sm">upvotes</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-400">
                      <Store className="w-4 h-4" />
                      <span className="font-medium">{request.merchantResponses}</span>
                      <span className="text-gray-500 text-sm">merchants responded</span>
                    </div>
                  </div>

                  {request.status === 'fulfilled' && request.fulfilledBy && (
                    <div className="bg-green-500/10 rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-green-400 text-sm">Fulfilled by</div>
                          <div className="text-white font-medium">{request.fulfilledBy}</div>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
                          View Store
                        </button>
                      </div>
                    </div>
                  )}

                  {request.status === 'active' && request.merchantResponses > 0 && (
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View {request.merchantResponses} Merchant Responses
                    </button>
                  )}
                </div>
              ))
            )}
          </>
        )}

        {activeTab === 'trending' && (
          <>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Community Power</span>
              </div>
              <p className="text-gray-400 text-sm">
                Upvote requests you want too! More upvotes = faster merchant response.
              </p>
            </div>

            {trendingRequests.map(request => (
              <div
                key={request.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-4"
              >
                <div className="flex items-start gap-3">
                  {/* Upvote Button */}
                  <button className={`flex flex-col items-center p-2 rounded-lg ${
                    request.userJoined ? 'bg-purple-500/20' : 'bg-gray-700'
                  }`}>
                    <ArrowUp className={`w-5 h-5 ${request.userJoined ? 'text-purple-400' : 'text-gray-400'}`} />
                    <span className={`text-sm font-medium ${request.userJoined ? 'text-purple-400' : 'text-gray-400'}`}>
                      {request.upvotes}
                    </span>
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-500 text-sm">{request.category}</span>
                      {request.trend === 'hot' && (
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Hot
                        </span>
                      )}
                      {request.trend === 'rising' && (
                        <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Rising
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-medium mb-2">{request.request}</h3>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-blue-400">
                        <Users className="w-4 h-4" />
                        <span>{request.users} users want this</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-400">
                        <Store className="w-4 h-4" />
                        <span>{request.merchantInterest} merchants interested</span>
                      </div>
                    </div>
                  </div>
                </div>

                {!request.userJoined && (
                  <button className="w-full mt-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    I Want This Too
                  </button>
                )}
              </div>
            ))}
          </>
        )}

        {activeTab === 'fulfilled' && (
          <>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Requests That Became Reality</span>
              </div>
              <p className="text-gray-400 text-sm">
                These community requests were fulfilled by merchants. Early supporters get special discounts!
              </p>
            </div>

            {fulfilledRequests.map(request => (
              <div
                key={request.id}
                className="bg-gray-800/50 rounded-xl border border-green-500/30 p-4"
              >
                <div className="mb-3">
                  <div className="text-gray-500 text-sm mb-1">{request.category}</div>
                  <h3 className="text-white font-medium">{request.request}</h3>
                  <div className="text-gray-500 text-sm mt-1">
                    Originally requested by {request.originalUsers} users
                  </div>
                </div>

                <div className="bg-green-500/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-green-400 text-sm">Fulfilled by</div>
                      <div className="text-white font-semibold">{request.fulfilledBy}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-medium">{request.rating}</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">{request.fulfilledDate}</div>
                </div>

                {request.discount && (
                  <div className="bg-orange-500/10 rounded-lg p-2 mb-3 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 text-sm font-medium">{request.discount}</span>
                  </div>
                )}

                <button className="w-full py-2 bg-green-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                  <Store className="w-4 h-4" />
                  Visit Store
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Create Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center">
          <div className="bg-gray-800 rounded-t-2xl w-full max-w-lg">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">What Are You Looking For?</h2>
                <button
                  onClick={() => setShowRequestModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Request Type */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Type</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setNewRequest({...newRequest, type: 'product'})}
                    className={`flex-1 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                      newRequest.type === 'product'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    Product
                  </button>
                  <button
                    onClick={() => setNewRequest({...newRequest, type: 'service'})}
                    className={`flex-1 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                      newRequest.type === 'service'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    <Sparkles className="w-5 h-5" />
                    Service
                  </button>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setNewRequest({...newRequest, category: cat})}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        newRequest.category === cat
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-700 text-gray-400'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Request Text */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">Describe what you want</label>
                <textarea
                  value={newRequest.text}
                  onChange={(e) => setNewRequest({...newRequest, text: e.target.value})}
                  placeholder="e.g., Looking for organic honey from local farms under ₹500..."
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500"
                />
                <div className="text-gray-500 text-xs mt-1">Be specific about what you're looking for</div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div className="flex-1">
                  <div className="text-white text-sm">Location</div>
                  <div className="text-gray-400 text-sm">Sector 22, Gurgaon</div>
                </div>
                <button className="text-blue-400 text-sm">Change</button>
              </div>

              {/* Notify */}
              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white text-sm">Notify me when fulfilled</div>
                    <div className="text-gray-400 text-xs">Get alerts when merchants respond</div>
                  </div>
                </div>
                <div className="w-10 h-6 bg-purple-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              <button
                onClick={() => setShowRequestModal(false)}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDemandRequests;
