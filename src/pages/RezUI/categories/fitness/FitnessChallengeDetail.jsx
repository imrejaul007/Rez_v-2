import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Calendar, Target, CheckCircle } from 'lucide-react';

function FitnessChallengeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const challenge = {
    id: 1,
    name: '30-Day Plank Challenge',
    category: 'Core Strength',
    participants: 1250,
    duration: '30 days',
    reward: 500,
    difficulty: 'Medium',
    startDate: '2024-02-01',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    description: 'Build a strong core with our 30-day plank challenge. Start with 30 seconds and work your way up to 5 minutes!',
    milestones: [
      { day: 1, target: '30 seconds', reward: 0 },
      { day: 7, target: '1 minute', reward: 50 },
      { day: 15, target: '2 minutes', reward: 100 },
      { day: 22, target: '3 minutes', reward: 150 },
      { day: 30, target: '5 minutes', reward: 200 }
    ],
    rules: [
      'Complete daily plank hold as per target',
      'Track your progress daily',
      'Maintain proper form',
      'Share progress to unlock bonus rewards'
    ]
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Challenge</h1></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={challenge.image} alt={challenge.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">{challenge.category}</p>
            <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">{challenge.name}</h2>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">{challenge.description}</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20"><Users className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" /><p className="text-xs text-rez-gray-600 dark:text-gray-400">Participants</p><p className="text-lg font-bold text-rez-navy dark:text-white">{challenge.participants}</p></div>
              <div className="text-center p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20"><Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" /><p className="text-xs text-rez-gray-600 dark:text-gray-400">Duration</p><p className="text-lg font-bold text-rez-navy dark:text-white">{challenge.duration}</p></div>
              <div className="text-center p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20"><Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" /><p className="text-xs text-rez-gray-600 dark:text-gray-400">Reward</p><p className="text-lg font-bold text-purple-600 dark:text-purple-400">₹{challenge.reward}</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-purple-500" />Milestones</h3>
          <div className="space-y-3">
            {challenge.milestones.map((milestone, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-dark-700">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <p className="text-sm font-bold text-purple-600 dark:text-purple-400">D{milestone.day}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-rez-navy dark:text-white">{milestone.target}</p>
                  {milestone.reward > 0 && <p className="text-xs text-purple-600 dark:text-purple-400">+₹{milestone.reward} bonus</p>}
                </div>
                <CheckCircle className="w-5 h-5 text-rez-gray-300 dark:text-gray-600" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Challenge Rules</h3>
          <ul className="space-y-2">
            {challenge.rules.map((rule, i) => (
              <li key={i} className="text-sm text-rez-gray-600 dark:text-gray-400">• {rule}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">Join Challenge</button>
      </div>
    </div>
  );
}

export default FitnessChallengeDetail;
