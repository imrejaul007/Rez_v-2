import { useState } from 'react';
import { Search, GraduationCap, Building2, Crown, Cake, Shield, Heart, Users, Plus, CheckCircle, XCircle, Edit, Eye, TrendingUp, Award, Target, Calendar } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminExclusivePrograms() {
  const [activeTab, setActiveTab] = useState('student');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const [programStats] = useState({
    totalStudents: 18567,
    verifiedCorporate: 89,
    womenExclusive: 34567,
    birthdayActive: 12345,
    specialProfiles: 8901,
    totalDealsAssigned: 2345
  });

  const [studentProgram, setStudentProgram] = useState({
    config: {
      verificationRequired: true,
      discountRange: '10-30%',
      exclusiveDeals: 234,
      autoApproval: false,
      validDocuments: ['Student ID', 'Enrollment Letter', 'Fee Receipt']
    },
    verificationQueue: [
      {
        id: 1,
        name: 'Rahul Kumar',
        email: 'rahul@university.edu',
        college: 'Delhi University',
        enrollmentYear: '2022',
        document: 'student_id_001.jpg',
        submittedDate: '2024-01-25',
        status: 'pending'
      },
      {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya@college.ac.in',
        college: 'Mumbai University',
        enrollmentYear: '2023',
        document: 'enrollment_letter_002.pdf',
        submittedDate: '2024-01-25',
        status: 'pending'
      },
      {
        id: 3,
        name: 'Amit Patel',
        email: 'amit@iit.edu',
        college: 'IIT Bombay',
        enrollmentYear: '2024',
        document: 'student_id_003.jpg',
        submittedDate: '2024-01-24',
        status: 'verified'
      }
    ],
    deals: [
      { id: 1, merchant: 'Tech Store', title: '20% Student Discount', redemptions: 1234 },
      { id: 2, merchant: 'Fashion Hub', title: 'Student Special 25% Off', redemptions: 987 },
      { id: 3, merchant: 'Book World', title: '30% on Books', redemptions: 2345 }
    ]
  });

  const [corporateProgram, setCorporateProgram] = useState({
    config: {
      minimumEmployees: 50,
      discountTiers: ['Basic (50-200)', 'Business (200-500)', 'Enterprise (500+)'],
      exclusiveDeals: 156,
      onboardingProcess: 'Manual Verification'
    },
    partners: [
      {
        id: 1,
        company: 'Tech Corp India',
        employees: 1250,
        activeUsers: 450,
        totalVolume: 2500000,
        tier: 'Enterprise',
        startDate: '2024-01-01',
        status: 'active',
        contactPerson: 'HR Manager',
        email: 'hr@techcorp.com'
      },
      {
        id: 2,
        company: 'Startup Hub',
        employees: 85,
        activeUsers: 62,
        totalVolume: 425000,
        tier: 'Basic',
        startDate: '2024-01-15',
        status: 'active',
        contactPerson: 'Admin',
        email: 'admin@startuphub.com'
      },
      {
        id: 3,
        company: 'Finance Solutions Ltd',
        employees: 500,
        activeUsers: 0,
        totalVolume: 0,
        tier: 'Business',
        startDate: '2024-01-25',
        status: 'pending',
        contactPerson: 'People Ops',
        email: 'people@finance.com'
      }
    ],
    deals: [
      { id: 1, merchant: 'Restaurant Chain', title: 'Corporate Lunch 15% Off', redemptions: 5678 },
      { id: 2, merchant: 'Hotel Group', title: 'Business Travel Discount', redemptions: 3456 }
    ]
  });

  const [womenExclusiveProgram, setWomenExclusiveProgram] = useState({
    config: {
      autoEnrollment: true,
      verificationMethod: 'Profile Gender',
      exclusiveDeals: 189,
      specialDays: ['Women\'s Day', 'Mother\'s Day']
    },
    stats: {
      enrolledUsers: 34567,
      activeThisMonth: 12345,
      dealsRedeemed: 45678,
      avgSpend: 2345
    },
    deals: [
      { id: 1, merchant: 'Beauty Paradise', title: 'Women\'s Special 40% Off', redemptions: 8901 },
      { id: 2, merchant: 'Fashion Studio', title: 'Exclusive Collection 30% Off', redemptions: 7654 },
      { id: 3, merchant: 'Wellness Center', title: 'Spa & Wellness 25% Off', redemptions: 5432 }
    ]
  });

  const [birthdayProgram, setBirthdayProgram] = useState({
    config: {
      rewardAmount: 500,
      rewardType: 'ReZ Coins',
      validityDays: 7,
      weekDuration: true,
      autoSend: true,
      additionalDiscount: '10%',
      exclusiveDeals: 78
    },
    stats: {
      upcomingBirthdays: 234,
      activeThisWeek: 89,
      coinsDistributed: 445000,
      dealsRedeemed: 1234
    },
    upcomingBirthdays: [
      { id: 1, name: 'Rahul Kumar', email: 'rahul@email.com', birthday: '2024-01-28', coinsAwarded: 500, status: 'pending' },
      { id: 2, name: 'Priya Sharma', email: 'priya@email.com', birthday: '2024-01-29', coinsAwarded: 500, status: 'pending' },
      { id: 3, name: 'Amit Patel', email: 'amit@email.com', birthday: '2024-01-25', coinsAwarded: 500, status: 'awarded' }
    ]
  });

  const [specialProfiles, setSpecialProfiles] = useState({
    defence: {
      name: 'Defence Personnel',
      icon: Shield,
      color: 'bg-green-100 text-green-700',
      enrolled: 2345,
      verificationMethod: 'Service ID Card',
      discount: '15-25%',
      exclusiveDeals: 45
    },
    healthcare: {
      name: 'Healthcare Workers',
      icon: Heart,
      color: 'bg-red-100 text-red-700',
      enrolled: 3456,
      verificationMethod: 'Medical Council Registration',
      discount: '10-20%',
      exclusiveDeals: 56
    },
    teachers: {
      name: 'Teachers & Educators',
      icon: GraduationCap,
      color: 'bg-blue-100 text-blue-700',
      enrolled: 1890,
      verificationMethod: 'Teacher ID / School Email',
      discount: '12-22%',
      exclusiveDeals: 34
    },
    seniors: {
      name: 'Senior Citizens (60+)',
      icon: Users,
      color: 'bg-purple-100 text-purple-700',
      enrolled: 1210,
      verificationMethod: 'Age Verification',
      discount: '15-30%',
      exclusiveDeals: 67
    }
  });

  const [dealAssignments] = useState([
    { deal: 'Electronics 25% Off', programs: ['Student', 'Corporate', 'Defence'], redemptions: 4567 },
    { deal: 'Fashion Sale 30% Off', programs: ['Women Exclusive', 'Birthday', 'Seniors'], redemptions: 6789 },
    { deal: 'Healthcare Discount 20%', programs: ['Healthcare', 'Seniors'], redemptions: 2345 },
    { deal: 'Education Materials 15% Off', programs: ['Student', 'Teachers'], redemptions: 3456 }
  ]);

  const handleVerifyStudent = (id) => {
    setStudentProgram(prev => ({
      ...prev,
      verificationQueue: prev.verificationQueue.map(s =>
        s.id === id ? { ...s, status: 'verified' } : s
      )
    }));
  };

  const handleRejectStudent = (id) => {
    setStudentProgram(prev => ({
      ...prev,
      verificationQueue: prev.verificationQueue.map(s =>
        s.id === id ? { ...s, status: 'rejected' } : s
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exclusive Programs Manager</h1>
              <p className="text-gray-600 mt-1">Configure and manage all exclusive membership programs</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Program Deal
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Student Zone</p>
                <p className="text-3xl font-bold mt-2">{programStats.totalStudents.toLocaleString()}</p>
              </div>
              <GraduationCap className="w-12 h-12 opacity-80" />
            </div>
            <p className="text-sm opacity-90 mt-2">{studentProgram.config.exclusiveDeals} exclusive deals</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Corporate Perks</p>
                <p className="text-3xl font-bold mt-2">{programStats.verifiedCorporate}</p>
              </div>
              <Building2 className="w-12 h-12 opacity-80" />
            </div>
            <p className="text-sm opacity-90 mt-2">{corporateProgram.config.exclusiveDeals} partner deals</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Women Exclusive</p>
                <p className="text-3xl font-bold mt-2">{(programStats.womenExclusive / 1000).toFixed(1)}K</p>
              </div>
              <Crown className="w-12 h-12 opacity-80" />
            </div>
            <p className="text-sm opacity-90 mt-2">{womenExclusiveProgram.config.exclusiveDeals} special deals</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Birthday Specials</p>
                <p className="text-3xl font-bold mt-2">{(programStats.birthdayActive / 1000).toFixed(1)}K</p>
              </div>
              <Cake className="w-12 h-12 opacity-80" />
            </div>
            <p className="text-sm opacity-90 mt-2">₹{birthdayProgram.config.rewardAmount} coins reward</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Special Profiles</p>
                <p className="text-3xl font-bold mt-2">{programStats.specialProfiles.toLocaleString()}</p>
              </div>
              <Award className="w-12 h-12 opacity-80" />
            </div>
            <p className="text-sm opacity-90 mt-2">4 special categories</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Total Deals</p>
                <p className="text-3xl font-bold mt-2">{programStats.totalDealsAssigned.toLocaleString()}</p>
              </div>
              <Target className="w-12 h-12 opacity-80" />
            </div>
            <p className="text-sm opacity-90 mt-2">Across all programs</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('student')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'student'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Student Zone
              </button>
              <button
                onClick={() => setActiveTab('corporate')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'corporate'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Corporate Perks
              </button>
              <button
                onClick={() => setActiveTab('women')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'women'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Crown className="w-4 h-4" />
                Women Exclusive
              </button>
              <button
                onClick={() => setActiveTab('birthday')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'birthday'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Cake className="w-4 h-4" />
                Birthday Specials
              </button>
              <button
                onClick={() => setActiveTab('special')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'special'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Award className="w-4 h-4" />
                Special Profiles
              </button>
              <button
                onClick={() => setActiveTab('deals')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === 'deals'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Target className="w-4 h-4" />
                Deal Assignment
              </button>
            </nav>
          </div>

          {/* Student Zone Tab */}
          {activeTab === 'student' && (
            <div className="p-6">
              {/* Configuration */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Configuration</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Verification Required</p>
                    <p className="text-lg font-bold text-gray-900">
                      {studentProgram.config.verificationRequired ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Discount Range</p>
                    <p className="text-lg font-bold text-gray-900">{studentProgram.config.discountRange}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Exclusive Deals</p>
                    <p className="text-lg font-bold text-gray-900">{studentProgram.config.exclusiveDeals}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Auto Approval</p>
                    <p className="text-lg font-bold text-gray-900">
                      {studentProgram.config.autoApproval ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Queue */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Verification Queue</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">College</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enrollment Year</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {studentProgram.verificationQueue.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{student.name}</p>
                            <p className="text-xs text-gray-500">{student.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{student.college}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{student.enrollmentYear}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{student.submittedDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            student.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            student.status === 'verified' ? 'bg-green-100 text-green-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          {student.status === 'pending' && (
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg" title="View Document">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleVerifyStudent(student.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                                title="Verify"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleRejectStudent(student.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                title="Reject"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Student Deals */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Exclusive Deals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {studentProgram.deals.map((deal) => (
                  <div key={deal.id} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="font-semibold text-gray-900">{deal.merchant}</p>
                    <p className="text-sm text-gray-700 mt-1">{deal.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{deal.redemptions.toLocaleString()} redemptions</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Corporate Perks Tab */}
          {activeTab === 'corporate' && (
            <div className="p-6">
              {/* Configuration */}
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Configuration</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Minimum Employees</p>
                    <p className="text-lg font-bold text-gray-900">{corporateProgram.config.minimumEmployees}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Discount Tiers</p>
                    <p className="text-lg font-bold text-gray-900">{corporateProgram.config.discountTiers.length}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Exclusive Deals</p>
                    <p className="text-lg font-bold text-gray-900">{corporateProgram.config.exclusiveDeals}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Onboarding</p>
                    <p className="text-lg font-bold text-gray-900">{corporateProgram.config.onboardingProcess}</p>
                  </div>
                </div>
              </div>

              {/* Corporate Partners */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Corporate Partners</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active Users</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Volume</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {corporateProgram.partners.map((partner) => (
                      <tr key={partner.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{partner.company}</p>
                            <p className="text-xs text-gray-500">{partner.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{partner.employees.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{partner.activeUsers}</p>
                            <p className="text-xs text-gray-500">
                              {partner.employees > 0 ? ((partner.activeUsers / partner.employees) * 100).toFixed(1) : 0}% adoption
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-green-600">
                            ₹{(partner.totalVolume / 100000).toFixed(1)}L
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            partner.tier === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                            partner.tier === 'Business' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {partner.tier}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            partner.status === 'active' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {partner.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Women Exclusive Tab */}
          {activeTab === 'women' && (
            <div className="p-6">
              {/* Configuration */}
              <div className="bg-pink-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Configuration</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Auto Enrollment</p>
                    <p className="text-lg font-bold text-gray-900">
                      {womenExclusiveProgram.config.autoEnrollment ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Verification Method</p>
                    <p className="text-lg font-bold text-gray-900">{womenExclusiveProgram.config.verificationMethod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Exclusive Deals</p>
                    <p className="text-lg font-bold text-gray-900">{womenExclusiveProgram.config.exclusiveDeals}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Special Days</p>
                    <p className="text-lg font-bold text-gray-900">{womenExclusiveProgram.config.specialDays.length}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Enrolled Users</p>
                  <p className="text-2xl font-bold text-gray-900">{womenExclusiveProgram.stats.enrolledUsers.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Active This Month</p>
                  <p className="text-2xl font-bold text-green-600">{womenExclusiveProgram.stats.activeThisMonth.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Deals Redeemed</p>
                  <p className="text-2xl font-bold text-purple-600">{womenExclusiveProgram.stats.dealsRedeemed.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Avg Spend</p>
                  <p className="text-2xl font-bold text-indigo-600">₹{womenExclusiveProgram.stats.avgSpend}</p>
                </div>
              </div>

              {/* Deals */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Women Exclusive Deals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {womenExclusiveProgram.deals.map((deal) => (
                  <div key={deal.id} className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                    <p className="font-semibold text-gray-900">{deal.merchant}</p>
                    <p className="text-sm text-gray-700 mt-1">{deal.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{deal.redemptions.toLocaleString()} redemptions</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Birthday Specials Tab */}
          {activeTab === 'birthday' && (
            <div className="p-6">
              {/* Configuration */}
              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Configuration</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Reward Amount</p>
                    <p className="text-lg font-bold text-gray-900">₹{birthdayProgram.config.rewardAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Reward Type</p>
                    <p className="text-lg font-bold text-gray-900">{birthdayProgram.config.rewardType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Validity Period</p>
                    <p className="text-lg font-bold text-gray-900">{birthdayProgram.config.validityDays} days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Auto Send</p>
                    <p className="text-lg font-bold text-gray-900">
                      {birthdayProgram.config.autoSend ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Extra Discount</p>
                    <p className="text-lg font-bold text-gray-900">{birthdayProgram.config.additionalDiscount}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <p className="text-sm text-gray-600">Upcoming Birthdays</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{birthdayProgram.stats.upcomingBirthdays}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Cake className="w-4 h-4 text-purple-600" />
                    <p className="text-sm text-gray-600">Active This Week</p>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">{birthdayProgram.stats.activeThisWeek}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-600">Coins Distributed</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">{(birthdayProgram.stats.coinsDistributed / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-indigo-600" />
                    <p className="text-sm text-gray-600">Deals Redeemed</p>
                  </div>
                  <p className="text-2xl font-bold text-indigo-600">{birthdayProgram.stats.dealsRedeemed.toLocaleString()}</p>
                </div>
              </div>

              {/* Upcoming Birthdays */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Birthdays</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Birthday</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coins Awarded</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {birthdayProgram.upcomingBirthdays.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{user.birthday}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-purple-600">{user.coinsAwarded} coins</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'awarded' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Special Profiles Tab */}
          {activeTab === 'special' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specialProfiles).map(([key, profile]) => {
                  const Icon = profile.icon;
                  return (
                    <div key={key} className="border-2 border-gray-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${profile.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{profile.name}</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Enrolled Members</span>
                          <span className="font-semibold text-gray-900">{profile.enrolled.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Verification Method</span>
                          <span className="font-semibold text-gray-900">{profile.verificationMethod}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Discount Range</span>
                          <span className="font-semibold text-green-600">{profile.discount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Exclusive Deals</span>
                          <span className="font-semibold text-indigo-600">{profile.exclusiveDeals}</span>
                        </div>
                      </div>

                      <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Manage Program
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Deal Assignment Tab */}
          {activeTab === 'deals' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Deal to Program Assignment</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deal</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned Programs</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Redemptions</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dealAssignments.map((assignment, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">{assignment.deal}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-2">
                            {assignment.programs.map((program, i) => (
                              <span key={i} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                                {program}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-green-600">{assignment.redemptions.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
