import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Zap, Clock, Users, TrendingUp, AlertTriangle, CheckCircle,
  Timer, BarChart3, Activity, Volume2, VolumeX, Maximize, Minimize,
  Settings, Bell, BellOff, Gauge, Target, Award, RefreshCw, Play, Pause,
  ChevronRight, Coffee, UtensilsCrossed, ShoppingCart, Scissors, Flame,
  ThumbsUp, Star, RotateCcw
} from 'lucide-react';

const MerchantRushHourMode = () => {
  const [isRushMode, setIsRushMode] = useState(false);
  const [activeTab, setActiveTab] = useState('live');

  // ==========================================
  // RUSH HOUR MODE
  // Optimized POS performance during peak times
  // "Will it work during rush hour?" - Merchant's #6 silent question
  // ==========================================

  // Rush Hour Detection
  const [rushHourStatus, setRushHourStatus] = useState({
    isRushHour: true,
    currentLoad: 85, // percentage
    avgTransactionTime: 45, // seconds
    queueLength: 12,
    staffOnDuty: 3,
    peakExpected: '13:30',
    estimatedEndTime: '14:30'
  });

  // Performance Metrics
  const [performanceMetrics, setPerformanceMetrics] = useState({
    transactionsPerMinute: 4.2,
    avgBillTime: 38, // seconds
    avgPaymentTime: 12, // seconds
    successRate: 99.8,
    offlineTransactions: 0,
    pendingSync: 0
  });

  // Rush Hour Settings
  const [rushSettings, setRushSettings] = useState({
    autoDetect: true,
    triggerThreshold: 70, // load percentage
    simplifiedUI: true,
    disableAnimations: true,
    quickPayEnabled: true,
    soundAlerts: true,
    autoSuggestMode: true,
    skipConfirmations: false,
    preloadProducts: true,
    cacheEnabled: true
  });

  // Queue Status
  const [queueStatus, setQueueStatus] = useState([
    { id: 1, type: 'bill', status: 'processing', items: 5, amount: 450, elapsed: 25 },
    { id: 2, type: 'bill', status: 'waiting', items: 3, amount: 280, elapsed: 45 },
    { id: 3, type: 'bill', status: 'waiting', items: 8, amount: 890, elapsed: 60 },
    { id: 4, type: 'payment', status: 'waiting', items: 2, amount: 150, elapsed: 30 }
  ]);

  // Rush Hour History
  const [rushHistory, setRushHistory] = useState([
    { date: 'Today', peakTime: '12:30-14:00', transactions: 156, avgTime: 42, rating: 4.8 },
    { date: 'Yesterday', peakTime: '12:45-14:15', transactions: 142, avgTime: 45, rating: 4.6 },
    { date: '2 days ago', peakTime: '13:00-14:30', transactions: 138, avgTime: 48, rating: 4.5 }
  ]);

  // Staff Performance
  const [staffPerformance, setStaffPerformance] = useState([
    { id: 1, name: 'Rahul', transactions: 45, avgTime: 35, accuracy: 99.5, status: 'active' },
    { id: 2, name: 'Priya', transactions: 52, avgTime: 32, accuracy: 99.8, status: 'active' },
    { id: 3, name: 'Amit', transactions: 38, avgTime: 42, accuracy: 98.9, status: 'break' }
  ]);

  // Quick Actions for Rush Mode
  const quickActions = [
    { id: 'cash', label: 'Cash', icon: '💵', color: 'green' },
    { id: 'upi', label: 'UPI', icon: '📱', color: 'purple' },
    { id: 'card', label: 'Card', icon: '💳', color: 'blue' },
    { id: 'split', label: 'Split', icon: '✂️', color: 'orange' }
  ];

  // Popular items during rush
  const popularItems = [
    { id: 1, name: 'Combo Meal', price: 199, sold: 45 },
    { id: 2, name: 'Coffee', price: 89, sold: 68 },
    { id: 3, name: 'Sandwich', price: 129, sold: 34 },
    { id: 4, name: 'Juice', price: 59, sold: 52 }
  ];

  // Simulate live updates
  useEffect(() => {
    if (isRushMode) {
      const interval = setInterval(() => {
        setPerformanceMetrics(prev => ({
          ...prev,
          transactionsPerMinute: (3.5 + Math.random() * 1.5).toFixed(1)
        }));
        setRushHourStatus(prev => ({
          ...prev,
          currentLoad: Math.min(100, Math.max(60, prev.currentLoad + (Math.random() - 0.5) * 10))
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isRushMode]);

  const getLoadColor = (load) => {
    if (load >= 90) return 'red';
    if (load >= 70) return 'yellow';
    return 'green';
  };

  const renderLiveTab = () => (
    <div className="space-y-4">
      {/* Rush Mode Toggle */}
      <div className={`rounded-xl p-4 ${isRushMode ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-gray-700 to-gray-800'} text-white`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isRushMode ? 'bg-white/20 animate-pulse' : 'bg-white/10'}`}>
              <Zap size={28} className={isRushMode ? 'text-yellow-300' : ''} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Rush Hour Mode</h2>
              <p className="text-sm text-white/80">
                {isRushMode ? 'Active - Maximum Performance' : 'Inactive'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsRushMode(!isRushMode)}
            className={`px-6 py-3 rounded-xl font-bold text-lg ${
              isRushMode
                ? 'bg-white text-red-600'
                : 'bg-green-500 text-white'
            }`}
          >
            {isRushMode ? 'EXIT RUSH MODE' : 'ACTIVATE'}
          </button>
        </div>

        {isRushMode && (
          <div className="grid grid-cols-4 gap-3 mt-4">
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <p className="text-2xl font-bold">{performanceMetrics.transactionsPerMinute}</p>
              <p className="text-xs text-white/70">Bills/min</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <p className="text-2xl font-bold">{performanceMetrics.avgBillTime}s</p>
              <p className="text-xs text-white/70">Avg Time</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <p className="text-2xl font-bold">{rushHourStatus.queueLength}</p>
              <p className="text-xs text-white/70">In Queue</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <p className="text-2xl font-bold">{performanceMetrics.successRate}%</p>
              <p className="text-xs text-white/70">Success</p>
            </div>
          </div>
        )}
      </div>

      {/* Load Indicator */}
      <div className="bg-white rounded-xl border p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold flex items-center gap-2">
            <Gauge size={20} className="text-blue-600" />
            System Load
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            getLoadColor(rushHourStatus.currentLoad) === 'red' ? 'bg-red-100 text-red-700' :
            getLoadColor(rushHourStatus.currentLoad) === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
            'bg-green-100 text-green-700'
          }`}>
            {rushHourStatus.currentLoad}%
          </span>
        </div>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              getLoadColor(rushHourStatus.currentLoad) === 'red' ? 'bg-red-500' :
              getLoadColor(rushHourStatus.currentLoad) === 'yellow' ? 'bg-yellow-500' :
              'bg-green-500'
            }`}
            style={{ width: `${rushHourStatus.currentLoad}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Normal</span>
          <span>Peak Expected: {rushHourStatus.peakExpected}</span>
          <span>End: {rushHourStatus.estimatedEndTime}</span>
        </div>
      </div>

      {/* Quick Pay Buttons */}
      {isRushMode && (
        <div className="bg-white rounded-xl border p-4">
          <h3 className="font-bold mb-3">Quick Payment</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map(action => (
              <button
                key={action.id}
                className={`p-4 rounded-xl text-center border-2 transition-all hover:scale-105 ${
                  action.color === 'green' ? 'border-green-500 bg-green-50 hover:bg-green-100' :
                  action.color === 'purple' ? 'border-purple-500 bg-purple-50 hover:bg-purple-100' :
                  action.color === 'blue' ? 'border-blue-500 bg-blue-50 hover:bg-blue-100' :
                  'border-orange-500 bg-orange-50 hover:bg-orange-100'
                }`}
              >
                <span className="text-3xl">{action.icon}</span>
                <p className="font-bold mt-1">{action.label}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Popular Items - Pre-loaded for speed */}
      {isRushMode && (
        <div className="bg-white rounded-xl border p-4">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Flame className="text-orange-500" size={20} />
            Hot Sellers (1-Tap Add)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {popularItems.map(item => (
              <button
                key={item.id}
                className="p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-between hover:bg-orange-100 transition-colors"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                <span className="text-2xl">➕</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Queue Status */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
          <h3 className="font-bold">Active Queue</h3>
          <span className="text-sm text-gray-500">{queueStatus.length} pending</span>
        </div>
        <div className="divide-y max-h-60 overflow-y-auto">
          {queueStatus.map((item, idx) => (
            <div key={item.id} className={`p-3 flex items-center justify-between ${item.status === 'processing' ? 'bg-blue-50' : ''}`}>
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  item.status === 'processing' ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-200'
                }`}>
                  {idx + 1}
                </span>
                <div>
                  <p className="font-medium">{item.items} items • ₹{item.amount}</p>
                  <p className="text-xs text-gray-500">Waiting {item.elapsed}s</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                item.status === 'processing' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Performance */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">Staff Performance</h3>
        </div>
        <div className="divide-y">
          {staffPerformance.map(staff => (
            <div key={staff.id} className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  staff.status === 'active' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  <Users size={18} className={staff.status === 'active' ? 'text-green-600' : 'text-yellow-600'} />
                </div>
                <div>
                  <p className="font-medium">{staff.name}</p>
                  <p className="text-xs text-gray-500">
                    {staff.transactions} bills • Avg {staff.avgTime}s
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">{staff.accuracy}%</p>
                <p className="text-xs text-gray-500">Accuracy</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-4">
      {/* Auto-Detection */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-4">Rush Hour Detection</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-Detect Rush Hour</p>
              <p className="text-sm text-gray-500">Automatically switch based on load</p>
            </div>
            <button
              onClick={() => setRushSettings({...rushSettings, autoDetect: !rushSettings.autoDetect})}
              className={`w-12 h-6 rounded-full transition-colors ${rushSettings.autoDetect ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${rushSettings.autoDetect ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Trigger Threshold ({rushSettings.triggerThreshold}%)</label>
            <input
              type="range"
              min="50"
              max="90"
              value={rushSettings.triggerThreshold}
              onChange={(e) => setRushSettings({...rushSettings, triggerThreshold: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>50% (Sensitive)</span>
              <span>90% (Conservative)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Optimizations */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-4">Performance Optimizations</h3>

        <div className="space-y-4">
          {[
            { key: 'simplifiedUI', label: 'Simplified UI', desc: 'Hide non-essential elements' },
            { key: 'disableAnimations', label: 'Disable Animations', desc: 'Faster screen transitions' },
            { key: 'quickPayEnabled', label: 'Quick Pay Buttons', desc: 'One-tap payment options' },
            { key: 'autoSuggestMode', label: 'Auto-Suggest Items', desc: 'Show popular items first' },
            { key: 'preloadProducts', label: 'Preload Products', desc: 'Cache frequently used items' },
            { key: 'cacheEnabled', label: 'Aggressive Caching', desc: 'Faster data retrieval' }
          ].map(setting => (
            <div key={setting.key} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{setting.label}</p>
                <p className="text-sm text-gray-500">{setting.desc}</p>
              </div>
              <button
                onClick={() => setRushSettings({...rushSettings, [setting.key]: !rushSettings[setting.key]})}
                className={`w-12 h-6 rounded-full transition-colors ${rushSettings[setting.key] ? 'bg-green-600' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${rushSettings[setting.key] ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-4">Alerts & Notifications</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {rushSettings.soundAlerts ? <Volume2 className="text-blue-600" /> : <VolumeX className="text-gray-400" />}
              <div>
                <p className="font-medium">Sound Alerts</p>
                <p className="text-sm text-gray-500">Audio cues during rush</p>
              </div>
            </div>
            <button
              onClick={() => setRushSettings({...rushSettings, soundAlerts: !rushSettings.soundAlerts})}
              className={`w-12 h-6 rounded-full transition-colors ${rushSettings.soundAlerts ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${rushSettings.soundAlerts ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Skip Confirmations</p>
              <p className="text-sm text-gray-500">Faster checkout (less verification)</p>
            </div>
            <button
              onClick={() => setRushSettings({...rushSettings, skipConfirmations: !rushSettings.skipConfirmations})}
              className={`w-12 h-6 rounded-full transition-colors ${rushSettings.skipConfirmations ? 'bg-yellow-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${rushSettings.skipConfirmations ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-4">
      {/* Rush Hour Analytics */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
        <h3 className="font-bold mb-3">Rush Hour Insights</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">12:30</p>
            <p className="text-xs text-white/70">Avg Peak Start</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">92 min</p>
            <p className="text-xs text-white/70">Avg Duration</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">145</p>
            <p className="text-xs text-white/70">Avg Bills</p>
          </div>
        </div>
      </div>

      {/* Daily History */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">Rush Hour History</h3>
        </div>
        <div className="divide-y">
          {rushHistory.map((day, idx) => (
            <div key={idx} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">{day.date}</span>
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500" size={16} fill="currentColor" />
                  <span className="font-medium">{day.rating}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Peak Time</p>
                  <p className="font-medium">{day.peakTime}</p>
                </div>
                <div>
                  <p className="text-gray-500">Transactions</p>
                  <p className="font-medium">{day.transactions}</p>
                </div>
                <div>
                  <p className="text-gray-500">Avg Time</p>
                  <p className="font-medium">{day.avgTime}s</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-bold text-yellow-800 mb-2">AI Recommendations</h3>
        <ul className="space-y-2 text-sm text-yellow-700">
          <li className="flex items-start gap-2">
            <ThumbsUp size={16} className="mt-0.5" />
            <span>Add 1 more staff between 12:30-13:30 for optimal throughput</span>
          </li>
          <li className="flex items-start gap-2">
            <ThumbsUp size={16} className="mt-0.5" />
            <span>Pre-prepare "Combo Meal" ingredients - accounts for 30% of rush orders</span>
          </li>
          <li className="flex items-start gap-2">
            <ThumbsUp size={16} className="mt-0.5" />
            <span>Enable UPI sound notification to speed up payment confirmation</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { id: 'live', label: 'Live', icon: <Activity size={16} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
    { id: 'history', label: 'History', icon: <BarChart3 size={16} /> }
  ];

  return (
    <div className={`min-h-screen ${isRushMode ? 'bg-orange-50' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${isRushMode ? 'bg-gradient-to-r from-red-600 to-orange-600' : 'bg-white border-b'} px-4 py-3`}>
        <div className="flex items-center gap-3">
          <button className={`p-2 rounded-lg ${isRushMode ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100'}`}>
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className={`font-bold text-lg ${isRushMode ? 'text-white' : ''}`}>Rush Hour Mode</h1>
            <p className={`text-xs ${isRushMode ? 'text-white/80' : 'text-gray-500'}`}>
              {isRushMode ? 'Maximum Performance Active' : 'Peak time optimization'}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-orange-600 border-orange-600 bg-orange-50/50'
                  : 'text-gray-600 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'live' && renderLiveTab()}
        {activeTab === 'settings' && renderSettingsTab()}
        {activeTab === 'history' && renderHistoryTab()}
      </div>
    </div>
  );
};

export default MerchantRushHourMode;
