import React, { useState } from 'react';
import {
  ArrowLeft, Shield, TrendingUp, TrendingDown, Star, AlertTriangle,
  CheckCircle, XCircle, Users, Package, IndianRupee, RefreshCw,
  ChevronRight, Eye, Ban, Award, Target, BarChart3, Clock, Zap,
  ThumbsUp, ThumbsDown, MessageSquare, RotateCcw, Coins
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminMerchantTrustScore = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  // Score weights configuration
  const [scoreWeights, setScoreWeights] = useState({
    refundRate: 20,
    reviewSentiment: 20,
    orderCancellation: 15,
    coinEfficiency: 15,
    repeatCustomers: 15,
    offerAbuse: 15
  });

  // Tier thresholds
  const tierThresholds = {
    platinum: { min: 90, commission: 8, benefits: ['Priority Support', 'Featured Placement', 'Prive Access'] },
    gold: { min: 75, commission: 12, benefits: ['Standard Support', 'Category Feature'] },
    silver: { min: 50, commission: 15, benefits: ['Basic Support'] },
    bronze: { min: 0, commission: 18, benefits: [] }
  };

  // Merchants data
  const [merchants, setMerchants] = useState([
    {
      id: 1,
      name: 'Spice Garden Restaurant',
      category: 'Food',
      city: 'Mumbai',
      trustScore: 92,
      tier: 'platinum',
      trend: 'up',
      metrics: {
        refundRate: 1.2,
        reviewScore: 4.8,
        cancellationRate: 0.5,
        coinBurnRatio: 0.85,
        repeatRate: 68,
        offerAbuseScore: 0
      },
      flags: [],
      autoActions: []
    },
    {
      id: 2,
      name: 'Fashion Hub',
      category: 'Fashion',
      city: 'Delhi',
      trustScore: 78,
      tier: 'gold',
      trend: 'stable',
      metrics: {
        refundRate: 3.5,
        reviewScore: 4.2,
        cancellationRate: 2.1,
        coinBurnRatio: 0.72,
        repeatRate: 45,
        offerAbuseScore: 5
      },
      flags: ['High refund rate'],
      autoActions: []
    },
    {
      id: 3,
      name: 'Quick Grocery Mart',
      category: 'Grocery',
      city: 'Bangalore',
      trustScore: 45,
      tier: 'bronze',
      trend: 'down',
      metrics: {
        refundRate: 8.5,
        reviewScore: 3.1,
        cancellationRate: 5.2,
        coinBurnRatio: 0.45,
        repeatRate: 22,
        offerAbuseScore: 35
      },
      flags: ['Offer abuse detected', 'High cancellations', 'Low reviews'],
      autoActions: ['Removed from featured', 'Commission increased', 'Under review']
    },
    {
      id: 4,
      name: 'Wellness Spa & Salon',
      category: 'Beauty',
      city: 'Pune',
      trustScore: 88,
      tier: 'gold',
      trend: 'up',
      metrics: {
        refundRate: 1.8,
        reviewScore: 4.6,
        cancellationRate: 1.0,
        coinBurnRatio: 0.78,
        repeatRate: 55,
        offerAbuseScore: 2
      },
      flags: [],
      autoActions: []
    },
    {
      id: 5,
      name: 'Tech Electronics',
      category: 'Electronics',
      city: 'Hyderabad',
      trustScore: 52,
      tier: 'silver',
      trend: 'down',
      metrics: {
        refundRate: 6.2,
        reviewScore: 3.5,
        cancellationRate: 3.8,
        coinBurnRatio: 0.55,
        repeatRate: 30,
        offerAbuseScore: 18
      },
      flags: ['Suspected review manipulation'],
      autoActions: ['Demoted from Gold']
    }
  ]);

  // Auto-action rules
  const [autoRules, setAutoRules] = useState([
    { id: 1, condition: 'Trust Score < 40', action: 'Auto-suspend from platform', enabled: true },
    { id: 2, condition: 'Trust Score < 50', action: 'Remove from featured & discovery', enabled: true },
    { id: 3, condition: 'Offer Abuse Score > 30', action: 'Disable offer creation', enabled: true },
    { id: 4, condition: 'Refund Rate > 10%', action: 'Increase commission by 5%', enabled: true },
    { id: 5, condition: 'Trust Score > 90 for 3 months', action: 'Auto-promote to Platinum', enabled: true },
    { id: 6, condition: 'Review Score < 3.0', action: 'Add warning badge visible to users', enabled: false },
  ]);

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'from-purple-500 to-indigo-600';
      case 'gold': return 'from-yellow-500 to-amber-600';
      case 'silver': return 'from-gray-400 to-gray-500';
      case 'bronze': return 'from-orange-700 to-orange-800';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getTierBadgeColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'bg-purple-500';
      case 'gold': return 'bg-yellow-500';
      case 'silver': return 'bg-gray-400';
      case 'bronze': return 'bg-orange-700';
      default: return 'bg-gray-600';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
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
              <h1 className="text-xl font-bold flex items-center">
                <Shield size={24} className="mr-2" />
                Merchant Trust Score Engine
              </h1>
              <p className="text-indigo-200 text-sm">Holistic merchant quality scoring</p>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{merchants.filter(m => m.tier === 'platinum').length}</p>
            <p className="text-xs text-purple-200">Platinum</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{merchants.filter(m => m.tier === 'gold').length}</p>
            <p className="text-xs text-yellow-200">Gold</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{merchants.filter(m => m.tier === 'silver').length}</p>
            <p className="text-xs text-gray-200">Silver</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{merchants.filter(m => m.tier === 'bronze').length}</p>
            <p className="text-xs text-orange-200">Bronze</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-700">
        {[
          { id: 'leaderboard', label: 'Leaderboard' },
          { id: 'flagged', label: 'Flagged' },
          { id: 'weights', label: 'Score Weights' },
          { id: 'rules', label: 'Auto Rules' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-purple-400 border-b-2 border-purple-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-3">
            {merchants.sort((a, b) => b.trustScore - a.trustScore).map((merchant, index) => (
              <div
                key={merchant.id}
                className="bg-gray-800 rounded-xl p-4"
                onClick={() => setSelectedMerchant(merchant)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getTierColor(merchant.tier)} flex items-center justify-center mr-3`}>
                      <span className="text-white font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{merchant.name}</h3>
                      <p className="text-gray-400 text-xs">{merchant.category} • {merchant.city}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getScoreColor(merchant.trustScore)}`}>
                      {merchant.trustScore}
                    </p>
                    <div className="flex items-center justify-end">
                      {merchant.trend === 'up' && <TrendingUp size={14} className="text-green-400" />}
                      {merchant.trend === 'down' && <TrendingDown size={14} className="text-red-400" />}
                      {merchant.trend === 'stable' && <span className="text-gray-400">—</span>}
                      <span className={`text-xs ml-1 ${getTierBadgeColor(merchant.tier)} text-white px-2 py-0.5 rounded capitalize`}>
                        {merchant.tier}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini Metrics */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-gray-700/50 rounded p-2">
                    <p className="text-gray-400">Refund</p>
                    <p className={`font-medium ${merchant.metrics.refundRate > 5 ? 'text-red-400' : 'text-green-400'}`}>
                      {merchant.metrics.refundRate}%
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2">
                    <p className="text-gray-400">Reviews</p>
                    <p className="text-white font-medium flex items-center">
                      <Star size={12} className="text-yellow-400 mr-1" />
                      {merchant.metrics.reviewScore}
                    </p>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2">
                    <p className="text-gray-400">Repeat</p>
                    <p className="text-white font-medium">{merchant.metrics.repeatRate}%</p>
                  </div>
                </div>

                {/* Flags */}
                {merchant.flags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {merchant.flags.map((flag, i) => (
                      <span key={i} className="bg-red-900/50 text-red-400 text-xs px-2 py-1 rounded flex items-center">
                        <AlertTriangle size={10} className="mr-1" />
                        {flag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Auto Actions Taken */}
                {merchant.autoActions.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {merchant.autoActions.map((action, i) => (
                      <span key={i} className="bg-yellow-900/50 text-yellow-400 text-xs px-2 py-1 rounded flex items-center">
                        <Zap size={10} className="mr-1" />
                        {action}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Flagged Tab */}
        {activeTab === 'flagged' && (
          <div className="space-y-3">
            <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-red-400 font-bold flex items-center">
                <AlertTriangle size={20} className="mr-2" />
                {merchants.filter(m => m.flags.length > 0).length} Merchants Flagged
              </h3>
              <p className="text-gray-400 text-sm">Require manual review or have auto-actions applied</p>
            </div>
            {merchants.filter(m => m.flags.length > 0 || m.trustScore < 60).map(merchant => (
              <div key={merchant.id} className="bg-gray-800 rounded-xl p-4 border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-white font-medium">{merchant.name}</h3>
                    <p className="text-gray-400 text-xs">{merchant.category} • {merchant.city}</p>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(merchant.trustScore)}`}>
                    {merchant.trustScore}
                  </div>
                </div>

                {/* All Metrics */}
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div className="bg-gray-700/50 rounded p-2 flex justify-between">
                    <span className="text-gray-400">Refund Rate</span>
                    <span className={merchant.metrics.refundRate > 5 ? 'text-red-400' : 'text-white'}>
                      {merchant.metrics.refundRate}%
                    </span>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 flex justify-between">
                    <span className="text-gray-400">Cancellation</span>
                    <span className={merchant.metrics.cancellationRate > 3 ? 'text-red-400' : 'text-white'}>
                      {merchant.metrics.cancellationRate}%
                    </span>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 flex justify-between">
                    <span className="text-gray-400">Coin Efficiency</span>
                    <span className={merchant.metrics.coinBurnRatio < 0.5 ? 'text-red-400' : 'text-white'}>
                      {(merchant.metrics.coinBurnRatio * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 flex justify-between">
                    <span className="text-gray-400">Offer Abuse</span>
                    <span className={merchant.metrics.offerAbuseScore > 20 ? 'text-red-400' : 'text-white'}>
                      {merchant.metrics.offerAbuseScore}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium">
                    Review
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-medium">
                    Suspend
                  </button>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Score Weights Tab */}
        {activeTab === 'weights' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Score Component Weights</h3>
              <p className="text-gray-400 text-sm mb-4">Adjust how each factor contributes to the total trust score (must total 100%)</p>

              <div className="space-y-4">
                {Object.entries(scoreWeights).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-purple-400 font-bold">{value}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={value}
                      onChange={(e) => setScoreWeights(prev => ({ ...prev, [key]: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-gray-700/50 rounded-lg p-3 flex justify-between items-center">
                <span className="text-gray-400">Total Weight</span>
                <span className={`font-bold ${
                  Object.values(scoreWeights).reduce((a, b) => a + b, 0) === 100
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}>
                  {Object.values(scoreWeights).reduce((a, b) => a + b, 0)}%
                </span>
              </div>
            </div>

            {/* Tier Thresholds */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Tier Thresholds & Benefits</h3>
              {Object.entries(tierThresholds).map(([tier, config]) => (
                <div key={tier} className={`bg-gradient-to-r ${getTierColor(tier)} rounded-lg p-4 mb-3`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold capitalize">{tier}</span>
                    <span className="text-white/80">Score ≥ {config.min}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70">Commission</span>
                    <span className="text-white font-bold">{config.commission}%</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {config.benefits.map((benefit, i) => (
                      <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Auto Rules Tab */}
        {activeTab === 'rules' && (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <h3 className="text-white font-bold mb-2">Auto-Demotion / Auto-Boost Rules</h3>
              <p className="text-gray-400 text-sm">Automatic actions based on trust score conditions</p>
            </div>
            {autoRules.map(rule => (
              <div key={rule.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-white font-medium">{rule.condition}</p>
                    <p className="text-gray-400 text-sm flex items-center">
                      <Zap size={14} className="mr-1 text-yellow-400" />
                      {rule.action}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setAutoRules(prev => prev.map(r =>
                        r.id === rule.id ? { ...r, enabled: !r.enabled } : r
                      ));
                    }}
                    className={`w-12 h-6 rounded-full ${rule.enabled ? 'bg-green-500' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${rule.enabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            ))}

            <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold mt-4">
              + Add New Rule
            </button>
          </div>
        )}
      </div>

      {/* Merchant Detail Modal */}
      {selectedMerchant && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-bold">{selectedMerchant.name}</h3>
              <button onClick={() => setSelectedMerchant(null)}>
                <XCircle size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${getTierColor(selectedMerchant.tier)} flex items-center justify-center`}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">{selectedMerchant.trustScore}</p>
                  <p className="text-white/70 text-sm capitalize">{selectedMerchant.tier}</p>
                </div>
              </div>
            </div>

            {/* Detailed Metrics */}
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-white font-bold mb-3">Score Breakdown</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Refund Rate ({selectedMerchant.metrics.refundRate}%)</span>
                      <span className="text-white">{Math.max(0, 20 - selectedMerchant.metrics.refundRate * 2).toFixed(0)}/20</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${Math.max(0, 100 - selectedMerchant.metrics.refundRate * 10)}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Review Score ({selectedMerchant.metrics.reviewScore}/5)</span>
                      <span className="text-white">{(selectedMerchant.metrics.reviewScore * 4).toFixed(0)}/20</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: `${selectedMerchant.metrics.reviewScore * 20}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Repeat Customers ({selectedMerchant.metrics.repeatRate}%)</span>
                      <span className="text-white">{(selectedMerchant.metrics.repeatRate * 0.15).toFixed(0)}/15</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${selectedMerchant.metrics.repeatRate}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold">
                  Boost Tier
                </button>
                <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold">
                  Demote Tier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMerchantTrustScore;
