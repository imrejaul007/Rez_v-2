import { useState } from 'react';
import { MapPin, Store, Users, TrendingUp, Calendar, Bell, CheckCircle, Clock, Target } from 'lucide-react';

export default function OperationsCityDashboard() {
  const [selectedCity, setSelectedCity] = useState('mumbai');

  const [cityData] = useState({
    mumbai: {
      name: 'Mumbai',
      manager: 'Rajesh Kumar',
      teamSize: 12,
      merchants: 2345,
      activeUsers: 45678,
      todayGMV: 567890,
      events: 3,
      pendingOnboarding: 23
    },
    delhi: {
      name: 'Delhi',
      manager: 'Priya Sharma',
      teamSize: 10,
      merchants: 1876,
      activeUsers: 34567,
      todayGMV: 456789,
      events: 2,
      pendingOnboarding: 18
    }
  });

  const [todayTasks] = useState([
    { id: 1, task: 'Onboard 5 new merchants in Andheri', assignedTo: 'Amit', status: 'in_progress', priority: 'high' },
    { id: 2, task: 'IIT Mumbai Tech Fest coordination', assignedTo: 'Sneha', status: 'pending', priority: 'high' },
    { id: 3, task: 'Merchant training session - Powai', assignedTo: 'Vikram', status: 'completed', priority: 'medium' }
  ]);

  const [localEvents] = useState([
    { name: 'IIT Mumbai Tech Fest', date: '2024-02-15', merchants: 25, expectedFootfall: 5000, status: 'upcoming' },
    { name: 'Andheri Food Festival', date: '2024-02-20', merchants: 40, expectedFootfall: 8000, status: 'planning' }
  ]);

  const city = cityData[selectedCity];

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-100 text-green-700',
      in_progress: 'bg-yellow-100 text-yellow-700',
      pending: 'bg-blue-100 text-blue-700',
      upcoming: 'bg-purple-100 text-purple-700',
      planning: 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">City Operations Dashboard</h1>
              <p className="text-blue-100">Ground operations, local events & team management</p>
            </div>
          </div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30"
          >
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Store className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold">{city.merchants}</div>
            <div className="text-sm text-blue-200">Active Merchants</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold">{(city.activeUsers / 1000).toFixed(0)}K</div>
            <div className="text-sm text-blue-200">Active Users</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold">₹{(city.todayGMV / 1000).toFixed(0)}K</div>
            <div className="text-sm text-blue-200">Today's GMV</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-2xl font-bold">{city.events}</div>
            <div className="text-sm text-blue-200">Upcoming Events</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-left">
            <Store className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Add Merchant</h3>
            <p className="text-sm text-gray-600">Quick onboarding for local merchants</p>
          </button>
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-left">
            <Calendar className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Create Event</h3>
            <p className="text-sm text-gray-600">Setup local events & campaigns</p>
          </button>
          <button className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow text-left">
            <Bell className="w-8 h-8 text-yellow-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Send Push</h3>
            <p className="text-sm text-gray-600">Hyperlocal notifications to users</p>
          </button>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Tasks</h2>
          <div className="space-y-3">
            {todayTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 flex-1">
                  {task.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Clock className="w-5 h-5 text-yellow-600" />
                  )}
                  <div className="flex-1">
                    <h3 className={`font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {task.task}
                    </h3>
                    <p className="text-sm text-gray-600">Assigned to: {task.assignedTo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {task.priority.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Local Events */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Local Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localEvents.map((event, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{event.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-600">Date</div>
                    <div className="font-medium">{event.date}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Merchants</div>
                    <div className="font-medium">{event.merchants}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Footfall</div>
                    <div className="font-medium">{event.expectedFootfall}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Onboarding */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Pending Merchant Onboarding</h2>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
              {city.pendingOnboarding} Pending
            </span>
          </div>
          <p className="text-gray-600">Review and approve merchant applications for {city.name}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Queue
          </button>
        </div>
      </div>
    </div>
  );
}
