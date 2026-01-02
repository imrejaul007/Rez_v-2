import React, { useState } from 'react';
import { Shield, Ban, Plus, Edit, Trash2, ToggleLeft, ToggleRight, AlertTriangle } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminAutoBanRules = () => {
  const rules = [
    { id: 1, name: 'Multiple Fake Reviews', condition: '5+ reviews flagged as fake in 24h', action: 'Ban for 7 days', enabled: true, triggered: 23 },
    { id: 2, name: 'Spam Posting', condition: '10+ posts in 1 hour', action: 'Ban for 3 days', enabled: true, triggered: 45 },
    { id: 3, name: 'Abusive Language', condition: '3+ comments flagged for abuse', action: 'Permanent ban', enabled: true, triggered: 12 },
    { id: 4, name: 'Refund Abuse', condition: '5+ refunds in 30 days', action: 'Ban for 30 days', enabled: false, triggered: 8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Shield className="w-10 h-10 text-red-400" />
            Auto-Ban Rule Configuration
          </h1>
          <p className="text-gray-400">Automated user ban rules and policies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Shield className="w-8 h-8 text-blue-400 mb-2" />
            <div className="text-3xl font-bold text-white">{rules.filter(r => r.enabled).length}</div>
            <div className="text-sm text-blue-400">Active Rules</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Ban className="w-8 h-8 text-red-400 mb-2" />
            <div className="text-3xl font-bold text-white">88</div>
            <div className="text-sm text-red-400">Auto-Bans Today</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mb-2" />
            <div className="text-3xl font-bold text-white">234</div>
            <div className="text-sm text-yellow-400">Warnings Issued</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Shield className="w-8 h-8 text-green-400 mb-2" />
            <div className="text-3xl font-bold text-white">97.8%</div>
            <div className="text-sm text-green-400">Accuracy Rate</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Ban Rules</h2>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create New Rule
            </button>
          </div>

          <div className="space-y-4">
            {rules.map((rule) => (
              <div key={rule.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{rule.name}</h3>
                      <button className="text-gray-400 hover:text-white">
                        {rule.enabled ? <ToggleRight className="w-6 h-6 text-green-400" /> : <ToggleLeft className="w-6 h-6" />}
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Condition:</span>
                        <span className="text-white">{rule.condition}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Action:</span>
                        <span className="text-red-400 font-semibold">{rule.action}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Triggered:</span>
                        <span className="text-yellow-400">{rule.triggered} times (last 30 days)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                      <Trash2 className="w-4 h-4" />
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
};

export default AdminAutoBanRules;
