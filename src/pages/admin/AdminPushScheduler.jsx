import React, { useState } from 'react';
import { Bell, Calendar, Clock, Users, Target, Send, Pause, Play, Trash2, Copy, BarChart3, Globe } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminPushScheduler = () => {
  const [activeTab, setActiveTab] = useState('scheduled');

  // Mock scheduled notifications
  const scheduledNotifications = [
    {
      id: 1,
      title: 'Flash Sale Alert',
      message: '50% OFF on all electronics - Limited time only!',
      audience: 'All Active Users',
      audienceCount: 45623,
      scheduledTime: '2025-01-20 10:00:00',
      status: 'scheduled',
      deepLink: '/deals/flash-sale',
      image: true,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Abandoned Cart Reminder',
      message: 'You left items in your cart - Complete your purchase now!',
      audience: 'Cart Abandoners',
      audienceCount: 1234,
      scheduledTime: '2025-01-20 15:30:00',
      status: 'scheduled',
      deepLink: '/cart',
      image: false,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Daily Check-in Bonus',
      message: 'Check in today and earn 50 bonus coins!',
      audience: 'Daily Active Users',
      audienceCount: 23456,
      scheduledTime: '2025-01-21 09:00:00',
      status: 'scheduled',
      deepLink: '/checkin',
      image: false,
      priority: 'low'
    }
  ];

  // Mock sent notifications
  const sentNotifications = [
    {
      id: 101,
      title: 'New Year Sale',
      message: 'Start 2025 with amazing deals - Up to 70% OFF!',
      audience: 'All Users',
      audienceCount: 50000,
      sentTime: '2025-01-15 08:00:00',
      delivered: 48523,
      opened: 23456,
      clicked: 12345,
      openRate: 48.3,
      clickRate: 25.4
    },
    {
      id: 102,
      title: 'Order Delivered',
      message: 'Your order #ORD-123 has been delivered successfully',
      audience: 'Order Recipients',
      audienceCount: 234,
      sentTime: '2025-01-14 16:45:00',
      delivered: 234,
      opened: 198,
      clicked: 145,
      openRate: 84.6,
      clickRate: 62.0
    }
  ];

  // Mock audience segments
  const audiences = [
    { id: 1, name: 'All Active Users', count: 45623 },
    { id: 2, name: 'High-Value Customers', count: 3456 },
    { id: 3, name: 'Cart Abandoners', count: 1234 },
    { id: 4, name: 'Inactive Users (7d)', count: 5678 },
    { id: 5, name: 'VIP Tier Members', count: 567 },
    { id: 6, name: 'First-Time Users', count: 2345 }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Bell className="w-10 h-10 text-blue-400" />
            Push Notification Scheduler
          </h1>
          <p className="text-gray-400">Schedule and manage push notifications</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Scheduled</span>
            </div>
            <div className="text-3xl font-bold text-white">{scheduledNotifications.length}</div>
            <div className="text-sm text-blue-400">Next in 2 hours</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Send className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Sent Today</span>
            </div>
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-sm text-green-400">48.5K delivered</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-purple-400" />
              <span className="text-xs text-gray-400">Avg Open Rate</span>
            </div>
            <div className="text-3xl font-bold text-white">52.3%</div>
            <div className="text-sm text-purple-400">+5.2% vs last week</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Click Rate</span>
            </div>
            <div className="text-3xl font-bold text-white">28.7%</div>
            <div className="text-sm text-yellow-400">Above benchmark</div>
          </div>
        </div>

        {/* Quick Create */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Quick Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Notification Title</label>
              <input
                type="text"
                placeholder="e.g., Flash Sale Alert"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Target Audience</label>
              <select className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400">
                {audiences.map((aud) => (
                  <option key={aud.id} value={aud.id}>{aud.name} ({aud.count.toLocaleString()})</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-400 text-sm mb-2 block">Message</label>
              <textarea
                placeholder="Write your notification message..."
                rows={3}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Schedule Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Schedule Time</label>
              <input
                type="time"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Notification
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Immediately
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {[
            { id: 'scheduled', label: 'Scheduled', icon: Calendar },
            { id: 'sent', label: 'Sent History', icon: Send },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'scheduled' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Scheduled Notifications</h2>
              {scheduledNotifications.map((notif) => (
                <div key={notif.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Bell className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white">{notif.title}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full border ${getPriorityColor(notif.priority)}`}>
                          {notif.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{notif.message}</p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{notif.audience} ({notif.audienceCount.toLocaleString()})</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{notif.scheduledTime}</span>
                        </div>
                        {notif.image && (
                          <span className="text-purple-400 text-xs bg-purple-500/20 px-2 py-1 rounded">
                            With Image
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all">
                        <Pause className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {notif.deepLink && (
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <span className="text-gray-400 text-sm">Deep Link: </span>
                      <span className="text-blue-400 text-sm">{notif.deepLink}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sent' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Sent Notifications</h2>
              {sentNotifications.map((notif) => (
                <div key={notif.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{notif.title}</h3>
                      <p className="text-gray-400 mb-3">{notif.message}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span>Sent: {notif.sentTime}</span>
                        <span>{notif.audience} ({notif.audienceCount.toLocaleString()})</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Delivered</div>
                      <div className="text-white font-bold text-xl">{notif.delivered.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Opened</div>
                      <div className="text-green-400 font-bold text-xl">{notif.opened.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Clicked</div>
                      <div className="text-blue-400 font-bold text-xl">{notif.clicked.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Open Rate</div>
                      <div className="text-purple-400 font-bold text-xl">{notif.openRate}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Performance Analytics</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-bold mb-4">Best Performing Times</h3>
                  <div className="space-y-3">
                    {['09:00 AM', '03:00 PM', '07:00 PM'].map((time, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-400">{time}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-white/10 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${90 - idx * 15}%` }}></div>
                          </div>
                          <span className="text-white font-bold">{90 - idx * 15}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-white font-bold mb-4">Top Performing Audiences</h3>
                  <div className="space-y-3">
                    {['VIP Members', 'High-Value', 'Daily Active'].map((aud, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-400">{aud}</span>
                        <span className="text-green-400 font-bold">{85 - idx * 10}% CTR</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPushScheduler;
