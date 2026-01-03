import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Calendar, Target } from 'lucide-react';

function FitnessChallenges() {
  const navigate = useNavigate();
  const challenges = [
    { id: 1, name: '30-Day Plank Challenge', participants: 1250, duration: '30 days', reward: 500, difficulty: 'Medium', startDate: '2024-02-01', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400', category: 'Core Strength' },
    { id: 2, name: '10K Steps Daily', participants: 2340, duration: '14 days', reward: 300, difficulty: 'Easy', startDate: '2024-02-05', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400', category: 'Walking' },
    { id: 3, name: 'Weight Loss Sprint', participants: 890, duration: '60 days', reward: 1000, difficulty: 'Hard', startDate: '2024-02-10', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', category: 'Weight Loss' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Medium': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
      case 'Hard': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Fitness Challenges</h1></div><p className="text-xs text-white/80">Join & earn rewards</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {challenges.map(challenge => (
          <div key={challenge.id} onClick={() => navigate(`/fitness/challenge/${challenge.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 transition-all cursor-pointer">
            <div className="relative h-40">
              <img src={challenge.image} alt={challenge.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center gap-1"><Trophy className="w-3 h-3" />₹{challenge.reward}</div>
              <div className="absolute bottom-3 left-3">
                <span className={`px-2 py-1 rounded-md ${getDifficultyColor(challenge.difficulty)} text-xs font-bold`}>{challenge.difficulty}</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">{challenge.category}</p>
              <h3 className="font-bold text-rez-navy dark:text-white mb-3">{challenge.name}</h3>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-rez-gray-400" /><div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Joined</p><p className="text-sm font-bold text-rez-navy dark:text-white">{challenge.participants}</p></div></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-rez-gray-400" /><div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Duration</p><p className="text-sm font-bold text-rez-navy dark:text-white">{challenge.duration}</p></div></div>
                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-rez-gray-400" /><div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Reward</p><p className="text-sm font-bold text-purple-600 dark:text-purple-400">₹{challenge.reward}</p></div></div>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm">Join Challenge</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessChallenges;
