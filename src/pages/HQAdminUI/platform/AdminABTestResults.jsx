import { useState } from 'react';
import { BarChart3, TrendingUp, Users, CheckCircle, XCircle } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/admin/experiments/results
// Backend API: POST /api/admin/experiments/declare-winner
// Backend API: DELETE /api/admin/experiments/:id

export default function AdminABTestResults() {
  const tests = [
    {
      id: 1,
      name: 'Homepage Hero Banner',
      status: 'running',
      variants: [
        { name: 'Control', users: 5420, conversions: 234, rate: 4.32 },
        { name: 'Variant A', users: 5380, conversions: 298, rate: 5.54 },
      ],
      confidence: 95,
      winner: 'Variant A'
    },
    {
      id: 2,
      name: 'Checkout Button Color',
      status: 'completed',
      variants: [
        { name: 'Blue', users: 3210, conversions: 445, rate: 13.86 },
        { name: 'Green', users: 3190, conversions: 512, rate: 16.05 },
      ],
      confidence: 98,
      winner: 'Green'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">A/B Test Results</h1>
          <p className="text-gray-600 mt-1">Track and analyze experiment performance</p>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {tests.map((test) => (
            <div key={test.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{test.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {test.status === 'running' ? 'Currently Running' : 'Completed'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Statistical Confidence</p>
                    <p className="text-2xl font-bold text-green-600">{test.confidence}%</p>
                  </div>
                  {test.status === 'running' && (
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                      Declare Winner
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {test.variants.map((variant) => (
                  <div
                    key={variant.name}
                    className={`p-4 rounded-lg border-2 ${
                      variant.name === test.winner
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{variant.name}</h4>
                      {variant.name === test.winner && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Users</span>
                        <span className="font-medium text-gray-900">{variant.users.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Conversions</span>
                        <span className="font-medium text-gray-900">{variant.conversions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Conversion Rate</span>
                        <span className="text-lg font-bold text-indigo-600">{variant.rate}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
