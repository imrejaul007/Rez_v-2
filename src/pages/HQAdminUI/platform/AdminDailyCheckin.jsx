import { useState } from 'react';
import { Calendar, Award, Flame } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminDailyCheckin() {
  const [rewards] = useState([
    { day: 1, coins: 10 }, { day: 2, coins: 15 }, { day: 3, coins: 20 }, { day: 7, coins: 100 }
  ]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg"><Calendar className="w-8 h-8" /></div>
            <div><h1 className="text-3xl font-bold">Daily Check-in Rewards</h1><p className="text-purple-100 mt-1">Configure streak rewards</p></div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-6">Reward Schedule</h2>
          <div className="space-y-3">
            {rewards.map((r) => (
              <div key={r.day} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3"><Flame className="w-5 h-5 text-purple-600" /><span className="font-medium">Day {r.day}</span></div>
                <span className="text-lg font-bold text-purple-600">{r.coins} Coins</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}