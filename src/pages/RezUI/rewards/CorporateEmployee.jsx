import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Trophy,
  Users,
  Target,
  Coins,
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  Star,
  Calendar,
  Zap,
  Gift,
  Share2,
  ShoppingBag,
  Coffee,
  Building,
  Sparkles,
  ChevronRight,
  Heart,
  Medal
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateEmployee = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('challenges');

  const employeeChallenges = [
    {
      id: 1,
      title: 'Team Lunch Challenge',
      type: 'team',
      icon: Coffee,
      reward: 300,
      brandedReward: 200,
      progress: 3,
      total: 5,
      difficulty: 'Easy',
      deadline: '15 days left',
      description: 'Order team lunch 5 times this month using ReZ',
      participants: 12,
      status: 'active'
    },
    {
      id: 2,
      title: 'Wellness Wednesday',
      type: 'wellness',
      icon: Heart,
      reward: 500,
      brandedReward: 0,
      progress: 2,
      total: 4,
      difficulty: 'Medium',
      deadline: 'Monthly',
      description: 'Book health checkup or gym session via ReZ',
      requirements: ['Healthcare or Fitness category', 'Minimum ₹500 booking', 'Valid invoice'],
      status: 'active'
    },
    {
      id: 3,
      title: 'Refer Colleagues',
      type: 'referral',
      icon: Users,
      reward: 200,
      brandedReward: 100,
      progress: 8,
      total: 10,
      difficulty: 'Medium',
      deadline: '30 days left',
      description: 'Get 10 colleagues to join ReZ and transact',
      bonus: 'Extra 500 coins for completion',
      status: 'active'
    },
    {
      id: 4,
      title: 'Office Supplies Saver',
      type: 'shopping',
      icon: ShoppingBag,
      reward: 400,
      brandedReward: 300,
      progress: 0,
      total: 1,
      difficulty: 'Easy',
      deadline: '20 days left',
      description: 'Purchase office supplies worth ₹2000+ via ReZ partners',
      requirements: ['Electronics/Stationery category', 'Single or multiple orders', 'Min ₹2000 value'],
      status: 'available'
    },
    {
      id: 5,
      title: 'Team Building Event',
      type: 'event',
      icon: Trophy,
      reward: 1000,
      brandedReward: 800,
      progress: 0,
      total: 1,
      difficulty: 'Hard',
      deadline: '45 days',
      description: 'Organize team outing/event with min 20 colleagues via ReZ',
      requirements: ['Minimum 20 participants', 'Event/Travel category', 'Company approval', 'Photo proof'],
      featured: true,
      status: 'available'
    },
    {
      id: 6,
      title: 'Friday Treats',
      type: 'food',
      icon: Coffee,
      reward: 150,
      brandedReward: 100,
      progress: 1,
      total: 4,
      difficulty: 'Easy',
      deadline: 'Weekly',
      description: 'Order snacks/beverages for team every Friday',
      status: 'active'
    }
  ];

  const companyPerks = [
    {
      company: 'Accenture',
      logo: '🏢',
      bgColor: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
      perks: [
        { type: 'Bonus Coins', value: '+20% on all purchases', icon: Coins },
        { type: 'Exclusive Deals', value: 'Corporate-only offers', icon: Star },
        { type: 'Team Rewards', value: 'Group purchase bonuses', icon: Users }
      ],
      enrolled: true
    },
    {
      company: 'TCS',
      logo: '💼',
      bgColor: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/30',
      perks: [
        { type: 'Wellness Bonus', value: '+500 coins/month', icon: Heart },
        { type: 'Food Discounts', value: '25% extra on F&B', icon: Coffee },
        { type: 'Events', value: 'Quarterly meetups', icon: Calendar }
      ],
      enrolled: false
    }
  ];

  const teamLeaderboard = [
    { rank: 1, name: 'Marketing Team', members: 24, totalCoins: 45600, avgPerPerson: 1900 },
    { rank: 2, name: 'Sales Team', members: 18, totalCoins: 38900, avgPerPerson: 2161 },
    { rank: 3, name: 'Engineering Team', members: 32, totalCoins: 52400, avgPerPerson: 1638 },
    { rank: 4, name: 'Your Team (HR)', members: 12, totalCoins: 18340, avgPerPerson: 1528, highlight: true }
  ];

  const individualLeaderboard = [
    { rank: 1, name: 'Rajesh Kumar', team: 'Sales', coins: 8900 },
    { rank: 2, name: 'Sneha Patel', team: 'Marketing', coins: 7600 },
    { rank: 3, name: 'Amit Sharma', team: 'Engineering', coins: 6800 },
    { rank: 4, name: 'You', team: 'HR', coins: 3420, highlight: true }
  ];

  const tabs = [
    { id: 'challenges', label: 'Challenges', count: employeeChallenges.filter(c => c.status === 'active' || c.status === 'available').length },
    { id: 'company-perks', label: 'Company Perks', icon: Building },
    { id: 'team-board', label: 'Team Board', icon: Users },
    { id: 'individual-board', label: 'Leaderboard', icon: Trophy }
  ];

  const myStats = {
    totalEarned: 3420,
    challengesCompleted: 12,
    teamRank: 4,
    individualRank: 4,
    thisMonthEarned: 850,
    referrals: 8
  };

  const difficultyColors = {
    'Easy': 'text-green-500 bg-green-500/10 border-green-500/30',
    'Medium': 'text-orange-500 bg-orange-500/10 border-orange-500/30',
    'Hard': 'text-red-500 bg-red-500/10 border-red-500/30'
  };

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
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Corporate Hub</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Employee challenges & rewards</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Coins className="w-4 h-4 text-emerald-500" />
            <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{myStats.totalEarned}</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-rez-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-blue-500/30 dark:border-blue-500/30">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Completed</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myStats.challengesCompleted}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Rank</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">#{myStats.individualRank}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Referrals</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myStats.referrals}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Coins className="w-4 h-4 text-emerald-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">This Month</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">+{myStats.thisMonthEarned}</p>
            </div>
          </div>
          <div className="p-3 rounded-rez-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-center">
            <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Your Team Rank</p>
            <p className="text-h4 font-poppins text-blue-600 dark:text-blue-400">#{myStats.teamRank} - HR Team</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label} {tab.count !== undefined && `(${tab.count})`}
            </button>
          ))}
        </div>
      </div>

      {/* Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="px-4 space-y-4">
          {employeeChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-rez-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <challenge.icon className="w-7 h-7 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[challenge.difficulty]}`}>
                      {challenge.difficulty}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-xs font-medium text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {challenge.deadline}
                    </span>
                    {challenge.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{challenge.title}</h3>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{challenge.description}</p>
                </div>
              </div>

              {/* Progress */}
              {challenge.status === 'active' && (
                <div className="mb-4 p-3 rounded-rez-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-caption font-medium text-blue-900 dark:text-blue-300">Progress</span>
                    <span className="text-caption font-bold text-blue-600 dark:text-blue-400">
                      {challenge.progress}/{challenge.total}
                    </span>
                  </div>
                  <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Requirements */}
              {challenge.requirements && (
                <div className="mb-4 p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/5">
                  <p className="text-caption font-medium text-rez-navy dark:text-white mb-2">Requirements:</p>
                  <div className="space-y-1">
                    {challenge.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bonus */}
              {challenge.bonus && (
                <div className="mb-4 p-3 rounded-rez-md bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-caption font-bold text-amber-600 dark:text-amber-400">{challenge.bonus}</span>
                  </div>
                </div>
              )}

              {/* Participants (for team challenges) */}
              {challenge.participants && (
                <div className="mb-4 flex items-center gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants} team members participating</span>
                </div>
              )}

              {/* Rewards */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Coins className="w-5 h-5 text-emerald-500" />
                    <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                      +{challenge.reward}
                    </span>
                  </div>
                  {challenge.brandedReward > 0 && (
                    <div className="flex items-center gap-1">
                      <ShoppingBag className="w-5 h-5 text-purple-500" />
                      <span className="text-h5 font-poppins text-purple-600 dark:text-purple-400">
                        +{challenge.brandedReward}
                      </span>
                    </div>
                  )}
                </div>
                <button className="px-5 py-2 rounded-rez-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all">
                  {challenge.status === 'active' ? 'Continue' : 'Start'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Company Perks Tab */}
      {activeTab === 'company-perks' && (
        <div className="px-4 space-y-4">
          {companyPerks.map((company, idx) => (
            <div
              key={idx}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card"
            >
              {/* Company Header */}
              <div className={`p-4 rounded-rez-lg bg-gradient-to-r ${company.bgColor} border ${company.borderColor} mb-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-rez-lg bg-white dark:bg-white/90 flex items-center justify-center text-2xl">
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">{company.company}</h3>
                      {company.enrolled && (
                        <span className="text-caption text-green-600 dark:text-green-400 font-bold flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Enrolled
                        </span>
                      )}
                    </div>
                  </div>
                  {!company.enrolled && (
                    <button className="px-4 py-1.5 rounded-rez-lg bg-blue-500 hover:bg-blue-600 text-white text-caption font-semibold transition-all">
                      Enroll
                    </button>
                  )}
                </div>
              </div>

              {/* Perks List */}
              <div className="space-y-3">
                {company.perks.map((perk, perkIdx) => (
                  <div key={perkIdx} className="flex items-center gap-3 p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <perk.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-caption font-medium text-rez-navy dark:text-white">{perk.type}</p>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">{perk.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Add Company CTA */}
          <div className="p-5 rounded-rez-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/30 text-center">
            <Building className="w-12 h-12 mx-auto mb-3 text-blue-500" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">Don't see your company?</h3>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-4">
              Request your HR to partner with ReZ for exclusive employee perks
            </p>
            <button className="px-6 py-2.5 rounded-rez-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all">
              Request Partnership
            </button>
          </div>
        </div>
      )}

      {/* Team Leaderboard Tab */}
      {activeTab === 'team-board' && (
        <div className="px-4 space-y-4">
          {teamLeaderboard.map((team) => (
            <div
              key={team.rank}
              className={`p-5 rounded-rez-xl ${
                team.highlight
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-500'
                  : 'bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-h3 font-poppins text-rez-gray-400 dark:text-gray-400 w-10 text-center">
                  #{team.rank}
                </div>
                <div className="flex-1">
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{team.name}</h3>
                  <div className="flex items-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{team.members} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{team.avgPerPerson} avg/person</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Coins className="w-5 h-5 text-emerald-500" />
                    <span className="text-h4 font-poppins text-emerald-600 dark:text-emerald-400">
                      {team.totalCoins.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Individual Leaderboard Tab */}
      {activeTab === 'individual-board' && (
        <div className="px-4 space-y-4">
          {individualLeaderboard.map((person) => (
            <div
              key={person.rank}
              className={`p-4 rounded-rez-xl ${
                person.highlight
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-500'
                  : 'bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-h3 font-poppins text-rez-gray-400 dark:text-gray-400 w-10 text-center">
                  #{person.rank}
                </div>
                <div className="flex-1">
                  <p className="text-body-sm font-bold text-rez-navy dark:text-white">{person.name}</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{person.team}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Coins className="w-4 h-4 text-emerald-500" />
                  <p className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                    {person.coins.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default CorporateEmployee;
