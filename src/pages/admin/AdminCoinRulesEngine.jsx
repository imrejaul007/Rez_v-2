import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  Settings, Coins, Calendar, Percent, Target, TrendingUp, Shield,
  Save, Edit, Copy, Trash2, AlertTriangle, Check, X, Plus, Clock
} from 'lucide-react';

export default function AdminCoinRulesEngine() {
  const [activeTab, setActiveTab] = useState('expiry');

  const [expiryRules] = useState([
    { coinType: 'ReZ Coin', expiryDays: 365, rolloverAllowed: true, warningDays: 30, autoExtend: false },
    { coinType: 'Promo Coin', expiryDays: 30, rolloverAllowed: false, warningDays: 7, autoExtend: false },
    { coinType: 'Branded Coin', expiryDays: 90, rolloverAllowed: true, warningDays: 15, autoExtend: true },
    { coinType: 'Privé Coin', expiryDays: 180, rolloverAllowed: true, warningDays: 30, autoExtend: true }
  ]);

  const [multiplierRules] = useState([
    {
      id: 'MR-001',
      name: 'Weekend 2x Multiplier',
      status: 'active',
      coinType: 'ReZ Coin',
      multiplier: 2.0,
      conditions: 'Saturday & Sunday transactions',
      categories: ['All'],
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      minTransaction: 500,
      totalEarned: 2345678
    },
    {
      id: 'MR-002',
      name: 'Fashion Category Boost',
      status: 'active',
      coinType: 'ReZ Coin',
      multiplier: 1.5,
      conditions: 'Fashion & Apparel purchases',
      categories: ['Fashion', 'Footwear', 'Accessories'],
      validFrom: '2024-01-01',
      validUntil: '2024-06-30',
      minTransaction: 1000,
      totalEarned: 1234567
    },
    {
      id: 'MR-003',
      name: 'Diwali Special 3x',
      status: 'scheduled',
      coinType: 'ReZ Coin',
      multiplier: 3.0,
      conditions: 'Diwali festival period',
      categories: ['Jewelry', 'Sweets', 'Gifts', 'Clothing'],
      validFrom: '2024-10-20',
      validUntil: '2024-11-05',
      minTransaction: 500,
      totalEarned: 0
    }
  ]);

  const [conversionRules] = useState([
    {
      from: 'ReZ Coin',
      to: 'Gift Voucher',
      ratio: '100:1',
      minConversion: 1000,
      maxConversion: 50000,
      fee: '0%',
      enabled: true
    },
    {
      from: 'Promo Coin',
      to: 'ReZ Coin',
      ratio: '2:1',
      minConversion: 200,
      maxConversion: 10000,
      fee: '10%',
      enabled: true
    },
    {
      from: 'Branded Coin',
      to: 'ReZ Coin',
      ratio: '1:1',
      minConversion: 100,
      maxConversion: null,
      fee: '5%',
      enabled: false
    }
  ]);

  const [brandedCoinRules] = useState([
    {
      merchant: 'Pizza Paradise',
      coinName: 'Pizza Coin',
      issueRate: '5%',
      redemptionRate: '1 coin = ₹1',
      maxPerTransaction: 500,
      expiryDays: 90,
      transferable: false,
      category: 'Food & Dining'
    },
    {
      merchant: 'Fashion Junction',
      coinName: 'Style Coin',
      issueRate: '3%',
      redemptionRate: '1 coin = ₹1',
      maxPerTransaction: 1000,
      expiryDays: 120,
      transferable: true,
      category: 'Fashion'
    }
  ]);

  const [eventOverrides] = useState([
    {
      event: 'Republic Day Sale',
      dateRange: 'Jan 26 - Jan 28, 2024',
      override: 'All coins 10% bonus',
      status: 'upcoming',
      affectedCoins: ['ReZ Coin', 'Promo Coin']
    },
    {
      event: 'Flash Friday',
      dateRange: 'Every Friday 6-9 PM',
      override: '5x multiplier on select categories',
      status: 'active',
      affectedCoins: ['ReZ Coin']
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      scheduled: 'bg-blue-100 text-blue-700',
      expired: 'bg-gray-100 text-gray-600',
      upcoming: 'bg-yellow-100 text-yellow-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Coin Rules Engine</h1>
              <p className="text-indigo-100">Configure expiry, multipliers, conversion & branded coin rules</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
            <Save className="w-5 h-5" />
            Save All Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-6 px-6">
          {['expiry', 'multipliers', 'conversion', 'branded', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-medium border-b-2 transition-colors capitalize ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'expiry' && 'Expiry Rules'}
              {tab === 'multipliers' && 'Multipliers'}
              {tab === 'conversion' && 'Conversion Rules'}
              {tab === 'branded' && 'Branded Coins'}
              {tab === 'events' && 'Event Overrides'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {activeTab === 'expiry' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Coin Expiry Configuration</h2>
            <div className="grid grid-cols-1 gap-4">
              {expiryRules.map((rule, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{rule.coinType}</h3>
                    <button className="flex items-center gap-2 px-3 py-1 text-indigo-600 hover:bg-indigo-50 rounded">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border-l-4 border-indigo-600 pl-4">
                      <div className="text-2xl font-bold text-gray-900">{rule.expiryDays}</div>
                      <div className="text-sm text-gray-600">Days to Expiry</div>
                    </div>
                    <div className="border-l-4 border-yellow-600 pl-4">
                      <div className="text-2xl font-bold text-gray-900">{rule.warningDays}</div>
                      <div className="text-sm text-gray-600">Warning Days Before</div>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <div className="text-xl font-bold text-gray-900">{rule.rolloverAllowed ? 'Yes' : 'No'}</div>
                      <div className="text-sm text-gray-600">Rollover Allowed</div>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                      <div className="text-xl font-bold text-gray-900">{rule.autoExtend ? 'Yes' : 'No'}</div>
                      <div className="text-sm text-gray-600">Auto-Extend on Use</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'multipliers' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Coin Multiplier Rules</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Plus className="w-4 h-4" />
                Create Multiplier
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {multiplierRules.map((rule) => (
                <div key={rule.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{rule.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rule.status)}`}>
                          {rule.status.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold">
                          {rule.multiplier}x
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{rule.coinType}</span>
                        <span>•</span>
                        <span>{rule.conditions}</span>
                        <span>•</span>
                        <span>Min: ₹{rule.minTransaction}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {rule.categories.map((cat, idx) => (
                          <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Valid: {rule.validFrom} to {rule.validUntil}</span>
                        {rule.totalEarned > 0 && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-green-600">Earned: ₹{(rule.totalEarned / 1000).toFixed(0)}K</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'conversion' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Cross-Coin Conversion Rules</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">From</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">To</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Conversion Ratio</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Min/Max</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Fee</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionRules.map((rule, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">{rule.from}</td>
                      <td className="py-3 px-4 font-medium text-gray-900">{rule.to}</td>
                      <td className="py-3 px-4 text-indigo-600 font-bold">{rule.ratio}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {rule.minConversion} - {rule.maxConversion || '∞'}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{rule.fee}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          rule.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {rule.enabled ? 'ENABLED' : 'DISABLED'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'branded' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Merchant-Specific Branded Coin Rules</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Plus className="w-4 h-4" />
                Add Branded Coin
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {brandedCoinRules.map((rule, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{rule.merchant}</h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                          {rule.coinName}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {rule.category}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-gray-900">{rule.issueRate}</div>
                          <div className="text-xs text-gray-600">Issue Rate</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm font-bold text-gray-900">{rule.redemptionRate}</div>
                          <div className="text-xs text-gray-600">Redemption</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-gray-900">{rule.maxPerTransaction}</div>
                          <div className="text-xs text-gray-600">Max Per Txn</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-gray-900">{rule.expiryDays}d</div>
                          <div className="text-xs text-gray-600">Expiry</div>
                        </div>
                      </div>
                      <div className="mt-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${
                          rule.transferable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {rule.transferable ? 'Transferable' : 'Non-Transferable'}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Special Event Overrides</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Plus className="w-4 h-4" />
                Create Event Override
              </button>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Event overrides temporarily modify coin rules during special occasions.</p>
                <p>These settings take precedence over regular rules and automatically expire after the event period.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {eventOverrides.map((event, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{event.event}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.dateRange}
                        </span>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-3 mb-3">
                        <p className="text-sm font-medium text-indigo-900">{event.override}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-gray-600">Affected Coins:</span>
                        {event.affectedCoins.map((coin, cidx) => (
                          <span key={cidx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                            {coin}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
