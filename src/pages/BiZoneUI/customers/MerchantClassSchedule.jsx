import { useState } from 'react';
import { Search, Plus, Calendar, Users, Clock, TrendingUp, CheckCircle, XCircle, AlertCircle, Download, Edit, Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantClassSchedule() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [showCreateClass, setShowCreateClass] = useState(false);

  // Weekly Schedule
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const classes = [
    {
      id: 'class-001',
      name: 'Power Yoga',
      instructor: 'Priya Sharma',
      category: 'Yoga',
      day: 'Monday',
      startTime: '06:00',
      endTime: '07:00',
      duration: 60,
      capacity: 20,
      enrolled: 18,
      waitlist: 3,
      room: 'Studio A',
      level: 'Intermediate',
      status: 'active',
      recurring: true,
      color: 'purple'
    },
    {
      id: 'class-002',
      name: 'Zumba Dance',
      instructor: 'Rahul Verma',
      category: 'Dance',
      day: 'Monday',
      startTime: '07:30',
      endTime: '08:30',
      duration: 60,
      capacity: 25,
      enrolled: 22,
      waitlist: 5,
      room: 'Studio B',
      level: 'All Levels',
      status: 'active',
      recurring: true,
      color: 'pink'
    },
    {
      id: 'class-003',
      name: 'CrossFit HIIT',
      instructor: 'Vikram Singh',
      category: 'CrossFit',
      day: 'Monday',
      startTime: '09:00',
      endTime: '10:00',
      duration: 60,
      capacity: 15,
      enrolled: 15,
      waitlist: 8,
      room: 'Gym Floor',
      level: 'Advanced',
      status: 'full',
      recurring: true,
      color: 'red'
    },
    {
      id: 'class-004',
      name: 'Pilates Core',
      instructor: 'Anjali Patel',
      category: 'Pilates',
      day: 'Monday',
      startTime: '17:00',
      endTime: '18:00',
      duration: 60,
      capacity: 12,
      enrolled: 8,
      waitlist: 0,
      room: 'Studio A',
      level: 'Beginner',
      status: 'active',
      recurring: true,
      color: 'blue'
    },
    {
      id: 'class-005',
      name: 'Kickboxing',
      instructor: 'Rahul Verma',
      category: 'Martial Arts',
      day: 'Tuesday',
      startTime: '06:00',
      endTime: '07:00',
      duration: 60,
      capacity: 18,
      enrolled: 14,
      waitlist: 0,
      room: 'Gym Floor',
      level: 'Intermediate',
      status: 'active',
      recurring: true,
      color: 'orange'
    },
    {
      id: 'class-006',
      name: 'Vinyasa Flow',
      instructor: 'Priya Sharma',
      category: 'Yoga',
      day: 'Tuesday',
      startTime: '18:00',
      endTime: '19:00',
      duration: 60,
      capacity: 20,
      enrolled: 16,
      waitlist: 2,
      room: 'Studio A',
      level: 'All Levels',
      status: 'active',
      recurring: true,
      color: 'purple'
    },
    {
      id: 'class-007',
      name: 'Strength Training',
      instructor: 'Vikram Singh',
      category: 'Gym',
      day: 'Wednesday',
      startTime: '07:00',
      endTime: '08:00',
      duration: 60,
      capacity: 12,
      enrolled: 10,
      waitlist: 0,
      room: 'Gym Floor',
      level: 'Intermediate',
      status: 'active',
      recurring: true,
      color: 'green'
    },
    {
      id: 'class-008',
      name: 'Meditation & Mindfulness',
      instructor: 'Anjali Patel',
      category: 'Wellness',
      day: 'Thursday',
      startTime: '06:30',
      endTime: '07:30',
      duration: 60,
      capacity: 30,
      enrolled: 12,
      waitlist: 0,
      room: 'Studio A',
      level: 'All Levels',
      status: 'active',
      recurring: true,
      color: 'teal'
    },
    {
      id: 'class-009',
      name: 'Spin Class',
      instructor: 'Rahul Verma',
      category: 'Cardio',
      day: 'Friday',
      startTime: '06:00',
      endTime: '06:45',
      duration: 45,
      capacity: 20,
      enrolled: 19,
      waitlist: 4,
      room: 'Spin Studio',
      level: 'All Levels',
      status: 'active',
      recurring: true,
      color: 'yellow'
    },
    {
      id: 'class-010',
      name: 'Weekend Yoga Retreat',
      instructor: 'Priya Sharma',
      category: 'Yoga',
      day: 'Saturday',
      startTime: '08:00',
      endTime: '10:00',
      duration: 120,
      capacity: 25,
      enrolled: 23,
      waitlist: 6,
      room: 'Outdoor',
      level: 'All Levels',
      status: 'active',
      recurring: true,
      color: 'purple'
    }
  ];

  // Instructors
  const instructors = [
    {
      id: 'inst-001',
      name: 'Priya Sharma',
      specialization: 'Yoga & Pilates',
      classes: 8,
      rating: 4.9,
      students: 145,
      availability: ['Monday', 'Tuesday', 'Thursday', 'Saturday']
    },
    {
      id: 'inst-002',
      name: 'Rahul Verma',
      specialization: 'Zumba & Kickboxing',
      classes: 6,
      rating: 4.8,
      students: 132,
      availability: ['Monday', 'Tuesday', 'Friday', 'Sunday']
    },
    {
      id: 'inst-003',
      name: 'Vikram Singh',
      specialization: 'CrossFit & Strength',
      classes: 5,
      rating: 4.9,
      students: 98,
      availability: ['Monday', 'Wednesday', 'Friday', 'Saturday']
    },
    {
      id: 'inst-004',
      name: 'Anjali Patel',
      specialization: 'Pilates & Wellness',
      classes: 4,
      rating: 4.7,
      students: 87,
      availability: ['Monday', 'Thursday', 'Saturday', 'Sunday']
    }
  ];

  // Analytics
  const analytics = {
    totalClasses: 45,
    totalCapacity: 780,
    totalEnrolled: 634,
    utilizationRate: 81.3,
    waitlistTotal: 42,
    peakHours: ['06:00-08:00', '17:00-19:00'],
    mostPopular: 'Power Yoga',
    avgClassSize: 14
  };

  // Capacity Insights
  const capacityInsights = [
    {
      priority: 'high',
      message: 'CrossFit HIIT (Monday 9am) is at 100% capacity with 8 waitlisted',
      action: 'Add another session',
      impact: '+8 enrollments'
    },
    {
      priority: 'medium',
      message: 'Meditation class has only 40% utilization',
      action: 'Reduce capacity or improve marketing',
      impact: 'Optimize resources'
    },
    {
      priority: 'low',
      message: 'Weekend Yoga Retreat is performing well',
      action: 'Consider adding Sunday session',
      impact: '+25 potential enrollments'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'full': return 'bg-red-100 text-red-700';
      case 'cancelled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getUtilizationColor = (percentage) => {
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getClassesByDay = (day) => {
    return classes.filter(c => c.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <MerchantNav />
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Class Schedule & Capacity
            </h1>
            <p className="text-gray-600 mt-1">Manage classes, schedules & capacity planning</p>
          </div>
          <button
            onClick={() => setShowCreateClass(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Class
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Classes</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.totalClasses}</p>
              <p className="text-blue-600 text-sm mt-1">This week</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Utilization Rate</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.utilizationRate}%</p>
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +5% from last week
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Enrolled</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.totalEnrolled}</p>
              <p className="text-purple-600 text-sm mt-1">of {analytics.totalCapacity} capacity</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Waitlist</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.waitlistTotal}</p>
              <p className="text-orange-600 text-sm mt-1">Across {classes.filter(c => c.waitlist > 0).length} classes</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'schedule', label: 'Weekly Schedule', icon: Calendar },
            { id: 'classes', label: 'All Classes', icon: Users },
            { id: 'instructors', label: 'Instructors', icon: Users },
            { id: 'capacity', label: 'Capacity Analytics', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-bold text-gray-900">Current Week</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm flex items-center gap-2">
                  <Copy className="w-4 h-4" />
                  Duplicate Week
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-3">
              {weekDays.map((day, idx) => {
                const dayClasses = getClassesByDay(day);
                const dayCapacity = dayClasses.reduce((sum, c) => sum + c.capacity, 0);
                const dayEnrolled = dayClasses.reduce((sum, c) => sum + c.enrolled, 0);
                const utilization = dayCapacity > 0 ? Math.round((dayEnrolled / dayCapacity) * 100) : 0;

                return (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 p-3">
                    <div className="mb-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{day}</h4>
                      <p className="text-xs text-gray-600">{dayClasses.length} classes</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${utilization >= 90 ? 'bg-red-500' : utilization >= 75 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${utilization}%` }}
                          />
                        </div>
                        <span className={`text-xs font-bold ${getUtilizationColor(utilization)}`}>
                          {utilization}%
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {dayClasses.map(cls => (
                        <div
                          key={cls.id}
                          className={`bg-gradient-to-r from-${cls.color}-50 to-${cls.color}-100 border border-${cls.color}-200 rounded-lg p-2 cursor-pointer hover:shadow-md transition-all`}
                        >
                          <div className="flex items-start justify-between mb-1">
                            <p className="font-bold text-gray-900 text-xs leading-tight">{cls.name}</p>
                            {cls.status === 'full' && (
                              <span className="px-1.5 py-0.5 bg-red-500 text-white rounded text-xs font-medium">FULL</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{cls.startTime} - {cls.endTime}</p>
                          <p className="text-xs text-gray-600 mb-1">{cls.instructor}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-900">{cls.enrolled}/{cls.capacity}</span>
                            {cls.waitlist > 0 && (
                              <span className="text-xs text-orange-600 font-medium">+{cls.waitlist} wait</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Classes Tab */}
        {activeTab === 'classes' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search classes..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                <option>Yoga</option>
                <option>CrossFit</option>
                <option>Dance</option>
                <option>Martial Arts</option>
              </select>
            </div>

            <div className="space-y-3">
              {classes.map(cls => {
                const utilization = Math.round((cls.enrolled / cls.capacity) * 100);
                return (
                  <div key={cls.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{cls.name}</h4>
                        <p className="text-sm text-gray-600">{cls.instructor} • {cls.category}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cls.status)}`}>
                        {cls.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-3 bg-gray-50 rounded-xl p-4">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Schedule</p>
                        <p className="font-medium text-gray-900 text-sm">{cls.day}</p>
                        <p className="text-xs text-gray-600">{cls.startTime}-{cls.endTime}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Capacity</p>
                        <p className="font-medium text-gray-900 text-sm">{cls.enrolled}/{cls.capacity}</p>
                        <p className={`text-xs font-bold ${getUtilizationColor(utilization)}`}>{utilization}% full</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Waitlist</p>
                        <p className="font-medium text-gray-900 text-sm">{cls.waitlist} students</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Room</p>
                        <p className="font-medium text-gray-900 text-sm">{cls.room}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Level</p>
                        <p className="font-medium text-gray-900 text-sm">{cls.level}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Duration: <span className="font-medium text-gray-900">{cls.duration} mins</span></span>
                        {cls.recurring && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">RECURRING</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm flex items-center gap-2">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Instructors Tab */}
        {activeTab === 'instructors' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructors.map(instructor => (
                <div key={instructor.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {instructor.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{instructor.name}</h3>
                        <p className="text-sm text-gray-600">{instructor.specialization}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium text-gray-900 text-sm">{instructor.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Classes</p>
                      <p className="text-2xl font-bold text-gray-900">{instructor.classes}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Students</p>
                      <p className="text-2xl font-bold text-gray-900">{instructor.students}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Rating</p>
                      <p className="text-2xl font-bold text-gray-900">{instructor.rating}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-gray-700 mb-2">Available Days:</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.availability.map((day, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Capacity Analytics Tab */}
        {activeTab === 'capacity' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Capacity Optimization Insights</h3>
            <div className="space-y-4">
              {capacityInsights.map((insight, idx) => (
                <div key={idx} className={`bg-white rounded-xl border-2 ${insight.priority === 'high' ? 'border-red-300' : insight.priority === 'medium' ? 'border-yellow-300' : 'border-green-300'} p-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <AlertCircle className={`w-6 h-6 ${insight.priority === 'high' ? 'text-red-600' : insight.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'}`} />
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${insight.priority === 'high' ? 'bg-red-100 text-red-700' : insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                        {insight.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 font-medium mb-2">{insight.message}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Recommended Action:</p>
                      <p className="font-bold text-blue-600">{insight.action}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Impact:</p>
                      <p className="font-bold text-green-600">{insight.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
