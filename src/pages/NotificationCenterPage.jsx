import { useState } from 'react';
import { ArrowLeft, Bell, TrendingDown, Gift, Trophy, Tag, Trash2, CheckCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationCenterPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'price_drop',
      title: 'Price Drop Alert!',
      message: 'iPhone 15 Pro is now $899 (was $999)',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: false,
      icon: TrendingDown,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      type: 'reward',
      title: 'New Reward Unlocked!',
      message: 'You earned 500 ReZ Coins from your recent purchase',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      read: false,
      icon: Gift,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Badge Unlocked!',
      message: 'Congratulations! You earned the "Smart Saver" badge',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      read: true,
      icon: Trophy,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      type: 'deal',
      title: 'Flash Sale Started!',
      message: '50% off on all electronics. Limited time only!',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      read: true,
      icon: Tag,
      color: 'from-red-500 to-orange-500'
    },
  ]);

  const [filter, setFilter] = useState('all'); // all, unread

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications;

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to clear all notifications?')) {
      setNotifications([]);
    }
  };

  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - timestamp) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
      }
    }
    return 'Just now';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <CheckCheck className="w-4 h-4" />
                  Mark All Read
                </button>
              )}
              <button
                onClick={clearAll}
                className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold text-sm transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center relative">
              <Bell className="w-6 h-6 text-white" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{unreadCount}</span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {['all', 'unread'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  filter === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'unread' && unreadCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-4 py-6">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <Bell className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No notifications</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filter === 'unread' ? 'All notifications are read' : 'You\'re all caught up!'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`relative group ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/10' : 'bg-white dark:bg-gray-800'
                  } rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all`}
                >
                  {/* Unread Indicator */}
                  {!notification.read && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${notification.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {getTimeAgo(notification.timestamp)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-2 rounded-lg hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors"
                          title="Mark as read"
                        >
                          <CheckCheck className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCenterPage;
