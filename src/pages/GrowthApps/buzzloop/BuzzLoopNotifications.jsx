import React from 'react';
import { Bell, Heart, MessageCircle, UserPlus, Play, TrendingUp } from 'lucide-react';

// BuzzLoop Notifications: Activity Notifications
// Backend API: GET /api/growth/buzzloop/notifications
// Backend API: PUT /api/growth/buzzloop/notifications/read

const BuzzLoopNotifications = () => {
  const notifications = [
    { id: 1, type: 'like', user: '@techguru', avatar: '👨‍💻', action: 'liked your video', time: '2h ago', isNew: true },
    { id: 2, type: 'comment', user: '@foodlover', avatar: '👨‍🍳', action: 'commented on your video', time: '5h ago', isNew: true },
    { id: 3, type: 'follow', user: '@fashionista', avatar: '👗', action: 'started following you', time: '1d ago', isNew: false },
    { id: 4, type: 'trending', user: 'BuzzLoop', avatar: '🔥', action: 'Your video is trending!', time: '2d ago', isNew: false }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'like': return <Heart className="w-5 h-5 text-red-500" />;
      case 'comment': return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'follow': return <UserPlus className="w-5 h-5 text-green-500" />;
      case 'trending': return <TrendingUp className="w-5 h-5 text-orange-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
      </div>

      <div className="px-4 mt-4 space-y-2">
        {notifications.map((notif) => (
          <div key={notif.id} className={`bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 ${notif.isNew ? 'border-l-4 border-purple-600' : ''}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl relative">
              {notif.avatar}
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                {getIcon(notif.type)}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">
                <span className="font-bold">{notif.user}</span> {notif.action}
              </p>
              <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
            </div>
            {notif.isNew && (
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopNotifications;
