import { useState } from 'react';
import { Trophy, Clock, Users, TrendingUp, Heart, MessageCircle, Award, Star, Crown, Flame } from 'lucide-react';
import BottomNav from '../../../components/lifestyle/BottomNav';

export default function StyleChallenges() {
  const [activeTab, setActiveTab] = useState('active');
  const [joinedChallenges, setJoinedChallenges] = useState(new Set([1]));

  const activeChallenges = [
    {
      id: 1,
      title: 'Capsule Wardrobe Challenge',
      description: 'Create 7 outfits using only 10 pieces',
      difficulty: 'Medium',
      reward: 500,
      participants: 1247,
      timeLeft: '2 days left',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop',
      category: 'Minimalism',
      totalVotes: 892,
      topEntry: {
        user: 'Priya S.',
        avatar: 'https://i.pravatar.cc/150?img=5',
        votes: 234
      }
    },
    {
      id: 2,
      title: 'Sustainable September',
      description: 'Style only eco-friendly & ethical brands',
      difficulty: 'Easy',
      reward: 300,
      participants: 2156,
      timeLeft: '5 days left',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
      category: 'Sustainability',
      totalVotes: 1456,
      topEntry: {
        user: 'Ananya K.',
        avatar: 'https://i.pravatar.cc/150?img=9',
        votes: 456
      }
    },
    {
      id: 3,
      title: 'Ethnic Fusion Remix',
      description: 'Mix traditional wear with modern pieces',
      difficulty: 'Hard',
      reward: 800,
      participants: 845,
      timeLeft: '1 day left',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop',
      category: 'Fusion',
      totalVotes: 654,
      topEntry: {
        user: 'Rahul M.',
        avatar: 'https://i.pravatar.cc/150?img=12',
        votes: 189
      }
    },
    {
      id: 4,
      title: 'Monochrome Magic',
      description: 'Create stunning single-color outfits',
      difficulty: 'Medium',
      reward: 400,
      participants: 1532,
      timeLeft: '3 days left',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=300&fit=crop',
      category: 'Color Theory',
      totalVotes: 1023,
      topEntry: {
        user: 'Sneha D.',
        avatar: 'https://i.pravatar.cc/150?img=15',
        votes: 312
      }
    }
  ];

  const completedChallenges = [
    {
      id: 5,
      title: 'Summer Whites',
      myRank: 12,
      totalParticipants: 2341,
      coinsEarned: 350,
      badge: 'Top 50',
      date: 'Sep 15, 2024'
    },
    {
      id: 6,
      title: 'Accessory Game',
      myRank: 45,
      totalParticipants: 1876,
      coinsEarned: 200,
      badge: 'Participant',
      date: 'Sep 8, 2024'
    },
    {
      id: 7,
      title: 'Budget Styling',
      myRank: 3,
      totalParticipants: 1254,
      coinsEarned: 750,
      badge: 'Winner',
      date: 'Sep 1, 2024'
    }
  ];

  const myStats = {
    totalChallenges: 8,
    wins: 1,
    top10: 3,
    totalCoins: 2450,
    currentStreak: 4
  };

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700'
  };

  const handleJoinChallenge = (challengeId) => {
    setJoinedChallenges(prev => {
      const newSet = new Set(prev);
      if (newSet.has(challengeId)) {
        newSet.delete(challengeId);
      } else {
        newSet.add(challengeId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-2xl font-bold mb-2">Style Challenges</h1>
          <p className="text-purple-100 text-sm">Compete, create, and earn rewards!</p>
        </div>

        {/* Stats */}
        <div className="px-4 pb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="grid grid-cols-5 gap-2 text-center">
              <div>
                <div className="text-2xl font-bold">{myStats.totalChallenges}</div>
                <div className="text-xs text-purple-200">Joined</div>
              </div>
              <div>
                <div className="text-2xl font-bold flex items-center justify-center gap-1">
                  <Crown className="w-5 h-5 text-yellow-300" />
                  {myStats.wins}
                </div>
                <div className="text-xs text-purple-200">Wins</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{myStats.top10}</div>
                <div className="text-xs text-purple-200">Top 10</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{myStats.totalCoins}</div>
                <div className="text-xs text-purple-200">Coins</div>
              </div>
              <div>
                <div className="text-2xl font-bold flex items-center justify-center gap-1">
                  <Flame className="w-5 h-5 text-orange-300" />
                  {myStats.currentStreak}
                </div>
                <div className="text-xs text-purple-200">Streak</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/20">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-3 text-sm font-semibold transition-all ${
              activeTab === 'active'
                ? 'border-b-2 border-white text-white'
                : 'text-purple-200'
            }`}
          >
            Active Challenges
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 text-sm font-semibold transition-all ${
              activeTab === 'completed'
                ? 'border-b-2 border-white text-white'
                : 'text-purple-200'
            }`}
          >
            My History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {activeTab === 'active' ? (
          <div className="space-y-4">
            {activeChallenges.map((challenge) => {
              const isJoined = joinedChallenges.has(challenge.id);
              return (
                <div
                  key={challenge.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Challenge Image */}
                  <div className="relative">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          difficultyColors[challenge.difficulty]
                        }`}
                      >
                        {challenge.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1 text-xs font-semibold text-gray-900">
                        <Clock className="w-3 h-3" />
                        {challenge.timeLeft}
                      </div>
                    </div>
                  </div>

                  {/* Challenge Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs text-purple-600 font-semibold">
                          {challenge.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">
                          {challenge.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-600">
                          <Trophy className="w-4 h-4" />
                          <span className="text-sm font-bold">{challenge.reward}</span>
                        </div>
                        <div className="text-xs text-gray-500">coins</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{challenge.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{challenge.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{challenge.totalVotes} votes</span>
                      </div>
                    </div>

                    {/* Top Entry */}
                    {isJoined && (
                      <div className="bg-purple-50 rounded-xl p-3 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs font-semibold text-gray-900">
                            Current Leader
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={challenge.topEntry.avatar}
                              alt={challenge.topEntry.user}
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-medium text-gray-900">
                              {challenge.topEntry.user}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-purple-600">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-bold">
                              {challenge.topEntry.votes} votes
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <button
                      onClick={() => handleJoinChallenge(challenge.id)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        isJoined
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {isJoined ? 'Submit Your Entry' : 'Join Challenge'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {completedChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{challenge.title}</h3>
                    <p className="text-sm text-gray-500">{challenge.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">#{challenge.myRank}</div>
                    <div className="text-xs text-gray-500">
                      of {challenge.totalParticipants}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">
                      +{challenge.coinsEarned}
                    </div>
                    <div className="text-xs text-gray-500">RezCoins Earned</div>
                  </div>
                  <div className="flex-1 bg-purple-100 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-purple-900 flex items-center justify-center gap-1">
                      {challenge.badge === 'Winner' && <Crown className="w-5 h-5" />}
                      {challenge.badge === 'Top 50' && <Trophy className="w-5 h-5" />}
                      {challenge.badge === 'Participant' && <Award className="w-5 h-5" />}
                    </div>
                    <div className="text-xs text-purple-700">{challenge.badge}</div>
                  </div>
                </div>
              </div>
            ))}

            {completedChallenges.length === 0 && (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No completed challenges yet</p>
                <p className="text-sm text-gray-400 mt-1">
                  Join an active challenge to get started!
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
