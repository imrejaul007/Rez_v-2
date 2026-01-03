import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Battery, BatteryCharging, BatteryLow, BatteryWarning,
  Power, Zap, ZapOff, Save, CloudOff, Cloud, RefreshCw, CheckCircle,
  AlertTriangle, Shield, Clock, Database, HardDrive, Smartphone,
  Settings, ChevronRight, FileText, RotateCcw, Activity, Wifi, WifiOff
} from 'lucide-react';

const MerchantPowerSurvival = () => {
  const [activeTab, setActiveTab] = useState('status');

  // ==========================================
  // POWER FAILURE SURVIVAL SYSTEM
  // The merchant's biggest fear: losing a bill mid-transaction
  // ==========================================

  // Power & Battery Status
  const [powerStatus, setPowerStatus] = useState({
    mainPower: true,
    upsConnected: true,
    upsBatteryLevel: 85,
    upsTimeRemaining: 45, // minutes
    deviceBattery: 78,
    chargingStatus: 'charging',
    lastPowerOutage: '2024-01-10 14:30',
    totalOutagesToday: 0
  });

  // Auto-Save Status
  const [autoSaveStatus, setAutoSaveStatus] = useState({
    enabled: true,
    lastSave: new Date().toISOString(),
    saveInterval: 5, // seconds
    pendingChanges: 0,
    totalAutoSaves: 156,
    dataIntegrity: 'verified'
  });

  // Recovery Data
  const [recoveryData, setRecoveryData] = useState({
    hasUnsavedBill: false,
    unsavedBillDetails: null,
    lastSession: {
      endedAt: '2024-01-15 21:30',
      endType: 'normal', // 'normal', 'power_loss', 'crash'
      recovered: false
    },
    recoveryPoints: [
      { id: 1, timestamp: '2024-01-15 18:45', type: 'auto', items: 5, total: 850 },
      { id: 2, timestamp: '2024-01-15 16:30', type: 'auto', items: 3, total: 450 },
      { id: 3, timestamp: '2024-01-15 14:15', type: 'manual', items: 8, total: 1200 }
    ]
  });

  // Settings
  const [settings, setSettings] = useState({
    autoSaveInterval: 5,
    lowBatteryWarning: 20,
    criticalBatteryAction: 'save_and_warn', // 'save_and_warn', 'save_and_lock', 'warn_only'
    offlineMode: 'auto', // 'auto', 'always', 'never'
    recoveryNotifications: true,
    soundAlerts: true,
    vibrationAlerts: true
  });

  // Simulate power monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoSaveStatus(prev => ({
        ...prev,
        lastSave: new Date().toISOString(),
        totalAutoSaves: prev.totalAutoSaves + 1
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getBatteryIcon = (level) => {
    if (level > 60) return <Battery className="text-green-600" size={24} />;
    if (level > 30) return <BatteryWarning className="text-yellow-600" size={24} />;
    return <BatteryLow className="text-red-600" size={24} />;
  };

  const getBatteryColor = (level) => {
    if (level > 60) return 'bg-green-500';
    if (level > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const renderStatusTab = () => (
    <div className="space-y-4">
      {/* Power Status Card */}
      <div className={`rounded-lg p-4 ${powerStatus.mainPower ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {powerStatus.mainPower ? (
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Zap className="text-green-600" size={24} />
              </div>
            ) : (
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                <ZapOff className="text-red-600" size={24} />
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg">
                {powerStatus.mainPower ? 'Main Power Connected' : 'POWER OUTAGE'}
              </h3>
              <p className={`text-sm ${powerStatus.mainPower ? 'text-green-600' : 'text-red-600'}`}>
                {powerStatus.mainPower
                  ? 'All systems normal'
                  : 'Running on backup power'}
              </p>
            </div>
          </div>
          <div className={`w-4 h-4 rounded-full ${powerStatus.mainPower ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
        </div>

        {!powerStatus.mainPower && (
          <div className="bg-white rounded-lg p-3 border border-red-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-red-800">UPS Time Remaining</span>
              <span className="text-2xl font-bold text-red-600">{powerStatus.upsTimeRemaining} min</span>
            </div>
            <div className="w-full h-2 bg-red-100 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-300"
                style={{ width: `${(powerStatus.upsTimeRemaining / 60) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Battery Levels */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-4">Battery Status</h3>

        {/* UPS Battery */}
        {powerStatus.upsConnected && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BatteryCharging className="text-blue-600" size={20} />
                <span className="font-medium">UPS Battery</span>
              </div>
              <span className="text-lg font-bold">{powerStatus.upsBatteryLevel}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${getBatteryColor(powerStatus.upsBatteryLevel)} transition-all`}
                style={{ width: `${powerStatus.upsBatteryLevel}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              ~{powerStatus.upsTimeRemaining} minutes backup at current load
            </p>
          </div>
        )}

        {/* Device Battery */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Smartphone className="text-gray-600" size={20} />
              <span className="font-medium">Device Battery</span>
              {powerStatus.chargingStatus === 'charging' && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Charging</span>
              )}
            </div>
            <span className="text-lg font-bold">{powerStatus.deviceBattery}%</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${getBatteryColor(powerStatus.deviceBattery)} transition-all`}
              style={{ width: `${powerStatus.deviceBattery}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Auto-Save Status */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Auto-Save Protection</h3>
          <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            autoSaveStatus.enabled
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-600'
          }`}>
            <Shield size={12} />
            {autoSaveStatus.enabled ? 'Active' : 'Disabled'}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Clock className="mx-auto mb-1 text-blue-600" size={20} />
            <p className="text-lg font-bold">{autoSaveStatus.saveInterval}s</p>
            <p className="text-xs text-gray-500">Save Interval</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Save className="mx-auto mb-1 text-green-600" size={20} />
            <p className="text-lg font-bold">{autoSaveStatus.totalAutoSaves}</p>
            <p className="text-xs text-gray-500">Total Saves</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Database className="mx-auto mb-1 text-purple-600" size={20} />
            <p className="text-lg font-bold">{autoSaveStatus.pendingChanges}</p>
            <p className="text-xs text-gray-500">Pending</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600" size={18} />
            <span className="text-sm text-green-700">Last saved</span>
          </div>
          <span className="text-sm font-medium text-green-700">
            {formatTime(autoSaveStatus.lastSave)}
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-blue-600 text-white rounded-lg p-4 flex flex-col items-center gap-2">
          <Save size={24} />
          <span className="font-medium">Force Save Now</span>
          <span className="text-xs text-blue-200">Save all current data</span>
        </button>
        <button className="bg-gray-100 text-gray-700 rounded-lg p-4 flex flex-col items-center gap-2">
          <RotateCcw size={24} />
          <span className="font-medium">Recovery Mode</span>
          <span className="text-xs text-gray-500">Restore from backup</span>
        </button>
      </div>

      {/* Network Status */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-3">Connectivity Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wifi className="text-green-600" size={18} />
              <span>Internet Connection</span>
            </div>
            <span className="text-sm text-green-600 font-medium">Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="text-green-600" size={18} />
              <span>Cloud Sync</span>
            </div>
            <span className="text-sm text-green-600 font-medium">Synced</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="text-green-600" size={18} />
              <span>Local Storage</span>
            </div>
            <span className="text-sm text-green-600 font-medium">2.4 GB free</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecoveryTab = () => (
    <div className="space-y-4">
      {/* Recovery Alert */}
      {recoveryData.hasUnsavedBill && (
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 mt-0.5" size={24} />
            <div className="flex-1">
              <h3 className="font-bold text-yellow-800">Unsaved Bill Detected!</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Found an incomplete bill from last session. Would you like to recover it?
              </p>
              <div className="flex gap-2 mt-3">
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-medium">
                  Recover Bill
                </button>
                <button className="px-4 py-2 bg-white text-yellow-700 border border-yellow-300 rounded-lg font-medium">
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Last Session Info */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-3">Last Session</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Ended at</span>
            <span className="font-medium">{recoveryData.lastSession.endedAt}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">End Type</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              recoveryData.lastSession.endType === 'normal'
                ? 'bg-green-100 text-green-700'
                : recoveryData.lastSession.endType === 'power_loss'
                ? 'bg-red-100 text-red-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {recoveryData.lastSession.endType === 'normal' ? 'Normal Exit' :
               recoveryData.lastSession.endType === 'power_loss' ? 'Power Loss' : 'App Crash'}
            </span>
          </div>
        </div>
      </div>

      {/* Recovery Points */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium">Recovery Points</h3>
          <p className="text-sm text-gray-500">Auto-saved bill states you can restore</p>
        </div>
        <div className="divide-y">
          {recoveryData.recoveryPoints.map(point => (
            <div key={point.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  point.type === 'auto' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {point.type === 'auto'
                    ? <RefreshCw className="text-blue-600" size={18} />
                    : <Save className="text-green-600" size={18} />
                  }
                </div>
                <div>
                  <p className="font-medium">{point.items} items • ₹{point.total}</p>
                  <p className="text-sm text-gray-500">{point.timestamp}</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                Restore
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Full Backup Restore */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium mb-2">Full Day Backup</h3>
        <p className="text-sm text-gray-600 mb-3">
          Restore all transactions from a specific backup point
        </p>
        <button className="w-full py-3 bg-white border border-gray-300 rounded-lg font-medium flex items-center justify-center gap-2">
          <Database size={18} />
          Browse All Backups
        </button>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-4">
      {/* Auto-Save Settings */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-4">Auto-Save Settings</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Save Interval</label>
            <div className="flex gap-2">
              {[3, 5, 10, 15].map(interval => (
                <button
                  key={interval}
                  onClick={() => setSettings({...settings, autoSaveInterval: interval})}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                    settings.autoSaveInterval === interval
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {interval}s
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              How often to save current bill state (smaller = safer)
            </p>
          </div>
        </div>
      </div>

      {/* Battery Alerts */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-4">Battery Warnings</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Low Battery Warning at</label>
            <div className="flex gap-2">
              {[10, 15, 20, 30].map(level => (
                <button
                  key={level}
                  onClick={() => setSettings({...settings, lowBatteryWarning: level})}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                    settings.lowBatteryWarning === level
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {level}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Critical Battery Action</label>
            <div className="space-y-2">
              {[
                { id: 'save_and_warn', label: 'Save data & show warning', icon: <AlertTriangle size={16} /> },
                { id: 'save_and_lock', label: 'Save data & lock POS', icon: <Shield size={16} /> },
                { id: 'warn_only', label: 'Show warning only', icon: <Activity size={16} /> }
              ].map(option => (
                <button
                  key={option.id}
                  onClick={() => setSettings({...settings, criticalBatteryAction: option.id})}
                  className={`w-full p-3 rounded-lg flex items-center gap-3 ${
                    settings.criticalBatteryAction === option.id
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  {option.icon}
                  <span className="font-medium">{option.label}</span>
                  {settings.criticalBatteryAction === option.id && (
                    <CheckCircle className="ml-auto text-blue-600" size={18} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Offline Mode */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-4">Offline Mode</h3>

        <div className="space-y-2">
          {[
            { id: 'auto', label: 'Automatic', desc: 'Switch to offline when connection lost' },
            { id: 'always', label: 'Always Offline', desc: 'Never sync, maximum privacy' },
            { id: 'never', label: 'Online Only', desc: 'Require internet for all operations' }
          ].map(option => (
            <button
              key={option.id}
              onClick={() => setSettings({...settings, offlineMode: option.id})}
              className={`w-full p-3 rounded-lg flex items-center justify-between ${
                settings.offlineMode === option.id
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div>
                <p className="font-medium text-left">{option.label}</p>
                <p className="text-xs text-gray-500 text-left">{option.desc}</p>
              </div>
              {settings.offlineMode === option.id && (
                <CheckCircle className="text-blue-600" size={18} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-medium mb-4">Alerts</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Recovery Notifications</p>
              <p className="text-xs text-gray-500">Alert when data is recovered</p>
            </div>
            <button
              onClick={() => setSettings({...settings, recoveryNotifications: !settings.recoveryNotifications})}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.recoveryNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                settings.recoveryNotifications ? 'translate-x-6' : 'translate-x-0.5'
              }`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Sound Alerts</p>
              <p className="text-xs text-gray-500">Play sound on power issues</p>
            </div>
            <button
              onClick={() => setSettings({...settings, soundAlerts: !settings.soundAlerts})}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.soundAlerts ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                settings.soundAlerts ? 'translate-x-6' : 'translate-x-0.5'
              }`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Vibration Alerts</p>
              <p className="text-xs text-gray-500">Vibrate on critical warnings</p>
            </div>
            <button
              onClick={() => setSettings({...settings, vibrationAlerts: !settings.vibrationAlerts})}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.vibrationAlerts ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                settings.vibrationAlerts ? 'translate-x-6' : 'translate-x-0.5'
              }`}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'status', label: 'Status', icon: <Activity size={16} /> },
    { id: 'recovery', label: 'Recovery', icon: <RotateCcw size={16} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="font-bold text-lg">Power & Recovery</h1>
          <p className="text-xs text-gray-500">Never lose a bill, ever</p>
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
                  ? 'text-blue-600 border-blue-600 bg-blue-50/50'
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
        {activeTab === 'status' && renderStatusTab()}
        {activeTab === 'recovery' && renderRecoveryTab()}
        {activeTab === 'settings' && renderSettingsTab()}
      </div>

      {/* Floating Power Indicator (always visible) */}
      <div className={`fixed bottom-4 right-4 px-3 py-2 rounded-full shadow-lg flex items-center gap-2 ${
        powerStatus.mainPower
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white animate-pulse'
      }`}>
        {powerStatus.mainPower ? <Zap size={16} /> : <ZapOff size={16} />}
        <span className="text-sm font-medium">
          {powerStatus.mainPower ? 'Power OK' : 'On Battery'}
        </span>
      </div>
    </div>
  );
};

export default MerchantPowerSurvival;
