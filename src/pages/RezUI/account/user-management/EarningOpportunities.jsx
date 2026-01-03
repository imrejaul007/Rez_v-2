import React, { useState } from 'react';
import { Zap, TrendingUp } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function EarningOpportunities() {
  const opportunities = [
    { title: 'Daily Login', reward: 50, status: 'completed' },
    { title: 'Make Purchase', reward: 100, status: 'pending' },
    { title: 'Refer Friend', reward: 500, status: 'pending' },
    { title: 'Write Review', reward: 25, status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Earning Opportunities</h1>
        <div className="space-y-3">
          {opportunities.map((opp, i) => (
            <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-between shadow">
              <div className="flex items-center gap-3">
                <Zap className="text-amber-500" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">{opp.title}</p>
                  <p className={`text-xs ${opp.status === 'completed' ? 'text-green-600' : 'text-gray-500'}`}>
                    {opp.status === 'completed' ? 'Completed' : 'Available'}
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold text-amber-600">+{opp.reward}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg p-4 flex items-center gap-3">
          <TrendingUp size={20} />
          <p className="text-sm">Earn 750 coins this week</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}