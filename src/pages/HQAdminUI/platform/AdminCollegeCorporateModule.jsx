import { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav';
import {
  GraduationCap, Building2, Users, TrendingUp, Award, FileText,
  Calendar, MapPin, DollarSign, Target, Star, Check, X, Clock,
  Upload, Download, Send, UserPlus, BarChart3, Briefcase, Phone,
  Mail, AlertCircle, CheckCircle, XCircle, Eye, Edit, Trash2
} from 'lucide-react';

export default function AdminCollegeCorporateModule() {
  const [activeTab, setActiveTab] = useState('college');

  const [collegeStats] = useState({
    totalColleges: 156,
    activeMoUs: 89,
    pendingApprovals: 12,
    activeAmbassadors: 234,
    totalStudents: 45678,
    monthlyRevenue: 2345678,
    avgConversionRate: 18.5,
    campusEvents: 45
  });

  const [corporateStats] = useState({
    totalCorporates: 78,
    activeMoUs: 45,
    pendingApprovals: 8,
    employeeUsers: 12345,
    monthlyRevenue: 4567890,
    avgSpendPerEmployee: 1245,
    activeOffers: 34,
    partnerships: 23
  });

  const [colleges] = useState([
    {
      id: 'CLG-001',
      name: 'IIT Mumbai',
      city: 'Mumbai',
      type: 'Engineering',
      students: 12000,
      mouStatus: 'active',
      mouDate: '2023-08-15',
      mouExpiry: '2025-08-14',
      ambassadors: 15,
      activeStudents: 3450,
      monthlyGMV: 567890,
      conversionRate: 28.7,
      events: 12,
      contactPerson: 'Dr. Rajesh Kumar',
      contactEmail: 'rajesh@iitmumbai.ac.in',
      contactPhone: '+91 98765 43210',
      tier: 'Premium',
      commission: 3.5,
      exclusiveOffers: 8
    },
    {
      id: 'CLG-002',
      name: 'St. Xavier\'s College',
      city: 'Mumbai',
      type: 'Arts & Commerce',
      students: 8500,
      mouStatus: 'active',
      mouDate: '2023-09-01',
      mouExpiry: '2025-08-31',
      ambassadors: 12,
      activeStudents: 2340,
      monthlyGMV: 345678,
      conversionRate: 27.5,
      events: 8,
      contactPerson: 'Prof. Sneha Patel',
      contactEmail: 'sneha@xaviers.edu',
      contactPhone: '+91 98765 43211',
      tier: 'Gold',
      commission: 4.0,
      exclusiveOffers: 5
    },
    {
      id: 'CLG-003',
      name: 'BITS Pilani',
      city: 'Pilani',
      type: 'Engineering',
      students: 15000,
      mouStatus: 'pending',
      mouDate: '2024-01-10',
      mouExpiry: null,
      ambassadors: 0,
      activeStudents: 0,
      monthlyGMV: 0,
      conversionRate: 0,
      events: 0,
      contactPerson: 'Dr. Amit Verma',
      contactEmail: 'amit@bits-pilani.ac.in',
      contactPhone: '+91 98765 43212',
      tier: 'Premium',
      commission: 3.5,
      exclusiveOffers: 0
    },
    {
      id: 'CLG-004',
      name: 'Symbiosis Institute',
      city: 'Pune',
      type: 'Management',
      students: 5000,
      mouStatus: 'expired',
      mouDate: '2022-07-01',
      mouExpiry: '2024-06-30',
      ambassadors: 8,
      activeStudents: 450,
      monthlyGMV: 89000,
      conversionRate: 9.0,
      events: 2,
      contactPerson: 'Dr. Priya Singh',
      contactEmail: 'priya@symbiosis.ac.in',
      contactPhone: '+91 98765 43213',
      tier: 'Gold',
      commission: 4.0,
      exclusiveOffers: 2
    }
  ]);

  const [ambassadors] = useState([
    {
      id: 'AMB-001',
      name: 'Rahul Sharma',
      college: 'IIT Mumbai',
      joinDate: '2023-09-01',
      status: 'active',
      referrals: 145,
      conversions: 89,
      conversionRate: 61.4,
      monthlyEarnings: 12500,
      totalEarnings: 45600,
      performance: 'excellent',
      tasksCompleted: 34,
      pendingTasks: 2,
      events: 5,
      rating: 4.8
    },
    {
      id: 'AMB-002',
      name: 'Priya Desai',
      college: 'St. Xavier\'s College',
      joinDate: '2023-09-15',
      status: 'active',
      referrals: 123,
      conversions: 67,
      conversionRate: 54.5,
      monthlyEarnings: 9800,
      totalEarnings: 34500,
      performance: 'good',
      tasksCompleted: 28,
      pendingTasks: 3,
      events: 4,
      rating: 4.5
    },
    {
      id: 'AMB-003',
      name: 'Arjun Patel',
      college: 'IIT Mumbai',
      joinDate: '2023-10-01',
      status: 'inactive',
      referrals: 23,
      conversions: 8,
      conversionRate: 34.8,
      monthlyEarnings: 0,
      totalEarnings: 5600,
      performance: 'poor',
      tasksCompleted: 8,
      pendingTasks: 12,
      events: 1,
      rating: 3.2
    }
  ]);

  const [campusEvents] = useState([
    {
      id: 'EVT-001',
      name: 'Tech Fest 2024',
      college: 'IIT Mumbai',
      date: '2024-02-15',
      type: 'Festival',
      status: 'upcoming',
      expectedFootfall: 15000,
      budget: 250000,
      sponsorship: 150000,
      exclusiveOffers: 12,
      ambassadorsAssigned: 8,
      registrations: 3450
    },
    {
      id: 'EVT-002',
      name: 'Fresher\'s Week',
      college: 'St. Xavier\'s College',
      date: '2024-02-08',
      type: 'Orientation',
      status: 'in_progress',
      expectedFootfall: 2000,
      budget: 75000,
      sponsorship: 40000,
      exclusiveOffers: 6,
      ambassadorsAssigned: 5,
      registrations: 1890
    },
    {
      id: 'EVT-003',
      name: 'Cultural Night',
      college: 'Symbiosis Institute',
      date: '2024-01-25',
      type: 'Cultural',
      status: 'completed',
      expectedFootfall: 3000,
      budget: 120000,
      sponsorship: 80000,
      exclusiveOffers: 8,
      ambassadorsAssigned: 6,
      actualFootfall: 3200,
      revenue: 145000,
      roi: 120.8
    }
  ]);

  const [corporates] = useState([
    {
      id: 'CORP-001',
      name: 'TCS Limited',
      industry: 'IT Services',
      employees: 50000,
      city: 'Mumbai',
      mouStatus: 'active',
      mouDate: '2023-07-01',
      mouExpiry: '2025-06-30',
      verifiedEmployees: 12345,
      activeUsers: 8900,
      monthlyGMV: 1234567,
      avgSpendPerUser: 1387,
      tier: 'Platinum',
      commission: 2.5,
      exclusiveOffers: 15,
      contactPerson: 'Rajesh Menon',
      contactEmail: 'rajesh.menon@tcs.com',
      contactPhone: '+91 98765 00001'
    },
    {
      id: 'CORP-002',
      name: 'Infosys Technologies',
      industry: 'IT Services',
      employees: 45000,
      city: 'Bangalore',
      mouStatus: 'active',
      mouDate: '2023-08-15',
      mouExpiry: '2025-08-14',
      verifiedEmployees: 9876,
      activeUsers: 6543,
      monthlyGMV: 987654,
      avgSpendPerUser: 1509,
      tier: 'Platinum',
      commission: 2.5,
      exclusiveOffers: 12,
      contactPerson: 'Anjali Krishnan',
      contactEmail: 'anjali.k@infosys.com',
      contactPhone: '+91 98765 00002'
    },
    {
      id: 'CORP-003',
      name: 'HDFC Bank',
      industry: 'Banking',
      employees: 25000,
      city: 'Mumbai',
      mouStatus: 'pending',
      mouDate: '2024-01-15',
      mouExpiry: null,
      verifiedEmployees: 0,
      activeUsers: 0,
      monthlyGMV: 0,
      avgSpendPerUser: 0,
      tier: 'Gold',
      commission: 3.0,
      exclusiveOffers: 0,
      contactPerson: 'Vikram Shah',
      contactEmail: 'vikram.shah@hdfcbank.com',
      contactPhone: '+91 98765 00003'
    }
  ]);

  const [mouPending] = useState([
    {
      id: 'MOU-PEN-001',
      type: 'college',
      name: 'Delhi University',
      submittedDate: '2024-01-20',
      documents: ['MoU Draft', 'Authorization Letter', 'ID Proof'],
      status: 'under_review',
      reviewer: 'Amit Patel',
      expectedStudents: 25000,
      tier: 'Premium'
    },
    {
      id: 'MOU-PEN-002',
      type: 'corporate',
      name: 'Wipro Limited',
      submittedDate: '2024-01-18',
      documents: ['MoU Draft', 'Company Registration', 'Employee List'],
      status: 'pending_signature',
      reviewer: 'Sneha Desai',
      expectedEmployees: 35000,
      tier: 'Platinum'
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      expired: 'bg-red-100 text-red-700',
      inactive: 'bg-gray-100 text-gray-600',
      upcoming: 'bg-blue-100 text-blue-700',
      in_progress: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-green-100 text-green-700',
      under_review: 'bg-yellow-100 text-yellow-700',
      pending_signature: 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  const getPerformanceColor = (performance) => {
    const colors = {
      excellent: 'bg-green-100 text-green-700',
      good: 'bg-blue-100 text-blue-700',
      average: 'bg-yellow-100 text-yellow-700',
      poor: 'bg-red-100 text-red-700'
    };
    return colors[performance] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <GraduationCap className="w-8 h-8" />
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">College & Corporate Partnerships</h1>
              <p className="text-blue-100">Manage MoUs, ambassadors, and institutional partnerships</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Upload className="w-5 h-5" />
              Upload MoU
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <GraduationCap className="w-5 h-5 text-blue-200" />
              <span className="text-xs text-blue-200">Active: {collegeStats.activeMoUs}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{collegeStats.totalColleges}</div>
            <div className="text-sm text-blue-200">Partner Colleges</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Building2 className="w-5 h-5 text-blue-200" />
              <span className="text-xs text-blue-200">Active: {corporateStats.activeMoUs}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{corporateStats.totalCorporates}</div>
            <div className="text-sm text-blue-200">Corporate Partners</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold mb-1">{collegeStats.activeAmbassadors}</div>
            <div className="text-sm text-blue-200">Active Ambassadors</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold mb-1">₹{((collegeStats.monthlyRevenue + corporateStats.monthlyRevenue) / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-blue-200">Monthly Revenue</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-6 px-6">
          <button
            onClick={() => setActiveTab('college')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'college'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              College Partnerships
            </div>
          </button>
          <button
            onClick={() => setActiveTab('ambassadors')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'ambassadors'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Student Ambassadors
            </div>
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'events'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Campus Events
            </div>
          </button>
          <button
            onClick={() => setActiveTab('corporate')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'corporate'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Corporate Partnerships
            </div>
          </button>
          <button
            onClick={() => setActiveTab('mou')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'mou'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              MoU Approvals ({collegeStats.pendingApprovals + corporateStats.pendingApprovals})
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* College Partnerships Tab */}
        {activeTab === 'college' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">College Partnerships</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <UserPlus className="w-4 h-4" />
                Add New College
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">College</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">City</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">MoU Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Students</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Ambassadors</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Monthly GMV</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Conversion</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((college) => (
                    <tr key={college.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{college.name}</div>
                          <div className="text-sm text-gray-600">{college.type}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{college.city}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(college.mouStatus)}`}>
                          {college.mouStatus.toUpperCase()}
                        </span>
                        {college.mouStatus === 'active' && (
                          <div className="text-xs text-gray-500 mt-1">Exp: {college.mouExpiry}</div>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{college.students.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">{college.activeStudents} active</div>
                      </td>
                      <td className="py-3 px-4 text-center font-medium text-gray-900">{college.ambassadors}</td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">₹{(college.monthlyGMV / 1000).toFixed(0)}K</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{college.conversionRate}%</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Student Ambassadors Tab */}
        {activeTab === 'ambassadors' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Student Ambassadors</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <UserPlus className="w-4 h-4" />
                Add Ambassador
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {ambassadors.map((ambassador) => (
                <div key={ambassador.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{ambassador.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ambassador.status)}`}>
                          {ambassador.status.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(ambassador.performance)}`}>
                          {ambassador.performance.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{ambassador.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          {ambassador.college}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Since {ambassador.joinDate}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-gray-900">{ambassador.referrals}</div>
                          <div className="text-xs text-gray-600">Referrals</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-green-600">{ambassador.conversions}</div>
                          <div className="text-xs text-gray-600">Conversions</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-gray-900">{ambassador.conversionRate}%</div>
                          <div className="text-xs text-gray-600">Conv. Rate</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-purple-600">₹{(ambassador.monthlyEarnings / 1000).toFixed(1)}K</div>
                          <div className="text-xs text-gray-600">Monthly</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-gray-900">{ambassador.tasksCompleted}</div>
                          <div className="text-xs text-gray-600">Tasks Done</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-blue-600">{ambassador.events}</div>
                          <div className="text-xs text-gray-600">Events</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-6 flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Campus Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Campus Events</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Calendar className="w-4 h-4" />
                Create Event
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {campusEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{event.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          {event.college}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-gray-900">{event.expectedFootfall.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Expected Footfall</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-green-600">₹{(event.budget / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-gray-600">Budget</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-purple-600">{event.exclusiveOffers}</div>
                      <div className="text-xs text-gray-600">Offers</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-blue-600">{event.registrations.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Registrations</div>
                    </div>
                  </div>

                  {event.status === 'completed' && (
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-green-700">{event.actualFootfall.toLocaleString()}</div>
                          <div className="text-xs text-green-600">Actual Footfall</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-700">₹{(event.revenue / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-green-600">Revenue Generated</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-700">{event.roi}%</div>
                          <div className="text-xs text-green-600">ROI</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Corporate Partnerships Tab */}
        {activeTab === 'corporate' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Corporate Partnerships</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Building2 className="w-4 h-4" />
                Add Corporate
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Company</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Industry</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">MoU Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Employees</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Active Users</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Monthly GMV</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {corporates.map((corp) => (
                    <tr key={corp.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{corp.name}</div>
                        <div className="text-sm text-gray-600">{corp.city}</div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{corp.industry}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(corp.mouStatus)}`}>
                          {corp.mouStatus.toUpperCase()}
                        </span>
                        {corp.mouStatus === 'active' && (
                          <div className="text-xs text-gray-500 mt-1">Exp: {corp.mouExpiry}</div>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{corp.employees.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">{corp.verifiedEmployees.toLocaleString()} verified</div>
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">{corp.activeUsers.toLocaleString()}</td>
                      <td className="py-3 px-4 font-medium text-gray-900">₹{(corp.monthlyGMV / 1000).toFixed(0)}K</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MoU Approvals Tab */}
        {activeTab === 'mou' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Pending MoU Approvals</h2>

            <div className="grid grid-cols-1 gap-4">
              {mouPending.map((mou) => (
                <div key={mou.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {mou.type === 'college' ? (
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        ) : (
                          <Building2 className="w-6 h-6 text-indigo-600" />
                        )}
                        <h3 className="text-lg font-bold text-gray-900">{mou.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(mou.status)}`}>
                          {mou.status.replace('_', ' ').toUpperCase()}
                        </span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {mou.tier}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>Submitted: {mou.submittedDate}</span>
                        <span>•</span>
                        <span>Reviewer: {mou.reviewer}</span>
                        <span>•</span>
                        <span>
                          {mou.type === 'college'
                            ? `${mou.expectedStudents.toLocaleString()} students`
                            : `${mou.expectedEmployees.toLocaleString()} employees`
                          }
                        </span>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Submitted Documents:</h4>
                        <div className="flex flex-wrap gap-2">
                          {mou.documents.map((doc, idx) => (
                            <span key={idx} className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                              <FileText className="w-3 h-3" />
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      <CheckCircle className="w-4 h-4" />
                      Approve MoU
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Eye className="w-4 h-4" />
                      View Documents
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Send className="w-4 h-4" />
                      Request Changes
                    </button>
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
