import React, { useState } from 'react';
import {
  ArrowLeft, MousePointer, Eye, Clock, TrendingUp,
  Smartphone, Monitor, Filter, Calendar, Download,
  Play, Pause, ChevronRight, Layers, Target,
  ArrowUp, ArrowDown, Activity, Map, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHeatmaps = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('click');
  const [selectedPage, setSelectedPage] = useState('/merchant/dashboard');
  const [dateRange, setDateRange] = useState('7d');
  const [deviceType, setDeviceType] = useState('all');

  const stats = {
    totalSessions: 45678,
    avgSessionDuration: '4m 32s',
    totalClicks: 234567,
    scrollDepth: 68,
    engagementRate: 72.5,
    bounceRate: 23.4
  };

  const pages = [
    { path: '/merchant/dashboard', name: 'Dashboard', sessions: 12456, clicks: 45678 },
    { path: '/merchant/orders', name: 'Orders', sessions: 8934, clicks: 34567 },
    { path: '/merchant/products', name: 'Products', sessions: 6789, clicks: 23456 },
    { path: '/merchant/customers', name: 'Customers', sessions: 4567, clicks: 15678 },
    { path: '/merchant/analytics', name: 'Analytics', sessions: 3456, clicks: 12345 },
    { path: '/user/home', name: 'User Home', sessions: 23456, clicks: 89123 },
    { path: '/user/cart', name: 'Cart', sessions: 15678, clicks: 56789 }
  ];

  const clickHotspots = [
    { element: 'Add Product Button', clicks: 12456, percentage: 28.5 },
    { element: 'Search Bar', clicks: 8934, percentage: 20.4 },
    { element: 'Navigation Menu', clicks: 6789, percentage: 15.5 },
    { element: 'Filter Dropdown', clicks: 4567, percentage: 10.4 },
    { element: 'Sort Options', clicks: 3456, percentage: 7.9 },
    { element: 'Quick Actions', clicks: 2345, percentage: 5.4 },
    { element: 'Profile Icon', clicks: 1234, percentage: 2.8 }
  ];

  const scrollZones = [
    { zone: 'Above the fold (0-25%)', viewRate: 100, avgTime: '15s', engagement: 'high' },
    { zone: 'First scroll (25-50%)', viewRate: 85, avgTime: '22s', engagement: 'high' },
    { zone: 'Mid page (50-75%)', viewRate: 62, avgTime: '18s', engagement: 'medium' },
    { zone: 'Bottom (75-100%)', viewRate: 34, avgTime: '8s', engagement: 'low' }
  ];

  const funnelSteps = [
    { step: 'Page Load', users: 10000, dropoff: 0 },
    { step: 'View Products', users: 7500, dropoff: 25 },
    { step: 'Add to Cart', users: 3000, dropoff: 60 },
    { step: 'Checkout Start', users: 1800, dropoff: 40 },
    { step: 'Payment', users: 1200, dropoff: 33 },
    { step: 'Order Complete', users: 1000, dropoff: 17 }
  ];

  const sessionReplays = [
    {
      id: 1,
      user: 'User #45678',
      device: 'mobile',
      duration: '3m 45s',
      pages: 5,
      events: 34,
      frustration: 'low',
      time: '15 min ago'
    },
    {
      id: 2,
      user: 'User #45679',
      device: 'desktop',
      duration: '8m 12s',
      pages: 12,
      events: 89,
      frustration: 'high',
      time: '28 min ago'
    },
    {
      id: 3,
      user: 'User #45680',
      device: 'mobile',
      duration: '2m 03s',
      pages: 3,
      events: 18,
      frustration: 'medium',
      time: '45 min ago'
    }
  ];

  const getFrustrationColor = (level) => {
    switch (level) {
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getEngagementColor = (level) => {
    switch (level) {
      case 'high':
        return 'text-green-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Map size={24} className="mr-2" />
                Heatmaps & Analytics
              </h1>
              <p className="text-fuchsia-200 text-sm">User behavior visualization</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-white/20 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="24h">Last 24h</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalSessions/1000).toFixed(1)}K</p>
            <p className="text-xs text-fuchsia-200">Sessions</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.scrollDepth}%</p>
            <p className="text-xs text-fuchsia-200">Avg Scroll</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{stats.engagementRate}%</p>
            <p className="text-xs text-fuchsia-200">Engaged</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'click', label: 'Clicks', icon: MousePointer },
            { id: 'scroll', label: 'Scroll', icon: ArrowDown },
            { id: 'funnel', label: 'Funnel', icon: Target },
            { id: 'replay', label: 'Replay', icon: Play }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center ${
                  activeTab === tab.id ? 'bg-fuchsia-600 text-white' : 'text-gray-400'
                }`}
              >
                <Icon size={14} className="mr-1" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Page Selector */}
      <div className="px-4 mb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {pages.map(page => (
            <button
              key={page.path}
              onClick={() => setSelectedPage(page.path)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                selectedPage === page.path
                  ? 'bg-fuchsia-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {page.name}
            </button>
          ))}
        </div>
      </div>

      {/* Click Heatmap Tab */}
      {activeTab === 'click' && (
        <div className="px-4 space-y-4">
          {/* Device Filter */}
          <div className="flex space-x-2">
            {[
              { id: 'all', label: 'All Devices' },
              { id: 'mobile', label: 'Mobile', icon: Smartphone },
              { id: 'desktop', label: 'Desktop', icon: Monitor }
            ].map(device => (
              <button
                key={device.id}
                onClick={() => setDeviceType(device.id)}
                className={`px-4 py-2 rounded-lg text-sm flex items-center ${
                  deviceType === device.id ? 'bg-fuchsia-600 text-white' : 'bg-gray-800 text-gray-400'
                }`}
              >
                {device.icon && <device.icon size={14} className="mr-1" />}
                {device.label}
              </button>
            ))}
          </div>

          {/* Heatmap Visualization */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Click Heatmap Preview</h3>
            <div className="bg-gray-700 rounded-lg aspect-[9/16] relative overflow-hidden">
              {/* Simulated heatmap overlay */}
              <div className="absolute inset-0 flex flex-col">
                {/* Header area - high engagement */}
                <div className="h-20 bg-gradient-to-b from-red-500/40 to-orange-500/30 flex items-center justify-center">
                  <span className="text-white/70 text-xs">Header (Hot Zone)</span>
                </div>

                {/* Search area */}
                <div className="h-12 bg-yellow-500/30 flex items-center justify-center">
                  <span className="text-white/70 text-xs">Search Bar</span>
                </div>

                {/* Content area */}
                <div className="flex-1 bg-gradient-to-b from-green-500/20 to-blue-500/10 flex items-center justify-center">
                  <span className="text-white/70 text-xs">Content Area (Medium)</span>
                </div>

                {/* Footer */}
                <div className="h-16 bg-blue-500/10 flex items-center justify-center">
                  <span className="text-white/70 text-xs">Footer (Low)</span>
                </div>
              </div>

              {/* Hotspot indicators */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse opacity-70" />
              <div className="absolute top-24 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full opacity-60" />
              <div className="absolute top-1/3 left-4 w-5 h-5 bg-yellow-500 rounded-full opacity-50" />
            </div>

            <div className="mt-3 flex items-center justify-center space-x-4 text-xs">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded mr-1" />
                <span className="text-gray-400">Hot</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded mr-1" />
                <span className="text-gray-400">Medium</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded mr-1" />
                <span className="text-gray-400">Cold</span>
              </div>
            </div>
          </div>

          {/* Click Hotspots List */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Top Click Areas</h3>
            <div className="space-y-3">
              {clickHotspots.map((hotspot, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 text-xs mr-3">
                      {idx + 1}
                    </span>
                    <span className="text-white">{hotspot.element}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{hotspot.clicks.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">{hotspot.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scroll Heatmap Tab */}
      {activeTab === 'scroll' && (
        <div className="px-4 space-y-4">
          {/* Scroll Depth Visualization */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Scroll Depth Analysis</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="space-y-1">
                {[100, 75, 50, 25, 0].map((depth, idx) => {
                  const viewRate = depth === 100 ? 100 : depth === 75 ? 85 : depth === 50 ? 62 : depth === 25 ? 34 : 20;
                  return (
                    <div key={depth} className="relative">
                      <div className="flex items-center">
                        <span className="w-12 text-gray-400 text-xs">{depth}%</span>
                        <div className="flex-1 bg-gray-600 rounded-full h-6 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              viewRate >= 80 ? 'bg-green-500' :
                              viewRate >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${viewRate}%` }}
                          />
                        </div>
                        <span className="w-12 text-right text-white text-sm">{viewRate}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-3">
              Average scroll depth: <span className="text-white font-medium">{stats.scrollDepth}%</span>
            </p>
          </div>

          {/* Scroll Zones */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Content Zone Analysis</h3>
            <div className="space-y-3">
              {scrollZones.map((zone, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{zone.zone}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      zone.engagement === 'high' ? 'bg-green-500/20 text-green-400' :
                      zone.engagement === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {zone.engagement}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">View Rate: </span>
                      <span className="text-white">{zone.viewRate}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg Time: </span>
                      <span className="text-white">{zone.avgTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-4">
            <h4 className="text-fuchsia-400 font-medium mb-2">Insights</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• 66% of users don't scroll past 50% - consider moving CTAs higher</li>
              <li>• Bottom content has low engagement - evaluate content value</li>
              <li>• First fold content has high dwell time - capitalize on this</li>
            </ul>
          </div>
        </div>
      )}

      {/* Funnel Tab */}
      {activeTab === 'funnel' && (
        <div className="px-4 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Conversion Funnel</h3>

            <div className="space-y-2">
              {funnelSteps.map((step, idx) => {
                const width = (step.users / funnelSteps[0].users) * 100;
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-sm">{step.step}</span>
                      <span className="text-white text-sm">{step.users.toLocaleString()}</span>
                    </div>
                    <div className="relative">
                      <div className="bg-gray-700 rounded-lg h-10">
                        <div
                          className="bg-gradient-to-r from-fuchsia-600 to-pink-500 h-10 rounded-lg flex items-center justify-center"
                          style={{ width: `${width}%` }}
                        >
                          {width > 20 && (
                            <span className="text-white text-sm font-medium">{width.toFixed(0)}%</span>
                          )}
                        </div>
                      </div>
                      {step.dropoff > 0 && idx < funnelSteps.length - 1 && (
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                          -{step.dropoff}%
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-400">Overall Conversion Rate</span>
                <span className="text-green-400 font-bold">10%</span>
              </div>
            </div>
          </div>

          {/* Drop-off Analysis */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Drop-off Analysis</h3>
            <div className="space-y-3">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">View Products → Add to Cart</span>
                  <span className="text-red-400 font-bold">-60%</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Highest drop-off. Consider improving product pages or pricing.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">Checkout Start → Payment</span>
                  <span className="text-yellow-400 font-bold">-33%</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Consider simplifying checkout or adding more payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Session Replay Tab */}
      {activeTab === 'replay' && (
        <div className="px-4 space-y-4">
          {/* Filters */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="flex-shrink-0 px-4 py-2 bg-fuchsia-600 text-white rounded-full text-sm">
              All Sessions
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm">
              High Frustration
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm">
              Rage Clicks
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm">
              Errors
            </button>
          </div>

          {/* Session List */}
          {sessionReplays.map(session => (
            <div key={session.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-bold">{session.user}</h4>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    {session.device === 'mobile' ? (
                      <Smartphone size={14} className="mr-1" />
                    ) : (
                      <Monitor size={14} className="mr-1" />
                    )}
                    <span>{session.device}</span>
                    <span className="mx-2">•</span>
                    <span>{session.time}</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${getFrustrationColor(session.frustration)}`}>
                  {session.frustration} frustration
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-medium">{session.duration}</p>
                  <p className="text-gray-400 text-xs">Duration</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-medium">{session.pages}</p>
                  <p className="text-gray-400 text-xs">Pages</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-medium">{session.events}</p>
                  <p className="text-gray-400 text-xs">Events</p>
                </div>
              </div>

              <button className="w-full bg-fuchsia-600 text-white py-2 rounded-lg flex items-center justify-center">
                <Play size={16} className="mr-2" />
                Watch Replay
              </button>
            </div>
          ))}

          {/* Privacy Notice */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Privacy Compliance</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• All sensitive data is masked in recordings</li>
              <li>• Passwords and payment info are never captured</li>
              <li>• Sessions are anonymized after 30 days</li>
              <li>• GDPR and CCPA compliant</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeatmaps;
