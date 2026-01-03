import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Activity, Dumbbell, Heart, Users } from 'lucide-react';

function FitnessCategory() {
  const navigate = useNavigate();
  const { category } = useParams();

  const categoryData = {
    strength: { name: 'Strength Training', icon: Dumbbell, color: 'from-orange-600 to-red-600', items: 45 },
    cardio: { name: 'Cardio Workouts', icon: Heart, color: 'from-red-600 to-pink-600', items: 60 },
    yoga: { name: 'Yoga & Flexibility', icon: Activity, color: 'from-purple-600 to-pink-600', items: 35 },
    group: { name: 'Group Classes', icon: Users, color: 'from-blue-600 to-cyan-600', items: 50 }
  };

  const current = categoryData[category] || categoryData.strength;
  const Icon = current.icon;

  const workouts = [
    { id: 1, name: `${current.name} - Beginner`, duration: '30 mins', calories: 200, instructor: 'Rahul Sharma', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
    { id: 2, name: `${current.name} - Advanced`, duration: '45 mins', calories: 350, instructor: 'Priya Verma', image: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className={`sticky top-0 z-10 bg-gradient-to-r ${current.color}`}>
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Icon className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">{current.name}</h1></div><p className="text-xs text-white/80">{current.items} workouts available</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {workouts.map(workout => (
          <div key={workout.id} onClick={() => navigate(`/fitness/workout/${workout.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-orange-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={workout.image} alt={workout.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">{workout.name}</h3>
                <p className="text-sm text-orange-600 dark:text-orange-400 mb-2">with {workout.instructor}</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{workout.duration}</span>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{workout.calories} cal</span>
                </div>
              </div>
              <button className="self-center px-4 py-2 rounded-lg bg-orange-500 text-white font-bold text-sm">Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessCategory;
