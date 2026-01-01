import React, { useState } from 'react';
import {
  ArrowLeft, Clock, Zap, TrendingUp, TrendingDown, Sun, Moon, Cloud,
  Calendar, Target, DollarSign, Users, AlertTriangle, Play, Pause,
  ChevronRight, BarChart3, Timer, Sunrise, Sunset
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminTemporalCommerce = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('realtime');

  const timeSlots = [
    { time: '6-9 AM', name: 'Early Bird', demand: 35, surge: 0, color: 'bg-blue-500' },
    { time: '9-12 PM', name: 'Morning Rush', demand: 75, surge: 15, color: 'bg-orange-500' },
    { time: '12-3 PM', name: 'Lunch Peak', demand: 95, surge: 25, color: 'bg-red-500' },
    { time: '3-6 PM', name: 'Afternoon Lull', demand: 40, surge: -10, color: 'bg-green-500' },
    { time: '6-9 PM', name: 'Dinner Rush', demand: 90, surge: 20, color: 'bg-red-500' },
    { time: '9-12 AM', name: 'Late Night', demand: 55, surge: 5, color: 'bg-purple-500' }
  ];

  const currentHour = {
    time: '7:45 PM',
    slot: 'Dinner Rush',
    demand: 88,
    activeSurge: 18,
    ordersPerMin: 42,
    revenue: '₹2.4L/hour',
    merchantsOnline: 1245,
    avgDeliveryTime: '28 mins'
  };

  const surgeRules = [
    {
      id: 1,
      name: 'Peak Hour Surge',
      trigger: 'Demand > 80%',
      action: '+15-25% pricing',
      status: 'active',
      impact: '+₹45K/day'
    },
    {
      id: 2,
      name: 'Rain Boost',
      trigger: 'Weather: Rain',
      action: '+30% delivery fee',
      status: 'standby',
      impact: '+₹12K when active'
    },
    {
      id: 3,
      name: 'Late Night Premium',
      trigger: 'Time: 11 PM - 6 AM',
      action: '+20% minimum order',
      status: 'active',
      impact: '+₹8K/night'
    },
    {
      id: 4,
      name: 'Weekend Special',
      trigger: 'Day: Sat-Sun',
      action: 'Auto happy hours 3-5 PM',
      status: 'scheduled',
      impact: '+₹35K/weekend'
    }
  ];

  const demandThrottling = [
    {
      category: 'Food Delivery',
      currentDemand: 92,
      capacity: 85,
      throttleActive: true,
      action: 'Showing longer delivery times',
      overflow: '+7%'
    },
    {
      category: 'Grocery',
      currentDemand: 65,
      capacity: 90,
      throttleActive: false,
      action: 'Normal operations',
      overflow: '-25%'
    },
    {
      category: 'Beauty',
      currentDemand: 78,
      capacity: 80,
      throttleActive: false,
      action: 'Near capacity',
      overflow: '-2%'
    }
  ];

  const happyHours = [
    {
      id: 1,
      name: 'Afternoon Tea Time',
      time: '3:00 PM - 5:00 PM',
      discount: '20% off',
      categories: ['Cafes', 'Bakeries'],
      status: 'active',
      ordersGenerated: 342
    },
    {
      id: 2,
      name: 'Early Dinner Deal',
      time: '5:30 PM - 7:00 PM',
      discount: '15% off',
      categories: ['Restaurants'],
      status: 'upcoming',
      ordersGenerated: 0
    },
    {
      id: 3,
      name: 'Midnight Munchies',
      time: '11:00 PM - 1:00 AM',
      discount: 'Free delivery',
      categories: ['Fast Food', 'Desserts'],
      status: 'scheduled',
      ordersGenerated: 0
    }
  ];

  const exclusivityWindows = [
    {
      product: 'iPhone 16 Pro',
      window: 'First 2 hours',
      startTime: '10:00 AM Tomorrow',
      eligibility: 'Gold+ members',
      registrations: 1245
    },
    {
      product: 'Nike Air Jordan',
      window: 'First 30 mins',
      startTime: '12:00 PM Friday',
      eligibility: 'Sneakerheads Club',
      registrations: 892
    },
    {
      product: 'PS5 Bundle',
      window: 'First 1 hour',
      startTime: '6:00 PM Saturday',
      eligibility: 'Premium members',
      registrations: 2341
    }
  ];

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
                <Clock size={24} className="mr-2" />
                Temporal Commerce Engine
              </h1>
              <p className="text-indigo-200 text-sm">Control when people buy</p>
            </div>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Live
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-indigo-200 text-sm">Current Time</p>
              <p className="text-2xl font-bold">{currentHour.time}</p>
            </div>
            <div className="text-right">
              <p className="text-indigo-200 text-sm">{currentHour.slot}</p>
              <p className="text-orange-400 font-bold">+{currentHour.activeSurge}% Surge</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-lg font-bold">{currentHour.ordersPerMin}</p>
              <p className="text-xs text-indigo-200">Orders/min</p>
            </div>
            <div>
              <p className="text-lg font-bold">{currentHour.revenue}</p>
              <p className="text-xs text-indigo-200">Revenue</p>
            </div>
            <div>
              <p className="text-lg font-bold">{currentHour.merchantsOnline}</p>
              <p className="text-xs text-indigo-200">Merchants</p>
            </div>
            <div>
              <p className="text-lg font-bold">{currentHour.avgDeliveryTime}</p>
              <p className="text-xs text-indigo-200">Avg Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Demand Graph */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3">Today's Demand Pattern</h3>
        <div className="flex items-end space-x-2 h-32 mb-2">
          {timeSlots.map((slot, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div
                className={`w-full ${slot.color} rounded-t-lg transition-all`}
                style={{ height: `${slot.demand}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          {timeSlots.map((slot, idx) => (
            <div key={idx} className="flex-1 text-center">
              <p className="text-gray-400 text-xs">{slot.time}</p>
              <p className={`text-xs ${slot.surge > 0 ? 'text-red-400' : slot.surge < 0 ? 'text-green-400' : 'text-gray-500'}`}>
                {slot.surge > 0 ? '+' : ''}{slot.surge}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {[
          { id: 'realtime', label: 'Real-time' },
          { id: 'surge', label: 'Surge Rules' },
          { id: 'happy', label: 'Happy Hours' },
          { id: 'exclusive', label: 'Exclusivity' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'realtime' && (
          <div className="space-y-4">
            {/* Demand Throttling */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3 flex items-center">
                <AlertTriangle size={18} className="mr-2 text-yellow-400" />
                Demand Throttling
              </h3>
              <div className="space-y-3">
                {demandThrottling.map((cat, idx) => (
                  <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{cat.category}</span>
                      <span className={`text-sm ${cat.throttleActive ? 'text-red-400' : 'text-green-400'}`}>
                        {cat.throttleActive ? 'Throttling' : 'Normal'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-1 h-2 bg-gray-600 rounded-full">
                        <div
                          className={`h-full rounded-full ${
                            cat.currentDemand > cat.capacity ? 'bg-red-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(cat.currentDemand, 100)}%` }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm">{cat.currentDemand}%</span>
                    </div>
                    <p className="text-gray-400 text-sm">{cat.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-red-600 text-white p-4 rounded-xl">
                <Zap size={24} className="mb-2" />
                <p className="font-bold">Activate Surge</p>
                <p className="text-xs opacity-70">Force +20% pricing</p>
              </button>
              <button className="bg-green-600 text-white p-4 rounded-xl">
                <TrendingDown size={24} className="mb-2" />
                <p className="font-bold">Flash Happy Hour</p>
                <p className="text-xs opacity-70">30 min discount</p>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'surge' && (
          <div className="space-y-3">
            <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-orange-400 font-bold mb-1">Dynamic Pricing Active</h3>
              <p className="text-gray-300 text-sm">
                AI adjusts prices based on demand, time, weather, and competition
              </p>
            </div>

            {surgeRules.map(rule => (
              <div key={rule.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold">{rule.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    rule.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    rule.status === 'standby' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {rule.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Trigger</p>
                    <p className="text-white">{rule.trigger}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Action</p>
                    <p className="text-orange-400">{rule.action}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">{rule.impact}</span>
                  <button className="text-indigo-400 text-sm">Edit →</button>
                </div>
              </div>
            ))}

            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">
              + Create Surge Rule
            </button>
          </div>
        )}

        {activeTab === 'happy' && (
          <div className="space-y-3">
            <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-green-400 font-bold mb-1">Auto Happy Hours</h3>
              <p className="text-gray-300 text-sm">
                System creates discounts during low-demand periods to boost orders
              </p>
            </div>

            {happyHours.map(hh => (
              <div key={hh.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold">{hh.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    hh.status === 'active' ? 'bg-green-500 text-white' :
                    hh.status === 'upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-600 text-gray-300'
                  }`}>
                    {hh.status}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-300">{hh.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-green-400 font-bold mr-2">{hh.discount}</span>
                    <span className="text-gray-400 text-sm">
                      on {hh.categories.join(', ')}
                    </span>
                  </div>
                  {hh.ordersGenerated > 0 && (
                    <span className="text-blue-400 text-sm">
                      {hh.ordersGenerated} orders
                    </span>
                  )}
                </div>
              </div>
            ))}

            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold">
              + Create Happy Hour
            </button>
          </div>
        )}

        {activeTab === 'exclusive' && (
          <div className="space-y-3">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-purple-400 font-bold mb-1">Time-Based Exclusivity</h3>
              <p className="text-gray-300 text-sm">
                Premium members get early access to hot products
              </p>
            </div>

            {exclusivityWindows.map((window, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold">{window.product}</h4>
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                    {window.window}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Starts</p>
                    <p className="text-white">{window.startTime}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Eligible</p>
                    <p className="text-purple-400">{window.eligibility}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {window.registrations.toLocaleString()} waiting
                  </span>
                  <button className="text-indigo-400 text-sm">Manage →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTemporalCommerce;
