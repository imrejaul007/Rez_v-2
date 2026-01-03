import { useState } from 'react';
import { Crown, GraduationCap, Building2, Award, Users, TrendingUp, CheckCircle, XCircle, Eye, Plus } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSpecialPrograms() {
  const [activeTab, setActiveTab] = useState('prive');

  const [priveMembers, setPriveMembers] = useState([
    {
      id: 1,
      name: 'John Premium',
      email: 'john@example.com',
      tier: 'platinum',
      joinedDate: '2024-01-15',
      totalSpend: 125000,
      exclusiveOffers: 15,
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Elite',
      email: 'jane@example.com',
      tier: 'gold',
      joinedDate: '2024-01-10',
      totalSpend: 75000,
      exclusiveOffers: 10,
      status: 'active'
    },
    {
      id: 3,
      name: 'Mike Silver',
      email: 'mike@example.com',
      tier: 'silver',
      joinedDate: '2024-01-05',
      totalSpend: 35000,
      exclusiveOffers: 5,
      status: 'active'
    }
  ]);

  const [tierStats] = useState({
    silver: { count: 145, minSpend: 25000, cashbackBonus: 5 },
    gold: { count: 67, minSpend: 50000, cashbackBonus: 10 },
    platinum: { count: 23, minSpend: 100000, cashbackBonus: 15 }
  });

  const [exclusiveOffers, setExclusiveOffers] = useState([
    {
      id: 1,
      merchant: 'The Coffee House',
      logo: '☕',
      title: 'Platinum Members: 25% Off + Free Dessert',
      tier: 'platinum',
      redemptions: 45,
      validUntil: '2024-02-28',
      status: 'active'
    },
    {
      id: 2,
      merchant: 'Fashion Boutique',
      logo: '👗',
      title: 'Gold & Above: 30% Off Premium Collection',
      tier: 'gold',
      redemptions: 123,
      validUntil: '2024-02-15',
      status: 'active'
    },
    {
      id: 3,
      merchant: 'Tech Store',
      logo: '💻',
      title: 'All ReZ Privé: Extra 10% on Electronics',
      tier: 'silver',
      redemptions: 234,
      validUntil: '2024-03-31',
      status: 'active'
    }
  ]);

  const [studentVerifications, setStudentVerifications] = useState([
    {
      id: 1,
      name: 'Sarah Student',
      email: 'sarah@student.edu',
      college: 'IIT Delhi',
      idCard: 'ID_CARD_001.jpg',
      enrollmentYear: '2023',
      submittedDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      email: 'rahul@university.ac.in',
      college: 'Delhi University',
      idCard: 'ID_CARD_002.jpg',
      enrollmentYear: '2022',
      submittedDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      email: 'priya@college.edu',
      college: 'Mumbai University',
      idCard: 'ID_CARD_003.jpg',
      enrollmentYear: '2024',
      submittedDate: '2024-01-19',
      status: 'verified'
    }
  ]);

  const [corporatePartners, setCorporatePartners] = useState([
    {
      id: 1,
      company: 'Tech Corp India',
      logo: '🏢',
      contactPerson: 'HR Manager',
      email: 'hr@techcorp.com',
      employees: 1250,
      activeUsers: 450,
      totalVolume: 2500000,
      discountTier: 'Enterprise',
      startDate: '2024-01-01',
      status: 'active'
    },
    {
      id: 2,
      company: 'Startup Hub',
      logo: '🚀',
      contactPerson: 'Admin',
      email: 'admin@startuphub.com',
      employees: 85,
      activeUsers: 62,
      totalVolume: 425000,
      discountTier: 'Business',
      startDate: '2024-01-15',
      status: 'active'
    },
    {
      id: 3,
      company: 'Finance Solutions Ltd',
      logo: '💼',
      contactPerson: 'People Ops',
      email: 'people@finance.com',
      employees: 500,
      activeUsers: 0,
      totalVolume: 0,
      discountTier: 'Business',
      startDate: '2024-01-25',
      status: 'pending'
    }
  ]);

  const handleVerifyStudent = (id) => {
    setStudentVerifications(prev => prev.map(s =>
      s.id === id ? { ...s, status: 'verified' } : s
    ));
  };

  const handleRejectStudent = (id) => {
    setStudentVerifications(prev => prev.map(s =>
      s.id === id ? { ...s, status: 'rejected' } : s
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Special Programs</h1>
              <p className="text-gray-600 mt-1">Manage ReZ Privé, Student, and Corporate programs</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="w-5 h-5" />
              Add Exclusive Offer
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium opacity-90">ReZ Privé Members</p>
              <Crown className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold mt-2">{Object.values(tierStats).reduce((sum, t) => sum + t.count, 0)}</p>
            <p className="text-sm opacity-90 mt-2">Across all tiers</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium opacity-90">Student Users</p>
              <GraduationCap className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold mt-2">18,567</p>
            <p className="text-sm opacity-90 mt-2">Verified students</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium opacity-90">Corporate Partners</p>
              <Building2 className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold mt-2">{corporatePartners.filter(c => c.status === 'active').length}</p>
            <p className="text-sm opacity-90 mt-2">Active partnerships</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium opacity-90">Exclusive Offers</p>
              <Award className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-3xl font-bold mt-2">{exclusiveOffers.length}</p>
            <p className="text-sm opacity-90 mt-2">Currently active</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('prive')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'prive'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Crown className="w-4 h-4" />
                ReZ Privé
              </button>
              <button
                onClick={() => setActiveTab('student')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'student'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Student Program
              </button>
              <button
                onClick={() => setActiveTab('corporate')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'corporate'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Corporate Partners
              </button>
            </nav>
          </div>

          {/* ReZ Privé Tab */}
          {activeTab === 'prive' && (
            <div className="p-6">
              {/* Tier Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 border-2 border-gray-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Silver Tier</h3>
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{tierStats.silver.count}</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>Min Spend: ₹{(tierStats.silver.minSpend / 1000).toFixed(0)}K</p>
                    <p>Cashback Bonus: +{tierStats.silver.cashbackBonus}%</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6 border-2 border-yellow-400">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Gold Tier</h3>
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{tierStats.gold.count}</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>Min Spend: ₹{(tierStats.gold.minSpend / 1000).toFixed(0)}K</p>
                    <p>Cashback Bonus: +{tierStats.gold.cashbackBonus}%</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 border-2 border-purple-400">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Platinum Tier</h3>
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{tierStats.platinum.count}</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>Min Spend: ₹{(tierStats.platinum.minSpend / 1000).toFixed(0)}K</p>
                    <p>Cashback Bonus: +{tierStats.platinum.cashbackBonus}%</p>
                  </div>
                </div>
              </div>

              {/* Privé Members */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privé Members</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Member</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spend</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exclusive Offers</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {priveMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            member.tier === 'platinum' ? 'bg-purple-100 text-purple-700' :
                            member.tier === 'gold' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {member.tier === 'platinum' && <Crown className="w-3 h-3" />}
                            {member.tier === 'gold' && <Award className="w-3 h-3" />}
                            {member.tier === 'silver' && <Award className="w-3 h-3" />}
                            {member.tier}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{member.joinedDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-gray-900">₹{(member.totalSpend / 1000).toFixed(0)}K</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{member.exclusiveOffers} redeemed</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {member.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Exclusive Offers */}
              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Exclusive Offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exclusiveOffers.map((offer) => (
                  <div key={offer.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{offer.logo}</span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        offer.tier === 'platinum' ? 'bg-purple-100 text-purple-700' :
                        offer.tier === 'gold' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {offer.tier}+
                      </span>
                    </div>
                    <p className="font-medium text-gray-900 mb-2">{offer.merchant}</p>
                    <p className="text-sm text-gray-700 mb-3">{offer.title}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>{offer.redemptions} redemptions</p>
                      <p>Valid until {offer.validUntil}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Student Program Tab */}
          {activeTab === 'student' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Verification Queue</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">College/University</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enrollment Year</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {studentVerifications.map((student) => (
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
                              <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg" title="View ID">
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
            </div>
          )}

          {/* Corporate Partners Tab */}
          {activeTab === 'corporate' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Corporate Partners</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active Users</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Volume</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {corporatePartners.map((partner) => (
                      <tr key={partner.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{partner.logo}</span>
                            <div>
                              <p className="font-medium text-gray-900">{partner.company}</p>
                              <p className="text-xs text-gray-500">Since {partner.startDate}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm text-gray-900">{partner.contactPerson}</p>
                            <p className="text-xs text-gray-500">{partner.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{partner.employees.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{partner.activeUsers}</p>
                            {partner.employees > 0 && (
                              <p className="text-xs text-gray-500">
                                {((partner.activeUsers / partner.employees) * 100).toFixed(1)}% adoption
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-green-600">
                            {partner.totalVolume > 0 ? `₹${(partner.totalVolume / 100000).toFixed(1)}L` : '-'}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            partner.discountTier === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {partner.discountTier}
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
                        <td className="px-4 py-3 text-right">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <Eye className="w-4 h-4" />
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
