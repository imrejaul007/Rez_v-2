import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Zap, CheckCircle, Clock } from 'lucide-react';

function ChallengeCenter() {
  const navigate = useNavigate();
  const challenges = [
    { id: 1, title: 'Daily Check-in', desc: 'Login daily for 7 days', reward: 100, type: 'daily', progress: 5, target: 7, icon: '📅', active: true },
    { id: 2, title: 'First Purchase', desc: 'Make your first purchase', reward: 500, type: 'one-time', completed: true, icon: '🛍️' },
    { id: 3, title: 'Weekend Warrior', desc: 'Order 3 times this weekend', reward: 300, type: 'weekend', progress: 1, target: 3, icon: '⚡', timeLeft: '1d 5h', active: true },
    { id: 4, title: 'Review Writer', desc: 'Write 5 product reviews', reward: 200, type: 'ongoing', progress: 3, target: 5, icon: '⭐', active: true },
    { id: 5, title: 'Social Butterfly', desc: 'Share on 3 social platforms', reward: 150, type: 'one-time', progress: 2, target: 3, icon: '🦋', active: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><Target className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Challenge Center</h1><p className="text-sm text-gray-600">{challenges.filter(c => c.active).length} active challenges</p></div></div>
        </motion.div>
        <div className="space-y-4">
          {challenges.map((challenge, i) => (
            <motion.div key={challenge.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`bg-white rounded-2xl shadow-lg p-6 ${challenge.completed ? 'opacity-75 border-2 border-green-500' : ''}`}>
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${challenge.completed ? 'bg-green-100' : 'bg-purple-100'}`}>{challenge.completed ? <CheckCircle className="w-8 h-8 text-green-600" /> : challenge.icon}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2"><div><h3 className="font-bold text-gray-900 text-lg">{challenge.title}</h3><p className="text-sm text-gray-600">{challenge.desc}</p>{challenge.timeLeft && <div className="flex items-center gap-1 mt-2 text-orange-600"><Clock className="w-4 h-4" /><span className="text-sm font-medium">{challenge.timeLeft} left</span></div>}</div><div className="text-right"><p className="text-purple-600 font-bold">+{challenge.reward}</p><p className="text-xs text-gray-500">points</p></div></div>
                  {challenge.active && !challenge.completed && challenge.progress !== undefined && (
                    <div className="mt-3"><div className="flex justify-between text-sm mb-1"><span className="text-gray-600">Progress</span><span className="font-medium text-gray-900">{challenge.progress} / {challenge.target}</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: `${(challenge.progress / challenge.target) * 100}%` }} /></div></div>
                  )}
                  {challenge.completed && <p className="text-green-600 font-medium mt-2">✓ Completed!</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChallengeCenter;
