import React, { useState } from 'react';
import {
  Bell, Heart, MessageCircle, UserPlus, Award, Gift, Coins,
  ChevronRight, Check, CheckCheck, Settings, Trash2, Star,
  TrendingUp, Zap, Crown
} from 'lucide-react';

// BuzzLoop Notifications: Activity & Alerts Center
// Backend API: GET /api/buzzloop/notifications/:userId
// Backend API: PUT /api/buzzloop/notifications/:id/read
// Backend API: DELETE /api/buzzloop/notifications/:id

const BuzzLoopNotifications = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: { name: "StyleQueen", avatar: "👸", verified: true },
      action: "liked your review",
      target: "Pasta Paradise",
      timestamp: "2m ago",
      read: false,
      coins: null
    },
    {
      id: 2,
      type: 'comment',
      user: { name: "FoodieRaj", avatar: "👨‍🍳", verified: true },
      action: "commented on your post",
      preview: "This looks amazing! Must try...",
      timestamp: "15m ago",
      read: false,
      coins: null
    },
    {
      id: 3,
      type: 'coins',
      icon: "🪙",
      title: "You earned 150 coins!",
      description: "Your review of Coffee Corner got 100+ likes",
      timestamp: "1h ago",
      read: false,
      coins: 150
    },
    {
      id: 4,
      type: 'follow',
      user: { name: "TechGuru", avatar: "🤓", verified: false },
      action: "started following you",
      timestamp: "2h ago",
      read: true,
      coins: null
    },
    {
      id: 5,
      type: 'badge',
      icon: "🏆",
      title: "New Badge Unlocked!",
      description: "Foodie Explorer - Visit 10 different restaurants",
      timestamp: "3h ago",
      read: true,
      coins: 50
    },
    {
      id: 6,
      type: 'mention',
      user: { name: "BudgetBoss", avatar: "💰", verified: false },
      action: "mentioned you in a comment",
      preview: "@you should check this out!",
      timestamp: "5h ago",
      read: true,
      coins: null
    },
    {
      id: 7,
      type: 'trending',
      icon: "🔥",
      title: "Your post is trending!",
      description: "Your Fashion Hub review reached Top 10",
      timestamp: "Yesterday",
      read: true,
      coins: 200
    },
    {
      id: 8,
      type: 'promo',
      icon: "🎁",
      title: "Flash Deal Alert!",
      description: "2x coins on all posts this weekend",
      timestamp: "Yesterday",
      read: true,
      coins: null
    },
    {
      id: 9,
      type: 'milestone',
      icon: "⭐",
      title: "1,000 Followers!",
      description: "You've reached a new milestone",
      timestamp: "2 days ago",
      read: true,
      coins: 500
    }
  ]);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'coins', label: 'Coins' },
    { id: 'system', label: 'System' }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like': return <Heart className="w-5 h-5 text-red-500" />;
      case 'comment': return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'follow': return <UserPlus className="w-5 h-5 text-green-500" />;
      case 'coins': return <Coins className="w-5 h-5 text-yellow-500" />;
      case 'badge': return <Award className="w-5 h-5 text-purple-500" />;
      case 'mention': return <span className="text-pink-500 font-bold">@</span>;
      case 'trending': return <TrendingUp className="w-5 h-5 text-orange-500" />;
      case 'promo': return <Gift className="w-5 h-5 text-pink-500" />;
      case 'milestone': return <Star className="w-5 h-5 text-yellow-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case 'engagement':
        return notifications.filter(n => ['like', 'comment', 'follow', 'mention'].includes(n.type));
      case 'coins':
        return notifications.filter(n => n.coins !== null);
      case 'system':
        return notifications.filter(n => ['badge', 'trending', 'promo', 'milestone'].includes(n.type));
      default:
        return notifications;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const filteredNotifications = getFilteredNotifications();

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const renderNotification = (notif) => (
    <div
      key={notif.id}
      className={`flex gap-4 p-4 ${
        !notif.read ? 'bg-pink-50' : 'bg-white'
      } ${notif.id !== filteredNotifications[filteredNotifications.length - 1].id ? 'border-b border-gray-100' : ''}`}
    >
      {/* Avatar or Icon */}
      <div className="flex-shrink-0">
        {notif.user ? (
          <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-2xl">
            {notif.user.avatar}
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
            notif.type === 'coins' ? 'bg-yellow-100' :
            notif.type === 'badge' ? 'bg-purple-100' :
            notif.type === 'trending' ? 'bg-orange-100' :
            notif.type === 'promo' ? 'bg-pink-100' :
            'bg-gray-100'
          }`}>
            {notif.icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {notif.user ? (
          <>
            <p className="text-gray-800">
              <span className="font-semibold">{notif.user.name}</span>
              {notif.user.verified && <span className="text-blue-500 text-xs ml-1">✓</span>}
              <span className="text-gray-600"> {notif.action}</span>
            </p>
            {notif.target && (
              <p className="text-sm text-pink-600 font-medium">{notif.target}</p>
            )}
            {notif.preview && (
              <p className="text-sm text-gray-500 mt-0.5 truncate">{notif.preview}</p>
            )}
          </>
        ) : (
          <>
            <p className="font-semibold text-gray-800">{notif.title}</p>
            <p className="text-sm text-gray-600">{notif.description}</p>
          </>
        )}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-400">{notif.timestamp}</span>
          {notif.coins && (
            <span className="text-xs text-yellow-600 font-medium bg-yellow-50 px-2 py-0.5 rounded-full">
              +{notif.coins}🪙
            </span>
          )}
        </div>
      </div>

      {/* Action Indicator */}
      <div className="flex-shrink-0 flex items-start">
        {!notif.read && (
          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">Notifications</h1>
            {unreadCount > 0 && (
              <p className="text-pink-200 text-sm">{unreadCount} unread</p>
            )}
          </div>
          <button className="text-white/80">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white/10 backdrop-blur rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-200" />
              <span className="text-white/80 text-sm">Today's Likes</span>
            </div>
            <p className="text-white font-bold text-xl mt-1">234</p>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-yellow-300" />
              <span className="text-white/80 text-sm">Coins Earned</span>
            </div>
            <p className="text-white font-bold text-xl mt-1">450</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2 overflow-x-auto sticky top-0 z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mark All Read */}
      {unreadCount > 0 && (
        <div className="px-4 py-3 flex justify-end">
          <button
            onClick={markAllRead}
            className="text-pink-600 text-sm font-medium flex items-center gap-1"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </button>
        </div>
      )}

      {/* Notifications List */}
      <div className="mx-4 bg-white rounded-xl shadow-sm overflow-hidden">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(renderNotification)
        ) : (
          <div className="p-8 text-center">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No notifications in this category</p>
          </div>
        )}
      </div>

      {/* Engagement Boost Card */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Boost Your Posts!</h3>
              <p className="text-purple-200 text-sm">Get 3x more engagement with promotion</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>

      {/* Creator Tips */}
      <div className="px-4 mt-4">
        <h2 className="font-semibold text-gray-800 mb-3">Creator Tips</h2>
        <div className="space-y-2">
          <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-xl">📸</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Posts with images get 2x more likes</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-xl">⏰</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Best time to post: 6-8 PM weekdays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopNotifications;
