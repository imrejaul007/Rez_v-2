import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Flame, TrendingUp, Award, Target, Calendar } from 'lucide-react';

function FitnessStreak() {
  const navigate = useNavigate();
  const currentStreak = 12;
  const longestStreak = 45;
  const totalWorkouts = 156;

  const weekData = [
    { day: 'Mon', completed: true, date: '18' },
    { day: 'Tue', completed: true, date: '19' },
    { day: 'Wed', completed: true, date: '20' },
    { day: 'Thu', completed: true, date: '21' },
    { day: 'Fri', completed: true, date: '22' },
    { day: 'Sat', completed: false, date: '23' },
    { day: 'Sun', completed: false, date: '24' }
  ];

  const achievements = [
    { name: '7 Day Warrior', reward: 100, unlocked: true, icon: '🔥' },
    { name: '30 Day Legend', reward: 500, unlocked: false, icon: '⚡' },
    { name: '100 Workouts', reward: 1000, unlocked: true, icon: '💪' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Flame className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Workout Streak</h1></div><p className="text-xs text-white/80">Keep the fire burning</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center">
          <Flame className="w-20 h-20 mx-auto mb-4" />
          <p className="text-sm opacity-90 mb-2">Current Streak</p>
          <p className="text-6xl font-bold mb-4">{currentStreak}</p>
          <p className="text-lg">days in a row!</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-rez-gray-200 dark:border-dark-700 text-center">
            <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Longest</p>
            <p className="text-2xl font-bold text-rez-navy dark:text-white">{longestStreak}</p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-rez-gray-200 dark:border-dark-700 text-center">
            <Target className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Total</p>
            <p className="text-2xl font-bold text-rez-navy dark:text-white">{totalWorkouts}</p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-rez-gray-200 dark:border-dark-700 text-center">
            <Calendar className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">This Week</p>
            <p className="text-2xl font-bold text-rez-navy dark:text-white">5/7</p>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">This Week</h3>
          <div className="flex justify-between gap-2">
            {weekData.map((day, i) => (
              <div key={i} className="flex-1 text-center">
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{day.day}</p>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${day.completed ? 'bg-emerald-500 text-white' : 'bg-rez-gray-200 dark:bg-dark-700 text-rez-gray-400'}`}>
                  <p className="text-sm font-bold">{day.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><Award className="w-5 h-5 text-amber-500" />Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, i) => (
              <div key={i} className={`p-3 rounded-xl ${achievement.unlocked ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800' : 'bg-rez-gray-100 dark:bg-dark-700'}`}>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-rez-navy dark:text-white">{achievement.name}</h4>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn ₹{achievement.reward} cashback</p>
                  </div>
                  {achievement.unlocked && <Award className="w-5 h-5 text-amber-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessStreak;
