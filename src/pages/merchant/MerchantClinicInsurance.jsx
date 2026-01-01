import React, { useState } from 'react';
import {
  ArrowLeft, Shield, CreditCard, FileText, CheckCircle, XCircle,
  AlertTriangle, Clock, Search, Filter, Download, Upload, Users,
  Building2, Phone, Mail, Calendar, ChevronRight, Edit2, Plus,
  RefreshCw, Eye, History, BarChart3, TrendingUp, IndianRupee,
  Stethoscope, Pill, ClipboardList, Activity, Heart, UserCheck
} from 'lucide-react';

const MerchantClinicInsurance = () => {
  const [activeTab, setActiveTab] = useState('claims');
  const [searchQuery, setSearchQuery] = useState('');
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // ==========================================
  // CLINIC INSURANCE BILLING & CLAIMS
  // Insurance marking, TPA integration, claim tracking
  // ==========================================

  // Insurance Summary
  const [insuranceSummary, setInsuranceSummary] = useState({
    totalClaims: 156,
    pendingClaims: 23,
    approvedClaims: 118,
    rejectedClaims: 15,
    totalClaimValue: 485000,
    pendingValue: 125000,
    approvedValue: 320000,
    rejectedValue: 40000,
    avgProcessingDays: 12
  });

  // Supported Insurance Providers
  const [insuranceProviders, setInsuranceProviders] = useState([
    { id: 1, name: 'Star Health', logo: '⭐', active: true, panelStatus: 'empanelled', tpaCode: 'STAR001' },
    { id: 2, name: 'ICICI Lombard', logo: '🏛️', active: true, panelStatus: 'empanelled', tpaCode: 'ICICI001' },
    { id: 3, name: 'HDFC Ergo', logo: '🔵', active: true, panelStatus: 'empanelled', tpaCode: 'HDFC001' },
    { id: 4, name: 'New India Assurance', logo: '🇮🇳', active: true, panelStatus: 'empanelled', tpaCode: 'NIA001' },
    { id: 5, name: 'Bajaj Allianz', logo: '🔶', active: false, panelStatus: 'pending', tpaCode: null },
    { id: 6, name: 'Max Bupa', logo: '💙', active: true, panelStatus: 'empanelled', tpaCode: 'MAX001' }
  ]);

  // Patient Insurance Records
  const [patientInsurance, setPatientInsurance] = useState([
    {
      id: 1,
      patient: {
        name: 'Rajesh Kumar',
        age: 45,
        phone: '9876543210',
        patientId: 'PAT001'
      },
      insurance: {
        provider: 'Star Health',
        policyNumber: 'SH2024001234',
        cardNumber: 'CARD789456',
        validTill: '2024-12-31',
        sumInsured: 500000,
        balanceSum: 450000,
        copayPercent: 10,
        roomCategory: 'Single AC'
      },
      currentClaim: {
        claimId: 'CLM001',
        status: 'approved',
        claimAmount: 15000,
        approvedAmount: 13500,
        treatment: 'OPD Consultation + Tests',
        date: '2024-01-10',
        documents: ['prescription', 'test_reports', 'bills']
      }
    },
    {
      id: 2,
      patient: {
        name: 'Sunita Devi',
        age: 32,
        phone: '9876543211',
        patientId: 'PAT002'
      },
      insurance: {
        provider: 'ICICI Lombard',
        policyNumber: 'IL2024005678',
        cardNumber: 'CARD123789',
        validTill: '2024-08-15',
        sumInsured: 300000,
        balanceSum: 280000,
        copayPercent: 20,
        roomCategory: 'Twin Sharing'
      },
      currentClaim: {
        claimId: 'CLM002',
        status: 'pending',
        claimAmount: 8500,
        approvedAmount: null,
        treatment: 'Gynec Consultation',
        date: '2024-01-12',
        documents: ['prescription']
      }
    },
    {
      id: 3,
      patient: {
        name: 'Amit Singh',
        age: 28,
        phone: '9876543212',
        patientId: 'PAT003'
      },
      insurance: {
        provider: 'HDFC Ergo',
        policyNumber: 'HE2024009012',
        cardNumber: 'CARD456123',
        validTill: '2025-03-20',
        sumInsured: 1000000,
        balanceSum: 1000000,
        copayPercent: 0,
        roomCategory: 'Any'
      },
      currentClaim: null
    },
    {
      id: 4,
      patient: {
        name: 'Kavita Sharma',
        age: 55,
        phone: '9876543213',
        patientId: 'PAT004'
      },
      insurance: {
        provider: 'Star Health',
        policyNumber: 'SH2024003456',
        cardNumber: 'CARD321654',
        validTill: '2024-06-30',
        sumInsured: 200000,
        balanceSum: 45000,
        copayPercent: 25,
        roomCategory: 'General Ward'
      },
      currentClaim: {
        claimId: 'CLM003',
        status: 'rejected',
        claimAmount: 12000,
        approvedAmount: 0,
        treatment: 'Pre-existing condition treatment',
        date: '2024-01-08',
        documents: ['prescription', 'test_reports'],
        rejectionReason: 'Pre-existing condition - waiting period not completed'
      }
    }
  ]);

  // Claim History
  const [claimHistory, setClaimHistory] = useState([
    { id: 'CLM001', patient: 'Rajesh Kumar', provider: 'Star Health', amount: 15000, approved: 13500, status: 'approved', date: '2024-01-10' },
    { id: 'CLM002', patient: 'Sunita Devi', provider: 'ICICI Lombard', amount: 8500, approved: null, status: 'pending', date: '2024-01-12' },
    { id: 'CLM003', patient: 'Kavita Sharma', provider: 'Star Health', amount: 12000, approved: 0, status: 'rejected', date: '2024-01-08' },
    { id: 'CLM004', patient: 'Mohan Patel', provider: 'Max Bupa', amount: 25000, approved: 22500, status: 'approved', date: '2024-01-05' },
    { id: 'CLM005', patient: 'Geeta Verma', provider: 'HDFC Ergo', amount: 18000, approved: 18000, status: 'approved', date: '2024-01-03' }
  ]);

  // Pre-auth Requirements
  const preAuthRequirements = [
    'Patient ID proof',
    'Insurance card (front & back)',
    'Prescription from consulting doctor',
    'Diagnostic reports (if any)',
    'Previous treatment records',
    'Filled pre-auth form'
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return 'green';
      case 'pending': return 'yellow';
      case 'rejected': return 'red';
      case 'processing': return 'blue';
      default: return 'gray';
    }
  };

  const filteredPatients = patientInsurance.filter(p => {
    if (searchQuery && !p.patient.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.patient.phone.includes(searchQuery)) return false;
    return true;
  });

  const renderClaimsTab = () => (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
          <p className="text-sm text-white/80">Total Claims</p>
          <p className="text-2xl font-bold">{insuranceSummary.totalClaims}</p>
          <p className="text-xs text-white/70">₹{(insuranceSummary.totalClaimValue/1000).toFixed(0)}K value</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-4 text-white">
          <p className="text-sm text-white/80">Pending</p>
          <p className="text-2xl font-bold">{insuranceSummary.pendingClaims}</p>
          <p className="text-xs text-white/70">₹{(insuranceSummary.pendingValue/1000).toFixed(0)}K pending</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <CheckCircle className="mx-auto text-green-600 mb-1" size={20} />
          <p className="text-lg font-bold text-green-700">{insuranceSummary.approvedClaims}</p>
          <p className="text-xs text-green-600">Approved</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
          <XCircle className="mx-auto text-red-600 mb-1" size={20} />
          <p className="text-lg font-bold text-red-700">{insuranceSummary.rejectedClaims}</p>
          <p className="text-xs text-red-600">Rejected</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
          <Clock className="mx-auto text-blue-600 mb-1" size={20} />
          <p className="text-lg font-bold text-blue-700">{insuranceSummary.avgProcessingDays}</p>
          <p className="text-xs text-blue-600">Avg Days</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search patient by name or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
        />
      </div>

      {/* Claim History */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
          <h3 className="font-bold">Recent Claims</h3>
          <button className="text-sm text-blue-600 font-medium">View All</button>
        </div>
        <div className="divide-y">
          {claimHistory.map(claim => (
            <div key={claim.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold">{claim.patient}</p>
                  <p className="text-sm text-gray-500">{claim.id} • {claim.provider}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  claim.status === 'approved' ? 'bg-green-100 text-green-700' :
                  claim.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {claim.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-500">Claimed: </span>
                  <span className="font-medium">₹{claim.amount.toLocaleString()}</span>
                </div>
                {claim.approved !== null && (
                  <div className="text-sm">
                    <span className="text-gray-500">Approved: </span>
                    <span className={`font-medium ${claim.approved > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ₹{claim.approved.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPatientsTab = () => (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search insured patients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
        />
      </div>

      {/* Patient Cards */}
      <div className="space-y-3">
        {filteredPatients.map(record => (
          <div key={record.id} className="bg-white rounded-xl border overflow-hidden">
            {/* Patient Header */}
            <div className="p-4 bg-blue-50 border-b border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserCheck className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold">{record.patient.name}</p>
                    <p className="text-xs text-gray-500">{record.patient.patientId} • Age: {record.patient.age}</p>
                  </div>
                </div>
                <Shield className="text-blue-600" size={24} />
              </div>
            </div>

            {/* Insurance Details */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{insuranceProviders.find(p => p.name === record.insurance.provider)?.logo}</span>
                <span className="font-medium">{record.insurance.provider}</span>
                <span className="text-xs text-gray-500">#{record.insurance.policyNumber}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Sum Insured</p>
                  <p className="font-bold">₹{(record.insurance.sumInsured/100000).toFixed(1)}L</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Balance</p>
                  <p className="font-bold text-green-600">₹{(record.insurance.balanceSum/100000).toFixed(1)}L</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Co-pay</p>
                  <p className="font-bold">{record.insurance.copayPercent}%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Valid Till</p>
                  <p className="font-bold">{record.insurance.validTill}</p>
                </div>
              </div>

              {/* Current Claim Status */}
              {record.currentClaim && (
                <div className={`rounded-lg p-3 mb-3 ${
                  record.currentClaim.status === 'approved' ? 'bg-green-50 border border-green-200' :
                  record.currentClaim.status === 'pending' ? 'bg-yellow-50 border border-yellow-200' :
                  'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Current Claim: {record.currentClaim.claimId}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      record.currentClaim.status === 'approved' ? 'bg-green-100 text-green-700' :
                      record.currentClaim.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {record.currentClaim.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{record.currentClaim.treatment}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Claimed: ₹{record.currentClaim.claimAmount.toLocaleString()}</span>
                    {record.currentClaim.approvedAmount !== null && (
                      <span className={record.currentClaim.approvedAmount > 0 ? 'text-green-600' : 'text-red-600'}>
                        Approved: ₹{record.currentClaim.approvedAmount.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {record.currentClaim.rejectionReason && (
                    <p className="text-xs text-red-600 mt-2">Reason: {record.currentClaim.rejectionReason}</p>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => { setSelectedPatient(record); setShowClaimModal(true); }}
                  className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Plus size={16} />
                  New Claim
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium flex items-center gap-1">
                  <Eye size={14} />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProvidersTab = () => (
    <div className="space-y-4">
      {/* Empanelment Status */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white">
        <h3 className="font-bold mb-2">Empanelment Status</h3>
        <p className="text-sm text-white/80">
          Your clinic is empanelled with {insuranceProviders.filter(p => p.panelStatus === 'empanelled').length} insurance providers
        </p>
      </div>

      {/* Provider List */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">Insurance Providers</h3>
        </div>
        <div className="divide-y">
          {insuranceProviders.map(provider => (
            <div key={provider.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{provider.logo}</span>
                <div>
                  <p className="font-medium">{provider.name}</p>
                  <p className="text-xs text-gray-500">
                    {provider.tpaCode ? `TPA: ${provider.tpaCode}` : 'No TPA code'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  provider.panelStatus === 'empanelled' ? 'bg-green-100 text-green-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {provider.panelStatus}
                </span>
                <div className={`w-3 h-3 rounded-full ${provider.active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply for Empanelment */}
      <button className="w-full p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center gap-2 text-blue-600">
        <Plus size={18} />
        <span className="font-medium">Apply for New Empanelment</span>
      </button>
    </div>
  );

  const renderPreAuthTab = () => (
    <div className="space-y-4">
      {/* Pre-Auth Requirements */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-3">Pre-Authorization Checklist</h3>
        <div className="space-y-2">
          {preAuthRequirements.map((req, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                {idx + 1}
              </div>
              <span className="text-sm">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="p-4 bg-blue-600 text-white rounded-xl flex flex-col items-center gap-2">
          <Upload size={24} />
          <span className="text-sm font-medium">Upload Documents</span>
        </button>
        <button className="p-4 bg-purple-600 text-white rounded-xl flex flex-col items-center gap-2">
          <FileText size={24} />
          <span className="text-sm font-medium">Pre-Auth Form</span>
        </button>
      </div>

      {/* Processing Timeline */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-3">Typical Processing Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          {[
            { step: 'Submit Pre-Auth', time: 'Day 1', status: 'done' },
            { step: 'Document Verification', time: 'Day 1-2', status: 'done' },
            { step: 'Medical Review', time: 'Day 2-5', status: 'current' },
            { step: 'Approval/Query', time: 'Day 5-7', status: 'pending' },
            { step: 'Final Authorization', time: 'Day 7-10', status: 'pending' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 mb-4 relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                item.status === 'done' ? 'bg-green-500' :
                item.status === 'current' ? 'bg-blue-500 animate-pulse' :
                'bg-gray-300'
              }`}>
                {item.status === 'done' ? (
                  <CheckCircle className="text-white" size={16} />
                ) : (
                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.step}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'claims', label: 'Claims', icon: <FileText size={16} /> },
    { id: 'patients', label: 'Patients', icon: <Users size={16} /> },
    { id: 'providers', label: 'Providers', icon: <Building2 size={16} /> },
    { id: 'preauth', label: 'Pre-Auth', icon: <ClipboardList size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/20 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-bold text-lg">Insurance Billing</h1>
            <p className="text-xs text-white/80">Claims, TPA & Pre-Authorization</p>
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
                  ? 'text-blue-600 border-blue-600 bg-blue-50/50'
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
        {activeTab === 'claims' && renderClaimsTab()}
        {activeTab === 'patients' && renderPatientsTab()}
        {activeTab === 'providers' && renderProvidersTab()}
        {activeTab === 'preauth' && renderPreAuthTab()}
      </div>

      {/* New Claim Modal */}
      {showClaimModal && selectedPatient && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-bold">New Insurance Claim</h3>
              <p className="text-sm text-gray-500">{selectedPatient.patient.name} - {selectedPatient.insurance.provider}</p>
            </div>

            <div className="p-4 space-y-4">
              {/* Claim Amount */}
              <div>
                <label className="block text-sm font-medium mb-2">Claim Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full p-3 border rounded-xl text-lg"
                />
              </div>

              {/* Treatment Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Treatment Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {['OPD', 'IPD', 'Day Care', 'Diagnostic'].map(type => (
                    <button key={type} className="p-3 border rounded-lg text-sm hover:bg-blue-50 hover:border-blue-500">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Documents */}
              <div>
                <label className="block text-sm font-medium mb-2">Required Documents</label>
                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 flex flex-col items-center gap-2">
                  <Upload size={24} />
                  <span>Upload Documents</span>
                </button>
              </div>

              {/* Co-pay Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-700">
                  <AlertTriangle size={14} className="inline mr-1" />
                  Patient co-pay: {selectedPatient.insurance.copayPercent}% of approved amount
                </p>
              </div>

              {/* Submit */}
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">
                Submit Claim
              </button>
            </div>

            <div className="p-4 border-t">
              <button
                onClick={() => { setShowClaimModal(false); setSelectedPatient(null); }}
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

export default MerchantClinicInsurance;
