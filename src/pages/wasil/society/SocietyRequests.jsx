import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

// Society+ Requests
// Backend API: GET /api/wasil/society/requests

const SocietyRequests = () => {
  const requests = [
    {
      id: 1,
      service: 'Plumbing',
      professional: 'Rajesh Kumar',
      issue: 'Kitchen tap leaking',
      date: 'Jan 16',
      time: '2:00 PM',
      status: 'scheduled',
      price: 299
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Requests</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800">{request.service}</h3>
                <p className="text-sm text-gray-500">{request.professional}</p>
                <p className="text-sm text-gray-600 mt-1">{request.issue}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                Scheduled
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {request.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {request.time}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <p className="font-bold text-gray-800">₹{request.price}</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocietyRequests;
