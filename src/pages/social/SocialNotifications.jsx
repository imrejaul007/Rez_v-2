import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  UserPlus,
  Users,
  Calendar,
  Tag,
  Bell,
  Settings,
  Check,
  Trash2
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialNotifications = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: { id: 101, name: 'Sarah Kim', avatar: '👩‍💻' },
      content: 'liked your post about weekend deals',
      timestamp: '5m ago',
      isRead: false,
      postPreview: '🛍️'
    },
    {
      id: 2,
      type: 'comment',
      user: { id: 102, name: 'Mike Wilson', avatar: '👨‍🚀' },
      content: 'commented on your post: "Great find! Thanks for sharing"',
      timestamp: '15m ago',
      isRead: false,
      postPreview: '📱'
    },
    {
      id: 3,
      type: 'follow',
      user: { id: 103, name: 'Emily Chen', avatar: '👩‍🎨' },
      content: 'started following you',
      timestamp: '1h ago',
      isRead: false
    },
    {
      id: 4,
      type: 'mention',
      user: { id: 104, name: 'David Brown', avatar: '👨‍🔬' },
      content: 'mentioned you in a comment',
      timestamp: '2h ago',
      isRead: true,
      postPreview: '👟'
    },
    {
      id: 5,
      type: 'group',
      group: { id: 1, name: 'Deal Hunters United', icon: '🎯' },
      content: 'New post in Deal Hunters United',
      timestamp: '3h ago',
      isRead: true
    },
    {
      id: 6,
      type: 'event',
      event: { id: 1, name: 'Weekend Shopping Festival', icon: '🛍️' },
      content: 'Event starts in 2 days',
      timestamp: '5h ago',
      isRead: true
    },
    {
      id: 7,
      type: 'like',
      user: { id: 105, name: 'Lisa Taylor', avatar: '👩‍🏫' },
      content: 'liked your comment',
      timestamp: '1d ago',
      isRead: true
    },
    {
      id: 8,
      type: 'follow',
      user: { id: 106, name: 'John Doe', avatar: '👨‍💼' },
      content: 'started following you',
      timestamp: '2d ago',
      isRead: true
    }
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like':
        return <Heart className="w-5 h-5 text-pink-500" />;
      case 'comment':
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'follow':
        return <UserPlus className="w-5 h-5 text-green-500" />;
      case 'mention':
        return <Tag className="w-5 h-5 text-purple-500" />;
      case 'group':
        return <Users className="w-5 h-5 text-orange-500" />;
      case 'event':
        return <Calendar className="w-5 h-5 text-amber-500" />;
      default:
        return <Bell className="w-5 h-5 text-rez-gray-500" />;
    }
  };

  const getNotificationBg = (type) => {
    switch (type) {
      case 'like':
        return 'bg-pink-50 dark:bg-pink-500/10';
      case 'comment':
        return 'bg-blue-50 dark:bg-blue-500/10';
      case 'follow':
        return 'bg-green-50 dark:bg-green-500/10';
      case 'mention':
        return 'bg-purple-50 dark:bg-purple-500/10';
      case 'group':
        return 'bg-orange-50 dark:bg-orange-500/10';
      case 'event':
        return 'bg-amber-50 dark:bg-amber-500/10';
      default:
        return 'bg-rez-gray-50 dark:bg-white/5';
    }
  };

  const handleNotificationClick = (notification) => {
    // Mark as read
    markAsRead(notification.id);

    // Navigate based on type
    if (notification.type === 'follow') {
      navigate(`/social/profile/${notification.user.id}`);
    } else if (notification.type === 'group') {
      navigate(`/social/groups/${notification.group.id}`);
    } else if (notification.type === 'event') {
      navigate(`/social/events/${notification.event.id}`);
    } else if (notification.postPreview) {
      navigate('/social/post/123');
    }
  };

  const markAsRead = (notificationId) => {
    // API: POST /api/social/notifications/{notificationId}/read
    // TODO: Implement mark as read with backend
    setNotifications(notifications.map(n =>
      n.id === notificationId ? { ...n, isRead: true } : n
    ));
  };

  const markAllAsRead = () => {
    // API: POST /api/social/notifications/read-all
    // TODO: Implement mark all as read with backend
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (notificationId, e) => {
    e.stopPropagation();
    // API: DELETE /api/social/notifications/{notificationId}
    // TODO: Implement delete notification with backend
    setNotifications(notifications.filter(n => n.id !== notificationId));
  };

  const filteredNotifications = activeTab === 'all'
    ? notifications
    : activeTab === 'unread'
      ? notifications.filter(n => !n.isRead)
      : notifications.filter(n => n.type === activeTab);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Notifications</h1>
              {unreadCount > 0 && (
                <p className="text-caption text-blue-500">{unreadCount} unread</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                title="Mark all as read"
              >
                <Check className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            )}
            <button
              onClick={() => navigate('/social/settings')}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <Settings className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'unread'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </button>
          <button
            onClick={() => setActiveTab('follow')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'follow'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Followers
          </button>
          <button
            onClick={() => setActiveTab('like')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'like'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Likes
          </button>
          <button
            onClick={() => setActiveTab('comment')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'comment'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Comments
          </button>
        </div>
      </div>

      <div className="px-4 py-2 space-y-2">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <button
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`w-full p-4 rounded-rez-lg border transition-all text-left group ${
                !notification.isRead
                  ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30'
                  : 'bg-white dark:bg-bg-card border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`p-2 rounded-lg ${getNotificationBg(notification.type)} shrink-0`}>
                  {getNotificationIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2">
                    {/* Avatar */}
                    {notification.user && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl shrink-0">
                        {notification.user.avatar}
                      </div>
                    )}
                    {notification.group && (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-xl shrink-0">
                        {notification.group.icon}
                      </div>
                    )}
                    {notification.event && (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl shrink-0">
                        {notification.event.icon}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <p className="text-body-sm text-rez-navy dark:text-white">
                        <span className="font-semibold">
                          {notification.user?.name || notification.group?.name || notification.event?.name}
                        </span>{' '}
                        {notification.content}
                      </p>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">
                        {notification.timestamp}
                      </p>
                    </div>

                    {/* Post Preview */}
                    {notification.postPreview && (
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl shrink-0">
                        {notification.postPreview}
                      </div>
                    )}
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={(e) => deleteNotification(notification.id, e)}
                  className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all shrink-0"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>

                {/* Unread Indicator */}
                {!notification.isRead && (
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                )}
              </div>
            </button>
          ))
        ) : (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {activeTab === 'unread' ? 'No unread notifications' : 'No notifications yet'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {activeTab === 'unread'
                ? 'You\'re all caught up!'
                : 'When you get notifications, they\'ll appear here'}
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialNotifications;
