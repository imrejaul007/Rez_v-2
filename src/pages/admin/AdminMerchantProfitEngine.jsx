import React, { useState } from 'react';
import {
  ArrowLeft, TrendingUp, Shield, Calculator, Target, Zap,
  DollarSign, Users, BarChart2, CheckCircle, AlertTriangle,
  Clock, ChevronRight, Play, Pause, Settings, Eye, RefreshCw,
  PiggyBank, Percent, Gift, Lock, Unlock, Star, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminMerchantProfitEngine = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('simulator');

  // ROI Guarantee Programs
  const [roiPrograms, setRoiPrograms] = useState([
    {
      id: 'ROI001',
      name: 'Customer Guarantee 50',
      description: 'Spend ₹5,000 on ReZ promotions → Get guaranteed 50 new customers',
      merchantSpend: 5000,
      guaranteedOutcome: '50 new customers',
      avgTicketSize: 450,
      expectedRevenue: 22500,
      guaranteedROI: '350%',
      riskSharePercent: 30, // ReZ covers 30% if target not met
      activeMerchants: 234,
      successRate: 94,
      status: 'active'
    },
    {
      id: 'ROI002',
      name: 'Revenue Boost 2X',
      description: 'Lock in ₹10,000 → ReZ guarantees 2X revenue in 30 days or refund',
      merchantSpend: 10000,
      guaranteedOutcome: '₹20,000 revenue',
      avgTicketSize: 0,
      expectedRevenue: 20000,
      guaranteedROI: '100%',
      riskSharePercent: 50,
      activeMerchants: 156,
      successRate: 89,
      status: 'active'
    },
    {
      id: 'ROI003',
      name: 'Footfall Surge',
      description: 'Pay ₹3,000 → Get 100 verified store visits in 7 days',
      merchantSpend: 3000,
      guaranteedOutcome: '100 store visits',
      avgTicketSize: 300,
      expectedRevenue: 30000,
      guaranteedROI: '900%',
      riskSharePercent: 40,
      activeMerchants: 89,
      successRate: 97,
      status: 'active'
    },
  ]);

  // Dynamic Commission Protection
  const [commissionRules, setCommissionRules] = useState([
    {
      id: 1,
      condition: 'Merchant margin < 15%',
      action: 'Reduce commission by 2%',
      currentlyApplied: 45,
      savingsGenerated: 125000,
      enabled: true
    },
    {
      id: 2,
      condition: 'Monthly GMV drop > 20%',
      action: 'Pause commission for 15 days',
      currentlyApplied: 23,
      savingsGenerated: 89000,
      enabled: true
    },
    {
      id: 3,
      condition: 'New merchant (< 3 months)',
      action: 'Commission capped at 2%',
      currentlyApplied: 156,
      savingsGenerated: 234000,
      enabled: true
    },
    {
      id: 4,
      condition: 'Festival period losses',
      action: 'Zero commission on first ₹50K',
      currentlyApplied: 0,
      savingsGenerated: 0,
      enabled: true
    },
  ]);

  // Profit Simulator Data
  const [simulatorInputs, setSimulatorInputs] = useState({
    offerType: 'discount',
    discountPercent: 20,
    minOrderValue: 500,
    maxRedemptions: 100,
    validityDays: 7,
    targetSegment: 'all',
    coinMultiplier: 2,
  });

  const [simulatorResults, setSimulatorResults] = useState({
    estimatedRedemptions: 78,
    estimatedRevenue: 58500,
    estimatedCost: 11700,
    netProfit: 46800,
    profitMargin: 80,
    newCustomersExpected: 34,
    repeatVisitProbability: 45,
    breakEvenDays: 3,
    confidenceScore: 87,
  });

  // Risk-Shared Campaigns
  const [riskSharedCampaigns, setRiskSharedCampaigns] = useState([
    {
      id: 'RSC001',
      merchant: 'Royal Biryani House',
      campaignName: 'Diwali Mega Sale',
      merchantInvestment: 25000,
      rezInvestment: 15000,
      totalBudget: 40000,
      riskSplit: '60-40',
      targetGMV: 200000,
      currentGMV: 145000,
      daysRemaining: 5,
      status: 'running',
      projectedOutcome: 'on_track'
    },
    {
      id: 'RSC002',
      merchant: 'Fashion Hub',
      campaignName: 'Winter Collection Launch',
      merchantInvestment: 15000,
      rezInvestment: 10000,
      totalBudget: 25000,
      riskSplit: '60-40',
      targetGMV: 100000,
      currentGMV: 112000,
      daysRemaining: 0,
      status: 'completed',
      projectedOutcome: 'exceeded'
    },
  ]);

  // Platform Economics
  const platformStats = {
    totalMerchantProfitGenerated: 45000000,
    avgMerchantROI: 340,
    commissionSaved: 4500000,
    roiGuaranteesClaimed: 23,
    successfulCampaigns: 1247,
    merchantRetentionRate: 94,
  };

  const runSimulation = () => {
    // Simulate calculation based on inputs
    const redemptions = Math.floor(simulatorInputs.maxRedemptions * 0.78);
    const avgOrder = simulatorInputs.minOrderValue * 1.5;
    const revenue = redemptions * avgOrder;
    const cost = revenue * (simulatorInputs.discountPercent / 100);
    const profit = revenue - cost;

    setSimulatorResults({
      estimatedRedemptions: redemptions,
      estimatedRevenue: revenue,
      estimatedCost: cost,
      netProfit: profit,
      profitMargin: Math.round((profit / revenue) * 100),
      newCustomersExpected: Math.floor(redemptions * 0.44),
      repeatVisitProbability: 45,
      breakEvenDays: Math.ceil(cost / (profit / simulatorInputs.validityDays)),
      confidenceScore: 87,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Merchant Profit Engine</h1>
              <p className="text-emerald-200 text-sm">Guaranteed ROI & profit certainty</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Shield size={16} className="mr-1" />
            <span className="text-sm">Protected</span>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹{(platformStats.totalMerchantProfitGenerated / 10000000).toFixed(1)}Cr</p>
            <p className="text-xs text-emerald-200">Merchant Profit</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{platformStats.avgMerchantROI}%</p>
            <p className="text-xs text-emerald-200">Avg ROI</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{platformStats.merchantRetentionRate}%</p>
            <p className="text-xs text-emerald-200">Retention</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['simulator', 'roi_programs', 'commission', 'risk_shared'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-emerald-400 border-b-2 border-emerald-400'
                : 'text-gray-400'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Profit Simulator Tab */}
        {activeTab === 'simulator' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Calculator size={20} className="text-emerald-400 mr-2" />
                <h3 className="text-white font-semibold">Profit Simulator</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Merchants see exact profit outcome before launching any offer
              </p>
            </div>

            {/* Inputs */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Configure Offer</h4>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Offer Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['discount', 'cashback', 'bogo'].map(type => (
                      <button
                        key={type}
                        onClick={() => setSimulatorInputs({ ...simulatorInputs, offerType: type })}
                        className={`p-3 rounded-lg capitalize ${
                          simulatorInputs.offerType === type
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Discount %</label>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={simulatorInputs.discountPercent}
                      onChange={(e) => setSimulatorInputs({ ...simulatorInputs, discountPercent: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <p className="text-white text-center font-bold">{simulatorInputs.discountPercent}%</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Min Order</label>
                    <input
                      type="number"
                      value={simulatorInputs.minOrderValue}
                      onChange={(e) => setSimulatorInputs({ ...simulatorInputs, minOrderValue: parseInt(e.target.value) })}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Max Redemptions</label>
                    <input
                      type="number"
                      value={simulatorInputs.maxRedemptions}
                      onChange={(e) => setSimulatorInputs({ ...simulatorInputs, maxRedemptions: parseInt(e.target.value) })}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Validity (Days)</label>
                    <input
                      type="number"
                      value={simulatorInputs.validityDays}
                      onChange={(e) => setSimulatorInputs({ ...simulatorInputs, validityDays: parseInt(e.target.value) })}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg"
                    />
                  </div>
                </div>

                <button
                  onClick={runSimulation}
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center"
                >
                  <Calculator size={18} className="mr-2" /> Calculate Profit
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-medium">Predicted Outcome</h4>
                <div className="flex items-center">
                  <span className="text-emerald-400 text-sm mr-2">{simulatorResults.confidenceScore}% confidence</span>
                  <CheckCircle size={16} className="text-emerald-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Est. Redemptions</p>
                  <p className="text-white font-bold text-xl">{simulatorResults.estimatedRedemptions}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Est. Revenue</p>
                  <p className="text-white font-bold text-xl">₹{simulatorResults.estimatedRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Total Cost</p>
                  <p className="text-red-400 font-bold text-xl">-₹{simulatorResults.estimatedCost.toLocaleString()}</p>
                </div>
                <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-3">
                  <p className="text-emerald-400 text-xs">NET PROFIT</p>
                  <p className="text-emerald-400 font-bold text-xl">₹{simulatorResults.netProfit.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-700/30 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{simulatorResults.profitMargin}%</p>
                  <p className="text-gray-400 text-xs">Margin</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{simulatorResults.newCustomersExpected}</p>
                  <p className="text-gray-400 text-xs">New Customers</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{simulatorResults.breakEvenDays}d</p>
                  <p className="text-gray-400 text-xs">Break-even</p>
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Zap size={18} className="text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">AI Recommendation</span>
              </div>
              <p className="text-white text-sm mb-2">
                Increase discount to 25% for optimal customer acquisition. Expected 15% more new customers with only 8% margin reduction.
              </p>
              <button className="text-blue-400 text-sm flex items-center">
                Apply Suggestion <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* ROI Programs Tab */}
        {activeTab === 'roi_programs' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Shield size={20} className="text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Guaranteed ROI Programs</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Merchants pay fixed amount → ReZ guarantees specific outcomes or refunds
              </p>
            </div>

            {roiPrograms.map(program => (
              <div key={program.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center">
                      <Award size={18} className="text-yellow-400 mr-2" />
                      <h3 className="text-white font-bold">{program.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{program.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    program.status === 'active' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {program.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-white font-bold">₹{program.merchantSpend.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Merchant Pays</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-emerald-400 font-bold">{program.guaranteedOutcome}</p>
                    <p className="text-gray-400 text-xs">Guaranteed</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-yellow-400 font-bold">{program.guaranteedROI}</p>
                    <p className="text-gray-400 text-xs">Min ROI</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-gray-400 text-xs">Risk Share</p>
                      <p className="text-white font-medium">{program.riskSharePercent}% ReZ covers</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Success Rate</p>
                      <p className="text-green-400 font-medium">{program.successRate}%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Active</p>
                    <p className="text-white font-bold">{program.activeMerchants}</p>
                  </div>
                </div>
              </div>
            ))}

            <button className="w-full bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 py-4 rounded-xl font-medium">
              + Create New ROI Program
            </button>
          </div>
        )}

        {/* Commission Protection Tab */}
        {activeTab === 'commission' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <PiggyBank size={20} className="text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">Dynamic Commission Protection</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Commission automatically adjusts when merchant margins fall
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-medium">Commission Saved This Month</h4>
                <p className="text-emerald-400 font-bold text-xl">₹{(platformStats.commissionSaved / 100000).toFixed(1)}L</p>
              </div>

              <div className="space-y-3">
                {commissionRules.map(rule => (
                  <div key={rule.id} className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-white font-medium">{rule.condition}</p>
                        <p className="text-emerald-400 text-sm">→ {rule.action}</p>
                      </div>
                      <button
                        onClick={() => setCommissionRules(prev => prev.map(r =>
                          r.id === rule.id ? { ...r, enabled: !r.enabled } : r
                        ))}
                        className={rule.enabled ? 'text-green-400' : 'text-gray-500'}
                      >
                        {rule.enabled ? <Unlock size={20} /> : <Lock size={20} />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        Applied to {rule.currentlyApplied} merchants
                      </span>
                      <span className="text-emerald-400">
                        Saved ₹{(rule.savingsGenerated / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-purple-600/20 border border-purple-500/30 text-purple-400 py-4 rounded-xl font-medium">
              + Add Protection Rule
            </button>
          </div>
        )}

        {/* Risk-Shared Campaigns Tab */}
        {activeTab === 'risk_shared' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Users size={20} className="text-blue-400 mr-2" />
                <h3 className="text-white font-semibold">Risk-Shared Campaigns</h3>
              </div>
              <p className="text-gray-400 text-sm">
                ReZ co-invests with merchants, sharing both risk and reward
              </p>
            </div>

            {riskSharedCampaigns.map(campaign => (
              <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold">{campaign.campaignName}</h3>
                    <p className="text-gray-400 text-sm">{campaign.merchant}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    campaign.status === 'running' ? 'bg-blue-600 text-white' :
                    campaign.status === 'completed' ? 'bg-green-600 text-white' :
                    'bg-gray-600 text-gray-300'
                  }`}>
                    {campaign.status}
                  </span>
                </div>

                {/* Investment Split */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-4">
                  <p className="text-gray-400 text-xs mb-2">Investment Split ({campaign.riskSplit})</p>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-600 rounded-l-lg h-8 flex items-center justify-center">
                      <span className="text-white text-sm">Merchant: ₹{(campaign.merchantInvestment / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex-1 bg-blue-600 rounded-r-lg h-8 flex items-center justify-center">
                      <span className="text-white text-sm">ReZ: ₹{(campaign.rezInvestment / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">GMV Progress</span>
                    <span className="text-white">₹{(campaign.currentGMV / 1000).toFixed(0)}K / ₹{(campaign.targetGMV / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        campaign.projectedOutcome === 'exceeded' ? 'bg-green-500' :
                        campaign.projectedOutcome === 'on_track' ? 'bg-blue-500' :
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${Math.min((campaign.currentGMV / campaign.targetGMV) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {campaign.projectedOutcome === 'exceeded' && (
                      <span className="flex items-center text-green-400 text-sm">
                        <TrendingUp size={14} className="mr-1" /> Target Exceeded!
                      </span>
                    )}
                    {campaign.projectedOutcome === 'on_track' && (
                      <span className="flex items-center text-blue-400 text-sm">
                        <CheckCircle size={14} className="mr-1" /> On Track
                      </span>
                    )}
                  </div>
                  {campaign.daysRemaining > 0 && (
                    <span className="text-gray-400 text-sm">
                      {campaign.daysRemaining} days remaining
                    </span>
                  )}
                </div>
              </div>
            ))}

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
              + Create Risk-Shared Campaign
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMerchantProfitEngine;
