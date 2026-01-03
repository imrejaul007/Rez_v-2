import { useState } from 'react';
import { Search, Plus, DollarSign, TrendingUp, Calendar, Users, Download, CheckCircle, Clock, CreditCard, BarChart3, Award, AlertCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantPayroll() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState('2025-12');

  // Employee Payroll Data
  const employees = [
    {
      id: 'EMP-001',
      name: 'Priya Sharma',
      role: 'Senior Stylist',
      type: 'Full-time',
      baseSalary: 25000,
      commission: { rate: 15, earnings: 12450 },
      incentives: 3000,
      deductions: { pf: 2000, tax: 1500, advance: 0 },
      attendance: { present: 26, absent: 0, leaves: 0, overtime: 8 },
      services: 83,
      revenue: 83000,
      grossPay: 40450,
      netPay: 36950,
      status: 'pending'
    },
    {
      id: 'EMP-002',
      name: 'Rahul Verma',
      role: 'Massage Therapist',
      type: 'Full-time',
      baseSalary: 20000,
      commission: { rate: 20, earnings: 18600 },
      incentives: 2500,
      deductions: { pf: 1600, tax: 1200, advance: 5000 },
      attendance: { present: 24, absent: 2, leaves: 0, overtime: 4 },
      services: 93,
      revenue: 93000,
      grossPay: 41100,
      netPay: 33300,
      status: 'pending'
    },
    {
      id: 'EMP-003',
      name: 'Anjali Patel',
      role: 'Beauty Consultant',
      type: 'Full-time',
      baseSalary: 18000,
      commission: { rate: 12, earnings: 8760 },
      incentives: 1500,
      deductions: { pf: 1440, tax: 900, advance: 0 },
      attendance: { present: 25, absent: 1, leaves: 0, overtime: 6 },
      services: 73,
      revenue: 73000,
      grossPay: 28260,
      netPay: 25920,
      status: 'paid'
    },
    {
      id: 'EMP-004',
      name: 'Vikram Singh',
      role: 'Junior Stylist',
      type: 'Full-time',
      baseSalary: 15000,
      commission: { rate: 10, earnings: 5200 },
      incentives: 1000,
      deductions: { pf: 1200, tax: 600, advance: 2000 },
      attendance: { present: 26, absent: 0, leaves: 0, overtime: 5 },
      services: 52,
      revenue: 52000,
      grossPay: 21200,
      netPay: 17400,
      status: 'pending'
    },
    {
      id: 'EMP-005',
      name: 'Sneha Reddy',
      role: 'Nail Technician',
      type: 'Part-time',
      baseSalary: 12000,
      commission: { rate: 18, earnings: 6480 },
      incentives: 800,
      deductions: { pf: 960, tax: 480, advance: 0 },
      attendance: { present: 20, absent: 0, leaves: 0, overtime: 0 },
      services: 36,
      revenue: 36000,
      grossPay: 19280,
      netPay: 17840,
      status: 'pending'
    }
  ];

  // Payroll Summary
  const payrollSummary = {
    totalEmployees: 15,
    totalGrossPay: 285420,
    totalDeductions: 32880,
    totalNetPay: 252540,
    totalCommission: 62490,
    totalIncentives: 12800,
    paidEmployees: 3,
    pendingEmployees: 12
  };

  // Commission Rules
  const commissionRules = [
    {
      id: 'CR-001',
      role: 'Senior Stylist',
      type: 'percentage',
      rate: 15,
      threshold: null,
      applicableOn: 'Service Revenue',
      examples: ['Haircut: 15% of ₹500 = ₹75', 'Hair Color: 15% of ₹2000 = ₹300']
    },
    {
      id: 'CR-002',
      role: 'Massage Therapist',
      type: 'percentage',
      rate: 20,
      threshold: null,
      applicableOn: 'Service Revenue',
      examples: ['Full Body Massage: 20% of ₹1500 = ₹300']
    },
    {
      id: 'CR-003',
      role: 'Beauty Consultant',
      type: 'tiered',
      tiers: [
        { min: 0, max: 50000, rate: 10 },
        { min: 50001, max: 100000, rate: 12 },
        { min: 100001, max: null, rate: 15 }
      ],
      applicableOn: 'Product Sales',
      examples: ['₹60,000 sales: ₹5000@10% + ₹10,000@12% = ₹1,700']
    },
    {
      id: 'CR-004',
      role: 'Sales Associate',
      type: 'fixed_per_unit',
      amount: 50,
      applicableOn: 'Per Product Sold',
      examples: ['10 products sold = 10 × ₹50 = ₹500']
    }
  ];

  // Attendance & Overtime
  const attendanceRules = {
    workingDays: 26,
    overtimeRate: 1.5,
    hourlyRate: 120,
    leavePolicies: [
      { type: 'Casual Leave', days: 12, paid: true },
      { type: 'Sick Leave', days: 10, paid: true },
      { type: 'Earned Leave', days: 15, paid: true }
    ]
  };

  // Incentive Programs
  const incentivePrograms = [
    {
      id: 'INC-001',
      name: 'Top Performer Bonus',
      criteria: 'Monthly revenue > ₹80,000',
      amount: 3000,
      eligibleEmployees: 2
    },
    {
      id: 'INC-002',
      name: 'Perfect Attendance',
      criteria: '100% attendance for the month',
      amount: 1500,
      eligibleEmployees: 8
    },
    {
      id: 'INC-003',
      name: 'Customer Rating Bonus',
      criteria: 'Average rating ≥ 4.8',
      amount: 2000,
      eligibleEmployees: 5
    }
  ];

  // Payment History
  const paymentHistory = [
    { month: 'November 2025', totalPaid: 248920, employees: 15, date: '2025-12-05', status: 'completed' },
    { month: 'October 2025', totalPaid: 242350, employees: 14, date: '2025-11-05', status: 'completed' },
    { month: 'September 2025', totalPaid: 239180, employees: 14, date: '2025-10-05', status: 'completed' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <MerchantNav />
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Payroll & Commission Management
            </h1>
            <p className="text-gray-600 mt-1">Manage salaries, commissions, incentives & attendance</p>
          </div>
          <div className="flex gap-3">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
            >
              <option value="2025-12">December 2025</option>
              <option value="2025-11">November 2025</option>
              <option value="2025-10">October 2025</option>
            </select>
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Process Payroll
            </button>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Payroll</p>
              <p className="text-3xl font-bold text-gray-900">₹{(payrollSummary.totalNetPay / 1000).toFixed(1)}L</p>
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +4.2% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Commissions</p>
              <p className="text-3xl font-bold text-gray-900">₹{(payrollSummary.totalCommission / 1000).toFixed(1)}K</p>
              <p className="text-blue-600 text-sm mt-1">From 437 services</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Incentives</p>
              <p className="text-3xl font-bold text-gray-900">₹{(payrollSummary.totalIncentives / 1000).toFixed(1)}K</p>
              <p className="text-purple-600 text-sm mt-1">15 employees eligible</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pending Payments</p>
              <p className="text-3xl font-bold text-gray-900">{payrollSummary.pendingEmployees}</p>
              <p className="text-yellow-600 text-sm mt-1">₹{(payrollSummary.totalNetPay * 0.8 / 1000).toFixed(1)}K to disburse</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: 'Payroll Overview', icon: BarChart3 },
            { id: 'employees', label: 'Employee Details', icon: Users },
            { id: 'commission', label: 'Commission Rules', icon: Award },
            { id: 'history', label: 'Payment History', icon: Calendar }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Payroll Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Base Salaries</span>
                    <span className="font-bold text-gray-900">₹{(payrollSummary.totalGrossPay - payrollSummary.totalCommission - payrollSummary.totalIncentives).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Commissions</span>
                    <span className="font-bold text-blue-600">₹{payrollSummary.totalCommission.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Incentives</span>
                    <span className="font-bold text-purple-600">₹{payrollSummary.totalIncentives.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Gross Pay</span>
                    <span className="font-bold text-gray-900 text-lg">₹{payrollSummary.totalGrossPay.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Deductions (PF, Tax, etc.)</span>
                    <span className="font-bold text-red-600">-₹{payrollSummary.totalDeductions.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 bg-green-50 rounded-lg px-3 mt-2">
                    <span className="text-gray-900 font-bold">Net Payable</span>
                    <span className="font-bold text-green-600 text-xl">₹{payrollSummary.totalNetPay.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Active Incentive Programs</h3>
                <div className="space-y-3">
                  {incentivePrograms.map(program => (
                    <div key={program.id} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{program.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{program.criteria}</p>
                        </div>
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{program.eligibleEmployees} eligible</span>
                        <span className="font-bold text-purple-600">₹{program.amount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Paid</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {employees.map(emp => (
                <div key={emp.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{emp.name}</h3>
                        <p className="text-sm text-gray-600">{emp.role} • {emp.type}</p>
                        <p className="text-xs text-gray-500 mt-1">{emp.id}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(emp.status)}`}>
                      {emp.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Base Salary</p>
                      <p className="font-bold text-gray-900">₹{emp.baseSalary.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Commission ({emp.commission.rate}%)</p>
                      <p className="font-bold text-blue-600">₹{emp.commission.earnings.toLocaleString('en-IN')}</p>
                      <p className="text-xs text-gray-500">{emp.services} services</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Incentives</p>
                      <p className="font-bold text-purple-600">₹{emp.incentives.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Attendance</p>
                      <p className="font-bold text-gray-900">{emp.attendance.present}/{attendanceRules.workingDays} days</p>
                      <p className="text-xs text-gray-500">{emp.attendance.overtime}h OT</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Gross Pay</p>
                      <p className="text-lg font-bold text-gray-900">₹{emp.grossPay.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Deductions</p>
                      <p className="text-lg font-bold text-red-600">-₹{(emp.deductions.pf + emp.deductions.tax + emp.deductions.advance).toLocaleString('en-IN')}</p>
                      <p className="text-xs text-gray-500">PF: ₹{emp.deductions.pf} • Tax: ₹{emp.deductions.tax}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Net Payable</p>
                      <p className="text-xl font-bold text-green-700">₹{emp.netPay.toLocaleString('en-IN')}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Revenue Generated: <span className="font-bold text-gray-900">₹{emp.revenue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                        View Payslip
                      </button>
                      {emp.status === 'pending' && (
                        <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 text-sm">
                          Process Payment
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Commission Rules Tab */}
        {activeTab === 'commission' && (
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Commission Structure</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Rule
                </button>
              </div>
              <div className="space-y-4">
                {commissionRules.map(rule => (
                  <div key={rule.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{rule.role}</h4>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {rule.type.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </div>

                    {rule.type === 'percentage' && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <div className="flex items-center gap-4 mb-2">
                          <div>
                            <p className="text-xs text-gray-600">Commission Rate</p>
                            <p className="text-2xl font-bold text-blue-600">{rule.rate}%</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-600">Applicable On</p>
                            <p className="font-medium text-gray-900">{rule.applicableOn}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {rule.type === 'tiered' && rule.tiers && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="text-xs text-gray-600 mb-2">Tiered Structure:</p>
                        <div className="space-y-2">
                          {rule.tiers.map((tier, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white rounded px-3 py-2">
                              <span className="text-sm text-gray-700">
                                ₹{tier.min.toLocaleString('en-IN')} {tier.max ? `- ₹${tier.max.toLocaleString('en-IN')}` : '& above'}
                              </span>
                              <span className="font-bold text-blue-600">{tier.rate}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {rule.type === 'fixed_per_unit' && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-xs text-gray-600">Amount Per Unit</p>
                            <p className="text-2xl font-bold text-blue-600">₹{rule.amount}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-600">Applicable On</p>
                            <p className="font-medium text-gray-900">{rule.applicableOn}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-gray-700 mb-2">Examples:</p>
                      <ul className="space-y-1">
                        {rule.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-gray-700">• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Payment History Tab */}
        {activeTab === 'history' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Payment History</h3>
            <div className="space-y-3">
              {paymentHistory.map((payment, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{payment.month}</h4>
                      <p className="text-sm text-gray-600">Processed on {payment.date} • {payment.employees} employees</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">₹{payment.totalPaid.toLocaleString('en-IN')}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)} mt-1`}>
                      {payment.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
