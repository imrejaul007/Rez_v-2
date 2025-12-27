import { useState } from 'react';
import { Users, TrendingUp, Send, Bell, QrCode, Share2, Gift, Download, Instagram, Facebook, Twitter, Link as LinkIcon, Copy, CheckCircle, Image, FileText, ArrowUpRight } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantMarketing() {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [sendSuccess, setSendSuccess] = useState(false);

  const [followerStats] = useState({
    totalFollowers: 1234,
    weeklyGrowth: 145,
    growthPercentage: 13.3,
    activeFollowers: 987,
    engagementRate: 68.5
  });

  const [followerGrowth] = useState([
    { week: 'Week 1', followers: 950, new: 45 },
    { week: 'Week 2', followers: 1012, new: 62 },
    { week: 'Week 3', followers: 1089, new: 77 },
    { week: 'Week 4', followers: 1234, new: 145 }
  ]);

  const [audienceSegments] = useState([
    { name: 'All Followers', count: 1234, percentage: 100 },
    { name: 'VIP Customers', count: 45, percentage: 3.6 },
    { name: 'Regular Customers', count: 311, percentage: 25.2 },
    { name: 'Occasional Visitors', count: 567, percentage: 45.9 },
    { name: 'New Followers', count: 311, percentage: 25.2 }
  ]);

  const [qrCode] = useState({
    storeQr: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://rez.app/merchant/coffee-house',
    offerQr: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://rez.app/offers/special-deal'
  });

  const [referralStats] = useState({
    totalReferrals: 234,
    successfulReferrals: 156,
    conversionRate: 66.7,
    revenueGenerated: 45678,
    topReferrers: [
      { name: 'John Doe', referrals: 23, revenue: 6789 },
      { name: 'Jane Smith', referrals: 19, revenue: 5234 },
      { name: 'Mike Johnson', referrals: 15, revenue: 4567 }
    ]
  });

  const [socialAssets] = useState([
    { name: 'Instagram Story Template', type: 'image', format: '1080x1920' },
    { name: 'Facebook Post Template', type: 'image', format: '1200x1200' },
    { name: 'Twitter Banner', type: 'image', format: '1500x500' },
    { name: 'Promotional Poster', type: 'pdf', format: 'A4' }
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Weekend Special Offer!',
      message: 'Get 50% OFF on all pizzas this weekend only!',
      segment: 'All Followers',
      sentDate: '2024-01-20',
      recipients: 1234,
      opened: 834,
      clicked: 567
    },
    {
      id: 2,
      title: 'New Menu Items',
      message: 'Check out our delicious new pasta collection',
      segment: 'Regular Customers',
      sentDate: '2024-01-15',
      recipients: 311,
      opened: 245,
      clicked: 156
    }
  ]);

  const handleSendNotification = (e) => {
    e.preventDefault();
    if (notificationTitle && notificationMessage) {
      const segment = audienceSegments.find(s => s.name === selectedSegment);
      const newNotification = {
        id: notifications.length + 1,
        title: notificationTitle,
        message: notificationMessage,
        segment: selectedSegment,
        sentDate: new Date().toISOString().split('T')[0],
        recipients: segment?.count || 0,
        opened: 0,
        clicked: 0
      };
      setNotifications([newNotification, ...notifications]);
      setNotificationTitle('');
      setNotificationMessage('');
      setSendSuccess(true);
      setTimeout(() => setSendSuccess(false), 3000);
    }
  };

  const maxGrowth = Math.max(...followerGrowth.map(w => w.followers));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Marketing Tools</h1>
              <p className="text-gray-600 mt-1">Engage followers and grow your customer base</p>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Follower Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm p-6 border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-indigo-900 font-medium">Total Followers</p>
            </div>
            <p className="text-3xl font-bold text-indigo-900">{followerStats.totalFollowers.toLocaleString()}</p>
            <p className="text-sm text-indigo-700 mt-2">{followerStats.activeFollowers} active</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Weekly Growth</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">+{followerStats.weeklyGrowth}</p>
            <p className="text-sm text-green-600 mt-2">↑ {followerStats.growthPercentage}%</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Engagement Rate</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{followerStats.engagementRate}%</p>
            <p className="text-sm text-gray-600 mt-2">Above average</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Gift className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Referrals</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{referralStats.totalReferrals}</p>
            <p className="text-sm text-green-600 mt-2">{referralStats.successfulReferrals} converted</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Referral Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(referralStats.revenueGenerated / 1000).toFixed(0)}K</p>
            <p className="text-sm text-gray-600 mt-2">{referralStats.conversionRate}% conversion</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Send Notification Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send Notification to Followers</h2>
            {sendSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span>Notification sent successfully!</span>
              </div>
            )}
            <form onSubmit={handleSendNotification} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <select
                  value={selectedSegment}
                  onChange={(e) => setSelectedSegment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  {audienceSegments.map((segment) => (
                    <option key={segment.name} value={segment.name}>
                      {segment.name} ({segment.count} followers)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notification Title</label>
                <input
                  type="text"
                  value={notificationTitle}
                  onChange={(e) => setNotificationTitle(e.target.value)}
                  placeholder="e.g., Special Weekend Offer!"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  maxLength={50}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">{notificationTitle.length}/50 characters</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  maxLength={200}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">{notificationMessage.length}/200 characters</p>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
              >
                <Send className="w-5 h-5" />
                Send Notification
              </button>
            </form>
          </div>

          {/* Follower Growth Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Follower Growth</h2>
            <div className="space-y-4">
              {followerGrowth.map((week, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{week.week}</span>
                    <div className="text-sm">
                      <span className="font-bold text-gray-900">{week.followers}</span>
                      <span className="text-green-600 ml-2">(+{week.new})</span>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${(week.followers / maxGrowth) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total New Followers</span>
                <span className="text-xl font-bold text-green-600">
                  +{followerGrowth.reduce((sum, w) => sum + w.new, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* QR Code Generation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">QR Codes for Offline Marketing</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-sm font-medium text-gray-700 mb-4">Store Profile QR Code</p>
                <div className="bg-white p-4 rounded-lg inline-block border-2 border-gray-200">
                  <img src={qrCode.storeQr} alt="Store QR Code" className="w-48 h-48" />
                </div>
                <p className="text-xs text-gray-500 mt-4">Scan to view store profile</p>
                <div className="flex gap-2 mt-4 justify-center">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Download PNG
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <FileText className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-sm font-medium text-gray-700 mb-4">Special Offer QR Code</p>
                <div className="bg-white p-4 rounded-lg inline-block border-2 border-gray-200">
                  <img src={qrCode.offerQr} alt="Offer QR Code" className="w-48 h-48" />
                </div>
                <p className="text-xs text-gray-500 mt-4">Scan to view current offers</p>
                <div className="flex gap-2 mt-4 justify-center">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Download PNG
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <FileText className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Sharing Tools */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Share & Promote</h2>

            {/* Social Media Share */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Share Your Store</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-pink-50 hover:border-pink-300 transition-colors">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <span className="text-sm font-medium">Instagram</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-sky-50 hover:border-sky-300 transition-colors">
                  <Twitter className="w-5 h-5 text-sky-600" />
                  <span className="text-sm font-medium">Twitter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <LinkIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium">Copy Link</span>
                </button>
              </div>
            </div>

            {/* Marketing Assets */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Marketing Assets</p>
              <div className="space-y-2">
                {socialAssets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      {asset.type === 'image' ? (
                        <div className="bg-blue-100 p-2 rounded">
                          <Image className="w-4 h-4 text-blue-600" />
                        </div>
                      ) : (
                        <div className="bg-red-100 p-2 rounded">
                          <FileText className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{asset.name}</p>
                        <p className="text-xs text-gray-500">{asset.format}</p>
                      </div>
                    </div>
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                Generate Custom Poster
              </button>
            </div>
          </div>
        </div>

        {/* Referral Program */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Referral Program Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Top Referrers</h3>
              <div className="space-y-3">
                {referralStats.topReferrers.map((referrer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{referrer.name}</p>
                        <p className="text-sm text-gray-600">{referrer.referrals} successful referrals</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{referrer.revenue.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Revenue generated</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-sm font-medium text-orange-900 mb-4">Your Referral Link</h3>
              <div className="bg-white rounded-lg p-3 mb-4 border border-orange-200">
                <p className="text-sm text-gray-600 break-all">rez.app/ref/coffee-house-2024</p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                <Copy className="w-4 h-4" />
                Copy Link
              </button>
              <div className="mt-6 pt-6 border-t border-orange-200">
                <p className="text-xs text-orange-700 mb-3">Earn ₹50 for each referral!</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-900">Pending Rewards</span>
                    <span className="font-bold text-orange-900">₹{(referralStats.totalReferrals - referralStats.successfulReferrals) * 50}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-900">Total Earned</span>
                    <span className="font-bold text-orange-900">₹{referralStats.successfulReferrals * 50}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Notification History</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>Sent: {notification.sentDate}</span>
                      <span>•</span>
                      <span>To: {notification.segment}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-blue-700 mb-1">Recipients</p>
                    <p className="text-lg font-bold text-blue-900">{notification.recipients}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-green-700 mb-1">Opened</p>
                    <p className="text-lg font-bold text-green-900">
                      {notification.opened}
                      <span className="text-xs ml-1">({notification.recipients > 0 ? ((notification.opened / notification.recipients) * 100).toFixed(1) : 0}%)</span>
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-purple-700 mb-1">Clicked</p>
                    <p className="text-lg font-bold text-purple-900">
                      {notification.clicked}
                      <span className="text-xs ml-1">({notification.recipients > 0 ? ((notification.clicked / notification.recipients) * 100).toFixed(1) : 0}%)</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
