import { useState } from 'react';
import { DollarSign, TrendingUp, Users, Calendar, Download } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/admin/customers/ltv
// Backend API: GET /api/admin/customers/ltv-segments
// Backend API: POST /api/admin/customers/ltv-predict

export default function AdminCustomerLTV() {
  const [segment, setSegment] = useState('all');

  const ltvMetrics = {
    overall: { average: 1245, median: 980, top10: 5670 },
    bySegment: [
      { name: 'Premium', users: 2340, ltv: 3450, growth: 23.5 },
      { name: 'Regular', users: 12450, ltv: 980, growth: 12.3 },
      { name: 'New', users: 5670, ltv: 234, growth: 45.6 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customer Lifetime Value</h1>
              <p className="text-gray-600 mt-1">Analyze and predict customer value</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-blue-700 font-medium">Average LTV</p>
                <p className="text-2xl font-bold text-blue-900">₹{ltvMetrics.overall.average}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700 font-medium">Median LTV</p>
                <p className="text-2xl font-bold text-green-900">₹{ltvMetrics.overall.median}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-sm p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-purple-700 font-medium">Top 10% LTV</p>
                <p className="text-2xl font-bold text-purple-900">₹{ltvMetrics.overall.top10}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">LTV by Customer Segment</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {ltvMetrics.bySegment.map((seg) => (
                <div key={seg.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{seg.name}</p>
                      <p className="text-sm text-gray-600">{seg.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">₹{seg.ltv}</p>
                    <p className="text-sm text-green-600">+{seg.growth}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
