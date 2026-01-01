import React, { useState } from 'react';
import {
  ArrowLeft, Brain, TrendingUp, Users, Store, Zap, Target,
  BarChart2, PieChart, Activity, ChevronRight, Play, Pause,
  Settings, Eye, RefreshCw, Lightbulb, GitBranch, Layers,
  ArrowUpRight, ArrowDownRight, Clock, CheckCircle, Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminMerchantIntelligence = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('insights');

  // Cross-Category Demand Graph
  const demandGraph = [
    {
      source: 'Coffee Shops',
      connections: [
        { target: 'Bookstores', correlation: 78, avgGap: '45 mins' },
        { target: 'Co-working Spaces', correlation: 65, avgGap: '2 hours' },
        { target: 'Bakeries', correlation: 82, avgGap: '30 mins' },
      ]
    },
    {
      source: 'Salons',
      connections: [
        { target: 'Cafés', correlation: 71, avgGap: '1 hour' },
        { target: 'Fashion Stores', correlation: 68, avgGap: '45 mins' },
        { target: 'Spas', correlation: 45, avgGap: '1 week' },
      ]
    },
    {
      source: 'Restaurants',
      connections: [
        { target: 'Movie Theaters', correlation: 85, avgGap: '30 mins' },
        { target: 'Ice Cream Shops', correlation: 72, avgGap: '45 mins' },
        { target: 'Pubs/Bars', correlation: 58, avgGap: '2 hours' },
      ]
    },
    {
      source: 'Gyms',
      connections: [
        { target: 'Health Food Stores', correlation: 89, avgGap: '1 hour' },
        { target: 'Supplement Shops', correlation: 76, avgGap: 'Same day' },
        { target: 'Sportswear Stores', correlation: 62, avgGap: '1 week' },
      ]
    },
  ];

  // Merchant Auto-Pilot Suggestions
  const [autoPilotSuggestions, setAutoPilotSuggestions] = useState([
    {
      id: 1,
      merchantId: 'M5678',
      merchantName: 'Royal Biryani House',
      suggestion: 'Launch 15% off lunch combo',
      reason: 'Weekday 12-2pm footfall is 40% below average',
      expectedImpact: '+35% lunch revenue',
      confidence: 92,
      autoPilotEnabled: true,
      status: 'auto_approved'
    },
    {
      id: 2,
      merchantId: 'M9012',
      merchantName: 'Fashion Hub',
      suggestion: 'Run flash sale on winter jackets',
      reason: 'Temperature drop predicted next week, competitor stock low',
      expectedImpact: '+120% jacket sales',
      confidence: 87,
      autoPilotEnabled: false,
      status: 'pending_approval'
    },
    {
      id: 3,
      merchantId: 'M3456',
      merchantName: 'Urban Café',
      suggestion: 'Partner with nearby bookstore for combo deal',
      reason: '78% of your customers also visit Crossword Books',
      expectedImpact: '+25% ticket size',
      confidence: 85,
      autoPilotEnabled: true,
      status: 'auto_approved'
    },
    {
      id: 4,
      merchantId: 'M7890',
      merchantName: 'FitLife Gym',
      suggestion: 'Offer protein shake discount post-workout',
      reason: '89% correlation with health food purchases',
      expectedImpact: '+45% in-gym revenue',
      confidence: 94,
      autoPilotEnabled: true,
      status: 'auto_approved'
    },
  ]);

  // Customer Lifetime Value Insights (Only visible inside ReZ)
  const clvInsights = [
    {
      merchantId: 'M5678',
      merchantName: 'Royal Biryani House',
      avgCLV: 12500,
      topCustomerCLV: 45000,
      clvTrend: 'up',
      clvGrowth: 15,
      repeatRate: 68,
      avgVisitsPerMonth: 2.4,
      churnRisk: 12,
      topSegments: ['Young Professionals', 'Families', 'Corporate']
    },
    {
      merchantId: 'M9012',
      merchantName: 'Fashion Hub',
      avgCLV: 8500,
      topCustomerCLV: 125000,
      clvTrend: 'up',
      clvGrowth: 23,
      repeatRate: 45,
      avgVisitsPerMonth: 0.8,
      churnRisk: 28,
      topSegments: ['Women 25-35', 'College Students', 'Working Professionals']
    },
  ];

  // Auto-Decision Rules
  const [autoDecisionRules, setAutoDecisionRules] = useState([
    {
      id: 1,
      name: 'Low Traffic Auto-Boost',
      condition: 'Daily footfall < 70% of average',
      action: 'Auto-launch 10% discount for 4 hours',
      activeMerchants: 234,
      triggered: 1567,
      successRate: 78,
      enabled: true
    },
    {
      id: 2,
      name: 'Competitor Price Match',
      condition: 'Nearby competitor price drops > 15%',
      action: 'Alert + auto-suggest matching offer',
      activeMerchants: 156,
      triggered: 234,
      successRate: 85,
      enabled: true
    },
    {
      id: 3,
      name: 'Peak Demand Surge',
      condition: 'Demand forecast > 150% normal',
      action: 'Increase prices by 10% (dynamic)',
      activeMerchants: 89,
      triggered: 456,
      successRate: 92,
      enabled: true
    },
    {
      id: 4,
      name: 'Inventory Clearance',
      condition: 'Perishable stock > 48 hours',
      action: 'Auto-launch flash sale',
      activeMerchants: 67,
      triggered: 189,
      successRate: 95,
      enabled: true
    },
  ]);

  // Platform Intelligence Stats
  const platformStats = {
    totalInsightsGenerated: 45678,
    autoDecisionsTaken: 8934,
    revenueFromAutoDecisions: 12500000,
    merchantsOnAutoPilot: 456,
    avgRevenueBoostAutoPilot: 34,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Merchant Intelligence Brain</h1>
              <p className="text-purple-200 text-sm">Cross-category insights & auto-pilot</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Brain size={16} className="mr-1" />
            <span className="text-sm">AI Powered</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{platformStats.merchantsOnAutoPilot}</p>
            <p className="text-xs text-purple-200">Auto-Pilot Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">+{platformStats.avgRevenueBoostAutoPilot}%</p>
            <p className="text-xs text-purple-200">Avg Revenue Boost</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹{(platformStats.revenueFromAutoDecisions / 10000000).toFixed(1)}Cr</p>
            <p className="text-xs text-purple-200">Auto-Generated</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['insights', 'demand_graph', 'auto_pilot', 'clv'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-purple-400 border-b-2 border-purple-400'
                : 'text-gray-400'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Auto-Pilot Suggestions Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Lightbulb size={20} className="text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">AI-Generated Suggestions</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Real-time recommendations that merchants can auto-approve
              </p>
            </div>

            {autoPilotSuggestions.map(suggestion => (
              <div key={suggestion.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-gray-400 text-sm">{suggestion.merchantName}</p>
                    <h3 className="text-white font-bold">{suggestion.suggestion}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    suggestion.status === 'auto_approved' ? 'bg-green-600 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {suggestion.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-xs mb-1">Reason:</p>
                  <p className="text-white text-sm">{suggestion.reason}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-gray-400 text-xs">Expected Impact</p>
                      <p className="text-green-400 font-medium">{suggestion.expectedImpact}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Confidence</p>
                      <p className="text-purple-400 font-medium">{suggestion.confidence}%</p>
                    </div>
                  </div>
                  {suggestion.autoPilotEnabled ? (
                    <span className="flex items-center text-green-400 text-sm">
                      <Zap size={14} className="mr-1" /> Auto-Pilot ON
                    </span>
                  ) : (
                    <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                      Approve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cross-Category Demand Graph Tab */}
        {activeTab === 'demand_graph' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <GitBranch size={20} className="text-blue-400 mr-2" />
                <h3 className="text-white font-semibold">Cross-Category Demand Graph</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Discover which businesses your customers visit together
              </p>
            </div>

            {demandGraph.map((category, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-3">
                    <Store size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{category.source}</h3>
                    <p className="text-gray-400 text-sm">Customers also visit:</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.connections.map((conn, connIdx) => (
                    <div key={connIdx} className="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                          <Store size={16} className="text-gray-300" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{conn.target}</p>
                          <p className="text-gray-400 text-xs">Avg gap: {conn.avgGap}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-purple-400 font-bold">{conn.correlation}%</p>
                        <p className="text-gray-500 text-xs">correlation</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-3 bg-purple-600/20 text-purple-400 py-2 rounded-lg text-sm">
                  Create Cross-Promotion Campaign
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Auto-Pilot Rules Tab */}
        {activeTab === 'auto_pilot' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Zap size={20} className="text-green-400 mr-2" />
                <h3 className="text-white font-semibold">Auto-Pilot Mode</h3>
              </div>
              <p className="text-gray-400 text-sm">
                ReZ automatically makes optimal decisions for merchants
              </p>
            </div>

            {autoDecisionRules.map(rule => (
              <div key={rule.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold">{rule.name}</h3>
                  <button
                    onClick={() => setAutoDecisionRules(prev => prev.map(r =>
                      r.id === rule.id ? { ...r, enabled: !r.enabled } : r
                    ))}
                    className={`px-3 py-1 rounded-full text-sm ${
                      rule.enabled ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {rule.enabled ? 'Active' : 'Disabled'}
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-xs">IF:</p>
                  <p className="text-white text-sm mb-2">{rule.condition}</p>
                  <p className="text-gray-400 text-xs">THEN:</p>
                  <p className="text-green-400 text-sm">{rule.action}</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{rule.activeMerchants}</p>
                    <p className="text-gray-400 text-xs">Merchants</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{rule.triggered}</p>
                    <p className="text-gray-400 text-xs">Times Used</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">{rule.successRate}%</p>
                    <p className="text-gray-400 text-xs">Success</p>
                  </div>
                </div>
              </div>
            ))}

            <button className="w-full bg-green-600/20 border border-green-500/30 text-green-400 py-4 rounded-xl font-medium">
              + Create Auto-Decision Rule
            </button>
          </div>
        )}

        {/* Customer Lifetime Value Tab */}
        {activeTab === 'clv' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Target size={20} className="text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Customer Lifetime Value</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Data gravity - CLV only visible inside ReZ. Leaving = losing this intelligence.
              </p>
            </div>

            {clvInsights.map(merchant => (
              <div key={merchant.merchantId} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                    <Store size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{merchant.merchantName}</h3>
                    <p className="text-gray-400 text-sm">{merchant.merchantId}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Avg Customer CLV</p>
                    <div className="flex items-center">
                      <p className="text-white font-bold text-xl">₹{merchant.avgCLV.toLocaleString()}</p>
                      {merchant.clvTrend === 'up' && (
                        <ArrowUpRight size={16} className="text-green-400 ml-2" />
                      )}
                    </div>
                    <p className="text-green-400 text-xs">+{merchant.clvGrowth}% this quarter</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Top Customer CLV</p>
                    <p className="text-yellow-400 font-bold text-xl">₹{merchant.topCustomerCLV.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">Highest value customer</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{merchant.repeatRate}%</p>
                    <p className="text-gray-400 text-xs">Repeat Rate</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{merchant.avgVisitsPerMonth}</p>
                    <p className="text-gray-400 text-xs">Visits/Month</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-2 text-center">
                    <p className={`font-bold ${merchant.churnRisk > 20 ? 'text-red-400' : 'text-green-400'}`}>
                      {merchant.churnRisk}%
                    </p>
                    <p className="text-gray-400 text-xs">Churn Risk</p>
                  </div>
                </div>

                {/* Top Segments */}
                <div>
                  <p className="text-gray-400 text-xs mb-2">Top Customer Segments</p>
                  <div className="flex flex-wrap gap-2">
                    {merchant.topSegments.map((segment, idx) => (
                      <span key={idx} className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">
                        {segment}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Data Lock Warning */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Target size={18} className="text-red-400 mr-2" />
                <span className="text-red-400 font-medium">Merchant Dependency Lock</span>
              </div>
              <p className="text-gray-300 text-sm">
                This CLV data is computed from cross-platform behavior. If merchant leaves ReZ,
                they lose access to this intelligence permanently. This creates irreversible dependency.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMerchantIntelligence;
