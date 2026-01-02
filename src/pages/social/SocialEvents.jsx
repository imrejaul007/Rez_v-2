import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Calendar,
  MapPin,
  Users,
  Clock,
  TrendingUp,
  Star,
  Filter,
  X,
  Plus
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialEvents = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock events data - replace with API call
  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekend Shopping Festival',
      description: 'Biggest sale of the season with up to 80% off',
      image: '🛍️',
      date: 'Dec 28, 2024',
      time: '10:00 AM - 8:00 PM',
      location: 'Phoenix Mall, Bangalore',
      attendees: 234,
      isGoing: true,
      isFeatured: true
    },
    {
      id: 2,
      title: 'Food & Beverage Expo',
      description: 'Taste the best cuisines and get exclusive food deals',
      image: '🍕',
      date: 'Dec 30, 2024',
      time: '11:00 AM - 9:00 PM',
      location: 'MG Road Convention Center',
      attendees: 456,
      isGoing: false,
      isTrending: true
    },
    {
      id: 3,
      title: 'Tech Gadgets Launch',
      description: 'Latest gadgets and tech products with launch offers',
      image: '💻',
      date: 'Jan 2, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Tech Hub, Whitefield',
      attendees: 189,
      isGoing: true,
      isFeatured: false
    },
    {
      id: 4,
      title: 'Fashion Week Deals',
      description: 'Designer brands at unbelievable prices',
      image: '👗',
      date: 'Jan 5, 2025',
      time: '12:00 PM - 10:00 PM',
      location: 'UB City Mall',
      attendees: 567,
      isGoing: false,
      isTrending: true
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Black Friday Mega Sale',
      description: 'Record-breaking deals and discounts',
      image: '🎉',
      date: 'Nov 24, 2024',
      time: '12:00 AM - 11:59 PM',
      location: 'Multiple Stores',
      attendees: 1234,
      isCompleted: true
    },
    {
      id: 6,
      title: 'Diwali Shopping Carnival',
      description: 'Festival special offers and celebrations',
      image: '🪔',
      date: 'Oct 31, 2024',
      time: '9:00 AM - 10:00 PM',
      location: 'City Center Mall',
      attendees: 892,
      isCompleted: true
    }
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGoingToggle = (eventId) => {
    // API: POST /api/social/events/{eventId}/attend
    // TODO: Implement attend event with backend
    console.log('Toggle attendance:', eventId);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Events</h1>
          </div>
          <button
            onClick={() => navigate('/social/events/create')}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'past'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
              className="w-full pl-12 pr-10 py-3 rounded-rez-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-rez-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-rez-gray-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-rez-xl overflow-hidden bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:shadow-rez-card transition-shadow"
            >
              <button
                onClick={() => navigate(`/social/events/${event.id}`)}
                className="w-full text-left"
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-7xl">
                  {event.image}
                  {event.isFeatured && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-rez-lg bg-amber-500 text-white flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span className="text-caption font-semibold">Featured</span>
                    </div>
                  )}
                  {event.isTrending && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-rez-lg bg-orange-500 text-white flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-caption font-semibold">Trending</span>
                    </div>
                  )}
                  {event.isCompleted && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-rez-lg bg-rez-gray-700 text-white">
                      <span className="text-caption font-semibold">Completed</span>
                    </div>
                  )}
                </div>

                {/* Event Info */}
                <div className="p-4">
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      {event.attendees} {event.isCompleted ? 'attended' : 'going'}
                    </div>
                  </div>

                  {!event.isCompleted && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGoingToggle(event.id);
                      }}
                      className={`w-full py-3 rounded-rez-xl font-semibold transition-all ${
                        event.isGoing
                          ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      }`}
                    >
                      {event.isGoing ? 'Cancel' : 'I\'m Going'}
                    </button>
                  )}
                </div>
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {searchQuery ? 'No events found' : activeTab === 'upcoming' ? 'No upcoming events' : 'No past events'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {searchQuery
                ? 'Try searching with different keywords'
                : activeTab === 'upcoming'
                  ? 'Check back later for new events'
                  : 'You haven\'t attended any events yet'}
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialEvents;
