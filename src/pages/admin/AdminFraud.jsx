import { useState } from 'react';
import { AlertTriangle, Shield, Ban, Eye, CheckCircle, XCircle, Search, Settings } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminFraud() {
  const [activeTab, setActiveTab] = useState('alerts');

  const [fraudAlerts, setFraudAlerts] = useState([
    {
      id: 1,
      type: 'suspicious_transaction',
      severity: 'high',
      user: { name: 'John Suspicious', email: 'john@example.com', userId: 'USR12345' },
      description: 'Multiple high-value transactions from different locations within 1 hour',
      amount: 15000,
      transactionCount: 5,
      locations: ['Delhi', 'Mumbai', 'Bangalore'],
      detectedAt: '2024-01-20 14:35:22',
      status: 'pending'
    },
    {
      id: 2,
      type: 'multiple_accounts',
      severity: 'medium',
      user: { name: 'Jane Multi', email: 'jane@example.com', userId: 'USR12346' },
      description: 'Same device detected across 3 different user accounts',
      deviceId: 'DEV789456',
      accountCount: 3,
      detectedAt: '2024-01-20 13:20:15',
      status: 'pending'
    },
    {
      id: 3,
      type: 'referral_fraud',
      severity: 'high',
      user: { name: 'Mike Referrer', email: 'mike@example.com', userId: 'USR12347' },
      description: 'Unusual referral pattern - 20 referrals in 24 hours from similar email domains',
      referralCount: 20,
      suspiciousEmails: ['temp1@temp.com', 'temp2@temp.com', 'temp3@temp.com'],
      detectedAt: '2024-01-20 12:10:30',
      status: 'investigating'
    },
    {
      id: 4,
      type: 'fake_review',
      severity: 'low',
      user: { name: 'Sarah Writer', email: 'sarah@example.com', userId: 'USR12348' },
      merchant: 'The Coffee House',
      description: 'Repetitive review pattern detected - similar text across multiple merchants',
      reviewCount: 15,
      detectedAt: '2024-01-20 11:45:00',
      status: 'pending'
    }
  ]);

  const [fraudRules, setFraudRules] = useState({
    transaction: [
      { id: 1, name: 'High-value transaction limit', value: '10000', enabled: true },
      { id: 2, name: 'Multiple transactions per hour', value: '5', enabled: true },
      { id: 3, name: 'Location change threshold (km)', value: '100', enabled: true },
      { id: 4, name: 'Failed payment attempts', value: '3', enabled: true }
    ],
    account: [
      { id: 5, name: 'Multiple accounts per device', value: '2', enabled: true },
      { id: 6, name: 'Account age for high-value (days)', value: '7', enabled: true },
      { id: 7, name: 'Rapid account creation (per IP)', value: '3', enabled: false }
    ],
    review: [
      { id: 8, name: 'Reviews per day limit', value: '5', enabled: true },
      { id: 9, name: 'Similarity threshold (%)', value: '80', enabled: true },
      { id: 10, name: 'Min account age for review (days)', value: '3', enabled: true }
    ]
  });

  const [blockedUsers, setBlockedUsers] = useState([
    {
      id: 1,
      name: 'Blocked User 1',
      email: 'blocked1@example.com',
      userId: 'USR99991',
      reason: 'Repeated fraudulent transactions',
      blockedDate: '2024-01-15',
      blockedBy: 'Admin',
      status: 'permanent'
    },
    {
      id: 2,
      name: 'Blocked User 2',
      email: 'blocked2@example.com',
      userId: 'USR99992',
      reason: 'Fake review spam',
      blockedDate: '2024-01-18',
      blockedBy: 'System',
      status: 'temporary'
    },
    {
      id: 3,
      merchant: 'Suspicious Store',
      email: 'suspicious@store.com',
      merchantId: 'MER99991',
      reason: 'Cashback manipulation attempts',
      blockedDate: '2024-01-19',
      blockedBy: 'Admin',
      status: 'permanent'
    }
  ]);

  const handleInvestigate = (id) => {
    setFraudAlerts(prev => prev.map(alert =>
      alert.id === id ? { ...alert, status: 'investigating' } : alert
    ));
  };

  const handleBlockUser = (id) => {
    const alert = fraudAlerts.find(a => a.id === id);
    if (alert) {
      setBlockedUsers(prev => [...prev, {
        id: blockedUsers.length + 1,
        name: alert.user.name,
        email: alert.user.email,
        userId: alert.user.userId,
        reason: alert.description,
        blockedDate: new Date().toISOString().split('T')[0],
        blockedBy: 'Admin',
        status: 'permanent'
      }]);
      setFraudAlerts(prev => prev.filter(a => a.id !== id));
    }
  };

  const handleDismiss = (id) => {
    setFraudAlerts(prev => prev.map(alert =>
      alert.id === id ? { ...alert, status: 'dismissed' } : alert
    ));
  };

  const handleUnblock = (id) => {
    setBlockedUsers(prev => prev.filter(u => u.id !== id));
  };

  const handleToggleRule = (category, id) => {
    setFraudRules(prev => ({
      ...prev,
      [category]: prev[category].map(rule =>
        rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fraud Detection & Prevention</h1>
              <p className="text-gray-600 mt-1">Monitor and manage fraudulent activities</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-900">{fraudAlerts.filter(a => a.status === 'pending').length} Active Alerts</span>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Active Alerts</p>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{fraudAlerts.filter(a => a.status === 'pending').length}</p>
            <p className="text-sm text-red-600 mt-2">Requires immediate action</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Under Investigation</p>
              <Search className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{fraudAlerts.filter(a => a.status === 'investigating').length}</p>
            <p className="text-sm text-gray-600 mt-2">Being reviewed</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Blocked Users</p>
              <Ban className="w-8 h-8 text-gray-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{blockedUsers.length}</p>
            <p className="text-sm text-gray-600 mt-2">Total blocked</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Prevention Rate</p>
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">98.5%</p>
            <p className="text-sm text-green-600 mt-2">Fraud prevented</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('alerts')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'alerts'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Fraud Alerts
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'rules'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Fraud Rules
              </button>
              <button
                onClick={() => setActiveTab('blocked')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'blocked'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Blocked Users/Merchants
              </button>
            </nav>
          </div>

          {/* Fraud Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="p-6">
              <div className="space-y-4">
                {fraudAlerts.filter(a => a.status !== 'dismissed').map((alert) => (
                  <div key={alert.id} className={`rounded-lg p-6 border-2 ${
                    alert.severity === 'high' ? 'bg-red-50 border-red-200' :
                    alert.severity === 'medium' ? 'bg-orange-50 border-orange-200' :
                    'bg-yellow-50 border-yellow-200'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className={`w-6 h-6 ${
                          alert.severity === 'high' ? 'text-red-600' :
                          alert.severity === 'medium' ? 'text-orange-600' :
                          'text-yellow-600'
                        }`} />
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{alert.type.replace(/_/g, ' ').toUpperCase()}</h3>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              alert.severity === 'high' ? 'bg-red-100 text-red-700' :
                              alert.severity === 'medium' ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {alert.severity} severity
                            </span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              alert.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {alert.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">{alert.description}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            {alert.user && (
                              <div>
                                <p className="text-gray-600">User</p>
                                <p className="font-medium text-gray-900">{alert.user.name}</p>
                                <p className="text-xs text-gray-500">{alert.user.email}</p>
                              </div>
                            )}
                            {alert.amount && (
                              <div>
                                <p className="text-gray-600">Amount</p>
                                <p className="font-medium text-gray-900">₹{alert.amount.toLocaleString()}</p>
                              </div>
                            )}
                            {alert.transactionCount && (
                              <div>
                                <p className="text-gray-600">Transactions</p>
                                <p className="font-medium text-gray-900">{alert.transactionCount}</p>
                              </div>
                            )}
                            {alert.accountCount && (
                              <div>
                                <p className="text-gray-600">Accounts</p>
                                <p className="font-medium text-gray-900">{alert.accountCount}</p>
                              </div>
                            )}
                            {alert.referralCount && (
                              <div>
                                <p className="text-gray-600">Referrals</p>
                                <p className="font-medium text-gray-900">{alert.referralCount}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-gray-600">Detected At</p>
                              <p className="font-medium text-gray-900">{alert.detectedAt}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {alert.status === 'pending' && (
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => handleInvestigate(alert.id)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Investigate
                        </button>
                        <button
                          onClick={() => handleBlockUser(alert.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm flex items-center gap-2"
                        >
                          <Ban className="w-4 h-4" />
                          Block User
                        </button>
                        <button
                          onClick={() => handleDismiss(alert.id)}
                          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm flex items-center gap-2"
                        >
                          <XCircle className="w-4 h-4" />
                          Dismiss
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fraud Rules Tab */}
          {activeTab === 'rules' && (
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Rules</h3>
                  <div className="space-y-3">
                    {fraudRules.transaction.map((rule) => (
                      <div key={rule.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{rule.name}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <input
                              type="number"
                              value={rule.value}
                              className="w-32 px-3 py-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rule.enabled}
                            onChange={() => handleToggleRule('transaction', rule.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Rules</h3>
                  <div className="space-y-3">
                    {fraudRules.account.map((rule) => (
                      <div key={rule.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{rule.name}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <input
                              type="number"
                              value={rule.value}
                              className="w-32 px-3 py-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rule.enabled}
                            onChange={() => handleToggleRule('account', rule.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review & Content Rules</h3>
                  <div className="space-y-3">
                    {fraudRules.review.map((rule) => (
                      <div key={rule.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{rule.name}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <input
                              type="number"
                              value={rule.value}
                              className="w-32 px-3 py-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rule.enabled}
                            onChange={() => handleToggleRule('review', rule.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blocked Users/Merchants Tab */}
          {activeTab === 'blocked' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User/Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blocked Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blocked By</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {blockedUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{user.name || user.merchant}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-mono text-gray-900">{user.userId || user.merchantId}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{user.reason}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{user.blockedDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{user.blockedBy}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'permanent' ? 'bg-red-100 text-red-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => handleUnblock(user.id)}
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
                          >
                            Unblock
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
