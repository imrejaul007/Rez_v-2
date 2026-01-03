import React, { useState } from 'react';
import { Bell, Package, Tag, TrendingDown, Gift, Calendar, Users, Star, Settings, Check } from 'lucide-react';

function Notifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      icon: Package,
      title: 'Order Delivered',
      message: 'Your iPhone 15 Pro has been delivered successfully',
      time: '10 min ago',
      read: false,
      color: 'emerald'
    },
    {
      id: 2,
      type: 'offer',
      icon: Tag,
      title: '50% Off Flash Sale',
      message: 'Nike Air Max now at ₹5,999. Limited stock!',
      time: '1 hour ago',
      read: false,
      color: 'red'
    },
    {
      id: 3,
      type: 'price-drop',
      icon: TrendingDown,
      title: 'Price Drop Alert',
      message: 'Samsung TV in your wishlist is now ₹3,000 cheaper',
      time: '2 hours ago',
      read: false,
      color: 'blue'
    },
    {
      id: 4,
      type: 'reward',
      icon: Gift,
      title: 'Cashback Credited',
      message: '₹6,249 cashback added to your wallet',
      time: '5 hours ago',
      read: true,
      color: 'amber'
    },
    {
      id: 5,
      type: 'order',
      icon: Package,
      title: 'Order Shipped',
      message: 'Nike Air Max is on the way. Track your order',
      time: '1 day ago',
      read: true,
      color: 'emerald'
    },
    {
      id: 6,
      type: 'booking',
      icon: Calendar,
      title: 'Booking Reminder',
      message: 'Your Hair Spa appointment is tomorrow at 3:00 PM',
      time: '1 day ago',
      read: true,
      color: 'purple'
    },
    {
      id: 7,
      type: 'social',
      icon: Users,
      title: 'Friend Activity',
      message: 'Priya bought Nike Air Max and saved ₹2,000',
      time: '2 days ago',
      read: true,
      color: 'pink'
    },
    {
      id: 8,
      type: 'review',
      icon: Star,
      title: 'Review Reminder',
      message: 'Rate your recent purchase and earn 50 coins',
      time: '2 days ago',
      read: true,
      color: 'amber'
    }
  ]);

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'bg-emerald-500/20 text-emerald-400',
      red: 'bg-red-500/20 text-red-400',
      blue: 'bg-blue-500/20 text-blue-400',
      amber: 'bg-amber-500/20 text-amber-400',
      purple: 'bg-purple-500/20 text-purple-400',
      pink: 'bg-pink-500/20 text-pink-400'
    };
    return colors[color] || colors.emerald;
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications = activeTab === 'all'
    ? notifications
    : activeTab === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === activeTab);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Notifications</h1>
              {unreadCount > 0 && (
                <div className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
                  {unreadCount}
                </div>
              )}
            </div>
            <button
              onClick={markAllAsRead}
              className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700 active:scale-95 transition-all"
            >
              <Settings className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">
            {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          {[
            { id: 'all', label: 'All', icon: Bell },
            { id: 'unread', label: 'Unread', icon: Bell },
            { id: 'order', label: 'Orders', icon: Package },
            { id: 'offer', label: 'Offers', icon: Tag },
            { id: 'reward', label: 'Rewards', icon: Gift }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-700 dark:text-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mark All Read Button */}
        {unreadCount > 0 && (
          <div className="px-4 pb-3">
            <button
              onClick={markAllAsRead}
              className="text-xs text-rez-green-500 dark:text-emerald-400 font-medium flex items-center gap-1"
            >
              <Check className="w-3 h-3" />
              Mark all as read
            </button>
          </div>
        )}
      </div>

      {/* Notifications List */}
      <div className="px-4 py-4">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center">
              <Bell className="w-12 h-12 text-rez-gray-400 dark:text-gray-500" />
            </div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">No notifications</h2>
            <p className="text-body text-rez-gray-600 dark:text-gray-400">
              {activeTab === 'unread'
                ? "You're all caught up!"
                : "You don't have any notifications yet"}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`p-4 rounded-2xl border transition-all active:scale-98 cursor-pointer ${
                  notification.read
                    ? 'bg-white dark:bg-dark-800 border-rez-gray-200 dark:border-dark-700'
                    : 'bg-rez-green-500/5 dark:bg-emerald-500/10 border-rez-green-500/20 dark:border-emerald-500/20'
                }`}
              >
                <div className="flex gap-3">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getColorClasses(notification.color)} flex items-center justify-center`}>
                    <notification.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className={`text-sm font-semibold ${
                        notification.read
                          ? 'text-rez-gray-700 dark:text-gray-300'
                          : 'text-rez-navy dark:text-white'
                      }`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-rez-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-rez-gray-500 dark:text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notification Settings Footer */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-rez-gray-50 dark:from-dark-900 to-transparent">
        <button className="w-full py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white font-semibold flex items-center justify-center gap-2 active:scale-98 transition-all">
          <Settings className="w-4 h-4" />
          Notification Settings
        </button>
      </div>
    </div>
  );
}

export default Notifications;
