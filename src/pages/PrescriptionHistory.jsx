import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrescriptionHistory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  // Mock prescriptions data
  const [prescriptions] = useState([
    {
      id: 'RX-001',
      doctor: {
        name: 'Dr. Anil Sharma',
        specialization: 'General Physician',
        hospital: 'City Care Hospital',
        phone: '9876543210'
      },
      patient: 'Self',
      date: '2024-12-20',
      validUntil: '2025-03-20',
      status: 'active',
      diagnosis: 'Seasonal Flu with Fever',
      medicines: [
        { name: 'Paracetamol 500mg', dosage: '1 tablet', frequency: '3 times a day', duration: '5 days', timing: 'After meals', refillsLeft: 2 },
        { name: 'Cetirizine 10mg', dosage: '1 tablet', frequency: 'Once a day', duration: '7 days', timing: 'At night', refillsLeft: 1 },
        { name: 'Vitamin C 500mg', dosage: '1 tablet', frequency: 'Once a day', duration: '15 days', timing: 'Morning', refillsLeft: 0 }
      ],
      tests: ['Complete Blood Count (CBC)', 'Dengue NS1 Antigen'],
      notes: 'Take plenty of rest and fluids. Follow up after 5 days if symptoms persist.',
      refillable: true,
      lastRefilled: '2024-12-25',
      pharmacyOrders: [
        { id: 'PH-001', date: '2024-12-20', pharmacy: 'MedPlus', amount: 245, status: 'delivered' },
        { id: 'PH-002', date: '2024-12-25', pharmacy: 'Apollo Pharmacy', amount: 180, status: 'delivered' }
      ]
    },
    {
      id: 'RX-002',
      doctor: {
        name: 'Dr. Priya Patel',
        specialization: 'Dermatologist',
        hospital: 'Skin & Hair Clinic',
        phone: '9876543211'
      },
      patient: 'Self',
      date: '2024-12-15',
      validUntil: '2025-01-15',
      status: 'active',
      diagnosis: 'Acne Vulgaris',
      medicines: [
        { name: 'Adapalene Gel 0.1%', dosage: 'Apply thin layer', frequency: 'Once at night', duration: '30 days', timing: 'Night', refillsLeft: 1 },
        { name: 'Clindamycin Gel 1%', dosage: 'Apply to affected areas', frequency: 'Twice a day', duration: '30 days', timing: 'Morning & Night', refillsLeft: 1 }
      ],
      tests: [],
      notes: 'Avoid sun exposure. Use sunscreen during day. Do not pop pimples.',
      refillable: true,
      lastRefilled: null,
      pharmacyOrders: [
        { id: 'PH-003', date: '2024-12-15', pharmacy: 'NetMeds', amount: 485, status: 'delivered' }
      ]
    },
    {
      id: 'RX-003',
      doctor: {
        name: 'Dr. Rajesh Kumar',
        specialization: 'Cardiologist',
        hospital: 'Heart Care Center',
        phone: '9876543212'
      },
      patient: 'Father (Ramesh Kumar)',
      date: '2024-11-10',
      validUntil: '2025-05-10',
      status: 'active',
      diagnosis: 'Hypertension Stage 1',
      medicines: [
        { name: 'Amlodipine 5mg', dosage: '1 tablet', frequency: 'Once a day', duration: '180 days', timing: 'Morning', refillsLeft: 5 },
        { name: 'Aspirin 75mg', dosage: '1 tablet', frequency: 'Once a day', duration: '180 days', timing: 'After lunch', refillsLeft: 5 }
      ],
      tests: ['ECG', 'Lipid Profile', 'Kidney Function Test'],
      notes: 'Monitor BP daily. Reduce salt intake. Regular exercise recommended. Follow up monthly.',
      refillable: true,
      lastRefilled: '2024-12-10',
      pharmacyOrders: [
        { id: 'PH-004', date: '2024-11-10', pharmacy: 'MedPlus', amount: 320, status: 'delivered' },
        { id: 'PH-005', date: '2024-12-10', pharmacy: 'Apollo Pharmacy', amount: 310, status: 'delivered' }
      ]
    },
    {
      id: 'RX-004',
      doctor: {
        name: 'Dr. Sneha Reddy',
        specialization: 'Pediatrician',
        hospital: 'Kids First Hospital',
        phone: '9876543213'
      },
      patient: 'Child (Arjun)',
      date: '2024-10-05',
      validUntil: '2024-10-20',
      status: 'expired',
      diagnosis: 'Viral Fever with Throat Infection',
      medicines: [
        { name: 'Paracetamol Syrup', dosage: '5ml', frequency: '3 times a day', duration: '5 days', timing: 'After meals', refillsLeft: 0 },
        { name: 'Amoxicillin Syrup', dosage: '5ml', frequency: '2 times a day', duration: '7 days', timing: 'Morning & Night', refillsLeft: 0 }
      ],
      tests: ['Throat Swab Culture'],
      notes: 'Complete the full antibiotic course. Plenty of fluids. Light diet.',
      refillable: false,
      pharmacyOrders: [
        { id: 'PH-006', date: '2024-10-05', pharmacy: 'Wellness Forever', amount: 185, status: 'delivered' }
      ]
    }
  ]);

  const activePrescriptions = prescriptions.filter(p => p.status === 'active');
  const expiredPrescriptions = prescriptions.filter(p => p.status === 'expired');

  const getDaysRemaining = (validUntil) => {
    const today = new Date();
    const expiry = new Date(validUntil);
    const diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Prescriptions</h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{activePrescriptions.length}</div>
            <div className="text-xs text-white/80">Active</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">
              {prescriptions.reduce((sum, p) => sum + p.medicines.filter(m => m.refillsLeft > 0).length, 0)}
            </div>
            <div className="text-xs text-white/80">Refills Available</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{prescriptions.length}</div>
            <div className="text-xs text-white/80">Total</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'active' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'
          }`}
        >
          Active ({activePrescriptions.length})
        </button>
        <button
          onClick={() => setActiveTab('expired')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'expired' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'
          }`}
        >
          Expired ({expiredPrescriptions.length})
        </button>
        <button
          onClick={() => setActiveTab('family')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'family' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'
          }`}
        >
          Family
        </button>
      </div>

      {/* Prescription List */}
      <div className="p-4 space-y-4">
        {(activeTab === 'active' ? activePrescriptions :
          activeTab === 'expired' ? expiredPrescriptions :
          prescriptions).map(rx => {
          const daysRemaining = getDaysRemaining(rx.validUntil);
          const needsRefill = rx.medicines.some(m => m.refillsLeft > 0);

          return (
            <div
              key={rx.id}
              onClick={() => setSelectedPrescription(rx)}
              className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    💊
                  </div>
                  <div>
                    <p className="font-medium">{rx.diagnosis}</p>
                    <p className="text-sm text-gray-500">{rx.doctor.name}</p>
                    {rx.patient !== 'Self' && (
                      <p className="text-xs text-purple-600">For: {rx.patient}</p>
                    )}
                  </div>
                </div>
                {rx.status === 'active' ? (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    daysRemaining <= 7 ? 'bg-orange-100 text-orange-700' :
                    daysRemaining <= 30 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {daysRemaining} days left
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    Expired
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {rx.medicines.slice(0, 3).map((med, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {med.name}
                  </span>
                ))}
                {rx.medicines.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{rx.medicines.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Prescribed: {rx.date}</span>
                {needsRefill && rx.status === 'active' && (
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Refill Now
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {(activeTab === 'active' ? activePrescriptions :
          activeTab === 'expired' ? expiredPrescriptions :
          prescriptions).length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-500">No prescriptions found</p>
          </div>
        )}
      </div>

      {/* Upload Prescription Button */}
      <div className="fixed bottom-20 right-4">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl">
          📤
        </button>
      </div>

      {/* Prescription Detail Modal */}
      {selectedPrescription && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Prescription Details</h2>
              <button onClick={() => setSelectedPrescription(null)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Doctor Info */}
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    👨‍⚕️
                  </div>
                  <div>
                    <p className="font-semibold">{selectedPrescription.doctor.name}</p>
                    <p className="text-sm text-gray-600">{selectedPrescription.doctor.specialization}</p>
                    <p className="text-xs text-gray-500">{selectedPrescription.doctor.hospital}</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 text-sm font-medium">
                  Contact Doctor
                </button>
              </div>

              {/* Prescription Info */}
              <div className="bg-white border rounded-xl p-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Prescription ID</p>
                    <p className="font-medium">{selectedPrescription.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Patient</p>
                    <p className="font-medium">{selectedPrescription.patient}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium">{selectedPrescription.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Valid Until</p>
                    <p className="font-medium">{selectedPrescription.validUntil}</p>
                  </div>
                </div>
              </div>

              {/* Diagnosis */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Diagnosis</h3>
                <p className="text-gray-700">{selectedPrescription.diagnosis}</p>
              </div>

              {/* Medicines */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-3">Medicines</h3>
                <div className="space-y-3">
                  {selectedPrescription.medicines.map((med, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">{med.name}</p>
                        {med.refillsLeft > 0 && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            {med.refillsLeft} refills left
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <p>📏 {med.dosage}</p>
                        <p>🔄 {med.frequency}</p>
                        <p>📅 {med.duration}</p>
                        <p>⏰ {med.timing}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tests */}
              {selectedPrescription.tests.length > 0 && (
                <div className="bg-white border rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Recommended Tests</h3>
                  <div className="space-y-2">
                    {selectedPrescription.tests.map((test, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm">{test}</span>
                        <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                          Book Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {selectedPrescription.notes && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Doctor's Notes</h3>
                  <p className="text-sm text-yellow-700">{selectedPrescription.notes}</p>
                </div>
              )}

              {/* Order History */}
              {selectedPrescription.pharmacyOrders.length > 0 && (
                <div className="bg-white border rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Order History</h3>
                  <div className="space-y-2">
                    {selectedPrescription.pharmacyOrders.map(order => (
                      <div key={order.id} className="flex items-center justify-between text-sm bg-gray-50 rounded-lg p-3">
                        <div>
                          <p className="font-medium">{order.pharmacy}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{order.amount}</p>
                          <span className="text-xs text-green-600">✓ {order.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                {selectedPrescription.status === 'active' && selectedPrescription.refillable && (
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium">
                    Order Refill
                  </button>
                )}
                <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrescriptionHistory;
