import React, { useState } from 'react';
import {
  Share2, Users, Gift, ChevronRight, Copy, Check,
  TrendingUp, Award, Zap, Crown, Star, ArrowRight,
  MessageCircle, Mail, QrCode, Link2, Wallet, Target
} from 'lucide-react';

// ReferralX Home: Advanced Referral & MLM Engine
// Backend API: GET /api/growth/referralx/home
// Backend API: GET /api/growth/referralx/stats
// Backend API: GET /api/growth/referralx/network
// Backend API: POST /api/growth/referralx/invite

const ReferralXHome = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const myStats = {
    referralCode: "REJAUL2024",
    totalReferrals: 47,
    activeReferrals: 38,
    pendingReferrals: 9,
    totalEarnings: 12500,
    thisMonthEarnings: 3200,
    tier: "Gold Ambassador",
    networkSize: 156,
    level2Referrals: 89,
    level3Referrals: 20
  };

  const referralTiers = [
    { level: 1, name: "Direct", commission: "20%", color: "bg-blue-500" },
    { level: 2, name: "2nd Level", commission: "5%", color: "bg-purple-500" },
    { level: 3, name: "3rd Level", commission: "2%", color: "bg-pink-500" }
  ];

  const ambassadorLevels = [
    { name: "Starter", minReferrals: 0, bonus: "₹50/referral", icon: "🌱" },
    { name: "Bronze", minReferrals: 10, bonus: "₹75/referral", icon: "🥉" },
    { name: "Silver", minReferrals: 25, bonus: "₹100/referral", icon: "🥈" },
    { name: "Gold", minReferrals: 50, bonus: "₹150/referral + 5% L2", icon: "🥇", current: true },
    { name: "Platinum", minReferrals: 100, bonus: "₹200/referral + 7% L2 + 3% L3", icon: "💎" },
    { name: "Diamond", minReferrals: 250, bonus: "₹300/referral + 10% L2 + 5% L3", icon: "👑" }
  ];

  const recentReferrals = [
    { id: 1, name: "Priya S.", date: "Today", status: "Active", earnings: 150, avatar: "👩" },
    { id: 2, name: "Rahul M.", date: "Yesterday", status: "Active", earnings: 150, avatar: "👨" },
    { id: 3, name: "Ankit K.", date: "2 days ago", status: "Pending", earnings: 0, avatar: "👤" },
    { id: 4, name: "Sneha R.", date: "3 days ago", status: "Active", earnings: 150, avatar: "👩" }
  ];

  const shareOptions = [
    { id: 1, name: "WhatsApp", icon: "💬", color: "bg-green-500" },
    { id: 2, name: "Instagram", icon: "📸", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { id: 3, name: "Twitter", icon: "🐦", color: "bg-blue-400" },
    { id: 4, name: "Email", icon: "📧", color: "bg-gray-600" },
    { id: 5, name: "SMS", icon: "💬", color: "bg-blue-600" },
    { id: 6, name: "QR Code", icon: "📱", color: "bg-gray-800" }
  ];

  const challenges = [
    { id: 1, name: "Invite 5 this week", progress: 3, target: 5, reward: 500, endsIn: "3 days" },
    { id: 2, name: "First purchase by referral", progress: 2, target: 3, reward: 300, endsIn: "5 days" }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://rez.app/join/${myStats.referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">ReferralX</h1>
            <p className="text-violet-200 text-sm">Share & Earn Together</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">{myStats.totalEarnings.toLocaleString()}</span>
          </div>
        </div>

        {/* Ambassador Status */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-2xl">
              🥇
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold">{myStats.tier}</h2>
              <p className="text-violet-200 text-sm">{myStats.totalReferrals} total referrals</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">₹{myStats.thisMonthEarnings}</p>
              <p className="text-violet-200 text-xs">This month</p>
            </div>
          </div>

          {/* Progress to next level */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-white/80 text-xs mb-1">
              <span>Gold (50)</span>
              <span>Platinum (100)</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" style={{ width: '47%' }} />
            </div>
            <p className="text-violet-200 text-xs mt-1">53 more referrals to Platinum</p>
          </div>
        </div>
      </div>

      {/* Referral Code Card */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <p className="text-gray-500 text-sm mb-2">Your Referral Code</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-3">
              <span className="font-mono font-bold text-lg text-gray-800">{myStats.referralCode}</span>
            </div>
            <button
              onClick={handleCopy}
              className={`p-3 rounded-lg ${copied ? 'bg-green-500' : 'bg-violet-500'} text-white`}
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-6 gap-2 mt-4">
            {shareOptions.map((option) => (
              <button key={option.id} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 ${option.color} rounded-full flex items-center justify-center text-lg`}>
                  {option.icon}
                </div>
                <span className="text-xs text-gray-600">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Users className="w-6 h-6 text-violet-500 mx-auto" />
            <p className="text-2xl font-bold text-gray-800 mt-2">{myStats.activeReferrals}</p>
            <p className="text-xs text-gray-500">Active</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <TrendingUp className="w-6 h-6 text-green-500 mx-auto" />
            <p className="text-2xl font-bold text-gray-800 mt-2">{myStats.networkSize}</p>
            <p className="text-xs text-gray-500">Network</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <Wallet className="w-6 h-6 text-amber-500 mx-auto" />
            <p className="text-2xl font-bold text-gray-800 mt-2">₹{(myStats.totalEarnings/1000).toFixed(1)}K</p>
            <p className="text-xs text-gray-500">Earned</p>
          </div>
        </div>
      </div>

      {/* Multi-Level Network */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Your Network</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="space-y-3">
            {referralTiers.map((tier) => (
              <div key={tier.level} className="flex items-center gap-3">
                <div className={`w-10 h-10 ${tier.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  L{tier.level}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{tier.name}</span>
                    <span className="text-violet-600 font-bold">{tier.commission}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {tier.level === 1 ? myStats.totalReferrals : tier.level === 2 ? myStats.level2Referrals : myStats.level3Referrals} members
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-500" />
            Challenges
          </h2>
          <button className="text-violet-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800">{challenge.name}</h3>
                <span className="text-orange-600 text-sm">Ends in {challenge.endsIn}</span>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                  <span>{challenge.progress}/{challenge.target} completed</span>
                  <span className="text-green-600 font-bold">+{challenge.reward}🪙</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Recent Referrals</h2>
          <button className="text-violet-600 text-sm">View All</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {recentReferrals.map((referral, idx) => (
            <div key={referral.id} className={`p-4 flex items-center gap-3 ${idx !== recentReferrals.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-xl">
                {referral.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{referral.name}</h3>
                <p className="text-xs text-gray-500">{referral.date}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  referral.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {referral.status}
                </span>
                {referral.earnings > 0 && (
                  <p className="text-green-600 text-sm font-bold mt-1">+₹{referral.earnings}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambassador Levels */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">Ambassador Levels</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {ambassadorLevels.map((level) => (
            <div key={level.name} className={`flex-shrink-0 w-32 rounded-xl p-4 text-center ${
              level.current ? 'bg-gradient-to-br from-violet-500 to-purple-500 text-white' : 'bg-white shadow-sm'
            }`}>
              <span className="text-3xl">{level.icon}</span>
              <h3 className={`font-bold text-sm mt-2 ${level.current ? 'text-white' : 'text-gray-800'}`}>{level.name}</h3>
              <p className={`text-xs mt-1 ${level.current ? 'text-violet-200' : 'text-gray-500'}`}>{level.minReferrals}+ refs</p>
              <p className={`text-xs mt-1 ${level.current ? 'text-white' : 'text-violet-600'}`}>{level.bonus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralXHome;
