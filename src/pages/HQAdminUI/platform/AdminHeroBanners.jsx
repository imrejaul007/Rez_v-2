import { useState } from 'react';
import {
  Image, Upload, Calendar, Eye, TrendingUp, MousePointer, Target,
  Plus, Edit, Trash2, Clock, Users, Smartphone, Monitor, ChevronUp,
  ChevronDown, Play, Pause, Archive, BarChart3, Download, Filter,
  Settings, Link as LinkIcon, Zap, CheckCircle, XCircle
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminHeroBanners() {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const [banners, setBanners] = useState([
    {
      id: 1,
      title: 'Weekend Flash Sale',
      imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800',
      position: 'top',
      carouselOrder: 1,
      deepLink: '/campaigns/weekend-sale',
      startDate: '2025-12-27',
      endDate: '2026-01-03',
      startTime: '00:00',
      endTime: '23:59',
      status: 'active',
      priority: 1,
      deviceType: 'both',
      targetSegment: 'all_users',
      views: 125340,
      clicks: 15678,
      conversions: 2341,
      ctr: 12.5,
      conversionRate: 14.9,
      abTesting: false,
      variants: []
    },
    {
      id: 2,
      title: 'New User Welcome Offer',
      imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800',
      position: 'middle',
      carouselOrder: 2,
      deepLink: '/offers/welcome',
      startDate: '2025-12-20',
      endDate: '2026-01-20',
      startTime: '00:00',
      endTime: '23:59',
      status: 'active',
      priority: 2,
      deviceType: 'mobile',
      targetSegment: 'new_users',
      views: 45890,
      clicks: 8934,
      conversions: 1234,
      ctr: 19.5,
      conversionRate: 13.8,
      abTesting: true,
      variants: ['A', 'B']
    },
    {
      id: 3,
      title: 'Premium Membership Launch',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      position: 'carousel',
      carouselOrder: 3,
      deepLink: '/membership/prive',
      startDate: '2025-12-25',
      endDate: '2026-02-01',
      startTime: '00:00',
      endTime: '23:59',
      status: 'active',
      priority: 3,
      deviceType: 'both',
      targetSegment: 'active_buyers',
      views: 89450,
      clicks: 12450,
      conversions: 3450,
      ctr: 13.9,
      conversionRate: 27.7,
      abTesting: false,
      variants: []
    },
    {
      id: 4,
      title: 'Festive Season Mega Sale',
      imageUrl: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800',
      position: 'top',
      carouselOrder: 4,
      deepLink: '/campaigns/festive-2026',
      startDate: '2026-01-10',
      endDate: '2026-01-20',
      startTime: '00:00',
      endTime: '23:59',
      status: 'scheduled',
      priority: 1,
      deviceType: 'both',
      targetSegment: 'all_users',
      views: 0,
      clicks: 0,
      conversions: 0,
      ctr: 0,
      conversionRate: 0,
      abTesting: false,
      variants: []
    },
    {
      id: 5,
      title: 'Cashback Bonanza',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
      position: 'middle',
      carouselOrder: 5,
      deepLink: '/cashback/bonanza',
      startDate: '2025-12-15',
      endDate: '2025-12-26',
      startTime: '00:00',
      endTime: '23:59',
      status: 'expired',
      priority: 2,
      deviceType: 'desktop',
      targetSegment: 'premium_members',
      views: 234560,
      clicks: 34890,
      conversions: 6780,
      ctr: 14.9,
      conversionRate: 19.4,
      abTesting: true,
      variants: ['A', 'B', 'C']
    },
    {
      id: 6,
      title: 'Student Discount Campaign',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      position: 'carousel',
      carouselOrder: 6,
      deepLink: '/offers/student',
      startDate: '2025-12-28',
      endDate: '2026-01-15',
      startTime: '00:00',
      endTime: '23:59',
      status: 'draft',
      priority: 4,
      deviceType: 'mobile',
      targetSegment: 'students',
      views: 0,
      clicks: 0,
      conversions: 0,
      ctr: 0,
      conversionRate: 0,
      abTesting: false,
      variants: []
    }
  ]);

  const [bannerAnalytics, setBannerAnalytics] = useState({
    totalImpressions: 495240,
    totalClicks: 71952,
    totalConversions: 13805,
    avgCTR: 14.5,
    avgConversionRate: 19.2,
    topPerforming: 'Cashback Bonanza',
    deviceBreakdown: {
      mobile: 65,
      desktop: 35
    },
    segmentPerformance: [
      { segment: 'All Users', views: 214790, clicks: 28128, conversions: 4141 },
      { segment: 'New Users', views: 45890, clicks: 8934, conversions: 1234 },
      { segment: 'Active Buyers', views: 89450, clicks: 12450, conversions: 3450 },
      { segment: 'Premium Members', views: 234560, clicks: 34890, conversions: 6780 },
      { segment: 'Students', views: 0, clicks: 0, conversions: 0 }
    ]
  });

  const handleDeleteBanner = (id) => {
    setBanners(prev => prev.filter(b => b.id !== id));
  };

  const handleToggleBannerStatus = (id) => {
    setBanners(prev => prev.map(b => {
      if (b.id === id) {
        if (b.status === 'active') return { ...b, status: 'paused' };
        if (b.status === 'paused') return { ...b, status: 'active' };
      }
      return b;
    }));
  };

  const handleArchiveBanner = (id) => {
    setBanners(prev => prev.map(b =>
      b.id === id ? { ...b, status: 'archived' } : b
    ));
  };

  const handleMovePriority = (id, direction) => {
    const index = banners.findIndex(b => b.id === id);
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === banners.length - 1)
    ) return;

    const newBanners = [...banners];
    const temp = newBanners[index];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    newBanners[index] = newBanners[swapIndex];
    newBanners[swapIndex] = temp;

    // Update priorities
    newBanners[index].priority = index + 1;
    newBanners[swapIndex].priority = swapIndex + 1;

    setBanners(newBanners);
  };

  const openAnalytics = (banner) => {
    setSelectedBanner(banner);
    setShowAnalyticsModal(true);
  };

  const filteredBanners = banners.filter(b => {
    if (activeTab === 'active') return b.status === 'active';
    if (activeTab === 'scheduled') return b.status === 'scheduled';
    if (activeTab === 'expired') return b.status === 'expired';
    if (activeTab === 'draft') return b.status === 'draft';
    return true;
  });

  const getStatusColor = (status) => {
    const colors = {
      'active': 'bg-green-100 text-green-700',
      'scheduled': 'bg-blue-100 text-blue-700',
      'expired': 'bg-gray-100 text-gray-700',
      'draft': 'bg-yellow-100 text-yellow-700',
      'paused': 'bg-orange-100 text-orange-700',
      'archived': 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hero Banner Management</h1>
              <p className="text-gray-600 mt-1">Create and manage promotional hero banners</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Banner
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Impressions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(bannerAnalytics.totalImpressions / 1000).toFixed(0)}K
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Clicks</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(bannerAnalytics.totalClicks / 1000).toFixed(1)}K
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <MousePointer className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Conversions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(bannerAnalytics.totalConversions / 1000).toFixed(1)}K
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg. CTR</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{bannerAnalytics.avgCTR}%</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Banners</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {banners.filter(b => b.status === 'active').length}
                </p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Image className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('active')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'active'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Active Banners ({banners.filter(b => b.status === 'active').length})
              </button>
              <button
                onClick={() => setActiveTab('scheduled')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'scheduled'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Scheduled ({banners.filter(b => b.status === 'scheduled').length})
              </button>
              <button
                onClick={() => setActiveTab('draft')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'draft'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Drafts ({banners.filter(b => b.status === 'draft').length})
              </button>
              <button
                onClick={() => setActiveTab('expired')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'expired'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Expired ({banners.filter(b => b.status === 'expired').length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          {/* Banner List Tabs */}
          {activeTab !== 'analytics' && (
            <div className="p-6">
              <div className="space-y-4">
                {filteredBanners.map((banner) => (
                  <div key={banner.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4">
                      {/* Banner Preview */}
                      <div className="w-48 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={banner.imageUrl}
                          alt={banner.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Banner Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-gray-900">{banner.title}</h3>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(banner.status)}`}>
                                {banner.status}
                              </span>
                              {banner.abTesting && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                                  <Zap className="w-3 h-3 mr-1" />
                                  A/B Test ({banner.variants.join(', ')})
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center gap-1">
                                <LinkIcon className="w-4 h-4" />
                                {banner.deepLink}
                              </span>
                              <span className="flex items-center gap-1">
                                Position: <strong>{banner.position}</strong>
                              </span>
                              <span className="flex items-center gap-1">
                                Priority: <strong>#{banner.priority}</strong>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-gray-500 text-xs">Schedule</p>
                            <p className="font-medium text-gray-900">
                              {banner.startDate} - {banner.endDate}
                            </p>
                            <p className="text-xs text-gray-500">{banner.startTime} to {banner.endTime}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Target</p>
                            <p className="font-medium text-gray-900 capitalize">{banner.targetSegment.replace(/_/g, ' ')}</p>
                            <p className="text-xs text-gray-500 capitalize">{banner.deviceType}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Performance</p>
                            <div className="flex items-center gap-2">
                              <Eye className="w-3 h-3 text-gray-400" />
                              <span className="font-medium text-gray-900">{banner.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MousePointer className="w-3 h-3 text-gray-400" />
                              <span className="font-medium text-gray-900">{banner.clicks.toLocaleString()}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Metrics</p>
                            <p className="font-medium text-green-600">CTR: {banner.ctr}%</p>
                            <p className="font-medium text-purple-600">CVR: {banner.conversionRate}%</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openAnalytics(banner)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                          >
                            <BarChart3 className="w-4 h-4" />
                            Analytics
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
                            <Edit className="w-4 h-4" />
                            Edit
                          </button>
                          {(banner.status === 'active' || banner.status === 'paused') && (
                            <button
                              onClick={() => handleToggleBannerStatus(banner.id)}
                              className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg ${
                                banner.status === 'active'
                                  ? 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                                  : 'bg-green-50 text-green-600 hover:bg-green-100'
                              }`}
                            >
                              {banner.status === 'active' ? (
                                <>
                                  <Pause className="w-4 h-4" />
                                  Pause
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4" />
                                  Resume
                                </>
                              )}
                            </button>
                          )}
                          <button
                            onClick={() => handleArchiveBanner(banner.id)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100"
                          >
                            <Archive className="w-4 h-4" />
                            Archive
                          </button>
                          <button
                            onClick={() => handleMovePriority(banner.id, 'up')}
                            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleMovePriority(banner.id, 'down')}
                            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBanner(banner.id)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredBanners.length === 0 && (
                  <div className="text-center py-12">
                    <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No banners found in this category</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Device Breakdown */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Device Breakdown
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Mobile</span>
                        <span className="text-sm font-bold text-gray-900">{bannerAnalytics.deviceBreakdown.mobile}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full"
                          style={{ width: `${bannerAnalytics.deviceBreakdown.mobile}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Desktop</span>
                        <span className="text-sm font-bold text-gray-900">{bannerAnalytics.deviceBreakdown.desktop}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-600 h-3 rounded-full"
                          style={{ width: `${bannerAnalytics.deviceBreakdown.desktop}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Performing */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Top Performing Banner
                  </h3>
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
                      <Target className="w-8 h-8 text-yellow-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{bannerAnalytics.topPerforming}</p>
                    <p className="text-sm text-gray-600">Based on conversion rate</p>
                  </div>
                </div>
              </div>

              {/* Segment Performance */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Performance by Segment
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Segment</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clicks</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversions</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CTR</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CVR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bannerAnalytics.segmentPerformance.map((segment, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{segment.segment}</td>
                          <td className="px-4 py-3 text-gray-900">{segment.views.toLocaleString()}</td>
                          <td className="px-4 py-3 text-gray-900">{segment.clicks.toLocaleString()}</td>
                          <td className="px-4 py-3 text-gray-900">{segment.conversions.toLocaleString()}</td>
                          <td className="px-4 py-3 text-green-600 font-medium">
                            {segment.views > 0 ? ((segment.clicks / segment.views) * 100).toFixed(1) : 0}%
                          </td>
                          <td className="px-4 py-3 text-purple-600 font-medium">
                            {segment.clicks > 0 ? ((segment.conversions / segment.clicks) * 100).toFixed(1) : 0}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Banner Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create New Banner</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                {/* Banner Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB (1920x600 recommended)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Banner Title</label>
                    <input
                      type="text"
                      placeholder="Enter banner title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deep Link / URL</label>
                    <input
                      type="text"
                      placeholder="/campaigns/offer"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Top</option>
                      <option>Middle</option>
                      <option>Carousel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Device Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Both</option>
                      <option>Mobile Only</option>
                      <option>Desktop Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <input
                      type="number"
                      placeholder="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Segment</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>All Users</option>
                    <option>New Users</option>
                    <option>Active Buyers</option>
                    <option>Premium Members</option>
                    <option>Students</option>
                    <option>Dormant Users</option>
                  </select>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                    <span className="text-sm font-medium text-gray-700">Enable A/B Testing</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1 ml-6">Create multiple variants to test performance</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Create Banner
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Save as Draft
                  </button>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner Analytics Modal */}
      {showAnalyticsModal && selectedBanner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Banner Analytics: {selectedBanner.title}</h2>
                <button
                  onClick={() => setShowAnalyticsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 font-medium">Views</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedBanner.views.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 font-medium">Clicks</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedBanner.clicks.toLocaleString()}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-600 font-medium">Conversions</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedBanner.conversions.toLocaleString()}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm text-yellow-600 font-medium">CTR</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedBanner.ctr}%</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Banner Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Position</p>
                    <p className="font-medium text-gray-900 capitalize">{selectedBanner.position}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Target Segment</p>
                    <p className="font-medium text-gray-900 capitalize">{selectedBanner.targetSegment.replace(/_/g, ' ')}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Device Type</p>
                    <p className="font-medium text-gray-900 capitalize">{selectedBanner.deviceType}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Conversion Rate</p>
                    <p className="font-medium text-purple-600">{selectedBanner.conversionRate}%</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowAnalyticsModal(false)}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
