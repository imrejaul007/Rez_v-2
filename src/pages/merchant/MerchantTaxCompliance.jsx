import { useState } from 'react';
import { FileText, DollarSign, AlertCircle, CheckCircle, Calendar, Download, Upload, Calculator, TrendingUp, Shield, Clock, File, Archive, Search, Filter, Eye } from 'lucide-react';

export default function MerchantTaxCompliance() {
  const [activeTab, setActiveTab] = useState('gst');
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  // GST Filing data
  const gstReturns = [
    {
      id: 'gstr-2025-12',
      period: 'December 2025',
      type: 'GSTR-1',
      dueDate: '2026-01-11',
      status: 'pending',
      sales: 2456780,
      outputTax: 294813,
      purchases: 1234560,
      inputTax: 148147,
      netTax: 146666,
      daysRemaining: 14
    },
    {
      id: 'gstr-2025-11',
      period: 'November 2025',
      type: 'GSTR-1',
      dueDate: '2025-12-11',
      status: 'filed',
      sales: 2234560,
      outputTax: 268147,
      purchases: 1123450,
      inputTax: 134814,
      netTax: 133333,
      filedDate: '2025-12-08'
    },
    {
      id: 'gstr-2025-10',
      period: 'October 2025',
      type: 'GSTR-1',
      dueDate: '2025-11-11',
      status: 'filed',
      sales: 2123450,
      outputTax: 254814,
      purchases: 1098765,
      inputTax: 131851,
      netTax: 122963,
      filedDate: '2025-11-09'
    }
  ];

  // Tax breakdown by rate
  const taxBreakdown = [
    { rate: '0%', sales: 125000, tax: 0, items: 45 },
    { rate: '5%', sales: 345600, tax: 17280, items: 89 },
    { rate: '12%', sales: 567800, tax: 68136, items: 156 },
    { rate: '18%', sales: 1234500, tax: 222210, items: 312 },
    { rate: '28%', sales: 183880, tax: 51486, items: 34 }
  ];

  // TDS data
  const tdsPayments = [
    {
      id: 'tds-001',
      vendor: 'Marketing Agency Ltd',
      amount: 125000,
      tdsRate: 10,
      tdsAmount: 12500,
      section: '194J',
      paymentDate: '2025-12-15',
      deposited: true,
      challanNo: 'CH-2025-123'
    },
    {
      id: 'tds-002',
      vendor: 'Warehouse Rent',
      amount: 50000,
      tdsRate: 10,
      tdsAmount: 5000,
      section: '194I',
      paymentDate: '2025-12-01',
      deposited: true,
      challanNo: 'CH-2025-124'
    },
    {
      id: 'tds-003',
      vendor: 'Freelance Developer',
      amount: 75000,
      tdsRate: 10,
      tdsAmount: 7500,
      section: '194J',
      paymentDate: '2025-12-20',
      deposited: false,
      challanNo: null
    }
  ];

  // Compliance checklist
  const complianceItems = [
    {
      task: 'File GSTR-1 for December',
      dueDate: '2026-01-11',
      status: 'pending',
      priority: 'high',
      daysLeft: 14
    },
    {
      task: 'File GSTR-3B for December',
      dueDate: '2026-01-20',
      status: 'pending',
      priority: 'high',
      daysLeft: 23
    },
    {
      task: 'Deposit TDS for December',
      dueDate: '2026-01-07',
      status: 'pending',
      priority: 'critical',
      daysLeft: 10
    },
    {
      task: 'Annual GST Return Filing',
      dueDate: '2026-03-31',
      status: 'upcoming',
      priority: 'medium',
      daysLeft: 93
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'GST Collected (MTD)',
      value: '₹2,94,813',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Input Tax Credit',
      value: '₹1,48,147',
      change: '+5.4%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Net Tax Payable',
      value: '₹1,46,666',
      change: '+11.3%',
      trend: 'up',
      icon: Calculator,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Compliance Score',
      value: '98/100',
      change: '+2',
      trend: 'up',
      icon: Shield,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      filed: { label: 'Filed', className: 'bg-green-100 text-green-700', icon: CheckCircle },
      pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700', icon: Clock },
      overdue: { label: 'Overdue', className: 'bg-red-100 text-red-700', icon: AlertCircle },
      upcoming: { label: 'Upcoming', className: 'bg-blue-100 text-blue-700', icon: Calendar }
    };
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${config.className}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      critical: { label: 'Critical', className: 'bg-red-100 text-red-700' },
      high: { label: 'High', className: 'bg-orange-100 text-orange-700' },
      medium: { label: 'Medium', className: 'bg-yellow-100 text-yellow-700' },
      low: { label: 'Low', className: 'bg-gray-100 text-gray-700' }
    };
    const config = priorityConfig[priority] || priorityConfig.medium;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Tax & Compliance Management</h1>
              </div>
              <p className="text-indigo-100">GST, TDS, and automated compliance tracking with filing reminders</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Reports
              </button>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Calculate Tax
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Compliance Checklist */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Compliance Checklist</h3>
            <Shield className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="space-y-3">
            {complianceItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.priority === 'critical' ? 'bg-red-100' :
                      item.priority === 'high' ? 'bg-orange-100' : 'bg-yellow-100'
                    }`}>
                      <FileText className={`w-5 h-5 ${
                        item.priority === 'critical' ? 'text-red-600' :
                        item.priority === 'high' ? 'text-orange-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{item.task}</p>
                        {getPriorityBadge(item.priority)}
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {item.dueDate}
                        </span>
                        <span className={`font-semibold ${item.daysLeft <= 10 ? 'text-red-600' : 'text-green-600'}`}>
                          {item.daysLeft} days remaining
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                    File Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-4">
              {['gst', 'tds', 'reports', 'audit'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm uppercase border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'gst' && (
              <div className="space-y-6">
                {/* Tax Breakdown */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">GST Breakdown by Rate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {taxBreakdown.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-indigo-600">{item.rate}</span>
                          <span className="text-sm text-gray-600">{item.items} items</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Sales:</span>
                            <span className="font-semibold text-gray-900">₹{(item.sales / 1000).toFixed(0)}K</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Tax:</span>
                            <span className="font-semibold text-green-600">₹{(item.tax / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GST Returns */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">GST Returns Filing</h3>
                  <div className="space-y-4">
                    {gstReturns.map((ret) => (
                      <div key={ret.id} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-300 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-gray-900">{ret.type} - {ret.period}</h4>
                              {getStatusBadge(ret.status)}
                            </div>
                            <p className="text-sm text-gray-600">
                              Due Date: {ret.dueDate}
                              {ret.status === 'pending' && (
                                <span className={`ml-2 font-semibold ${ret.daysRemaining <= 7 ? 'text-red-600' : 'text-green-600'}`}>
                                  ({ret.daysRemaining} days left)
                                </span>
                              )}
                              {ret.status === 'filed' && (
                                <span className="ml-2 text-green-600">
                                  (Filed on {ret.filedDate})
                                </span>
                              )}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600 mb-1">Net Tax Payable</p>
                            <p className="text-2xl font-bold text-gray-900">₹{ret.netTax.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Total Sales</p>
                            <p className="font-semibold text-gray-900">₹{ret.sales.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Output Tax</p>
                            <p className="font-semibold text-green-600">₹{ret.outputTax.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Total Purchases</p>
                            <p className="font-semibold text-gray-900">₹{ret.purchases.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Input Tax Credit</p>
                            <p className="font-semibold text-blue-600">₹{ret.inputTax.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                          {ret.status === 'pending' ? (
                            <>
                              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                                File Return
                              </button>
                              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                                Preview
                              </button>
                            </>
                          ) : (
                            <>
                              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                View Filed Return
                              </button>
                              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Download
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tds' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">TDS Deductions & Deposits</h3>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Record TDS Payment
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Vendor</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TDS Rate</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TDS Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Section</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Payment Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Challan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tdsPayments.map((payment) => (
                        <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-semibold text-gray-900">{payment.vendor}</td>
                          <td className="py-4 px-4 text-gray-700">₹{payment.amount.toLocaleString()}</td>
                          <td className="py-4 px-4 text-gray-700">{payment.tdsRate}%</td>
                          <td className="py-4 px-4 font-semibold text-green-600">₹{payment.tdsAmount.toLocaleString()}</td>
                          <td className="py-4 px-4 text-gray-700">{payment.section}</td>
                          <td className="py-4 px-4 text-gray-700">{payment.paymentDate}</td>
                          <td className="py-4 px-4">
                            {payment.deposited ? (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                Deposited
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                                Pending
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-gray-700">{payment.challanNo || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Reports & Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Monthly Tax Trend</h4>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                      <p className="text-gray-600">Tax collection trend chart</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Input vs Output Tax</h4>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <p className="text-gray-600">Tax comparison chart</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit Trail & Documentation</h3>
                <div className="border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-600">Complete audit trail of all tax-related transactions and filings...</p>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                      <Archive className="w-5 h-5" />
                      Generate Audit Report
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
