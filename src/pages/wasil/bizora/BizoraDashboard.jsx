import React from 'react';
import { TrendingUp, FileText, AlertCircle, CheckCircle } from 'lucide-react';

// Bizora Dashboard
// Backend API: GET /api/wasil/bizora/dashboard

const BizoraDashboard = () => {
  const stats = {
    activeServices: 3,
    pendingTasks: 2,
    completedThisMonth: 12,
    savingsThisYear: 45000
  };

  const services = [
    { name: 'GST Filing', status: 'active', nextDue: 'Feb 10', icon: '📄' },
    { name: 'Accounting', status: 'active', nextDue: 'Feb 1', icon: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 pt-6 pb-6">
        <h1 className="text-xl font-bold text-white mb-4">Business Dashboard</h1>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">Active Services</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.activeServices}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">Pending Tasks</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.pendingTasks}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">Completed</p>
            <p className="text-2xl font-bold text-white mt-1">{stats.completedThisMonth}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3">
            <p className="text-white/80 text-xs">Savings</p>
            <p className="text-2xl font-bold text-white mt-1">₹{stats.savingsThisYear.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Active Services</h2>
        <div className="space-y-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-500">Next due: {service.nextDue}</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BizoraDashboard;
