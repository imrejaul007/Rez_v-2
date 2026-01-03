import { useState } from 'react';
import {
  Bell, Mail, Smartphone, Filter, Search, CheckCircle, XCircle,
  ShoppingCart, Star, DollarSign, Tag, TrendingDown, Users,
  AlertCircle, Clock, Trash2, Check, Settings, Calendar
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantNotifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Notification Preferences State
  const [emailNotifications, setEmailNotifications] = useState({
    dailySummary: true,
    newOrders: true,
    reviews: true,
    settlements: true,
    offerApprovals: true,
    lowRatings: false,
    newFollowers: true,
    marketing: false
  });

  const [smsNotifications, setSmsNotifications] = useState({
    newOrders: true,
    urgentAlerts: true,
    settlements: false,
    reviews: false
  });

  const [pushNotifications, setPushNotifications] = useState({
    newOrders: true,
    reviews: true,
    settlements: true,
    offerApprovals: true,
    lowRatings: true,
    newFollowers: false,
    marketing: false
  });

  // Notifications State
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      icon: ShoppingCart,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      title: 'New Order Received',
      message: 'Order #ORD-2024-156 - Coffee Combo by John Doe',
      timestamp: '5 minutes ago',
      time: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'review',
      icon: Star,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
      title: 'New Review Posted',
      message: 'Jane Smith left a 5-star review: "Amazing coffee and great service!"',
      timestamp: '1 hour ago',
      time: new Date(Date.now() - 60 * 60 * 1000),
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'settlement',
      icon: DollarSign,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      title: 'Settlement Processed',
      message: 'Weekly settlement of ₹45,678 has been credited to your account',
      timestamp: '2 hours ago',
      time: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
      priority: 'high'
    },
    {
      id: 4,
      type: 'offer',
      icon: Tag,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      title: 'Offer Approved',
      message: 'Your offer "50% OFF on All Pizzas" has been approved and is now live',
      timestamp: '3 hours ago',
      time: new Date(Date.now() - 3 * 60 * 60 * 1000),
      read: true,
      priority: 'medium'
    },
    {
      id: 5,
      type: 'rating',
      icon: TrendingDown,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100',
      title: 'Rating Alert',
      message: 'Your average rating dropped to 4.2. Consider improving service quality.',
      timestamp: '5 hours ago',
      time: new Date(Date.now() - 5 * 60 * 60 * 1000),
      read: false,
      priority: 'high'
    },
    {
      id: 6,
      type: 'follower',
      icon: Users,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      title: 'New Follower',
      message: '25 new users followed your store this week',
      timestamp: '1 day ago',
      time: new Date(Date.now() - 24 * 60 * 60 * 1000),
      read: true,
      priority: 'low'
    },
    {
      id: 7,
      type: 'order',
      icon: ShoppingCart,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      title: 'Order Completed',
      message: 'Order #ORD-2024-155 has been successfully completed',
      timestamp: '1 day ago',
      time: new Date(Date.now() - 25 * 60 * 60 * 1000),
      read: true,
      priority: 'medium'
    },
    {
      id: 8,
      type: 'alert',
      icon: AlertCircle,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      title: 'System Alert',
      message: 'Your profile completion is at 85%. Complete to unlock premium features.',
      timestamp: '2 days ago',
      time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      read: true,
      priority: 'low'
    },
    {
      id: 9,
      type: 'review',
      icon: Star,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
      title: 'New Review Posted',
      message: 'Mike Johnson left a 4-star review: "Good food but slow service"',
      timestamp: '3 days ago',
      time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      read: true,
      priority: 'medium'
    },
    {
      id: 10,
      type: 'settlement',
      icon: DollarSign,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      title: 'Settlement Scheduled',
      message: 'Your next settlement of ₹12,340 is scheduled for tomorrow',
      timestamp: '3 days ago',
      time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      read: true,
      priority: 'medium'
    }
  ]);

  const handleSavePreferences = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAsUnread = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: false } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const clearAllNotifications = () => {
    if (window.confirm('Are you sure you want to clear all notifications?')) {
      setNotifications([]);
    }
  };

  // Filter notifications
  const filteredNotifications = notifications.filter(notif => {
    const matchesSearch = notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notif.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || notif.type === filterType;
    const matchesStatus = filterStatus === 'all' ||
                          (filterStatus === 'unread' && !notif.read) ||
                          (filterStatus === 'read' && notif.read);
    return matchesSearch && matchesType && matchesStatus;
  });

  // Stats
  const unreadCount = notifications.filter(n => !n.read).length;
  const todayCount = notifications.filter(n => {
    const today = new Date();
    return n.time.toDateString() === today.toDateString();
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications & Alerts</h1>
              <p className="text-gray-600 mt-1">Stay updated with your business activities</p>
            </div>
            {saveSuccess && (
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Preferences saved successfully!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Notifications</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{notifications.length}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-3xl font-bold text-orange-600 mt-1">{unreadCount}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{todayCount}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Notifications Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Notification Center</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={markAllAsRead}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      <Check className="w-4 h-4" />
                      Mark all read
                    </button>
                    <button
                      onClick={clearAllNotifications}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Clear all
                    </button>
                  </div>
                </div>

                {/* Search and Filters */}
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search notifications..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Types</option>
                    <option value="order">Orders</option>
                    <option value="review">Reviews</option>
                    <option value="settlement">Settlements</option>
                    <option value="offer">Offers</option>
                    <option value="rating">Ratings</option>
                    <option value="follower">Followers</option>
                    <option value="alert">Alerts</option>
                  </select>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                  </select>
                </div>
              </div>

              {/* Notifications List */}
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {filteredNotifications.length === 0 ? (
                  <div className="p-12 text-center">
                    <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No notifications found</p>
                  </div>
                ) : (
                  filteredNotifications.map((notif) => {
                    const Icon = notif.icon;
                    return (
                      <div
                        key={notif.id}
                        className={`p-4 hover:bg-gray-50 transition-colors ${
                          !notif.read ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`${notif.iconBg} p-3 rounded-lg flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${notif.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-1">
                              <h3 className={`font-medium ${!notif.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notif.title}
                                {!notif.read && (
                                  <span className="ml-2 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                                )}
                              </h3>
                              <div className="flex items-center gap-2">
                                {!notif.read ? (
                                  <button
                                    onClick={() => markAsRead(notif.id)}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm"
                                    title="Mark as read"
                                  >
                                    <CheckCircle className="w-4 h-4" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => markAsUnread(notif.id)}
                                    className="text-gray-400 hover:text-gray-600 text-sm"
                                    title="Mark as unread"
                                  >
                                    <XCircle className="w-4 h-4" />
                                  </button>
                                )}
                                <button
                                  onClick={() => deleteNotification(notif.id)}
                                  className="text-red-400 hover:text-red-600 text-sm"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{notif.message}</p>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="w-3 h-3" />
                                {notif.timestamp}
                              </span>
                              {notif.priority === 'high' && (
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                                  High Priority
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Notification Preferences Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-bold text-gray-900">Preferences</h2>
              </div>

              <div className="space-y-6">
                {/* Email Notifications */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Email Notifications</h3>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(emailNotifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) =>
                              setEmailNotifications({ ...emailNotifications, [key]: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SMS Notifications */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-4 h-4 text-green-600" />
                    <h3 className="text-sm font-semibold text-gray-900">SMS Notifications</h3>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(smsNotifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) =>
                              setSmsNotifications({ ...smsNotifications, [key]: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Push Notifications */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Bell className="w-4 h-4 text-purple-600" />
                    <h3 className="text-sm font-semibold text-gray-900">Push Notifications</h3>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(pushNotifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) =>
                              setPushNotifications({ ...pushNotifications, [key]: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSavePreferences}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
