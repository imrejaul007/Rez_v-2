import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Share2,
  Bookmark,
  ExternalLink,
  Heart,
  MessageCircle,
  UserPlus,
  Bell,
  BellOff
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialEventDetails = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [isGoing, setIsGoing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);

  // Mock event data - replace with API call
  const event = {
    id: eventId,
    title: 'Weekend Shopping Festival',
    description: 'Join us for the biggest shopping festival of the season! Get ready for incredible deals, exclusive discounts, and amazing prizes. Don\'t miss out on the opportunity to save big while enjoying a fun-filled shopping experience.',
    longDescription: 'This year\'s Weekend Shopping Festival promises to be the biggest yet, featuring over 200 brands across fashion, electronics, home decor, and more. Enjoy live entertainment, food courts, and special activities for kids. Early bird shoppers get extra rewards!',
    image: '🛍️',
    date: 'Dec 28, 2024',
    endDate: 'Dec 29, 2024',
    time: '10:00 AM - 8:00 PM',
    location: 'Phoenix Mall, Bangalore',
    address: '14, Whitefield Main Road, Mahadevapura, Bangalore - 560048',
    organizer: {
      id: 1,
      name: 'Phoenix Mall Events',
      avatar: '🏢',
      verified: true
    },
    attendees: 234,
    interested: 567,
    categories: ['Shopping', 'Deals', 'Festival'],
    highlights: [
      'Up to 80% off on top brands',
      'Exclusive flash sales every hour',
      'Win prizes worth ₹1 lakh',
      'Free parking for all visitors',
      'Food & beverage discounts'
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Event Opening - Welcome Coffee' },
      { time: '11:00 AM', activity: 'First Flash Sale - Electronics' },
      { time: '1:00 PM', activity: 'Lunch Break - Food Court Offers' },
      { time: '3:00 PM', activity: 'Fashion Show - Latest Collections' },
      { time: '5:00 PM', activity: 'Grand Prize Draw' },
      { time: '7:00 PM', activity: 'Final Flash Sale - All Categories' }
    ]
  };

  const attendees = [
    { id: 1, name: 'Sarah K', avatar: '👩‍💼' },
    { id: 2, name: 'John D', avatar: '👨‍💼' },
    { id: 3, name: 'Emily C', avatar: '👩‍🎨' },
    { id: 4, name: 'Mike W', avatar: '👨‍🚀' },
    { id: 5, name: 'Lisa T', avatar: '👩‍💻' }
  ];

  const handleGoingToggle = () => {
    // API: POST /api/social/events/{eventId}/attend
    // TODO: Implement attend event with backend
    setIsGoing(!isGoing);
    if (!isGoing) {
      setIsNotificationsOn(true);
    }
  };

  const handleSaveToggle = () => {
    // API: POST /api/social/events/{eventId}/save
    // TODO: Implement save event with backend
    setIsSaved(!isSaved);
  };

  const handleShare = () => {
    // API: POST /api/social/events/{eventId}/share
    // TODO: Implement share event with backend
    console.log('Share event');
  };

  const handleGetDirections = () => {
    // Open maps app with location
    console.log('Get directions');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveToggle}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <Bookmark
                className={`w-5 h-5 ${
                  isSaved ? 'fill-blue-500 text-blue-500' : 'text-rez-navy dark:text-white'
                }`}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {/* Event Cover */}
        <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-8xl">
          {event.image}
        </div>

        <div className="px-4 space-y-5">
          {/* Title & Category */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {event.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 rounded-rez-lg bg-blue-50 dark:bg-blue-500/10 text-caption font-medium text-blue-600 dark:text-blue-400"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">
              {event.title}
            </h1>
            <p className="text-body text-rez-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </div>

          {/* Date & Time */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10">
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-1">Date & Time</h3>
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                  {event.date} {event.endDate && `- ${event.endDate}`}
                </p>
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">{event.time}</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-500/10">
                <MapPin className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-1">Location</h3>
                <p className="text-body-sm font-medium text-rez-navy dark:text-white mb-1">
                  {event.location}
                </p>
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-3">
                  {event.address}
                </p>
                <button
                  onClick={handleGetDirections}
                  className="flex items-center gap-2 text-body-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Organizer */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-3">Organized by</h3>
            <button
              onClick={() => navigate(`/social/profile/${event.organizer.id}`)}
              className="flex items-center gap-3 w-full text-left"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                {event.organizer.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-body font-semibold text-rez-navy dark:text-white">
                    {event.organizer.name}
                  </h4>
                  {event.organizer.verified && (
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <div className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">
                {event.attendees}
              </div>
              <div className="text-caption text-rez-gray-600 dark:text-gray-400">Going</div>
            </div>
            <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
              <Heart className="w-6 h-6 mx-auto mb-2 text-pink-500" />
              <div className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">
                {event.interested}
              </div>
              <div className="text-caption text-rez-gray-600 dark:text-gray-400">Interested</div>
            </div>
          </div>

          {/* About */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-3">About Event</h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {event.longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-3">Event Highlights</h3>
            <ul className="space-y-2">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-3">Event Schedule</h3>
            <div className="space-y-3">
              {event.schedule.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="shrink-0 w-20 text-body-sm font-medium text-blue-500">
                    {item.time}
                  </div>
                  <div className="flex-1 text-body-sm text-rez-gray-600 dark:text-gray-400">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendees */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                Attendees ({event.attendees})
              </h3>
              <button className="text-body-sm font-medium text-blue-500 hover:text-blue-600">
                View all
              </button>
            </div>
            <div className="flex items-center gap-2">
              {attendees.map((attendee) => (
                <div
                  key={attendee.id}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl"
                  title={attendee.name}
                >
                  {attendee.avatar}
                </div>
              ))}
              {event.attendees > attendees.length && (
                <div className="w-10 h-10 rounded-full bg-rez-gray-200 dark:bg-white/10 flex items-center justify-center text-caption font-semibold text-rez-gray-600 dark:text-gray-400">
                  +{event.attendees - attendees.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-black border-t border-rez-gray-200 dark:border-white/10 pb-safe">
        <button
          onClick={handleGoingToggle}
          className={`w-full py-4 rounded-rez-xl font-bold transition-all ${
            isGoing
              ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-rez-card'
          }`}
        >
          {isGoing ? 'Cancel Attendance' : 'I\'m Going'}
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialEventDetails;
