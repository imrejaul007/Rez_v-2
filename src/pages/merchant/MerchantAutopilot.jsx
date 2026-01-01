import React, { useState } from 'react';
import {
  ArrowLeft, Zap, Brain, TrendingUp, DollarSign, Target, Clock,
  ToggleLeft, ToggleRight, Settings, AlertTriangle, CheckCircle,
  Play, Pause, RefreshCw, ChevronRight, Sparkles, Bot, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantAutopilot = () => {
  const navigate = useNavigate();
  const [autopilotEnabled, setAutopilotEnabled] = useState(true);
  const [selectedMode, setSelectedMode] = useState('balanced');

  const autopilotModes = [
    {
      id: 'conservative',
      name: 'Conservative',
      icon: Shield,
      description: 'Safe decisions, human approval for big changes',
      riskLevel: 'Low',
      color: 'bg-blue-500'
    },
    {
      id: 'balanced',
      name: 'Balanced',
      icon: Target,
      description: 'Optimal balance of automation and control',
      riskLevel: 'Medium',
      color: 'bg-green-500'
    },
    {
      id: 'aggressive',
      name: 'Aggressive',
      icon: Zap,
      description: 'Maximum automation, AI takes full control',
      riskLevel: 'High',
      color: 'bg-orange-500'
    }
  ];

  const [automations, setAutomations] = useState([
    {
      id: 'auto_pricing',
      name: 'Auto-Pricing Engine',
      description: 'AI adjusts prices based on demand, competition & inventory',
      enabled: true,
      decisions: 47,
      revenue_impact: '+12.4%',
      last_action: '2 mins ago',
      actions: [
        { text: 'Increased Butter Chicken by ₹20 (high demand)', time: '2 mins ago', type: 'increase' },
        { text: 'Reduced Paneer Tikka by ₹15 (low orders)', time: '1 hour ago', type: 'decrease' }
      ]
    },
    {
      id: 'auto_offers',
      name: 'Auto-Offer Creation',
      description: 'Creates offers automatically based on slow hours & inventory',
      enabled: true,
      decisions: 23,
      revenue_impact: '+8.7%',
      last_action: '15 mins ago',
      actions: [
        { text: 'Created 20% off on Desserts (3-5 PM slow)', time: '15 mins ago', type: 'create' },
        { text: 'Extended lunch combo till 4 PM', time: '3 hours ago', type: 'extend' }
      ]
    },
    {
      id: 'auto_inventory',
      name: 'Auto-Inventory Management',
      description: 'Reorders stock, marks items unavailable, suggests menu changes',
      enabled: true,
      decisions: 156,
      revenue_impact: '-2.1% waste',
      last_action: '30 mins ago',
      actions: [
        { text: 'Auto-reordered 50kg Basmati Rice', time: '30 mins ago', type: 'reorder' },
        { text: 'Marked "Fish Curry" unavailable (low stock)', time: '2 hours ago', type: 'disable' }
      ]
    },
    {
      id: 'auto_campaigns',
      name: 'Auto-Campaign Manager',
      description: 'Pauses bad campaigns, reallocates budget to winners',
      enabled: true,
      decisions: 12,
      revenue_impact: '+15.2% ROI',
      last_action: '1 hour ago',
      actions: [
        { text: 'Paused "Weekend Special" (0.2% CTR)', time: '1 hour ago', type: 'pause' },
        { text: 'Increased "Family Meal" budget by 50%', time: '4 hours ago', type: 'boost' }
      ]
    },
    {
      id: 'auto_staffing',
      name: 'Auto-Staff Allocation',
      description: 'Suggests shift changes based on predicted demand',
      enabled: false,
      decisions: 0,
      revenue_impact: 'N/A',
      last_action: 'Never',
      actions: []
    },
    {
      id: 'auto_menu',
      name: 'Auto-Menu Optimization',
      description: 'Hides poor performers, promotes bestsellers',
      enabled: true,
      decisions: 8,
      revenue_impact: '+5.3%',
      last_action: '6 hours ago',
      actions: [
        { text: 'Moved "Veg Biryani" to top of menu', time: '6 hours ago', type: 'promote' },
        { text: 'Hidden "Greek Salad" (2 orders/week)', time: '1 day ago', type: 'hide' }
      ]
    }
  ]);

  const aiStats = {
    totalDecisions: 246,
    decisionsToday: 34,
    revenueImpact: '+₹18,450',
    timeSaved: '12 hours',
    accuracy: 94.2,
    overrides: 3
  };

  const pendingApprovals = [
    {
      id: 1,
      type: 'pricing',
      title: 'Increase base delivery fee by ₹10',
      reason: 'Fuel costs up 8%, competitor average ₹45',
      impact: '+₹2,100/day revenue',
      confidence: 87,
      urgency: 'medium'
    },
    {
      id: 2,
      type: 'menu',
      title: 'Remove "Chocolate Brownie" from menu',
      reason: 'Only 3 orders in 30 days, ₹2,400 inventory waste',
      impact: 'Save ₹2,400/month',
      confidence: 92,
      urgency: 'low'
    },
    {
      id: 3,
      type: 'campaign',
      title: 'Launch "Rainy Day Special" offer',
      reason: 'Weather forecast: Rain tomorrow, historical +40% orders',
      impact: '+₹5,000 estimated',
      confidence: 78,
      urgency: 'high'
    }
  ];

  const toggleAutomation = (id) => {
    setAutomations(prev => prev.map(a =>
      a.id === id ? { ...a, enabled: !a.enabled } : a
    ));
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'increase': return <TrendingUp size={12} className="text-green-400" />;
      case 'decrease': return <TrendingUp size={12} className="text-red-400 rotate-180" />;
      case 'create': return <Sparkles size={12} className="text-purple-400" />;
      case 'pause': return <Pause size={12} className="text-yellow-400" />;
      case 'boost': return <Zap size={12} className="text-green-400" />;
      case 'reorder': return <RefreshCw size={12} className="text-blue-400" />;
      case 'disable': return <AlertTriangle size={12} className="text-orange-400" />;
      case 'promote': return <TrendingUp size={12} className="text-green-400" />;
      case 'hide': return <Pause size={12} className="text-gray-400" />;
      default: return <CheckCircle size={12} className="text-green-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Bot size={24} className="mr-2" />
                Autopilot Mode
              </h1>
              <p className="text-purple-200 text-sm">AI runs your business automatically</p>
            </div>
          </div>
          <button
            onClick={() => setAutopilotEnabled(!autopilotEnabled)}
            className={`p-3 rounded-xl ${autopilotEnabled ? 'bg-green-500' : 'bg-gray-600'}`}
          >
            {autopilotEnabled ? <Play size={20} /> : <Pause size={20} />}
          </button>
        </div>

        {/* Master Status */}
        <div className={`rounded-xl p-4 ${autopilotEnabled ? 'bg-green-500/20 border border-green-500/50' : 'bg-gray-700/50'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${autopilotEnabled ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
              <div>
                <p className="font-bold">{autopilotEnabled ? 'Autopilot Active' : 'Autopilot Paused'}</p>
                <p className="text-sm text-gray-300">
                  {autopilotEnabled ? 'AI is making decisions for you' : 'Manual control enabled'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-400">{aiStats.totalDecisions}</p>
              <p className="text-xs text-gray-300">decisions made</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Stats */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-green-400 font-bold">{aiStats.revenueImpact}</p>
            <p className="text-gray-400 text-xs">Revenue Impact</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-blue-400 font-bold">{aiStats.timeSaved}</p>
            <p className="text-gray-400 text-xs">Time Saved</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-purple-400 font-bold">{aiStats.accuracy}%</p>
            <p className="text-gray-400 text-xs">Accuracy</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-yellow-400 font-bold">{aiStats.overrides}</p>
            <p className="text-gray-400 text-xs">Overrides</p>
          </div>
        </div>

        {/* Mode Selection */}
        <div className="mb-6">
          <h3 className="text-white font-bold mb-3">Autopilot Mode</h3>
          <div className="grid grid-cols-3 gap-2">
            {autopilotModes.map(mode => {
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`p-3 rounded-xl text-center ${
                    selectedMode === mode.id
                      ? `${mode.color} text-white`
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  <Icon size={24} className="mx-auto mb-1" />
                  <p className="text-sm font-medium">{mode.name}</p>
                  <p className="text-xs opacity-70">{mode.riskLevel} Risk</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pending Approvals */}
        {pendingApprovals.length > 0 && (
          <div className="mb-6">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <AlertTriangle size={18} className="mr-2 text-yellow-400" />
              Pending Approvals ({pendingApprovals.length})
            </h3>
            <div className="space-y-3">
              {pendingApprovals.map(approval => (
                <div key={approval.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-white font-medium">{approval.title}</p>
                      <p className="text-gray-400 text-sm">{approval.reason}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      approval.urgency === 'high' ? 'bg-red-500/20 text-red-400' :
                      approval.urgency === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-600 text-gray-300'
                    }`}>
                      {approval.urgency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <span className="text-green-400 mr-3">{approval.impact}</span>
                      <span className="text-purple-400">{approval.confidence}% confidence</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-red-600/20 text-red-400 px-3 py-1 rounded-lg text-sm">
                        Reject
                      </button>
                      <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Automation Modules */}
        <h3 className="text-white font-bold mb-3">Automation Modules</h3>
        <div className="space-y-3">
          {automations.map(automation => (
            <div key={automation.id} className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Brain size={18} className="text-purple-400 mr-2" />
                      <h4 className="text-white font-medium">{automation.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{automation.description}</p>
                  </div>
                  <button
                    onClick={() => toggleAutomation(automation.id)}
                    className={automation.enabled ? 'text-green-400' : 'text-gray-500'}
                  >
                    {automation.enabled ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>
                </div>

                {automation.enabled && (
                  <>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-400">{automation.decisions} decisions</span>
                      <span className="text-green-400 font-medium">{automation.revenue_impact}</span>
                      <span className="text-gray-500">Last: {automation.last_action}</span>
                    </div>

                    {automation.actions.length > 0 && (
                      <div className="bg-gray-700/50 rounded-lg p-3 space-y-2">
                        <p className="text-gray-400 text-xs mb-2">Recent Actions:</p>
                        {automation.actions.slice(0, 2).map((action, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            {getActionIcon(action.type)}
                            <span className="text-gray-300 ml-2 flex-1">{action.text}</span>
                            <span className="text-gray-500 text-xs">{action.time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI Learning */}
        <div className="mt-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-4 border border-purple-500/30">
          <div className="flex items-center mb-3">
            <Sparkles size={20} className="text-purple-400 mr-2" />
            <h3 className="text-white font-bold">AI Learning Progress</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Understanding your business</span>
                <span className="text-purple-400">87%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-[87%] bg-purple-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Customer preference learning</span>
                <span className="text-purple-400">72%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-[72%] bg-purple-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Demand prediction accuracy</span>
                <span className="text-purple-400">94%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-[94%] bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-3">
            AI improves with every transaction. 2,450 data points analyzed.
          </p>
        </div>
      </div>

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantAutopilot;
