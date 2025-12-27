import { useState } from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign, Star, Clock, Calendar, Download } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantAnalytics() {
  const [dateRange, setDateRange] = useState('30days');

  const [overview, setOverview] = useState({
    revenue: { current: 456789, previous: 398765, growth: 14.6 },
    orders: { current: 2345, previous: 2012, growth: 16.5 },
    customers: { current: 1234, previous: 1087, growth: 13.5 },
    avgOrderValue: { current: 195, previous: 198, growth: -1.5 },
    rating: { current: 4.7, previous: 4.6, growth: 2.2 },
    redemptionRate: { current: 67.8, previous: 62.3, growth: 8.8 }
  });

  const [revenueByDay, setRevenueByDay] = useState([
    { day: 'Mon', revenue: 65400, orders: 334, customers: 289 },
    { day: 'Tue', revenue: 58900, orders: 302, customers: 267 },
    { day: 'Wed', revenue: 71200, orders: 365, customers: 312 },
    { day: 'Thu', revenue: 68300, orders: 350, customers: 298 },
    { day: 'Fri', revenue: 82100, orders: 421, customers: 356 },
    { day: 'Sat', revenue: 95600, orders: 490, customers: 423 },
    { day: 'Sun', revenue: 89500, orders: 459, customers: 398 }
  ]);

  const [peakHours, setPeakHours] = useState([
    { hour: '8-9 AM', orders: 45, revenue: 8900 },
    { hour: '9-10 AM', orders: 67, revenue: 13200 },
    { hour: '10-11 AM', orders: 89, revenue: 17400 },
    { hour: '11-12 PM', orders: 123, revenue: 24100 },
    { hour: '12-1 PM', orders: 234, revenue: 45600 },
    { hour: '1-2 PM', orders: 198, revenue: 38700 },
    { hour: '2-3 PM', orders: 134, revenue: 26200 },
    { hour: '3-4 PM', orders: 89, revenue: 17400 },
    { hour: '4-5 PM', orders: 112, revenue: 21900 },
    { hour: '5-6 PM', orders: 156, revenue: 30500 },
    { hour: '6-7 PM', orders: 201, revenue: 39300 },
    { hour: '7-8 PM', orders: 267, revenue: 52100 },
    { hour: '8-9 PM', orders: 234, revenue: 45700 },
    { hour: '9-10 PM', orders: 178, revenue: 34800 }
  ]);

  const [topOffers, setTopOffers] = useState([
    { id: 1, name: '50% OFF on All Pizzas', redemptions: 456, revenue: 123456, rating: 4.8, roi: 234 },
    { id: 2, name: 'Buy 1 Get 1 Coffee', redemptions: 389, revenue: 98765, rating: 4.7, roi: 198 },
    { id: 3, name: 'Lunch Special', redemptions: 267, revenue: 67890, rating: 4.6, roi: 156 },
    { id: 4, name: 'Weekend Deal', redemptions: 234, revenue: 56789, rating: 4.5, roi: 145 },
    { id: 5, name: 'Happy Hour', redemptions: 198, revenue: 45678, rating: 4.4, roi: 123 }
  ]);

  const [customerSegments, setCustomerSegments] = useState([
    { segment: 'VIP', count: 45, revenue: 156789, avgSpend: 3484, visits: 456 },
    { segment: 'Regular', count: 311, revenue: 234567, avgSpend: 754, visits: 1234 },
    { segment: 'Occasional', count: 567, revenue: 123456, avgSpend: 218, visits: 789 },
    { segment: 'New', count: 311, revenue: 67890, avgSpend: 218, visits: 345 }
  ]);

  const [popularItems, setPopularItems] = useState([
    { name: 'Margherita Pizza', orders: 567, revenue: 113400, trend: 'up' },
    { name: 'Cappuccino', orders: 489, revenue: 48900, trend: 'up' },
    { name: 'Caesar Salad', orders: 345, revenue: 51750, trend: 'stable' },
    { name: 'Pasta Carbonara', orders: 289, revenue: 72250, trend: 'down' },
    { name: 'Tiramisu', orders: 234, revenue: 35100, trend: 'up' }
  ]);

  const maxRevenue = Math.max(...revenueByDay.map(d => d.revenue));
  const maxPeakOrders = Math.max(...peakHours.map(h => h.orders));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Business Analytics</h1>
              <p className="text-gray-600 mt-1">Track performance and customer insights</p>
            </div>
            <div className="flex gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="12months">Last 12 Months</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="w-5 h-5" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{(overview.revenue.current / 1000).toFixed(0)}K</p>
            <p className={`text-sm mt-1 ${overview.revenue.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {overview.revenue.growth > 0 ? '↑' : '↓'} {Math.abs(overview.revenue.growth)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-600 font-medium">Orders</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{overview.orders.current.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${overview.orders.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {overview.orders.growth > 0 ? '↑' : '↓'} {Math.abs(overview.orders.growth)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Customers</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{overview.customers.current.toLocaleString()}</p>
            <p className={`text-sm mt-1 ${overview.customers.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {overview.customers.growth > 0 ? '↑' : '↓'} {Math.abs(overview.customers.growth)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Avg Order</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{overview.avgOrderValue.current}</p>
            <p className={`text-sm mt-1 ${overview.avgOrderValue.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {overview.avgOrderValue.growth > 0 ? '↑' : '↓'} {Math.abs(overview.avgOrderValue.growth)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600 font-medium">Rating</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{overview.rating.current}</p>
            <p className={`text-sm mt-1 ${overview.rating.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {overview.rating.growth > 0 ? '↑' : '↓'} {Math.abs(overview.rating.growth)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Redemption</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{overview.redemptionRate.current}%</p>
            <p className={`text-sm mt-1 ${overview.redemptionRate.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {overview.redemptionRate.growth > 0 ? '↑' : '↓'} {Math.abs(overview.redemptionRate.growth)}%
            </p>
          </div>
        </div>

        {/* Revenue by Day */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Daily Performance</h2>
          <div className="space-y-4">
            {revenueByDay.map((day, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{day.day}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600">₹{(day.revenue / 1000).toFixed(1)}K</span>
                    <span className="text-blue-600">{day.orders} orders</span>
                    <span className="text-gray-600">{day.customers} customers</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                    style={{ width: `${(day.revenue / maxRevenue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Peak Hours */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Peak Hours Analysis</h2>
            </div>
            <div className="space-y-3">
              {peakHours.map((hour, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700 w-20">{hour.hour}</span>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${(hour.orders / maxPeakOrders) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right w-32">
                    <span className="text-sm font-semibold text-gray-900">{hour.orders} orders</span>
                    <span className="text-xs text-gray-600 ml-2">₹{(hour.revenue / 1000).toFixed(1)}K</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Offers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Top Performing Offers</h2>
            <div className="space-y-4">
              {topOffers.map((offer, index) => (
                <div key={offer.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{offer.name}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-600">{offer.redemptions} redemptions</span>
                        <span className="flex items-center gap-1 text-xs text-yellow-600">
                          <Star className="w-3 h-3 fill-yellow-500" />
                          {offer.rating}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(offer.revenue / 1000).toFixed(1)}K</p>
                      <p className="text-xs text-gray-600">{offer.roi}% ROI</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(offer.revenue / topOffers[0].revenue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Segments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Segments</h2>
            <div className="space-y-4">
              {customerSegments.map((segment, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{segment.segment}</h3>
                      <p className="text-sm text-gray-600">{segment.count} customers • {segment.visits} visits</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(segment.revenue / 1000).toFixed(1)}K</p>
                      <p className="text-sm text-gray-600">₹{segment.avgSpend} avg</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${(segment.revenue / customerSegments[0].revenue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Items</h2>
            <div className="space-y-4">
              {popularItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.orders} orders</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">₹{(item.revenue / 1000).toFixed(1)}K</p>
                      <p className={`text-sm ${
                        item.trend === 'up' ? 'text-green-600' :
                        item.trend === 'down' ? 'text-red-600' :
                        'text-gray-600'
                      }`}>
                        {item.trend === 'up' ? '↑ Trending' :
                         item.trend === 'down' ? '↓ Declining' :
                         '→ Stable'}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(item.orders / popularItems[0].orders) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
