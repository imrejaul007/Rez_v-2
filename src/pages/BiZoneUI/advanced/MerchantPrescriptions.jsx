import { useState } from 'react';
import { Search, Plus, FileText, User, Calendar, AlertTriangle, CheckCircle, XCircle, Clock, Download, Upload, Camera, Eye } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantPrescriptions() {
  const [activeTab, setActiveTab] = useState('prescriptions');
  const [searchQuery, setSearchQuery] = useState('');

  // Prescriptions
  const prescriptions = [
    {
      id: 'RX-001',
      patientName: 'Rahul Sharma',
      age: 45,
      gender: 'Male',
      phone: '+91 98765 43210',
      doctorName: 'Dr. Priya Patel',
      doctorRegNo: 'MCI-12345',
      hospital: 'Apollo Pharmacy',
      date: '2025-12-28',
      validTill: '2026-01-28',
      status: 'active',
      medicines: [
        { name: 'Paracetamol 500mg', dosage: '1-0-1', duration: '5 days', quantity: 10, batch: 'PCT5-2024-11', dispensed: 10 },
        { name: 'Amoxicillin 250mg', dosage: '1-1-1', duration: '7 days', quantity: 21, batch: 'AMX-2025-01', dispensed: 21 },
        { name: 'Cough Syrup', dosage: '2 tsp', duration: '5 days', quantity: 1, batch: 'CS-2025-12', dispensed: 1 }
      ],
      totalAmount: 450,
      diagnosis: 'Upper Respiratory Tract Infection',
      imageUrl: '/prescriptions/rx-001.jpg',
      verifiedBy: 'Pharmacist - Anjali Desai',
      insuranceClaim: false
    },
    {
      id: 'RX-002',
      patientName: 'Priya Verma',
      age: 32,
      gender: 'Female',
      phone: '+91 97654 32109',
      doctorName: 'Dr. Vikram Singh',
      doctorRegNo: 'MCI-67890',
      hospital: 'Fortis Hospital',
      date: '2025-12-27',
      validTill: '2026-01-27',
      status: 'active',
      medicines: [
        { name: 'Metformin 500mg', dosage: '1-0-1', duration: '30 days', quantity: 60, batch: 'MET-2024-12', dispensed: 60 },
        { name: 'Vitamin D3 Supplement', dosage: '0-0-1', duration: '30 days', quantity: 30, batch: 'VD3-2024-10', dispensed: 30 }
      ],
      totalAmount: 890,
      diagnosis: 'Type 2 Diabetes Management',
      imageUrl: '/prescriptions/rx-002.jpg',
      verifiedBy: 'Pharmacist - Rajesh Kumar',
      insuranceClaim: true,
      insuranceProvider: 'ICICI Lombard',
      claimAmount: 668
    },
    {
      id: 'RX-003',
      patientName: 'Sneha Patel',
      age: 28,
      gender: 'Female',
      phone: '+91 96543 21098',
      doctorName: 'Dr. Anjali Desai',
      doctorRegNo: 'MCI-34567',
      hospital: 'Max Hospital',
      date: '2025-12-26',
      validTill: '2026-01-26',
      status: 'partially_dispensed',
      medicines: [
        { name: 'Iron Supplement', dosage: '0-0-1', duration: '60 days', quantity: 60, batch: 'IRON-2024-11', dispensed: 30 },
        { name: 'Folic Acid', dosage: '1-0-0', duration: '60 days', quantity: 60, batch: 'FA-2024-12', dispensed: 30 }
      ],
      totalAmount: 340,
      diagnosis: 'Anemia',
      imageUrl: '/prescriptions/rx-003.jpg',
      verifiedBy: 'Pharmacist - Priya Sharma',
      insuranceClaim: false
    },
    {
      id: 'RX-004',
      patientName: 'Vikram Reddy',
      age: 55,
      gender: 'Male',
      phone: '+91 95432 10987',
      doctorName: 'Dr. Rahul Sharma',
      doctorRegNo: 'MCI-45678',
      hospital: 'Manipal Hospital',
      date: '2025-12-25',
      validTill: '2025-12-27',
      status: 'expired',
      medicines: [
        { name: 'Aspirin 75mg', dosage: '0-0-1', duration: '3 days', quantity: 3, batch: 'ASP-2024-12', dispensed: 3 },
        { name: 'Atorvastatin 10mg', dosage: '0-0-1', duration: '3 days', quantity: 3, batch: 'ATO-2025-01', dispensed: 3 }
      ],
      totalAmount: 120,
      diagnosis: 'Hypertension',
      imageUrl: '/prescriptions/rx-004.jpg',
      verifiedBy: 'Pharmacist - Sneha Reddy',
      insuranceClaim: false
    }
  ];

  // Controlled Drugs Log
  const controlledDrugsLog = [
    {
      id: 'CD-001',
      drugName: 'Morphine Sulfate 10mg',
      prescriptionId: 'RX-005',
      patientName: 'Anjali Mehta',
      doctorName: 'Dr. Suresh Kumar',
      quantity: 10,
      batchNumber: 'MOR-2024-11',
      dispensedDate: '2025-12-27',
      dispensedBy: 'Pharmacist - Rajesh Kumar',
      license: 'CDL-12345',
      witnessed: true
    },
    {
      id: 'CD-002',
      drugName: 'Codeine Phosphate 30mg',
      prescriptionId: 'RX-006',
      patientName: 'Karan Singh',
      doctorName: 'Dr. Meera Patel',
      quantity: 20,
      batchNumber: 'COD-2024-12',
      dispensedDate: '2025-12-26',
      dispensedBy: 'Pharmacist - Anjali Desai',
      license: 'CDL-12345',
      witnessed: true
    }
  ];

  // Analytics
  const analytics = {
    totalPrescriptions: 234,
    activePrescriptions: 178,
    avgValue: 567,
    insuranceClaims: 89,
    controlledDrugs: 12,
    verificationRate: 98.5
  };

  // Prescription Verification Checklist
  const verificationChecklist = [
    { item: 'Doctor\'s name and registration number', required: true },
    { item: 'Patient name and age', required: true },
    { item: 'Date of prescription', required: true },
    { item: 'Medicine name, dosage, and duration', required: true },
    { item: 'Doctor\'s signature/stamp', required: true },
    { item: 'Prescription validity (30 days max)', required: true },
    { item: 'Check for drug interactions', required: true },
    { item: 'Verify controlled substances license', required: false }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'partially_dispensed': return 'bg-yellow-100 text-yellow-700';
      case 'fully_dispensed': return 'bg-blue-100 text-blue-700';
      case 'expired': return 'bg-red-100 text-red-700';
      case 'rejected': return 'bg-gray-100 text-gray-700';
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
              Prescription Management
            </h1>
            <p className="text-gray-600 mt-1">Manage prescriptions, dispensing & compliance</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 border border-gray-200 bg-white rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Scan Prescription
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Prescription
            </button>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Prescriptions</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.totalPrescriptions}</p>
              <p className="text-green-600 text-sm mt-1">This month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.activePrescriptions}</p>
              <p className="text-blue-600 text-sm mt-1">Avg: ₹{analytics.avgValue}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Insurance Claims</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.insuranceClaims}</p>
              <p className="text-purple-600 text-sm mt-1">38% of total</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Controlled Drugs</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.controlledDrugs}</p>
              <p className="text-orange-600 text-sm mt-1">Requires special handling</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
            { id: 'controlled', label: 'Controlled Drugs', icon: AlertTriangle },
            { id: 'verification', label: 'Verification Checklist', icon: CheckCircle }
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

        {/* Prescriptions Tab */}
        {activeTab === 'prescriptions' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by patient, doctor, or prescription ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Partially Dispensed</option>
                  <option>Expired</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {prescriptions.map(rx => (
                <div key={rx.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">Prescription #{rx.id}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(rx.status)}`}>
                          {rx.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Date: {new Date(rx.date).toLocaleDateString('en-IN')} • Valid till: {new Date(rx.validTill).toLocaleDateString('en-IN')}</p>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4" />
                      View Image
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Patient</p>
                      <p className="font-medium text-gray-900">{rx.patientName}</p>
                      <p className="text-xs text-gray-600">{rx.age}Y • {rx.gender}</p>
                      <p className="text-xs text-gray-600">{rx.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Doctor</p>
                      <p className="font-medium text-gray-900">{rx.doctorName}</p>
                      <p className="text-xs text-gray-600">{rx.doctorRegNo}</p>
                      <p className="text-xs text-gray-600">{rx.hospital}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Diagnosis</p>
                      <p className="font-medium text-gray-900">{rx.diagnosis}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-gray-900">₹{rx.totalAmount}</p>
                      {rx.insuranceClaim && (
                        <p className="text-xs text-purple-600 font-medium mt-1">
                          Claim: ₹{rx.claimAmount}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium text-gray-900 mb-2 text-sm">Medicines:</p>
                    <div className="space-y-2">
                      {rx.medicines.map((med, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{med.name}</p>
                            <p className="text-xs text-gray-600">Dosage: {med.dosage} • Duration: {med.duration} • Batch: {med.batch}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900 text-sm">{med.dispensed}/{med.quantity}</p>
                            <p className="text-xs text-gray-600">
                              {med.dispensed === med.quantity ? (
                                <span className="text-green-600 font-medium">✓ Dispensed</span>
                              ) : (
                                <span className="text-yellow-600 font-medium">Partial</span>
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Verified by: <span className="font-medium text-gray-900">{rx.verifiedBy}</span>
                      {rx.insuranceClaim && (
                        <span className="ml-4">
                          Insurance: <span className="font-medium text-purple-600">{rx.insuranceProvider}</span>
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                        Print
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                        Dispense
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Controlled Drugs Tab */}
        {activeTab === 'controlled' && (
          <div className="p-6">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-1">Controlled Substances Compliance</h4>
                  <p className="text-sm text-orange-800">All controlled drug dispensing must be logged with proper licensing verification and witnessed by another pharmacist.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {controlledDrugsLog.map(log => (
                <div key={log.id} className="bg-white rounded-xl border-2 border-orange-300 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{log.drugName}</h4>
                      <p className="text-sm text-gray-600">Prescription: {log.prescriptionId}</p>
                    </div>
                    {log.witnessed && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        WITNESSED
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Patient</p>
                      <p className="font-medium text-gray-900">{log.patientName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Doctor</p>
                      <p className="font-medium text-gray-900">{log.doctorName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Quantity</p>
                      <p className="font-medium text-gray-900">{log.quantity} tablets</p>
                      <p className="text-xs text-gray-600">Batch: {log.batchNumber}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Dispensed</p>
                      <p className="font-medium text-gray-900">{new Date(log.dispensedDate).toLocaleDateString('en-IN')}</p>
                      <p className="text-xs text-gray-600">{log.dispensedBy}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-gray-600">License: <span className="font-medium text-gray-900">{log.license}</span></p>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                      View Full Log
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verification Checklist Tab */}
        {activeTab === 'verification' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Prescription Verification Protocol</h3>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="space-y-3">
                {verificationChecklist.map((check, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    {check.required ? (
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{check.item}</p>
                      {check.required && (
                        <p className="text-xs text-red-600 font-medium mt-1">MANDATORY</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
