import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Users,
  Clock,
  Coins,
  Target,
  TrendingUp,
  Award,
  Medal,
  Gift,
  Zap
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const TournamentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const tournaments = {
    '1': {
      title: 'Weekend Shopping Sprint',
      description: 'Shop the most and win the grand prize!',
      prize: '₹10,000',
      prizeBreakdown: [
        { rank: '1st Place', prize: '₹10,000', icon: '🥇' },
        { rank: '2nd Place', prize: '₹5,000', icon: '🥈' },
        { rank: '3rd Place', prize: '₹2,500', icon: '🥉' },
        { rank: '4th-10th', prize: '1,000 coins each', icon: '🎁' }
      ],
      participants: 1247,
      endsIn: '2d 5h',
      status: 'Live',
      myRank: 23,
      myPoints: 4560,
      icon: '🏆',
      color: 'from-amber-500 to-yellow-500',
      rules: [
        'Make purchases at partner stores',
        'Earn 10 points per ₹100 spent',
        'Bonus 2x points on weekends',
        'Top 10 participants win prizes'
      ]
    },
    '2': {
      title: 'Coin Master Challenge',
      description: 'Collect the most coins through various activities!',
      prize: '50,000 coins',
      prizeBreakdown: [
        { rank: '1st Place', prize: '50,000 coins', icon: '🥇' },
        { rank: '2nd Place', prize: '30,000 coins', icon: '🥈' },
        { rank: '3rd Place', prize: '15,000 coins', icon: '🥉' },
        { rank: '4th-20th', prize: '2,000 coins each', icon: '🎁' }
      ],
      participants: 892,
      endsIn: '5d',
      status: 'Live',
      myRank: 45,
      myPoints: 12340,
      icon: '🪙',
      color: 'from-emerald-500 to-green-500',
      rules: [
        'Complete any earning activities',
        'Coins earned = tournament points',
        'All coin types count',
        'Top 20 participants win bonus coins'
      ]
    },
    '3': {
      title: 'Referral Rally',
      description: 'Refer the most friends and climb the leaderboard!',
      prize: '₹5,000',
      prizeBreakdown: [
        { rank: '1st Place', prize: '₹5,000', icon: '🥇' },
        { rank: '2nd Place', prize: '₹3,000', icon: '🥈' },
        { rank: '3rd Place', prize: '₹1,500', icon: '🥉' },
        { rank: '4th-15th', prize: '500 coins each', icon: '🎁' }
      ],
      participants: 543,
      endsIn: '1d 12h',
      status: 'Ending Soon',
      myRank: 12,
      myPoints: 8,
      icon: '👥',
      color: 'from-pink-500 to-purple-500',
      rules: [
        'Refer friends using your code',
        '1 point per successful referral',
        'Friend must complete first transaction',
        'Top 15 participants win prizes'
      ]
    }
  };

  const tournament = tournaments[id] || tournaments['1'];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', points: 15678, avatar: '👩', change: '+2' },
    { rank: 2, name: 'Rahul Kumar', points: 14892, avatar: '👨', change: '-1' },
    { rank: 3, name: 'Anjali Patel', points: 13456, avatar: '👩', change: '+1' },
    { rank: 4, name: 'Amit Singh', points: 11234, avatar: '👨', change: '0' },
    { rank: 5, name: 'Sneha Verma', points: 9876, avatar: '👩', change: '+3' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{tournament.title}</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{tournament.participants.toLocaleString()} participants</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Hero Banner */}
        <div className={`p-6 rounded-rez-xl bg-gradient-to-br ${tournament.color} text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">{tournament.icon}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  tournament.status === 'Ending Soon' ? 'bg-red-500/30' : 'bg-white/20'
                }`}>
                  {tournament.status}
                </span>
              </div>
              <h2 className="text-h3 font-poppins mb-2">{tournament.title}</h2>
              <p className="text-body-sm opacity-90">{tournament.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4" />
                <span className="text-caption opacity-80">Grand Prize</span>
              </div>
              <p className="text-h4 font-poppins">{tournament.prize}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-caption opacity-80">Ends In</span>
              </div>
              <p className="text-h4 font-poppins">{tournament.endsIn}</p>
            </div>
          </div>
        </div>

        {/* My Rank */}
        <div className="p-5 rounded-rez-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Your Current Rank</p>
              <p className="text-h2 font-poppins text-rez-navy dark:text-white">#{tournament.myRank}</p>
            </div>
            <div className="text-right">
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Your Points</p>
              <p className="text-h3 font-poppins text-blue-600 dark:text-blue-400">{tournament.myPoints.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Prize Breakdown */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-500" />
            Prize Breakdown
          </h3>
          <div className="space-y-3">
            {tournament.prizeBreakdown.map((prize, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{prize.icon}</span>
                  <span className="text-body-sm font-medium text-rez-navy dark:text-white">{prize.rank}</span>
                </div>
                <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{prize.prize}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Tournament Rules
          </h3>
          <div className="space-y-2">
            {tournament.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{idx + 1}</span>
                </div>
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Medal className="w-5 h-5 text-amber-500" />
            Top 5 Leaderboard
          </h3>
          <div className="space-y-2">
            {leaderboard.map((player) => (
              <div key={player.rank} className="flex items-center gap-4 p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                <div className="w-8 text-center">
                  <span className="text-h5 font-poppins text-rez-gray-600 dark:text-gray-400">#{player.rank}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                  {player.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-body-sm font-medium text-rez-navy dark:text-white">{player.name}</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{player.points.toLocaleString()} points</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                  player.change.startsWith('+') ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                  player.change.startsWith('-') ? 'bg-red-500/20 text-red-600 dark:text-red-400' :
                  'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}>
                  {player.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/earn')}
          className="w-full py-4 rounded-rez-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold shadow-rez-card transition-all flex items-center justify-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Start Earning Points
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default TournamentDetail;
