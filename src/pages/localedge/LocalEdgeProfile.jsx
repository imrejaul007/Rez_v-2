import React, { useState } from 'react';
import {
  MapPin, Crown, Trophy, Star, Users, Settings, ChevronRight,
  Calendar, Target, Award, Flame, Camera, Share2, Edit3,
  CheckCircle, Clock, TrendingUp, Gift
} from 'lucide-react';

// LocalEdge Profile: User Profile & Check-in Stats
// Backend API: GET /api/localedge/profile/:userId
// Backend API: GET /api/localedge/profile/:userId/stats
// Backend API: GET /api/localedge/profile/:userId/badges

const LocalEdgeProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const profile = {
    name: "Rahul Sharma",
    username: "@rahul_explorer",
    avatar: "👨",
    level: 12,
    levelName: "City Explorer",
    totalCheckins: 234,
    uniquePlaces: 89,
    mayorships: 3,
    coins: 4560,
    streak: 14,
    rank: 156,
    followers: 234,
    following: 189,
    joinedDate: "Jan 2024"
  };

  const stats = {
    thisWeek: { checkins: 12, coins: 380 },
    thisMonth: { checkins: 45, coins: 1450 },
    topCategory: "Cafes",
    favoritePlace: "Starbucks Reserve"
  };

  const badges = [
    { id: 1, name: "Early Bird", icon: "🌅", earned: true, description: "Check-in before 7 AM" },
    { id: 2, name: "Night Owl", icon: "🦉", earned: true, description: "Check-in after 11 PM" },
    { id: 3, name: "Cafe Lover", icon: "☕", earned: true, description: "50 cafe check-ins" },
    { id: 4, name: "Foodie", icon: "🍽️", earned: true, description: "25 restaurant visits" },
    { id: 5, name: "Explorer", icon: "🧭", earned: true, description: "Visit 50 unique places" },
    { id: 6, name: "Mayor", icon: "👑", earned: true, description: "Become mayor of a place" },
    { id: 7, name: "Streak Master", icon: "🔥", earned: false, progress: 14, total: 30 },
    { id: 8, name: "Centurion", icon: "💯", earned: false, progress: 89, total: 100 }
  ];

  const mayorships = [
    { id: 1, place: "Starbucks Reserve", icon: "☕", since: "2 weeks", checkins: 45 },
    { id: 2, place: "Cubbon Park", icon: "🌳", since: "1 month", checkins: 32 },
    { id: 3, place: "FitZone Gym", icon: "🏋️", since: "3 days", checkins: 28 }
  ];

  const recentCheckins = [
    { id: 1, place: "Coffee House", icon: "☕", time: "2 hours ago", coins: 25 },
    { id: 2, place: "Pasta Paradise", icon: "🍝", time: "Yesterday", coins: 30 },
    { id: 3, place: "Cubbon Park", icon: "🌳", time: "Yesterday", coins: 25 },
    { id: 4, place: "Phoenix Mall", icon: "🛍️", time: "2 days ago", coins: 35 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'badges', label: 'Badges' },
    { id: 'mayors', label: 'Mayorships' },
    { id: 'history', label: 'History' }
  ];

  const renderOverview = () => (
    <div className="px-4 py-4 space-y-4">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">This Week</span>
          </div>
          <p className="text-xl font-bold text-gray-800">{stats.thisWeek.checkins}</p>
          <p className="text-sm text-green-600">+{stats.thisWeek.coins}🪙</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">This Month</span>
          </div>
          <p className="text-xl font-bold text-gray-800">{stats.thisMonth.checkins}</p>
          <p className="text-sm text-green-600">+{stats.thisMonth.coins}🪙</p>
        </div>
      </div>

      {/* Streak Card */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6" />
              <span className="font-bold text-lg">{profile.streak} Day Streak!</span>
            </div>
            <p className="text-orange-100 text-sm mt-1">Keep it going for bonus coins</p>
          </div>
          <div className="text-4xl">🔥</div>
        </div>
      </div>

      {/* Favorites */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Your Favorites</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">Favorite Place</p>
              <p className="font-medium text-gray-800">{stats.favoritePlace}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-blue-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">Top Category</p>
              <p className="font-medium text-gray-800">{stats.topCategory}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Check-ins */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Recent Check-ins</h3>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentCheckins.map((checkin, idx) => (
            <div
              key={checkin.id}
              className={`flex items-center gap-4 p-4 ${
                idx !== recentCheckins.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                {checkin.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{checkin.place}</h4>
                <p className="text-sm text-gray-500">{checkin.time}</p>
              </div>
              <span className="text-blue-600 font-medium">+{checkin.coins}🪙</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBadges = () => (
    <div className="px-4 py-4">
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-yellow-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-yellow-600">6</p>
          <p className="text-xs text-gray-500">Earned</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-gray-600">2</p>
          <p className="text-xs text-gray-500">In Progress</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-blue-600">12</p>
          <p className="text-xs text-gray-500">Total</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`bg-white rounded-xl p-4 shadow-sm ${!badge.earned ? 'opacity-60' : ''}`}
          >
            <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center text-3xl ${
              badge.earned ? 'bg-yellow-100' : 'bg-gray-100'
            }`}>
              {badge.icon}
            </div>
            <h4 className="font-medium text-gray-800 text-center mt-3">{badge.name}</h4>
            <p className="text-xs text-gray-500 text-center mt-1">{badge.description}</p>
            {!badge.earned && badge.progress && (
              <div className="mt-2">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(badge.progress / badge.total) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 text-center mt-1">{badge.progress}/{badge.total}</p>
              </div>
            )}
            {badge.earned && (
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <CheckCircle className="w-3 h-3" />
                Earned
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderMayorships = () => (
    <div className="px-4 py-4">
      <div className="bg-purple-50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <Crown className="w-8 h-8 text-purple-500" />
          <div>
            <p className="font-bold text-purple-800">{profile.mayorships} Mayorships</p>
            <p className="text-sm text-purple-600">You're the top visitor at these places!</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {mayorships.map((mayorship) => (
          <div key={mayorship.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl">
                  {mayorship.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-yellow-800" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{mayorship.place}</h3>
                <p className="text-sm text-gray-500">Mayor for {mayorship.since}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-purple-600">
                  <CheckCircle className="w-3 h-3" />
                  {mayorship.checkins} check-ins
                </div>
              </div>
              <button className="text-purple-600">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Nearby Mayor Opportunities */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-3">Almost Mayor</h3>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
              📚
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800">Book Cafe</h4>
              <p className="text-sm text-gray-500">3 more check-ins needed</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Check-in History</h3>
        <button className="text-blue-600 text-sm flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {[...recentCheckins, ...recentCheckins].map((checkin, idx) => (
          <div
            key={`${checkin.id}-${idx}`}
            className={`flex items-center gap-4 p-4 ${
              idx !== 7 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
              {checkin.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800">{checkin.place}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-3 h-3" />
                {checkin.time}
              </div>
            </div>
            <div className="text-right">
              <span className="text-blue-600 font-medium">+{checkin.coins}🪙</span>
              <p className="text-xs text-gray-400">Check-in #{234 - idx}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-blue-600 font-medium py-3">
        Load More
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <button className="text-white/80">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
                {profile.avatar}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{profile.name}</h2>
              <p className="text-blue-200">{profile.username}</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  Lvl {profile.level}
                </span>
                <span className="text-blue-200 text-sm">{profile.levelName}</span>
              </div>
            </div>
            <button className="bg-white/20 p-2 rounded-lg">
              <Edit3 className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <p className="text-white font-bold">{profile.totalCheckins}</p>
              <p className="text-blue-200 text-xs">Check-ins</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">{profile.uniquePlaces}</p>
              <p className="text-blue-200 text-xs">Places</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">{profile.mayorships}</p>
              <p className="text-blue-200 text-xs">Mayors</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">{profile.coins}</p>
              <p className="text-blue-200 text-xs">Coins</p>
            </div>
          </div>
        </div>

        {/* Followers */}
        <div className="flex gap-3 mt-4">
          <div className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-center">
            <p className="text-white font-bold">{profile.followers}</p>
            <p className="text-blue-200 text-xs">Followers</p>
          </div>
          <div className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-center">
            <p className="text-white font-bold">{profile.following}</p>
            <p className="text-blue-200 text-xs">Following</p>
          </div>
          <div className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-center">
            <p className="text-white font-bold">#{profile.rank}</p>
            <p className="text-blue-200 text-xs">Rank</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-2 py-2 flex gap-1 -mt-4 mx-4 rounded-xl sticky top-0 z-10 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'badges' && renderBadges()}
      {activeTab === 'mayors' && renderMayorships()}
      {activeTab === 'history' && renderHistory()}
    </div>
  );
};

export default LocalEdgeProfile;
