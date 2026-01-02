import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Activity, Target, Trophy, TrendingUp, Zap, Heart,
  Flame, Clock, Calendar, Award, Sparkles, Play, Check, Plus,
  ChevronRight, BarChart3, Dumbbell, Footprints, Apple
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIFitnessCoach = () => {
  const navigate = useNavigate();

  const [userStats, setUserStats] = useState({
    age: 28,
    weight: 75,
    height: 175,
    goal: 'weight-loss',
    activityLevel: 'moderate'
  });

  const [todayStats, setTodayStats] = useState({
    steps: 8234,
    stepsGoal: 10000,
    calories: 420,
    caloriesGoal: 500,
    activeMinutes: 45,
    activeMinutesGoal: 60,
    water: 6,
    waterGoal: 8
  });

  const [weeklyProgress, setWeeklyProgress] = useState([
    { day: 'Mon', value: 85, completed: true },
    { day: 'Tue', value: 92, completed: true },
    { day: 'Wed', value: 78, completed: true },
    { day: 'Thu', value: 88, completed: true },
    { day: 'Fri', value: 95, completed: true },
    { day: 'Sat', value: 70, completed: false },
    { day: 'Sun', value: 0, completed: false }
  ]);

  const [workoutPlan, setWorkoutPlan] = useState([
    {
      id: 1,
      name: 'Morning Cardio',
      type: 'cardio',
      duration: 30,
      calories: 250,
      difficulty: 'moderate',
      exercises: 5,
      completed: false,
      time: '7:00 AM'
    },
    {
      id: 2,
      name: 'Upper Body Strength',
      type: 'strength',
      duration: 45,
      calories: 180,
      difficulty: 'hard',
      exercises: 8,
      completed: false,
      time: '6:00 PM'
    },
    {
      id: 3,
      name: 'Evening Yoga',
      type: 'flexibility',
      duration: 20,
      calories: 80,
      difficulty: 'easy',
      exercises: 6,
      completed: false,
      time: '8:00 PM'
    }
  ]);

  const [aiInsights, setAiInsights] = useState([
    {
      id: 1,
      type: 'motivation',
      title: 'Great Progress!',
      description: 'You\'re 85% consistent this week. Keep up the momentum!',
      icon: Trophy,
      color: 'green'
    },
    {
      id: 2,
      type: 'suggestion',
      title: 'Increase Intensity',
      description: 'Your body has adapted. Try increasing workout intensity by 10%.',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      id: 3,
      type: 'rest',
      title: 'Rest Day Recommended',
      description: 'Based on your activity, consider taking Sunday as a rest day.',
      icon: Heart,
      color: 'purple'
    }
  ]);

  const [achievements, setAchievements] = useState([
    { id: 1, title: '7 Day Streak', icon: '🔥', unlocked: true, date: 'Jan 1' },
    { id: 2, title: '50K Steps', icon: '👟', unlocked: true, date: 'Dec 28' },
    { id: 3, title: '100 Workouts', icon: '💪', unlocked: false, progress: 78 }
  ]);

  // API Comment: GET /api/ai/fitness/analysis
  // ML Model: Activity pattern analysis, form detection via camera
  // Response: { insights: [], recommendations: [], riskFactors: [] }
  const getFitnessAnalysis = async () => {
    // Get AI fitness analysis
  };

  // API Comment: POST /api/ai/fitness/workout-plan
  // Payload: { userProfile: {}, goals: {}, equipment: [], duration: number }
  // ML Model: Personalized workout generation based on fitness level
  // Response: { plan: [], alternatives: [], estimatedCalories: number }
  const generateWorkoutPlan = async () => {
    // Generate personalized workout plan
  };

  // API Comment: POST /api/ai/fitness/form-check
  // Payload: { exercise: string, videoFrames: [], pose: {} }
  // ML Model: Pose estimation and form correction using computer vision
  // Response: { formScore: number, corrections: [], riskAreas: [] }
  const checkExerciseForm = async () => {
    // AI-powered form checking
  };

  // API Comment: GET /api/ai/fitness/predictions
  // ML Model: Progress prediction using historical data
  // Response: { goalCompletion: date, milestones: [], confidence: number }
  const predictProgress = async () => {
    // Predict when goals will be achieved
  };

  const stepsPercentage = (todayStats.steps / todayStats.stepsGoal) * 100;
  const caloriesPercentage = (todayStats.calories / todayStats.caloriesGoal) * 100;
  const activeMinutesPercentage = (todayStats.activeMinutes / todayStats.activeMinutesGoal) * 100;
  const waterPercentage = (todayStats.water / todayStats.waterGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-6 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Fitness Coach</h1>
            <p className="text-xs text-green-100">Your personal training companion</p>
          </div>
          <Sparkles className="w-6 h-6" />
        </div>

        {/* Today's Summary */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Today's Activity</h2>
            <span className="text-xs text-green-100">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Footprints className="w-4 h-4" />
                <span className="text-xs">Steps</span>
              </div>
              <p className="text-xl font-bold">{todayStats.steps.toLocaleString()}</p>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
                <div
                  className="h-full bg-green-300 rounded-full"
                  style={{ width: `${Math.min(stepsPercentage, 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-4 h-4" />
                <span className="text-xs">Calories</span>
              </div>
              <p className="text-xl font-bold">{todayStats.calories}</p>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
                <div
                  className="h-full bg-orange-300 rounded-full"
                  style={{ width: `${Math.min(caloriesPercentage, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-green-600" />
          <h2 className="font-semibold text-gray-900">AI Insights</h2>
        </div>

        <div className="space-y-2">
          {aiInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.id}
                className={`bg-gradient-to-r ${
                  insight.color === 'green'
                    ? 'from-green-50 to-emerald-50 border-green-200'
                    : insight.color === 'blue'
                    ? 'from-blue-50 to-cyan-50 border-blue-200'
                    : 'from-purple-50 to-pink-50 border-purple-200'
                } rounded-xl p-3 border`}
              >
                <div className="flex gap-3">
                  <Icon
                    className={`w-5 h-5 ${
                      insight.color === 'green'
                        ? 'text-green-600'
                        : insight.color === 'blue'
                        ? 'text-blue-600'
                        : 'text-purple-600'
                    }`}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{insight.title}</h3>
                    <p className="text-xs text-gray-600">{insight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Weekly Progress</h2>
          <button className="text-sm text-green-600 font-medium">View All</button>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <div className="flex items-center justify-between mb-4">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-500">{day.day}</span>
                <div className="relative w-8 h-24 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute bottom-0 w-full rounded-full ${
                      day.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    style={{ height: `${day.value}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-900">{day.value}%</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Weekly Average</span>
              <span className="font-semibold text-green-600">86%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Workout Plan */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Today's Workouts</h2>
          <button className="flex items-center gap-1 text-sm text-green-600 font-medium">
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {workoutPlan.map((workout) => (
            <div
              key={workout.id}
              className={`bg-white rounded-xl p-4 border ${
                workout.completed ? 'border-green-200 bg-green-50/50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-3 rounded-xl ${
                  workout.type === 'cardio'
                    ? 'bg-orange-100'
                    : workout.type === 'strength'
                    ? 'bg-blue-100'
                    : 'bg-purple-100'
                }`}>
                  {workout.type === 'cardio' && <Activity className="w-6 h-6 text-orange-600" />}
                  {workout.type === 'strength' && <Dumbbell className="w-6 h-6 text-blue-600" />}
                  {workout.type === 'flexibility' && <Heart className="w-6 h-6 text-purple-600" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{workout.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{workout.time}</p>
                    </div>
                    {workout.completed ? (
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        <Check className="w-3 h-3" />
                        <span className="text-xs font-medium">Done</span>
                      </div>
                    ) : (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        workout.difficulty === 'easy'
                          ? 'bg-green-100 text-green-700'
                          : workout.difficulty === 'moderate'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {workout.difficulty}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      <span>{workout.calories} cal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      <span>{workout.exercises} exercises</span>
                    </div>
                  </div>

                  {!workout.completed && (
                    <button className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Start Workout
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Goals */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Daily Goals</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-900">
                {todayStats.activeMinutes}/{todayStats.activeMinutesGoal}
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Active Minutes</p>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${Math.min(activeMinutesPercentage, 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center justify-between mb-2">
              <Apple className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-semibold text-gray-900">
                {todayStats.water}/{todayStats.waterGoal}
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Water Glasses</p>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-full bg-cyan-500 rounded-full"
                style={{ width: `${Math.min(waterPercentage, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Achievements</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-white rounded-xl p-3 border text-center ${
                achievement.unlocked ? 'border-yellow-200' : 'border-gray-200 opacity-60'
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <p className="text-xs font-semibold text-gray-900 mb-1">{achievement.title}</p>
              {achievement.unlocked ? (
                <p className="text-xs text-gray-500">{achievement.date}</p>
              ) : (
                <p className="text-xs text-green-600">{achievement.progress}%</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-green-200 rounded-xl hover:border-green-400 transition-all">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-900">Statistics</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-green-200 rounded-xl hover:border-green-400 transition-all">
            <Target className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-900">Set Goals</span>
          </button>
        </div>
      </div>

      <BottomNavManager currentPage="profile" />
    </div>
  );
};

export default AIFitnessCoach;
