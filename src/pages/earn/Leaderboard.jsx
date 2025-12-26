import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Crown, TrendingUp, Zap, Gift, Target, Rocket } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: 'Priya Sharma', coins: 15420, avatar: '👑', trend: '+245' },
    { rank: 2, name: 'Rahul Kumar', coins: 14850, avatar: '🥈', trend: '+180' },
    { rank: 3, name: 'Ananya Patel', coins: 13990, avatar: '🥉', trend: '+220' },
    { rank: 4, name: 'Vikram Singh', coins: 12750, avatar: '🎯', trend: '+150' },
    { rank: 5, name: 'Sneha Reddy', coins: 11280, avatar: '⭐', trend: '+195' },
    { rank: 6, name: 'Amit Verma', coins: 10940, avatar: '🔥', trend: '+140' },
    { rank: 7, name: 'Kavya Iyer', coins: 10520, avatar: '💎', trend: '+175' },
    { rank: 8, name: 'Rohan Gupta', coins: 9870, avatar: '🚀', trend: '+130' },
    { rank: 9, name: 'Meera Desai', coins: 9450, avatar: '✨', trend: '+160' },
    { rank: 10, name: 'Arjun Nair', coins: 8990, avatar: '⚡', trend: '+145' },
  ];

  const myRank = { rank: 147, name: 'You', coins: 2480, trend: '+85' };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-amber-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
    return <span className="text-sm font-bold text-rez-gray-500 dark:text-gray-400">#{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/earn" className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">🏆 Weekly Leaderboard</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Top earners this week</p>
          </div>
        </div>
      </div>

      {/* Prize Banner */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Weekly Prizes</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">1st Place</p>
              <p className="text-sm font-bold text-amber-400">₹5,000</p>
            </div>
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">2-10th</p>
              <p className="text-sm font-bold text-purple-400">₹1,000</p>
            </div>
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">11-100th</p>
              <p className="text-sm font-bold text-blue-400">500 coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="px-4 py-4">
        <div className="flex items-end justify-center gap-2 mb-6">
          {/* 2nd Place */}
          <div className="flex-1 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 mx-auto mb-2 flex items-center justify-center text-3xl">
              {topUsers[1].avatar}
            </div>
            <p className="text-xs font-bold text-rez-navy dark:text-white">{topUsers[1].name.split(' ')[0]}</p>
            <p className="text-xs text-gray-400">{topUsers[1].coins.toLocaleString()}</p>
            <div className="h-20 bg-gray-400/20 rounded-t-2xl mt-2 flex items-center justify-center">
              <span className="text-2xl">🥈</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex-1 text-center">
            <Crown className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 mx-auto mb-2 flex items-center justify-center text-4xl border-4 border-amber-400/50">
              {topUsers[0].avatar}
            </div>
            <p className="text-sm font-bold text-rez-navy dark:text-white">{topUsers[0].name.split(' ')[0]}</p>
            <p className="text-xs text-amber-400 font-bold">{topUsers[0].coins.toLocaleString()}</p>
            <div className="h-28 bg-gradient-to-b from-amber-400/30 to-amber-500/20 rounded-t-2xl mt-2 flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex-1 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 mx-auto mb-2 flex items-center justify-center text-3xl">
              {topUsers[2].avatar}
            </div>
            <p className="text-xs font-bold text-rez-navy dark:text-white">{topUsers[2].name.split(' ')[0]}</p>
            <p className="text-xs text-orange-400">{topUsers[2].coins.toLocaleString()}</p>
            <div className="h-16 bg-orange-400/20 rounded-t-2xl mt-2 flex items-center justify-center">
              <span className="text-2xl">🥉</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Rankings */}
      <div className="px-4 py-2">
        <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-3">All Rankings</h3>
        <div className="space-y-2">
          {topUsers.map((user) => (
            <div
              key={user.rank}
              className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 flex items-center gap-4"
            >
              <div className="w-10 flex items-center justify-center">
                {getRankIcon(user.rank)}
              </div>
              <div className="text-3xl">{user.avatar}</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-rez-navy dark:text-white">{user.name}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{user.coins.toLocaleString()} coins</p>
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold">{user.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Rank */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-rez-green-500 to-rez-teal-500 flex items-center gap-4 shadow-lg">
          <div className="w-10 flex items-center justify-center">
            <span className="text-sm font-bold text-white">#{myRank.rank}</span>
          </div>
          <div className="text-3xl">👤</div>
          <div className="flex-1">
            <p className="text-sm font-bold text-white">{myRank.name}</p>
            <p className="text-xs text-white/80">{myRank.coins.toLocaleString()} coins</p>
          </div>
          <div className="flex items-center gap-1 text-white">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-bold">{myRank.trend}</span>
          </div>
        </div>
        <p className="text-xs text-center text-rez-gray-600 dark:text-gray-400 mt-2">
          Earn {(11280 - myRank.coins).toLocaleString()} more to reach Top 100!
        </p>
      </div>

      {/* Motivational CTAs */}
      <div className="px-4 py-6 space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-2">Climb the Leaderboard!</h2>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">Complete these actions to earn more coins</p>
        </div>

        {/* Daily Challenges CTA */}
        <Link
          to="/earn"
          className="block p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/20">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Daily Challenges</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete tasks & earn up to 500 coins/day</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
              +500
            </div>
          </div>
        </Link>

        {/* Referral Boost CTA */}
        <Link
          to="/refer"
          className="block p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/20">
              <Gift className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Refer & Earn Big</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get 1000 coins for each friend you invite</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold">
              +1000
            </div>
          </div>
        </Link>

        {/* Shopping Spree CTA */}
        <Link
          to="/mall"
          className="block p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Shop & Earn</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn coins on every purchase you make</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold">
              Up to 10%
            </div>
          </div>
        </Link>

        {/* Bonus Activities CTA */}
        <Link
          to="/games"
          className="block p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-green-500/20">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Play & Win</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Bonus coins from games & mini challenges</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
              +300
            </div>
          </div>
        </Link>

        {/* Motivational Message */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-rez-green-500/10 to-rez-teal-500/10 border border-rez-green-500/20 text-center">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">You're on Your Way! 🚀</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">
            Complete daily tasks, refer friends, and shop smart to climb the ranks!
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rez-green-500 to-rez-teal-500 text-white text-sm font-semibold">
            <span>Keep Going!</span>
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default Leaderboard;
