import React, { useState } from 'react';
import {
  ArrowLeft, Shield, AlertTriangle, Zap, Lock, Unlock, TrendingDown,
  TrendingUp, Globe, MapPin, Store, Users, Clock, Activity, Power,
  AlertOctagon, RefreshCw, Ban, CheckCircle, XCircle, Settings,
  BarChart3, Flame, Snowflake, Target, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminCoinEmergencyControls = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showConfirmModal, setShowConfirmModal] = useState(null);

  // System Status
  const [systemStatus, setSystemStatus] = useState({
    globalFreeze: false,
    earningThrottle: 0, // 0 = normal, 100 = fully throttled
    burnOverride: false,
    inflationGuard: true,
    abuseDetection: true
  });

  // City-level controls
  const [cityControls, setCityControls] = useState([
    { id: 'mumbai', name: 'Mumbai', freeze: false, throttle: 0, flag: 'normal' },
    { id: 'delhi', name: 'Delhi NCR', freeze: false, throttle: 0, flag: 'normal' },
    { id: 'bangalore', name: 'Bangalore', freeze: true, throttle: 100, flag: 'critical' },
    { id: 'hyderabad', name: 'Hyderabad', freeze: false, throttle: 30, flag: 'warning' },
    { id: 'chennai', name: 'Chennai', freeze: false, throttle: 0, flag: 'normal' },
    { id: 'pune', name: 'Pune', freeze: false, throttle: 0, flag: 'normal' },
  ]);

  // Category controls
  const [categoryControls, setCategoryControls] = useState([
    { id: 'food', name: 'Food & Dining', freeze: false, maxEarn: 500, flag: 'normal' },
    { id: 'fashion', name: 'Fashion', freeze: false, maxEarn: 1000, flag: 'normal' },
    { id: 'grocery', name: 'Grocery', freeze: true, maxEarn: 0, flag: 'critical' },
    { id: 'electronics', name: 'Electronics', freeze: false, maxEarn: 2000, flag: 'warning' },
    { id: 'beauty', name: 'Beauty', freeze: false, maxEarn: 500, flag: 'normal' },
  ]);

  // Merchant exposure limits
  const [merchantLimits, setMerchantLimits] = useState({
    dailyCap: 50000,
    weeklyCap: 200000,
    monthlyCap: 500000,
    perTransactionMax: 5000,
    autoSuspendThreshold: 80 // % of cap
  });

  // Real-time alerts
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'critical', message: 'Unusual coin earning spike in Bangalore - 340% above normal', time: '2 min ago', action: 'auto-frozen' },
    { id: 2, type: 'warning', message: 'Grocery category showing abuse patterns - 45 flagged transactions', time: '15 min ago', action: 'throttled 50%' },
    { id: 3, type: 'info', message: 'Inflation guard triggered - earning rates reduced by 10%', time: '1 hour ago', action: 'auto-adjusted' },
    { id: 4, type: 'critical', message: 'Merchant "Quick Mart" exceeded daily cap by 120%', time: '3 hours ago', action: 'suspended' },
  ]);

  // Economic health metrics
  const economicHealth = {
    coinSupply: 45000000,
    dailyIssuance: 125000,
    dailyBurn: 98000,
    netInflation: 2.1,
    gmvRatio: 0.023, // Coins issued per GMV
    healthScore: 78
  };

  const toggleGlobalFreeze = () => {
    setShowConfirmModal({
      action: 'globalFreeze',
      title: systemStatus.globalFreeze ? 'Unfreeze All Coin Operations' : 'GLOBAL COIN FREEZE',
      message: systemStatus.globalFreeze
        ? 'This will resume all coin earning and spending across the platform.'
        : 'WARNING: This will immediately halt ALL coin earning and spending across the entire platform. Users cannot earn or spend coins until lifted.',
      severity: 'critical'
    });
  };

  const toggleBurnOverride = () => {
    setShowConfirmModal({
      action: 'burnOverride',
      title: 'Activate Emergency Burn',
      message: 'This will trigger an emergency coin burn, removing excess coins from circulation. This action is irreversible.',
      severity: 'critical'
    });
  };

  const confirmAction = () => {
    if (showConfirmModal.action === 'globalFreeze') {
      setSystemStatus(prev => ({ ...prev, globalFreeze: !prev.globalFreeze }));
    } else if (showConfirmModal.action === 'burnOverride') {
      setSystemStatus(prev => ({ ...prev, burnOverride: true }));
    }
    setShowConfirmModal(null);
  };

  const getFlagColor = (flag) => {
    switch (flag) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'normal': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'bg-red-900/50 border-red-500';
      case 'warning': return 'bg-yellow-900/50 border-yellow-500';
      case 'info': return 'bg-blue-900/50 border-blue-500';
      default: return 'bg-gray-800 border-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className={`${systemStatus.globalFreeze ? 'bg-gradient-to-r from-red-700 to-red-900' : 'bg-gradient-to-r from-orange-600 to-red-600'} text-white p-4`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Shield size={24} className="mr-2" />
                Coin Emergency Controls
              </h1>
              <p className="text-orange-200 text-sm">Circuit breakers & kill-switches</p>
            </div>
          </div>
          {systemStatus.globalFreeze && (
            <div className="bg-red-500 px-4 py-2 rounded-lg animate-pulse flex items-center">
              <AlertOctagon size={20} className="mr-2" />
              FROZEN
            </div>
          )}
        </div>

        {/* Quick Status */}
        <div className="grid grid-cols-4 gap-2">
          <div className={`rounded-lg p-3 text-center ${systemStatus.globalFreeze ? 'bg-red-500/30' : 'bg-white/10'}`}>
            <Snowflake size={24} className="mx-auto mb-1" />
            <p className="text-xs">{systemStatus.globalFreeze ? 'FROZEN' : 'Active'}</p>
          </div>
          <div className={`rounded-lg p-3 text-center ${systemStatus.earningThrottle > 0 ? 'bg-yellow-500/30' : 'bg-white/10'}`}>
            <TrendingDown size={24} className="mx-auto mb-1" />
            <p className="text-xs">Throttle: {systemStatus.earningThrottle}%</p>
          </div>
          <div className={`rounded-lg p-3 text-center ${systemStatus.burnOverride ? 'bg-orange-500/30' : 'bg-white/10'}`}>
            <Flame size={24} className="mx-auto mb-1" />
            <p className="text-xs">{systemStatus.burnOverride ? 'Burning' : 'Normal'}</p>
          </div>
          <div className={`rounded-lg p-3 text-center ${systemStatus.inflationGuard ? 'bg-green-500/30' : 'bg-white/10'}`}>
            <Shield size={24} className="mx-auto mb-1" />
            <p className="text-xs">Guard: {systemStatus.inflationGuard ? 'ON' : 'OFF'}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-700">
        {[
          { id: 'overview', label: 'Overview', icon: Activity },
          { id: 'city', label: 'By City', icon: MapPin },
          { id: 'category', label: 'By Category', icon: Target },
          { id: 'merchant', label: 'Merchant Limits', icon: Store },
          { id: 'alerts', label: 'Alerts', icon: Bell },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-3 text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-orange-400 border-b-2 border-orange-400'
                : 'text-gray-400'
            }`}
          >
            <tab.icon size={16} className="mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Global Kill Switch */}
            <div className={`rounded-xl p-4 border-2 ${systemStatus.globalFreeze ? 'bg-red-900/30 border-red-500' : 'bg-gray-800 border-gray-700'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${systemStatus.globalFreeze ? 'bg-red-500' : 'bg-gray-700'}`}>
                    {systemStatus.globalFreeze ? <Lock size={24} /> : <Unlock size={24} />}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-bold text-lg">Global Coin Freeze</h3>
                    <p className="text-gray-400 text-sm">Master kill-switch for all coin operations</p>
                  </div>
                </div>
                <button
                  onClick={toggleGlobalFreeze}
                  className={`px-6 py-3 rounded-xl font-bold ${
                    systemStatus.globalFreeze
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 text-white'
                  }`}
                >
                  {systemStatus.globalFreeze ? 'UNFREEZE' : 'FREEZE ALL'}
                </button>
              </div>
              {systemStatus.globalFreeze && (
                <div className="bg-red-500/20 rounded-lg p-3 text-red-300 text-sm">
                  All coin earning and spending is currently FROZEN. Users cannot earn or redeem coins.
                </div>
              )}
            </div>

            {/* Earning Throttle */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-bold">Earning Rate Throttle</h3>
                  <p className="text-gray-400 text-sm">Reduce earning rates globally</p>
                </div>
                <span className="text-2xl font-bold text-yellow-400">{systemStatus.earningThrottle}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={systemStatus.earningThrottle}
                onChange={(e) => setSystemStatus(prev => ({ ...prev, earningThrottle: parseInt(e.target.value) }))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Normal (100% earning)</span>
                <span>Full Throttle (0% earning)</span>
              </div>
            </div>

            {/* Emergency Burn */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Flame size={24} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-bold">Emergency Coin Burn</h3>
                    <p className="text-gray-400 text-sm">Remove excess coins from circulation</p>
                  </div>
                </div>
                <button
                  onClick={toggleBurnOverride}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold"
                  disabled={systemStatus.burnOverride}
                >
                  {systemStatus.burnOverride ? 'ACTIVE' : 'ACTIVATE'}
                </button>
              </div>
            </div>

            {/* Economic Health */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <BarChart3 size={20} className="mr-2" />
                Economic Health Score
              </h3>
              <div className="flex items-center mb-4">
                <div className={`text-4xl font-bold ${
                  economicHealth.healthScore >= 70 ? 'text-green-400' :
                  economicHealth.healthScore >= 50 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {economicHealth.healthScore}/100
                </div>
                <div className="ml-4 flex-1">
                  <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        economicHealth.healthScore >= 70 ? 'bg-green-500' :
                        economicHealth.healthScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${economicHealth.healthScore}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400">Total Supply</p>
                  <p className="text-white font-bold">{(economicHealth.coinSupply / 1000000).toFixed(1)}M</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400">Daily Issue</p>
                  <p className="text-green-400 font-bold">+{(economicHealth.dailyIssuance / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400">Daily Burn</p>
                  <p className="text-red-400 font-bold">-{(economicHealth.dailyBurn / 1000).toFixed(0)}K</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                <span className="text-gray-400">Net Inflation Rate</span>
                <span className={`font-bold ${economicHealth.netInflation > 3 ? 'text-red-400' : 'text-green-400'}`}>
                  {economicHealth.netInflation > 0 ? '+' : ''}{economicHealth.netInflation}%
                </span>
              </div>
            </div>

            {/* Auto Guards */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Automatic Safeguards</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Shield size={20} className="text-green-400 mr-3" />
                    <span className="text-white">Inflation Guard</span>
                  </div>
                  <button
                    onClick={() => setSystemStatus(prev => ({ ...prev, inflationGuard: !prev.inflationGuard }))}
                    className={`w-12 h-6 rounded-full ${systemStatus.inflationGuard ? 'bg-green-500' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${systemStatus.inflationGuard ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <AlertTriangle size={20} className="text-yellow-400 mr-3" />
                    <span className="text-white">Abuse Detection</span>
                  </div>
                  <button
                    onClick={() => setSystemStatus(prev => ({ ...prev, abuseDetection: !prev.abuseDetection }))}
                    className={`w-12 h-6 rounded-full ${systemStatus.abuseDetection ? 'bg-green-500' : 'bg-gray-600'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${systemStatus.abuseDetection ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* City Controls Tab */}
        {activeTab === 'city' && (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <h3 className="text-white font-bold mb-2">City-Level Controls</h3>
              <p className="text-gray-400 text-sm">Freeze or throttle coin operations per city</p>
            </div>
            {cityControls.map(city => (
              <div key={city.id} className={`bg-gray-800 rounded-xl p-4 border-l-4 ${getFlagColor(city.flag)}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <MapPin size={20} className="text-gray-400 mr-2" />
                    <span className="text-white font-medium">{city.name}</span>
                    {city.freeze && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">FROZEN</span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setCityControls(prev => prev.map(c =>
                        c.id === city.id ? { ...c, freeze: !c.freeze, flag: !c.freeze ? 'critical' : 'normal' } : c
                      ));
                    }}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      city.freeze ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}
                  >
                    {city.freeze ? 'Unfreeze' : 'Freeze'}
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 text-sm mr-3">Throttle:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={city.throttle}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setCityControls(prev => prev.map(c =>
                        c.id === city.id ? { ...c, throttle: value, flag: value > 50 ? 'warning' : 'normal' } : c
                      ));
                    }}
                    className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-yellow-400 font-bold ml-3 w-12 text-right">{city.throttle}%</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category Controls Tab */}
        {activeTab === 'category' && (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <h3 className="text-white font-bold mb-2">Category-Level Controls</h3>
              <p className="text-gray-400 text-sm">Set earning caps and freeze per category</p>
            </div>
            {categoryControls.map(cat => (
              <div key={cat.id} className={`bg-gray-800 rounded-xl p-4 border-l-4 ${getFlagColor(cat.flag)}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Target size={20} className="text-gray-400 mr-2" />
                    <span className="text-white font-medium">{cat.name}</span>
                    {cat.freeze && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">FROZEN</span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setCategoryControls(prev => prev.map(c =>
                        c.id === cat.id ? { ...c, freeze: !c.freeze, flag: !c.freeze ? 'critical' : 'normal' } : c
                      ));
                    }}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      cat.freeze ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}
                  >
                    {cat.freeze ? 'Unfreeze' : 'Freeze'}
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <span className="text-gray-400 text-sm">Max Coins Per Transaction</span>
                  <input
                    type="number"
                    value={cat.maxEarn}
                    onChange={(e) => {
                      setCategoryControls(prev => prev.map(c =>
                        c.id === cat.id ? { ...c, maxEarn: parseInt(e.target.value) || 0 } : c
                      ));
                    }}
                    className="bg-gray-800 text-white px-3 py-1 rounded w-24 text-right"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Merchant Limits Tab */}
        {activeTab === 'merchant' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Store size={20} className="mr-2" />
                Merchant Coin Exposure Limits
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Daily Cap (per merchant)</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={merchantLimits.dailyCap}
                      onChange={(e) => setMerchantLimits(prev => ({ ...prev, dailyCap: parseInt(e.target.value) }))}
                      className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                    />
                    <span className="text-gray-400 ml-3">coins</span>
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Weekly Cap</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={merchantLimits.weeklyCap}
                      onChange={(e) => setMerchantLimits(prev => ({ ...prev, weeklyCap: parseInt(e.target.value) }))}
                      className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                    />
                    <span className="text-gray-400 ml-3">coins</span>
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Monthly Cap</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={merchantLimits.monthlyCap}
                      onChange={(e) => setMerchantLimits(prev => ({ ...prev, monthlyCap: parseInt(e.target.value) }))}
                      className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                    />
                    <span className="text-gray-400 ml-3">coins</span>
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Per Transaction Max</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={merchantLimits.perTransactionMax}
                      onChange={(e) => setMerchantLimits(prev => ({ ...prev, perTransactionMax: parseInt(e.target.value) }))}
                      className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                    />
                    <span className="text-gray-400 ml-3">coins</span>
                  </div>
                </div>
                <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
                  <label className="text-yellow-400 text-sm block mb-2">Auto-Suspend Threshold</label>
                  <p className="text-gray-400 text-xs mb-3">Automatically suspend merchant when they reach this % of their cap</p>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="50"
                      max="100"
                      value={merchantLimits.autoSuspendThreshold}
                      onChange={(e) => setMerchantLimits(prev => ({ ...prev, autoSuspendThreshold: parseInt(e.target.value) }))}
                      className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-yellow-400 font-bold ml-3">{merchantLimits.autoSuspendThreshold}%</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold">
              Apply Limits to All Merchants
            </button>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold">Recent Alerts</h3>
              <button className="text-orange-400 text-sm flex items-center">
                <RefreshCw size={16} className="mr-1" />
                Refresh
              </button>
            </div>
            {alerts.map(alert => (
              <div key={alert.id} className={`rounded-xl p-4 border ${getAlertColor(alert.type)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    {alert.type === 'critical' && <AlertOctagon size={20} className="text-red-400 mr-2" />}
                    {alert.type === 'warning' && <AlertTriangle size={20} className="text-yellow-400 mr-2" />}
                    {alert.type === 'info' && <Bell size={20} className="text-blue-400 mr-2" />}
                    <span className="text-gray-400 text-xs">{alert.time}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    alert.action.includes('frozen') ? 'bg-red-500 text-white' :
                    alert.action.includes('throttled') ? 'bg-yellow-500 text-black' :
                    alert.action.includes('suspended') ? 'bg-red-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {alert.action}
                  </span>
                </div>
                <p className="text-white text-sm">{alert.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border-2 border-red-500">
            <div className="flex items-center mb-4">
              <AlertOctagon size={32} className="text-red-500 mr-3" />
              <h3 className="text-white text-xl font-bold">{showConfirmModal.title}</h3>
            </div>
            <p className="text-gray-300 mb-6">{showConfirmModal.message}</p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmModal(null)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCoinEmergencyControls;
