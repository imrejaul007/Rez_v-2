import React, { useState } from 'react';
import { DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle, XCircle, Download, Filter, Calendar, Building2, CreditCard, ArrowRight, FileText, Eye } from 'lucide-react';
import AdminNav from '../../components/AdminNav';

const AdminSettlementCommission = () => {
  const [adminType, setAdminType] = useState('hq');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('week');
  const [settlementStatus, setSettlementStatus] = useState('all');

  const regions = ['Bangalore', 'Delhi NCR', 'Mumbai', 'Hyderabad', 'Chennai'];
  const categories = ['Pizza & Italian', 'Fast Food', 'Coffee & Cafe', 'Indian', 'Chinese'];

  // Mock settlement data
  const settlementMetrics = {
    hq: {
      week: {
        totalGMV: 45678900,
        platformCommission: 2283945, // 5% of GMV
        commissionRate: 5.0,
        pendingSettlements: 856234,
        processingSettlements: 423567,
        completedSettlements: 1004144,
        totalMerchants: 2456,
        pendingMerchants: 234,
        processingMerchants: 98,
        completedMerchants: 2124
      },
      month: {
        totalGMV: 198765400,
        platformCommission: 9938270,
        commissionRate: 5.0,
        pendingSettlements: 1234567,
        processingSettlements: 987654,
        completedSettlements: 7716049,
        totalMerchants: 2456,
        pendingMerchants: 345,
        processingMerchants: 156,
        completedMerchants: 1955
      }
    }
  };

  const settlements = [
    {
      id: 'STL-2024-001',
      merchantId: 'merchant-001',
      merchantName: 'Pizza Paradise',
      branches: 3,
      region: 'Bangalore',
      category: 'Pizza & Italian',
      period: 'Jan 15-21, 2024',
      gmv: 234567,
      commission: 11728, // 5%
      netPayable: 222839,
      status: 'completed',
      completedDate: '2024-01-22',
      utr: 'UTR2024012200123',
      bankAccount: '****6789'
    },
    {
      id: 'STL-2024-002',
      merchantId: 'merchant-002',
      merchantName: 'Burger Junction',
      branches: 5,
      region: 'Delhi NCR',
      category: 'Fast Food',
      period: 'Jan 15-21, 2024',
      gmv: 345678,
      commission: 17284,
      netPayable: 328394,
      status: 'processing',
      initiatedDate: '2024-01-22',
      expectedDate: '2024-01-24',
      bankAccount: '****1234'
    },
    {
      id: 'STL-2024-003',
      merchantId: 'merchant-003',
      merchantName: 'Cafe Coffee Day',
      branches: 8,
      region: 'Mumbai',
      category: 'Coffee & Cafe',
      period: 'Jan 15-21, 2024',
      gmv: 456789,
      commission: 22839,
      netPayable: 433950,
      status: 'pending',
      dueDate: '2024-01-23',
      bankAccount: '****5678'
    },
    {
      id: 'STL-2024-004',
      merchantId: 'merchant-045',
      merchantName: 'Tandoori Nights',
      branches: 2,
      region: 'Hyderabad',
      category: 'Indian',
      period: 'Jan 15-21, 2024',
      gmv: 123456,
      commission: 6173,
      netPayable: 117283,
      status: 'failed',
      failedDate: '2024-01-22',
      failureReason: 'Invalid bank account details',
      bankAccount: '****9012'
    },
    {
      id: 'STL-2024-005',
      merchantId: 'merchant-067',
      merchantName: 'Dragon Wok',
      branches: 4,
      region: 'Chennai',
      category: 'Chinese',
      period: 'Jan 15-21, 2024',
      gmv: 198765,
      commission: 9938,
      netPayable: 188827,
      status: 'pending',
      dueDate: '2024-01-23',
      bankAccount: '****3456'
    }
  ];

  const commissionBreakdown = [
    {
      tier: 'Base Commission',
      rate: 5.0,
      gmv: 45678900,
      commission: 2283945,
      merchants: 2456,
      description: 'Standard 5% platform fee'
    },
    {
      tier: 'Premium Merchants (-0.5%)',
      rate: 4.5,
      gmv: 15678900,
      commission: 705551,
      merchants: 234,
      description: 'High-volume merchants with reduced rate'
    },
    {
      tier: 'Event Mode (+1%)',
      rate: 6.0,
      gmv: 3456789,
      commission: 207407,
      merchants: 87,
      description: 'Special events and flea markets'
    }
  ];

  const paymentMethods = [
    {
      method: 'NEFT',
      settlements: 1234,
      amount: 12345678,
      avgTime: '24 hours',
      successRate: 98.5,
      color: 'blue'
    },
    {
      method: 'RTGS',
      settlements: 567,
      amount: 5678901,
      avgTime: '2 hours',
      successRate: 99.2,
      color: 'green'
    },
    {
      method: 'IMPS',
      settlements: 234,
      amount: 2345678,
      avgTime: '30 minutes',
      successRate: 97.8,
      color: 'purple'
    },
    {
      method: 'UPI',
      settlements: 123,
      amount: 1234567,
      avgTime: '5 minutes',
      successRate: 96.4,
      color: 'orange'
    }
  ];

  const metrics = settlementMetrics[adminType][timeframe];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'processing': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'failed': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return CheckCircle;
      case 'processing': return Clock;
      case 'pending': return AlertCircle;
      case 'failed': return XCircle;
      default: return Clock;
    }
  };

  const filterSettlements = (settlements) => {
    return settlements.filter(s => {
      const regionMatch = selectedRegion === 'all' || s.region === selectedRegion;
      const categoryMatch = selectedCategory === 'all' || s.category === selectedCategory;
      const statusMatch = settlementStatus === 'all' || s.status === settlementStatus;
      return regionMatch && categoryMatch && statusMatch;
    });
  };

  const filteredSettlements = filterSettlements(settlements);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <AdminNav />

      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Settlement & Commission Dashboard</h1>
                  <p className="text-white/90 mt-1">Financial oversight, merchant payouts & commission tracking</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  COMMISSION RATE: {metrics.commissionRate}%
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  {metrics.totalMerchants} MERCHANTS
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <select
                value={adminType}
                onChange={(e) => setAdminType(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
              >
                <option value="hq" className="text-gray-800">HQ Admin (All Regions)</option>
                <option value="regional" className="text-gray-800">Regional Admin</option>
                <option value="category" className="text-gray-800">Category Admin</option>
              </select>

              <div className="flex gap-2">
                {['week', 'month'].map(tf => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                      timeframe === tf
                        ? 'bg-white text-green-600'
                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                    }`}
                  >
                    {tf.charAt(0).toUpperCase() + tf.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total GMV</p>
                  <p className="text-2xl font-bold">₹{(metrics.totalGMV / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-white/70">Gross Merchandise Value</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Platform Commission</p>
                  <p className="text-2xl font-bold">₹{(metrics.platformCommission / 1000000).toFixed(2)}M</p>
                  <p className="text-xs text-white/70">{metrics.commissionRate}% of GMV</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Pending Settlements</p>
                  <p className="text-2xl font-bold">₹{(metrics.pendingSettlements / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-white/70">{metrics.pendingMerchants} merchants</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Completed</p>
                  <p className="text-2xl font-bold">₹{(metrics.completedSettlements / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-white/70">{metrics.completedMerchants} merchants</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settlement Status Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">{metrics.pendingMerchants}</span>
            </div>
            <h3 className="font-bold text-gray-800">Pending</h3>
            <p className="text-sm text-gray-600 mt-1">₹{(metrics.pendingSettlements / 1000).toFixed(0)}K to settle</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">{metrics.processingMerchants}</span>
            </div>
            <h3 className="font-bold text-gray-800">Processing</h3>
            <p className="text-sm text-gray-600 mt-1">₹{(metrics.processingSettlements / 1000).toFixed(0)}K in transit</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">{metrics.completedMerchants}</span>
            </div>
            <h3 className="font-bold text-gray-800">Completed</h3>
            <p className="text-sm text-gray-600 mt-1">₹{(metrics.completedSettlements / 1000000).toFixed(1)}M settled</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">{((metrics.completedMerchants / metrics.totalMerchants) * 100).toFixed(1)}%</span>
            </div>
            <h3 className="font-bold text-gray-800">Success Rate</h3>
            <p className="text-sm text-gray-600 mt-1">Settlements on time</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={settlementStatus}
              onChange={(e) => setSettlementStatus(e.target.value)}
              className="bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>

            {(adminType === 'regional' || adminType === 'hq') && (
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            )}

            {(adminType === 'category' || adminType === 'hq') && (
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-2 rounded-xl font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            )}

            <div className="ml-auto">
              <button className="px-6 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Settlements Table */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Settlement Transactions</h2>
          <div className="space-y-4">
            {filteredSettlements.map(settlement => {
              const StatusIcon = getStatusIcon(settlement.status);
              return (
                <div key={settlement.id} className={`p-6 rounded-xl border-2 ${getStatusColor(settlement.status)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-800 text-lg">{settlement.merchantName}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(settlement.status)}`}>
                          <StatusIcon className="w-3 h-3 inline mr-1" />
                          {settlement.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-600">
                          {settlement.region} • {settlement.category} • {settlement.branches} branches
                        </span>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Period: {settlement.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>ID: {settlement.id}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>A/C: {settlement.bankAccount}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-white p-3 rounded-lg">
                          <p className="text-xs text-gray-500">GMV</p>
                          <p className="text-lg font-bold text-gray-800">₹{settlement.gmv.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Commission (5%)</p>
                          <p className="text-lg font-bold text-orange-600">-₹{settlement.commission.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Net Payable</p>
                          <p className="text-lg font-bold text-green-600">₹{settlement.netPayable.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Status Date</p>
                          <p className="text-sm font-bold text-gray-800">
                            {settlement.completedDate || settlement.initiatedDate || settlement.dueDate || settlement.failedDate}
                          </p>
                        </div>
                      </div>

                      {settlement.status === 'completed' && (
                        <div className="mt-3 p-2 bg-green-50 rounded-lg text-sm">
                          <span className="text-green-800 font-semibold">UTR: {settlement.utr}</span>
                        </div>
                      )}

                      {settlement.status === 'processing' && (
                        <div className="mt-3 p-2 bg-blue-50 rounded-lg text-sm">
                          <span className="text-blue-800">Expected completion: {settlement.expectedDate}</span>
                        </div>
                      )}

                      {settlement.status === 'failed' && (
                        <div className="mt-3 p-2 bg-red-50 rounded-lg text-sm">
                          <span className="text-red-800 font-semibold">Failure reason: {settlement.failureReason}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      {settlement.status === 'failed' && (
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all">
                          Retry
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commission Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Commission Breakdown by Tier</h2>
          <div className="space-y-4">
            {commissionBreakdown.map(tier => (
              <div key={tier.tier} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{tier.tier}</h3>
                    <p className="text-xs text-gray-600 mt-1">{tier.description}</p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Rate</p>
                      <p className="text-lg font-bold text-purple-600">{tier.rate}%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">GMV</p>
                      <p className="text-lg font-bold text-gray-800">₹{(tier.gmv / 1000000).toFixed(1)}M</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Commission</p>
                      <p className="text-lg font-bold text-green-600">₹{(tier.commission / 1000).toFixed(0)}K</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Merchants</p>
                      <p className="text-lg font-bold text-blue-600">{tier.merchants}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Performance */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-6">Payment Methods Performance</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {paymentMethods.map(method => (
              <div key={method.method} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{method.method}</h3>
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Settlements</span>
                    <span className="font-bold">{method.settlements}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Amount</span>
                    <span className="font-bold">₹{(method.amount / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Avg Time</span>
                    <span className="font-bold">{method.avgTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Success Rate</span>
                    <span className="font-bold text-green-300">{method.successRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettlementCommission;
