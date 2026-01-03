import { useState } from 'react';
import { Search, Plus, Eye, Edit2, Trash2, FileText, TrendingUp, Users, Building2, GraduationCap, Award, Calendar, CheckCircle, XCircle, Clock, Download, Upload, DollarSign, Target, Briefcase } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminPartnerships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [partnerships, setPartnerships] = useState([
    {
      id: 1,
      type: 'college',
      name: 'IIT Delhi',
      logo: '🎓',
      category: 'Engineering',
      contactPerson: 'Dr. Rajesh Kumar',
      contactEmail: 'rajesh@iitd.ac.in',
      contactPhone: '+91 98765 43210',
      mouSignedDate: '2024-01-15',
      mouExpiryDate: '2026-01-15',
      status: 'active',
      studentCount: 12000,
      activeUsers: 8500,
      totalTransactions: 45600,
      totalRevenue: 2340000,
      ambassadorCount: 25,
      benefits: {
        studentDiscount: 15,
        exclusiveOffers: true,
        campusEvents: true,
        ambassadorProgram: true
      },
      documents: ['MoU_IITDelhi_2024.pdf', 'Partnership_Agreement.pdf'],
      notes: 'High engagement, excellent ambassador program'
    },
    {
      id: 2,
      type: 'corporate',
      name: 'Infosys Limited',
      logo: '🏢',
      category: 'IT Services',
      contactPerson: 'Priya Sharma',
      contactEmail: 'priya.sharma@infosys.com',
      contactPhone: '+91 98765 43211',
      mouSignedDate: '2024-02-01',
      mouExpiryDate: '2026-02-01',
      status: 'active',
      employeeCount: 45000,
      activeUsers: 28000,
      totalTransactions: 89000,
      totalRevenue: 4560000,
      ambassadorCount: 0,
      benefits: {
        employeeDiscount: 20,
        exclusiveOffers: true,
        corporateEvents: true,
        bulkOrders: true
      },
      documents: ['MoU_Infosys_2024.pdf', 'Corporate_Agreement.pdf'],
      notes: 'Bulk order potential, quarterly reviews scheduled'
    },
    {
      id: 3,
      type: 'college',
      name: 'Delhi University',
      logo: '🎓',
      category: 'General',
      contactPerson: 'Prof. Amit Singh',
      contactEmail: 'amit@du.ac.in',
      contactPhone: '+91 98765 43212',
      mouSignedDate: '2024-03-10',
      mouExpiryDate: '2026-03-10',
      status: 'pending',
      studentCount: 25000,
      activeUsers: 0,
      totalTransactions: 0,
      totalRevenue: 0,
      ambassadorCount: 0,
      benefits: {
        studentDiscount: 12,
        exclusiveOffers: true,
        campusEvents: false,
        ambassadorProgram: true
      },
      documents: ['MoU_DU_Draft.pdf'],
      notes: 'Pending final approval from administration'
    },
    {
      id: 4,
      type: 'corporate',
      name: 'TCS (Tata Consultancy Services)',
      logo: '🏢',
      category: 'IT Services',
      contactPerson: 'Neha Patel',
      contactEmail: 'neha.patel@tcs.com',
      contactPhone: '+91 98765 43213',
      mouSignedDate: '2023-12-01',
      mouExpiryDate: '2025-12-01',
      status: 'expiring_soon',
      employeeCount: 60000,
      activeUsers: 35000,
      totalTransactions: 125000,
      totalRevenue: 6780000,
      ambassadorCount: 0,
      benefits: {
        employeeDiscount: 18,
        exclusiveOffers: true,
        corporateEvents: true,
        bulkOrders: true
      },
      documents: ['MoU_TCS_2023.pdf', 'Renewal_Discussion.pdf'],
      notes: 'Renewal discussions in progress, expires in 2 months'
    }
  ]);

  const [newPartnership, setNewPartnership] = useState({
    type: 'college',
    name: '',
    logo: '',
    category: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    mouDuration: 24,
    studentCount: 0,
    employeeCount: 0,
    discount: 15,
    exclusiveOffers: true,
    events: true,
    ambassadorProgram: false,
    notes: ''
  });

  const filteredPartnerships = partnerships.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.contactPerson.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || p.type === filterType;
    const matchesStatus = filterStatus === 'all' || p.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const stats = {
    totalPartnerships: partnerships.length,
    activePartnerships: partnerships.filter(p => p.status === 'active').length,
    pendingPartnerships: partnerships.filter(p => p.status === 'pending').length,
    expiringPartnerships: partnerships.filter(p => p.status === 'expiring_soon').length,
    totalColleges: partnerships.filter(p => p.type === 'college').length,
    totalCorporates: partnerships.filter(p => p.type === 'corporate').length,
    totalActiveUsers: partnerships.reduce((sum, p) => sum + p.activeUsers, 0),
    totalRevenue: partnerships.reduce((sum, p) => sum + p.totalRevenue, 0)
  };

  const handleCreatePartnership = () => {
    const partnership = {
      id: partnerships.length + 1,
      type: newPartnership.type,
      name: newPartnership.name,
      logo: newPartnership.logo,
      category: newPartnership.category,
      contactPerson: newPartnership.contactPerson,
      contactEmail: newPartnership.contactEmail,
      contactPhone: newPartnership.contactPhone,
      mouSignedDate: new Date().toISOString().split('T')[0],
      mouExpiryDate: new Date(Date.now() + newPartnership.mouDuration * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'pending',
      studentCount: newPartnership.type === 'college' ? newPartnership.studentCount : 0,
      employeeCount: newPartnership.type === 'corporate' ? newPartnership.employeeCount : 0,
      activeUsers: 0,
      totalTransactions: 0,
      totalRevenue: 0,
      ambassadorCount: 0,
      benefits: {
        studentDiscount: newPartnership.type === 'college' ? newPartnership.discount : 0,
        employeeDiscount: newPartnership.type === 'corporate' ? newPartnership.discount : 0,
        exclusiveOffers: newPartnership.exclusiveOffers,
        campusEvents: newPartnership.type === 'college' ? newPartnership.events : false,
        corporateEvents: newPartnership.type === 'corporate' ? newPartnership.events : false,
        ambassadorProgram: newPartnership.ambassadorProgram,
        bulkOrders: newPartnership.type === 'corporate'
      },
      documents: [],
      notes: newPartnership.notes
    };
    setPartnerships([...partnerships, partnership]);
    setShowCreateModal(false);
    setNewPartnership({
      type: 'college',
      name: '',
      logo: '',
      category: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      mouDuration: 24,
      studentCount: 0,
      employeeCount: 0,
      discount: 15,
      exclusiveOffers: true,
      events: true,
      ambassadorProgram: false,
      notes: ''
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: { bg: 'bg-green-100', text: 'text-green-700', label: 'Active' },
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pending' },
      expiring_soon: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Expiring Soon' },
      expired: { bg: 'bg-red-100', text: 'text-red-700', label: 'Expired' },
      suspended: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Suspended' }
    };
    return badges[status] || badges.pending;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Partnership Management</h1>
              <p className="text-gray-600 mt-1">College MoUs & Corporate partnerships</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Partnership
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Total</p>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalPartnerships}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Active</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{stats.activePartnerships}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600 font-medium">Pending</p>
            </div>
            <p className="text-2xl font-bold text-yellow-600">{stats.pendingPartnerships}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Expiring</p>
            </div>
            <p className="text-2xl font-bold text-orange-600">{stats.expiringPartnerships}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-600 font-medium">Colleges</p>
            </div>
            <p className="text-2xl font-bold text-blue-600">{stats.totalColleges}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Corporate</p>
            </div>
            <p className="text-2xl font-bold text-purple-600">{stats.totalCorporates}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <p className="text-sm text-gray-600 font-medium">Active Users</p>
            </div>
            <p className="text-2xl font-bold text-emerald-600">{(stats.totalActiveUsers / 1000).toFixed(0)}K</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-2xl font-bold text-green-600">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or contact person..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="college">College</option>
              <option value="corporate">Corporate</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="expiring_soon">Expiring Soon</option>
              <option value="expired">Expired</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Partnerships Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">MoU Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Benefits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPartnerships.map((partnership) => {
                  const statusBadge = getStatusBadge(partnership.status);
                  return (
                    <tr key={partnership.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-2xl">
                            {partnership.logo}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{partnership.name}</p>
                            <p className="text-sm text-gray-500">{partnership.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {partnership.type === 'college' ? (
                            <>
                              <GraduationCap className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-medium text-blue-700">College</span>
                            </>
                          ) : (
                            <>
                              <Building2 className="w-4 h-4 text-purple-600" />
                              <span className="text-sm font-medium text-purple-700">Corporate</span>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {partnership.type === 'college'
                            ? `${partnership.studentCount.toLocaleString()} students`
                            : `${partnership.employeeCount.toLocaleString()} employees`}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{partnership.contactPerson}</p>
                          <p className="text-gray-500">{partnership.contactEmail}</p>
                          <p className="text-gray-500">{partnership.contactPhone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="text-gray-600">Start: {partnership.mouSignedDate}</p>
                          <p className="text-gray-600">End: {partnership.mouExpiryDate}</p>
                          <p className="text-xs text-gray-500 mt-1">{partnership.documents.length} documents</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {partnership.status === 'active' ? (
                          <div className="text-sm">
                            <p className="font-semibold text-emerald-600">{partnership.activeUsers.toLocaleString()} users</p>
                            <p className="text-gray-600">{partnership.totalTransactions.toLocaleString()} txns</p>
                            <p className="text-gray-600">₹{(partnership.totalRevenue / 100000).toFixed(1)}L revenue</p>
                            {partnership.ambassadorCount > 0 && (
                              <p className="text-purple-600 font-medium">{partnership.ambassadorCount} ambassadors</p>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">Not active yet</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {partnership.type === 'college' && partnership.benefits.studentDiscount > 0 && (
                            <div className="flex items-center gap-1 text-xs">
                              <Award className="w-3 h-3 text-blue-600" />
                              <span className="text-blue-700">{partnership.benefits.studentDiscount}% discount</span>
                            </div>
                          )}
                          {partnership.type === 'corporate' && partnership.benefits.employeeDiscount > 0 && (
                            <div className="flex items-center gap-1 text-xs">
                              <Award className="w-3 h-3 text-purple-600" />
                              <span className="text-purple-700">{partnership.benefits.employeeDiscount}% discount</span>
                            </div>
                          )}
                          {partnership.benefits.exclusiveOffers && (
                            <div className="text-xs text-green-600">✓ Exclusive offers</div>
                          )}
                          {partnership.benefits.ambassadorProgram && (
                            <div className="text-xs text-purple-600">✓ Ambassador program</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.text}`}>
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <FileText className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Partnership Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-900">Add New Partnership</h2>
              <p className="text-sm text-gray-600 mt-1">Create College MoU or Corporate partnership</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Partnership Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Partnership Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setNewPartnership({ ...newPartnership, type: 'college' })}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      newPartnership.type === 'college'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <GraduationCap className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold text-gray-900">College Partnership</p>
                    <p className="text-xs text-gray-500 mt-1">Student discounts & campus programs</p>
                  </button>
                  <button
                    onClick={() => setNewPartnership({ ...newPartnership, type: 'corporate' })}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      newPartnership.type === 'corporate'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Building2 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="font-semibold text-gray-900">Corporate Partnership</p>
                    <p className="text-xs text-gray-500 mt-1">Employee benefits & bulk orders</p>
                  </button>
                </div>
              </div>

              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {newPartnership.type === 'college' ? 'College Name' : 'Company Name'}
                    </label>
                    <input
                      type="text"
                      value={newPartnership.name}
                      onChange={(e) => setNewPartnership({ ...newPartnership, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Logo Emoji</label>
                    <input
                      type="text"
                      value={newPartnership.logo}
                      onChange={(e) => setNewPartnership({ ...newPartnership, logo: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., 🎓 or 🏢"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      value={newPartnership.category}
                      onChange={(e) => setNewPartnership({ ...newPartnership, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder={newPartnership.type === 'college' ? 'e.g., Engineering' : 'e.g., IT Services'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {newPartnership.type === 'college' ? 'Student Count' : 'Employee Count'}
                    </label>
                    <input
                      type="number"
                      value={newPartnership.type === 'college' ? newPartnership.studentCount : newPartnership.employeeCount}
                      onChange={(e) => setNewPartnership({
                        ...newPartnership,
                        [newPartnership.type === 'college' ? 'studentCount' : 'employeeCount']: parseInt(e.target.value)
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Total count"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={newPartnership.contactPerson}
                      onChange={(e) => setNewPartnership({ ...newPartnership, contactPerson: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={newPartnership.contactEmail}
                      onChange={(e) => setNewPartnership({ ...newPartnership, contactEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={newPartnership.contactPhone}
                      onChange={(e) => setNewPartnership({ ...newPartnership, contactPhone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits & MoU */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Discount Percentage</label>
                    <input
                      type="number"
                      value={newPartnership.discount}
                      onChange={(e) => setNewPartnership({ ...newPartnership, discount: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="0"
                      max="50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">MoU Duration (months)</label>
                    <input
                      type="number"
                      value={newPartnership.mouDuration}
                      onChange={(e) => setNewPartnership({ ...newPartnership, mouDuration: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="12"
                      max="60"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newPartnership.exclusiveOffers}
                      onChange={(e) => setNewPartnership({ ...newPartnership, exclusiveOffers: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Exclusive Offers Access</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newPartnership.events}
                      onChange={(e) => setNewPartnership({ ...newPartnership, events: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      {newPartnership.type === 'college' ? 'Campus Events' : 'Corporate Events'}
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newPartnership.ambassadorProgram}
                      onChange={(e) => setNewPartnership({ ...newPartnership, ambassadorProgram: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Ambassador Program</span>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea
                  value={newPartnership.notes}
                  onChange={(e) => setNewPartnership({ ...newPartnership, notes: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Additional notes or special conditions..."
                ></textarea>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePartnership}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Create Partnership
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
