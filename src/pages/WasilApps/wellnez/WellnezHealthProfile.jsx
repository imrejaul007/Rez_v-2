import React from 'react';
import { Heart, Activity, TrendingUp, Calendar } from 'lucide-react';

// Wellnez Health Profile
// Backend API: GET /api/wasil/wellnez/profile

const WellnezHealthProfile = () => {
  const profile = {
    name: 'Rajesh Kumar',
    age: 35,
    bloodType: 'O+',
    weight: 75,
    height: 175
  };

  const vitals = [
    { name: 'Blood Pressure', value: '120/80', status: 'normal', icon: '💓' },
    { name: 'Heart Rate', value: '72 bpm', status: 'normal', icon: '❤️' },
    { name: 'Blood Sugar', value: '95 mg/dL', status: 'normal', icon: '🩸' }
  ];

  const appointments = [
    { id: 1, type: 'Doctor Consultation', doctor: 'Dr. Kumar', date: 'Jan 18', time: '10:00 AM' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-4 pt-6 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Health Profile</h1>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-4">
          <h2 className="text-white font-bold text-lg">{profile.name}</h2>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div>
              <p className="text-white/80 text-xs">Age</p>
              <p className="text-white font-bold">{profile.age}</p>
            </div>
            <div>
              <p className="text-white/80 text-xs">Blood Type</p>
              <p className="text-white font-bold">{profile.bloodType}</p>
            </div>
            <div>
              <p className="text-white/80 text-xs">Weight</p>
              <p className="text-white font-bold">{profile.weight} kg</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Recent Vitals</h2>
        <div className="space-y-3">
          {vitals.map((vital, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{vital.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800">{vital.name}</h3>
                    <p className="text-lg font-bold text-teal-600">{vital.value}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  Normal
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Upcoming Appointments</h2>
        <div className="space-y-3">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-bold text-gray-800">{apt.type}</h3>
              <p className="text-sm text-gray-500">{apt.doctor}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {apt.date}
                </span>
                <span>{apt.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnezHealthProfile;
