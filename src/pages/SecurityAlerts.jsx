import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityAlerts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('alerts');

  // Mock security data
  const [securityData] = useState({
    securityScore: 85,
    lastCheck: '2024-12-27 10:30',
    alerts: [
      {
        id: 1,
        type: 'login',
        severity: 'medium',
        title: 'New device login detected',
        description: 'Login from Chrome on Windows in Mumbai, Maharashtra',
        timestamp: '2024-12-27 09:15',
        device: 'Chrome on Windows',
        location: 'Mumbai, Maharashtra',
        ip: '103.xx.xx.xx',
        actionTaken: null,
        status: 'pending'
      },
      {
        id: 2,
        type: 'transaction',
        severity: 'high',
        title: 'Large transaction blocked',
        description: 'Attempted transaction of ₹15,000 was blocked due to unusual pattern',
        timestamp: '2024-12-26 18:30',
        amount: 15000,
        merchant: 'Unknown Merchant',
        reason: 'Unusual spending pattern detected',
        actionTaken: 'auto_blocked',
        status: 'resolved'
      },
      {
        id: 3,
        type: 'password',
        severity: 'low',
        title: 'Password change reminder',
        description: "You haven't changed your password in 90 days",
        timestamp: '2024-12-25 12:00',
        lastChanged: '2024-09-25',
        status: 'pending'
      },
      {
        id: 4,
        type: 'phishing',
        severity: 'high',
        title: 'Phishing attempt detected',
        description: 'We blocked a suspicious link that tried to steal your credentials',
        timestamp: '2024-12-24 15:45',
        source: 'SMS message',
        actionTaken: 'blocked',
        status: 'resolved'
      },
      {
        id: 5,
        type: 'data_access',
        severity: 'info',
        title: 'Data export requested',
        description: 'Your account data export was initiated',
        timestamp: '2024-12-23 10:00',
        exportType: 'Full account data',
        status: 'completed'
      }
    ],
    activeSessions: [
      {
        id: 1,
        device: 'iPhone 14 Pro',
        browser: 'ReZ App',
        location: 'Mumbai, Maharashtra',
        ip: '103.xx.xx.1',
        lastActive: 'Now',
        current: true
      },
      {
        id: 2,
        device: 'Windows PC',
        browser: 'Chrome',
        location: 'Mumbai, Maharashtra',
        ip: '103.xx.xx.2',
        lastActive: '2 hours ago',
        current: false
      },
      {
        id: 3,
        device: 'MacBook Pro',
        browser: 'Safari',
        location: 'Pune, Maharashtra',
        ip: '182.xx.xx.3',
        lastActive: '1 day ago',
        current: false
      }
    ],
    securitySettings: {
      twoFactor: true,
      biometric: true,
      loginAlerts: true,
      transactionAlerts: true,
      deviceTracking: true,
      sessionTimeout: 30
    },
    recentActivity: [
      { action: 'Login', device: 'iPhone 14 Pro', time: '10 mins ago', success: true },
      { action: 'Payment to Fresh Mart', device: 'iPhone 14 Pro', time: '1 hour ago', success: true },
      { action: 'Password change', device: 'Windows PC', time: '2 days ago', success: true },
      { action: 'Failed login attempt', device: 'Unknown', time: '3 days ago', success: false }
    ]
  });

  const getSeverityColor = (severity) => {
    const colors = {
      high: 'bg-red-100 text-red-700 border-red-200',
      medium: 'bg-orange-100 text-orange-700 border-orange-200',
      low: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      info: 'bg-blue-100 text-blue-700 border-blue-200'
    };
    return colors[severity] || 'bg-gray-100 text-gray-700';
  };

  const getSeverityIcon = (severity) => {
    const icons = {
      high: '🚨',
      medium: '⚠️',
      low: '💡',
      info: 'ℹ️'
    };
    return icons[severity] || '📢';
  };

  const getTypeIcon = (type) => {
    const icons = {
      login: '🔐',
      transaction: '💳',
      password: '🔑',
      phishing: '🎣',
      data_access: '📁'
    };
    return icons[type] || '🔔';
  };

  const tabs = [
    { id: 'alerts', label: 'Alerts', icon: '🔔', count: securityData.alerts.filter(a => a.status === 'pending').length },
    { id: 'sessions', label: 'Sessions', icon: '📱', count: securityData.activeSessions.length },
    { id: 'activity', label: 'Activity', icon: '📋' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Security Center</h1>
        </div>

        {/* Security Score */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm mb-1">Security Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">{securityData.securityScore}</span>
                <span className="text-white/60">/ 100</span>
              </div>
              <p className="text-sm text-white/70 mt-2">
                {securityData.securityScore >= 80 ? '🛡️ Your account is well protected' :
                 securityData.securityScore >= 60 ? '⚠️ Some improvements recommended' :
                 '🚨 Immediate action needed'}
              </p>
            </div>
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                <circle
                  cx="48" cy="48" r="40"
                  stroke="white"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={251.2}
                  strokeDashoffset={251.2 * (1 - securityData.securityScore / 100)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-white border-b sticky top-0 z-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1 ${
              activeTab === tab.id
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
            {tab.count !== undefined && (
              <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
                activeTab === tab.id ? 'bg-red-100' : 'bg-gray-100'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-4">
            {securityData.alerts.map(alert => (
              <div
                key={alert.id}
                className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${
                  alert.severity === 'high' ? 'border-l-red-500' :
                  alert.severity === 'medium' ? 'border-l-orange-500' :
                  alert.severity === 'low' ? 'border-l-yellow-500' :
                  'border-l-blue-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{getTypeIcon(alert.type)}</span>
                    <div>
                      <p className="font-medium">{alert.title}</p>
                      <p className="text-xs text-gray-500">{alert.timestamp}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getSeverityColor(alert.severity)}`}>
                    {getSeverityIcon(alert.severity)} {alert.severity}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">{alert.description}</p>

                {/* Alert Details */}
                {alert.type === 'login' && (
                  <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
                    <p><span className="text-gray-500">Device:</span> {alert.device}</p>
                    <p><span className="text-gray-500">Location:</span> {alert.location}</p>
                    <p><span className="text-gray-500">IP:</span> {alert.ip}</p>
                  </div>
                )}

                {alert.type === 'transaction' && (
                  <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
                    <p><span className="text-gray-500">Amount:</span> ₹{alert.amount}</p>
                    <p><span className="text-gray-500">Merchant:</span> {alert.merchant}</p>
                    <p><span className="text-gray-500">Reason:</span> {alert.reason}</p>
                  </div>
                )}

                {/* Actions */}
                {alert.status === 'pending' && (
                  <div className="flex gap-2 mt-3">
                    {alert.type === 'login' && (
                      <>
                        <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium">
                          This was me
                        </button>
                        <button className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium">
                          Secure account
                        </button>
                      </>
                    )}
                    {alert.type === 'password' && (
                      <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium">
                        Change Password
                      </button>
                    )}
                  </div>
                )}

                {alert.status === 'resolved' && (
                  <div className="mt-3 text-sm text-green-600 flex items-center gap-1">
                    <span>✅</span> Issue resolved
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === 'sessions' && (
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-blue-700">
                🔍 Review your active sessions and sign out from devices you don't recognize.
              </p>
            </div>

            {securityData.activeSessions.map(session => (
              <div
                key={session.id}
                className={`bg-white rounded-xl p-4 shadow-sm ${
                  session.current ? 'ring-2 ring-green-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                      {session.device.includes('iPhone') || session.device.includes('iPad') ? '📱' :
                       session.device.includes('Mac') ? '💻' :
                       session.device.includes('Windows') ? '🖥️' : '📱'}
                    </div>
                    <div>
                      <p className="font-medium">{session.device}</p>
                      <p className="text-xs text-gray-500">{session.browser}</p>
                    </div>
                  </div>
                  {session.current && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <div className="text-sm space-y-1 mb-3">
                  <p><span className="text-gray-500">Location:</span> {session.location}</p>
                  <p><span className="text-gray-500">IP:</span> {session.ip}</p>
                  <p><span className="text-gray-500">Last active:</span> {session.lastActive}</p>
                </div>

                {!session.current && (
                  <button className="w-full bg-red-100 text-red-700 py-2 rounded-lg text-sm font-medium">
                    Sign out from this device
                  </button>
                )}
              </div>
            ))}

            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-medium">
              Sign out from all other devices
            </button>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="space-y-3">
            {securityData.recentActivity.map((activity, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-4 shadow-sm flex items-center justify-between ${
                  !activity.success ? 'border-l-4 border-l-red-500' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.success ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {activity.success ? '✅' : '❌'}
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.device}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}

            <button className="w-full text-center text-purple-600 py-3">
              View full activity log
            </button>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Security Settings</h3>

              <div className="space-y-4">
                {/* Two-Factor Auth */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔐</span>
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-xs text-gray-500">Extra security for your account</p>
                    </div>
                  </div>
                  <div className={`w-12 h-7 rounded-full p-1 cursor-pointer ${
                    securityData.securitySettings.twoFactor ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      securityData.securitySettings.twoFactor ? 'translate-x-5' : ''
                    }`} />
                  </div>
                </div>

                {/* Biometric */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">👆</span>
                    <div>
                      <p className="font-medium">Biometric Login</p>
                      <p className="text-xs text-gray-500">Use fingerprint or face ID</p>
                    </div>
                  </div>
                  <div className={`w-12 h-7 rounded-full p-1 cursor-pointer ${
                    securityData.securitySettings.biometric ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      securityData.securitySettings.biometric ? 'translate-x-5' : ''
                    }`} />
                  </div>
                </div>

                {/* Login Alerts */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔔</span>
                    <div>
                      <p className="font-medium">Login Alerts</p>
                      <p className="text-xs text-gray-500">Get notified of new logins</p>
                    </div>
                  </div>
                  <div className={`w-12 h-7 rounded-full p-1 cursor-pointer ${
                    securityData.securitySettings.loginAlerts ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      securityData.securitySettings.loginAlerts ? 'translate-x-5' : ''
                    }`} />
                  </div>
                </div>

                {/* Transaction Alerts */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💳</span>
                    <div>
                      <p className="font-medium">Transaction Alerts</p>
                      <p className="text-xs text-gray-500">Alerts for large or unusual transactions</p>
                    </div>
                  </div>
                  <div className={`w-12 h-7 rounded-full p-1 cursor-pointer ${
                    securityData.securitySettings.transactionAlerts ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      securityData.securitySettings.transactionAlerts ? 'translate-x-5' : ''
                    }`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-xl">🔑</span>
                  <span className="font-medium">Change Password</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-xl">📧</span>
                  <span className="font-medium">Update Recovery Email</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="text-xl">📱</span>
                  <span className="font-medium">Update Phone Number</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 text-red-700">
                  <span className="text-xl">🚨</span>
                  <span className="font-medium">Report Suspicious Activity</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecurityAlerts;
