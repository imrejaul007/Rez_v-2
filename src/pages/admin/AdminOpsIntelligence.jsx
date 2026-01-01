import React, { useState } from 'react';
import {
  ArrowLeft, Brain, Target, AlertTriangle, CheckCircle, Clock, Users,
  TrendingUp, TrendingDown, Zap, MapPin, Play, ChevronRight, Lightbulb,
  Activity, BarChart3, Settings, RefreshCw, HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminOpsIntelligence = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('bangalore');

  const cities = [
    { id: 'bangalore', name: 'Bangalore', health: 87, alerts: 3 },
    { id: 'mumbai', name: 'Mumbai', health: 72, alerts: 5 },
    { id: 'delhi', name: 'Delhi', health: 91, alerts: 1 },
    { id: 'chennai', name: 'Chennai', health: 68, alerts: 4 }
  ];

  const whatToDoNow = [
    {
      id: 1,
      priority: 'critical',
      title: 'Koramangala delivery delays spiking',
      reason: '23% of orders > 45 mins in last hour',
      action: 'Activate surge incentive for delivery partners',
      impact: 'Reduce delays by 40%',
      oneClick: true
    },
    {
      id: 2,
      priority: 'high',
      title: 'Merchant "Punjabi Tadka" overwhelmed',
      reason: '45 pending orders, avg prep time 35 mins',
      action: 'Temporarily pause new orders (15 mins)',
      impact: 'Prevent 12 potential cancellations',
      oneClick: true
    },
    {
      id: 3,
      priority: 'medium',
      title: 'HSR Layout low partner availability',
      reason: 'Only 8 partners for 25+ pending orders',
      action: 'Send push to off-duty partners nearby',
      impact: 'Get 5-7 more partners online',
      oneClick: true
    },
    {
      id: 4,
      priority: 'low',
      title: 'Evening rush prep needed',
      reason: 'Peak hour in 2 hours, current capacity at 65%',
      action: 'Pre-alert high-volume merchants',
      impact: 'Smoother peak handling',
      oneClick: false
    }
  ];

  const cityHealth = {
    overallScore: 87,
    metrics: [
      { name: 'Order Success Rate', value: 94, target: 95, status: 'warning' },
      { name: 'Avg Delivery Time', value: 28, target: 30, unit: 'mins', status: 'good' },
      { name: 'Partner Availability', value: 78, target: 85, status: 'critical' },
      { name: 'Merchant Online Rate', value: 92, target: 90, status: 'good' },
      { name: 'Customer Satisfaction', value: 4.2, target: 4.0, unit: '/5', status: 'good' },
      { name: 'Cancellation Rate', value: 4.8, target: 5, unit: '%', status: 'good' }
    ]
  };

  const simulations = [
    {
      scenario: 'Rain starts in 30 mins',
      prediction: 'Demand +40%, Partner availability -30%',
      recommendation: 'Pre-activate rain surge, send partner alerts now'
    },
    {
      scenario: 'IPL match at 7 PM',
      prediction: 'Food orders +60% between 6-8 PM',
      recommendation: 'Increase merchant prep capacity, bonus for partners'
    },
    {
      scenario: 'Competitor flash sale detected',
      prediction: 'Potential -15% orders in next 2 hours',
      recommendation: 'Counter with matching offer in affected zones'
    }
  ];

  const playbooks = [
    {
      name: 'Rush Hour Protocol',
      triggers: ['Demand > 150%', 'Wait time > 40 mins'],
      steps: ['Pause low-rated merchants', 'Surge partner incentives', 'Enable express priority'],
      lastUsed: '2 hours ago'
    },
    {
      name: 'Weather Emergency',
      triggers: ['Rain/Storm detected', 'Partner drop > 40%'],
      steps: ['Increase delivery fees', 'Alert customers of delays', 'Premium for active partners'],
      lastUsed: '3 days ago'
    },
    {
      name: 'Supply Crisis',
      triggers: ['Partner count < 50% needed', 'Order backlog > 100'],
      steps: ['Pause new orders', 'Emergency partner bonus', 'Customer delay notifications'],
      lastUsed: 'Never'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Brain size={24} className="mr-2" />
                Ops Intelligence Layer
              </h1>
              <p className="text-cyan-200 text-sm">What to do right now</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* City Selector */}
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {cities.map(city => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl ${
                selectedCity === city.id
                  ? 'bg-white text-blue-600'
                  : 'bg-white/20 text-white'
              }`}
            >
              <div className="flex items-center">
                <span className="font-medium">{city.name}</span>
                {city.alerts > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {city.alerts}
                  </span>
                )}
              </div>
              <p className={`text-xs ${selectedCity === city.id ? 'text-blue-400' : 'text-cyan-200'}`}>
                Health: {city.health}%
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* What To Do Now */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold flex items-center">
            <Zap size={20} className="mr-2 text-yellow-400" />
            What To Do Right Now
          </h2>
          <span className="text-gray-400 text-sm">Auto-refreshing</span>
        </div>

        <div className="space-y-3">
          {whatToDoNow.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start">
                  <div className={`w-3 h-3 ${getPriorityColor(item.priority)} rounded-full mt-1.5 mr-3`} />
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.reason}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full capitalize ${getPriorityColor(item.priority)} text-white`}>
                  {item.priority}
                </span>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <div className="flex items-center mb-1">
                  <Lightbulb size={14} className="text-yellow-400 mr-2" />
                  <span className="text-yellow-400 text-sm font-medium">Recommended Action</span>
                </div>
                <p className="text-white text-sm">{item.action}</p>
                <p className="text-green-400 text-xs mt-1">Expected: {item.impact}</p>
              </div>

              {item.oneClick ? (
                <button className="w-full bg-cyan-600 text-white py-2 rounded-lg font-medium flex items-center justify-center">
                  <Play size={16} className="mr-2" />
                  Execute Now
                </button>
              ) : (
                <button className="w-full bg-gray-700 text-white py-2 rounded-lg font-medium">
                  View Details →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* City Health */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <Activity size={20} className="mr-2 text-green-400" />
          City Health Diagnosis
        </h2>

        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-400 text-sm">Overall Health Score</p>
              <p className="text-3xl font-bold text-white">{cityHealth.overallScore}%</p>
            </div>
            <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
              cityHealth.overallScore >= 80 ? 'border-green-500' :
              cityHealth.overallScore >= 60 ? 'border-yellow-500' : 'border-red-500'
            }`}>
              <CheckCircle size={32} className={
                cityHealth.overallScore >= 80 ? 'text-green-500' :
                cityHealth.overallScore >= 60 ? 'text-yellow-500' : 'text-red-500'
              } />
            </div>
          </div>

          <div className="space-y-3">
            {cityHealth.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{metric.name}</span>
                <div className="flex items-center">
                  <span className={`font-medium ${getStatusColor(metric.status)}`}>
                    {metric.value}{metric.unit || '%'}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">
                    / {metric.target}{metric.unit || '%'}
                  </span>
                  {metric.status === 'critical' && (
                    <AlertTriangle size={14} className="text-red-400 ml-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simulations */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <HelpCircle size={20} className="mr-2 text-purple-400" />
          "What If" Simulations
        </h2>

        <div className="space-y-3">
          {simulations.map((sim, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-purple-400 font-medium mb-2">If: {sim.scenario}</h4>
              <div className="bg-gray-700/50 rounded-lg p-3 mb-2">
                <p className="text-gray-300 text-sm">
                  <span className="text-gray-500">Prediction:</span> {sim.prediction}
                </p>
              </div>
              <div className="flex items-center text-sm">
                <Lightbulb size={14} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400">{sim.recommendation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Playbooks */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <Settings size={20} className="mr-2 text-blue-400" />
          Emergency Playbooks
        </h2>

        <div className="space-y-3">
          {playbooks.map((playbook, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">{playbook.name}</h4>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                  Activate
                </button>
              </div>

              <div className="mb-2">
                <p className="text-gray-500 text-xs mb-1">Triggers:</p>
                <div className="flex flex-wrap gap-1">
                  {playbook.triggers.map((trigger, tIdx) => (
                    <span key={tIdx} className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded">
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <p className="text-gray-500 text-xs mb-1">Steps:</p>
                <div className="space-y-1">
                  {playbook.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center text-sm text-gray-300">
                      <span className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs mr-2">
                        {sIdx + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-500 text-xs">Last used: {playbook.lastUsed}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOpsIntelligence;
