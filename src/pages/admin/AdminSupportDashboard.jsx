import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Headphones, Users, MessageSquare, Clock, CheckCircle, XCircle,
  AlertTriangle, TrendingUp, ArrowUpRight, ArrowDownRight, Star,
  Mail, Phone, Send, Eye, Filter, Download, RefreshCw, Plus,
  User, Package, DollarSign, Award, Target, Activity, BarChart3,
  ThumbsUp, ThumbsDown, Zap, Calendar, MapPin, Tag, FileText
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSupportDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  // Support Metrics
  const [supportMetrics] = useState({
    activeTickets: { count: 234, growth: -8.5, urgent: 23, overdue: 8 },
    resolvedToday: { count: 156, growth: 12.3, avgTime: 2.5 },
    avgResponseTime: { minutes: 12, target: 15, performance: 120 },
    satisfaction: { score: 4.6, target: 4.5, responses: 1234 },
    agentPerformance: { avgScore: 87.5, topAgent: 'Priya Sharma', topScore: 95 },
    totalResolved: { count: 12567, thisWeek: 876, thisMonth: 3456 }
  });

  // Active Tickets
  const [tickets] = useState([
    {
      id: 'TKT-2024-00234',
      user: 'Rajesh Kumar',
      email: 'rajesh.k@email.com',
      subject: 'Order not delivered after 5 days',
      category: 'delivery',
      priority: 'high',
      status: 'open',
      assignedTo: 'Priya Sharma',
      createdAt: '2 hours ago',
      lastUpdate: '30 mins ago',
      messages: 3,
      merchant: 'Pizza Paradise'
    },
    {
      id: 'TKT-2024-00233',
      user: 'Amit Patel',
      email: 'amit.p@email.com',
      subject: 'Wrong product received',
      category: 'product_issue',
      priority: 'medium',
      status: 'in_progress',
      assignedTo: 'Rahul Singh',
      createdAt: '5 hours ago',
      lastUpdate: '2 hours ago',
      messages: 7,
      merchant: 'Fashion Studio'
    },
    {
      id: 'TKT-2024-00232',
      user: 'Sneha Desai',
      email: 'sneha.d@email.com',
      subject: 'Refund not processed',
      category: 'payment',
      priority: 'urgent',
      status: 'escalated',
      assignedTo: 'Team Lead',
      createdAt: '1 day ago',
      lastUpdate: '5 hours ago',
      messages: 12,
      merchant: 'Glow Spa'
    },
    {
      id: 'TKT-2024-00231',
      user: 'Neha Gupta',
      email: 'neha.g@email.com',
      subject: 'Account login issues',
      category: 'technical',
      priority: 'low',
      status: 'waiting',
      assignedTo: 'Auto-assigned',
      createdAt: '3 hours ago',
      lastUpdate: '3 hours ago',
      messages: 1,
      merchant: null
    }
  ]);

  // Support Agents
  const [agents] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      avatar: 'PS',
      status: 'online',
      activeTickets: 12,
      resolvedToday: 8,
      avgResponseTime: 8,
      satisfaction: 4.8,
      performance: 95
    },
    {
      id: 2,
      name: 'Rahul Singh',
      avatar: 'RS',
      status: 'online',
      activeTickets: 15,
      resolvedToday: 6,
      avgResponseTime: 10,
      satisfaction: 4.7,
      performance: 92
    },
    {
      id: 3,
      name: 'Anjali Verma',
      avatar: 'AV',
      status: 'away',
      activeTickets: 8,
      resolvedToday: 10,
      avgResponseTime: 12,
      satisfaction: 4.6,
      performance: 88
    },
    {
      id: 4,
      name: 'Vikram Mehta',
      avatar: 'VM',
      status: 'online',
      activeTickets: 10,
      resolvedToday: 7,
      avgResponseTime: 15,
      satisfaction: 4.5,
      performance: 85
    },
    {
      id: 5,
      name: 'Kavya Reddy',
      avatar: 'KR',
      status: 'offline',
      activeTickets: 0,
      resolvedToday: 12,
      avgResponseTime: 9,
      satisfaction: 4.9,
      performance: 96
    }
  ]);

  // Category Breakdown
  const [categoryStats] = useState([
    { category: 'Delivery Issues', icon: Package, count: 89, avgResolutionTime: 3.2, satisfaction: 4.3, color: 'blue' },
    { category: 'Payment Problems', icon: DollarSign, count: 67, avgResolutionTime: 2.8, satisfaction: 4.5, color: 'green' },
    { category: 'Product Issues', icon: Tag, count: 54, avgResolutionTime: 2.5, satisfaction: 4.6, color: 'orange' },
    { category: 'Technical Support', icon: Zap, count: 34, avgResolutionTime: 4.1, satisfaction: 4.2, color: 'purple' },
    { category: 'Account Issues', icon: User, count: 28, avgResolutionTime: 1.8, satisfaction: 4.7, color: 'pink' },
    { category: 'General Inquiry', icon: MessageSquare, count: 62, avgResolutionTime: 1.2, satisfaction: 4.8, color: 'cyan' }
  ]);

  // Recent Resolutions
  const [recentResolutions] = useState([
    {
      id: 1,
      ticketId: 'TKT-2024-00230',
      user: 'Arjun Kapoor',
      issue: 'Missing cashback',
      resolvedBy: 'Priya Sharma',
      resolutionTime: 1.5,
      rating: 5,
      comment: 'Very quick resolution! Thank you.',
      timeAgo: '10 mins ago'
    },
    {
      id: 2,
      ticketId: 'TKT-2024-00229',
      user: 'Divya Shah',
      issue: 'Order cancellation',
      resolvedBy: 'Rahul Singh',
      resolutionTime: 2.3,
      rating: 4,
      comment: 'Good support',
      timeAgo: '25 mins ago'
    },
    {
      id: 3,
      ticketId: 'TKT-2024-00228',
      user: 'Karan Malhotra',
      issue: 'Delivery delay',
      resolvedBy: 'Anjali Verma',
      resolutionTime: 3.5,
      rating: 5,
      comment: 'Agent was very helpful',
      timeAgo: '1 hour ago'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-700';
      case 'in_progress': return 'bg-yellow-100 text-yellow-700';
      case 'escalated': return 'bg-red-100 text-red-700';
      case 'waiting': return 'bg-gray-100 text-gray-700';
      case 'resolved': return 'bg-green-100 text-green-700';
      case 'online': return 'bg-green-100 text-green-700';
      case 'away': return 'bg-yellow-100 text-yellow-700';
      case 'offline': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      orange: 'from-orange-500 to-red-500',
      purple: 'from-purple-500 to-pink-500',
      pink: 'from-pink-500 to-rose-500',
      cyan: 'from-cyan-500 to-blue-500'
    };
    return colors[color] || colors.blue;
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Headphones className="w-8 h-8" />
                  <h1 className="text-3xl font-bold">Customer Support Admin Dashboard</h1>
                </div>
                <p className="text-cyan-100 text-lg">Support tickets, agents & customer satisfaction</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/admin/support/agents"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors font-medium"
                >
                  <Plus className="w-5 h-5" />
                  Add Agent
                </Link>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                  <RefreshCw className="w-5 h-5" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Time Filter */}
            <div className="flex gap-2 mt-6">
              {['today', '7days', '30days', 'all'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === timeframe
                      ? 'bg-white text-cyan-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {timeframe === 'today' && 'Today'}
                  {timeframe === '7days' && '7 Days'}
                  {timeframe === '30days' && '30 Days'}
                  {timeframe === 'all' && 'All Time'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Active Tickets */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-red-600 font-semibold">urgent</p>
                  <p className="text-sm font-bold text-red-600">{supportMetrics.activeTickets.urgent}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Active Tickets</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {supportMetrics.activeTickets.count}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowDownRight className="w-4 h-4" />
                  {Math.abs(supportMetrics.activeTickets.growth)}%
                </span>
                <span className="text-gray-600 text-sm">vs last period</span>
              </div>
              <div className="mt-2 text-sm text-orange-600 font-medium">
                {supportMetrics.activeTickets.overdue} overdue
              </div>
            </div>

            {/* Resolved Today */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">avg time</p>
                  <p className="text-sm font-semibold text-green-600">{supportMetrics.resolvedToday.avgTime}h</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Resolved Today</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {supportMetrics.resolvedToday.count}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  {supportMetrics.resolvedToday.growth}%
                </span>
                <span className="text-gray-600 text-sm">vs yesterday</span>
              </div>
            </div>

            {/* Avg Response Time */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">target</p>
                  <p className="text-sm font-semibold text-purple-600">{supportMetrics.avgResponseTime.target}m</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Avg Response Time</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {supportMetrics.avgResponseTime.minutes}m
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${supportMetrics.avgResponseTime.performance}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {supportMetrics.avgResponseTime.performance}% of target met
                </p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">target</p>
                  <p className="text-sm font-semibold text-yellow-600">{supportMetrics.satisfaction.target}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Satisfaction Score</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {supportMetrics.satisfaction.score} / 5.0
              </p>
              <div className="mt-4 text-sm text-gray-600">
                {supportMetrics.satisfaction.responses.toLocaleString()} responses
              </div>
            </div>

            {/* Agent Performance */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Avg Agent Performance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {supportMetrics.agentPerformance.avgScore}%
              </p>
              <div className="mt-4 text-sm text-gray-600">
                Top: {supportMetrics.agentPerformance.topAgent} ({supportMetrics.agentPerformance.topScore}%)
              </div>
            </div>

            {/* Total Resolved */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-teal-500 to-green-500 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">Total Resolved</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(supportMetrics.totalResolved.count / 1000).toFixed(1)}K
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span>{supportMetrics.totalResolved.thisWeek} this week</span>
                <span>•</span>
                <span>{supportMetrics.totalResolved.thisMonth} this month</span>
              </div>
            </div>
          </div>

          {/* Active Tickets Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Active Support Tickets</h2>
                <div className="flex gap-3">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="escalated">Escalated</option>
                    <option value="waiting">Waiting</option>
                  </select>
                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="all">All Priority</option>
                    <option value="urgent">Urgent</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ticket</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{ticket.id}</p>
                          <p className="text-xs text-gray-600">{ticket.createdAt}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{ticket.user}</p>
                          <p className="text-xs text-gray-600">{ticket.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs">
                          <p className="text-sm text-gray-900 truncate">{ticket.subject}</p>
                          {ticket.merchant && (
                            <p className="text-xs text-gray-600">Merchant: {ticket.merchant}</p>
                          )}
                          <div className="flex items-center gap-2 mt-1">
                            <MessageSquare className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-600">{ticket.messages} messages</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                          {ticket.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{ticket.assignedTo}</p>
                        <p className="text-xs text-gray-600">Updated: {ticket.lastUpdate}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Send className="w-4 h-4 text-blue-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Support Agents */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Support Agents</h2>
              </div>
              <div className="p-6 space-y-4">
                {agents.map((agent) => (
                  <div key={agent.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {agent.avatar}
                      </div>
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        agent.status === 'online' ? 'bg-green-500' :
                        agent.status === 'away' ? 'bg-yellow-500' :
                        'bg-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{agent.name}</p>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(agent.status)}`}>
                          {agent.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-gray-600 text-xs">Active</p>
                          <p className="font-semibold text-gray-900">{agent.activeTickets}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-xs">Resolved Today</p>
                          <p className="font-semibold text-gray-900">{agent.resolvedToday}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-xs">Performance</p>
                          <p className={`font-semibold ${
                            agent.performance >= 90 ? 'text-green-600' :
                            agent.performance >= 80 ? 'text-blue-600' :
                            'text-orange-600'
                          }`}>{agent.performance}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {agent.avgResponseTime}m avg
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {agent.satisfaction}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Category Breakdown</h2>
              </div>
              <div className="p-6 space-y-4">
                {categoryStats.map((cat, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(cat.color)}`}>
                          <cat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{cat.category}</p>
                          <p className="text-sm text-gray-600">{cat.count} tickets</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold text-gray-900">{cat.satisfaction}</span>
                        </div>
                        <p className="text-xs text-gray-600">{cat.avgResolutionTime}h avg</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Resolutions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Resolutions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentResolutions.map((resolution) => (
                <div key={resolution.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-medium text-gray-900">{resolution.ticketId}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-sm text-gray-600">{resolution.user}</p>
                      </div>
                      <p className="text-sm text-gray-900 mb-2">{resolution.issue}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span>Resolved by: {resolution.resolvedBy}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {resolution.resolutionTime}h
                        </span>
                        <span>•</span>
                        <span>{resolution.timeAgo}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < resolution.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 italic">"{resolution.comment}"</p>
                    </div>
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
