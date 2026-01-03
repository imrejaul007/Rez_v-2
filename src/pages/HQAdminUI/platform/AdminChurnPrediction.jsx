import { useState } from 'react';
import { AlertTriangle, Users, TrendingDown, Shield, Mail } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/admin/churn/predictions
// Backend API: GET /api/admin/churn/at-risk-users
// Backend API: POST /api/admin/churn/intervention

export default function AdminChurnPrediction() {
  const atRiskUsers = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', churnScore: 85, lastActive: '15 days ago', spent: 2340 },
    { id: 2, name: 'Priya Patel', email: 'priya@example.com', churnScore: 78, lastActive: '12 days ago', spent: 4560 },
    { id: 3, name: 'Amit Kumar', email: 'amit@example.com', churnScore: 72, lastActive: '10 days ago', spent: 1890 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Churn Prediction</h1>
              <p className="text-gray-600 mt-1">Identify and prevent customer churn</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-sm p-6 border border-red-200">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-red-700 font-medium">High Risk</p>
                <p className="text-2xl font-bold text-red-900">245</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-sm p-6 border border-yellow-200">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-yellow-700 font-medium">Medium Risk</p>
                <p className="text-2xl font-bold text-yellow-900">567</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm p-6 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700 font-medium">Retained</p>
                <p className="text-2xl font-bold text-green-900">1,234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">At-Risk Users</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {atRiskUsers.map((user) => (
              <div key={user.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-500 mt-1">Last active: {user.lastActive} • Spent: ₹{user.spent}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Churn Score</p>
                      <p className={`text-2xl font-bold ${user.churnScore >= 80 ? 'text-red-600' : 'text-yellow-600'}`}>
                        {user.churnScore}%
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
