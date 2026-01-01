import React, { useState } from 'react';
import {
  ArrowLeft, UtensilsCrossed, Scissors, Stethoscope, ShoppingCart,
  Users, Clock, ChefHat, Printer, Bell, Gift, Percent, Plus, Minus,
  Merge, Split, RefreshCw, AlertTriangle, CheckCircle, Star, Heart,
  Calendar, Timer, User, CreditCard, Receipt, Settings, ChevronRight,
  Scale, Barcode, Package, AlertCircle, Pill, FileText, UserCheck,
  Sparkles, Crown, Zap
} from 'lucide-react';

const MerchantCategoryPOS = () => {
  const [activeCategory, setActiveCategory] = useState('restaurant');
  const [activeTab, setActiveTab] = useState('orders');

  // ==========================================
  // CATEGORY-SPECIFIC POS FEATURES
  // Each business type has unique requirements
  // ==========================================

  const categories = [
    { id: 'restaurant', label: 'Restaurant', icon: <UtensilsCrossed size={20} />, color: 'orange' },
    { id: 'salon', label: 'Salon/Spa', icon: <Scissors size={20} />, color: 'pink' },
    { id: 'clinic', label: 'Clinic', icon: <Stethoscope size={20} />, color: 'blue' },
    { id: 'grocery', label: 'Grocery', icon: <ShoppingCart size={20} />, color: 'green' }
  ];

  // ==========================================
  // RESTAURANT POS
  // ==========================================

  const [restaurantData, setRestaurantData] = useState({
    tables: [
      { id: 1, name: 'Table 1', capacity: 4, status: 'occupied', guests: 3, orderId: 'ORD001', amount: 850, time: '12:30' },
      { id: 2, name: 'Table 2', capacity: 2, status: 'available', guests: 0, orderId: null, amount: 0, time: null },
      { id: 3, name: 'Table 3', capacity: 6, status: 'occupied', guests: 5, orderId: 'ORD002', amount: 1450, time: '12:45' },
      { id: 4, name: 'Table 4', capacity: 4, status: 'reserved', guests: 0, orderId: null, amount: 0, time: '14:00' },
      { id: 5, name: 'Table 5', capacity: 8, status: 'occupied', guests: 6, orderId: 'ORD003', amount: 2200, time: '12:15' },
      { id: 6, name: 'Table 6', capacity: 2, status: 'available', guests: 0, orderId: null, amount: 0, time: null }
    ],
    kotQueue: [
      { id: 'KOT001', table: 'Table 1', items: ['Butter Chicken x1', 'Naan x2', 'Dal Makhani x1'], time: '2 min ago', status: 'pending' },
      { id: 'KOT002', table: 'Table 3', items: ['Paneer Tikka x2', 'Biryani x3'], time: '5 min ago', status: 'preparing' },
      { id: 'KOT003', table: 'Table 5', items: ['Tandoori Platter x1', 'Lassi x4'], time: '8 min ago', status: 'ready' }
    ],
    happyHour: {
      enabled: true,
      startTime: '16:00',
      endTime: '19:00',
      discount: 20,
      applicableItems: ['Beverages', 'Starters']
    },
    complimentaryItems: [
      { id: 1, name: 'Papad', reason: 'Welcome', approved: true },
      { id: 2, name: 'Mint Chutney', reason: 'Regular customer', approved: true }
    ]
  });

  const [selectedTables, setSelectedTables] = useState([]);
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [showSplitModal, setShowSplitModal] = useState(false);

  // ==========================================
  // SALON POS
  // ==========================================

  const [salonData, setSalonData] = useState({
    appointments: [
      { id: 1, customer: 'Priya Sharma', service: 'Haircut + Styling', stylist: 'Ritu', time: '11:00', duration: 60, status: 'in_progress', amount: 800 },
      { id: 2, customer: 'Anita Patel', service: 'Facial + Cleanup', stylist: 'Meena', time: '11:30', duration: 90, status: 'waiting', amount: 1500 },
      { id: 3, customer: 'Kavita Singh', service: 'Hair Color', stylist: 'Ritu', time: '12:30', duration: 120, status: 'scheduled', amount: 2500 },
      { id: 4, customer: 'Sunita Verma', service: 'Manicure + Pedicure', stylist: 'Pooja', time: '13:00', duration: 75, status: 'scheduled', amount: 1200 }
    ],
    staff: [
      { id: 1, name: 'Ritu', skills: ['Haircut', 'Hair Color', 'Styling'], rating: 4.8, todayEarnings: 3500, commission: 30 },
      { id: 2, name: 'Meena', skills: ['Facial', 'Cleanup', 'Threading'], rating: 4.6, todayEarnings: 2800, commission: 25 },
      { id: 3, name: 'Pooja', skills: ['Manicure', 'Pedicure', 'Nail Art'], rating: 4.9, todayEarnings: 2200, commission: 25 }
    ],
    serviceBuffer: 15, // minutes between appointments
    commissionRates: {
      haircut: 30,
      color: 25,
      facial: 20,
      nails: 25
    }
  });

  // ==========================================
  // CLINIC POS
  // ==========================================

  const [clinicData, setClinicData] = useState({
    patients: [
      {
        id: 1,
        name: 'Rajesh Kumar',
        age: 45,
        doctor: 'Dr. Sharma',
        time: '10:00',
        status: 'completed',
        prescription: { locked: true, items: ['Paracetamol 500mg', 'Amoxicillin 250mg'], validity: '7 days' },
        consultation: 500,
        medicines: 450,
        tests: 0
      },
      {
        id: 2,
        name: 'Sunita Devi',
        age: 32,
        doctor: 'Dr. Gupta',
        time: '10:30',
        status: 'in_consultation',
        prescription: { locked: false, items: [], validity: null },
        consultation: 600,
        medicines: 0,
        tests: 800
      },
      {
        id: 3,
        name: 'Amit Singh',
        age: 28,
        doctor: 'Dr. Sharma',
        time: '11:00',
        status: 'waiting',
        prescription: null,
        consultation: 500,
        medicines: 0,
        tests: 0
      }
    ],
    doctors: [
      { id: 1, name: 'Dr. Sharma', specialty: 'General Physician', consultationFee: 500, todayPatients: 12, revenue: 8500 },
      { id: 2, name: 'Dr. Gupta', specialty: 'Gynecologist', consultationFee: 600, todayPatients: 8, revenue: 6400 }
    ],
    prescriptionRules: {
      requireDoctorSignature: true,
      lockAfterPrint: true,
      maxEditTime: 30, // minutes
      requiresLicense: ['Schedule H', 'Schedule H1', 'Narcotics']
    }
  });

  // ==========================================
  // GROCERY POS
  // ==========================================

  const [groceryData, setGroceryData] = useState({
    weighingScale: {
      connected: true,
      lastWeight: 0.750,
      unit: 'kg',
      tareApplied: false
    },
    barcodeItems: [
      { barcode: '8901234567890', name: 'Tata Salt 1kg', price: 25, stock: 150, expiry: '2025-06-15' },
      { barcode: '8901234567891', name: 'Fortune Oil 1L', price: 185, stock: 45, expiry: '2025-03-20' },
      { barcode: '8901234567892', name: 'Aashirvaad Atta 5kg', price: 280, stock: 30, expiry: '2025-02-10' }
    ],
    expiryAlerts: [
      { item: 'Amul Butter 500g', batch: 'B2024001', expiry: '2024-01-25', daysLeft: 10, stock: 8 },
      { item: 'Britannia Bread', batch: 'B2024045', expiry: '2024-01-18', daysLeft: 3, stock: 12 },
      { item: 'Nestle Milk 500ml', batch: 'B2024032', expiry: '2024-01-17', daysLeft: 2, stock: 25 }
    ],
    mrpVsSelling: {
      discountItems: [
        { name: 'Maggi Noodles', mrp: 14, selling: 12, margin: -14 },
        { name: 'Parle-G Biscuit', mrp: 10, selling: 9, margin: -10 }
      ]
    },
    weighableItems: [
      { name: 'Tomatoes', pricePerKg: 40 },
      { name: 'Onions', pricePerKg: 35 },
      { name: 'Potatoes', pricePerKg: 30 },
      { name: 'Rice (Loose)', pricePerKg: 55 }
    ]
  });

  // ==========================================
  // RENDER FUNCTIONS
  // ==========================================

  const renderRestaurantPOS = () => (
    <div className="space-y-4">
      {/* Table Grid */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Table Management</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowMergeModal(true)}
              disabled={selectedTables.length < 2}
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 ${
                selectedTables.length >= 2
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Merge size={14} /> Merge
            </button>
            <button
              onClick={() => setShowSplitModal(true)}
              disabled={selectedTables.length !== 1}
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 ${
                selectedTables.length === 1
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Split size={14} /> Split Bill
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {restaurantData.tables.map(table => (
            <button
              key={table.id}
              onClick={() => {
                if (selectedTables.includes(table.id)) {
                  setSelectedTables(selectedTables.filter(t => t !== table.id));
                } else {
                  setSelectedTables([...selectedTables, table.id]);
                }
              }}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedTables.includes(table.id)
                  ? 'border-blue-500 bg-blue-50'
                  : table.status === 'occupied'
                  ? 'border-red-200 bg-red-50'
                  : table.status === 'reserved'
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-green-200 bg-green-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">{table.name}</span>
                <Users size={14} className="text-gray-500" />
              </div>
              <div className="text-left text-xs text-gray-600">
                {table.status === 'occupied' ? (
                  <>
                    <p>{table.guests} guests • {table.time}</p>
                    <p className="font-bold text-gray-800">₹{table.amount}</p>
                  </>
                ) : table.status === 'reserved' ? (
                  <p>Reserved @ {table.time}</p>
                ) : (
                  <p className="text-green-600">Available</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* KOT Queue */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b bg-orange-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="text-orange-600" size={20} />
            <h3 className="font-bold">Kitchen Orders (KOT)</h3>
          </div>
          <button className="px-3 py-1.5 bg-orange-600 text-white rounded-lg text-sm flex items-center gap-1">
            <Printer size={14} /> Reprint KOT
          </button>
        </div>
        <div className="divide-y">
          {restaurantData.kotQueue.map(kot => (
            <div key={kot.id} className="p-4 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">{kot.id}</span>
                  <span className="text-sm text-gray-500">• {kot.table}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    kot.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    kot.status === 'preparing' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {kot.status}
                  </span>
                </div>
                <ul className="text-sm text-gray-600">
                  {kot.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-1">{kot.time}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 rounded-lg">
                  <Bell size={16} />
                </button>
                <button className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle size={16} className="text-green-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Hour & Complimentary */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-4 rounded-lg border ${restaurantData.happyHour.enabled ? 'bg-purple-50 border-purple-200' : 'bg-gray-50'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="text-purple-600" size={18} />
            <span className="font-bold">Happy Hour</span>
          </div>
          {restaurantData.happyHour.enabled ? (
            <>
              <p className="text-sm text-purple-700">{restaurantData.happyHour.startTime} - {restaurantData.happyHour.endTime}</p>
              <p className="text-lg font-bold text-purple-600">{restaurantData.happyHour.discount}% OFF</p>
              <p className="text-xs text-gray-500">On: {restaurantData.happyHour.applicableItems.join(', ')}</p>
            </>
          ) : (
            <p className="text-sm text-gray-500">Not active</p>
          )}
        </div>
        <div className="p-4 rounded-lg border bg-green-50 border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="text-green-600" size={18} />
            <span className="font-bold">Complimentary</span>
          </div>
          {restaurantData.complimentaryItems.map(item => (
            <div key={item.id} className="flex items-center justify-between text-sm">
              <span>{item.name}</span>
              <span className="text-xs text-gray-500">{item.reason}</span>
            </div>
          ))}
          <button className="w-full mt-2 py-1 bg-green-600 text-white rounded text-sm">
            + Add Complimentary
          </button>
        </div>
      </div>
    </div>
  );

  const renderSalonPOS = () => (
    <div className="space-y-4">
      {/* Today's Appointments */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b bg-pink-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="text-pink-600" size={20} />
            <h3 className="font-bold">Today's Appointments</h3>
          </div>
          <span className="text-sm text-pink-600">{salonData.appointments.length} appointments</span>
        </div>
        <div className="divide-y">
          {salonData.appointments.map(apt => (
            <div key={apt.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{apt.customer}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      apt.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                      apt.status === 'waiting' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {apt.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{apt.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-pink-600">₹{apt.amount}</p>
                  <p className="text-xs text-gray-500">{apt.time} • {apt.duration}min</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{apt.stylist}</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-gray-100 rounded text-sm">Reschedule</button>
                  <button className="px-3 py-1 bg-pink-600 text-white rounded text-sm">Bill Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Performance & Commission */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-bold">Staff Commission Tracker</h3>
          <Settings size={18} className="text-gray-400" />
        </div>
        <div className="divide-y">
          {salonData.staff.map(staff => (
            <div key={staff.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Scissors className="text-pink-600" size={18} />
                  </div>
                  <div>
                    <p className="font-bold">{staff.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" size={12} fill="currentColor" />
                      <span className="text-xs text-gray-500">{staff.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₹{staff.todayEarnings}</p>
                  <p className="text-xs text-gray-500">Today's revenue</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                <span className="text-sm text-gray-600">Commission ({staff.commission}%)</span>
                <span className="font-bold">₹{Math.round(staff.todayEarnings * staff.commission / 100)}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {staff.skills.map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-pink-50 text-pink-600 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Duration Buffer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Timer className="text-yellow-600 mt-0.5" size={20} />
          <div>
            <h4 className="font-bold text-yellow-800">Service Buffer: {salonData.serviceBuffer} minutes</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Auto-added between appointments for cleanup and preparation
            </p>
            <button className="mt-2 px-3 py-1 bg-yellow-600 text-white rounded text-sm">
              Adjust Buffer Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClinicPOS = () => (
    <div className="space-y-4">
      {/* Patient Queue */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b bg-blue-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="text-blue-600" size={20} />
            <h3 className="font-bold">Patient Queue</h3>
          </div>
          <span className="text-sm text-blue-600">{clinicData.patients.length} patients today</span>
        </div>
        <div className="divide-y">
          {clinicData.patients.map(patient => (
            <div key={patient.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{patient.name}</span>
                    <span className="text-sm text-gray-500">({patient.age} yrs)</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      patient.status === 'completed' ? 'bg-green-100 text-green-700' :
                      patient.status === 'in_consultation' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {patient.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{patient.doctor} • {patient.time}</p>
                </div>
              </div>

              {/* Prescription Section */}
              {patient.prescription && (
                <div className={`rounded-lg p-3 mb-3 ${
                  patient.prescription.locked ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className={patient.prescription.locked ? 'text-green-600' : 'text-yellow-600'} />
                      <span className="font-medium">Prescription</span>
                      {patient.prescription.locked ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                          <CheckCircle size={10} /> Locked
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                          <AlertTriangle size={10} /> Draft
                        </span>
                      )}
                    </div>
                    {!patient.prescription.locked && (
                      <button className="px-2 py-1 bg-green-600 text-white rounded text-xs flex items-center gap-1">
                        <CheckCircle size={12} /> Lock & Print
                      </button>
                    )}
                  </div>
                  {patient.prescription.items.length > 0 && (
                    <ul className="text-sm text-gray-600 space-y-1">
                      {patient.prescription.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Pill size={12} className="text-gray-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Billing Summary */}
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Consultation:</span>
                    <span className="ml-1 font-medium">₹{patient.consultation}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Medicines:</span>
                    <span className="ml-1 font-medium">₹{patient.medicines}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Tests:</span>
                    <span className="ml-1 font-medium">₹{patient.tests}</span>
                  </div>
                </div>
                <div className="font-bold text-blue-600">
                  Total: ₹{patient.consultation + patient.medicines + patient.tests}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Revenue */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-bold">Doctor-wise Revenue</h3>
        </div>
        <div className="divide-y">
          {clinicData.doctors.map(doctor => (
            <div key={doctor.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserCheck className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="font-bold">{doctor.name}</p>
                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">₹{doctor.revenue}</p>
                <p className="text-xs text-gray-500">{doctor.todayPatients} patients</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prescription Rules Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-red-600 mt-0.5" size={20} />
          <div>
            <h4 className="font-bold text-red-800">Prescription Rules</h4>
            <ul className="text-sm text-red-700 mt-2 space-y-1">
              <li>• Schedule H drugs require doctor signature</li>
              <li>• Prescriptions auto-lock after printing</li>
              <li>• Edit window: {clinicData.prescriptionRules.maxEditTime} minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGroceryPOS = () => (
    <div className="space-y-4">
      {/* Weighing Scale Integration */}
      <div className={`rounded-lg p-4 border-2 ${groceryData.weighingScale.connected ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Scale className={groceryData.weighingScale.connected ? 'text-green-600' : 'text-red-600'} size={24} />
            <div>
              <h3 className="font-bold">Weighing Scale</h3>
              <p className={`text-sm ${groceryData.weighingScale.connected ? 'text-green-600' : 'text-red-600'}`}>
                {groceryData.weighingScale.connected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{groceryData.weighingScale.lastWeight.toFixed(3)}</p>
            <p className="text-sm text-gray-500">{groceryData.weighingScale.unit}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-white border rounded-lg text-sm font-medium">
            Tare
          </button>
          <button className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-medium">
            Add to Bill
          </button>
        </div>

        {/* Weighable Items Quick Select */}
        <div className="mt-3 pt-3 border-t border-green-200">
          <p className="text-xs text-gray-500 mb-2">Quick select weighable item:</p>
          <div className="flex flex-wrap gap-2">
            {groceryData.weighableItems.map(item => (
              <button key={item.name} className="px-3 py-1 bg-white rounded-full text-sm border">
                {item.name} (₹{item.pricePerKg}/kg)
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Barcode Scanner */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center gap-2 mb-3">
          <Barcode className="text-blue-600" size={20} />
          <h3 className="font-bold">Barcode Scan</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center mb-3">
          <p className="text-gray-500">Scan barcode or enter manually</p>
          <input
            type="text"
            placeholder="Enter barcode..."
            className="mt-2 w-full p-3 border rounded-lg text-center text-lg font-mono"
          />
        </div>
        <div className="text-sm text-gray-500">
          <p>Last scanned: {groceryData.barcodeItems[0].name}</p>
        </div>
      </div>

      {/* Expiry Alerts */}
      <div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-red-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-red-600" size={20} />
            <h3 className="font-bold text-red-800">Expiry Alerts</h3>
          </div>
          <span className="px-2 py-1 bg-red-600 text-white rounded-full text-xs font-bold">
            {groceryData.expiryAlerts.length} items
          </span>
        </div>
        <div className="divide-y divide-red-100">
          {groceryData.expiryAlerts.map((alert, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{alert.item}</p>
                <p className="text-sm text-gray-500">Batch: {alert.batch} • Stock: {alert.stock}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold ${alert.daysLeft <= 3 ? 'text-red-600' : 'text-yellow-600'}`}>
                  {alert.daysLeft} days left
                </p>
                <p className="text-xs text-gray-500">{alert.expiry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MRP vs Selling Price */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Percent className="text-purple-600" size={20} />
            <h3 className="font-bold">MRP vs Selling Price</h3>
          </div>
        </div>
        <div className="divide-y">
          {groceryData.mrpVsSelling.discountItems.map((item, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">MRP: ₹{item.mrp}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">₹{item.selling}</p>
                <p className="text-xs text-red-500">{item.margin}% margin</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-yellow-50 border-t border-yellow-200">
          <p className="text-sm text-yellow-700">
            <AlertTriangle size={14} className="inline mr-1" />
            Items below MRP - Negative margin detected
          </p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeCategory) {
      case 'restaurant': return renderRestaurantPOS();
      case 'salon': return renderSalonPOS();
      case 'clinic': return renderClinicPOS();
      case 'grocery': return renderGroceryPOS();
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="font-bold text-lg">Category POS</h1>
          <p className="text-xs text-gray-500">Industry-specific features</p>
        </div>
      </div>

      {/* Category Selector */}
      <div className="bg-white border-b overflow-x-auto">
        <div className="flex p-2 gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? cat.color === 'orange' ? 'bg-orange-100 text-orange-700 border-2 border-orange-500' :
                    cat.color === 'pink' ? 'bg-pink-100 text-pink-700 border-2 border-pink-500' :
                    cat.color === 'blue' ? 'bg-blue-100 text-blue-700 border-2 border-blue-500' :
                    'bg-green-100 text-green-700 border-2 border-green-500'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {cat.icon}
              <span className="font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {renderContent()}
      </div>

      {/* Merge Tables Modal */}
      {showMergeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-sm p-4">
            <h3 className="font-bold text-lg mb-4">Merge Tables</h3>
            <p className="text-gray-600 mb-4">
              Merge {selectedTables.length} tables into one bill?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {setShowMergeModal(false); setSelectedTables([]);}}
                className="flex-1 py-2 bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {setShowMergeModal(false); setSelectedTables([]);}}
                className="flex-1 py-2 bg-blue-600 text-white rounded-lg"
              >
                Merge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Split Bill Modal */}
      {showSplitModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-sm p-4">
            <h3 className="font-bold text-lg mb-4">Split Bill</h3>
            <div className="space-y-3 mb-4">
              <button className="w-full p-3 bg-gray-50 rounded-lg text-left flex items-center justify-between">
                <span>Split Equally</span>
                <ChevronRight size={16} />
              </button>
              <button className="w-full p-3 bg-gray-50 rounded-lg text-left flex items-center justify-between">
                <span>Split by Items</span>
                <ChevronRight size={16} />
              </button>
              <button className="w-full p-3 bg-gray-50 rounded-lg text-left flex items-center justify-between">
                <span>Custom Split</span>
                <ChevronRight size={16} />
              </button>
            </div>
            <button
              onClick={() => {setShowSplitModal(false); setSelectedTables([]);}}
              className="w-full py-2 bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantCategoryPOS;
