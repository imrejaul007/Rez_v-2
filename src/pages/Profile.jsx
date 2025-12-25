import { Link } from 'react-router-dom';
import { useUser, shoppingForOptions } from '../contexts/UserContext';
import { useApp } from '../contexts/AppContext';
import {
  User, Settings, Heart, MapPin, CreditCard, Bell, HelpCircle,
  ChevronRight, Shield, Star, Gift, LogOut
} from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import BottomNavManager from '../components/layout/BottomNavManager';

const Profile = () => {
  const { user, updatePreferences, setShoppingFor } = useUser();
  const { filters, toggleFilter } = useApp();

  const menuItems = [
    { icon: Heart, label: 'Wishlist', link: '/wishlist-enhanced' },
    { icon: Bell, label: 'Notifications', link: '/notifications-center' },
    { icon: MapPin, label: 'Track Orders', link: '/track-order' },
    { icon: Star, label: 'Contests', link: '/contests', badge: 'NEW' },
    { icon: Gift, label: 'Social Feed', link: '/social-feed' },
    { icon: CreditCard, label: 'Savings Tracker', link: '/savings-tracker' },
    { icon: Shield, label: 'Privacy & Security', link: '/privacy' },
    { icon: HelpCircle, label: 'Help & Support', link: '/help' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="px-4 pt-2 pb-4 flex items-center justify-between">
        <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Profile</h1>
        <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
          <Settings className="w-5 h-5 text-rez-navy dark:text-white" />
        </button>
      </div>

      {/* User Card */}
      <div className="mx-4 mb-6 p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 flex items-center gap-4 shadow-rez-card">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
          <span className="text-2xl font-bold text-rez-navy dark:text-white">{user.name[0]}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">{user.name}</h2>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">{user.email}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="primary" size="sm">
              <Star className="w-3 h-3" />
              {user.tier} Member
            </Badge>
            {user.isPriveMember && (
              <Badge variant="prive" size="sm">✨ Privé</Badge>
            )}
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-400" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-4 mb-6">
        <div className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center shadow-rez-subtle">
          <p className="text-h3 font-poppins text-rez-navy dark:text-white">{user.stats.totalOrders}</p>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Orders</p>
        </div>
        <div className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center shadow-rez-subtle">
          <p className="text-h3 font-poppins text-emerald-600 dark:text-emerald-400">₹{user.stats.totalSaved.toLocaleString()}</p>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Saved</p>
        </div>
        <div className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center shadow-rez-subtle">
          <p className="text-h3 font-poppins text-amber-500 dark:text-amber-400">{user.stats.reviewsWritten}</p>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">Reviews</p>
        </div>
      </div>

      {/* Shopping For */}
      <div className="px-4 mb-6">
        <h3 className="text-body-sm font-medium text-rez-gray-600 dark:text-gray-400 mb-3">Shopping For</h3>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {shoppingForOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setShoppingFor(option.id)}
              className={`px-4 py-2 rounded-full shrink-0 transition-all flex items-center gap-2 ${
                user.shoppingFor === option.id
                  ? 'bg-emerald-500/20 dark:bg-emerald-500/20 border border-emerald-500/50 dark:border-emerald-500/50 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-700 dark:text-gray-300'
              }`}
            >
              <span>{option.icon}</span>
              <span className="text-body-sm">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Personal Preferences */}
      <div className="px-4 mb-6">
        <h3 className="text-body-sm font-medium text-rez-gray-600 dark:text-gray-400 mb-3">Always Apply</h3>
        <Card className="divide-y divide-white/5">
          {[
            { id: 'halal', icon: '🕌', label: 'Always Halal', key: 'alwaysHalal' },
            { id: 'vegan', icon: '🌱', label: 'Always Vegan', key: 'alwaysVegan' },
            { id: 'vegetarian', icon: '🥗', label: 'Always Vegetarian', key: 'alwaysVegetarian' },
          ].map((pref) => (
            <div key={pref.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{pref.icon}</span>
                <span className="text-body text-rez-navy dark:text-white">{pref.label}</span>
              </div>
              <button
                onClick={() => {
                  updatePreferences(pref.key, !user.preferences[pref.key]);
                  toggleFilter(pref.id);
                }}
                className={`w-12 h-7 rounded-full p-1 transition-colors ${
                  user.preferences[pref.key] ? 'bg-emerald-500' : 'bg-rez-gray-200 dark:bg-white/20'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  user.preferences[pref.key] ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </div>
          ))}
        </Card>
      </div>

      {/* Menu Items */}
      <div className="px-4 mb-6">
        <Card className="divide-y divide-rez-gray-200 dark:divide-white/5">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="w-full flex items-center gap-4 p-4 hover:bg-rez-gray-50 dark:hover:bg-white/5 active:bg-rez-gray-100 dark:active:bg-rez-gray-50 dark:bg-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
              </div>
              <span className="flex-1 text-left text-body text-rez-navy dark:text-white">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  {item.badge}
                </span>
              )}
              {item.count !== undefined && (
                <span className="text-body-sm text-rez-gray-600 dark:text-gray-400">{item.count}</span>
              )}
              <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-400" />
            </Link>
          ))}
        </Card>
      </div>

      {/* Referral */}
      <div className="mx-4 mb-6 p-4 rounded-rez-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/30 dark:border-purple-500/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-rez-md bg-purple-500/30 dark:bg-purple-500/30 flex items-center justify-center">
            <Gift className="w-6 h-6 text-purple-500 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="text-h4 font-poppins text-rez-navy dark:text-white">Refer & Earn</p>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Get ₹100 for every friend who joins</p>
          </div>
          <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-400" />
        </div>
      </div>

      {/* Logout */}
      <div className="px-4">
        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-rez-lg bg-red-500/10 dark:bg-red-500/10 text-red-500 dark:text-red-400 hover:bg-red-500/20 dark:hover:bg-red-500/20 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Log Out</span>
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-caption text-rez-gray-500 dark:text-gray-600 mt-6">
        ReZ v1.0.0 • Made with ❤️
      </p>
      <BottomNavManager />
    </div>
  );
};

export default Profile;
