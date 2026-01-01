import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InsuranceCoverage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('policies');
  const [showCheckCoverage, setShowCheckCoverage] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  // Mock insurance data
  const [insuranceData] = useState({
    policies: [
      {
        id: 'POL-001',
        provider: 'Star Health',
        providerLogo: '⭐',
        policyName: 'Family Health Optima',
        policyNumber: 'SH/2024/123456',
        type: 'health',
        sumInsured: 1000000,
        premium: 18500,
        premiumFrequency: 'yearly',
        startDate: '2024-01-15',
        endDate: '2025-01-14',
        status: 'active',
        members: [
          { name: 'Self', relation: 'self', age: 32 },
          { name: 'Spouse', relation: 'spouse', age: 30 },
          { name: 'Child', relation: 'child', age: 5 }
        ],
        coverage: {
          hospitalization: { limit: 1000000, used: 0 },
          daycare: { limit: 'Full Cover', used: 0 },
          preTreatment: { limit: 30, unit: 'days' },
          postTreatment: { limit: 60, unit: 'days' },
          ambulance: { limit: 2500, used: 0 },
          healthCheckup: { limit: 5000, used: 2500 }
        },
        features: ['Cashless at 10000+ hospitals', 'No room rent capping', 'Pre & Post hospitalization', 'Day care procedures'],
        networkHospitals: 10500,
        tpaName: 'Medi Assist',
        tpaContact: '1800-xxx-xxxx'
      },
      {
        id: 'POL-002',
        provider: 'ICICI Lombard',
        providerLogo: '🏛️',
        policyName: 'Complete Health Insurance',
        policyNumber: 'IL/2024/789012',
        type: 'health',
        sumInsured: 500000,
        premium: 12000,
        premiumFrequency: 'yearly',
        startDate: '2024-03-01',
        endDate: '2025-02-28',
        status: 'active',
        members: [
          { name: 'Father', relation: 'father', age: 58 }
        ],
        coverage: {
          hospitalization: { limit: 500000, used: 150000 },
          daycare: { limit: 'Sub-limit', used: 0 },
          preTreatment: { limit: 30, unit: 'days' },
          postTreatment: { limit: 60, unit: 'days' },
          ambulance: { limit: 2000, used: 2000 },
          healthCheckup: { limit: 'Not covered', used: 0 }
        },
        features: ['Cashless treatment', 'Pre-existing disease cover after 3 years', 'AYUSH treatment'],
        networkHospitals: 6500,
        tpaName: 'Health India TPA',
        tpaContact: '1800-xxx-yyyy'
      }
    ],
    claims: [
      {
        id: 'CLM-001',
        policyId: 'POL-002',
        claimNumber: 'CL/2024/456789',
        hospital: 'City Care Hospital',
        admissionDate: '2024-11-15',
        dischargeDate: '2024-11-18',
        diagnosis: 'Knee Surgery',
        claimAmount: 185000,
        approvedAmount: 150000,
        status: 'settled',
        settledDate: '2024-12-01',
        type: 'cashless',
        documents: ['Claim form', 'Discharge summary', 'Bills']
      },
      {
        id: 'CLM-002',
        policyId: 'POL-001',
        claimNumber: 'CL/2024/567890',
        hospital: 'Apollo Hospital',
        treatmentDate: '2024-12-10',
        diagnosis: 'Annual Health Checkup',
        claimAmount: 2500,
        approvedAmount: 2500,
        status: 'pending',
        type: 'reimbursement',
        documents: ['Bills', 'Reports']
      }
    ],
    networkHospitals: [
      { id: 1, name: 'Apollo Hospital', address: 'Navi Mumbai', distance: '2.5 km', specialties: ['Cardiology', 'Orthopedics'] },
      { id: 2, name: 'Fortis Hospital', address: 'Vashi', distance: '4.2 km', specialties: ['Neurology', 'Oncology'] },
      { id: 3, name: 'City Care Hospital', address: 'CBD Belapur', distance: '5.1 km', specialties: ['General', 'Pediatrics'] },
      { id: 4, name: 'Kokilaben Hospital', address: 'Andheri', distance: '12.3 km', specialties: ['Multi-specialty'] }
    ]
  });

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      expired: 'bg-red-100 text-red-700',
      pending: 'bg-yellow-100 text-yellow-700',
      settled: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const calculateDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    return Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Insurance</h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <div className="text-sm text-white/80 mb-1">Total Coverage</div>
            <div className="text-2xl font-bold">₹15L</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <div className="text-sm text-white/80 mb-1">Active Policies</div>
            <div className="text-2xl font-bold">{insuranceData.policies.filter(p => p.status === 'active').length}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('policies')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'policies' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-600'
          }`}
        >
          My Policies
        </button>
        <button
          onClick={() => setActiveTab('claims')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'claims' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-600'
          }`}
        >
          Claims
        </button>
        <button
          onClick={() => setActiveTab('hospitals')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'hospitals' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-600'
          }`}
        >
          Hospitals
        </button>
      </div>

      {/* Check Coverage Button */}
      <div className="p-4">
        <button
          onClick={() => setShowCheckCoverage(true)}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
        >
          <span className="text-xl">🏥</span>
          Check Treatment Coverage
        </button>
      </div>

      <div className="px-4">
        {/* Policies Tab */}
        {activeTab === 'policies' && (
          <div className="space-y-4">
            {insuranceData.policies.map(policy => {
              const daysRemaining = calculateDaysRemaining(policy.endDate);
              const usedPercentage = (policy.coverage.hospitalization.used / policy.coverage.hospitalization.limit) * 100;

              return (
                <div
                  key={policy.id}
                  onClick={() => setSelectedPolicy(policy)}
                  className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                        {policy.providerLogo}
                      </div>
                      <div>
                        <p className="font-medium">{policy.policyName}</p>
                        <p className="text-sm text-gray-500">{policy.provider}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(policy.status)}`}>
                      {policy.status === 'active' ? `${daysRemaining} days left` : policy.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-gray-500">Sum Insured</p>
                      <p className="font-semibold">₹{(policy.sumInsured / 100000).toFixed(0)} Lakhs</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Members</p>
                      <p className="font-semibold">{policy.members.length}</p>
                    </div>
                  </div>

                  {/* Usage Bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Coverage Used</span>
                      <span className="font-medium">₹{policy.coverage.hospitalization.used.toLocaleString()} / ₹{(policy.sumInsured / 100000).toFixed(0)}L</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${usedPercentage > 80 ? 'bg-red-500' : usedPercentage > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${usedPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Claims Tab */}
        {activeTab === 'claims' && (
          <div className="space-y-4">
            {insuranceData.claims.map(claim => (
              <div key={claim.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium">{claim.diagnosis}</p>
                    <p className="text-sm text-gray-500">{claim.hospital}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(claim.status)}`}>
                    {claim.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <p className="text-gray-500">Claim Amount</p>
                    <p className="font-semibold">₹{claim.claimAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">{claim.status === 'settled' ? 'Approved' : 'Expected'}</p>
                    <p className="font-semibold text-green-600">₹{claim.approvedAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Type</p>
                    <p className="font-medium capitalize">{claim.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Claim #</p>
                    <p className="font-medium text-xs">{claim.claimNumber}</p>
                  </div>
                </div>

                {claim.status === 'pending' && (
                  <div className="flex gap-2">
                    <button className="flex-1 bg-emerald-100 text-emerald-700 py-2 rounded-lg text-sm font-medium">
                      Track Status
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                      Upload Documents
                    </button>
                  </div>
                )}
              </div>
            ))}

            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
              + File New Claim
            </button>
          </div>
        )}

        {/* Hospitals Tab */}
        {activeTab === 'hospitals' && (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search hospitals..."
                className="w-full border rounded-xl p-3 pl-10"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>

            {insuranceData.networkHospitals.map(hospital => (
              <div key={hospital.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{hospital.name}</p>
                    <p className="text-sm text-gray-500">{hospital.address}</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Cashless
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {hospital.specialties.map((spec, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📍 {hospital.distance}</span>
                  <button className="text-emerald-600 text-sm font-medium">
                    Get Directions →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Check Coverage Modal */}
      {showCheckCoverage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[80vh] rounded-t-2xl overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="font-bold">Check Coverage</h2>
              <button onClick={() => setShowCheckCoverage(false)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Policy</label>
                <select className="w-full border rounded-xl p-3">
                  {insuranceData.policies.map(p => (
                    <option key={p.id} value={p.id}>{p.policyName} - {p.provider}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Treatment/Procedure</label>
                <input
                  type="text"
                  className="w-full border rounded-xl p-3"
                  placeholder="e.g., Knee replacement, Cataract surgery"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Estimated Cost</label>
                <input
                  type="number"
                  className="w-full border rounded-xl p-3"
                  placeholder="Enter estimated amount"
                />
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium">
                Check Coverage
              </button>

              {/* Sample Result */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold text-green-800">Covered!</span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  This treatment is covered under your policy with the following details:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Limit</span>
                    <span className="font-medium">₹10,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Already Used</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room Rent Limit</span>
                    <span className="font-medium">No Capping</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Co-payment</span>
                    <span className="font-medium">Nil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Policy Detail Modal */}
      {selectedPolicy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Policy Details</h2>
              <button onClick={() => setSelectedPolicy(null)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Policy Header */}
              <div className="bg-emerald-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
                    {selectedPolicy.providerLogo}
                  </div>
                  <div>
                    <p className="font-semibold">{selectedPolicy.policyName}</p>
                    <p className="text-sm text-gray-600">{selectedPolicy.provider}</p>
                    <p className="text-xs text-gray-500">Policy #: {selectedPolicy.policyNumber}</p>
                  </div>
                </div>
              </div>

              {/* Members */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-3">Covered Members</h3>
                <div className="space-y-2">
                  {selectedPolicy.members.map((member, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">👤</span>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-gray-500 capitalize">{member.relation}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{member.age} yrs</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage Details */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-3">Coverage Details</h3>
                <div className="space-y-3">
                  {Object.entries(selectedPolicy.coverage).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium">
                        {typeof value.limit === 'number' ? `₹${value.limit.toLocaleString()}` : value.limit}
                        {value.unit && ` ${value.unit}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-3">Features</h3>
                <div className="space-y-2">
                  {selectedPolicy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TPA Contact */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-blue-800 mb-2">24x7 TPA Support</h3>
                <p className="text-sm text-blue-700">{selectedPolicy.tpaName}</p>
                <p className="text-sm font-medium text-blue-800">{selectedPolicy.tpaContact}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-medium">
                  Download E-Card
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium">
                  View Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceCoverage;
