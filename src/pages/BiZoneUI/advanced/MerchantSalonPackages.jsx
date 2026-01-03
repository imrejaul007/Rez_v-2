import React, { useState } from 'react';
import {
  ArrowLeft, Package, Users, Calendar, Clock, CheckCircle, AlertTriangle,
  Gift, Percent, TrendingUp, BarChart3, Star, Award, RefreshCw,
  ChevronRight, Edit2, Plus, Minus, History, CreditCard, Sparkles,
  Timer, User, Phone, Mail, Search, Filter, Download, Bell
} from 'lucide-react';

const MerchantSalonPackages = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConsumeModal, setShowConsumeModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // ==========================================
  // SALON PACKAGE CONSUMPTION TRACKER
  // Track prepaid service packages & consumption
  // ==========================================

  // Package Summary
  const [packageSummary, setPackageSummary] = useState({
    activePackages: 156,
    totalValue: 485000,
    unusedValue: 125000,
    expiringThisMonth: 12,
    revenueRecognized: 360000,
    avgConsumptionRate: 78 // percentage
  });

  // Customer Packages
  const [customerPackages, setCustomerPackages] = useState([
    {
      id: 1,
      customer: {
        name: 'Priya Sharma',
        phone: '9876543210',
        email: 'priya@email.com',
        since: '2023-06-15'
      },
      package: {
        name: 'Premium Hair Care',
        totalSessions: 12,
        usedSessions: 8,
        remainingSessions: 4,
        totalValue: 12000,
        usedValue: 8000,
        remainingValue: 4000,
        purchaseDate: '2023-12-01',
        expiryDate: '2024-06-01',
        status: 'active'
      },
      services: [
        { name: 'Haircut & Style', included: 4, used: 3 },
        { name: 'Hair Spa', included: 4, used: 3 },
        { name: 'Hair Treatment', included: 4, used: 2 }
      ],
      lastVisit: '2024-01-10',
      nextAppointment: '2024-01-20'
    },
    {
      id: 2,
      customer: {
        name: 'Anita Patel',
        phone: '9876543211',
        email: 'anita@email.com',
        since: '2023-08-20'
      },
      package: {
        name: 'Bridal Package',
        totalSessions: 8,
        usedSessions: 2,
        remainingSessions: 6,
        totalValue: 25000,
        usedValue: 6250,
        remainingValue: 18750,
        purchaseDate: '2024-01-05',
        expiryDate: '2024-04-05',
        status: 'active'
      },
      services: [
        { name: 'Full Body Spa', included: 2, used: 1 },
        { name: 'Facial Treatment', included: 2, used: 1 },
        { name: 'Makeup Trial', included: 2, used: 0 },
        { name: 'Mehendi', included: 2, used: 0 }
      ],
      lastVisit: '2024-01-12',
      nextAppointment: null
    },
    {
      id: 3,
      customer: {
        name: 'Kavita Singh',
        phone: '9876543212',
        email: 'kavita@email.com',
        since: '2022-11-10'
      },
      package: {
        name: 'Annual Wellness',
        totalSessions: 24,
        usedSessions: 22,
        remainingSessions: 2,
        totalValue: 36000,
        usedValue: 33000,
        remainingValue: 3000,
        purchaseDate: '2023-02-15',
        expiryDate: '2024-02-15',
        status: 'expiring'
      },
      services: [
        { name: 'Monthly Facial', included: 12, used: 11 },
        { name: 'Bi-weekly Cleanup', included: 12, used: 11 }
      ],
      lastVisit: '2024-01-08',
      nextAppointment: '2024-01-22'
    },
    {
      id: 4,
      customer: {
        name: 'Sunita Verma',
        phone: '9876543213',
        email: 'sunita@email.com',
        since: '2023-03-05'
      },
      package: {
        name: 'Glow Package',
        totalSessions: 6,
        usedSessions: 6,
        remainingSessions: 0,
        totalValue: 8000,
        usedValue: 8000,
        remainingValue: 0,
        purchaseDate: '2023-09-01',
        expiryDate: '2024-03-01',
        status: 'completed'
      },
      services: [
        { name: 'Gold Facial', included: 3, used: 3 },
        { name: 'Body Polish', included: 3, used: 3 }
      ],
      lastVisit: '2024-01-05',
      nextAppointment: null
    }
  ]);

  // Package Templates
  const [packageTemplates, setPackageTemplates] = useState([
    {
      id: 1,
      name: 'Premium Hair Care',
      sessions: 12,
      validity: 6, // months
      price: 12000,
      savings: 2400,
      services: ['Haircut & Style', 'Hair Spa', 'Hair Treatment'],
      popular: true
    },
    {
      id: 2,
      name: 'Bridal Package',
      sessions: 8,
      validity: 3,
      price: 25000,
      savings: 5000,
      services: ['Full Body Spa', 'Facial Treatment', 'Makeup Trial', 'Mehendi'],
      popular: true
    },
    {
      id: 3,
      name: 'Annual Wellness',
      sessions: 24,
      validity: 12,
      price: 36000,
      savings: 8400,
      services: ['Monthly Facial', 'Bi-weekly Cleanup'],
      popular: false
    }
  ]);

  // Consumption History
  const [consumptionHistory, setConsumptionHistory] = useState([
    { id: 1, customer: 'Priya Sharma', service: 'Hair Spa', date: '2024-01-10', staff: 'Ritu', value: 1000 },
    { id: 2, customer: 'Anita Patel', service: 'Facial Treatment', date: '2024-01-12', staff: 'Meena', value: 3125 },
    { id: 3, customer: 'Kavita Singh', service: 'Monthly Facial', date: '2024-01-08', staff: 'Pooja', value: 1500 }
  ]);

  const handleConsumeService = (pkg, serviceIndex) => {
    // Update the package consumption
    setCustomerPackages(customerPackages.map(p => {
      if (p.id === pkg.id) {
        const updatedServices = [...p.services];
        if (updatedServices[serviceIndex].used < updatedServices[serviceIndex].included) {
          updatedServices[serviceIndex].used += 1;
        }
        const usedSessions = p.package.usedSessions + 1;
        return {
          ...p,
          package: {
            ...p.package,
            usedSessions,
            remainingSessions: p.package.totalSessions - usedSessions,
            usedValue: (usedSessions / p.package.totalSessions) * p.package.totalValue,
            remainingValue: ((p.package.totalSessions - usedSessions) / p.package.totalSessions) * p.package.totalValue
          },
          services: updatedServices,
          lastVisit: new Date().toISOString().split('T')[0]
        };
      }
      return p;
    }));
    setShowConsumeModal(false);
    setSelectedPackage(null);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'green';
      case 'expiring': return 'yellow';
      case 'completed': return 'blue';
      case 'expired': return 'red';
      default: return 'gray';
    }
  };

  const getDaysRemaining = (expiryDate) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredPackages = customerPackages.filter(pkg => {
    if (activeTab === 'expiring' && pkg.package.status !== 'expiring') return false;
    if (activeTab === 'completed' && pkg.package.status !== 'completed') return false;
    if (activeTab === 'active' && (pkg.package.status === 'completed' || pkg.package.status === 'expired')) return false;
    if (searchQuery && !pkg.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) && !pkg.customer.phone.includes(searchQuery)) return false;
    return true;
  });

  const renderPackagesList = () => (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
          <p className="text-sm text-white/80">Active Packages</p>
          <p className="text-2xl font-bold">{packageSummary.activePackages}</p>
          <p className="text-xs text-white/70">₹{(packageSummary.totalValue/1000).toFixed(0)}K value</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white">
          <p className="text-sm text-white/80">Unused Value</p>
          <p className="text-2xl font-bold">₹{(packageSummary.unusedValue/1000).toFixed(0)}K</p>
          <p className="text-xs text-white/70">{packageSummary.expiringThisMonth} expiring soon</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by name or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
        />
      </div>

      {/* Customer Packages */}
      <div className="space-y-3">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="bg-white rounded-xl border overflow-hidden">
            {/* Header */}
            <div className={`p-4 ${
              pkg.package.status === 'expiring' ? 'bg-yellow-50' :
              pkg.package.status === 'completed' ? 'bg-blue-50' : ''
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    pkg.package.status === 'expiring' ? 'bg-yellow-100' :
                    pkg.package.status === 'completed' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    <User size={18} className={
                      pkg.package.status === 'expiring' ? 'text-yellow-600' :
                      pkg.package.status === 'completed' ? 'text-blue-600' : 'text-purple-600'
                    } />
                  </div>
                  <div>
                    <p className="font-bold">{pkg.customer.name}</p>
                    <p className="text-xs text-gray-500">{pkg.customer.phone}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  pkg.package.status === 'active' ? 'bg-green-100 text-green-700' :
                  pkg.package.status === 'expiring' ? 'bg-yellow-100 text-yellow-700' :
                  pkg.package.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {pkg.package.status === 'expiring' ? `${getDaysRemaining(pkg.package.expiryDate)} days left` : pkg.package.status}
                </span>
              </div>

              <div className="bg-white/80 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-purple-700">{pkg.package.name}</span>
                  <span className="text-sm text-gray-500">Expires: {pkg.package.expiryDate}</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{pkg.package.usedSessions}/{pkg.package.totalSessions} sessions used</span>
                    <span>₹{pkg.package.remainingValue.toLocaleString()} remaining</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        pkg.package.status === 'completed' ? 'bg-blue-500' :
                        pkg.package.status === 'expiring' ? 'bg-yellow-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${(pkg.package.usedSessions / pkg.package.totalSessions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Breakdown */}
            <div className="p-4 border-t">
              <p className="text-xs text-gray-500 mb-2">Services Included:</p>
              <div className="space-y-2">
                {pkg.services.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                    <span className="text-sm">{service.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        service.used === service.included ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {service.used}/{service.included}
                      </span>
                      {service.used < service.included && (
                        <div className="flex">
                          {[...Array(service.included)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full mx-0.5 ${
                                i < service.used ? 'bg-purple-500' : 'bg-gray-300'
                              }`}
                            ></div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            {pkg.package.status !== 'completed' && pkg.package.status !== 'expired' && (
              <div className="p-4 border-t flex gap-2">
                <button
                  onClick={() => { setSelectedPackage(pkg); setShowConsumeModal(true); }}
                  className="flex-1 py-2 bg-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <Minus size={16} />
                  Consume Session
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg">
                  <Bell size={16} className="text-gray-600" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTemplatesTab = () => (
    <div className="space-y-4">
      {/* Add New Package */}
      <button className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white flex items-center justify-center gap-2">
        <Plus size={20} />
        <span className="font-bold">Create New Package</span>
      </button>

      {/* Package Templates */}
      <div className="space-y-3">
        {packageTemplates.map(template => (
          <div key={template.id} className="bg-white rounded-xl border p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{template.name}</h3>
                  {template.popular && (
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs">Popular</span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{template.sessions} sessions • {template.validity} months validity</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-purple-600">₹{template.price.toLocaleString()}</p>
                <p className="text-xs text-green-600">Save ₹{template.savings}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {template.services.map((service, idx) => (
                <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">
                  {service}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">
                Sell Package
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-4">
      {/* Stats */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white">
        <h3 className="font-bold mb-3">This Month's Consumption</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">45</p>
            <p className="text-xs text-white/70">Sessions</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹68K</p>
            <p className="text-xs text-white/70">Value</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">32</p>
            <p className="text-xs text-white/70">Customers</p>
          </div>
        </div>
      </div>

      {/* Recent Consumption */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">Recent Consumption</h3>
        </div>
        <div className="divide-y">
          {consumptionHistory.map(item => (
            <div key={item.id} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{item.customer}</p>
                <p className="text-sm text-gray-500">{item.service} • {item.staff}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">₹{item.value}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export */}
      <button className="w-full p-4 bg-gray-100 rounded-xl flex items-center justify-center gap-2">
        <Download size={18} />
        <span className="font-medium">Export Report</span>
      </button>
    </div>
  );

  const tabs = [
    { id: 'active', label: 'Active', icon: <Package size={16} /> },
    { id: 'expiring', label: 'Expiring', icon: <AlertTriangle size={16} /> },
    { id: 'templates', label: 'Templates', icon: <Gift size={16} /> },
    { id: 'history', label: 'History', icon: <History size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-4">
        <div className="flex items-center gap-3 mb-2">
          <button className="p-2 hover:bg-white/20 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-bold text-lg">Package Tracker</h1>
            <p className="text-xs text-white/80">Track prepaid service consumption</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b overflow-x-auto">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-purple-600 border-purple-600 bg-purple-50/50'
                  : 'text-gray-600 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {(activeTab === 'active' || activeTab === 'expiring') && renderPackagesList()}
        {activeTab === 'templates' && renderTemplatesTab()}
        {activeTab === 'history' && renderHistoryTab()}
      </div>

      {/* Consume Modal */}
      {showConsumeModal && selectedPackage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-bold">Consume Session</h3>
              <p className="text-sm text-gray-500">{selectedPackage.customer.name} - {selectedPackage.package.name}</p>
            </div>

            <div className="p-4 space-y-3">
              {selectedPackage.services.filter(s => s.used < s.included).map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => handleConsumeService(selectedPackage, idx)}
                  className="w-full p-4 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-gray-500">{service.used}/{service.included} used</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <Minus size={20} />
                  </div>
                </button>
              ))}

              {selectedPackage.services.every(s => s.used >= s.included) && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                  <CheckCircle className="mx-auto text-green-600 mb-2" size={32} />
                  <p className="font-medium text-green-800">All sessions consumed!</p>
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <button
                onClick={() => { setShowConsumeModal(false); setSelectedPackage(null); }}
                className="w-full py-3 bg-gray-100 rounded-xl font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantSalonPackages;
