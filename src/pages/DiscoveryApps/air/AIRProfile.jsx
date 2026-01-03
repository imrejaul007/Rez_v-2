import React, { useState } from 'react';
import {
  User, Settings, Bell, Wallet, Heart, Clock, Star, Gift,
  ChevronRight, Shield, HelpCircle, LogOut, Sparkles,
  TrendingUp, Target, Award, Zap, Edit2, Camera
} from 'lucide-react';

// AI-R Profile: User Profile with AI Insights
// Backend API Required: GET /api/air/profile
// Backend API Required: GET /api/air/profile/ai-insights
// Backend API Required: PUT /api/air/profile/preferences

const AIRProfile = () => {
  const [activeTab, setActiveTab] = useState('insights');

  const user = {
    name: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "+91 98765 43210",
    avatar: null,
    memberSince: "Jan 2024",
    tier: "Gold",
    coins: 2450,
    totalSaved: 12850,
    discoveryScore: 87
  };

  // AI-generated insights about the user
  const aiInsights = {
    spendingPattern: {
      title: "Your Spending Pattern",
      insights: [
        { label: "Most Active Day", value: "Saturday", icon: "📅" },
        { label: "Peak Time", value: "7-9 PM", icon: "🕖" },
        { label: "Avg. Transaction", value: "₹1,250", icon: "💳" },
        { label: "Monthly Visits", value: "18", icon: "🏪" }
      ]
    },
    preferences: {
      title: "AI Understands You",
      categories: [
        { name: "Food & Dining", match: 92, icon: "🍽️" },
        { name: "Electronics", match: 78, icon: "📱" },
        { name: "Fashion", match: 65, icon: "👗" },
        { name: "Health & Wellness", match: 58, icon: "🧘" }
      ]
    },
    achievements: [
      { title: "Smart Saver", description: "Saved ₹5000+ in a month", icon: "💰", earned: true },
      { title: "Discovery Master", description: "Tried 10 new merchants", icon: "🎯", earned: true },
      { title: "Coin Collector", description: "Earned 5000+ coins", icon: "🪙", earned: false },
      { title: "Review Champion", description: "Wrote 20+ reviews", icon: "⭐", earned: false }
    ],
    predictions: [
      { text: "You'll likely visit a coffee shop tomorrow morning", confidence: 85 },
      { text: "Weekend dinner out predicted - check Italian spots", confidence: 72 },
      { text: "Electronics purchase coming up based on browsing", confidence: 68 }
    ]
  };

  const menuItems = [
    { icon: Wallet, label: "My Wallet", value: `${user.coins} Coins`, route: "/wallet" },
    { icon: Heart, label: "Saved Places", value: "24 places", route: "/saved" },
    { icon: Clock, label: "History", value: "View all", route: "/history" },
    { icon: Star, label: "My Reviews", value: "12 reviews", route: "/reviews" },
    { icon: Gift, label: "Rewards", value: "3 pending", route: "/rewards" },
    { icon: Bell, label: "Notifications", value: "", route: "/notifications" },
    { icon: Settings, label: "Settings", value: "", route: "/settings" },
    { icon: Shield, label: "Privacy", value: "", route: "/privacy" },
    { icon: HelpCircle, label: "Help & Support", value: "", route: "/help" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 pt-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Camera className="w-4 h-4 text-purple-600" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <p className="text-purple-200 text-sm">{user.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                {user.tier}
              </span>
              <span className="text-purple-200 text-xs">Member since {user.memberSince}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{user.coins}</p>
              <p className="text-xs text-gray-500">ReZ Coins</p>
            </div>
            <div className="text-center border-x border-gray-100">
              <p className="text-2xl font-bold text-green-600">₹{user.totalSaved.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Total Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{user.discoveryScore}%</p>
              <p className="text-xs text-gray-500">Discovery Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-1 flex">
          {['insights', 'menu'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              {tab === 'insights' ? 'AI Insights' : 'Account'}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'insights' ? (
        <div className="px-4 mt-4 space-y-4">
          {/* Spending Pattern */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              {aiInsights.spendingPattern.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {aiInsights.spendingPattern.insights.map((insight, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{insight.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500">{insight.label}</p>
                      <p className="font-semibold text-gray-800">{insight.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Preferences */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-purple-600" />
              {aiInsights.preferences.title}
            </h3>
            <div className="space-y-3">
              {aiInsights.preferences.categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700">{cat.name}</span>
                      <span className="text-sm font-medium text-purple-600">{cat.match}% match</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        style={{ width: `${cat.match}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-purple-600" />
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {aiInsights.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-3 ${
                    achievement.earned ? 'bg-purple-50' : 'bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <p className="font-medium text-sm text-gray-800">{achievement.title}</p>
                  <p className="text-xs text-gray-500">{achievement.description}</p>
                  {achievement.earned && (
                    <span className="inline-block mt-2 text-xs text-purple-600 font-medium">✓ Earned</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI Predictions */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4">
            <h3 className="font-semibold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" />
              AI Predictions
            </h3>
            <div className="space-y-3">
              {aiInsights.predictions.map((pred, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-3">
                  <p className="text-white text-sm">{pred.text}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: `${pred.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs text-purple-200">{pred.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 mt-4">
          {/* Menu Items */}
          <div className="bg-white rounded-xl overflow-hidden">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">{item.label}</p>
                </div>
                {item.value && (
                  <span className="text-sm text-gray-500">{item.value}</span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>

          {/* Logout */}
          <button className="w-full mt-4 bg-white text-red-600 py-4 rounded-xl font-medium flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AIRProfile;
