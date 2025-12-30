import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Ticket, TrendingUp, Star, Music, Film, Palette, Dumbbell, Heart, Search, Filter } from 'lucide-react';
import BottomNav from '../../../components/lifestyle/BottomNav';

export default function EventsHub() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'concerts', name: 'Concerts', icon: Music },
    { id: 'movies', name: 'Movies', icon: Film },
    { id: 'workshops', name: 'Workshops', icon: Palette },
    { id: 'sports', name: 'Sports', icon: Dumbbell },
    { id: 'experiences', name: 'Experiences', icon: Star }
  ];

  const featuredEvents = [
    {
      id: 1,
      title: 'Coldplay Live in Mumbai',
      category: 'concerts',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
      date: 'Jan 25, 2025',
      time: '7:00 PM',
      venue: 'DY Patil Stadium',
      location: 'Mumbai',
      price: '₹2,499',
      trending: true,
      attendees: 45000,
      likes: 12400,
      tags: ['Live Music', 'International', 'Sold Out']
    },
    {
      id: 2,
      title: 'Fighter - First Day First Show',
      category: 'movies',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
      date: 'Jan 26, 2025',
      time: '9:00 AM',
      venue: 'PVR ICON',
      location: 'Delhi',
      price: '₹350',
      trending: false,
      attendees: 120,
      likes: 850,
      tags: ['IMAX', 'Bollywood', 'Action']
    },
    {
      id: 3,
      title: 'Photography Masterclass',
      category: 'workshops',
      image: 'https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=600&h=400&fit=crop',
      date: 'Feb 2, 2025',
      time: '10:00 AM',
      venue: 'Creative Studio',
      location: 'Bangalore',
      price: '₹1,999',
      trending: false,
      attendees: 25,
      likes: 340,
      tags: ['Photography', 'Beginner Friendly', 'Certificate']
    },
    {
      id: 4,
      title: 'Hot Air Balloon Experience',
      category: 'experiences',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop',
      date: 'Feb 10, 2025',
      time: '6:00 AM',
      venue: 'Lonavala Hills',
      location: 'Pune',
      price: '₹8,999',
      trending: true,
      attendees: 12,
      likes: 2100,
      tags: ['Adventure', 'Luxury', 'Sunrise']
    }
  ];

  const upcomingEvents = [
    {
      id: 5,
      title: 'Stand-up Comedy Night',
      date: 'Jan 28, 2025',
      venue: 'Canvas Laugh Club',
      location: 'Mumbai',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Wine Tasting Evening',
      date: 'Feb 5, 2025',
      venue: 'The Wine Park',
      location: 'Gurgaon',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop'
    },
    {
      id: 7,
      title: 'Yoga & Meditation Retreat',
      date: 'Feb 12-14, 2025',
      venue: 'Isha Foundation',
      location: 'Coimbatore',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=200&fit=crop'
    }
  ];

  const filteredEvents = selectedCategory === 'all'
    ? featuredEvents
    : featuredEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-2xl font-bold mb-2">Discover Events</h1>
          <p className="text-blue-100 text-sm">Experiences that create memories</p>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Search events, venues, artists..."
              className="flex-1 bg-transparent text-white placeholder-blue-200 outline-none"
            />
            <button className="p-2 bg-white/20 rounded-lg">
              <Filter className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 pb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white text-blue-600'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Featured Events */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Featured Events</h2>
            <button className="text-sm text-blue-600 font-semibold">See All</button>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => navigate(`/lifestyle/events/${event.id}`)}
                className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  {event.trending && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}, {event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees.toLocaleString()} attending</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Starting from</div>
                      <div className="text-xl font-bold text-blue-600">{event.price}</div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2">
                      <Ticket className="w-4 h-4" />
                      Book Now
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Near You</h2>
          <div className="grid grid-cols-1 gap-4">
            {upcomingEvents.map((event) => (
              <button
                key={event.id}
                className="bg-white rounded-xl p-3 border border-gray-200 hover:shadow-lg transition-all flex gap-3"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                  <div className="text-xs text-gray-600 mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.venue}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-blue-600">{event.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
