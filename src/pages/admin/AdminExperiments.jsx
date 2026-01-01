import React, { useState } from 'react';
import {
  ArrowLeft, FlaskConical, ToggleLeft, ToggleRight, Users, TrendingUp,
  Percent, Clock, Target, Zap, ChevronRight, Plus, Settings, Eye,
  BarChart2, CheckCircle, XCircle, Pause, Play, AlertTriangle,
  Layers, GitBranch, Flag, Coins, Filter, RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminExperiments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('experiments');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Feature Flags
  const [featureFlags, setFeatureFlags] = useState([
    {
      id: 'new_coin_ui',
      name: 'New Coin Animation UI',
      description: 'Confetti animation when coins are earned',
      enabled: true,
      rolloutPercent: 100,
      targetAudience: 'all',
      createdAt: '2024-12-01',
      modifiedAt: '2024-12-15',
    },
    {
      id: 'gamification_v2',
      name: 'Gamification V2',
      description: 'New achievements and daily streak system',
      enabled: true,
      rolloutPercent: 50,
      targetAudience: 'beta_testers',
      createdAt: '2024-12-10',
      modifiedAt: '2024-12-28',
    },
    {
      id: 'voice_search',
      name: 'Voice Search',
      description: 'Search merchants using voice commands',
      enabled: false,
      rolloutPercent: 0,
      targetAudience: 'internal',
      createdAt: '2024-12-20',
      modifiedAt: '2024-12-20',
    },
    {
      id: 'dark_mode',
      name: 'Dark Mode Toggle',
      description: 'Allow users to switch between light and dark themes',
      enabled: true,
      rolloutPercent: 100,
      targetAudience: 'all',
      createdAt: '2024-11-15',
      modifiedAt: '2024-12-01',
    },
    {
      id: 'instant_cashback',
      name: 'Instant Cashback',
      description: 'Skip coin conversion and give instant cashback',
      enabled: false,
      rolloutPercent: 0,
      targetAudience: 'none',
      createdAt: '2024-12-25',
      modifiedAt: '2024-12-25',
    },
  ]);

  // A/B Experiments
  const [experiments, setExperiments] = useState([
    {
      id: 'EXP001',
      name: 'Coin Earning Rate Optimization',
      description: 'Testing different coin earning rates to optimize engagement',
      status: 'running',
      startDate: '2024-12-15',
      endDate: '2025-01-15',
      variants: [
        { id: 'control', name: 'Control (5%)', allocation: 50, conversionRate: 12.3, coinsEarned: 45000, revenue: 125000 },
        { id: 'variant_a', name: 'Higher Rate (7%)', allocation: 25, conversionRate: 15.8, coinsEarned: 62000, revenue: 98000 },
        { id: 'variant_b', name: 'Tiered (3-10%)', allocation: 25, conversionRate: 18.2, coinsEarned: 58000, revenue: 112000 },
      ],
      targetMetric: 'conversion_rate',
      sampleSize: 50000,
      currentSample: 38500,
      confidence: 87,
      winner: null,
    },
    {
      id: 'EXP002',
      name: 'Referral Bonus Amount',
      description: 'Testing optimal referral bonus to maximize viral growth',
      status: 'running',
      startDate: '2024-12-20',
      endDate: '2025-01-20',
      variants: [
        { id: 'control', name: 'Control (50 coins)', allocation: 33, referrals: 234, costPerRef: 50, ltv: 450 },
        { id: 'variant_a', name: 'Higher (100 coins)', allocation: 33, referrals: 456, costPerRef: 100, ltv: 520 },
        { id: 'variant_b', name: 'Both get 75', allocation: 34, referrals: 389, costPerRef: 150, ltv: 580 },
      ],
      targetMetric: 'referral_rate',
      sampleSize: 10000,
      currentSample: 4200,
      confidence: 72,
      winner: null,
    },
    {
      id: 'EXP003',
      name: 'Push Notification Timing',
      description: 'Finding the best time to send daily coin reminders',
      status: 'completed',
      startDate: '2024-11-15',
      endDate: '2024-12-15',
      variants: [
        { id: 'control', name: 'Morning (9 AM)', allocation: 25, openRate: 8.2, clickRate: 2.1 },
        { id: 'variant_a', name: 'Lunch (12 PM)', allocation: 25, openRate: 11.5, clickRate: 3.4 },
        { id: 'variant_b', name: 'Evening (6 PM)', allocation: 25, openRate: 15.8, clickRate: 4.8 },
        { id: 'variant_c', name: 'Night (9 PM)', allocation: 25, openRate: 12.3, clickRate: 3.9 },
      ],
      targetMetric: 'open_rate',
      sampleSize: 100000,
      currentSample: 100000,
      confidence: 98,
      winner: 'variant_b',
    },
    {
      id: 'EXP004',
      name: 'Merchant Onboarding Flow',
      description: 'Simplified vs detailed merchant registration',
      status: 'paused',
      startDate: '2024-12-01',
      endDate: null,
      variants: [
        { id: 'control', name: 'Current (12 steps)', allocation: 50, completionRate: 34, timeToComplete: 15 },
        { id: 'variant_a', name: 'Simplified (5 steps)', allocation: 50, completionRate: 67, timeToComplete: 4 },
      ],
      targetMetric: 'completion_rate',
      sampleSize: 1000,
      currentSample: 420,
      confidence: 95,
      winner: null,
      pauseReason: 'Awaiting legal review on simplified KYC',
    },
  ]);

  // Coin Rule Experiments
  const [coinExperiments, setCoinExperiments] = useState([
    {
      id: 'COIN001',
      name: 'Dynamic Coin Rate by Time',
      description: 'Higher earning during off-peak hours to balance load',
      status: 'running',
      rules: [
        { time: '6 AM - 10 AM', rate: '5%', multiplier: 1.0 },
        { time: '10 AM - 2 PM', rate: '4%', multiplier: 0.8 },
        { time: '2 PM - 6 PM', rate: '5%', multiplier: 1.0 },
        { time: '6 PM - 10 PM', rate: '7%', multiplier: 1.4 },
        { time: '10 PM - 6 AM', rate: '8%', multiplier: 1.6 },
      ],
      impactMetrics: {
        revenueChange: '+5.2%',
        coinIssuedChange: '+12%',
        peakLoadReduction: '-18%',
      }
    },
    {
      id: 'COIN002',
      name: 'Category-Based Bonus',
      description: 'Different coin rates for different merchant categories',
      status: 'running',
      rules: [
        { category: 'Restaurants', baseRate: '5%', bonus: '+2%' },
        { category: 'Grocery', baseRate: '4%', bonus: '+1%' },
        { category: 'Fashion', baseRate: '6%', bonus: '+3%' },
        { category: 'Electronics', baseRate: '3%', bonus: '0%' },
        { category: 'Entertainment', baseRate: '8%', bonus: '+5%' },
      ],
      impactMetrics: {
        categoryGrowth: '+23% entertainment',
        crossCategory: '+8% users trying new categories',
        marginImpact: '-2.1%',
      }
    },
  ]);

  // Gradual Rollout
  const [rollouts, setRollouts] = useState([
    {
      id: 'ROLL001',
      feature: 'UPI 2.0 Integration',
      currentPhase: 3,
      totalPhases: 5,
      phases: [
        { phase: 1, percent: 1, status: 'completed', users: 1000 },
        { phase: 2, percent: 5, status: 'completed', users: 5000 },
        { phase: 3, percent: 25, status: 'active', users: 25000 },
        { phase: 4, percent: 50, status: 'pending', users: 50000 },
        { phase: 5, percent: 100, status: 'pending', users: 100000 },
      ],
      errorRate: 0.02,
      successRate: 99.8,
    },
    {
      id: 'ROLL002',
      feature: 'AI Bill Scanner',
      currentPhase: 2,
      totalPhases: 4,
      phases: [
        { phase: 1, percent: 5, status: 'completed', users: 5000 },
        { phase: 2, percent: 20, status: 'active', users: 20000 },
        { phase: 3, percent: 50, status: 'pending', users: 50000 },
        { phase: 4, percent: 100, status: 'pending', users: 100000 },
      ],
      errorRate: 1.2,
      successRate: 98.8,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'bg-green-600';
      case 'completed': return 'bg-blue-600';
      case 'paused': return 'bg-yellow-600';
      case 'draft': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  const toggleFeatureFlag = (flagId) => {
    setFeatureFlags(prev => prev.map(flag =>
      flag.id === flagId ? { ...flag, enabled: !flag.enabled } : flag
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Experiments & Feature Flags</h1>
              <p className="text-violet-200 text-sm">A/B testing & gradual rollouts</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white/20 px-4 py-2 rounded-lg flex items-center"
          >
            <Plus size={18} className="mr-1" /> New
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{experiments.filter(e => e.status === 'running').length}</p>
            <p className="text-xs text-violet-200">Active Tests</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{featureFlags.filter(f => f.enabled).length}</p>
            <p className="text-xs text-violet-200">Flags On</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{rollouts.length}</p>
            <p className="text-xs text-violet-200">Rollouts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">87%</p>
            <p className="text-xs text-violet-200">Avg Confidence</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['experiments', 'flags', 'coin_rules', 'rollouts'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-violet-400 border-b-2 border-violet-400'
                : 'text-gray-400'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* A/B Experiments Tab */}
        {activeTab === 'experiments' && (
          <div className="space-y-4">
            {experiments.map(exp => (
              <div key={exp.id} className="bg-gray-800 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center">
                      <span className={`${getStatusColor(exp.status)} text-white text-xs px-2 py-1 rounded-full mr-2`}>
                        {exp.status}
                      </span>
                      <span className="text-gray-400 text-sm">{exp.id}</span>
                    </div>
                    <h3 className="text-white font-bold mt-1">{exp.name}</h3>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    {exp.status === 'running' ? (
                      <button className="bg-yellow-600/20 text-yellow-400 p-2 rounded-lg">
                        <Pause size={16} />
                      </button>
                    ) : exp.status === 'paused' ? (
                      <button className="bg-green-600/20 text-green-400 p-2 rounded-lg">
                        <Play size={16} />
                      </button>
                    ) : null}
                    <button className="bg-gray-700 text-white p-2 rounded-lg">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Sample Progress</span>
                    <span className="text-white">{exp.currentSample.toLocaleString()} / {exp.sampleSize.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500"
                      style={{ width: `${(exp.currentSample / exp.sampleSize) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Variants */}
                <div className="space-y-2 mb-4">
                  {exp.variants.map(variant => (
                    <div
                      key={variant.id}
                      className={`bg-gray-700/50 rounded-lg p-3 flex items-center justify-between ${
                        exp.winner === variant.id ? 'border border-green-500' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        {exp.winner === variant.id && (
                          <CheckCircle size={16} className="text-green-400 mr-2" />
                        )}
                        <div>
                          <p className="text-white font-medium">{variant.name}</p>
                          <p className="text-gray-400 text-xs">{variant.allocation}% allocation</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {variant.conversionRate && (
                          <p className="text-green-400 font-bold">{variant.conversionRate}%</p>
                        )}
                        {variant.openRate && (
                          <p className="text-green-400 font-bold">{variant.openRate}% open</p>
                        )}
                        {variant.completionRate && (
                          <p className="text-green-400 font-bold">{variant.completionRate}% complete</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Confidence */}
                <div className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3">
                  <div className="flex items-center">
                    <Target size={18} className="text-violet-400 mr-2" />
                    <span className="text-gray-400">Statistical Confidence</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`font-bold ${
                      exp.confidence >= 95 ? 'text-green-400' :
                      exp.confidence >= 80 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {exp.confidence}%
                    </span>
                    {exp.confidence >= 95 && (
                      <span className="ml-2 text-green-400 text-sm">Ready to ship!</span>
                    )}
                  </div>
                </div>

                {exp.pauseReason && (
                  <div className="mt-3 bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-3 flex items-start">
                    <AlertTriangle size={16} className="text-yellow-400 mr-2 mt-0.5" />
                    <p className="text-yellow-300 text-sm">{exp.pauseReason}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Feature Flags Tab */}
        {activeTab === 'flags' && (
          <div className="space-y-3">
            {featureFlags.map(flag => (
              <div key={flag.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">{flag.name}</h3>
                      {flag.rolloutPercent < 100 && flag.enabled && (
                        <span className="ml-2 bg-yellow-600/20 text-yellow-400 text-xs px-2 py-0.5 rounded">
                          {flag.rolloutPercent}% rollout
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{flag.description}</p>
                  </div>
                  <button
                    onClick={() => toggleFeatureFlag(flag.id)}
                    className={flag.enabled ? 'text-green-400' : 'text-gray-500'}
                  >
                    {flag.enabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">
                      <Users size={14} className="inline mr-1" />
                      {flag.targetAudience}
                    </span>
                    <span className="text-gray-500">
                      <Clock size={14} className="inline mr-1" />
                      Modified {flag.modifiedAt}
                    </span>
                  </div>
                  <button className="text-violet-400">
                    <Settings size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Audience Segments */}
            <div className="bg-gray-800 rounded-xl p-4 mt-6">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <Filter size={18} className="text-violet-400 mr-2" />
                Audience Segments
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'all', name: 'All Users', count: '1.2M' },
                  { id: 'beta_testers', name: 'Beta Testers', count: '12.5K' },
                  { id: 'internal', name: 'Internal Team', count: '150' },
                  { id: 'premium', name: 'Premium Users', count: '45K' },
                  { id: 'new_users', name: 'New Users (< 7 days)', count: '28K' },
                ].map(segment => (
                  <div key={segment.id} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-white">{segment.name}</span>
                    <span className="text-gray-400">{segment.count} users</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Coin Rule Experiments Tab */}
        {activeTab === 'coin_rules' && (
          <div className="space-y-4">
            {coinExperiments.map(exp => (
              <div key={exp.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                      {exp.status}
                    </span>
                    <h3 className="text-white font-bold mt-2">{exp.name}</h3>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                  <Coins size={24} className="text-yellow-400" />
                </div>

                {/* Rules Table */}
                <div className="bg-gray-700/30 rounded-lg overflow-hidden mb-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left text-gray-400 p-2">
                          {exp.rules[0].time ? 'Time Slot' : 'Category'}
                        </th>
                        <th className="text-right text-gray-400 p-2">Rate</th>
                        <th className="text-right text-gray-400 p-2">
                          {exp.rules[0].multiplier ? 'Multiplier' : 'Bonus'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {exp.rules.map((rule, idx) => (
                        <tr key={idx} className="border-b border-gray-700">
                          <td className="text-white p-2">{rule.time || rule.category}</td>
                          <td className="text-right text-white p-2">{rule.rate || rule.baseRate}</td>
                          <td className="text-right text-green-400 p-2">
                            {rule.multiplier ? `${rule.multiplier}x` : rule.bonus}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(exp.impactMetrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className={`font-bold ${
                        value.startsWith('+') ? 'text-green-400' :
                        value.startsWith('-') ? 'text-red-400' : 'text-white'
                      }`}>
                        {value}
                      </p>
                      <p className="text-gray-400 text-xs">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gradual Rollouts Tab */}
        {activeTab === 'rollouts' && (
          <div className="space-y-4">
            {rollouts.map(rollout => (
              <div key={rollout.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">{rollout.feature}</h3>
                    <p className="text-gray-400 text-sm">
                      Phase {rollout.currentPhase} of {rollout.totalPhases}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{rollout.successRate}%</p>
                    <p className="text-gray-400 text-xs">Success Rate</p>
                  </div>
                </div>

                {/* Phase Progress */}
                <div className="space-y-2 mb-4">
                  {rollout.phases.map(phase => (
                    <div key={phase.phase} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        phase.status === 'completed' ? 'bg-green-600' :
                        phase.status === 'active' ? 'bg-violet-600 animate-pulse' :
                        'bg-gray-700'
                      }`}>
                        {phase.status === 'completed' ? (
                          <CheckCircle size={16} className="text-white" />
                        ) : (
                          <span className="text-white text-sm">{phase.phase}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${
                            phase.status === 'completed' ? 'text-green-400' :
                            phase.status === 'active' ? 'text-white' :
                            'text-gray-400'
                          }`}>
                            {phase.percent}% Rollout
                          </span>
                          <span className="text-gray-400 text-sm">
                            {phase.users.toLocaleString()} users
                          </span>
                        </div>
                        <div className="h-1 bg-gray-700 rounded-full mt-1">
                          <div
                            className={`h-full rounded-full ${
                              phase.status === 'completed' ? 'bg-green-500' :
                              phase.status === 'active' ? 'bg-violet-500' :
                              'bg-gray-600'
                            }`}
                            style={{ width: phase.status !== 'pending' ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Health Metrics */}
                <div className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      rollout.errorRate < 1 ? 'bg-green-400' :
                      rollout.errorRate < 5 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></span>
                    <span className="text-gray-400 text-sm">Error Rate: {rollout.errorRate}%</span>
                  </div>
                  <button className="bg-violet-600 text-white px-4 py-1 rounded-lg text-sm">
                    Advance Phase
                  </button>
                </div>
              </div>
            ))}

            {/* Rollout Best Practices */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <GitBranch size={18} className="text-violet-400 mr-2" />
                Rollout Best Practices
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Start with 1% internal testing before public rollout
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Monitor error rates - rollback if greater than 5%
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Wait 24-48 hours between phase advances
                </li>
                <li className="flex items-start">
                  <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5" />
                  Keep kill switch ready for instant rollback
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Create New</h3>
              <button onClick={() => setShowCreateModal(false)}>
                <XCircle size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-800 rounded-xl p-4 text-left">
                <FlaskConical size={32} className="text-violet-400 mb-2" />
                <p className="text-white font-medium">A/B Experiment</p>
                <p className="text-gray-400 text-sm">Test variants</p>
              </button>
              <button className="bg-gray-800 rounded-xl p-4 text-left">
                <Flag size={32} className="text-green-400 mb-2" />
                <p className="text-white font-medium">Feature Flag</p>
                <p className="text-gray-400 text-sm">Toggle features</p>
              </button>
              <button className="bg-gray-800 rounded-xl p-4 text-left">
                <Coins size={32} className="text-yellow-400 mb-2" />
                <p className="text-white font-medium">Coin Rule</p>
                <p className="text-gray-400 text-sm">Earning rules</p>
              </button>
              <button className="bg-gray-800 rounded-xl p-4 text-left">
                <Layers size={32} className="text-blue-400 mb-2" />
                <p className="text-white font-medium">Gradual Rollout</p>
                <p className="text-gray-400 text-sm">Phased release</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminExperiments;
