import React, { useState } from 'react';
import {
  Zap, Brain, Target, Users, TrendingUp, BarChart2, Settings, Eye,
  Sparkles, RefreshCw, Play, Pause, ChevronRight, Clock, Activity,
  ShoppingBag, Gift, MapPin, Bell, Star, Heart, MessageSquare,
  ArrowUpRight, AlertTriangle, CheckCircle, Layers, Cpu, Database
} from 'lucide-react';

const RabtulAIRAEngine = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // AI Engine metrics
  const aiMetrics = {
    totalPredictions: 234567890,
    accuracy: 94.7,
    avgLatency: 45,
    activeModels: 12,
    dailyInferences: 8901234,
    personalizations: 45678901,
    recommendationCTR: 8.9,
    conversionLift: 34.5
  };

  // AI Models
  const aiModels = [
    {
      id: 'user_personalization',
      name: 'User Personalization',
      description: 'Personalized offers, deals, and content for each user',
      status: 'active',
      accuracy: 96.2,
      predictions: 45678901,
      latency: 35,
      lastTrained: '2 hours ago',
      features: ['purchase_history', 'browse_behavior', 'location', 'time_of_day', 'demographics']
    },
    {
      id: 'merchant_recommendations',
      name: 'Merchant Recommendations',
      description: 'Which merchants to show to which users',
      status: 'active',
      accuracy: 94.8,
      predictions: 23456789,
      latency: 42,
      lastTrained: '4 hours ago',
      features: ['merchant_category', 'user_preferences', 'distance', 'ratings', 'inventory']
    },
    {
      id: 'price_optimization',
      name: 'Dynamic Pricing',
      description: 'Optimize prices and discounts in real-time',
      status: 'active',
      accuracy: 91.5,
      predictions: 12345678,
      latency: 55,
      lastTrained: '6 hours ago',
      features: ['demand_curve', 'competitor_prices', 'inventory_levels', 'seasonality']
    },
    {
      id: 'fraud_detection',
      name: 'Fraud Detection',
      description: 'Real-time fraud scoring for transactions',
      status: 'active',
      accuracy: 98.7,
      predictions: 8901234,
      latency: 25,
      lastTrained: '1 hour ago',
      features: ['transaction_pattern', 'device_fingerprint', 'location_velocity', 'amount_anomaly']
    },
    {
      id: 'churn_prediction',
      name: 'Churn Prediction',
      description: 'Identify users likely to churn',
      status: 'active',
      accuracy: 89.3,
      predictions: 5678901,
      latency: 120,
      lastTrained: '12 hours ago',
      features: ['activity_decay', 'purchase_frequency', 'coin_usage', 'app_engagement']
    },
    {
      id: 'demand_forecast',
      name: 'Demand Forecasting',
      description: 'Predict product demand for merchants',
      status: 'active',
      accuracy: 87.6,
      predictions: 3456789,
      latency: 250,
      lastTrained: '24 hours ago',
      features: ['historical_sales', 'weather', 'events', 'promotions', 'seasonality']
    },
    {
      id: 'next_action',
      name: 'Next Best Action',
      description: 'What should the user do next?',
      status: 'training',
      accuracy: 85.2,
      predictions: 2345678,
      latency: 65,
      lastTrained: 'Training...',
      features: ['user_journey', 'conversion_funnel', 'engagement_score', 'time_since_action']
    },
    {
      id: 'sentiment_analysis',
      name: 'Review Sentiment',
      description: 'Analyze review and feedback sentiment',
      status: 'active',
      accuracy: 92.1,
      predictions: 1234567,
      latency: 85,
      lastTrained: '8 hours ago',
      features: ['text_content', 'rating', 'context', 'merchant_category']
    }
  ];

  // Personalization categories
  const personalizationTypes = [
    { name: 'Home Feed', icon: Layers, count: 12345678, improvement: '+45%' },
    { name: 'Offer Ranking', icon: Gift, count: 8901234, improvement: '+38%' },
    { name: 'Search Results', icon: Target, count: 5678901, improvement: '+52%' },
    { name: 'Push Notifications', icon: Bell, count: 3456789, improvement: '+28%' },
    { name: 'Merchant Discovery', icon: MapPin, count: 2345678, improvement: '+41%' },
    { name: 'Product Recs', icon: ShoppingBag, count: 1234567, improvement: '+33%' }
  ];

  // Real-time inference stats
  const realtimeStats = {
    currentRPS: 2345,
    peakRPS: 5678,
    gpuUtilization: 78,
    memoryUsage: 65,
    queueDepth: 12
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'training': return 'bg-blue-500/20 text-blue-400';
      case 'paused': return 'bg-yellow-500/20 text-yellow-400';
      case 'error': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 border-b border-purple-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center animate-pulse">
              <Brain size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AIRA Engine</h1>
              <p className="text-purple-300 text-sm">AI-Powered Intelligence & Recommendations</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All Models Active
            </div>
            <button className="bg-purple-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <Settings size={18} />
              Configure
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-200 text-sm">Total Predictions</span>
              <Zap size={18} className="text-yellow-400" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(aiMetrics.totalPredictions)}</p>
            <p className="text-xs text-green-400">+24% this month</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-200 text-sm">Avg Accuracy</span>
              <Target size={18} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold">{aiMetrics.accuracy}%</p>
            <p className="text-xs text-gray-400">Across all models</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-200 text-sm">Recommendation CTR</span>
              <TrendingUp size={18} className="text-cyan-400" />
            </div>
            <p className="text-2xl font-bold">{aiMetrics.recommendationCTR}%</p>
            <p className="text-xs text-green-400">+2.3% vs baseline</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-200 text-sm">Conversion Lift</span>
              <ArrowUpRight size={18} className="text-pink-400" />
            </div>
            <p className="text-2xl font-bold">+{aiMetrics.conversionLift}%</p>
            <p className="text-xs text-gray-400">AI vs non-AI</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Real-time Inference */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Real-time Inference</h2>
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-green-400 animate-pulse" />
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-gray-900 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-cyan-400">{formatNumber(realtimeStats.currentRPS)}</p>
              <p className="text-xs text-gray-500">Current RPS</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-purple-400">{formatNumber(realtimeStats.peakRPS)}</p>
              <p className="text-xs text-gray-500">Peak RPS</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-green-400">{realtimeStats.gpuUtilization}%</p>
              <p className="text-xs text-gray-500">GPU Usage</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-amber-400">{realtimeStats.memoryUsage}%</p>
              <p className="text-xs text-gray-500">Memory</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-pink-400">{aiMetrics.avgLatency}ms</p>
              <p className="text-xs text-gray-500">Avg Latency</p>
            </div>
          </div>
        </div>

        {/* AI Models */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">AI Models ({aiModels.length})</h2>
            <button className="text-purple-400 text-sm font-medium flex items-center gap-1">
              <RefreshCw size={14} />
              Retrain All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aiModels.map(model => (
              <div key={model.id} className="bg-gray-900 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                      <Brain size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{model.name}</h3>
                      <p className="text-xs text-gray-500">{model.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(model.status)}`}>
                    {model.status === 'active' && <CheckCircle size={10} />}
                    {model.status === 'training' && <RefreshCw size={10} className="animate-spin" />}
                    {model.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-sm mb-3">
                  <div>
                    <p className="text-gray-500 text-xs">Accuracy</p>
                    <p className="font-medium text-green-400">{model.accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Predictions</p>
                    <p className="font-medium text-cyan-400">{formatNumber(model.predictions)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Latency</p>
                    <p className="font-medium">{model.latency}ms</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Last Trained</p>
                    <p className="font-medium text-xs">{model.lastTrained}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {model.features.slice(0, 4).map((feature, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-400">
                      {feature}
                    </span>
                  ))}
                  {model.features.length > 4 && (
                    <span className="px-2 py-0.5 bg-gray-800 rounded text-xs text-purple-400">
                      +{model.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personalization Impact */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Personalization Impact</h2>
          <div className="grid grid-cols-3 gap-4">
            {personalizationTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <type.icon size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">{type.name}</p>
                    <p className="text-xs text-gray-500">{formatNumber(type.count)} personalizations</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Engagement Lift</span>
                  <span className="text-green-400 font-semibold">{type.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AIRA Capabilities */}
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-lg font-semibold mb-4">AIRA Capabilities</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Sparkles size={32} className="mx-auto mb-2 text-yellow-400" />
              <p className="font-medium">Smart Recommendations</p>
              <p className="text-xs text-gray-400 mt-1">Personalized for each user</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Target size={32} className="mx-auto mb-2 text-green-400" />
              <p className="font-medium">Predictive Analytics</p>
              <p className="text-xs text-gray-400 mt-1">Forecast demand & behavior</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <MessageSquare size={32} className="mx-auto mb-2 text-blue-400" />
              <p className="font-medium">AI Chat Assistant</p>
              <p className="text-xs text-gray-400 mt-1">Natural language queries</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Brain size={32} className="mx-auto mb-2 text-pink-400" />
              <p className="font-medium">Auto-Decision Making</p>
              <p className="text-xs text-gray-400 mt-1">Autonomous operations</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-colors text-left">
            <RefreshCw size={24} className="text-cyan-400 mb-2" />
            <p className="font-medium">Retrain Models</p>
            <p className="text-xs text-gray-500">Update with new data</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-colors text-left">
            <BarChart2 size={24} className="text-purple-400 mb-2" />
            <p className="font-medium">A/B Tests</p>
            <p className="text-xs text-gray-500">Model experiments</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-colors text-left">
            <Database size={24} className="text-amber-400 mb-2" />
            <p className="font-medium">Feature Store</p>
            <p className="text-xs text-gray-500">Manage ML features</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-colors text-left">
            <Cpu size={24} className="text-green-400 mb-2" />
            <p className="font-medium">GPU Cluster</p>
            <p className="text-xs text-gray-500">Infrastructure status</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RabtulAIRAEngine;
