import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Coins,
  Heart,
  CheckCircle,
  Share2,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Info
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialImpactEventDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const events = {
    '1': {
      type: 'blood-donation',
      title: 'Blood Donation Drive',
      icon: '🩸',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      organizer: 'Apollo Hospitals',
      logo: '🏥',
      date: 'Dec 28, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Apollo Hospital, Sector 18',
      fullAddress: 'Apollo Hospitals, Sector 18, Noida, Uttar Pradesh 201301',
      distance: '2.3 km',
      rewards: { rezCoins: 200, brandedCoins: 150, brandName: 'Apollo' },
      enrolled: 234,
      goal: 500,
      impact: 'Save 3 lives per donation',
      status: 'upcoming',
      description: 'Join us for a life-saving blood donation drive. Every donation can save up to 3 lives. Registered donors will receive health checkup and refreshments.',
      requirements: [
        'Age between 18-65 years',
        'Weight above 50kg',
        'Valid ID proof required',
        'No recent illness or medication',
        'Fasting not required, eat normally'
      ],
      benefits: [
        'Free health checkup',
        'Refreshments provided',
        'Blood donor certificate',
        'ReZ Coins + Apollo branded coins',
        'Priority access to blood bank if needed'
      ],
      contact: {
        phone: '+91-9876543210',
        email: 'blooddrive@apollo.com'
      },
      schedule: [
        { time: '9:00 AM', activity: 'Registration & Check-in' },
        { time: '9:30 AM', activity: 'Health Screening' },
        { time: '10:00 AM', activity: 'Blood Donation' },
        { time: '4:30 PM', activity: 'Refreshments & Certificate' }
      ]
    },
    '2': {
      type: 'tree-plantation',
      title: 'Tree Plantation Drive',
      icon: '🌳',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500',
      organizer: 'Green Earth Foundation',
      logo: '🌍',
      date: 'Dec 30, 2024',
      time: '7:00 AM - 11:00 AM',
      location: 'City Park, Botanical Gardens',
      fullAddress: 'Botanical Gardens, Sector 38, Noida, Uttar Pradesh 201303',
      distance: '4.1 km',
      rewards: { rezCoins: 150, brandedCoins: 100, brandName: 'Green Earth' },
      enrolled: 156,
      goal: 200,
      impact: 'Plant 1000+ saplings',
      status: 'upcoming',
      description: 'Help us make the city greener! Join our tree plantation drive and contribute to a sustainable future. Each participant will plant at least 5 saplings.',
      requirements: [
        'Comfortable outdoor clothing',
        'Closed-toe shoes required',
        'Bring your own water bottle',
        'Sun protection (hat, sunscreen)',
        'Minimum age 12 years (with guardian)'
      ],
      benefits: [
        'Contribute to environmental conservation',
        'Learn about native tree species',
        'Breakfast and refreshments',
        'Tree adoption certificate',
        'ReZ + Branded coins'
      ],
      contact: {
        phone: '+91-9876543211',
        email: 'events@greenearth.org'
      },
      schedule: [
        { time: '7:00 AM', activity: 'Assembly & Breakfast' },
        { time: '7:30 AM', activity: 'Site allocation & Tools distribution' },
        { time: '8:00 AM', activity: 'Plantation begins' },
        { time: '10:30 AM', activity: 'Certificates & Photo session' }
      ]
    },
    '3': {
      type: 'cleanup',
      title: 'Beach Cleanup Drive',
      icon: '🏖️',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      organizer: 'Clean Beaches Initiative',
      logo: '🌊',
      date: 'Jan 2, 2025',
      time: '6:00 AM - 9:00 AM',
      location: 'Marina Beach',
      fullAddress: 'Marina Beach, Chennai, Tamil Nadu 600001',
      distance: '8.5 km',
      rewards: { rezCoins: 120, brandedCoins: 80, brandName: 'Clean Beaches' },
      enrolled: 89,
      goal: 150,
      impact: 'Clean 5 km of coastline',
      status: 'upcoming',
      description: 'Join us in keeping our beaches clean! Participate in this beach cleanup drive and help protect marine life. All equipment will be provided.',
      requirements: [
        'Comfortable clothes you can get dirty',
        'Closed-toe shoes (no flip-flops)',
        'Sun protection essential',
        'Bring reusable water bottle',
        'Gloves will be provided'
      ],
      benefits: [
        'Protect marine ecosystem',
        'Morning refreshments',
        'Cleanup completion certificate',
        'ReZ + Branded coins',
        'Photo with collected waste stats'
      ],
      contact: {
        phone: '+91-9876543212',
        email: 'cleanup@cleanbeaches.org'
      },
      schedule: [
        { time: '6:00 AM', activity: 'Registration & Equipment' },
        { time: '6:30 AM', activity: 'Beach Cleanup begins' },
        { time: '8:30 AM', activity: 'Waste sorting & counting' },
        { time: '9:00 AM', activity: 'Certificates & Group photo' }
      ]
    },
    '4': {
      type: 'ngo-volunteer',
      title: 'Community Kitchen Volunteering',
      icon: '🍲',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      organizer: 'Feed the Need NGO',
      logo: '🤝',
      date: 'Every Sunday',
      time: '11:00 AM - 2:00 PM',
      location: 'Community Center, MG Road',
      fullAddress: 'Community Center, MG Road, Bangalore, Karnataka 560001',
      distance: '3.7 km',
      rewards: { rezCoins: 100, brandedCoins: 0 },
      enrolled: 45,
      goal: 100,
      impact: 'Feed 200+ people',
      status: 'ongoing',
      description: 'Help us serve nutritious meals to those in need. Volunteers assist in cooking, serving, and cleanup. A fulfilling way to give back to the community.',
      requirements: [
        'Available for 3 hours every Sunday',
        'Basic hygiene (hair tied, clean hands)',
        'Comfortable closed shoes',
        'Food handlers training provided',
        'Age 16+ (or with guardian)'
      ],
      benefits: [
        'Make real impact in community',
        'Free lunch provided',
        'Volunteer certificate (monthly)',
        'ReZ Coins weekly',
        'Meet like-minded people'
      ],
      contact: {
        phone: '+91-9876543213',
        email: 'volunteer@feedtheneed.org'
      },
      schedule: [
        { time: '11:00 AM', activity: 'Arrival & Briefing' },
        { time: '11:30 AM', activity: 'Food preparation begins' },
        { time: '12:30 PM', activity: 'Serving meals' },
        { time: '1:30 PM', activity: 'Cleanup & Debrief' }
      ]
    }
  };

  const event = events[id] || events['1'];

  const handleRegister = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setIsRegistered(true);
      setShowConfirmation(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{event.title}</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{event.organizer}</p>
          </div>
          <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
            <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Hero Image */}
        <div className={`p-8 rounded-rez-xl ${event.iconBg} flex items-center justify-center`}>
          <span className="text-8xl">{event.icon}</span>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Date</span>
            </div>
            <p className="text-body-sm font-semibold text-rez-navy dark:text-white">{event.date}</p>
          </div>
          <div className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-caption text-rez-gray-600 dark:text-gray-400">Time</span>
            </div>
            <p className="text-body-sm font-semibold text-rez-navy dark:text-white">{event.time}</p>
          </div>
        </div>

        {/* Location */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <div className="flex items-start gap-3 mb-3">
            <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">{event.location}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">{event.fullAddress}</p>
              <p className="text-caption text-blue-600 dark:text-blue-400 mt-2">{event.distance} away</p>
            </div>
          </div>
          <button className="w-full mt-3 py-2 rounded-rez-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-500/20 transition-colors">
            Open in Maps
          </button>
        </div>

        {/* Description */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">About This Event</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>
        </div>

        {/* Impact & Progress */}
        <div className="p-5 rounded-rez-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/30">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Expected Impact</h3>
          </div>
          <p className="text-body-sm text-emerald-700 dark:text-emerald-300 mb-4">{event.impact}</p>

          <div className="flex items-center justify-between mb-2">
            <span className="text-caption text-rez-gray-600 dark:text-gray-400">Participants</span>
            <span className="text-caption font-bold text-emerald-600 dark:text-emerald-400">
              {event.enrolled}/{event.goal}
            </span>
          </div>
          <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
              style={{ width: `${(event.enrolled / event.goal) * 100}%` }}
            />
          </div>
        </div>

        {/* Rewards */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Rewards
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-rez-lg bg-emerald-50 dark:bg-emerald-500/10">
              <div className="flex items-center gap-2">
                <span className="text-lg">💰</span>
                <span className="text-body-sm font-medium text-rez-navy dark:text-white">ReZ Coins</span>
              </div>
              <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">+{event.rewards.rezCoins}</span>
            </div>
            {event.rewards.brandedCoins > 0 && (
              <div className="flex items-center justify-between p-3 rounded-rez-lg bg-purple-50 dark:bg-purple-500/10">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏪</span>
                  <span className="text-body-sm font-medium text-rez-navy dark:text-white">{event.rewards.brandName} Coins</span>
                </div>
                <span className="text-h5 font-poppins text-purple-600 dark:text-purple-400">+{event.rewards.brandedCoins}</span>
              </div>
            )}
          </div>
        </div>

        {/* Requirements */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" />
            Requirements
          </h3>
          <div className="space-y-2">
            {event.requirements.map((req, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">{req}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            What You Get
          </h3>
          <div className="space-y-2">
            {event.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Event Schedule</h3>
          <div className="space-y-3">
            {event.schedule.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-20 shrink-0">
                  <p className="text-caption font-semibold text-blue-600 dark:text-blue-400">{item.time}</p>
                </div>
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Contact Organizer</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <a href={`tel:${event.contact.phone}`} className="text-body-sm text-blue-600 dark:text-blue-400 hover:underline">
                {event.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <a href={`mailto:${event.contact.email}`} className="text-body-sm text-blue-600 dark:text-blue-400 hover:underline">
                {event.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-rez-gray-200 dark:border-white/10">
          <button
            onClick={handleRegister}
            disabled={isRegistered || event.status === 'completed'}
            className={`w-full py-4 rounded-rez-xl font-bold transition-all ${
              isRegistered
                ? 'bg-green-500 text-white'
                : event.status === 'completed'
                ? 'bg-rez-gray-300 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-rez-card'
            }`}
          >
            {isRegistered ? '✓ Registered Successfully' : event.status === 'completed' ? 'Event Completed' : 'Register Now'}
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="p-8 rounded-rez-xl bg-white dark:bg-bg-card m-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Processing...</h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Confirming your registration</p>
          </div>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default SocialImpactEventDetail;
