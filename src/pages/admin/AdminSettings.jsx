import { useState } from 'react';
import {
  Settings, Sliders, Coins, DollarSign, Shield, Bell,
  Smartphone, Database, Zap, ToggleLeft, ToggleRight,
  Save, RefreshCw, AlertTriangle, CheckCircle, Globe,
  Lock, Eye, EyeOff, Wrench, Activity
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [showApiKey, setShowApiKey] = useState(false);

  const [generalSettings, setGeneralSettings] = useState({
    platformName: 'ReZ',
    platformTagline: 'Shop, Save, Earn',
    supportEmail: 'support@rez.com',
    supportPhone: '+91 98765 43210',
    timezone: 'Asia/Kolkata',
    currency: 'INR',
    language: 'en',
    maintenanceMode: false,
    registrationEnabled: true,
    loginEnabled: true
  });

  const [featureToggles, setFeatureToggles] = useState({
    gamification: true,
    referralProgram: true,
    socialImpact: true,
    events: true,
    reels: true,
    reviews: true,
    chatSupport: true,
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    darkMode: true,
    socialLogin: true,
    guestCheckout: false,
    loyaltyProgram: true,
    priveMemership: true
  });

  const [coinSettings, setCoinSettings] = useState({
    signupBonus: 100,
    referralBonus: 100,
    dailyCheckIn: 10,
    minRedemption: 500,
    coinToRupee: 1,
    expiryDays: 365,
    maxEarnPerDay: 1000,
    purchaseMultiplier: 1.5
  });

  const [cashbackSettings, setCashbackSettings] = useState({
    minCashback: 1,
    maxCashback: 50,
    defaultCashback: 10,
    instantCashback: true,
    cashbackExpiry: 90,
    minPurchaseForCashback: 100,
    maxCashbackPerTransaction: 500
  });

  const [appVersion, setAppVersion] = useState({
    currentVersion: '2.5.0',
    minRequiredVersion: '2.0.0',
    forceUpdateEnabled: false,
    maintenanceMessage: 'We are currently upgrading our systems. Please check back soon!',
    updateMessage: 'A new version is available. Update now for the best experience!',
    whatsNew: [
      'New gamification features',
      'Social impact events',
      'Improved performance',
      'Bug fixes'
    ]
  });

  const [apiSettings, setApiSettings] = useState({
    apiKey: 'sk_live_xxxxxxxxxxxxxxxxxx',
    webhookUrl: 'https://api.rez.com/webhooks',
    rateLimit: 1000,
    timeout: 30,
    retryAttempts: 3
  });

  const toggleFeature = (feature) => {
    setFeatureToggles(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  const stats = {
    totalSettings: Object.keys(generalSettings).length + Object.keys(featureToggles).length,
    activeFeatures: Object.values(featureToggles).filter(v => v).length,
    totalFeatures: Object.keys(featureToggles).length,
    maintenanceMode: generalSettings.maintenanceMode
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
              <p className="text-gray-600 mt-1">Configure platform settings and features</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <RefreshCw className="w-5 h-5" />
                Reset
              </button>
              <button
                onClick={handleSaveSettings}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Settings</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalSettings}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Settings className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Features</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.activeFeatures}/{stats.totalFeatures}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">App Version</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{appVersion.currentVersion}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Status</p>
                <p className={`text-xl font-bold mt-2 ${stats.maintenanceMode ? 'text-red-600' : 'text-green-600'}`}>
                  {stats.maintenanceMode ? 'Maintenance' : 'Active'}
                </p>
              </div>
              <div className={`${stats.maintenanceMode ? 'bg-red-100' : 'bg-green-100'} p-3 rounded-lg`}>
                {stats.maintenanceMode ? (
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-6 py-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === 'general'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                General
              </div>
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === 'features'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Features
              </div>
            </button>
            <button
              onClick={() => setActiveTab('coins')}
              className={`px-6 py-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === 'coins'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Coins className="w-5 h-5" />
                Coins
              </div>
            </button>
            <button
              onClick={() => setActiveTab('cashback')}
              className={`px-6 py-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === 'cashback'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5" />
                Cashback
              </div>
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`px-6 py-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === 'app'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" />
                App Version
              </div>
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`px-6 py-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === 'api'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Database className="w-5 h-5" />
                API
              </div>
            </button>
          </div>

          {/* General Settings Tab */}
          {activeTab === 'general' && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">General Settings</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Platform Name
                    </label>
                    <input
                      type="text"
                      value={generalSettings.platformName}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, platformName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Platform Tagline
                    </label>
                    <input
                      type="text"
                      value={generalSettings.platformTagline}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, platformTagline: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Support Email
                    </label>
                    <input
                      type="email"
                      value={generalSettings.supportEmail}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, supportEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Support Phone
                    </label>
                    <input
                      type="tel"
                      value={generalSettings.supportPhone}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, supportPhone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timezone
                    </label>
                    <select
                      value={generalSettings.timezone}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, timezone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="America/New_York">America/New_York (EST)</option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>
                    <select
                      value={generalSettings.currency}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, currency: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Critical Settings
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Maintenance Mode</p>
                        <p className="text-sm text-gray-600">Disable platform access for maintenance</p>
                      </div>
                      <button
                        onClick={() => setGeneralSettings({ ...generalSettings, maintenanceMode: !generalSettings.maintenanceMode })}
                        className="flex items-center gap-2"
                      >
                        {generalSettings.maintenanceMode ? (
                          <ToggleRight className="w-10 h-10 text-red-600" />
                        ) : (
                          <ToggleLeft className="w-10 h-10 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">User Registration</p>
                        <p className="text-sm text-gray-600">Allow new users to register</p>
                      </div>
                      <button
                        onClick={() => setGeneralSettings({ ...generalSettings, registrationEnabled: !generalSettings.registrationEnabled })}
                        className="flex items-center gap-2"
                      >
                        {generalSettings.registrationEnabled ? (
                          <ToggleRight className="w-10 h-10 text-green-600" />
                        ) : (
                          <ToggleLeft className="w-10 h-10 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Feature Toggles Tab */}
          {activeTab === 'features' && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Feature Toggles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(featureToggles).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-sm text-gray-600">
                        {value ? 'Enabled' : 'Disabled'}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleFeature(key)}
                      className="flex items-center gap-2"
                    >
                      {value ? (
                        <ToggleRight className="w-10 h-10 text-green-600" />
                      ) : (
                        <ToggleLeft className="w-10 h-10 text-gray-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coin Settings Tab */}
          {activeTab === 'coins' && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Coin Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Signup Bonus (coins)
                  </label>
                  <input
                    type="number"
                    value={coinSettings.signupBonus}
                    onChange={(e) => setCoinSettings({ ...coinSettings, signupBonus: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Bonus (coins)
                  </label>
                  <input
                    type="number"
                    value={coinSettings.referralBonus}
                    onChange={(e) => setCoinSettings({ ...coinSettings, referralBonus: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daily Check-In (coins)
                  </label>
                  <input
                    type="number"
                    value={coinSettings.dailyCheckIn}
                    onChange={(e) => setCoinSettings({ ...coinSettings, dailyCheckIn: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Redemption (coins)
                  </label>
                  <input
                    type="number"
                    value={coinSettings.minRedemption}
                    onChange={(e) => setCoinSettings({ ...coinSettings, minRedemption: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coin to Rupee Ratio
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={coinSettings.coinToRupee}
                    onChange={(e) => setCoinSettings({ ...coinSettings, coinToRupee: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry (days)
                  </label>
                  <input
                    type="number"
                    value={coinSettings.expiryDays}
                    onChange={(e) => setCoinSettings({ ...coinSettings, expiryDays: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Earn Per Day (coins)
                  </label>
                  <input
                    type="number"
                    value={coinSettings.maxEarnPerDay}
                    onChange={(e) => setCoinSettings({ ...coinSettings, maxEarnPerDay: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Multiplier
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={coinSettings.purchaseMultiplier}
                    onChange={(e) => setCoinSettings({ ...coinSettings, purchaseMultiplier: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cashback Settings Tab */}
          {activeTab === 'cashback' && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cashback Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Cashback (%)
                  </label>
                  <input
                    type="number"
                    value={cashbackSettings.minCashback}
                    onChange={(e) => setCashbackSettings({ ...cashbackSettings, minCashback: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Cashback (%)
                  </label>
                  <input
                    type="number"
                    value={cashbackSettings.maxCashback}
                    onChange={(e) => setCashbackSettings({ ...cashbackSettings, maxCashback: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Cashback (%)
                  </label>
                  <input
                    type="number"
                    value={cashbackSettings.defaultCashback}
                    onChange={(e) => setCashbackSettings({ ...cashbackSettings, defaultCashback: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cashback Expiry (days)
                  </label>
                  <input
                    type="number"
                    value={cashbackSettings.cashbackExpiry}
                    onChange={(e) => setCashbackSettings({ ...cashbackSettings, cashbackExpiry: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Min Purchase for Cashback (₹)
                  </label>
                  <input
                    type="number"
                    value={cashbackSettings.minPurchaseForCashback}
                    onChange={(e) => setCashbackSettings({ ...cashbackSettings, minPurchaseForCashback: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Cashback Per Transaction (₹)
                  </label>
                  <input
                    type="number"
                    value={cashbackSettings.maxCashbackPerTransaction}
                    onChange={(e) => setCashbackSettings({ ...cashbackSettings, maxCashbackPerTransaction: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Instant Cashback</p>
                  <p className="text-sm text-gray-600">Credit cashback immediately after purchase</p>
                </div>
                <button
                  onClick={() => setCashbackSettings({ ...cashbackSettings, instantCashback: !cashbackSettings.instantCashback })}
                  className="flex items-center gap-2"
                >
                  {cashbackSettings.instantCashback ? (
                    <ToggleRight className="w-10 h-10 text-green-600" />
                  ) : (
                    <ToggleLeft className="w-10 h-10 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* App Version Tab */}
          {activeTab === 'app' && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">App Version Control</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Version
                    </label>
                    <input
                      type="text"
                      value={appVersion.currentVersion}
                      onChange={(e) => setAppVersion({ ...appVersion, currentVersion: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Required Version
                    </label>
                    <input
                      type="text"
                      value={appVersion.minRequiredVersion}
                      onChange={(e) => setAppVersion({ ...appVersion, minRequiredVersion: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Force Update</p>
                    <p className="text-sm text-gray-600">Require users to update to continue</p>
                  </div>
                  <button
                    onClick={() => setAppVersion({ ...appVersion, forceUpdateEnabled: !appVersion.forceUpdateEnabled })}
                    className="flex items-center gap-2"
                  >
                    {appVersion.forceUpdateEnabled ? (
                      <ToggleRight className="w-10 h-10 text-orange-600" />
                    ) : (
                      <ToggleLeft className="w-10 h-10 text-gray-400" />
                    )}
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maintenance Message
                  </label>
                  <textarea
                    value={appVersion.maintenanceMessage}
                    onChange={(e) => setAppVersion({ ...appVersion, maintenanceMessage: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Update Message
                  </label>
                  <textarea
                    value={appVersion.updateMessage}
                    onChange={(e) => setAppVersion({ ...appVersion, updateMessage: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's New
                  </label>
                  <div className="space-y-2">
                    {appVersion.whatsNew.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* API Settings Tab */}
          {activeTab === 'api' && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">API Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Key
                  </label>
                  <div className="relative">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={apiSettings.apiKey}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 pr-12"
                      readOnly
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    value={apiSettings.webhookUrl}
                    onChange={(e) => setApiSettings({ ...apiSettings, webhookUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rate Limit (requests/hour)
                    </label>
                    <input
                      type="number"
                      value={apiSettings.rateLimit}
                      onChange={(e) => setApiSettings({ ...apiSettings, rateLimit: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeout (seconds)
                    </label>
                    <input
                      type="number"
                      value={apiSettings.timeout}
                      onChange={(e) => setApiSettings({ ...apiSettings, timeout: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Retry Attempts
                    </label>
                    <input
                      type="number"
                      value={apiSettings.retryAttempts}
                      onChange={(e) => setApiSettings({ ...apiSettings, retryAttempts: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Security Notice</p>
                      <p className="text-sm text-blue-700 mt-1">
                        Keep your API key secure. Never share it publicly or commit it to version control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
