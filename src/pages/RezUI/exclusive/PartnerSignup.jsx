import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft, Store, ShoppingBag, Dumbbell, Utensils, Check,
  ChevronRight, MapPin, Phone, Mail, User, Building, Star,
  TrendingUp, Users, Coins, Sparkles, Award
} from 'lucide-react';

const PartnerSignup = () => {
  const navigate = useNavigate();
  const { type } = useParams(); // grocery, fashion, gym, studio, restaurant
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    category: type || 'grocery',
    gstNumber: '',
  });

  const categories = {
    grocery: {
      icon: Store,
      title: 'Grocery Store Partner',
      color: 'from-emerald-500 to-green-500',
      benefits: [
        'Get 1000+ local customers',
        'Zero commission for 3 months',
        'Free digital storefront',
        'ReZ Coins marketing boost',
      ],
    },
    fashion: {
      icon: ShoppingBag,
      title: 'Fashion Store Partner',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Reach fashion-conscious buyers',
        'Premium brand visibility',
        'Seasonal campaign support',
        'Influencer collaborations',
      ],
    },
    gym: {
      icon: Dumbbell,
      title: 'Gym Partner',
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Connect with fitness enthusiasts',
        'Membership management tools',
        'Free promotional campaigns',
        'Performance analytics dashboard',
      ],
    },
    studio: {
      icon: Dumbbell,
      title: 'Fitness Studio Partner',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Class booking management',
        'Flexible pricing options',
        'Community building tools',
        'Expert instructor profiles',
      ],
    },
    restaurant: {
      icon: Utensils,
      title: 'Restaurant Partner',
      color: 'from-amber-500 to-orange-500',
      benefits: [
        'Increase dine-in footfall',
        'Digital menu showcase',
        'Cashback-driven marketing',
        'Real-time table bookings',
      ],
    },
  };

  const config = categories[type] || categories.grocery;
  const Icon = config.icon;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      console.log('Partner signup submitted:', formData);
      navigate('/partner/success');
    }
  };

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-rez-navy dark:text-white" />
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{config.title}</h1>
            </div>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              Step {step} of 3
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 pb-3">
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1 rounded-full transition-colors ${
                  s <= step
                    ? `bg-gradient-to-r ${config.color}`
                    : 'bg-rez-gray-200 dark:bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {step === 1 && (
        <div className="px-4 py-6">
          <div className={`p-6 rounded-2xl bg-gradient-to-br ${config.color}/10 border border-${config.color}/20`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${config.color}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">
                  Grow Your Business with ReZ
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Join 2,500+ partners earning more with smart rewards
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className={`w-5 h-5 text-emerald-600 dark:text-emerald-400`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-4 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="text-lg font-bold text-rez-navy dark:text-white">2.5K+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Partners</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
              <p className="text-lg font-bold text-rez-navy dark:text-white">40%</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Avg Growth</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
              <Award className="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <p className="text-lg font-bold text-rez-navy dark:text-white">4.8</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Rating</p>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-4">
        {/* Step 1: Business Details */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold text-rez-navy dark:text-white">Business Information</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Name *
              </label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <Building className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  placeholder="Enter business name"
                  required
                  className="flex-1 bg-transparent text-rez-navy dark:text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Owner Name *
              </label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => updateFormData('ownerName', e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="flex-1 bg-transparent text-rez-navy dark:text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                GST Number (Optional)
              </label>
              <input
                type="text"
                value={formData.gstNumber}
                onChange={(e) => updateFormData('gstNumber', e.target.value)}
                placeholder="22AAAAA0000A1Z5"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white outline-none"
              />
            </div>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-bold text-rez-navy dark:text-white">Contact Information</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <Phone className="w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="10-digit mobile number"
                  required
                  className="flex-1 bg-transparent text-rez-navy dark:text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-transparent text-rez-navy dark:text-white outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold text-rez-navy dark:text-white">Business Location</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Address *
              </label>
              <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <textarea
                  value={formData.address}
                  onChange={(e) => updateFormData('address', e.target.value)}
                  placeholder="Enter complete address"
                  required
                  rows={3}
                  className="flex-1 bg-transparent text-rez-navy dark:text-white outline-none resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="City"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={(e) => updateFormData('pincode', e.target.value)}
                  placeholder="Pincode"
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white outline-none"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                By submitting, you agree to ReZ's Partner Terms & Conditions. Our team will verify your details and contact you within 24-48 hours.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:scale-105 transition-all"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${config.color} text-white font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2`}
          >
            {step < 3 ? (
              <>
                Continue
                <ChevronRight className="w-5 h-5" />
              </>
            ) : (
              <>
                <Check className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerSignup;
