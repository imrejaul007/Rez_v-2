import { useState } from 'react';
import { Users, TrendingUp, Calendar, Download, RefreshCw, ChevronRight } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/admin/cohorts/analysis
// Backend API: GET /api/admin/cohorts/retention
// Backend API: POST /api/admin/cohorts/export

export default function AdminCohortAnalysis() {
  const [timeframe, setTimeframe] = useState('monthly');
  const [metric, setMetric] = useState('retention');

  const cohorts = [
    {
      id: 1,
      month: 'Jan 2026',
      size: 2543,
      retention: { month1: 45, month2: 32, month3: 28, month4: 25, month5: 22, month6: 20 },
      revenue: { total: 125430, avgPerUser: 49.3, ltv: 245 }
    },
    {
      id: 2,
      month: 'Dec 2025',
      size: 2234,
      retention: { month1: 48, month2: 35, month3: 31, month4: 28, month5: 25, month6: 23 },
      revenue: { total: 145230, avgPerUser: 65.0, ltv: 320 }
    },
    {
      id: 3,
      month: 'Nov 2025',
      size: 1987,
      retention: { month1: 42, month2: 30, month3: 26, month4: 23, month5: 21, month6: 19 },
      revenue: { total: 98560, avgPerUser: 49.6, ltv: 230 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cohort Analysis</h1>
              <p className="text-gray-600 mt-1">Track user behavior and retention over time</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
              <div className="flex gap-2">
                {['weekly', 'monthly', 'quarterly'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      timeframe === tf ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tf.charAt(0).toUpperCase() + tf.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Cohort Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cohort</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Size</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">M1</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">M2</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">M3</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">M4</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">M5</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">M6</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cohorts.map((cohort) => (
                  <tr key={cohort.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{cohort.month}</td>
                    <td className="px-6 py-4 text-gray-900">{cohort.size.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {cohort.retention.month1}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {cohort.retention.month2}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        {cohort.retention.month3}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        {cohort.retention.month4}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        {cohort.retention.month5}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        {cohort.retention.month6}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
