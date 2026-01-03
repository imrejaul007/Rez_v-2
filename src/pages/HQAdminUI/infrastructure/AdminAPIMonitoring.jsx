import { useState } from 'react';
import { Activity, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminAPIMonitoring() {
  const [endpoints] = useState([
    { path: '/api/auth/login', requests: 15420, avgResponse: 120, successRate: 99.8, status: 'healthy' },
    { path: '/api/orders/create', requests: 8934, avgResponse: 340, successRate: 98.2, status: 'healthy' },
    { path: '/api/payments/process', requests: 7821, avgResponse: 890, successRate: 96.5, status: 'warning' },
    { path: '/api/wallet/balance', requests: 23456, avgResponse: 45, successRate: 99.9, status: 'healthy' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">API Monitoring</h1>
          <p className="text-gray-600">Monitor API performance and health</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Activity className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">55.6K</p>
            <p className="text-sm text-gray-600">Total Requests</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Clock className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">348ms</p>
            <p className="text-sm text-gray-600">Avg Response</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">98.6%</p>
            <p className="text-sm text-gray-600">Success Rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">1</p>
            <p className="text-sm text-gray-600">Issues</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Endpoint</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Requests</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Avg Response</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Success Rate</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {endpoints.map((endpoint, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm">{endpoint.path}</td>
                  <td className="px-6 py-4 text-gray-900">{endpoint.requests.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-900">{endpoint.avgResponse}ms</td>
                  <td className="px-6 py-4 text-gray-900">{endpoint.successRate}%</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${endpoint.status === 'healthy' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {endpoint.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
