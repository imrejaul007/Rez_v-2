import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Droplet,
  TreePine,
  Trash2,
  Users,
  MapPin,
  Calendar,
  Award,
  Coins,
  Check,
  Clock,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialImpact = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const impactActivities = [
    {
      id: 1,
      type: 'blood-donation',
      title: 'Blood Donation Drive',
      icon: '🩸',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      organizer: 'Apollo Hospitals',
      logo: '🏥',
      date: 'Dec 28, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Apollo Hospital, Sector 18',
      distance: '2.3 km',
      rewards: {
        rezCoins: 200,
        brandedCoins: 150,
        brandName: 'Apollo'
      },
      enrolled: 234,
      goal: 500,
      impact: 'Save 3 lives per donation',
      status: 'upcoming'
    },
    {
      id: 2,
      type: 'tree-plantation',
      title: 'Tree Plantation Drive',
      icon: '🌳',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500',
      organizer: 'Green Earth Foundation',
      logo: '🌍',
      date: 'Dec 30, 2024',
      time: '7:00 AM - 11:00 AM',
      location: 'City Park, Botanical Gardens',
      distance: '4.1 km',
      rewards: {
        rezCoins: 150,
        brandedCoins: 100,
        brandName: 'Green Earth'
      },
      enrolled: 156,
      goal: 200,
      impact: 'Plant 1000+ saplings',
      status: 'upcoming'
    },
    {
      id: 3,
      type: 'cleanup',
      title: 'Beach Cleanup Drive',
      icon: '🏖️',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      organizer: 'Clean Beaches Initiative',
      logo: '🌊',
      date: 'Jan 2, 2025',
      time: '6:00 AM - 9:00 AM',
      location: 'Marina Beach',
      distance: '8.5 km',
      rewards: {
        rezCoins: 120,
        brandedCoins: 80,
        brandName: 'Clean Beaches'
      },
      enrolled: 89,
      goal: 150,
      impact: 'Clean 5 km of coastline',
      status: 'upcoming'
    },
    {
      id: 4,
      type: 'ngo-volunteer',
      title: 'Community Kitchen Volunteering',
      icon: '🍲',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      organizer: 'Feed the Need NGO',
      logo: '🤝',
      date: 'Every Sunday',
      time: '11:00 AM - 2:00 PM',
      location: 'Community Center, MG Road',
      distance: '3.7 km',
      rewards: {
        rezCoins: 100,
        brandedCoins: 0
      },
      enrolled: 45,
      goal: 100,
      impact: 'Feed 200+ people',
      status: 'ongoing'
    },
    {
      id: 5,
      type: 'blood-donation',
      title: 'Emergency Blood Camp',
      icon: '🩸',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      organizer: 'Red Cross Society',
      logo: '❤️',
      date: 'Dec 26, 2024',
      time: 'Completed',
      location: 'City Hospital',
      distance: '1.8 km',
      rewards: {
        rezCoins: 200,
        brandedCoins: 0
      },
      enrolled: 312,
      goal: 300,
      impact: 'Saved 900+ lives',
      status: 'completed'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: impactActivities.length },
    { id: 'upcoming', label: 'Upcoming', count: impactActivities.filter(a => a.status === 'upcoming').length },
    { id: 'ongoing', label: 'Ongoing', count: impactActivities.filter(a => a.status === 'ongoing').length },
    { id: 'completed', label: 'Completed', count: impactActivities.filter(a => a.status === 'completed').length }
  ];

  const filteredActivities = activeTab === 'all'
    ? impactActivities
    : impactActivities.filter(a => a.status === activeTab);

  const myImpactStats = {
    totalActivities: 12,
    livesImpacted: 2340,
    treesPlanted: 45,
    rezCoinsEarned: 2400,
    brandedCoinsEarned: 1650
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
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Social Impact</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Earn while making a difference</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-rez-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 dark:from-emerald-500/10 dark:via-blue-500/10 dark:to-purple-500/10 border border-emerald-500/30 dark:border-emerald-500/30 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Powerful Differentiator</h2>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
            Do good, earn ReZ Coins + Branded Coins from sponsors
          </p>
        </div>
      </div>

      {/* My Impact Stats */}
      <div className="px-4 mb-6">
        <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Your Impact
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-rez-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Lives Impacted</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.livesImpacted.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <TreePine className="w-5 h-5 text-green-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Trees Planted</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.treesPlanted}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-emerald-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">ReZ Coins</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.rezCoinsEarned.toLocaleString()}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Branded Coins</span>
            </div>
            <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myImpactStats.brandedCoinsEarned.toLocaleString()}</p>
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
              className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Activities List */}
      <div className="px-4 space-y-4">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-rez-lg ${activity.iconBg} flex items-center justify-center shrink-0`}>
                <span className="text-3xl">{activity.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">{activity.title}</h3>
                  {activity.status === 'completed' && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                  <span>{activity.logo}</span>
                  <span>{activity.organizer}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{activity.date}</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{activity.time}</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400 col-span-2">
                <MapPin className="w-4 h-4" />
                <span>{activity.location} • {activity.distance} away</span>
              </div>
            </div>

            {/* Impact & Progress */}
            <div className="mb-4 p-3 rounded-rez-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
              <p className="text-body-sm text-blue-900 dark:text-blue-300 mb-2">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                {activity.impact}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                    style={{ width: `${(activity.enrolled / activity.goal) * 100}%` }}
                  />
                </div>
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">
                  {activity.enrolled}/{activity.goal}
                </span>
              </div>
            </div>

            {/* Rewards */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="text-lg">💰</span>
                  <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">
                    +{activity.rewards.rezCoins}
                  </span>
                </div>
                {activity.rewards.brandedCoins > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-lg">🏪</span>
                    <span className="text-body-sm font-bold text-purple-600 dark:text-purple-400">
                      +{activity.rewards.brandedCoins}
                    </span>
                    <span className="text-caption text-rez-gray-600 dark:text-gray-400">
                      ({activity.rewards.brandName})
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            {activity.status === 'completed' ? (
              <button
                className="w-full py-3 rounded-rez-lg font-semibold bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed"
                disabled
              >
                ✓ Completed
              </button>
            ) : (
              <Link
                to={`/earn/social-impact/${activity.id}`}
                className="block w-full py-3 rounded-rez-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-center transition-all"
              >
                Register Now
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-500/10 dark:to-blue-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center">
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Every Action Counts</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            Join thousands making an impact while earning rewards
          </p>
          <div className="flex items-center justify-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>5,234 members</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>234 events</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialImpact;
