import React, { useState } from 'react';
import {
  ArrowLeft, Shield, Swords, Target, TrendingUp, AlertTriangle, Zap,
  MapPin, Users, DollarSign, Eye, Activity, ChevronRight, Play,
  Pause, BarChart3, Crosshair, Flag
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminCompetitiveDefense = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('threats');
  const [zoneWarMode, setZoneWarMode] = useState(false);

  const competitorThreats = [
    {
      id: 1,
      competitor: 'Swiggy',
      threat: 'Aggressive pricing in Koramangala',
      severity: 'high',
      detectedAt: '2 hours ago',
      area: 'Koramangala, Bangalore',
      action: 'Auto-matched prices + bonus coins',
      status: 'defending',
      ourShare: 45,
      theirShare: 38
    },
    {
      id: 2,
      competitor: 'Zepto',
      threat: 'New dark store opened',
      severity: 'medium',
      detectedAt: '1 day ago',
      area: 'HSR Layout, Bangalore',
      action: 'Increased merchant visibility',
      status: 'monitoring',
      ourShare: 52,
      theirShare: 28
    },
    {
      id: 3,
      competitor: 'BigBasket',
      threat: 'Free delivery campaign',
      severity: 'high',
      detectedAt: '4 hours ago',
      area: 'Pan Bangalore',
      action: 'Matched free delivery for Gold+',
      status: 'defending',
      ourShare: 41,
      theirShare: 35
    },
    {
      id: 4,
      competitor: 'Dunzo',
      threat: 'Celebrity endorsement launch',
      severity: 'low',
      detectedAt: '6 hours ago',
      area: 'All India',
      action: 'Boosted creator content',
      status: 'responded',
      ourShare: 48,
      theirShare: 22
    }
  ];

  const defenseStrategies = [
    {
      id: 1,
      name: 'Price Match Shield',
      description: 'Auto-match competitor prices within 5 mins',
      enabled: true,
      triggers: 156,
      savings: '₹2.4L customer retention'
    },
    {
      id: 2,
      name: 'Merchant Boost',
      description: 'Boost merchant visibility when competitor ads detected',
      enabled: true,
      triggers: 89,
      savings: '₹1.8L GMV protected'
    },
    {
      id: 3,
      name: 'Commission Flex',
      description: 'Reduce commission in contested zones',
      enabled: true,
      triggers: 23,
      savings: '45 merchants retained'
    },
    {
      id: 4,
      name: 'Exclusive Offers',
      description: 'Auto-create exclusive offers in attack zones',
      enabled: false,
      triggers: 0,
      savings: 'Not active'
    },
    {
      id: 5,
      name: 'Loyalty Lock',
      description: 'Extra rewards to users considering competitors',
      enabled: true,
      triggers: 234,
      savings: '89% retention rate'
    }
  ];

  const contestedZones = [
    {
      area: 'Koramangala',
      city: 'Bangalore',
      rezShare: 42,
      competitors: [
        { name: 'Swiggy', share: 35 },
        { name: 'Zomato', share: 18 }
      ],
      trend: 'declining',
      action: 'Zone War Active'
    },
    {
      area: 'Bandra West',
      city: 'Mumbai',
      rezShare: 38,
      competitors: [
        { name: 'Swiggy', share: 32 },
        { name: 'Zomato', share: 25 }
      ],
      trend: 'stable',
      action: 'Monitoring'
    },
    {
      area: 'Connaught Place',
      city: 'Delhi',
      rezShare: 51,
      competitors: [
        { name: 'Zomato', share: 28 },
        { name: 'Swiggy', share: 15 }
      ],
      trend: 'growing',
      action: 'Dominant'
    }
  ];

  const warRoomActions = [
    {
      action: 'Flash 50% off in Koramangala',
      cost: '₹50K',
      impact: 'Recover 8% market share',
      duration: '2 hours'
    },
    {
      action: 'Commission holiday for merchants',
      cost: '₹1.2L',
      impact: 'Lock 50+ merchants',
      duration: '1 week'
    },
    {
      action: 'Triple coins for all orders',
      cost: '₹30K',
      impact: '+40% user activation',
      duration: '4 hours'
    },
    {
      action: 'Free delivery blitz',
      cost: '₹80K',
      impact: 'Neutralize Zepto threat',
      duration: '6 hours'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-rose-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Swords size={24} className="mr-2" />
                Competitive Defense Engine
              </h1>
              <p className="text-red-200 text-sm">Detect, defend, dominate</p>
            </div>
          </div>
          <button
            onClick={() => setZoneWarMode(!zoneWarMode)}
            className={`px-4 py-2 rounded-lg font-bold flex items-center ${
              zoneWarMode ? 'bg-red-500 animate-pulse' : 'bg-white/20'
            }`}
          >
            <Crosshair size={18} className="mr-2" />
            {zoneWarMode ? 'WAR MODE' : 'Normal'}
          </button>
        </div>

        {/* Threat Level */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-200">Overall Threat Level</span>
            <span className="text-yellow-400 font-bold">ELEVATED</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full">
            <div className="h-full w-[65%] bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-green-400">Low</span>
            <span className="text-yellow-400">▲ Current</span>
            <span className="text-red-400">Critical</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 grid grid-cols-4 gap-2">
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-red-400 font-bold text-xl">4</p>
          <p className="text-gray-400 text-xs">Active Threats</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-green-400 font-bold text-xl">89%</p>
          <p className="text-gray-400 text-xs">Defense Rate</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-blue-400 font-bold text-xl">₹4.2L</p>
          <p className="text-gray-400 text-xs">Saved Today</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-purple-400 font-bold text-xl">12</p>
          <p className="text-gray-400 text-xs">Zones Protected</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {[
          { id: 'threats', label: 'Live Threats' },
          { id: 'defense', label: 'Defense' },
          { id: 'zones', label: 'Zones' },
          { id: 'warroom', label: 'War Room' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-red-400 border-b-2 border-red-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'threats' && (
          <div className="space-y-3">
            {competitorThreats.map(threat => (
              <div key={threat.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${getSeverityColor(threat.severity)} rounded-full mr-3`} />
                    <div>
                      <h4 className="text-white font-bold">{threat.competitor}</h4>
                      <p className="text-gray-400 text-sm">{threat.threat}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    threat.status === 'defending' ? 'bg-red-500/20 text-red-400' :
                    threat.status === 'monitoring' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {threat.status}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span>{threat.area}</span>
                  <span className="mx-2">•</span>
                  <span>{threat.detectedAt}</span>
                </div>

                {/* Market Share Battle */}
                <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Market Share Battle</span>
                  </div>
                  <div className="flex h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500"
                      style={{ width: `${threat.ourShare}%` }}
                    />
                    <div
                      className="bg-red-500"
                      style={{ width: `${threat.theirShare}%` }}
                    />
                    <div className="bg-gray-600 flex-1" />
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-green-400">ReZ: {threat.ourShare}%</span>
                    <span className="text-red-400">{threat.competitor}: {threat.theirShare}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Shield size={14} className="text-blue-400 mr-1" />
                    <span className="text-gray-300">{threat.action}</span>
                  </div>
                  <button className="text-red-400 text-sm font-medium">
                    Escalate →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'defense' && (
          <div className="space-y-3">
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-blue-400 font-bold mb-1">Auto-Defense Systems</h3>
              <p className="text-gray-300 text-sm">
                AI monitors competitors 24/7 and responds automatically
              </p>
            </div>

            {defenseStrategies.map(strategy => (
              <div key={strategy.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold">{strategy.name}</h4>
                  <button
                    className={`px-3 py-1 rounded-full text-xs ${
                      strategy.enabled ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {strategy.enabled ? 'Active' : 'Disabled'}
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-2">{strategy.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400">{strategy.triggers} triggers</span>
                  <span className="text-green-400">{strategy.savings}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'zones' && (
          <div className="space-y-3">
            {contestedZones.map((zone, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold">{zone.area}</h4>
                    <p className="text-gray-400 text-sm">{zone.city}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    zone.action === 'Zone War Active' ? 'bg-red-500 text-white animate-pulse' :
                    zone.action === 'Dominant' ? 'bg-green-500/20 text-green-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {zone.action}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-400 font-bold">ReZ: {zone.rezShare}%</span>
                    <span className={`text-sm ${
                      zone.trend === 'growing' ? 'text-green-400' :
                      zone.trend === 'declining' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {zone.trend === 'growing' ? '↑' : zone.trend === 'declining' ? '↓' : '→'} {zone.trend}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full flex overflow-hidden">
                    <div className="bg-green-500" style={{ width: `${zone.rezShare}%` }} />
                    {zone.competitors.map((comp, compIdx) => (
                      <div
                        key={compIdx}
                        className={compIdx === 0 ? 'bg-red-500' : 'bg-orange-500'}
                        style={{ width: `${comp.share}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {zone.competitors.map((comp, compIdx) => (
                    <span key={compIdx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {comp.name}: {comp.share}%
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'warroom' && (
          <div className="space-y-4">
            <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4">
              <h3 className="text-red-400 font-bold flex items-center mb-2">
                <Swords size={20} className="mr-2" />
                War Room - Emergency Actions
              </h3>
              <p className="text-gray-300 text-sm">
                Deploy aggressive counter-measures against competitors
              </p>
            </div>

            {warRoomActions.map((action, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2">{action.action}</h4>
                <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-gray-400 text-xs">Cost</p>
                    <p className="text-red-400 font-medium">{action.cost}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-gray-400 text-xs">Impact</p>
                    <p className="text-green-400 font-medium">{action.impact}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-gray-400 text-xs">Duration</p>
                    <p className="text-blue-400 font-medium">{action.duration}</p>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg font-bold">
                  Deploy Now
                </button>
              </div>
            ))}

            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center">
              <Zap size={20} className="mr-2" />
              ACTIVATE FULL WAR MODE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCompetitiveDefense;
