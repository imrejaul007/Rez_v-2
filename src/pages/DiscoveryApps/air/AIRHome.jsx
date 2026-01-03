import React, { useState } from 'react';
import {
  Sparkles, Mic, Camera, Search, ArrowRight, Star, MapPin, Clock,
  TrendingUp, Heart, Zap, Gift, ChevronRight, Bot, MessageSquare,
  Wallet, History, User, Home, Compass, ShoppingBag
} from 'lucide-react';

// AI-R: AI-First Discovery Interface
// Clones: ReZ Wallet + AIRA Engine
// Unique: Conversational AI discovery experience

const AIRHome = () => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [activeTab, setActiveTab] = useState('discover');

  // AI-powered suggestions based on user context
  const aiSuggestions = [
    { text: "Find me a good coffee shop nearby", icon: "☕" },
    { text: "Best deals on electronics today", icon: "📱" },
    { text: "Restaurants with outdoor seating", icon: "🍽️" },
    { text: "Where can I use my 500 coins?", icon: "🪙" }
  ];

  // Recent AI conversations
  const recentConversations = [
    {
      id: 1,
      query: "Best birthday gift ideas under ₹2000",
      response: "Found 12 options with cashback",
      timestamp: "2 hours ago",
      savedCoins: 150
    },
    {
      id: 2,
      query: "Healthy lunch options near office",
      response: "5 restaurants match your preferences",
      timestamp: "Yesterday",
      savedCoins: 80
    }
  ];

  // AI-curated discoveries
  const aiDiscoveries = [
    {
      id: 1,
      title: "Perfect for You",
      subtitle: "Based on your taste profile",
      items: [
        { name: "Cafe Mocha", type: "Coffee", rating: 4.8, distance: "0.5 km", cashback: "15%", image: "☕" },
        { name: "Green Bowl", type: "Healthy", rating: 4.6, distance: "1.2 km", cashback: "10%", image: "🥗" },
        { name: "Tech Hub", type: "Electronics", rating: 4.7, distance: "2.0 km", cashback: "8%", image: "💻" }
      ]
    },
    {
      id: 2,
      title: "Trending Now",
      subtitle: "Popular in your area",
      items: [
        { name: "Spice Garden", type: "Indian", rating: 4.9, distance: "1.5 km", cashback: "20%", image: "🍛" },
        { name: "Fit Studio", type: "Gym", rating: 4.5, distance: "0.8 km", cashback: "25%", image: "💪" },
        { name: "Style Street", type: "Fashion", rating: 4.4, distance: "3.0 km", cashback: "12%", image: "👗" }
      ]
    }
  ];

  // Quick actions with AI
  const quickActions = [
    { icon: Gift, label: "Best Deals", color: "bg-orange-500" },
    { icon: MapPin, label: "Nearby", color: "bg-blue-500" },
    { icon: TrendingUp, label: "Trending", color: "bg-green-500" },
    { icon: Heart, label: "For You", color: "bg-pink-500" },
    { icon: Zap, label: "Flash", color: "bg-purple-500" },
    { icon: Star, label: "Top Rated", color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-6 pb-24">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              AI-R
            </h1>
            <p className="text-purple-200 text-sm">Your AI Shopping Assistant</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full px-3 py-1 flex items-center gap-1">
              <span className="text-yellow-300">🪙</span>
              <span className="text-white font-semibold">2,450</span>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* AI Search Bar */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-purple-600" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask me anything... 'Find the best pizza nearby'"
                className="flex-1 text-gray-800 placeholder-gray-400 outline-none text-lg"
              />
              <button
                onClick={() => setIsListening(!isListening)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isListening ? 'bg-red-500 animate-pulse' : 'bg-purple-100'
                }`}
              >
                <Mic className={`w-5 h-5 ${isListening ? 'text-white' : 'text-purple-600'}`} />
              </button>
              <button className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-purple-600" />
              </button>
            </div>

            {/* AI Suggestions */}
            <div className="mt-3 flex flex-wrap gap-2">
              {aiSuggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(suggestion.text)}
                  className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-1 hover:bg-purple-100 transition-colors"
                >
                  <span>{suggestion.icon}</span>
                  <span className="truncate max-w-[150px]">{suggestion.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 -mt-16 pb-24">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <div className="grid grid-cols-6 gap-3">
            {quickActions.map((action, idx) => (
              <button key={idx} className="flex flex-col items-center gap-1">
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent AI Conversations */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              Recent Conversations
            </h2>
            <button className="text-purple-600 text-sm">See All</button>
          </div>
          <div className="space-y-3">
            {recentConversations.map((conv) => (
              <div key={conv.id} className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm">{conv.query}</p>
                    <p className="text-gray-500 text-xs mt-1">{conv.response}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 text-xs font-medium">+{conv.savedCoins} coins</span>
                    <p className="text-gray-400 text-xs">{conv.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Discoveries */}
        {aiDiscoveries.map((section) => (
          <div key={section.id} className="bg-white rounded-2xl shadow-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="font-semibold text-gray-800">{section.title}</h2>
                <p className="text-gray-500 text-xs">{section.subtitle}</p>
              </div>
              <button className="text-purple-600 text-sm flex items-center gap-1">
                More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-36 bg-gray-50 rounded-xl p-3">
                  <div className="text-3xl mb-2">{item.image}</div>
                  <h3 className="font-medium text-gray-800 text-sm truncate">{item.name}</h3>
                  <p className="text-gray-500 text-xs">{item.type}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-600">{item.rating}</span>
                    <span className="text-xs text-gray-400">• {item.distance}</span>
                  </div>
                  <div className="mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full text-center">
                    {item.cashback} Cashback
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* AI Insights Card */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">AI Insight</h3>
              <p className="text-purple-200 text-sm mt-1">
                Based on your spending, you could save ₹1,200 this month by using coins at your favorite stores.
              </p>
              <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium">
                Show Me How
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around items-center">
          {[
            { icon: Home, label: 'Home', active: activeTab === 'home' },
            { icon: Compass, label: 'Discover', active: activeTab === 'discover' },
            { icon: Bot, label: 'AI Chat', active: activeTab === 'chat', highlight: true },
            { icon: Wallet, label: 'Wallet', active: activeTab === 'wallet' },
            { icon: User, label: 'Profile', active: activeTab === 'profile' }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(item.label.toLowerCase())}
              className={`flex flex-col items-center gap-1 ${
                item.highlight
                  ? 'relative'
                  : ''
              }`}
            >
              {item.highlight ? (
                <div className="absolute -top-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              ) : (
                <>
                  <item.icon className={`w-6 h-6 ${item.active ? 'text-purple-600' : 'text-gray-400'}`} />
                  <span className={`text-xs ${item.active ? 'text-purple-600' : 'text-gray-400'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRHome;
