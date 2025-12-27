import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Settings, Store, Users, MapPin, TrendingUp, AlertTriangle,
  CheckCircle, Clock, Phone, Mail, Package, Truck, Shield,
  Award, Target, Activity, BarChart3, Calendar, Bell
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminOperationsDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');

  const [operationsMetrics] = useState({
    activeMerchants: { count: 8945, growth: 12.3, pendingOnboarding: 234, verification: 45 },
    activeUsers: { count: 156789, growth: 15.7, newToday: 567 },
    supportTickets: { open: 234, urgent: 12, avgResponseTime: 3.5 },
    fraudAlerts: { count: 23, resolved: 18, investigating: 5 },
    systemHealth: { uptime: 99.95, latency: 245, errors: 12 },
    contentModeration: { pending: 156, flagged: 45, reviewTime: 2.1 }
  });

  const [cityOperations] = useState([
    { city: 'Mumbai', merchants: 2345, users: 45678, gmv: 15234500, ticketsOpen: 45, healthScore: 92, status: 'healthy' },
    { city: 'Delhi', merchants: 1987, users: 38901, gmv: 12456700, ticketsOpen: 34, healthScore: 88, status: 'healthy' },
    { city: 'Bangalore', merchants: 1765, users: 34567, gmv: 10987600, ticketsOpen: 28, healthScore: 95, status: 'healthy' },
    { city: 'Pune', merchants: 987, users: 15678, gmv: 4567800, ticketsOpen: 67, healthScore: 85, status: 'warning' },
    { city: 'Hyderabad', merchants: 654, users: 8945, gmv: 2432300, ticketsOpen: 89, healthScore: 78, status: 'attention' }
  ]);

  const [urgentIssues] = useState([
    { id: 1, type: 'fraud', title: 'Multiple accounts from same device detected', city: 'Mumbai', severity: 'critical', time: '5 mins ago' },
    { id: 2, type: 'tech', title: 'Payment gateway timeout spike in Delhi', city: 'Delhi', severity: 'high', time: '15 mins ago' },
    { id: 3, type: 'support', title: 'Merchant settlement delay complaints', city: 'Pune', severity: 'high', time: '23 mins ago' },
    { id: 4, type: 'content', title: 'Inappropriate content flagged by multiple users', city: 'Bangalore', severity: 'medium', time: '45 mins ago' }
  ]);

  const getStatusColor = (status) => {
    if (status === 'healthy') return 'bg-green-100 text-green-700';
    if (status === 'warning') return 'bg-yellow-100 text-yellow-700';
    if (status === 'attention') return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getSeverityColor = (severity) => {
    if (severity === 'critical') return 'bg-red-100 text-red-700';
    if (severity === 'high') return 'bg-orange-100 text-orange-700';
    if (severity === 'medium') return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Operations & Support Dashboard</h1>
              <p className="text-blue-100">System health, support tickets & operational metrics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{operationsMetrics.activeMerchants.count.toLocaleString()}</div>
              <div className="text-sm text-blue-200">Active Merchants</div>
              <div className="text-xs text-yellow-300 mt-1">{operationsMetrics.activeMerchants.pendingOnboarding} pending</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{(operationsMetrics.activeUsers.count / 1000).toFixed(0)}K</div>
              <div className="text-sm text-blue-200">Active Users</div>
              <div className="text-xs text-green-300 mt-1">+{operationsMetrics.activeUsers.newToday} today</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{operationsMetrics.supportTickets.open}</div>
              <div className="text-sm text-blue-200">Open Tickets</div>
              <div className="text-xs text-red-300 mt-1">{operationsMetrics.supportTickets.urgent} urgent</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{operationsMetrics.fraudAlerts.count}</div>
              <div className="text-sm text-blue-200">Fraud Alerts</div>
              <div className="text-xs text-yellow-300 mt-1">{operationsMetrics.fraudAlerts.investigating} investigating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{operationsMetrics.systemHealth.uptime}%</div>
              <div className="text-sm text-blue-200">System Uptime</div>
              <div className="text-xs text-green-300 mt-1">{operationsMetrics.systemHealth.latency}ms avg</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{operationsMetrics.contentModeration.pending}</div>
              <div className="text-sm text-blue-200">Content Queue</div>
              <div className="text-xs text-yellow-300 mt-1">{operationsMetrics.contentModeration.flagged} flagged</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Urgent Issues */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-bold">Urgent Issues</h2>
            </div>
            <div className="space-y-3">
              {urgentIssues.map((issue) => (
                <div key={issue.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold">{issue.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                          {issue.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{issue.city} • {issue.time} • Type: {issue.type}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Investigate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* City Operations */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold">City Operations Status</h2>
            </div>
            <div className="space-y-3">
              {cityOperations.map((city, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-lg">{city.city}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(city.status)}`}>
                          Score: {city.healthScore}/100
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Merchants</p>
                      <p className="font-bold">{city.merchants.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Users</p>
                      <p className="font-bold">{(city.users / 1000).toFixed(1)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-600">GMV</p>
                      <p className="font-bold">₹{(city.gmv / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Open Tickets</p>
                      <p className={`font-bold ${city.ticketsOpen > 50 ? 'text-red-600' : 'text-gray-900'}`}>
                        {city.ticketsOpen}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/admin/kyc-compliance" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">KYC & Compliance</h3>
              <p className="text-sm text-gray-600">Review pending verifications</p>
              <p className="text-xs text-yellow-600 mt-2">{operationsMetrics.activeMerchants.verification} pending</p>
            </Link>
            <Link to="/operations/city-dashboard" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">City Operations</h3>
              <p className="text-sm text-gray-600">Local team management</p>
            </Link>
            <Link to="/admin/support-tickets" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Support Tickets</h3>
              <p className="text-sm text-gray-600">Customer support queue</p>
              <p className="text-xs text-red-600 mt-2">{operationsMetrics.supportTickets.urgent} urgent tickets</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
