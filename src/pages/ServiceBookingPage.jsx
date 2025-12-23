import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Calendar,
  Users,
  ChevronRight,
  Award,
  Sparkles,
  User,
  Phone,
  X,
  Timer,
  TrendingUp,
  Gift,
  IndianRupee,
  Eye,
  ShieldCheck,
  Zap,
  CreditCard,
  Headphones,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  ExternalLink
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';

const ServiceBookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rezCoins, totalCoinsValue } = useWallet();

  // State
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('included');
  const [isSaved, setIsSaved] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const [viewersCount, setViewersCount] = useState(12);

  // Mock service data
  const service = {
    id: id,
    type: 'service',
    name: 'Hair Spa (Keratin Treatment)',
    provider: 'Glowzy Salon',
    category: 'Beauty & Wellness',
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600'
    ],
    rating: 4.9,
    reviews: 567,
    verified: true,

    // Pricing
    mrp: 3500,
    rezPrice: 2499,
    savings: 1001,

    // Rewards
    coinsEarned: 250,
    cashback: 125,
    extraCoinsOnShare: 50,

    // Service Details
    duration: '90 mins',
    location: 'Glowzy Salon, Indiranagar, Bangalore',
    distance: '1.8 km',

    // What's Included
    included: [
      'Hair analysis and consultation',
      'Deep conditioning treatment',
      'Keratin smoothing therapy',
      'Steam treatment',
      'Hair massage',
      'Post-treatment care kit'
    ],

    // Available dates (next 7 days)
    availableDates: [
      { date: '2024-12-23', day: 'Mon', slots: 8 },
      { date: '2024-12-24', day: 'Tue', slots: 12 },
      { date: '2024-12-25', day: 'Wed', slots: 5 },
      { date: '2024-12-26', day: 'Thu', slots: 15 },
      { date: '2024-12-27', day: 'Fri', slots: 10 },
      { date: '2024-12-28', day: 'Sat', slots: 3 },
      { date: '2024-12-29', day: 'Sun', slots: 0 }
    ],

    // Time slots grouped by period
    timeSlots: {
      morning: [
        { time: '09:00 AM', available: true },
        { time: '10:00 AM', available: true },
        { time: '11:30 AM', available: true }
      ],
      afternoon: [
        { time: '12:30 PM', available: true },
        { time: '01:00 PM', available: false },
        { time: '02:30 PM', available: true },
        { time: '03:30 PM', available: true }
      ],
      evening: [
        { time: '04:00 PM', available: true },
        { time: '05:30 PM', available: true },
        { time: '07:00 PM', available: false },
        { time: '08:00 PM', available: true }
      ]
    },

    // Professionals
    professionals: [
      {
        id: 1,
        name: 'Priya Sharma',
        photo: '👩',
        experience: '8 years',
        rating: 4.9,
        specialization: 'Hair Care Expert',
        completed: 2340
      },
      {
        id: 2,
        name: 'Anjali Verma',
        photo: '👩',
        experience: '5 years',
        rating: 4.8,
        specialization: 'Keratin Specialist',
        completed: 1850
      },
      {
        id: 3,
        name: 'Meera Kapoor',
        photo: '👩',
        experience: '10 years',
        rating: 5.0,
        specialization: 'Senior Stylist',
        completed: 3120
      }
    ],

    description: 'Revitalize your hair with our signature Keratin treatment. This intensive therapy smooths frizz, adds shine, and makes your hair more manageable. Perfect for all hair types.',

    // AI suggestion
    aiSuggestion: 'You usually book salons once a month — this saves you ₹1,000 compared to last time. Weekend slots fill up fast!',

    // Urgency
    urgency: {
      type: 'limited_slots',
      message: 'Only 3 slots left today',
      icon: '⚡'
    },

    // Branded coins progress
    brandedCoinsProgress: {
      current: 3,
      total: 5,
      nextReward: 'Free hair spa addon'
    },

    // Offers & Deals
    offers: [
      {
        id: 1,
        title: 'New User Offer',
        description: '₹500 off on first salon booking',
        applied: true,
        discount: 500,
        badge: '🎉 Auto-applied'
      },
      {
        id: 2,
        title: 'Weekend Special',
        description: 'Extra 10% off on Sat-Sun bookings',
        applied: false,
        discount: 250,
        badge: '📅 Available'
      },
      {
        id: 3,
        title: 'Glowzy Loyalty',
        description: 'Flat ₹200 off for returning customers',
        applied: false,
        discount: 200,
        badge: '🏆 Available'
      }
    ],

    // Compare Prices
    comparePrices: [
      {
        store: 'Local Competitor A',
        price: 3200,
        cashback: 0,
        coins: 0
      },
      {
        store: 'Local Competitor B',
        price: 2999,
        cashback: 0,
        coins: 0
      },
      {
        store: 'Urban Company',
        price: 3500,
        cashback: 50,
        coins: 0
      }
    ],

    // Similar Services
    similarServices: [
      {
        id: 'service-2',
        name: 'Hair Coloring & Treatment',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
        provider: 'Glowzy Salon',
        price: 1999,
        rating: 4.8,
        duration: '120 mins'
      },
      {
        id: 'service-3',
        name: 'Hair Cut & Styling',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
        provider: 'Glowzy Salon',
        price: 799,
        rating: 4.9,
        duration: '45 mins'
      },
      {
        id: 'service-4',
        name: 'Deep Conditioning Therapy',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
        provider: 'Glowzy Salon',
        price: 1499,
        rating: 4.7,
        duration: '60 mins'
      }
    ],

    // Enhanced badges
    badges: {
      topRated: true,
      verifiedSalon: true,
      hotDeal: true,
      inStock: true
    },

    // Trust signals
    trustSignals: {
      payWithReZ: true,
      earnCashback: true,
      freeCancellation: true
    }
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedSlot || !selectedProfessional) {
      alert('Please select date, time slot, and professional');
      return;
    }

    // Get selected professional details
    const professional = service.professionals.find(p => p.id === selectedProfessional);

    // Navigate to checkout with booking details
    navigate(`/checkout/service/${id}`, {
      state: {
        serviceId: id,
        serviceName: service.name,
        serviceImage: service.images[0],
        price: service.rezPrice,
        coinsEarnable: service.coinsEarned,
        date: new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        timeSlot: selectedSlot,
        professional: {
          name: professional.name,
          rating: professional.rating,
          reviews: professional.completed,
          image: 'https://i.pravatar.cc/150?img=5'
        },
        store: {
          name: service.provider,
          address: service.location,
          distance: service.distance
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-2">
            <Link to="/wallet" className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-medium text-amber-400">{totalCoinsValue}</span>
            </Link>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full ${isSaved ? 'bg-red-500/20' : 'bg-white/10'}`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'text-red-400 fill-red-400' : 'text-white'}`} />
            </button>

            <button className="p-2 rounded-full bg-white/10">
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 🖼️ HERO SECTION */}
      <div className="px-4 py-4">
        <div className="mb-4">
          <div className="relative rounded-3xl overflow-hidden bg-white/5 aspect-video">
            <img
              src={service.images[selectedImage]}
              alt={service.name}
              className="w-full h-full object-cover"
            />

            {/* Badges Overlay - Top Left */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {service.badges.topRated && (
                <Badge variant="default" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-500/30 backdrop-blur-md">
                  ⭐ Top Rated
                </Badge>
              )}
              {service.badges.verifiedSalon && (
                <Badge variant="success" size="sm" className="backdrop-blur-md">
                  <BadgeCheck className="w-3 h-3 mr-1" />
                  Verified Salon
                </Badge>
              )}
              {service.badges.hotDeal && (
                <Badge variant="default" size="sm" className="bg-red-500/20 text-red-300 border-red-500/30 backdrop-blur-md">
                  🔥 Hot Deal
                </Badge>
              )}
            </div>

            {/* Urgency Badge - Top Right */}
            {service.urgency && (
              <div className="absolute top-4 right-4">
                <Badge variant="default" size="sm" className="bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-md">
                  {service.urgency.icon} {service.urgency.message}
                </Badge>
              </div>
            )}

            {/* Rating Badge - Bottom Center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-lg border border-white/20 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-white">{service.rating}</span>
                <span className="text-xs text-gray-300">({service.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            {service.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 ${
                  selectedImage === idx ? 'border-emerald-500' : 'border-white/10'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Service Identity */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-1">{service.category} · {service.provider}</p>
          <h1 className="text-2xl font-bold text-white mb-2">{service.name}</h1>

          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-semibold text-white">{service.rating}</span>
              <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
            </div>
            {service.verified && (
              <Badge variant="success" size="sm">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>

          {/* Trust Signal Chips */}
          <div className="flex gap-2 mb-3 overflow-x-auto hide-scrollbar">
            {service.trustSignals.payWithReZ && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 whitespace-nowrap">
                <span className="text-xs">🪙</span>
                <span className="text-xs font-medium text-amber-300">Pay with ReZ</span>
              </div>
            )}
            {service.trustSignals.earnCashback && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 whitespace-nowrap">
                <span className="text-xs">💸</span>
                <span className="text-xs font-medium text-emerald-300">Earn Cashback</span>
              </div>
            )}
            {service.trustSignals.freeCancellation && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 whitespace-nowrap">
                <span className="text-xs">🛡️</span>
                <span className="text-xs font-medium text-blue-300">Free Cancellation</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{service.distance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 💰 PRICE & SAVINGS */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-amber-500/10 border border-emerald-500/30">
          <p className="text-sm text-gray-300 mb-3">Service Price</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 line-through">Regular Price</span>
              <span className="text-sm text-gray-400 line-through">₹{service.mrp.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-white font-semibold">ReZ Price</span>
              <span className="text-2xl text-white font-bold">₹{service.rezPrice.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/20">
              <span className="text-sm text-emerald-300 font-semibold">🎉 You Save</span>
              <span className="text-lg text-emerald-400 font-bold">₹{service.savings.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-gray-300 mb-3">Rewards</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">🪙 Earn ReZ Coins</span>
                <span className="text-amber-400 font-semibold">{service.coinsEarned} coins</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">💸 Cashback</span>
                <span className="text-emerald-400 font-semibold">₹{service.cashback}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">🎁 Share Bonus</span>
                <span className="text-purple-400 font-semibold">+{service.extraCoinsOnShare} coins</span>
              </div>
            </div>
            <div className="mt-3 p-2 rounded-lg bg-emerald-500/10">
              <p className="text-xs text-emerald-300 text-center">✨ Rewards credited instantly after service</p>
            </div>
          </div>
        </div>
      </div>

      {/* ⚡ URGENCY & VIEWING COUNT */}
      <div className="px-4 mb-6">
        <div className="flex gap-3">
          <div className="flex-1 p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-1">
              <Timer className="w-4 h-4 text-orange-400" />
              <p className="text-xs font-semibold text-orange-300">Limited Availability</p>
            </div>
            <p className="text-sm text-white font-bold">{service.urgency.message}</p>
          </div>
          <div className="flex-1 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/10 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-4 h-4 text-blue-400" />
              <p className="text-xs font-semibold text-blue-300">Popular Now</p>
            </div>
            <p className="text-sm text-white font-bold">{viewersCount} people viewing</p>
          </div>
        </div>
      </div>

      {/* 🎁 REZ BENEFITS STRIP */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">Why Book with ReZ</h3>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 whitespace-nowrap">
            <span className="text-lg">🪙</span>
            <span className="text-sm font-semibold text-amber-300">Pay with Coins</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 whitespace-nowrap">
            <span className="text-lg">💸</span>
            <span className="text-sm font-semibold text-emerald-300">Instant Cashback</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 whitespace-nowrap">
            <span className="text-lg">🎁</span>
            <span className="text-sm font-semibold text-purple-300">Loyalty Rewards</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 whitespace-nowrap">
            <span className="text-lg">🛡️</span>
            <span className="text-sm font-semibold text-blue-300">Free Cancellation</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 whitespace-nowrap">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-semibold text-pink-300">Verified Pros</span>
          </div>
        </div>
      </div>

      {/* 🏆 BRANDED COINS PROGRESS */}
      {service.brandedCoinsProgress && (
        <div className="px-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-600/10 border border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-white">Glowzy Loyalty Progress</p>
              <p className="text-xs text-purple-300">{service.brandedCoinsProgress.current}/{service.brandedCoinsProgress.total} visits</p>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${(service.brandedCoinsProgress.current / service.brandedCoinsProgress.total) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-purple-300">
              Next reward: <span className="font-semibold text-purple-400">{service.brandedCoinsProgress.nextReward}</span>
            </p>
          </div>
        </div>
      )}

      {/* 🎯 OFFERS & DEALS */}
      <div className="px-4 mb-6">
        <button
          onClick={() => setShowOffers(!showOffers)}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-600/10 border border-amber-500/30 mb-3 active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-amber-400" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">Offers & Deals</p>
              <p className="text-xs text-amber-300">
                {service.offers.filter(o => o.applied).length} applied · {service.offers.filter(o => !o.applied).length} available
              </p>
            </div>
          </div>
          {showOffers ? (
            <ChevronUp className="w-5 h-5 text-amber-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-amber-400" />
          )}
        </button>

        {showOffers && (
          <div className="space-y-2">
            {service.offers.map((offer) => (
              <div
                key={offer.id}
                className={`p-4 rounded-2xl border ${
                  offer.applied
                    ? 'bg-emerald-500/20 border-emerald-500/30'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-bold text-white">{offer.title}</p>
                      <Badge
                        variant={offer.applied ? "success" : "default"}
                        size="sm"
                        className={!offer.applied ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : ""}
                      >
                        {offer.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-400">{offer.description}</p>
                  </div>
                  <p className="text-lg font-bold text-emerald-400 ml-2">-₹{offer.discount}</p>
                </div>
                {offer.applied && (
                  <div className="flex items-center gap-2 mt-2 p-2 rounded-lg bg-emerald-500/10">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <p className="text-xs text-emerald-300">Already applied to your booking</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 📅 DATE SELECTION */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-white mb-3">Select Date</h3>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {service.availableDates.map((dateObj) => (
            <button
              key={dateObj.date}
              onClick={() => setSelectedDate(dateObj.date)}
              disabled={dateObj.slots === 0}
              className={`flex-shrink-0 p-3 rounded-2xl text-center min-w-[70px] transition-all ${
                selectedDate === dateObj.date
                  ? 'bg-emerald-500/30 border-2 border-emerald-500'
                  : dateObj.slots === 0
                  ? 'bg-white/5 border border-white/10 opacity-50'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <p className="text-xs text-gray-400 mb-1">{dateObj.day}</p>
              <p className="text-lg font-bold text-white">{new Date(dateObj.date).getDate()}</p>
              <p className="text-xs text-gray-400 mt-1">
                {dateObj.slots === 0 ? 'Full' : `${dateObj.slots} slots`}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ⏰ TIME SLOT SELECTION */}
      {selectedDate && (
        <div className="px-4 mb-6">
          <h3 className="text-lg font-bold text-white mb-3">Available Time Slots</h3>

          <div className="space-y-4">
            {/* Morning Slots */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-2">Morning</p>
              <div className="grid grid-cols-3 gap-2">
                {service.timeSlots.morning.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedSlot(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSlot === slot.time
                        ? 'bg-emerald-500/30 text-emerald-300 border-2 border-emerald-500'
                        : slot.available
                        ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                        : 'bg-white/5 text-gray-600 border border-white/10 opacity-50 line-through'
                    }`}
                  >
                    {slot.time}
                    {slot.available && (
                      <span className="block text-[10px] text-gray-400 mt-0.5">Available</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Afternoon Slots */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-2">Afternoon</p>
              <div className="grid grid-cols-3 gap-2">
                {service.timeSlots.afternoon.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedSlot(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSlot === slot.time
                        ? 'bg-emerald-500/30 text-emerald-300 border-2 border-emerald-500'
                        : slot.available
                        ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                        : 'bg-white/5 text-gray-600 border border-white/10 opacity-50 line-through'
                    }`}
                  >
                    {slot.time}
                    {slot.available && (
                      <span className="block text-[10px] text-gray-400 mt-0.5">Available</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening Slots */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-2">Evening</p>
              <div className="grid grid-cols-3 gap-2">
                {service.timeSlots.evening.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedSlot(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSlot === slot.time
                        ? 'bg-emerald-500/30 text-emerald-300 border-2 border-emerald-500'
                        : slot.available
                        ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                        : 'bg-white/5 text-gray-600 border border-white/10 opacity-50 line-through'
                    }`}
                  >
                    {slot.time}
                    {slot.available && (
                      <span className="block text-[10px] text-gray-400 mt-0.5">Available</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 👤 PROFESSIONAL SELECTION */}
      {selectedSlot && (
        <div className="px-4 mb-6">
          <h3 className="text-lg font-bold text-white mb-3">Choose Professional</h3>
          <div className="space-y-3">
            {service.professionals.map((pro) => (
              <button
                key={pro.id}
                onClick={() => setSelectedProfessional(pro.id)}
                className={`w-full p-4 rounded-2xl border transition-all ${
                  selectedProfessional === pro.id
                    ? 'bg-emerald-500/20 border-emerald-500'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                    {pro.photo}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-white">{pro.name}</p>
                      {pro.rating >= 4.9 && (
                        <Badge variant="default" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                          ⭐ Top Rated
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{pro.specialization}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-xs text-amber-400 font-semibold">{pro.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-gray-400">{pro.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-gray-400">{pro.completed} services</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                        <span className="text-[10px] text-emerald-300">✓ Verified</span>
                      </div>
                      {pro.completed > 2000 && (
                        <div className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                          <span className="text-[10px] text-purple-300">🏆 Expert</span>
                        </div>
                      )}
                      {pro.rating === 5.0 && (
                        <div className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                          <span className="text-[10px] text-amber-300">⭐ 5.0 Rating</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {selectedProfessional === pro.id && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🧠 AI SUGGESTION */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-600/10 border border-amber-500/30">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Why Book Now</p>
              <p className="text-sm text-gray-300">{service.aiSuggestion}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 💰 COMPARE PRICES */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            Compare Prices
          </h3>
          <div className="space-y-2">
            {/* This Salon (Best) */}
            <div className="p-3 rounded-xl bg-emerald-500/20 border-2 border-emerald-500/50">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">{service.provider} (ReZ)</span>
                  <Badge variant="success" size="sm">Best Deal</Badge>
                </div>
                <span className="text-lg font-bold text-emerald-400">₹{service.rezPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-emerald-300">+ ₹{service.cashback} cashback + {service.coinsEarned} coins</p>
            </div>

            {/* Competitors */}
            {service.comparePrices.map((comp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{comp.store}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-gray-300">₹{comp.price.toLocaleString()}</span>
                    {comp.cashback > 0 && (
                      <p className="text-xs text-gray-500">+ ₹{comp.cashback} cashback</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-xs text-emerald-300 text-center">
              💚 You save ₹{Math.min(...service.comparePrices.map(c => c.price)) - service.rezPrice} compared to the next best price
            </p>
          </div>
        </div>
      </div>

      {/* 🔄 SIMILAR SERVICES */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-white mb-3">Similar Services at {service.provider}</h3>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {service.similarServices.map((similar) => (
            <div
              key={similar.id}
              onClick={() => navigate(`/booking/${similar.id}`)}
              className="flex-shrink-0 w-56 p-3 rounded-2xl bg-white/5 border border-white/10 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 aspect-video">
                <img
                  src={similar.image}
                  alt={similar.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <div className="px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-white">{similar.rating}</span>
                  </div>
                </div>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1 line-clamp-1">{similar.name}</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{similar.duration}</span>
                <span className="text-sm font-bold text-emerald-400">₹{similar.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🪙 PAY WITH REZ EXPLANATION */}
      {selectedProfessional && (
        <div className="px-4 mb-6">
          <h3 className="text-lg font-bold text-white mb-3">Pay with ReZ</h3>
          <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1">Automatic Coin Application</p>
                  <p className="text-xs text-gray-300">
                    Coins are applied automatically for maximum savings at checkout. Up to 30% of service cost can be paid with coins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🎯</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1">Smart Priority Order</p>
                  <p className="text-xs text-gray-300">
                    Promo Coins → Branded Coins → ReZ Coins (use expiring coins first)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💰</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white mb-1">Flexible Payment</p>
                  <p className="text-xs text-gray-300">
                    Choose to pay with coins + cash or pay full amount and earn more coins. You control it!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400 text-center">
                💡 Your wallet has <span className="text-amber-400 font-semibold">{totalCoinsValue} coins</span> ready to use
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 📋 SERVICE DETAILS TABS */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
          {['included', 'description', 'reviews', 'location'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-white/5 text-gray-400'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          {activeTab === 'included' && (
            <div className="space-y-3">
              {service.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'description' && (
            <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
          )}

          {activeTab === 'reviews' && (
            <div>
              {/* Ratings Summary */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-1">{service.rating}</p>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
                          star <= Math.floor(service.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{service.reviews} reviews</p>
                </div>

                <div className="flex-1">
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 w-8">{stars}⭐</span>
                        <div className="flex-1 h-2 rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-amber-500"
                            style={{
                              width: `${
                                stars === 5 ? 75 : stars === 4 ? 18 : stars === 3 ? 5 : stars === 2 ? 1 : 1
                              }%`
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-10">
                          {stars === 5 ? '75%' : stars === 4 ? '18%' : stars === 3 ? '5%' : '1%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Highlights */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-white mb-3">What people love</p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <span className="text-xs text-emerald-300">Professional service (234)</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                    <span className="text-xs text-amber-300">Great results (198)</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <span className="text-xs text-purple-300">Clean salon (176)</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <span className="text-xs text-blue-300">On time (145)</span>
                  </div>
                </div>
              </div>

              {/* UGC Preview */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Recent Reviews</p>
                <div className="space-y-3">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="p-3 rounded-xl bg-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-sm">
                          👤
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-white">User {review}</p>
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-3 h-3 text-amber-400 fill-amber-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-400">Verified booking · 2 weeks ago</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Amazing experience! The keratin treatment was exactly what my hair needed. Highly recommend.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'location' && (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{service.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{service.distance} away</p>
                </div>
              </div>
              <button className="w-full py-2 px-4 rounded-xl bg-blue-500/20 text-blue-400 text-sm font-medium">
                Get Directions
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🛡️ TRUST & SAFETY */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-bold text-white mb-4 text-center">Trust & Safety</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-xs font-semibold text-white mb-1">Secure Payment</p>
              <p className="text-[10px] text-gray-400">100% safe transactions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                <BadgeCheck className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-xs font-semibold text-white mb-1">Verified Salon</p>
              <p className="text-[10px] text-gray-400">Quality guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                <Headphones className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-xs font-semibold text-white mb-1">24/7 Support</p>
              <p className="text-[10px] text-gray-400">Always here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔘 STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-400">Total Amount</p>
            <p className="text-xl font-bold text-white">₹{service.rezPrice.toLocaleString()}</p>
            <p className="text-xs text-emerald-400">Save ₹{service.savings} + Earn {service.coinsEarned} coins</p>
            <p className="text-[10px] text-purple-300 mt-1">
              🛡️ Free cancellation before 2 hours
            </p>
          </div>

          <button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedSlot || !selectedProfessional}
            className={`px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all ${
              selectedDate && selectedSlot && selectedProfessional
                ? 'bg-emerald-500 text-white active:scale-95'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </button>
        </div>
      </div>

      {/* END MESSAGE */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30 text-center">
          <p className="text-sm font-semibold text-white mb-1">
            Book smarter. Save more. Look better.
          </p>
          <p className="text-xs text-gray-300">That's ReZ Beauty.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingPage;
