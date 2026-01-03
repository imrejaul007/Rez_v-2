import React, { useState } from 'react';
import {
  ArrowLeft, Play, Pause, SkipBack, SkipForward, Monitor, Smartphone,
  Search, Filter, Eye, Clock, User, AlertCircle, Bug, ChevronRight,
  MousePointer, Keyboard, Scroll, RefreshCw, Download, Flag
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminSessionReplay = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('sessions');
  const [selectedSession, setSelectedSession] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = {
    totalSessions: 45678,
    avgDuration: '4m 32s',
    errorSessions: 234,
    frustratedSessions: 156
  };

  const sessions = [
    {
      id: 'SESSION-001',
      user: 'Rahul Sharma',
      userId: 'USR-12345',
      device: 'mobile',
      os: 'Android 13',
      browser: 'Chrome',
      duration: '5m 23s',
      pages: 8,
      clicks: 24,
      errors: 0,
      frustrated: false,
      timestamp: '2024-01-17 14:30:00',
      location: 'Bangalore'
    },
    {
      id: 'SESSION-002',
      user: 'Priya Patel',
      userId: 'USR-12346',
      device: 'desktop',
      os: 'Windows 11',
      browser: 'Chrome',
      duration: '12m 45s',
      pages: 15,
      clicks: 56,
      errors: 2,
      frustrated: true,
      timestamp: '2024-01-17 14:25:00',
      location: 'Mumbai'
    },
    {
      id: 'SESSION-003',
      user: 'Amit Kumar',
      userId: 'USR-12347',
      device: 'mobile',
      os: 'iOS 17',
      browser: 'Safari',
      duration: '3m 12s',
      pages: 5,
      clicks: 18,
      errors: 0,
      frustrated: false,
      timestamp: '2024-01-17 14:20:00',
      location: 'Delhi'
    },
    {
      id: 'SESSION-004',
      user: 'Sneha Reddy',
      userId: 'USR-12348',
      device: 'mobile',
      os: 'Android 14',
      browser: 'Chrome',
      duration: '8m 56s',
      pages: 12,
      clicks: 42,
      errors: 1,
      frustrated: true,
      timestamp: '2024-01-17 14:15:00',
      location: 'Chennai'
    }
  ];

  const sessionEvents = [
    { time: '00:00', type: 'pageview', detail: 'Home page loaded' },
    { time: '00:05', type: 'click', detail: 'Clicked "Explore" button' },
    { time: '00:12', type: 'pageview', detail: 'Navigated to Explore page' },
    { time: '00:18', type: 'scroll', detail: 'Scrolled 50% down' },
    { time: '00:25', type: 'click', detail: 'Clicked restaurant card' },
    { time: '00:32', type: 'pageview', detail: 'Restaurant detail page' },
    { time: '00:45', type: 'click', detail: 'Added item to cart' },
    { time: '00:52', type: 'error', detail: 'Cart API error - 500' },
    { time: '01:05', type: 'rage_click', detail: 'Multiple clicks on checkout button' },
    { time: '01:15', type: 'pageview', detail: 'Checkout page loaded' }
  ];

  const errorTypes = [
    { type: 'API Error', count: 89, percentage: 38 },
    { type: 'JavaScript Error', count: 56, percentage: 24 },
    { type: 'Network Error', count: 45, percentage: 19 },
    { type: 'Timeout', count: 32, percentage: 14 },
    { type: 'Other', count: 12, percentage: 5 }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'click': return <MousePointer size={14} className="text-blue-400" />;
      case 'pageview': return <Eye size={14} className="text-green-400" />;
      case 'scroll': return <Scroll size={14} className="text-purple-400" />;
      case 'error': return <Bug size={14} className="text-red-400" />;
      case 'rage_click': return <AlertCircle size={14} className="text-orange-400" />;
      default: return <Clock size={14} className="text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Monitor size={24} className="mr-2" />
                Session Replay
              </h1>
              <p className="text-purple-200 text-sm">Debug user issues visually</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalSessions/1000).toFixed(1)}K</p>
            <p className="text-xs text-purple-200">Sessions</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.avgDuration}</p>
            <p className="text-xs text-purple-200">Avg Time</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-red-400">{stats.errorSessions}</p>
            <p className="text-xs text-purple-200">With Errors</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-orange-400">{stats.frustratedSessions}</p>
            <p className="text-xs text-purple-200">Frustrated</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('sessions')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'sessions' ? 'bg-purple-600 text-white' : 'text-gray-400'
            }`}
          >
            Sessions
          </button>
          <button
            onClick={() => setActiveTab('errors')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'errors' ? 'bg-purple-600 text-white' : 'text-gray-400'
            }`}
          >
            Errors
          </button>
          <button
            onClick={() => setActiveTab('frustrated')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'frustrated' ? 'bg-purple-600 text-white' : 'text-gray-400'
            }`}
          >
            Frustrated
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-4 pb-4">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by user, session ID..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
            />
          </div>
          <button className="bg-gray-800 text-white px-4 rounded-xl">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Sessions List */}
      {activeTab === 'sessions' && !selectedSession && (
        <div className="px-4 space-y-3">
          {sessions.map(session => (
            <div
              key={session.id}
              className="bg-gray-800 rounded-xl p-4 cursor-pointer"
              onClick={() => setSelectedSession(session)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    session.device === 'mobile' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                  }`}>
                    {session.device === 'mobile' ? (
                      <Smartphone size={20} className="text-blue-400" />
                    ) : (
                      <Monitor size={20} className="text-purple-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-bold">{session.user}</p>
                    <p className="text-gray-400 text-sm">{session.userId}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {session.errors > 0 && (
                    <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full text-xs flex items-center">
                      <Bug size={12} className="mr-1" />
                      {session.errors}
                    </span>
                  )}
                  {session.frustrated && (
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full text-xs">
                      Frustrated
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{session.duration}</p>
                  <p className="text-gray-400 text-xs">Duration</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{session.pages}</p>
                  <p className="text-gray-400 text-xs">Pages</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{session.clicks}</p>
                  <p className="text-gray-400 text-xs">Clicks</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold truncate text-xs">{session.os}</p>
                  <p className="text-gray-400 text-xs">OS</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{session.timestamp}</span>
                <div className="flex items-center text-purple-400">
                  <Play size={14} className="mr-1" />
                  Watch Session
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Session Player */}
      {selectedSession && (
        <div className="px-4">
          <button
            onClick={() => setSelectedSession(null)}
            className="text-purple-400 mb-4 flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to sessions
          </button>

          {/* Player */}
          <div className="bg-gray-800 rounded-xl overflow-hidden mb-4">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Monitor size={64} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Session Replay Player</p>
                <p className="text-gray-500 text-sm">Click play to watch user session</p>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">00:00</span>
                <div className="flex-1 mx-4">
                  <div className="h-1 bg-gray-700 rounded-full">
                    <div className="h-full w-1/3 bg-purple-500 rounded-full" />
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{selectedSession.duration}</span>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button className="text-gray-400">
                  <SkipBack size={24} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button className="text-gray-400">
                  <SkipForward size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Event Timeline */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Event Timeline</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {sessionEvents.map((event, idx) => (
                <div key={idx} className={`flex items-center p-2 rounded-lg ${
                  event.type === 'error' || event.type === 'rage_click' ? 'bg-red-500/10' : 'bg-gray-700/50'
                }`}>
                  <span className="text-gray-400 text-xs w-12">{event.time}</span>
                  <div className="mx-2">{getEventIcon(event.type)}</div>
                  <span className="text-gray-300 text-sm">{event.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Errors Tab */}
      {activeTab === 'errors' && (
        <div className="px-4 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Error Distribution</h3>
            <div className="space-y-3">
              {errorTypes.map((error, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300">{error.type}</span>
                    <span className="text-white font-medium">{error.count}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${error.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Frustrated Tab */}
      {activeTab === 'frustrated' && (
        <div className="px-4 space-y-3">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-4">
            <div className="flex items-start">
              <AlertCircle size={20} className="text-orange-400 mr-2 mt-0.5" />
              <div>
                <p className="text-orange-400 font-medium">Frustrated Sessions</p>
                <p className="text-gray-300 text-sm">
                  Sessions with rage clicks, dead clicks, or error thrashing
                </p>
              </div>
            </div>
          </div>

          {sessions.filter(s => s.frustrated).map(session => (
            <div key={session.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mr-3">
                    <AlertCircle size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{session.user}</p>
                    <p className="text-gray-400 text-sm">{session.timestamp}</p>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                  <Play size={14} className="mr-1" />
                  Watch
                </button>
              </div>
              <div className="bg-orange-500/10 rounded-lg p-2">
                <p className="text-orange-400 text-sm">Detected: Rage clicks on checkout button</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSessionReplay;
