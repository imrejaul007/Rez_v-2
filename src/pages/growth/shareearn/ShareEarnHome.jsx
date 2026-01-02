import React, { useState } from 'react';
import {
  Share2, Copy, Gift, ChevronRight, Users,
  Wallet, TrendingUp, Zap, Star, Clock,
  MessageCircle, Send, Link, QrCode, Award
} from 'lucide-react';

// ShareEarn Home: Ultra-Light Social Sharing Rewards
// Backend API: GET /api/growth/shareearn/home
// Backend API: GET /api/growth/shareearn/earnings
// Backend API: POST /api/growth/shareearn/share
// Backend API: GET /api/growth/shareearn/links

const ShareEarnHome = () => {
  const [copied, setCopied] = useState(false);

  const myStats = {
    totalEarnings: 12450,
    thisMonth: 2340,
    pendingPayout: 890,
    shares: 156,
    clicks: 2340,
    conversions: 89
  };

  const referralCode = "REJAUL50";
  const referralLink = "rez.app/r/REJAUL50";

  const quickShares = [
    { id: 1, platform: "WhatsApp", icon: "💬", color: "bg-green-500" },
    { id: 2, platform: "Telegram", icon: "✈️", color: "bg-blue-500" },
    { id: 3, platform: "Instagram", icon: "📸", color: "bg-pink-500" },
    { id: 4, platform: "Twitter", icon: "🐦", color: "bg-sky-500" },
    { id: 5, platform: "Facebook", icon: "👍", color: "bg-blue-600" },
    { id: 6, platform: "Copy Link", icon: "🔗", color: "bg-gray-500" }
  ];

  const activeOffers = [
    {
      id: 1,
      title: "Share & Earn ₹50",
      description: "Get ₹50 for every friend who signs up",
      earnings: 50,
      type: "Signup",
      icon: "👤",
      active: true
    },
    {
      id: 2,
      title: "Order Bonus",
      description: "Earn 5% on friend's first 5 orders",
      earnings: "5%",
      type: "Orders",
      icon: "🛒",
      active: true
    },
    {
      id: 3,
      title: "Premium Referral",
      description: "₹200 when friend buys ReZ Premium",
      earnings: 200,
      type: "Premium",
      icon: "👑",
      active: true
    }
  ];

  const recentEarnings = [
    { id: 1, name: "Priya M.", action: "Signed up", earned: 50, time: "2 hours ago", avatar: "👩" },
    { id: 2, name: "Rahul K.", action: "First order", earned: 75, time: "5 hours ago", avatar: "👨" },
    { id: 3, name: "Sneha R.", action: "Bought Premium", earned: 200, time: "1 day ago", avatar: "👩‍💼" },
    { id: 4, name: "Amit S.", action: "Signed up", earned: 50, time: "2 days ago", avatar: "👨‍💻" }
  ];

  const leaderboard = [
    { rank: 1, name: "Vikram S.", earnings: 45600, shares: 890, avatar: "🏆" },
    { rank: 2, name: "Neha P.", earnings: 38900, shares: 720, avatar: "🥈" },
    { rank: 3, name: "Arjun K.", earnings: 32400, shares: 650, avatar: "🥉" }
  ];

  const bonusChallenges = [
    { id: 1, title: "Share 10 times", reward: 100, progress: 7, target: 10 },
    { id: 2, title: "Get 5 signups", reward: 250, progress: 3, target: 5 },
    { id: 3, title: "First order from referral", reward: 500, progress: 0, target: 1 }
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Share2 className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">ShareEarn</h1>
            </div>
            <p className="text-emerald-100 text-sm">Share. Earn. Repeat.</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Wallet className="w-4 h-4 text-white" />
            <span className="text-white font-bold">₹{myStats.totalEarnings.toLocaleString()}</span>
          </div>
        </div>

        {/* Earnings Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">Your Referral Code</p>
              <p className="text-2xl font-bold text-emerald-600">{referralCode}</p>
            </div>
            <button
              onClick={handleCopy}
              className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-xl font-medium flex items-center gap-2"
            >
              {copied ? (
                <>✓ Copied</>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
            <span className="text-gray-600 text-sm truncate">{referralLink}</span>
            <QrCode className="w-5 h-5 text-gray-400" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">{myStats.shares}</p>
              <p className="text-xs text-gray-500">Shares</p>
            </div>
            <div className="text-center border-x border-gray-100">
              <p className="text-lg font-bold text-gray-800">{myStats.clicks}</p>
              <p className="text-xs text-gray-500">Clicks</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-emerald-600">{myStats.conversions}</p>
              <p className="text-xs text-gray-500">Signups</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Share */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-gray-800 mb-3">Share Now</h2>
        <div className="grid grid-cols-6 gap-2">
          {quickShares.map((platform) => (
            <button key={platform.id} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center text-2xl`}>
                {platform.icon}
              </div>
              <span className="text-xs text-gray-600">{platform.platform.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Offers */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Active Offers
          </h2>
        </div>

        <div className="space-y-3">
          {activeOffers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                {offer.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{offer.title}</h3>
                <p className="text-xs text-gray-500">{offer.description}</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-600 font-bold">
                  {typeof offer.earnings === 'number' ? `₹${offer.earnings}` : offer.earnings}
                </p>
                <span className="text-xs text-gray-500">{offer.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bonus Challenges */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Bonus Challenges</h2>
        <div className="space-y-3">
          {bonusChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                <span className="text-emerald-600 font-bold">+₹{challenge.reward}</span>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>{challenge.progress}/{challenge.target}</span>
                  <span>{Math.round((challenge.progress / challenge.target) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Earnings */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Recent Earnings</h2>
          <button className="text-emerald-600 text-sm">View All</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentEarnings.map((item, idx) => (
            <div key={item.id} className={`p-4 flex items-center gap-3 ${
              idx !== recentEarnings.length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <span className="text-2xl">{item.avatar}</span>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.action} • {item.time}</p>
              </div>
              <span className="text-emerald-600 font-bold">+₹{item.earned}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Sharers</h2>
          <button className="text-emerald-600 text-sm">Full List</button>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4">
          {leaderboard.map((user, idx) => (
            <div key={user.rank} className={`flex items-center gap-3 ${
              idx !== leaderboard.length - 1 ? 'mb-3 pb-3 border-b border-white/20' : ''
            }`}>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <h4 className="font-medium text-white">{user.name}</h4>
                <p className="text-emerald-100 text-xs">{user.shares} shares</p>
              </div>
              <span className="text-white font-bold">₹{user.earnings.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Section */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Available for Payout</p>
              <p className="text-2xl font-bold text-gray-800">₹{myStats.pendingPayout}</p>
            </div>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold">
              Withdraw
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Min. payout: ₹100 • Instant to UPI</p>
        </div>
      </div>
    </div>
  );
};

export default ShareEarnHome;
