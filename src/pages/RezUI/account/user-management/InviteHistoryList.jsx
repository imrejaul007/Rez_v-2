import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function InviteHistoryList() {
  const invites = [
    { name: 'Rajesh Kumar', date: 'Jan 1, 2025', status: 'Accepted', reward: 500 },
    { name: 'Priya Sharma', date: 'Dec 28, 2024', status: 'Accepted', reward: 500 },
    { name: 'Amit Patel', date: 'Dec 25, 2024', status: 'Pending', reward: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Users size={28} /> Invite History
        </h1>
        <p className="text-gray-600 mb-6">Track your referrals and rewards</p>

        <div className="space-y-3">
          {invites.map((invite, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">{invite.name}</p>
                <p className="text-xs text-gray-600">{invite.date}</p>
                <p className={`text-xs mt-1 font-semibold ${invite.status === 'Accepted' ? 'text-green-600' : 'text-amber-600'}`}>
                  {invite.status}
                </p>
              </div>
              <div className="text-right">
                {invite.reward > 0 && <p className="text-lg font-bold text-green-600">+{invite.reward}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}