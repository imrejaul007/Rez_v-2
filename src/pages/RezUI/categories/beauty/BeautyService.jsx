import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Heart,
  Share2,
  Coins,
  ChevronRight,
  Calendar,
  Shield,
  Check,
  Zap,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { beautyServices } from '../data/beautyData';
import Button from '../components/common/Button';

const BeautyService = () => {
  const { id } = useParams();
  const { rezCoins } = useWallet();
  const [liked, setLiked] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('Today');

  const service = beautyServices.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-rez-gray-600 dark:text-gray-400 mb-4">Service not found</p>
          <Link to="/beauty" className="text-emerald-400">
            ← Back to Beauty & Wellness
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(
    ((service.originalPrice - service.price) / service.originalPrice) * 100
  );
  const cashbackAmount = Math.round(service.price * service.cashbackPercent / 100);

  // Generate dates for booking
  const dates = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Get related services
  const relatedServices = beautyServices
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-32">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/beauty" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10"
            >
              <Heart
                className={`w-5 h-5 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`}
              />
            </button>
            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Image */}
      <div className="relative h-64">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {discount > 0 && (
            <span className="px-3 py-1 rounded-full bg-red-500 text-sm text-rez-navy dark:text-white font-medium">
              {discount}% OFF
            </span>
          )}
          {service.tag && (
            <span className="px-3 py-1 rounded-full bg-blue-500 text-sm text-rez-navy dark:text-white">
              {service.tag}
            </span>
          )}
        </div>

        {/* Provider Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-3 rounded-xl bg-white dark:bg-black/60 backdrop-blur flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center overflow-hidden">
              {service.providerLogo ? (
                <img
                  src={service.providerLogo}
                  alt={service.provider}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-xl">💇</span>';
                  }}
                />
              ) : (
                <span className="text-xl">💇</span>
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-rez-navy dark:text-white">{service.provider}</p>
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs text-rez-navy dark:text-white">{service.rating}</span>
                <span className="text-xs text-rez-gray-600 dark:text-gray-400">({service.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Info */}
      <div className="px-4 py-4">
        {/* Name */}
        <h1 className="text-xl font-bold text-rez-navy dark:text-white">{service.name}</h1>

        {/* Duration & Distance */}
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            <span className="text-sm text-rez-gray-600 dark:text-gray-400">{service.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            <span className="text-sm text-rez-gray-600 dark:text-gray-400">{service.distance}</span>
          </div>
          {service.isWalkIn && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs text-emerald-400">
              <Zap className="w-3 h-3" />
              Walk-in OK
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-rez-navy dark:text-white">
            ₹{service.price.toLocaleString()}
          </span>
          <span className="text-lg text-rez-gray-600 dark:text-gray-500 line-through">
            ₹{service.originalPrice.toLocaleString()}
          </span>
          <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-sm text-emerald-400">
            Save ₹{(service.originalPrice - service.price).toLocaleString()}
          </span>
        </div>

        {/* Earnings */}
        <div className="flex items-center gap-4 mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-sm font-medium text-rez-navy dark:text-white">
                Earn ₹{cashbackAmount} + {service.coinsEarned} coins
              </p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{service.cashbackPercent}% cashback</p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">You have</p>
            <p className="text-sm font-medium text-amber-400">{rezCoins} coins</p>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-2">Select Date</h3>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`min-w-[70px] p-3 rounded-xl text-center transition-colors ${
                  selectedDate === date
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <p className="text-sm font-medium">{date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-2">Available Slots</h3>
          <div className="flex flex-wrap gap-2">
            {service.slots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                  selectedSlot === slot
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Offers */}
        {service.offers && service.offers.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-2">Available Offers</h3>
            <div className="space-y-2">
              {service.offers.map((offer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  <span className="text-lg">🎁</span>
                  <span className="text-sm text-rez-navy dark:text-white flex-1">{offer}</span>
                  <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Elements */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-2">Why Book Here</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-xs text-rez-navy dark:text-white">Verified Provider</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">Quality assured</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-xs text-rez-navy dark:text-white">ReZ Rewards</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">Earn on every visit</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-rez-navy dark:text-white">Easy Reschedule</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">Free cancellation</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-xs text-rez-navy dark:text-white">{service.rating} Rating</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-500">{service.reviews}+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-rez-navy dark:text-white mb-3">You might also like</h3>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/beauty/service/${s.id}`}
                  className="min-w-[200px] p-3 rounded-xl bg-white dark:bg-[#2C2C2E] shrink-0"
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs text-rez-navy dark:text-white line-clamp-2">{s.name}</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{s.provider}</p>
                  <p className="text-sm font-medium text-rez-navy dark:text-white mt-1">
                    ₹{s.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-emerald-400">{s.cashbackPercent}% cashback</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 px-4 z-50">
        <div className="p-4 rounded-2xl bg-rez-gray-100 dark:bg-[#1C1C1E] border border-rez-gray-200 dark:border-white/10 shadow-xl">
          {/* Selected Info */}
          {selectedSlot && (
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-rez-gray-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-rez-navy dark:text-white">{selectedDate}</span>
                <span className="text-rez-gray-600 dark:text-gray-500">•</span>
                <span className="text-sm text-rez-navy dark:text-white">{selectedSlot}</span>
              </div>
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
          )}

          {/* Price Summary */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-lg font-bold text-rez-navy dark:text-white">₹{service.price.toLocaleString()}</p>
              <p className="text-xs text-amber-400">Earn ₹{cashbackAmount} + {service.coinsEarned} coins</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Duration</p>
              <p className="text-sm font-medium text-rez-navy dark:text-white">{service.duration}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {service.isWalkIn && (
              <Button variant="secondary" className="flex-1">
                Walk In
              </Button>
            )}
            <Button
              variant="primary"
              className="flex-1"
              disabled={!selectedSlot}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyService;
