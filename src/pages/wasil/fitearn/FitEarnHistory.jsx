import React, { useState } from 'react';
import {
  Calendar, Clock, MapPin, Star, ChevronRight, Filter,
  CheckCircle, XCircle, Download, Share2, Award, TrendingUp
} from 'lucide-react';

// FitEarn History: View Past & Upcoming Bookings
// Backend API: GET /api/wasil/fitearn/bookings/history
// Backend API: GET /api/wasil/fitearn/bookings/upcoming
// Backend API: POST /api/wasil/fitearn/bookings/:id/cancel
// Backend API: GET /api/wasil/fitearn/stats

const FitEarnHistory = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const stats = {
    totalClasses: 42,
    thisMonth: 12,
    totalEarned: 1260,
    streak: 7
  };

  const upcoming = [
    {
      id: 1,
      type: 'class',
      name: 'Zumba Dance',
      instructor: 'Sarah Khan',
      gym: 'Cult.fit Studio',
      date: 'Tomorrow, Jan 16',
      time: '6:00 PM',
      duration: '60 min',
      location: 'HSR Layout',
      status: 'confirmed',
      coins: 30,
      image: '💃'
    },
    {
      id: 2,
      type: 'class',
      name: 'Power Yoga',
      instructor: 'Ramesh Kumar',
      gym: 'Fitness First',
      date: 'Jan 18, Thu',
      time: '7:00 AM',
      duration: '45 min',
      location: 'Koramangala',
      status: 'confirmed',
      coins: 40,
      image: '🧘'
    },
    {
      id: 3,
      type: 'membership',
      name: 'Gold Gym Monthly',
      gym: "Gold's Gym",
      startDate: 'Jan 1',
      endDate: 'Jan 31',
      status: 'active',
      daysLeft: 16,
      image: '💪'
    }
  ];

  const completed = [
    {
      id: 1,
      name: 'CrossFit Training',
      instructor: 'Mike Johnson',
      gym: 'Cult.fit',
      date: 'Jan 14, Yesterday',
      time: '5:30 PM',
      coinsEarned: 60,
      rating: 5,
      image: '🏋️',
      status: 'attended'
    },
    {
      id: 2,
      name: 'Zumba Dance',
      instructor: 'Sarah Khan',
      gym: 'Cult.fit',
      date: 'Jan 12, 3 days ago',
      time: '6:00 PM',
      coinsEarned: 30,
      rating: 5,
      image: '💃',
      status: 'attended'
    },
    {
      id: 3,
      name: 'Power Yoga',
      instructor: 'Ramesh Kumar',
      gym: 'Fitness First',
      date: 'Jan 10, 5 days ago',
      time: '7:00 AM',
      coinsEarned: 40,
      rating: 4,
      image: '🧘',
      status: 'attended'
    },
    {
      id: 4,
      name: 'Spin Class',
      instructor: 'John Doe',
      gym: 'Cult.fit',
      date: 'Jan 8',
      time: '6:30 PM',
      coinsEarned: 0,
      rating: null,
      image: '🚴',
      status: 'cancelled'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">My Fitness Journey</h1>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{stats.totalClasses}</p>
            <p className="text-xs text-white/80 mt-1">Classes</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{stats.thisMonth}</p>
            <p className="text-xs text-white/80 mt-1">This Month</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{stats.totalEarned}</p>
            <p className="text-xs text-white/80 mt-1">Coins 🪙</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{stats.streak} 🔥</p>
            <p className="text-xs text-white/80 mt-1">Day Streak</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="flex px-4">
          {['upcoming', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Bookings */}
      {activeTab === 'upcoming' && (
        <div className="px-4 py-4">
          {upcoming.length > 0 ? (
            <div className="space-y-4">
              {upcoming.map((booking) => (
                <div key={booking.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {booking.type === 'class' ? (
                    <>
                      <div className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-3xl">
                            {booking.image}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-bold text-gray-800">{booking.name}</h3>
                                <p className="text-sm text-gray-500">{booking.instructor}</p>
                              </div>
                              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                                Confirmed
                              </span>
                            </div>
                            <div className="space-y-1 mt-2">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>{booking.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>{booking.time} ({booking.duration})</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{booking.gym}, {booking.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                            Cancel
                          </button>
                          <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
                            View Details
                          </button>
                        </div>
                        <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center">
                          <p className="text-xs text-yellow-800">
                            Attend to earn <span className="font-bold">{booking.coins}🪙 coins</span>
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-3xl">
                            {booking.image}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-bold text-gray-800">{booking.name}</h3>
                                <p className="text-sm text-gray-500">{booking.gym}</p>
                              </div>
                              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                                Active
                              </span>
                            </div>
                            <div className="space-y-1 mt-2">
                              <div className="text-sm text-gray-600">
                                <span>Valid: {booking.startDate} - {booking.endDate}</span>
                              </div>
                              <div className="text-sm text-orange-600 font-medium">
                                {booking.daysLeft} days remaining
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
                          View Membership
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <p className="text-gray-500">No upcoming bookings</p>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-medium">
                Browse Classes
              </button>
            </div>
          )}
        </div>
      )}

      {/* Completed History */}
      {activeTab === 'completed' && (
        <div className="px-4 py-4">
          <div className="space-y-4">
            {completed.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                    {booking.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-gray-800">{booking.name}</h3>
                        <p className="text-sm text-gray-500">{booking.instructor}</p>
                      </div>
                      {booking.status === 'attended' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{booking.gym}</span>
                      </div>
                    </div>

                    {booking.status === 'attended' && (
                      <>
                        {booking.rating ? (
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < booking.rating
                                      ? 'text-yellow-500 fill-yellow-500'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">Your Rating</span>
                            <div className="flex-1" />
                            <span className="text-green-600 text-sm font-medium">
                              +{booking.coinsEarned}🪙
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                            <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
                              Rate Class
                            </button>
                            <span className="text-green-600 text-sm font-medium">
                              +{booking.coinsEarned}🪙
                            </span>
                          </div>
                        )}
                      </>
                    )}

                    {booking.status === 'cancelled' && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm text-red-500">Cancelled</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FitEarnHistory;
