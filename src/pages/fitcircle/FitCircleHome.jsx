import React, { useState } from 'react';
import {
  Activity, Heart, Flame, Trophy, Target, ChevronRight,
  Dumbbell, Timer, Users, Star, Play, Calendar, TrendingUp,
  Award, Zap, MapPin
} from 'lucide-react';

// FitCircle: Health & Fitness Vertical
// Backend API: GET /api/fitcircle/home
// Backend API: GET /api/fitcircle/activities
// Backend API: GET /api/fitcircle/challenges

const FitCircleHome = () => {
  const [activeTab, setActiveTab] = useState('today');

  const dailyStats = {
    steps: 7842,
    stepsGoal: 10000,
    calories: 1840,
    caloriesGoal: 2200,
    water: 6,
    waterGoal: 8,
    activeMinutes: 45,
    activeGoal: 60,
    coinsEarned: 125
  };

  const challenges = [
    {
      id: 1,
      title: "10K Steps Challenge",
      description: "Walk 10,000 steps for 7 days",
      participants: 2340,
      progress: 5,
      total: 7,
      reward: 500,
      icon: "🚶",
      endsIn: "2 days"
    },
    {
      id: 2,
      title: "Early Bird Workout",
      description: "Complete 5 AM workouts",
      participants: 890,
      progress: 3,
      total: 5,
      reward: 300,
      icon: "🌅",
      endsIn: "5 days"
    },
    {
      id: 3,
      title: "Hydration Hero",
      description: "Drink 8 glasses daily for a week",
      participants: 1560,
      progress: 4,
      total: 7,
      reward: 200,
      icon: "💧",
      endsIn: "3 days"
    }
  ];

  const nearbyGyms = [
    {
      id: 1,
      name: "FitZone Gym",
      rating: 4.8,
      distance: "0.5 km",
      image: "🏋️",
      cashback: "15%",
      offer: "First month 50% off"
    },
    {
      id: 2,
      name: "Gold's Gym",
      rating: 4.6,
      distance: "1.2 km",
      image: "💪",
      cashback: "10%",
      offer: "Free trainer session"
    },
    {
      id: 3,
      name: "Yoga Studio",
      rating: 4.9,
      distance: "0.8 km",
      image: "🧘",
      cashback: "20%",
      offer: "Trial class free"
    }
  ];

  const workoutPlans = [
    {
      id: 1,
      title: "Full Body Burn",
      duration: "30 min",
      level: "Intermediate",
      calories: 350,
      coins: 50,
      image: "🔥"
    },
    {
      id: 2,
      title: "Morning Yoga",
      duration: "20 min",
      level: "Beginner",
      calories: 150,
      coins: 30,
      image: "🧘"
    },
    {
      id: 3,
      title: "HIIT Cardio",
      duration: "25 min",
      level: "Advanced",
      calories: 400,
      coins: 60,
      image: "⚡"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "FitRaj", avatar: "🏆", coins: 2450, steps: 125000 },
    { rank: 2, name: "RunnerPriya", avatar: "🥈", coins: 2120, steps: 118000 },
    { rank: 3, name: "GymBro", avatar: "🥉", coins: 1890, steps: 105000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">FitCircle</h1>
            <p className="text-green-100 text-sm">Health & Fitness</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
            <Flame className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-medium">{dailyStats.coinsEarned}🪙</span>
          </div>
        </div>

        {/* Daily Progress Ring */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Steps */}
                <div>
                  <div className="flex items-center gap-2 text-green-100 text-sm mb-1">
                    <Activity className="w-4 h-4" />
                    Steps
                  </div>
                  <p className="text-2xl font-bold text-white">{dailyStats.steps.toLocaleString()}</p>
                  <div className="h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${(dailyStats.steps / dailyStats.stepsGoal) * 100}%` }}
                    />
                  </div>
                  <p className="text-green-200 text-xs mt-1">/ {dailyStats.stepsGoal.toLocaleString()}</p>
                </div>

                {/* Calories */}
                <div>
                  <div className="flex items-center gap-2 text-green-100 text-sm mb-1">
                    <Flame className="w-4 h-4" />
                    Calories
                  </div>
                  <p className="text-2xl font-bold text-white">{dailyStats.calories}</p>
                  <div className="h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-orange-400 rounded-full"
                      style={{ width: `${(dailyStats.calories / dailyStats.caloriesGoal) * 100}%` }}
                    />
                  </div>
                  <p className="text-green-200 text-xs mt-1">/ {dailyStats.caloriesGoal}</p>
                </div>

                {/* Water */}
                <div>
                  <div className="flex items-center gap-2 text-green-100 text-sm mb-1">
                    <span>💧</span>
                    Water
                  </div>
                  <p className="text-2xl font-bold text-white">{dailyStats.water}</p>
                  <div className="h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${(dailyStats.water / dailyStats.waterGoal) * 100}%` }}
                    />
                  </div>
                  <p className="text-green-200 text-xs mt-1">/ {dailyStats.waterGoal} glasses</p>
                </div>

                {/* Active Minutes */}
                <div>
                  <div className="flex items-center gap-2 text-green-100 text-sm mb-1">
                    <Timer className="w-4 h-4" />
                    Active
                  </div>
                  <p className="text-2xl font-bold text-white">{dailyStats.activeMinutes}</p>
                  <div className="h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-purple-400 rounded-full"
                      style={{ width: `${(dailyStats.activeMinutes / dailyStats.activeGoal) * 100}%` }}
                    />
                  </div>
                  <p className="text-green-200 text-xs mt-1">/ {dailyStats.activeGoal} min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="grid grid-cols-4 gap-3">
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-xs text-gray-600">Workout</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xs text-gray-600">Track</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-xs text-gray-600">Challenges</span>
            </button>
            <button className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-xs text-gray-600">Gyms</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Active Challenges
          </h2>
          <button className="text-green-600 text-sm flex items-center gap-1">
            Join More <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                  {challenge.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                      <p className="text-sm text-gray-500">{challenge.description}</p>
                    </div>
                    <span className="text-yellow-600 font-bold text-sm">+{challenge.reward}🪙</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>{challenge.progress}/{challenge.total} days</span>
                      <span>Ends in {challenge.endsIn}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Users className="w-3 h-3" />
                    {challenge.participants.toLocaleString()} participants
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workout Plans */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-green-500" />
            Quick Workouts
          </h2>
          <button className="text-green-600 text-sm">Browse All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {workoutPlans.map((workout) => (
            <div key={workout.id} className="flex-shrink-0 w-40 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-24 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-4xl relative">
                {workout.image}
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm">{workout.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Timer className="w-3 h-3" /> {workout.duration}
                  </span>
                  <span>•</span>
                  <span>{workout.level}</span>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-orange-600 flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {workout.calories} cal
                  </span>
                  <span className="text-yellow-600">+{workout.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Gyms */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-500" />
            Nearby Gyms & Studios
          </h2>
          <button className="text-green-600 text-sm">Map View</button>
        </div>
        <div className="space-y-3">
          {nearbyGyms.map((gym) => (
            <div key={gym.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl">
                {gym.image}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">{gym.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {gym.rating}
                      </span>
                      <span>•</span>
                      <span>{gym.distance}</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                    {gym.cashback} back
                  </span>
                </div>
                <p className="text-xs text-orange-600 mt-2">{gym.offer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Leaderboard */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Weekly Leaderboard
            </h3>
            <button className="text-green-100 text-sm">View All</button>
          </div>
          <div className="space-y-2">
            {leaderboard.map((user) => (
              <div key={user.rank} className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-3">
                <span className="text-xl">{user.avatar}</span>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{user.name}</p>
                  <p className="text-green-200 text-xs">{user.steps.toLocaleString()} steps</p>
                </div>
                <span className="text-yellow-300 font-bold">{user.coins}🪙</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitCircleHome;
