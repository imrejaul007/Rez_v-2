import { useNavigate } from 'react-router-dom';
import { User, Settings, ShoppingBag, Heart, Calendar, Leaf, Award, ChevronRight, LogOut, Bell, Shield } from 'lucide-react';
import BottomNav from '../components/lifestyle/BottomNav';

export default function LifestyleProfile() {
  const navigate = useNavigate();

  const user = {
    name: 'Arjun Sharma',
    email: 'arjun@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    styleDNA: 'Modern Minimalist',
    memberSince: 'Jan 2024'
  };

  const stats = [
    { label: 'Wardrobe Items', value: '87', icon: ShoppingBag, path: '/lifestyle/fashion/virtual-wardrobe' },
    { label: 'Saved Outfits', value: '24', icon: Heart, path: '/lifestyle/fashion/outfit-calendar' },
    { label: 'Eco Score', value: '75/100', icon: Leaf, path: '/lifestyle/fashion/sustainability' },
    { label: 'Achievements', value: '12', icon: Award, path: '/lifestyle/achievements' }
  ];

  const menuItems = [
    { icon: User, label: 'Edit Profile', path: '/profile/edit' },
    { icon: ShoppingBag, label: 'Orders & Purchases', path: '/orders' },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: Calendar, label: 'Planned Outfits', path: '/lifestyle/fashion/outfit-calendar' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Shield, label: 'Privacy & Security', path: '/settings/privacy' },
    { icon: Settings, label: 'App Settings', path: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-purple-100">{user.email}</p>
            <p className="text-sm text-purple-200 mt-1">Member since {user.memberSince}</p>
          </div>
        </div>

        {/* Style DNA */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-sm text-purple-100 mb-1">Your Style DNA</div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">{user.styleDNA}</div>
            <button
              onClick={() => navigate('/lifestyle/fashion/style-quiz')}
              className="text-sm text-yellow-300 font-semibold"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(stat.path)}
                className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <Icon className="w-8 h-8 text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </button>
            );
          })}
        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="flex-1 text-left font-medium text-gray-900">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <button className="w-full mt-6 flex items-center justify-center gap-2 py-4 bg-red-50 text-red-600 rounded-2xl font-semibold hover:bg-red-100">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
