import React, { useState } from 'react';
import {
  Trophy, Users, Clock, Flame, Star, Target, ChevronRight,
  Medal, Crown, Zap, Calendar, Award, TrendingUp, CheckCircle2
} from 'lucide-react';

// FitCircle Challenges: Fitness Challenges & Competitions
// Backend API: GET /api/fitcircle/challenges
// Backend API: GET /api/fitcircle/challenges/:id
// Backend API: POST /api/fitcircle/challenges/:id/join
// Backend API: GET /api/fitcircle/challenges/:id/leaderboard

const FitCircleChallenges = () => {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', name: 'Active' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'completed', name: 'Completed' }
  ];

  const featuredChallenge = {
    id: 0,
    title: "New Year Fitness Challenge",
    description: "Complete 30 workouts in January",
    image: "🏆",
    participants: 8450,
    prize: 5000,
    daysLeft: 28,
    progress: 12,
    total: 30,
    joined: true
  };

  const activeChallenges = [
    {
      id: 1,
      title: "10K Steps Daily",
      type: "Individual",
      category: "Walking",
      icon: "👟",
      participants: 2340,
      daysLeft: 5,
      reward: 200,
      progress: 7,
      total: 7,
      streak: 3
    },
    {
      id: 2,
      title: "Morning Yoga Week",
      type: "Team",
      category: "Yoga",
      icon: "🧘",
      participants: 890,
      daysLeft: 4,
      reward: 150,
      progress: 3,
      total: 7,
      teamName: "Zen Warriors"
    },
    {
      id: 3,
      title: "HIIT Warrior",
      type: "Individual",
      category: "HIIT",
      icon: "⚡",
      participants: 1560,
      daysLeft: 12,
      reward: 300,
      progress: 4,
      total: 10
    },
    {
      id: 4,
      title: "Strength Builder",
      type: "Individual",
      category: "Strength",
      icon: "💪",
      participants: 2100,
      daysLeft: 8,
      reward: 250,
      progress: 6,
      total: 12
    }
  ];

  const upcomingChallenges = [
    {
      id: 5,
      title: "Valentine's Couple Workout",
      type: "Team",
      category: "Partner",
      icon: "💕",
      participants: 560,
      startsIn: "12 days",
      reward: 400,
      spots: 200
    },
    {
      id: 6,
      title: "March Marathon Prep",
      type: "Individual",
      category: "Running",
      icon: "🏃",
      participants: 1230,
      startsIn: "Feb 1",
      reward: 500,
      spots: "Unlimited"
    }
  ];

  const completedChallenges = [
    {
      id: 7,
      title: "Holiday Burn",
      category: "Mixed",
      icon: "🔥",
      rank: 45,
      totalParticipants: 3200,
      earned: 350,
      completedDate: "Dec 31"
    },
    {
      id: 8,
      title: "Plank Challenge",
      category: "Core",
      icon: "🎯",
      rank: 12,
      totalParticipants: 890,
      earned: 200,
      completedDate: "Dec 25"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah K.", avatar: "👩", points: 4850, badge: "🥇" },
    { rank: 2, name: "Mike T.", avatar: "👨", points: 4520, badge: "🥈" },
    { rank: 3, name: "Priya S.", avatar: "👩‍🦱", points: 4210, badge: "🥉" },
    { rank: 4, name: "You", avatar: "😊", points: 3890, isUser: true },
    { rank: 5, name: "Raj M.", avatar: "🧔", points: 3650 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Challenges</h1>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-medium text-sm">Rank #156</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-purple-200 text-xs">Completed</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">4</p>
            <p className="text-purple-200 text-xs">Active</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">2.8K</p>
            <p className="text-purple-200 text-xs">Coins Won</p>
          </div>
        </div>
      </div>

      {/* Featured Challenge */}
      <div className="px-4 -mt-2">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl opacity-20">
            {featuredChallenge.image}
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <span className="bg-white/30 text-white text-xs font-bold px-2 py-1 rounded-full">
                FEATURED
              </span>
              <span className="bg-white/30 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Users className="w-3 h-3" />
                {featuredChallenge.participants.toLocaleString()} joined
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mt-2">{featuredChallenge.title}</h2>
            <p className="text-yellow-100 text-sm">{featuredChallenge.description}</p>

            {featuredChallenge.joined && (
              <div className="mt-3">
                <div className="flex justify-between text-xs text-white/80 mb-1">
                  <span>Your Progress</span>
                  <span>{featuredChallenge.progress}/{featuredChallenge.total} workouts</span>
                </div>
                <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${(featuredChallenge.progress / featuredChallenge.total) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredChallenge.daysLeft} days left
                </span>
                <span className="text-yellow-200 font-bold">
                  {featuredChallenge.prize}🪙 prize pool
                </span>
              </div>
              <button className={`px-4 py-2 rounded-xl font-medium text-sm ${
                featuredChallenge.joined
                  ? 'bg-white/30 text-white'
                  : 'bg-white text-orange-600'
              }`}>
                {featuredChallenge.joined ? 'View Progress' : 'Join Now'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-6">
        <div className="flex gap-2 bg-gray-200 p-1 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Challenges */}
      {activeTab === 'active' && (
        <div className="px-4 mt-4 space-y-3">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-3xl">
                  {challenge.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          challenge.type === 'Team'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {challenge.type}
                        </span>
                        <span className="text-xs text-gray-500">{challenge.category}</span>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-bold text-sm">+{challenge.reward}🪙</span>
                  </div>

                  {challenge.teamName && (
                    <p className="text-xs text-blue-600 mt-1">Team: {challenge.teamName}</p>
                  )}

                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{challenge.progress}/{challenge.total} completed</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {challenge.daysLeft} days left
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  {challenge.streak && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-orange-600">
                      <Flame className="w-3 h-3" />
                      <span>{challenge.streak} day streak!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upcoming Challenges */}
      {activeTab === 'upcoming' && (
        <div className="px-4 mt-4 space-y-3">
          {upcomingChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-3xl">
                  {challenge.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          challenge.type === 'Team'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {challenge.type}
                        </span>
                        <span className="text-xs text-gray-500">{challenge.category}</span>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-bold text-sm">+{challenge.reward}🪙</span>
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Starts: {challenge.startsIn}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {challenge.participants.toLocaleString()} interested
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-400">
                      {typeof challenge.spots === 'number' ? `${challenge.spots} spots left` : challenge.spots}
                    </span>
                    <button className="bg-purple-500 text-white text-xs px-4 py-1.5 rounded-full">
                      Remind Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Completed Challenges */}
      {activeTab === 'completed' && (
        <div className="px-4 mt-4 space-y-3">
          {completedChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-3xl relative">
                  {challenge.icon}
                  <CheckCircle2 className="w-5 h-5 text-green-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{challenge.title}</h3>
                      <p className="text-xs text-gray-500">Completed {challenge.completedDate}</p>
                    </div>
                    <span className="text-green-600 font-bold text-sm">+{challenge.earned}🪙</span>
                  </div>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 bg-purple-100 px-2 py-1 rounded-full">
                      <Trophy className="w-3 h-3 text-purple-600" />
                      <span className="text-xs text-purple-700 font-medium">
                        Rank #{challenge.rank} of {challenge.totalParticipants.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mini Leaderboard */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-300" />
              Top Challengers
            </h3>
            <button className="text-purple-200 text-sm">Full Board</button>
          </div>

          <div className="space-y-2">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  user.isUser ? 'bg-white/20' : ''
                }`}
              >
                <span className="w-6 text-center font-bold text-white">
                  {user.badge || `#${user.rank}`}
                </span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">
                  {user.avatar}
                </div>
                <span className={`flex-1 text-sm ${user.isUser ? 'text-white font-bold' : 'text-white/80'}`}>
                  {user.name}
                </span>
                <span className="text-yellow-300 text-sm font-medium">{user.points.toLocaleString()} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitCircleChallenges;
