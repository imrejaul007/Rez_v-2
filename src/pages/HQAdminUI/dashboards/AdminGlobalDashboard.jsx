import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, TrendingUp, DollarSign, Users, Store, ShoppingCart,
  MapPin, AlertTriangle, CheckCircle, Activity, ArrowUpRight,
  BarChart3, PieChart, Award, RefreshCw, Download, Filter
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminGlobalDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [selectedCity, setSelectedCity] = useState('all');

  const [globalMetrics] = useState({
    totalGMV: { amount: 45678900, growth: 23.5, target: 50000000 },
    totalTransactions: { count: 234567, growth: 18.2, today: 12345 },
    activeUsers: { count: 156789, growth: 15.7, online: 23456 },
    activeMerchants: { count: 8945, growth: 12.3, online: 4567 },
    avgTransactionValue: { amount: 195, growth: 5.2 },
    platformRevenue: { amount: 2345678, growth: 28.9 }
  });

  const [cityMetrics] = useState([
    { id: 1, name: 'Mumbai', icon: '🌆', gmv: 15234500, growth: 28.5, transactions: 78945, activeUsers: 45678, merchants: 2345, topMode: 'Food', healthScore: 92, status: 'healthy' },
    { id: 2, name: 'Delhi', icon: '🏛️', gmv: 12456700, growth: 22.3, transactions: 65432, activeUsers: 38901, merchants: 1987, topMode: 'Fashion', healthScore: 88, status: 'healthy' },
    { id: 3, name: 'Bangalore', icon: '🌳', gmv: 10987600, growth: 31.2, transactions: 58734, activeUsers: 34567, merchants: 1765, topMode: 'Food', healthScore: 95, status: 'healthy' },
    { id: 4, name: 'Pune', icon: '🎓', gmv: 4567800, growth: 18.7, transactions: 23456, activeUsers: 15678, merchants: 987, topMode: 'Services', healthScore: 85, status: 'warning' },
    { id: 5, name: 'Hyderabad', icon: '💎', gmv: 2432300, growth: 15.1, transactions: 12345, activeUsers: 8945, merchants: 654, topMode: 'Food', healthScore: 78, status: 'attention' }
  ]);

  const [modePerformance] = useState([
    { id: 1, name: 'Food & Dining', icon: '🍔', color: 'orange', gmv: 18456700, growth: 25.4, transactions: 98765, merchants: 3456, avgOrderValue: 187, contribution: 40.4, topCity: 'Mumbai' },
    { id: 2, name: 'Fashion & Apparel', icon: '👗', color: 'pink', gmv: 12345600, growth: 22.1, transactions: 45678, merchants: 2134, avgOrderValue: 270, contribution: 27.0, topCity: 'Delhi' },
    { id: 3, name: 'Beauty & Wellness', icon: '💄', color: 'purple', gmv: 6789000, growth: 28.9, transactions: 34567, merchants: 1567, avgOrderValue: 196, contribution: 14.9, topCity: 'Bangalore' },
    { id: 4, name: 'Groceries', icon: '🛒', color: 'green', gmv: 4567800, growth: 18.5, transactions: 56789, merchants: 876, avgOrderValue: 80, contribution: 10.0, topCity: 'Pune' },
    { id: 5, name: 'Services', icon: '🔧', color: 'blue', gmv: 2345600, growth: 15.2, transactions: 12345, merchants: 654, avgOrderValue: 190, contribution: 5.1, topCity: 'Hyderabad' },
    { id: 6, name: 'Entertainment', icon: '🎬', color: 'indigo', gmv: 1234500, growth: 12.8, transactions: 8901, merchants: 234, avgOrderValue: 139, contribution: 2.6, topCity: 'Mumbai' }
  ]);

  const [merchantHealth] = useState({
    healthy: { count: 7156, percentage: 80.0, color: 'green' },
    warning: { count: 1432, percentage: 16.0, color: 'yellow' },
    critical: { count: 357, percentage: 4.0, color: 'red' }
  });

  const [alerts] = useState([
    { id: 1, type: 'warning', message: 'Promo coin redemption spiking in Mumbai - monitor for abuse', time: '5 mins ago', city: 'Mumbai' },
    { id: 2, type: 'critical', message: 'Multiple accounts detected from same device - fraud alert', time: '12 mins ago', city: 'Delhi' },
    { id: 3, type: 'info', message: 'Fashion mode performance exceeding targets in Bangalore', time: '23 mins ago', city: 'Bangalore' },
    { id: 4, type: 'warning', message: 'Merchant settlement delays in Pune - payment gateway issue', time: '45 mins ago', city: 'Pune' }
  ]);

  const getColorClasses = (color) => {
    const colors = {
      orange: { bg: 'bg-orange-50', text: 'text-orange-700', dark: 'text-orange-900' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-700', dark: 'text-pink-900' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-700', dark: 'text-purple-900' },
      green: { bg: 'bg-green-50', text: 'text-green-700', dark: 'text-green-900' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', dark: 'text-blue-900' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', dark: 'text-indigo-900' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">ReZ HQ Control Panel</h1>
              <p className="text-indigo-100">Global ecosystem overview & real-time metrics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(globalMetrics.totalGMV.amount / 10000000).toFixed(1)}Cr</div>
              <div className="text-sm text-indigo-200">Total GMV</div>
              <div className="text-xs text-green-300 mt-1">↑ {globalMetrics.totalGMV.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{(globalMetrics.totalTransactions.count / 1000).toFixed(1)}K</div>
              <div className="text-sm text-indigo-200">Transactions</div>
              <div className="text-xs text-green-300 mt-1">↑ {globalMetrics.totalTransactions.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{(globalMetrics.activeUsers.count / 1000).toFixed(1)}K</div>
              <div className="text-sm text-indigo-200">Active Users</div>
              <div className="text-xs text-green-300 mt-1">↑ {globalMetrics.activeUsers.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{globalMetrics.activeMerchants.count.toLocaleString()}</div>
              <div className="text-sm text-indigo-200">Merchants</div>
              <div className="text-xs text-green-300 mt-1">↑ {globalMetrics.activeMerchants.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{globalMetrics.avgTransactionValue.amount}</div>
              <div className="text-sm text-indigo-200">Avg Order</div>
              <div className="text-xs text-green-300 mt-1">↑ {globalMetrics.avgTransactionValue.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">₹{(globalMetrics.platformRevenue.amount / 100000).toFixed(1)}L</div>
              <div className="text-sm text-indigo-200">Revenue</div>
              <div className="text-xs text-green-300 mt-1">↑ {globalMetrics.platformRevenue.growth}%</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* System Alerts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-bold">System Alerts</h2>
              </div>
              <Link to="/admin/logs" className="text-indigo-600 hover:text-indigo-700 text-sm">View All →</Link>
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={`w-5 h-5 mt-0.5 ${alert.type === 'critical' ? 'text-red-600' : alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'}`} />
                    <div>
                      <p className="font-medium text-gray-900">{alert.message}</p>
                      <p className="text-sm text-gray-600 mt-1">{alert.time} • {alert.city}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded">Review</button>
                </div>
              ))}
            </div>
          </div>

          {/* City Performance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-indigo-600" />
                <h2 className="text-xl font-bold">City-wise Performance</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {cityMetrics.map((city) => (
                <div key={city.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{city.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{city.name}</h3>
                        <p className="text-sm text-gray-600">Top: {city.topMode}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${city.status === 'healthy' ? 'bg-green-100 text-green-700' : city.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {city.healthScore}/100
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-600">GMV</p>
                      <p className="font-bold text-lg">₹{(city.gmv / 100000).toFixed(1)}L</p>
                      <p className="text-green-600 text-xs">↑ {city.growth}%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Transactions</p>
                      <p className="font-bold text-lg">{(city.transactions / 1000).toFixed(1)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Users</p>
                      <p className="font-bold text-lg">{(city.activeUsers / 1000).toFixed(1)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Merchants</p>
                      <p className="font-bold text-lg">{city.merchants}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mode Performance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold">Mode Performance</h2>
            </div>
            <div className="space-y-4">
              {modePerformance.map((mode) => {
                const colorClasses = getColorClasses(mode.color);
                return (
                  <div key={mode.id} className={`border rounded-lg p-4 ${colorClasses.bg}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{mode.icon}</span>
                        <div>
                          <h3 className={`font-bold ${colorClasses.dark}`}>{mode.name}</h3>
                          <p className={`text-sm ${colorClasses.text}`}>{mode.contribution.toFixed(1)}% of total GMV • Top in {mode.topCity}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold ${colorClasses.text}`}>↑ {mode.growth}%</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className={colorClasses.text}>GMV</p>
                        <p className={`font-bold text-lg ${colorClasses.dark}`}>₹{(mode.gmv / 100000).toFixed(1)}L</p>
                      </div>
                      <div>
                        <p className={colorClasses.text}>Transactions</p>
                        <p className={`font-bold text-lg ${colorClasses.dark}`}>{(mode.transactions / 1000).toFixed(1)}K</p>
                      </div>
                      <div>
                        <p className={colorClasses.text}>Merchants</p>
                        <p className={`font-bold text-lg ${colorClasses.dark}`}>{mode.merchants.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className={colorClasses.text}>Avg Order</p>
                        <p className={`font-bold text-lg ${colorClasses.dark}`}>₹{mode.avgOrderValue}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Merchant Health */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold">Merchant Health Scores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-green-700 font-medium">Healthy (80-100)</p>
                    <p className="text-2xl font-bold text-green-900">{merchantHealth.healthy.count}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm text-green-700">{merchantHealth.healthy.percentage}% of merchants</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-yellow-700 font-medium">Warning (50-79)</p>
                    <p className="text-2xl font-bold text-yellow-900">{merchantHealth.warning.count}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <p className="text-sm text-yellow-700">{merchantHealth.warning.percentage}% of merchants</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-red-700 font-medium">Critical (&lt;50)</p>
                    <p className="text-2xl font-bold text-red-900">{merchantHealth.critical.count}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <p className="text-sm text-red-700">{merchantHealth.critical.percentage}% of merchants</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link to="/admin/merchant-tier-config" className="text-indigo-600 hover:text-indigo-700 text-sm">
                Configure merchant tiers & health scoring →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
