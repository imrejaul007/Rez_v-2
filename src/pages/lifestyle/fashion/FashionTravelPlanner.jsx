import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, MapPin, Calendar, Sun, Cloud, CloudRain, Plus, CheckCircle, ShoppingBag, ChevronLeft, Shirt, Users, Camera, Coffee, Mountain } from 'lucide-react';
import BottomNav from '../../../components/lifestyle/BottomNav';

export default function FashionTravelPlanner() {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock trips
  const trips = [
    {
      id: 1,
      destination: 'Goa Beach',
      dates: 'Jan 25-30, 2025',
      days: 6,
      weather: 'sunny',
      avgTemp: '28°C',
      activities: ['beach', 'party', 'casual'],
      outfits: 12,
      packed: 8,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      destination: 'Manali Mountains',
      dates: 'Feb 10-14, 2025',
      days: 5,
      weather: 'cold',
      avgTemp: '8°C',
      activities: ['hiking', 'sightseeing', 'casual'],
      outfits: 10,
      packed: 0,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    }
  ];

  const packingLists = {
    beach: {
      essentials: [
        { item: 'Swimwear', count: 2, owned: true },
        { item: 'Flip Flops', count: 1, owned: true },
        { item: 'Sundresses', count: 3, owned: false },
        { item: 'Sunglasses', count: 1, owned: true },
        { item: 'Beach Cover-up', count: 2, owned: false }
      ],
      outfits: [
        { day: 'Day 1 - Arrival', casual: true, items: ['White T-Shirt', 'Denim Shorts', 'Sandals'] },
        { day: 'Day 2 - Beach Day', casual: true, items: ['Swimwear', 'Beach Cover-up', 'Flip Flops'] },
        { day: 'Day 3 - Party Night', party: true, items: ['Floral Dress', 'Heels', 'Clutch'] }
      ]
    }
  };

  const activityIcons = {
    beach: Sun,
    party: Users,
    casual: Coffee,
    hiking: Mountain,
    sightseeing: Camera
  };

  const weatherIcons = {
    sunny: Sun,
    cold: Cloud,
    rainy: CloudRain
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Travel Planner</h1>
            <button
              onClick={() => setShowCreateModal(true)}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>

          <p className="text-blue-100 text-sm">
            Plan your travel wardrobe based on destination & weather
          </p>
        </div>
      </div>

      {/* Trips */}
      <div className="px-4 py-6 space-y-6">
        {trips.map((trip) => {
          const WeatherIcon = weatherIcons[trip.weather];
          const progress = Math.round((trip.packed / trip.outfits) * 100);

          return (
            <div key={trip.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              {/* Trip Image */}
              <div className="relative h-40">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    {trip.dates}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{trip.destination}</h3>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <WeatherIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{trip.avgTemp}</span>
                </div>
              </div>

              {/* Trip Details */}
              <div className="p-4">
                {/* Activities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {trip.activities.map((activity, idx) => {
                    const Icon = activityIcons[activity];
                    return (
                      <div key={idx} className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {Icon && <Icon className="w-3 h-3" />}
                        <span className="capitalize">{activity}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Packing Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Packing Progress</span>
                    <span className="text-sm font-bold text-purple-600">{trip.packed}/{trip.outfits} outfits</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">{trip.days}</div>
                    <div className="text-xs text-gray-500">Days</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">{trip.outfits}</div>
                    <div className="text-xs text-gray-500">Outfits</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">{trip.activities.length}</div>
                    <div className="text-xs text-gray-500">Activities</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50">
                    <Shirt className="w-5 h-5" />
                    View Packing List
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700">
                    <ShoppingBag className="w-5 h-5" />
                    Shop Missing Items
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Create Trip CTA */}
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-purple-600 hover:bg-purple-50 transition-all"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Plane className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Plan a New Trip</h3>
          <p className="text-sm text-gray-500">Get AI-powered packing suggestions</p>
        </button>

        {/* Tips */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-3">Travel Packing Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Pack versatile pieces that mix & match</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Check weather forecast 2 days before departure</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Use packing cubes to organize by activity</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Create Trip Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Trip</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g., Goa, Paris, Bali"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Activities</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Beach', 'Hiking', 'Party', 'Sightseeing', 'Business', 'Casual'].map((activity) => (
                    <button
                      key={activity}
                      className="px-4 py-2 border-2 border-gray-300 rounded-xl text-sm hover:border-purple-600 hover:bg-purple-50"
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg">
                Generate Plan
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
