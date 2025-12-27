import { useState } from 'react';
import { Search, Star, TrendingUp, AlertCircle, Mail, Gift } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCustomers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSegment, setFilterSegment] = useState('all');

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      segment: 'vip',
      totalOrders: 45,
      totalSpend: 12345,
      avgOrderValue: 274,
      lastVisit: '2 days ago',
      favoriteItems: ['Margherita Pizza', 'Cappuccino'],
      visits: 67,
      satisfaction: 4.8
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91 98765 43211',
      segment: 'regular',
      totalOrders: 12,
      totalSpend: 3456,
      avgOrderValue: 288,
      lastVisit: '1 week ago',
      favoriteItems: ['Burger', 'Fries'],
      visits: 18,
      satisfaction: 4.5
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+91 98765 43212',
      segment: 'at-risk',
      totalOrders: 8,
      totalSpend: 2100,
      avgOrderValue: 262,
      lastVisit: '45 days ago',
      favoriteItems: ['Coffee', 'Sandwich'],
      visits: 12,
      satisfaction: 4.2
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+91 98765 43213',
      segment: 'vip',
      totalOrders: 78,
      totalSpend: 23456,
      avgOrderValue: 301,
      lastVisit: 'Today',
      favoriteItems: ['Pasta', 'Salad', 'Wine'],
      visits: 95,
      satisfaction: 5.0
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+91 98765 43214',
      segment: 'regular',
      totalOrders: 23,
      totalSpend: 6789,
      avgOrderValue: 295,
      lastVisit: '4 days ago',
      favoriteItems: ['Pizza', 'Beer'],
      visits: 34,
      satisfaction: 4.6
    }
  ]);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSegment = filterSegment === 'all' || customer.segment === filterSegment;
    return matchesSearch && matchesSegment;
  });

  const insights = {
    vip: {
      count: customers.filter(c => c.segment === 'vip').length,
      revenue: customers.filter(c => c.segment === 'vip').reduce((sum, c) => sum + c.totalSpend, 0),
      avgSpend: 15600
    },
    regular: {
      count: customers.filter(c => c.segment === 'regular').length,
      revenue: customers.filter(c => c.segment === 'regular').reduce((sum, c) => sum + c.totalSpend, 0),
      avgSpend: 3500
    },
    atRisk: {
      count: customers.filter(c => c.segment === 'at-risk').length,
      potentialLoss: customers.filter(c => c.segment === 'at-risk').reduce((sum, c) => sum + c.totalSpend, 0)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Customer Insights</h1>
          <p className="text-gray-600 mt-1">Understand and engage with your customers</p>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
              <h3 className="font-bold text-yellow-900">VIP Customers</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-900 mb-2">{insights.vip.count}</p>
            <p className="text-sm text-yellow-700">Revenue: ₹{(insights.vip.revenue / 1000).toFixed(1)}K</p>
            <p className="text-xs text-yellow-600 mt-1">Avg: ₹{insights.vip.avgSpend}/month</p>
            <button className="mt-4 w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm font-medium">
              Send Special Offer
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-blue-900">Regular Customers</h3>
            </div>
            <p className="text-3xl font-bold text-blue-900 mb-2">{insights.regular.count}</p>
            <p className="text-sm text-blue-700">Revenue: ₹{(insights.regular.revenue / 1000).toFixed(1)}K</p>
            <p className="text-xs text-blue-600 mt-1">Avg: ₹{insights.regular.avgSpend}/month</p>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
              Upgrade Campaign
            </button>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-red-900">At-Risk Customers</h3>
            </div>
            <p className="text-3xl font-bold text-red-900 mb-2">{insights.atRisk.count}</p>
            <p className="text-sm text-red-700">30+ days inactive</p>
            <p className="text-xs text-red-600 mt-1">Potential loss: ₹{(insights.atRisk.potentialLoss / 1000).toFixed(1)}K</p>
            <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
              Win-Back Campaign
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterSegment}
              onChange={(e) => setFilterSegment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Segments</option>
              <option value="vip">VIP</option>
              <option value="regular">Regular</option>
              <option value="at-risk">At-Risk</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Segment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Visit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Satisfaction</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                      <p className="text-sm text-gray-500">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      customer.segment === 'vip' ? 'bg-yellow-100 text-yellow-700' :
                      customer.segment === 'regular' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {customer.segment.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{customer.totalOrders}</p>
                    <p className="text-xs text-gray-500">{customer.visits} visits</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-green-600">₹{customer.totalSpend.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">₹{customer.avgOrderValue}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className={`text-sm ${
                      customer.lastVisit.includes('days ago') && parseInt(customer.lastVisit) > 30 ? 'text-red-600 font-medium' : 'text-gray-900'
                    }`}>
                      {customer.lastVisit}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-gray-900">{customer.satisfaction}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Send Email">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg" title="Send Offer">
                        <Gift className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
