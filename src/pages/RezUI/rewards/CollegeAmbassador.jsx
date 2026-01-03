import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Trophy,
  Gift,
  Calendar,
  MapPin,
  Coins,
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  Star,
  Target,
  Share2,
  ShoppingBag,
  PartyPopper,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Zap
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CollegeAmbassador = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tasks');

  const ambassadorTasks = [
    {
      id: 1,
      title: 'Refer 10 New Students',
      type: 'referral',
      icon: Users,
      reward: 500,
      brandedReward: 300,
      progress: 7,
      total: 10,
      difficulty: 'Medium',
      deadline: '7 days left',
      description: 'Get your friends to join ReZ and make their first transaction',
      status: 'active'
    },
    {
      id: 2,
      title: 'Host Campus Store Visit',
      type: 'event',
      icon: Calendar,
      reward: 800,
      brandedReward: 500,
      progress: 0,
      total: 1,
      difficulty: 'Hard',
      deadline: '15 days left',
      description: 'Organize a group visit to partner stores with min 20 students',
      requirements: ['Minimum 20 students', 'Partner store approval', 'Photo proof'],
      status: 'available'
    },
    {
      id: 3,
      title: 'Share on Campus Groups',
      type: 'social',
      icon: Share2,
      reward: 100,
      brandedReward: 50,
      progress: 3,
      total: 5,
      difficulty: 'Easy',
      deadline: 'Daily',
      description: 'Share ReZ offers in your college WhatsApp/Telegram groups',
      status: 'active'
    },
    {
      id: 4,
      title: 'Campus Fest Participation',
      type: 'fest',
      icon: PartyPopper,
      reward: 1000,
      brandedReward: 800,
      progress: 0,
      total: 1,
      difficulty: 'Hard',
      deadline: '30 days',
      description: 'Set up ReZ stall at your college fest',
      requirements: ['College fest approval', 'Minimum 50 signups', 'Event photos', 'ReZ team support provided'],
      featured: true,
      status: 'available'
    },
    {
      id: 5,
      title: 'Student Discount Hunt',
      type: 'discovery',
      icon: Target,
      reward: 200,
      brandedReward: 150,
      progress: 5,
      total: 10,
      difficulty: 'Medium',
      deadline: '10 days left',
      description: 'Find and submit new student-friendly stores near campus',
      status: 'active'
    },
    {
      id: 6,
      title: 'Monthly Ambassador Meet',
      type: 'attendance',
      icon: GraduationCap,
      reward: 300,
      brandedReward: 200,
      progress: 0,
      total: 1,
      difficulty: 'Easy',
      deadline: '5 days left',
      description: 'Attend monthly ambassador meet (online/offline)',
      status: 'available'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Fest 2025 - IIT Delhi',
      date: 'Jan 15-17, 2025',
      location: 'IIT Delhi Campus',
      participants: 45,
      maxParticipants: 50,
      reward: 2000,
      status: 'open',
      type: 'College Fest'
    },
    {
      id: 2,
      title: 'Fashion Week - NIFT',
      date: 'Jan 20-22, 2025',
      location: 'NIFT Bangalore',
      participants: 32,
      maxParticipants: 40,
      reward: 1500,
      status: 'open',
      type: 'Fashion Event'
    },
    {
      id: 3,
      title: 'Food Fest - DU North Campus',
      date: 'Jan 25, 2025',
      location: 'Delhi University',
      participants: 50,
      maxParticipants: 50,
      reward: 1200,
      status: 'full',
      type: 'Food Event'
    }
  ];

  const ambassadorPerks = [
    {
      icon: Coins,
      title: 'Exclusive Rewards',
      description: 'Earn up to 10,000 coins/month',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/20'
    },
    {
      icon: Gift,
      title: 'Free Products',
      description: 'Get free samples & merch',
      color: 'text-purple-500',
      bg: 'bg-purple-500/20'
    },
    {
      icon: Award,
      title: 'Certificate',
      description: 'Ambassador certificate for resume',
      color: 'text-blue-500',
      bg: 'bg-blue-500/20'
    },
    {
      icon: Star,
      title: 'Priority Access',
      description: 'Early access to new features',
      color: 'text-amber-500',
      bg: 'bg-amber-500/20'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Rohan Sharma', college: 'IIT Delhi', referrals: 234, coins: 45600 },
    { rank: 2, name: 'Priya Patel', college: 'BITS Pilani', referrals: 198, coins: 38900 },
    { rank: 3, name: 'Amit Kumar', college: 'DU North', referrals: 176, coins: 32400 },
    { rank: 4, name: 'You', college: 'Your College', referrals: 87, coins: 12340, highlight: true }
  ];

  const tabs = [
    { id: 'tasks', label: 'My Tasks', count: ambassadorTasks.filter(t => t.status === 'active' || t.status === 'available').length },
    { id: 'events', label: 'Events', count: upcomingEvents.filter(e => e.status === 'open').length },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'perks', label: 'Perks', icon: Gift }
  ];

  const myStats = {
    totalReferrals: 87,
    totalEarned: 12340,
    currentRank: 4,
    eventsAttended: 5,
    thisMonthEarned: 2450,
    level: 'Silver Ambassador'
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
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">College Ambassador</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{myStats.level}</p>
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
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Referrals</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myStats.totalReferrals}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Rank</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">#{myStats.currentRank}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Events</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myStats.eventsAttended}</p>
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
            <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Progress to Gold Ambassador</p>
            <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '65%' }} />
            </div>
            <p className="text-caption font-bold text-blue-600 dark:text-blue-400">150 more referrals to go!</p>
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

      {/* Tasks Tab */}
      {activeTab === 'tasks' && (
        <div className="px-4 space-y-4">
          {ambassadorTasks.map((task) => (
            <div
              key={task.id}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-rez-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <task.icon className="w-7 h-7 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[task.difficulty]}`}>
                      {task.difficulty}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-xs font-medium text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.deadline}
                    </span>
                    {task.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{task.title}</h3>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{task.description}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4 p-3 rounded-rez-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-caption font-medium text-blue-900 dark:text-blue-300">Progress</span>
                  <span className="text-caption font-bold text-blue-600 dark:text-blue-400">
                    {task.progress}/{task.total}
                  </span>
                </div>
                <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${(task.progress / task.total) * 100}%` }}
                  />
                </div>
              </div>

              {/* Requirements */}
              {task.requirements && (
                <div className="mb-4 p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/5">
                  <p className="text-caption font-medium text-rez-navy dark:text-white mb-2">Requirements:</p>
                  <div className="space-y-1">
                    {task.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rewards */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Coins className="w-5 h-5 text-emerald-500" />
                    <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                      +{task.reward}
                    </span>
                  </div>
                  {task.brandedReward > 0 && (
                    <div className="flex items-center gap-1">
                      <ShoppingBag className="w-5 h-5 text-purple-500" />
                      <span className="text-h5 font-poppins text-purple-600 dark:text-purple-400">
                        +{task.brandedReward}
                      </span>
                    </div>
                  )}
                </div>
                <button className="px-5 py-2 rounded-rez-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all">
                  {task.status === 'active' ? 'Continue' : 'Start Task'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="px-4 space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-rez-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl shrink-0">
                  🎉
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-xs font-bold text-purple-600 dark:text-purple-400">
                      {event.type}
                    </span>
                    {event.status === 'full' && (
                      <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-xs font-bold text-red-600 dark:text-red-400">
                        Full
                      </span>
                    )}
                  </div>
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{event.title}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participants */}
              <div className="mb-4 p-3 rounded-rez-md bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-caption font-medium text-purple-900 dark:text-purple-300">Participants</span>
                  <span className="text-caption font-bold text-purple-600 dark:text-purple-400">
                    {event.participants}/{event.maxParticipants}
                  </span>
                </div>
                <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                  />
                </div>
              </div>

              {/* Reward & Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Coins className="w-5 h-5 text-emerald-500" />
                  <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                    +{event.reward}
                  </span>
                </div>
                <button
                  className={`px-5 py-2 rounded-rez-lg font-semibold transition-all ${
                    event.status === 'full'
                      ? 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                  }`}
                  disabled={event.status === 'full'}
                >
                  {event.status === 'full' ? 'Waitlist' : 'Register'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="px-4 space-y-4">
          {leaderboard.map((ambassador) => (
            <div
              key={ambassador.rank}
              className={`p-4 rounded-rez-xl ${
                ambassador.highlight
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-500'
                  : 'bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-h3 font-poppins text-rez-gray-400 dark:text-gray-400 w-10 text-center">
                  #{ambassador.rank}
                </div>
                <div className="flex-1">
                  <p className="text-body-sm font-bold text-rez-navy dark:text-white">{ambassador.name}</p>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{ambassador.college}</p>
                  <p className="text-caption text-blue-600 dark:text-blue-400">{ambassador.referrals} referrals</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <Coins className="w-4 h-4 text-emerald-500" />
                    <p className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                      {ambassador.coins.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Perks Tab */}
      {activeTab === 'perks' && (
        <div className="px-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {ambassadorPerks.map((perk, idx) => (
              <div
                key={idx}
                className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-3 rounded-rez-lg ${perk.bg} flex items-center justify-center`}>
                  <perk.icon className={`w-7 h-7 ${perk.color}`} />
                </div>
                <h3 className="text-body-sm font-bold text-rez-navy dark:text-white mb-1">{perk.title}</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{perk.description}</p>
              </div>
            ))}
          </div>

          {/* Exclusive Access */}
          <div className="p-5 rounded-rez-xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 dark:from-amber-500/10 dark:via-orange-500/10 dark:to-red-500/10 border border-amber-500/30 dark:border-amber-500/30">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Exclusive Benefits
            </h3>
            <ul className="space-y-2 text-caption text-rez-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Direct mentorship from ReZ team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Networking with other ambassadors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Resume-worthy certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Internship opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Free ReZ merchandise</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default CollegeAmbassador;
