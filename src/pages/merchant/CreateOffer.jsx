import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X, Calendar, Clock, Users, Tag, DollarSign, Percent, Gift, Sparkles } from 'lucide-react';

export default function CreateOffer() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    title: '',
    description: '',
    termsConditions: '',
    offerType: 'discount_percent',
    image: null,

    // Step 2: Discount Configuration
    discountValue: '',
    maxDiscount: '',
    minOrderValue: '',
    bogoConfig: { buy: 1, get: 1, on: 'cheapest' },

    // Step 3: Validity & Timing
    validFrom: '',
    validUntil: '',
    availableDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    availableHours: [{ start: '09:00', end: '21:00' }],

    // Step 4: User Targeting
    userSegment: 'all',
    minUserLevel: 0,
    perUserLimit: 1,
    totalRedemptionLimit: '',

    // Step 5: Coins & Rewards
    rezCoinsRequired: 0,
    rezCoinsEarned: 0,
    brandedCoinsEarned: 0,

    // Step 6: Tags & Categories
    tags: [],
    categories: []
  });

  const offerTypes = [
    { value: 'discount_percent', label: 'Percentage Discount', icon: Percent, example: '50% OFF' },
    { value: 'discount_fixed', label: 'Fixed Amount OFF', icon: DollarSign, example: '₹100 OFF' },
    { value: 'bogo', label: 'Buy One Get One', icon: Gift, example: 'Buy 1 Get 1 Free' },
    { value: 'freebie', label: 'Free Item/Service', icon: Sparkles, example: 'Free Dessert' }
  ];

  const userSegments = [
    { value: 'all', label: 'All Users', description: 'Available to everyone' },
    { value: 'new_users', label: 'New Users', description: 'First-time customers only' },
    { value: 'student', label: 'Students', description: 'Verified students only' },
    { value: 'vip', label: 'VIP Customers', description: 'High-value customers' }
  ];

  const popularTags = [
    'breakfast', 'lunch', 'dinner', 'weekend', 'weekday', 'festive',
    'flash_deal', 'limited_time', 'bestseller', 'new_launch'
  ];

  const days = [
    { value: 'mon', label: 'Mon' },
    { value: 'tue', label: 'Tue' },
    { value: 'wed', label: 'Wed' },
    { value: 'thu', label: 'Thu' },
    { value: 'fri', label: 'Fri' },
    { value: 'sat', label: 'Sat' },
    { value: 'sun', label: 'Sun' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDay = (day) => {
    setFormData(prev => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter(d => d !== day)
        : [...prev.availableDays, day]
    }));
  };

  const toggleTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Submitting offer:', formData);
    // TODO: API call to create offer
    navigate('/merchant/offers');
  };

  const steps = [
    { number: 1, title: 'Basic Details', description: 'Title & description' },
    { number: 2, title: 'Discount', description: 'Configure discount' },
    { number: 3, title: 'Validity', description: 'Dates & timing' },
    { number: 4, title: 'Targeting', description: 'User segments' },
    { number: 5, title: 'Coins', description: 'ReZ coins config' },
    { number: 6, title: 'Review', description: 'Final review' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/merchant/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Create New Offer</h1>
          <p className="text-gray-600 mt-1">Follow the steps to create an amazing offer</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      currentStep >= step.number
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="mt-2 text-center">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 rounded ${
                      currentStep > step.number ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Step 1: Basic Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Basic Details</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., 50% OFF on All Pizzas"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your offer in detail..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Type *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {offerTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => handleInputChange('offerType', type.value)}
                      className={`p-4 border-2 rounded-lg transition-all text-left ${
                        formData.offerType === type.value
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <type.icon className={`w-5 h-5 ${
                          formData.offerType === type.value ? 'text-indigo-600' : 'text-gray-400'
                        }`} />
                        <span className="font-medium text-gray-900">{type.label}</span>
                      </div>
                      <p className="text-sm text-gray-600">{type.example}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Image
                </label>
                {!formData.image ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload offer image</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700"
                    >
                      Choose File
                    </label>
                  </div>
                ) : (
                  <div className="relative">
                    <img src={formData.image} alt="Offer" className="w-full h-64 object-cover rounded-lg" />
                    <button
                      onClick={() => handleInputChange('image', null)}
                      className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Discount Configuration */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Discount Configuration</h2>

              {formData.offerType === 'discount_percent' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Percentage *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={formData.discountValue}
                        onChange={(e) => handleInputChange('discountValue', e.target.value)}
                        placeholder="50"
                        min="1"
                        max="100"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Discount Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={formData.maxDiscount}
                        onChange={(e) => handleInputChange('maxDiscount', e.target.value)}
                        placeholder="500"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Cap the maximum discount amount</p>
                  </div>
                </>
              )}

              {formData.offerType === 'discount_fixed' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Amount *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={formData.discountValue}
                      onChange={(e) => handleInputChange('discountValue', e.target.value)}
                      placeholder="100"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Order Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={formData.minOrderValue}
                    onChange={(e) => handleInputChange('minOrderValue', e.target.value)}
                    placeholder="500"
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Minimum cart value required</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Terms & Conditions
                </label>
                <textarea
                  value={formData.termsConditions}
                  onChange={(e) => handleInputChange('termsConditions', e.target.value)}
                  placeholder="• Valid on dine-in only&#10;• Cannot be combined with other offers"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Step 3: Validity & Timing */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Validity & Timing</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valid From *
                  </label>
                  <input
                    type="date"
                    value={formData.validFrom}
                    onChange={(e) => handleInputChange('validFrom', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valid Until *
                  </label>
                  <input
                    type="date"
                    value={formData.validUntil}
                    onChange={(e) => handleInputChange('validUntil', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Days
                </label>
                <div className="flex gap-2">
                  {days.map((day) => (
                    <button
                      key={day.value}
                      type="button"
                      onClick={() => toggleDay(day.value)}
                      className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                        formData.availableDays.includes(day.value)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Hours (Optional)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Start Time</label>
                    <input
                      type="time"
                      value={formData.availableHours[0]?.start || ''}
                      onChange={(e) => handleInputChange('availableHours', [
                        { ...formData.availableHours[0], start: e.target.value }
                      ])}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">End Time</label>
                    <input
                      type="time"
                      value={formData.availableHours[0]?.end || ''}
                      onChange={(e) => handleInputChange('availableHours', [
                        { ...formData.availableHours[0], end: e.target.value }
                      ])}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Leave blank for all day</p>
              </div>
            </div>
          )}

          {/* Step 4: User Targeting */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">User Targeting</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience *
                </label>
                <div className="space-y-3">
                  {userSegments.map((segment) => (
                    <button
                      key={segment.value}
                      type="button"
                      onClick={() => handleInputChange('userSegment', segment.value)}
                      className={`w-full p-4 border-2 rounded-lg transition-all text-left ${
                        formData.userSegment === segment.value
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{segment.label}</p>
                          <p className="text-sm text-gray-600">{segment.description}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          formData.userSegment === segment.value
                            ? 'border-indigo-600 bg-indigo-600'
                            : 'border-gray-300'
                        }`}>
                          {formData.userSegment === segment.value && (
                            <div className="w-full h-full flex items-center justify-center text-white text-xs">
                              ✓
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Per User Limit
                  </label>
                  <input
                    type="number"
                    value={formData.perUserLimit}
                    onChange={(e) => handleInputChange('perUserLimit', e.target.value)}
                    placeholder="1"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Max redemptions per user</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Redemption Limit
                  </label>
                  <input
                    type="number"
                    value={formData.totalRedemptionLimit}
                    onChange={(e) => handleInputChange('totalRedemptionLimit', e.target.value)}
                    placeholder="Unlimited"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Total redemptions allowed</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Coins & Rewards */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Coins & Rewards</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ReZ Coins Required to Unlock
                </label>
                <input
                  type="number"
                  value={formData.rezCoinsRequired}
                  onChange={(e) => handleInputChange('rezCoinsRequired', e.target.value)}
                  placeholder="0"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Set to 0 for free offers</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ReZ Coins Earned
                  </label>
                  <input
                    type="number"
                    value={formData.rezCoinsEarned}
                    onChange={(e) => handleInputChange('rezCoinsEarned', e.target.value)}
                    placeholder="50"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Universal coins</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branded Coins Earned
                  </label>
                  <input
                    type="number"
                    value={formData.brandedCoinsEarned}
                    onChange={(e) => handleInputChange('brandedCoinsEarned', e.target.value)}
                    placeholder="25"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Your store only</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        formData.tags.includes(tag)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Review & Submit */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Offer Title</p>
                  <p className="text-lg font-semibold text-gray-900">{formData.title || 'Not set'}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Offer Type</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {offerTypes.find(t => t.value === formData.offerType)?.label}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Discount</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {formData.offerType === 'discount_percent' ? `${formData.discountValue}%` : `₹${formData.discountValue}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Min Order Value</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {formData.minOrderValue ? `₹${formData.minOrderValue}` : 'No minimum'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Valid Period</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {formData.validFrom} to {formData.validUntil}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Target Audience</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userSegments.find(s => s.value === formData.userSegment)?.label}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Coins Configuration</p>
                  <div className="flex gap-4 mt-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">{formData.rezCoinsRequired}</span> to unlock
                    </p>
                    <span className="text-gray-400">•</span>
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">{formData.rezCoinsEarned}</span> ReZ coins earned
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  ⚠️ Your offer will be submitted for admin approval. You'll be notified once it's reviewed.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            {currentStep < 6 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit for Approval
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
