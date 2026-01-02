import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Lock, CheckCircle } from 'lucide-react';

function AchievementsList() {
  const navigate = useNavigate();
  const achievements = [
    { id: 1, title: 'First Order', desc: 'Complete your first order', points: 100, unlocked: true, icon: '🎉' },
    { id: 2, title: 'Shopping Spree', desc: 'Place 10 orders', points: 500, unlocked: true, progress: 10, total: 10, icon: '🛍️' },
    { id: 3, title: 'Big Spender', desc: 'Spend ₹10,000 total', points: 1000, unlocked: false, progress: 7500, total: 10000, icon: '💰' },
    { id: 4, title: 'Review Master', desc: 'Write 20 reviews', points: 300, unlocked: false, progress: 12, total: 20, icon: '⭐' },
    { id: 5, title: 'Referral King', desc: 'Refer 5 friends', points: 750, unlocked: false, progress: 3, total: 5, icon: '👑' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><Trophy className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Achievements</h1><p className="text-sm text-gray-600">{achievements.filter(a => a.unlocked).length} of {achievements.length} unlocked</p></div></div>
        </motion.div>
        <div className="space-y-4">
          {achievements.map((achievement, i) => (
            <motion.div key={achievement.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`bg-white rounded-2xl shadow-lg p-6 ${achievement.unlocked ? 'border-2 border-purple-500' : ''}`}>
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${achievement.unlocked ? 'bg-purple-100' : 'bg-gray-100'}`}>
                  {achievement.unlocked ? achievement.icon : <Lock className="w-6 h-6 text-gray-400" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div><h3 className="font-bold text-gray-900 text-lg">{achievement.title}</h3><p className="text-sm text-gray-600">{achievement.desc}</p></div>
                    {achievement.unlocked && <CheckCircle className="w-6 h-6 text-green-600" />}
                  </div>
                  {!achievement.unlocked && achievement.progress !== undefined && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Progress</span><span className="font-medium text-gray-900">{achievement.progress} / {achievement.total}</span></div>
                      <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(achievement.progress / achievement.total) * 100}%` }} /></div>
                    </div>
                  )}
                  <p className="text-purple-600 font-bold mt-2">+{achievement.points} points</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AchievementsList;
