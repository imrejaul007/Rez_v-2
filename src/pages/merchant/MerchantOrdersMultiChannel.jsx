import { useState } from 'react';
import { ShoppingBag, Globe, Store, Smartphone, TrendingUp, Package, Truck, Clock, CheckCircle, XCircle, AlertCircle, Filter, Search, Eye, MessageSquare, Printer, BarChart3, DollarSign, Users } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantOrdersMultiChannel() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedChannel, setSelectedChannel] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Multi-channel orders
  const orders = [
    {
      id: 'ORD-2025-0001',
      channel: 'rez_mall',
      customerName: 'Priya Sharma',
      items: 3,
      total: 2497,
      status: 'confirmed',
      paymentStatus: 'paid',
      fulfillment: 'pending',
      createdAt: '2025-12-28 10:30 AM',
      deliveryType: 'standard',
      address: 'Mumbai, Maharashtra',
      priority: 'normal'
    },
    {
      id: 'ORD-2025-0002',
      channel: 'store_pos',
      customerName: 'Rahul Mehta',
      items: 1,
      total: 1299,
      status: 'completed',
      paymentStatus: 'paid',
      fulfillment: 'completed',
      createdAt: '2025-12-28 11:15 AM',
      deliveryType: 'pickup',
      address: 'Store Pickup',
      priority: 'normal'
    },
    {
      id: 'ORD-2025-0003',
      channel: 'marketplace',
      customerName: 'Anjali Desai',
      items: 2,
      total: 1598,
      status: 'processing',
      paymentStatus: 'paid',
      fulfillment: 'processing',
      createdAt: '2025-12-28 09:45 AM',
      deliveryType: 'express',
      address: 'Delhi, NCR',
      priority: 'high'
    },
    {
      id: 'ORD-2025-0004',
      channel: 'subscription',
      customerName: 'Vikram Singh',
      items: 1,
      total: 499,
      status: 'confirmed',
      paymentStatus: 'paid',
      fulfillment: 'pending',
      createdAt: '2025-12-28 08:00 AM',
      deliveryType: 'scheduled',
      address: 'Bangalore, Karnataka',
      priority: 'normal'
    },
    {
      id: 'ORD-2025-0005',
      channel: 'mobile_app',
      customerName: 'Sneha Patel',
      items: 4,
      total: 3196,
      status: 'pending_payment',
      paymentStatus: 'pending',
      fulfillment: 'pending',
      createdAt: '2025-12-28 12:00 PM',
      deliveryType: 'standard',
      address: 'Pune, Maharashtra',
      priority: 'normal'
    }
  ];

  // Channel performance metrics
  const channels = [
    {
      id: 'rez_mall',
      name: 'ReZ Mall',
      icon: Store,
      orders: 245,
      revenue: 456780,
      avgOrderValue: 1863,
      conversionRate: 3.2,
      color: 'indigo'
    },
    {
      id: 'marketplace',
      name: 'Marketplace',
      icon: Globe,
      orders: 178,
      revenue: 334560,
      avgOrderValue: 1880,
      conversionRate: 2.8,
      color: 'purple'
    },
    {
      id: 'store_pos',
      name: 'Store POS',
      icon: ShoppingBag,
      orders: 156,
      revenue: 289340,
      avgOrderValue: 1854,
      conversionRate: 45.6,
      color: 'blue'
    },
    {
      id: 'mobile_app',
      name: 'Mobile App',
      icon: Smartphone,
      orders: 134,
      revenue: 256890,
      avgOrderValue: 1917,
      conversionRate: 4.1,
      color: 'green'
    },
    {
      id: 'subscription',
      name: 'Subscriptions',
      icon: Package,
      orders: 89,
      revenue: 44411,
      avgOrderValue: 499,
      conversionRate: 28.5,
      color: 'pink'
    }
  ];

  // Performance stats
  const performanceStats = [
    {
      label: 'Total Orders',
      value: '802',
      change: '+18.2%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Total Revenue',
      value: '₹13,81,981',
      change: '+24.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Avg Order Value',
      value: '₹1,723',
      change: '+5.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Fulfillment Rate',
      value: '94.2%',
      change: '+2.8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const getChannelBadge = (channelId) => {
    const channel = channels.find(c => c.id === channelId);
    if (!channel) return null;
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium bg-${channel.color}-100 text-${channel.color}-700`}>
        {channel.name}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { label: 'Confirmed', className: 'bg-blue-100 text-blue-700' },
      processing: { label: 'Processing', className: 'bg-yellow-100 text-yellow-700' },
      shipped: { label: 'Shipped', className: 'bg-purple-100 text-purple-700' },
      delivered: { label: 'Delivered', className: 'bg-green-100 text-green-700' },
      completed: { label: 'Completed', className: 'bg-green-100 text-green-700' },
      cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-700' },
      pending_payment: { label: 'Pending Payment', className: 'bg-orange-100 text-orange-700' }
    };
    const config = statusConfig[status] || statusConfig.confirmed;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: { label: 'High', className: 'bg-red-100 text-red-700' },
      normal: { label: 'Normal', className: 'bg-gray-100 text-gray-700' },
      low: { label: 'Low', className: 'bg-blue-100 text-blue-700' }
    };
    const config = priorityConfig[priority] || priorityConfig.normal;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  const filteredOrders = orders.filter(order => {
    if (selectedChannel !== 'all' && order.channel !== selectedChannel) return false;
    if (selectedStatus !== 'all' && order.status !== selectedStatus) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <MerchantNav />
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Multi-Channel Order Management</h1>
              </div>
              <p className="text-indigo-100">Unified order processing across all sales channels</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </button>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <Printer className="w-5 h-5" />
                Print Orders
              </button>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Channel Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.id} className={`border-2 border-${channel.color}-200 rounded-lg p-4 hover:border-${channel.color}-400 transition-colors cursor-pointer`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-5 h-5 text-${channel.color}-600`} />
                    <h4 className="font-semibold text-gray-900">{channel.name}</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Orders:</span>
                      <span className="font-semibold text-gray-900">{channel.orders}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-semibold text-gray-900">₹{channel.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">AOV:</span>
                      <span className="font-semibold text-gray-900">₹{channel.avgOrderValue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Conv Rate:</span>
                      <span className="font-semibold text-gray-900">{channel.conversionRate}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Orders Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option value="all">All Channels</option>
                {channels.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <div className="flex-1" />
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <ShoppingBag className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-gray-900">{order.id}</p>
                          {getChannelBadge(order.channel)}
                          {getPriorityBadge(order.priority)}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <Users className="w-4 h-4 inline mr-1" />
                          {order.customerName}
                        </p>
                        <p className="text-sm text-gray-600">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {order.createdAt}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">₹{order.total.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">{order.items} items</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Order Status</p>
                      {getStatusBadge(order.status)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Payment</p>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        order.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Delivery</p>
                      <p className="text-sm font-semibold text-gray-900 capitalize">{order.deliveryType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Address</p>
                      <p className="text-sm font-semibold text-gray-900">{order.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      Update Status
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Contact Customer
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <Printer className="w-4 h-4" />
                      Print
                    </button>
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
