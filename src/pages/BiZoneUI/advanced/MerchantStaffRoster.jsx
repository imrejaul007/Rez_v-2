import { useState } from 'react';
import { Users, Plus, Edit, Trash2, Calendar, Clock, CheckCircle, XCircle, AlertCircle, Filter, Download, Upload, Eye, MapPin, Phone, Mail, Award, TrendingUp } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantStaffRoster() {
  const [selectedWeek, setSelectedWeek] = useState(0); // 0 = current week
  const [viewMode, setViewMode] = useState('weekly'); // weekly, monthly
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showAddShift, setShowAddShift] = useState(false);

  // Mock staff data
  const staff = [
    {
      id: 'staff-001',
      name: 'Priya Sharma',
      role: 'Senior Stylist',
      department: 'Hair',
      phone: '+91 98765 43210',
      email: 'priya.sharma@salon.com',
      joiningDate: '2023-01-15',
      status: 'active',
      rating: 4.8,
      totalShifts: 156,
      attendance: 96,
      avatar: null,
      skills: ['Hair Cutting', 'Hair Coloring', 'Hair Styling'],
      certifications: ['Advanced Styling', 'Color Expert']
    },
    {
      id: 'staff-002',
      name: 'Rahul Verma',
      role: 'Massage Therapist',
      department: 'Spa',
      phone: '+91 98765 43211',
      email: 'rahul.verma@salon.com',
      joiningDate: '2023-03-20',
      status: 'active',
      rating: 4.9,
      totalShifts: 134,
      attendance: 98,
      avatar: null,
      skills: ['Swedish Massage', 'Thai Massage', 'Aromatherapy'],
      certifications: ['Certified Therapist', 'Spa Expert']
    },
    {
      id: 'staff-003',
      name: 'Sneha Patel',
      role: 'Beautician',
      department: 'Beauty',
      phone: '+91 98765 43212',
      email: 'sneha.patel@salon.com',
      joiningDate: '2023-05-10',
      status: 'active',
      rating: 4.7,
      totalShifts: 98,
      attendance: 94,
      avatar: null,
      skills: ['Facial', 'Makeup', 'Waxing'],
      certifications: ['Beauty Expert', 'Makeup Artist']
    },
    {
      id: 'staff-004',
      name: 'Amit Kumar',
      role: 'Hair Specialist',
      department: 'Hair',
      phone: '+91 98765 43213',
      email: 'amit.kumar@salon.com',
      joiningDate: '2023-07-01',
      status: 'active',
      rating: 4.6,
      totalShifts: 67,
      attendance: 92,
      avatar: null,
      skills: ['Keratin Treatment', 'Hair Spa', 'Hair Cutting'],
      certifications: ['Hair Expert']
    },
    {
      id: 'staff-005',
      name: 'Kavita Desai',
      role: 'Receptionist',
      department: 'Front Desk',
      phone: '+91 98765 43214',
      email: 'kavita.desai@salon.com',
      joiningDate: '2023-02-15',
      status: 'active',
      rating: 4.5,
      totalShifts: 145,
      attendance: 95,
      avatar: null,
      skills: ['Customer Service', 'Billing', 'Scheduling'],
      certifications: ['Customer Service']
    }
  ];

  // Mock weekly schedule (7 days)
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [schedule, setSchedule] = useState({
    'staff-001': {
      monday: { shift: 'morning', hours: '9:00 AM - 2:00 PM', status: 'scheduled' },
      tuesday: { shift: 'morning', hours: '9:00 AM - 2:00 PM', status: 'scheduled' },
      wednesday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      thursday: { shift: 'evening', hours: '2:00 PM - 9:00 PM', status: 'scheduled' },
      friday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      saturday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      sunday: { shift: 'off', hours: '-', status: 'off' }
    },
    'staff-002': {
      monday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      tuesday: { shift: 'evening', hours: '2:00 PM - 9:00 PM', status: 'scheduled' },
      wednesday: { shift: 'morning', hours: '9:00 AM - 2:00 PM', status: 'scheduled' },
      thursday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      friday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      saturday: { shift: 'evening', hours: '2:00 PM - 9:00 PM', status: 'scheduled' },
      sunday: { shift: 'off', hours: '-', status: 'off' }
    },
    'staff-003': {
      monday: { shift: 'evening', hours: '2:00 PM - 9:00 PM', status: 'scheduled' },
      tuesday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      wednesday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      thursday: { shift: 'morning', hours: '9:00 AM - 2:00 PM', status: 'scheduled' },
      friday: { shift: 'evening', hours: '2:00 PM - 9:00 PM', status: 'scheduled' },
      saturday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      sunday: { shift: 'off', hours: '-', status: 'off' }
    },
    'staff-004': {
      monday: { shift: 'off', hours: '-', status: 'off' },
      tuesday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      wednesday: { shift: 'evening', hours: '2:00 PM - 9:00 PM', status: 'scheduled' },
      thursday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      friday: { shift: 'morning', hours: '9:00 AM - 2:00 PM', status: 'scheduled' },
      saturday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      sunday: { shift: 'morning', hours: '9:00 AM - 2:00 PM', status: 'scheduled' }
    },
    'staff-005': {
      monday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      tuesday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      wednesday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      thursday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      friday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      saturday: { shift: 'full', hours: '9:00 AM - 6:00 PM', status: 'scheduled' },
      sunday: { shift: 'off', hours: '-', status: 'off' }
    }
  });

  // Calculate weekly metrics
  const weeklyMetrics = {
    totalStaff: staff.length,
    activeStaff: staff.filter(s => s.status === 'active').length,
    totalShifts: Object.values(schedule).reduce((sum, staffSchedule) => {
      return sum + Object.values(staffSchedule).filter(shift => shift.status === 'scheduled').length;
    }, 0),
    avgAttendance: Math.round(staff.reduce((sum, s) => sum + s.attendance, 0) / staff.length),
    avgRating: (staff.reduce((sum, s) => sum + s.rating, 0) / staff.length).toFixed(1)
  };

  const getShiftColor = (shift) => {
    switch (shift) {
      case 'morning':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'evening':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'full':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'off':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Staff Roster & Scheduling</h1>
              <p className="text-gray-600">Manage staff schedules, shifts, and availability</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Import
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button
                onClick={() => setShowAddShift(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Shift
              </button>
            </div>
          </div>
        </div>

        {/* Weekly Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Total Staff</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{weeklyMetrics.totalStaff}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-600">Active</p>
            <p className="text-2xl font-bold text-green-700 mt-1">{weeklyMetrics.activeStaff}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <p className="text-sm text-indigo-600">Total Shifts</p>
            <p className="text-2xl font-bold text-indigo-700 mt-1">{weeklyMetrics.totalShifts}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-600">Avg Attendance</p>
            <p className="text-2xl font-bold text-blue-700 mt-1">{weeklyMetrics.avgAttendance}%</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-600">Avg Rating</p>
            <p className="text-2xl font-bold text-yellow-700 mt-1">{weeklyMetrics.avgRating}</p>
          </div>
        </div>

        {/* Shift Legend */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-gray-700">Shift Types:</span>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded text-xs font-semibold border ${getShiftColor('morning')}`}>
                Morning (9 AM - 2 PM)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded text-xs font-semibold border ${getShiftColor('evening')}`}>
                Evening (2 PM - 9 PM)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded text-xs font-semibold border ${getShiftColor('full')}`}>
                Full Day (9 AM - 6 PM)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded text-xs font-semibold border ${getShiftColor('off')}`}>
                Off
              </span>
            </div>
          </div>
        </div>

        {/* Weekly Schedule Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                    Staff Member
                  </th>
                  {weekDays.map(day => (
                    <th key={day} className="px-4 py-4 text-center text-sm font-semibold text-gray-900">
                      {day}
                    </th>
                  ))}
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {staff.map(member => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 sticky left-0 bg-white z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <Users className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    </td>
                    {weekDays.map(day => {
                      const dayKey = day.toLowerCase();
                      const shift = schedule[member.id]?.[dayKey];
                      return (
                        <td key={day} className="px-4 py-4">
                          {shift && (
                            <div className="text-center">
                              <span className={`inline-block px-3 py-1 rounded text-xs font-semibold border ${getShiftColor(shift.shift)}`}>
                                {shift.shift === 'off' ? 'Off' : shift.shift.charAt(0).toUpperCase() + shift.shift.slice(1)}
                              </span>
                              {shift.shift !== 'off' && (
                                <p className="text-xs text-gray-500 mt-1">{shift.hours}</p>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedStaff(member)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
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
      </div>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Staff Details</h3>
              <button
                onClick={() => setSelectedStaff(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Staff Info */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-10 h-10 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{selectedStaff.name}</h4>
                  <p className="text-gray-600">{selectedStaff.role} • {selectedStaff.department}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {selectedStaff.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {selectedStaff.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1 flex items-center gap-1">
                    <Award className="w-5 h-5" />
                    {selectedStaff.rating}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{selectedStaff.attendance}%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Shifts</p>
                  <p className="text-2xl font-bold text-indigo-600 mt-1">{selectedStaff.totalShifts}</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {selectedStaff.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {selectedStaff.certifications.map((cert, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Edit Details
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
