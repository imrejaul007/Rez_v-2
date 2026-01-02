import React, { useState } from 'react';
import {
  Trophy, Star, ChevronRight, Clock, Medal,
  Award, Target, Zap, Crown, Users,
  TrendingUp, Gift, Flame, Sparkles
} from 'lucide-react';

// LeaderBoards Home: Gamified Rankings & Competitions
// Backend API: GET /api/growth/leaderboards/home
// Backend API: GET /api/growth/leaderboards/:type
// Backend API: GET /api/growth/leaderboards/rewards
// Backend API: GET /api/growth/leaderboards/my-rank

const LeaderBoardsHome = () => {
  const [activeBoard, setActiveBoard] = useState('weekly');
  const [activeCategory, setActiveCategory] = useState('orders');

  const myRank = {
    position: 45,
    points: 2340,
    percentile: "Top 5%",
    trend: "+12",
    badges: 8
  };

  const boards = [
    { id: 'daily', name: 'Daily', endsIn: '6h 24m' },
    { id: 'weekly', name: 'Weekly', endsIn: '3d 12h' },
    { id: 'monthly', name: 'Monthly', endsIn: '18d' },
    { id: 'alltime', name: 'All Time', endsIn: null }
  ];

  const categories = [
    { id: 'orders', name: 'Top Shoppers', icon: '🛒' },
    { id: 'referrals', name: 'Top Referrers', icon: '👥' },
    { id: 'streak', name: 'Longest Streak', icon: '🔥' },
    { id: 'coins', name: 'Coin Earners', icon: '🪙' }
  ];

  const topRankers = [
    { rank: 1, name: "Vikram Sharma", points: 15600, avatar: "👨‍💼", badge: "👑", trend: "+850" },
    { rank: 2, name: "Priya Menon", points: 14200, avatar: "👩‍💻", badge: "🥈", trend: "+620" },
    { rank: 3, name: "Arjun Kapoor", points: 13800, avatar: "👨‍🎓", badge: "🥉", trend: "+580" },
    { rank: 4, name: "Neha Gupta", points: 12500, avatar: "👩‍🔬", badge: "", trend: "+420" },
    { rank: 5, name: "Rahul Singh", points: 11900, avatar: "👨‍🏫", badge: "", trend: "+380" },
    { rank: 6, name: "Sneha Rao", points: 11200, avatar: "👩‍⚕️", badge: "", trend: "+340" },
    { rank: 7, name: "Amit Kumar", points: 10800, avatar: "👨‍🍳", badge: "", trend: "+290" },
    { rank: 8, name: "Kavya Nair", points: 10200, avatar: "👩‍🎨", badge: "", trend: "+250" },
    { rank: 9, name: "Karthik R.", points: 9800, avatar: "👨‍🚀", badge: "", trend: "+210" },
    { rank: 10, name: "Ananya Das", points: 9400, avatar: "👩‍💼", badge: "", trend: "+180" }
  ];

  const weeklyPrizes = [
    { position: "1st", prize: "₹5,000 + Gold Badge", icon: "🥇" },
    { position: "2nd", prize: "₹3,000 + Silver Badge", icon: "🥈" },
    { position: "3rd", prize: "₹2,000 + Bronze Badge", icon: "🥉" },
    { position: "4-10", prize: "₹500 each", icon: "🎁" },
    { position: "11-50", prize: "200 Coins each", icon: "🪙" }
  ];

  const myBadges = [
    { id: 1, name: "First Order", icon: "🛍️", earned: true },
    { id: 2, name: "7 Day Streak", icon: "🔥", earned: true },
    { id: 3, name: "Referral Master", icon: "👥", earned: true },
    { id: 4, name: "Top 100", icon: "🏆", earned: true },
    { id: 5, name: "Big Spender", icon: "💰", earned: false },
    { id: 6, name: "Early Bird", icon: "🌅", earned: true }
  ];

  const nearbyRankers = [
    { rank: 43, name: "Suresh M.", points: 2420, avatar: "👨" },
    { rank: 44, name: "Meera K.", points: 2380, avatar: "👩" },
    { rank: 45, name: "You", points: 2340, avatar: "👤", isMe: true },
    { rank: 46, name: "Ravi P.", points: 2290, avatar: "👨" },
    { rank: 47, name: "Lakshmi S.", points: 2250, avatar: "👩" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">LeaderBoards</h1>
            </div>
            <p className="text-amber-100 text-sm">Compete. Win. Repeat.</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Medal className="w-4 h-4 text-white" />
            <span className="text-white font-bold">{myRank.badges} Badges</span>
          </div>
        </div>

        {/* My Rank Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Your Rank</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-800">#{myRank.position}</span>
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {myRank.trend}
                </span>
              </div>
              <p className="text-amber-600 font-medium">{myRank.percentile}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Points</p>
              <p className="text-2xl font-bold text-gray-800">{myRank.points.toLocaleString()}</p>
              <p className="text-gray-500 text-xs">this week</p>
            </div>
          </div>
        </div>

        {/* Board Tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {boards.map((board) => (
            <button
              key={board.id}
              onClick={() => setActiveBoard(board.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeBoard === board.id
                  ? 'bg-white text-amber-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              {board.name}
              {board.endsIn && (
                <span className="ml-1 text-xs opacity-70">({board.endsIn})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 shadow-sm'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="px-4 mt-6">
        <div className="flex items-end justify-center gap-2">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">{topRankers[1].avatar}</span>
            <div className="bg-gradient-to-b from-gray-300 to-gray-400 w-24 h-20 rounded-t-lg flex flex-col items-center justify-center">
              <span className="text-2xl">🥈</span>
              <p className="text-white text-xs font-medium truncate px-2">{topRankers[1].name.split(' ')[0]}</p>
              <p className="text-white/80 text-xs">{topRankers[1].points.toLocaleString()}</p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-4">
            <span className="text-4xl mb-2">{topRankers[0].avatar}</span>
            <div className="bg-gradient-to-b from-yellow-400 to-amber-500 w-28 h-28 rounded-t-lg flex flex-col items-center justify-center relative">
              <Crown className="w-6 h-6 text-white absolute -top-3" />
              <span className="text-3xl">🥇</span>
              <p className="text-white text-sm font-medium truncate px-2">{topRankers[0].name.split(' ')[0]}</p>
              <p className="text-white/80 text-xs">{topRankers[0].points.toLocaleString()}</p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">{topRankers[2].avatar}</span>
            <div className="bg-gradient-to-b from-amber-600 to-amber-700 w-24 h-16 rounded-t-lg flex flex-col items-center justify-center">
              <span className="text-2xl">🥉</span>
              <p className="text-white text-xs font-medium truncate px-2">{topRankers[2].name.split(' ')[0]}</p>
              <p className="text-white/80 text-xs">{topRankers[2].points.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {topRankers.slice(3).map((user, idx) => (
            <div key={user.rank} className={`p-4 flex items-center gap-3 ${
              idx !== topRankers.slice(3).length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <span className="w-8 text-center font-bold text-gray-500">#{user.rank}</span>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-green-600">+{user.trend} pts</p>
              </div>
              <span className="font-bold text-gray-800">{user.points.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Your Position */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Your Position</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl overflow-hidden">
          {nearbyRankers.map((user, idx) => (
            <div key={user.rank} className={`p-4 flex items-center gap-3 ${
              idx !== nearbyRankers.length - 1 ? 'border-b border-amber-200' : ''
            } ${user.isMe ? 'bg-amber-100' : ''}`}>
              <span className={`w-8 text-center font-bold ${
                user.isMe ? 'text-amber-600' : 'text-gray-500'
              }`}>
                #{user.rank}
              </span>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <p className={`font-medium ${user.isMe ? 'text-amber-700' : 'text-gray-800'}`}>
                  {user.name}
                </p>
              </div>
              <span className={`font-bold ${user.isMe ? 'text-amber-600' : 'text-gray-800'}`}>
                {user.points.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Prizes */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">This Week's Prizes</h2>
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4">
          {weeklyPrizes.map((prize, idx) => (
            <div key={prize.position} className={`flex items-center gap-3 ${
              idx !== weeklyPrizes.length - 1 ? 'mb-3 pb-3 border-b border-white/20' : ''
            }`}>
              <span className="text-2xl">{prize.icon}</span>
              <div className="flex-1">
                <p className="text-white font-medium">{prize.position}</p>
              </div>
              <span className="text-white font-bold">{prize.prize}</span>
            </div>
          ))}
        </div>
      </div>

      {/* My Badges */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">My Badges</h2>
          <button className="text-amber-600 text-sm">View All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {myBadges.map((badge) => (
            <div key={badge.id} className={`flex-shrink-0 w-20 text-center ${
              badge.earned ? '' : 'opacity-40'
            }`}>
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl ${
                badge.earned ? 'bg-amber-100' : 'bg-gray-100'
              }`}>
                {badge.icon}
              </div>
              <p className="text-xs text-gray-600 mt-1">{badge.name}</p>
              {!badge.earned && <p className="text-xs text-gray-400">🔒</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardsHome;
