import { useState } from 'react';
import { Coins, TrendingUp, Users, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCoinSystemOverview() {
  const [coinStats] = useState({
    rezCoin: {
      totalIssued: 12500000,
      totalRedeemed: 8900000,
      activeBalance: 3600000,
      usersHolding: 145678,
      avgPerUser: 24.7,
      redemptionRate: 71.2
    },
    brandedCoin: {
      totalIssued: 5400000,
      totalRedeemed: 3200000,
      activeBalance: 2200000,
      usersHolding: 89234,
      avgPerUser: 24.7,
      redemptionRate: 59.3
    },
    priveCoin: {
      totalIssued: 850000,
      totalRedeemed: 320000,
      activeBalance: 530000,
      usersHolding: 12456,
      avgPerUser: 42.5,
      redemptionRate: 37.6
    },
    promoCoin: {
      totalInjected: 2100000,
      totalRedeemed: 1850000,
      expired: 150000,
      activePromos: 8,
      usersTargeted: 234567,
      redemptionRate: 88.1
    }
  });

  const [systemHealth] = useState({
    status: 'healthy',
    issues: [],
    warnings: [
      'Promo coin redemption spiking - monitor fraud',
      'Privé coin redemption rate low - consider incentives'
    ]
  });

  const coinTypes = [
    {
      key: 'rezCoin',
      name: 'ReZ Coin',
      color: 'emerald',
      icon: '💚',
      description: 'Universal utility coin',
      link: '/admin/earning-rule-matrix',
      stats: coinStats.rezCoin
    },
    {
      key: 'brandedCoin',
      name: 'Branded Coin',
      color: 'blue',
      icon: '🔵',
      description: 'Merchant-specific loyalty',
      link: '/admin/cashback',
      stats: coinStats.brandedCoin
    },
    {
      key: 'priveCoin',
      name: 'Privé Coin',
      color: 'purple',
      icon: '👑',
      description: 'Premium status coin',
      link: '/admin/special-programs',
      stats: coinStats.priveCoin
    },
    {
      key: 'promoCoin',
      name: 'Promo Coin',
      color: 'orange',
      icon: '🎫',
      description: 'System-controlled promo',
      link: '/admin/promo-coin-manager',
      stats: coinStats.promoCoin
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dark: 'text-emerald-900' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dark: 'text-blue-900' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dark: 'text-purple-900' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dark: 'text-orange-900' }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Coins className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">4-Coin System Overview</h1>
              <p className="text-cyan-100 mt-1">Comprehensive dashboard for ReZ's multi-tier coin ecosystem</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Health Alert */}
        <div className={`mb-6 rounded-xl p-4 border ${
          systemHealth.status === 'healthy' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-start gap-3">
            {systemHealth.status === 'healthy' ? (
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                System Status: <span className={systemHealth.status === 'healthy' ? 'text-green-700' : 'text-red-700'}>
                  {systemHealth.status.toUpperCase()}
                </span>
              </h3>
              {systemHealth.warnings.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Warnings:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {systemHealth.warnings.map((warning, index) => (
                      <li key={index}>⚠️ {warning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link
            to="/admin/promo-coin-manager"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Inject Promo</p>
                <p className="text-lg font-bold text-gray-900">Promo Manager</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </Link>
          <Link
            to="/admin/redemption-rules"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Configure</p>
                <p className="text-lg font-bold text-gray-900">Redemption Rules</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </Link>
          <Link
            to="/admin/checkout-priority"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Set Priority</p>
                <p className="text-lg font-bold text-gray-900">Checkout Order</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </Link>
          <Link
            to="/admin/earning-rule-matrix"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Configure</p>
                <p className="text-lg font-bold text-gray-900">Earning Rules</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </Link>
        </div>

        {/* Coin Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {coinTypes.map((coin) => {
            const colors = getColorClasses(coin.color);
            const stats = coin.stats;

            return (
              <div key={coin.key} className={`rounded-xl shadow-sm border ${colors.bg} ${colors.border}`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{coin.icon}</div>
                      <div>
                        <h2 className={`text-2xl font-bold ${colors.dark}`}>{coin.name}</h2>
                        <p className={`text-sm ${colors.text}`}>{coin.description}</p>
                      </div>
                    </div>
                    <Link
                      to={coin.link}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg border ${colors.border} ${colors.text} hover:bg-white text-sm font-medium`}
                    >
                      Manage <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">
                        {coin.key === 'promoCoin' ? 'Total Injected' : 'Total Issued'}
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {(stats.totalIssued || stats.totalInjected).toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Total Redeemed</p>
                      <p className="text-xl font-bold text-green-600">
                        {stats.totalRedeemed.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">
                        {coin.key === 'promoCoin' ? 'Expired' : 'Active Balance'}
                      </p>
                      <p className="text-xl font-bold text-blue-600">
                        {(stats.activeBalance || stats.expired).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        {coin.key === 'promoCoin' ? 'Active Promos' : 'Users Holding'}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {(stats.usersHolding || stats.activePromos).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        {coin.key === 'promoCoin' ? 'Users Targeted' : 'Avg per User'}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {coin.key === 'promoCoin' ? stats.usersTargeted.toLocaleString() : stats.avgPerUser}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Redemption Rate</p>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold text-gray-900">{stats.redemptionRate}%</p>
                        <TrendingUp className={`w-4 h-4 ${stats.redemptionRate > 50 ? 'text-green-600' : 'text-red-600'}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Rules Reference */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">4-Coin System Rules Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Earning Rules</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ <strong>ReZ Coin:</strong> Purchases, social, gamification, daily tasks</li>
                <li>✅ <strong>Branded Coin:</strong> Brand purchases, reviews, UGC, sponsored events</li>
                <li>✅ <strong>Privé Coin:</strong> Privé purchases, elite rewards, exclusive campaigns</li>
                <li>❌ <strong>Promo Coin:</strong> NOT earned - injected by ReZ only</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Redemption Rules</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>🟢 <strong>ReZ Coin:</strong> 100% usage, anywhere, ❌ gift cards</li>
                <li>🔵 <strong>Branded Coin:</strong> 100% usage, same brand only, ❌ gift cards</li>
                <li>🟣 <strong>Privé Coin:</strong> 100% usage, anywhere, ✅ gift cards allowed</li>
                <li>🟠 <strong>Promo Coin:</strong> 30% max, time-bound, category restricted</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Checkout Priority</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li>1️⃣ <strong>Promo Coin</strong> - Applied first (use it or lose it)</li>
                <li>2️⃣ <strong>Branded Coin</strong> - Merchant loyalty</li>
                <li>3️⃣ <strong>ReZ Coin</strong> - Universal utility</li>
                <li>4️⃣ <strong>Privé Coin</strong> - Optional (user can save)</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Gift Card Access</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>❌ ReZ Coin - No gift card purchases</li>
                <li>❌ Branded Coin - No gift card purchases</li>
                <li>✅ Privé Coin - Full gift card access</li>
                <li>❌ Promo Coin - No gift card purchases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
