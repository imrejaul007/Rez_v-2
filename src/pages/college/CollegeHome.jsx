import { useState } from 'react';
import { GraduationCap, Book, Users, Calendar, Award, TrendingUp, Star, MapPin } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

// Backend API: GET /api/college/dashboard
// Backend API: GET /api/college/events
// Backend API: GET /api/college/offers

export default function CollegeHome() {
  const [activeTab, setActiveTab] = useState('deals');

  const stats = {
    studentDiscounts: 450,
    activeEvents: 23,
    partnersNearby: 67,
    coinsSaved: 12450
  };

  const deals = [
    {
      id: 1,
      merchant: 'Campus Cafe',
      discount: '25% OFF',
      category: 'Food & Dining',
      validUntil: '2026-01-31',
      coins: 200,
      image: '☕'
    },
    {
      id: 2,
      merchant: 'Tech Store',
      discount: '15% Student Discount',
      category: 'Electronics',
      validUntil: '2026-02-15',
      coins: 500,
      image: '💻'
    },
    {
      id: 3,
      merchant: 'Bookstore',
      discount: 'Buy 2 Get 1 Free',
      category: 'Books',
      validUntil: '2026-01-20',
      coins: 300,
      image: '📚'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Tech Fest 2026',
      date: '2026-02-10',
      location: 'Main Auditorium',
      attendees: 450,
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Sports Day',
      date: '2026-02-15',
      location: 'Sports Ground',
      attendees: 320,
      category: 'Sports'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-10 h-10" />
          <div>
            <h1 className="text-2xl font-bold">College Zone</h1>
            <p className="text-indigo-100">Exclusive student benefits</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <div className="text-2xl font-bold">{stats.studentDiscounts}</div>
            <div className="text-indigo-100 text-sm">Student Deals</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <div className="text-2xl font-bold">{stats.activeEvents}</div>
            <div className="text-indigo-100 text-sm">Campus Events</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['deals', 'events', 'partners'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Deals Tab */}
        {activeTab === 'deals' && (
          <div className="space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{deal.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{deal.merchant}</h3>
                        <p className="text-sm text-gray-600">{deal.category}</p>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold">
                        {deal.discount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Valid until {deal.validUntil}</span>
                      <div className="flex items-center gap-1 text-purple-600">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{deal.coins} coins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === 'partners' && (
          <div className="bg-white rounded-xl p-6 text-center">
            <MapPin className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">{stats.partnersNearby} Partners Nearby</h3>
            <p className="text-gray-600 mb-4">Discover student-friendly places around campus</p>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
              View Map
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
