import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Megaphone, TrendingUp, Users, Tag, DollarSign, Target,
  Send, CheckCircle, XCircle, AlertCircle, ArrowUpRight,
  BarChart3, Bell, MapPin, Plus
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminMarketingDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');

  const [marketingMetrics] = useState({
    activeCampaigns: { count: 45, growth: 15.2, budget: 2345678 },
    totalReach: { count: 567890, growth: 22.5, engagement: 12.3 },
    conversionRate: { rate: 8.5, growth: 2.1, target: 10.0 },
    roi: { value: 3.2, growth: 0.8, spent: 1234567, revenue: 3950614 },
    pendingApprovals: { count: 18, urgent: 5 },
    activeOffers: { count: 234, redemptions: 12345, value: 456789 }
  });

  const [campaigns] = useState([
    { id: 1, name: 'Weekend Food Festival', type: 'multi-channel', status: 'active', merchant: 'Pizza Paradise', budget: 50000, spent: 32500, reach: 45678, clicks: 5678, conversions: 456, roi: 2.8, region: 'Mumbai' },
    { id: 2, name: 'Fashion Week Sale', type: 'social', status: 'active', merchant: 'Style Studio', budget: 75000, spent: 68900, reach: 89012, clicks: 8901, conversions: 712, roi: 3.5, region: 'Delhi' },
    { id: 3, name: 'Beauty Bonanza', type: 'email', status: 'pending', merchant: 'Glow Spa', budget: 25000, spent: 0, reach: 0, clicks: 0, conversions: 0, roi: 0, region: 'Bangalore' },
    { id: 4, name: 'Grocery Flash Sale', type: 'push', status: 'completed', merchant: 'Fresh Market', budget: 15000, spent: 15000, reach: 23456, clicks: 2345, conversions: 234, roi: 2.1, region: 'Pune' }
  ]);

  const [channelStats] = useState([
    { channel: 'Push Notifications', sent: 145678, opened: 65432, clicked: 8901, converted: 756, ctr: 6.1, conversionRate: 8.5, cost: 45678 },
    { channel: 'Email', sent: 89012, opened: 35605, clicked: 5341, converted: 512, ctr: 6.0, conversionRate: 9.6, cost: 23456 },
    { channel: 'In-App Messages', sent: 234567, opened: 98765, clicked: 12345, converted: 1234, ctr: 5.3, conversionRate: 10.0, cost: 12345 },
    { channel: 'SMS', sent: 45678, opened: 39876, clicked: 3987, converted: 398, ctr: 8.7, conversionRate: 10.0, cost: 34567 },
    { channel: 'WhatsApp', sent: 23456, opened: 20123, clicked: 2012, converted: 201, ctr: 8.6, conversionRate: 10.0, cost: 15678 }
  ]);

  const getStatusColor = (status) => {
    if (status === 'active') return 'bg-green-100 text-green-700';
    if (status === 'pending') return 'bg-yellow-100 text-yellow-700';
    if (status === 'completed') return 'bg-blue-100 text-blue-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Marketing & Campaigns Dashboard</h1>
              <p className="text-pink-100">Campaign management, offers & customer engagement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{marketingMetrics.activeCampaigns.count}</div>
              <div className="text-sm text-pink-200">Active Campaigns</div>
              <div className="text-xs text-green-300 mt-1">↑ {marketingMetrics.activeCampaigns.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{(marketingMetrics.totalReach.count / 1000).toFixed(0)}K</div>
              <div className="text-sm text-pink-200">Total Reach</div>
              <div className="text-xs text-green-300 mt-1">↑ {marketingMetrics.totalReach.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{marketingMetrics.conversionRate.rate}%</div>
              <div className="text-sm text-pink-200">Conversion Rate</div>
              <div className="text-xs text-green-300 mt-1">↑ {marketingMetrics.conversionRate.growth}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{marketingMetrics.roi.value}x</div>
              <div className="text-sm text-pink-200">ROI</div>
              <div className="text-xs text-green-300 mt-1">↑ {marketingMetrics.roi.growth}x</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{marketingMetrics.pendingApprovals.count}</div>
              <div className="text-sm text-pink-200">Pending Approvals</div>
              <div className="text-xs text-red-300 mt-1">{marketingMetrics.pendingApprovals.urgent} urgent</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{marketingMetrics.activeOffers.count}</div>
              <div className="text-sm text-pink-200">Active Offers</div>
              <div className="text-xs text-pink-200 mt-1">{(marketingMetrics.activeOffers.redemptions / 1000).toFixed(1)}K redeemed</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Active Campaigns */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-pink-600" />
                <h2 className="text-xl font-bold">Active Campaigns</h2>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                <Plus className="w-4 h-4" /> New Campaign
              </button>
            </div>
            <div className="space-y-3">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg">{campaign.name}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          {campaign.status.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-600">• {campaign.merchant}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {campaign.region}</span>
                        <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {campaign.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Budget</p>
                      <p className="font-bold">₹{(campaign.budget / 1000).toFixed(0)}K</p>
                      <p className="text-xs text-gray-500">Spent: ₹{(campaign.spent / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Reach</p>
                      <p className="font-bold">{(campaign.reach / 1000).toFixed(1)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Clicks</p>
                      <p className="font-bold">{campaign.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Conversions</p>
                      <p className="font-bold">{campaign.conversions}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">ROI</p>
                      <p className="font-bold text-green-600">{campaign.roi}x</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Performance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold">Channel Performance</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">Channel</th>
                    <th className="text-left py-3 px-4 font-semibold">Sent</th>
                    <th className="text-left py-3 px-4 font-semibold">Opened</th>
                    <th className="text-left py-3 px-4 font-semibold">Clicked</th>
                    <th className="text-left py-3 px-4 font-semibold">Converted</th>
                    <th className="text-left py-3 px-4 font-semibold">CTR</th>
                    <th className="text-left py-3 px-4 font-semibold">Conv Rate</th>
                    <th className="text-left py-3 px-4 font-semibold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {channelStats.map((stat, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{stat.channel}</td>
                      <td className="py-3 px-4">{stat.sent.toLocaleString()}</td>
                      <td className="py-3 px-4">{stat.opened.toLocaleString()}</td>
                      <td className="py-3 px-4">{stat.clicked.toLocaleString()}</td>
                      <td className="py-3 px-4">{stat.converted}</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{stat.ctr}%</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{stat.conversionRate}%</td>
                      <td className="py-3 px-4">₹{(stat.cost / 1000).toFixed(1)}K</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                <h2 className="text-xl font-bold">Pending Approvals</h2>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                {marketingMetrics.pendingApprovals.count} pending
              </span>
            </div>
            <p className="text-gray-600">Review and approve marketing campaigns & offers</p>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                Review Queue
              </button>
              <Link to="/admin/marketing-campaigns" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View All Campaigns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
