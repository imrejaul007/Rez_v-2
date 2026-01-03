import React, { useState } from 'react';
import {
  MapPin, Navigation, Star, Clock, Users, CheckCircle, Flame,
  TrendingUp, Gift, ChevronRight, ArrowRight, Trophy, Coins,
  Home, Search, Map, Bell, User, Camera, Zap, Crown
} from 'lucide-react';

// LocalEdge: Hyperlocal Check-in & Discovery
// Clones: ReZ + Location Features
// Unique: Location-based check-ins with gamification

const LocalEdgeHome = () => {
  const [activeTab, setActiveTab] = useState('nearby');

  // User stats
  const userStats = {
    coins: 3250,
    checkins: 156,
    places: 45,
    rank: 12,
    streak: 14
  };

  // Nearby places for check-in
  const nearbyPlaces = [
    {
      id: 1,
      name: "Starbucks",
      type: "Cafe",
      distance: "50m",
      rating: 4.6,
      checkins: 1234,
      isOpen: true,
      checkInReward: 25,
      bonusActive: true,
      bonusMultiplier: 2,
      image: "☕",
      trending: true
    },
    {
      id: 2,
      name: "Phoenix Mall",
      type: "Shopping",
      distance: "200m",
      rating: 4.5,
      checkins: 5678,
      isOpen: true,
      checkInReward: 50,
      image: "🏬",
      hasEvent: true,
      eventName: "Weekend Sale"
    },
    {
      id: 3,
      name: "Green Park",
      type: "Park",
      distance: "400m",
      rating: 4.8,
      checkins: 890,
      isOpen: true,
      checkInReward: 30,
      image: "🌳"
    },
    {
      id: 4,
      name: "FitZone Gym",
      type: "Fitness",
      distance: "600m",
      rating: 4.7,
      checkins: 456,
      isOpen: true,
      checkInReward: 40,
      image: "💪",
      regularBonus: true
    },
    {
      id: 5,
      name: "Book Cafe",
      type: "Cafe",
      distance: "800m",
      rating: 4.9,
      checkins: 234,
      isOpen: true,
      checkInReward: 35,
      image: "📚",
      isNew: true
    }
  ];

  // Recent check-ins feed
  const recentActivity = [
    {
      id: 1,
      user: "Rahul S.",
      avatar: "👨",
      action: "checked in at",
      place: "Starbucks",
      placeIcon: "☕",
      time: "2 min ago",
      coins: 50,
      isFriend: true
    },
    {
      id: 2,
      user: "Priya M.",
      avatar: "👩",
      action: "became Mayor of",
      place: "Phoenix Mall",
      placeIcon: "🏬",
      time: "15 min ago",
      coins: 200,
      isMayor: true
    },
    {
      id: 3,
      user: "You",
      avatar: "😊",
      action: "checked in at",
      place: "Green Park",
      placeIcon: "🌳",
      time: "1 hour ago",
      coins: 30,
      isOwn: true
    }
  ];

  // Local leaderboard
  const localLeaders = [
    { rank: 1, name: "Priya M.", avatar: "👩", checkins: 89, coins: 4500, isMayor: true },
    { rank: 2, name: "Rahul S.", avatar: "👨", checkins: 76, coins: 3800 },
    { rank: 3, name: "You", avatar: "😊", checkins: 45, coins: 3250, isYou: true }
  ];

  // Active challenges
  const challenges = [
    {
      title: "Weekend Explorer",
      description: "Check in to 5 new places this weekend",
      progress: 3,
      target: 5,
      reward: 500,
      endsIn: "2 days",
      icon: "🗺️"
    },
    {
      title: "Coffee Lover",
      description: "Visit 3 different cafes",
      progress: 2,
      target: 3,
      reward: 200,
      endsIn: "5 days",
      icon: "☕"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-7 h-7" />
              LocalEdge
            </h1>
            <p className="text-blue-100 text-sm">Discover your neighborhood</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative">
              <Bell className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <div className="bg-white/20 rounded-full px-3 py-1 flex items-center gap-1">
              <Coins className="w-4 h-4 text-yellow-300" />
              <span className="text-white font-bold">{userStats.coins.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-white">{userStats.checkins}</p>
            <p className="text-xs text-blue-100">Check-ins</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-white">{userStats.places}</p>
            <p className="text-xs text-blue-100">Places</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-white">#{userStats.rank}</p>
            <p className="text-xs text-blue-100">Local Rank</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-orange-300" />
              <p className="text-xl font-bold text-white">{userStats.streak}</p>
            </div>
            <p className="text-xs text-blue-100">Streak</p>
          </div>
        </div>
      </div>

      {/* Quick Check-in Button */}
      <div className="px-4 -mt-4">
        <button className="w-full bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Quick Check-in</p>
              <p className="text-sm text-gray-500">Tap to check in here</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-600 font-bold">+25🪙</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      </div>

      {/* Active Challenges */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Active Challenges
          </h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{challenge.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{challenge.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{challenge.description}</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-600">{challenge.progress}/{challenge.target}</span>
                  <span className="text-yellow-600 font-medium">+{challenge.reward}🪙</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">Ends in {challenge.endsIn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-1 flex shadow-sm">
          {['nearby', 'activity', 'leaderboard'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'text-gray-600'
              }`}
            >
              {tab === 'nearby' ? 'Nearby' : tab === 'activity' ? 'Activity' : 'Leaderboard'}
            </button>
          ))}
        </div>
      </div>

      {/* Content based on tab */}
      <div className="px-4 mt-4">
        {activeTab === 'nearby' && (
          <div className="space-y-3">
            {nearbyPlaces.map((place) => (
              <div key={place.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                      {place.image}
                    </div>
                    {place.bonusActive && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{place.bonusMultiplier}x</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-800">{place.name}</h3>
                          {place.isNew && (
                            <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">NEW</span>
                          )}
                          {place.trending && (
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                          <span>{place.type}</span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5">
                            <MapPin className="w-3 h-3" />
                            {place.distance}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            {place.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {place.hasEvent && (
                      <div className="mt-2 bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-lg inline-flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {place.eventName}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {place.checkins.toLocaleString()} check-ins
                        </span>
                        {place.isOpen && (
                          <span className="text-green-600">• Open now</span>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Check in (+{place.checkInReward * (place.bonusMultiplier || 1)})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className={`bg-white rounded-xl p-4 shadow-sm ${
                activity.isOwn ? 'ring-2 ring-blue-200' : ''
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                    {activity.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">
                      <span className="font-semibold">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-semibold">{activity.place}</span>
                      {' '}{activity.placeIcon}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-yellow-600 font-bold">+{activity.coins}🪙</span>
                    {activity.isMayor && (
                      <div className="flex items-center gap-1 text-xs text-purple-600 mt-1">
                        <Crown className="w-3 h-3" />
                        Mayor!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500">
              <h3 className="text-white font-semibold">This Week's Local Leaders</h3>
              <p className="text-blue-100 text-sm">Top explorers in your area</p>
            </div>
            <div className="divide-y divide-gray-100">
              {localLeaders.map((leader) => (
                <div key={leader.rank} className={`p-4 flex items-center gap-4 ${
                  leader.isYou ? 'bg-blue-50' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    leader.rank === 1 ? 'bg-yellow-400 text-yellow-800' :
                    leader.rank === 2 ? 'bg-gray-300 text-gray-700' :
                    leader.rank === 3 ? 'bg-orange-300 text-orange-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {leader.rank}
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                    {leader.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">{leader.name}</span>
                      {leader.isMayor && (
                        <Crown className="w-4 h-4 text-purple-500" />
                      )}
                      {leader.isYou && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">You</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{leader.checkins} check-ins</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-600">{leader.coins.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">coins</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full p-4 text-blue-600 font-medium text-center border-t border-gray-100">
              View Full Leaderboard →
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around items-center">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Search, label: 'Explore', active: false },
            { icon: Camera, label: 'Check-in', active: false, highlight: true },
            { icon: Map, label: 'Map', active: false },
            { icon: User, label: 'Profile', active: false }
          ].map((item, idx) => (
            <button key={idx} className={`flex flex-col items-center gap-1 ${
              item.highlight ? 'relative' : ''
            }`}>
              {item.highlight ? (
                <div className="absolute -top-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              ) : (
                <>
                  <item.icon className={`w-6 h-6 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={`text-xs ${item.active ? 'text-blue-600' : 'text-gray-400'}`}>
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

export default LocalEdgeHome;
