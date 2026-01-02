import { useState } from 'react';
import { Brain, TrendingUp, BarChart3, Calendar } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/admin/analytics/predictions
// Backend API: GET /api/admin/analytics/forecasts
// Backend API: POST /api/admin/analytics/train-model

export default function AdminPredictiveAnalytics() {
  const predictions = {
    revenue: { next30Days: 1245000, growth: 18.5, confidence: 92 },
    orders: { next30Days: 15670, growth: 22.3, confidence: 89 },
    newUsers: { next30Days: 3450, growth: 15.7, confidence: 94 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Predictive Analytics</h1>
          <p className="text-gray-600 mt-1">AI-powered business forecasts</p>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-blue-700 font-medium">Revenue Forecast</p>
                <p className="text-2xl font-bold text-blue-900">₹{(predictions.revenue.next30Days / 1000).toFixed(0)}K</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700">Next 30 days</span>
              <span className="text-sm font-medium text-green-600">+{predictions.revenue.growth}%</span>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-blue-700">{predictions.revenue.confidence}% confidence</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-sm p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-purple-700 font-medium">Orders Forecast</p>
                <p className="text-2xl font-bold text-purple-900">{predictions.orders.next30Days.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700">Next 30 days</span>
              <span className="text-sm font-medium text-green-600">+{predictions.orders.growth}%</span>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span className="text-xs text-purple-700">{predictions.orders.confidence}% confidence</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-green-700 font-medium">New Users Forecast</p>
                <p className="text-2xl font-bold text-green-900">{predictions.newUsers.next30Days.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-700">Next 30 days</span>
              <span className="text-sm font-medium text-green-600">+{predictions.newUsers.growth}%</span>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-green-600" />
                <span className="text-xs text-green-700">{predictions.newUsers.confidence}% confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
