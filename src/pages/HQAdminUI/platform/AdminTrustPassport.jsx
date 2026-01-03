import React, { useState } from 'react';
import {
  ArrowLeft, Shield, Star, Award, TrendingUp, Users, Coins,
  CheckCircle, AlertTriangle, Eye, ChevronRight, Lock, Unlock,
  Globe, Fingerprint, BarChart2, Target, Zap, Heart, Crown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminTrustPassport = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('passport');

  // Universal Trust Passport System
  const [trustPassportConfig, setTrustPassportConfig] = useState({
    enabled: true,
    minScoreForPassport: 50,
    passportTiers: [
      { tier: 'Platinum', minScore: 90, benefits: ['Priority service everywhere', '0% commission on transfers', 'Exclusive merchant access'], color: 'from-gray-300 to-gray-100' },
      { tier: 'Gold', minScore: 75, benefits: ['Fast-track service', '50% commission reduction', 'Premium offers'], color: 'from-yellow-400 to-yellow-600' },
      { tier: 'Silver', minScore: 60, benefits: ['Standard benefits', '25% commission reduction', 'Regular offers'], color: 'from-gray-400 to-gray-500' },
      { tier: 'Bronze', minScore: 50, benefits: ['Basic access', 'Standard commission', 'Entry offers'], color: 'from-orange-600 to-orange-800' },
    ],
    portabilityPartners: ['ONDC', 'UPI', 'DigiLocker', 'NSDL'],
  });

  // User Trust Passport Examples
  const [userPassports, setUserPassports] = useState([
    {
      userId: 'U12345',
      name: 'Priya Sharma',
      passportId: 'REZ-TP-2024-001234',
      trustScore: 92,
      tier: 'Platinum',
      issuedDate: '2024-01-15',
      validUntil: '2025-01-15',
      verifications: ['Aadhaar', 'PAN', 'Bank', 'Phone', 'Email'],
      transactionHistory: { total: 1250, successful: 1245, disputed: 5 },
      savingsGenerated: 245000,
      merchantsVisited: 156,
      reputation: {
        reviewsWritten: 89,
        avgRating: 4.8,
        helpfulVotes: 234,
      },
      crossPlatformScore: 88, // Score portable to partner platforms
    },
    {
      userId: 'U23456',
      name: 'Rahul Kumar',
      passportId: 'REZ-TP-2024-005678',
      trustScore: 78,
      tier: 'Gold',
      issuedDate: '2024-03-20',
      validUntil: '2025-03-20',
      verifications: ['Aadhaar', 'Phone', 'Email'],
      transactionHistory: { total: 456, successful: 450, disputed: 6 },
      savingsGenerated: 89000,
      merchantsVisited: 67,
      reputation: {
        reviewsWritten: 34,
        avgRating: 4.5,
        helpfulVotes: 89,
      },
      crossPlatformScore: 72,
    },
  ]);

  // Reputation-Driven Economics
  const [reputationEconomics, setReputationEconomics] = useState([
    {
      id: 1,
      condition: 'Trust Score >= 90',
      benefit: '10% extra coins on all transactions',
      usersEligible: 45000,
      coinsDistributed: 2500000,
      enabled: true
    },
    {
      id: 2,
      condition: 'Trust Score >= 75',
      benefit: 'Priority dispute resolution (24hr SLA)',
      usersEligible: 120000,
      resolved: 8900,
      enabled: true
    },
    {
      id: 3,
      condition: 'Reviews >= 50 with 4.5+ rating',
      benefit: 'Access to beta features',
      usersEligible: 23000,
      betaAccess: 18000,
      enabled: true
    },
    {
      id: 4,
      condition: '0 disputes in 12 months',
      benefit: 'Instant refunds (no review)',
      usersEligible: 340000,
      instantRefunds: 12000,
      enabled: true
    },
  ]);

  // Merchant Reputation Compounding
  const [merchantReputation, setMerchantReputation] = useState([
    {
      merchantId: 'M001',
      name: 'Royal Biryani House',
      trustScore: 94,
      tier: 'Platinum',
      commissionRate: 2.0, // Base is 5%, reduced due to reputation
      savingsFromReputation: 125000,
      behaviors: [
        { metric: 'Refund Rate', value: '0.5%', impact: '-1% commission' },
        { metric: 'Review Score', value: '4.9/5', impact: '-0.5% commission' },
        { metric: 'Response Time', value: '< 2 hrs', impact: '-0.5% commission' },
        { metric: 'Dispute Resolution', value: '98% resolved', impact: '-1% commission' },
      ],
      autoBoostEarned: 34000, // Extra visibility earned
    },
    {
      merchantId: 'M002',
      name: 'Fashion Hub',
      trustScore: 72,
      tier: 'Silver',
      commissionRate: 4.0,
      savingsFromReputation: 45000,
      behaviors: [
        { metric: 'Refund Rate', value: '3.2%', impact: '0% impact' },
        { metric: 'Review Score', value: '4.2/5', impact: '-0.5% commission' },
        { metric: 'Response Time', value: '< 6 hrs', impact: '-0.25% commission' },
        { metric: 'Dispute Resolution', value: '85% resolved', impact: '-0.25% commission' },
      ],
      autoBoostEarned: 12000,
    },
  ]);

  // Influence Authenticity Graph
  const [influenceGraph, setInfluenceGraph] = useState([
    {
      userId: 'U34567',
      name: 'Fitness Influencer',
      followers: 45000,
      authenticityScore: 92,
      status: 'verified',
      metrics: {
        realEngagement: 8.5,
        fakeBotRate: 2.1,
        conversionRate: 3.2,
        reachQuality: 89,
      },
      reachMultiplier: 1.5, // Gets 50% more reach
      flagged: false,
    },
    {
      userId: 'U45678',
      name: 'Food Blogger',
      followers: 120000,
      authenticityScore: 45,
      status: 'flagged',
      metrics: {
        realEngagement: 1.2,
        fakeBotRate: 45.0,
        conversionRate: 0.1,
        reachQuality: 23,
      },
      reachMultiplier: 0.2, // Silently reduced reach
      flagged: true,
    },
    {
      userId: 'U56789',
      name: 'Tech Reviewer',
      followers: 78000,
      authenticityScore: 88,
      status: 'verified',
      metrics: {
        realEngagement: 6.8,
        fakeBotRate: 5.5,
        conversionRate: 4.5,
        reachQuality: 82,
      },
      reachMultiplier: 1.3,
      flagged: false,
    },
  ]);

  // Platform Stats
  const platformStats = {
    totalPassportsIssued: 456000,
    activePassports: 423000,
    avgTrustScore: 72,
    platinumUsers: 45000,
    goldUsers: 120000,
    crossPlatformVerified: 234000,
    reputationSavingsGenerated: 15000000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Universal Trust Passport</h1>
              <p className="text-indigo-200 text-sm">Reputation as currency</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Shield size={16} className="mr-1" />
            <span className="text-sm">Verified</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(platformStats.totalPassportsIssued / 1000).toFixed(0)}K</p>
            <p className="text-xs text-indigo-200">Passports</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{platformStats.avgTrustScore}</p>
            <p className="text-xs text-indigo-200">Avg Score</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(platformStats.platinumUsers / 1000).toFixed(0)}K</p>
            <p className="text-xs text-indigo-200">Platinum</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(platformStats.reputationSavingsGenerated / 10000000).toFixed(1)}Cr</p>
            <p className="text-xs text-indigo-200">Rep Savings</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['passport', 'economics', 'merchants', 'influence'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Passport Tab */}
        {activeTab === 'passport' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Fingerprint size={20} className="text-indigo-400 mr-2" />
                <h3 className="text-white font-semibold">Portable Reputation</h3>
              </div>
              <p className="text-gray-400 text-sm">
                User trust score unlocks benefits everywhere - leaving ReZ = losing status
              </p>
            </div>

            {/* Passport Tiers */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Passport Tiers</h4>
              <div className="space-y-3">
                {trustPassportConfig.passportTiers.map((tier, idx) => (
                  <div key={idx} className={`bg-gradient-to-r ${tier.color} rounded-lg p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Crown size={20} className="text-gray-800 mr-2" />
                        <span className="text-gray-800 font-bold text-lg">{tier.tier}</span>
                      </div>
                      <span className="text-gray-800 font-medium">Score {tier.minScore}+</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tier.benefits.map((benefit, bIdx) => (
                        <span key={bIdx} className="bg-black/20 text-gray-800 text-xs px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Passports */}
            {userPassports.map(passport => (
              <div key={passport.userId} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${
                  passport.tier === 'Platinum' ? 'from-gray-300 to-gray-100' :
                  passport.tier === 'Gold' ? 'from-yellow-400 to-yellow-600' :
                  'from-gray-400 to-gray-500'
                } p-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-800 text-xs font-medium">{passport.passportId}</p>
                      <h3 className="text-gray-800 font-bold text-lg">{passport.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-800 font-bold text-2xl">{passport.trustScore}</p>
                      <p className="text-gray-700 text-xs">{passport.tier} Tier</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  {/* Verifications */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {passport.verifications.map((v, idx) => (
                      <span key={idx} className="flex items-center bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded">
                        <CheckCircle size={12} className="mr-1" /> {v}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-white font-bold">{passport.transactionHistory.total}</p>
                      <p className="text-gray-400 text-xs">Transactions</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-green-400 font-bold">₹{(passport.savingsGenerated / 1000).toFixed(0)}K</p>
                      <p className="text-gray-400 text-xs">Saved</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-white font-bold">{passport.merchantsVisited}</p>
                      <p className="text-gray-400 text-xs">Merchants</p>
                    </div>
                  </div>

                  {/* Cross-Platform Score */}
                  <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe size={16} className="text-indigo-400 mr-2" />
                        <span className="text-indigo-400 text-sm">Cross-Platform Score</span>
                      </div>
                      <span className="text-white font-bold">{passport.crossPlatformScore}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      Portable to: {trustPassportConfig.portabilityPartners.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Coins size={20} className="text-green-400 mr-2" />
                <h3 className="text-white font-semibold">Reputation-Driven Economics</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Good behavior = automatic benefits. Reputation becomes as valuable as money.
              </p>
            </div>

            {reputationEconomics.map(rule => (
              <div key={rule.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{rule.condition}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    rule.enabled ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {rule.enabled ? 'Active' : 'Disabled'}
                  </span>
                </div>

                <div className="bg-green-900/20 rounded-lg p-3 mb-3">
                  <p className="text-green-400 font-medium">{rule.benefit}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    {rule.usersEligible.toLocaleString()} users eligible
                  </span>
                  <span className="text-green-400">
                    {rule.coinsDistributed && `${(rule.coinsDistributed / 1000000).toFixed(1)}M coins`}
                    {rule.resolved && `${rule.resolved.toLocaleString()} resolved`}
                    {rule.betaAccess && `${rule.betaAccess.toLocaleString()} in beta`}
                    {rule.instantRefunds && `${rule.instantRefunds.toLocaleString()} refunds`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Merchants Tab */}
        {activeTab === 'merchants' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Award size={20} className="text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Merchant Reputation Compounding</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Good behavior reduces commission automatically - builds over time
              </p>
            </div>

            {merchantReputation.map(merchant => (
              <div key={merchant.merchantId} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">{merchant.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      merchant.tier === 'Platinum' ? 'bg-gray-300 text-gray-800' :
                      merchant.tier === 'Gold' ? 'bg-yellow-500 text-gray-800' :
                      'bg-gray-500 text-white'
                    }`}>
                      {merchant.tier}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-xl">{merchant.trustScore}</p>
                    <p className="text-gray-500 text-xs">Trust Score</p>
                  </div>
                </div>

                {/* Commission Impact */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs">Effective Commission</p>
                      <p className="text-green-400 font-bold text-xl">{merchant.commissionRate}%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">Saved from Reputation</p>
                      <p className="text-green-400 font-bold">₹{(merchant.savingsFromReputation / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                </div>

                {/* Behavior Breakdown */}
                <div className="space-y-2">
                  {merchant.behaviors.map((b, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-2">
                      <div>
                        <p className="text-white text-sm">{b.metric}</p>
                        <p className="text-gray-400 text-xs">{b.value}</p>
                      </div>
                      <span className={`font-medium text-sm ${
                        b.impact.includes('-') ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {b.impact}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between bg-gray-700/30 rounded-lg p-2">
                  <span className="text-gray-400 text-sm">Auto-Boost Earned</span>
                  <span className="text-yellow-400 font-medium">₹{merchant.autoBoostEarned.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Influence Tab */}
        {activeTab === 'influence' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 border border-pink-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Eye size={20} className="text-pink-400 mr-2" />
                <h3 className="text-white font-semibold">Influence Authenticity Graph</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Fake influencers lose reach invisibly - no public shaming
              </p>
            </div>

            {influenceGraph.map(influencer => (
              <div key={influencer.userId} className={`bg-gray-800 rounded-xl p-4 ${
                influencer.flagged ? 'border border-red-500/30' : ''
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">{influencer.name}</h3>
                    <p className="text-gray-400 text-sm">{influencer.followers.toLocaleString()} followers</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs ${
                      influencer.status === 'verified' ? 'bg-green-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {influencer.status}
                    </span>
                    <p className={`font-bold text-xl mt-1 ${
                      influencer.authenticityScore >= 80 ? 'text-green-400' :
                      influencer.authenticityScore >= 50 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {influencer.authenticityScore}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Real Engagement</p>
                    <p className={`font-bold ${
                      influencer.metrics.realEngagement >= 5 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {influencer.metrics.realEngagement}%
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Fake/Bot Rate</p>
                    <p className={`font-bold ${
                      influencer.metrics.fakeBotRate <= 10 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {influencer.metrics.fakeBotRate}%
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Conversion Rate</p>
                    <p className={`font-bold ${
                      influencer.metrics.conversionRate >= 2 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {influencer.metrics.conversionRate}%
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Reach Quality</p>
                    <p className={`font-bold ${
                      influencer.metrics.reachQuality >= 70 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {influencer.metrics.reachQuality}
                    </p>
                  </div>
                </div>

                {/* Reach Multiplier */}
                <div className={`rounded-lg p-3 ${
                  influencer.reachMultiplier >= 1 ? 'bg-green-900/20' : 'bg-red-900/20'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={influencer.reachMultiplier >= 1 ? 'text-green-400' : 'text-red-400'}>
                      Reach Multiplier
                    </span>
                    <span className={`font-bold ${
                      influencer.reachMultiplier >= 1 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {influencer.reachMultiplier}x
                    </span>
                  </div>
                  {influencer.flagged && (
                    <p className="text-red-400 text-xs mt-1">
                      Silently reduced - influencer not notified
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Silent Penalty Notice */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle size={18} className="text-red-400 mr-2" />
                <span className="text-red-400 font-medium">Silent Penalty System</span>
              </div>
              <p className="text-gray-300 text-sm">
                Low-authenticity influencers are not banned or notified. Their reach is
                silently reduced, making campaigns less effective. They eventually
                leave on their own without causing PR issues.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTrustPassport;
