import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle, Store, Camera, Upload,
  FileSpreadsheet, MessageSquare, Clock, Zap, Shield, Star,
  Phone, Mail, MapPin, ChevronRight, Loader2, Image, X
} from 'lucide-react';

const MerchantQuickOnboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    storeName: '',
    phone: '',
    category: '',
    address: '',
    menuUploadMethod: '',
    menuImages: [],
    excelFile: null
  });

  const categories = [
    { id: 'restaurant', name: 'Restaurant / Cafe', icon: '🍽️' },
    { id: 'grocery', name: 'Grocery / Kirana', icon: '🛒' },
    { id: 'salon', name: 'Salon / Spa', icon: '💇' },
    { id: 'retail', name: 'Retail Store', icon: '🏪' },
    { id: 'pharmacy', name: 'Pharmacy', icon: '💊' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion / Apparel', icon: '👔' },
    { id: 'other', name: 'Other', icon: '📦' }
  ];

  const uploadMethods = [
    {
      id: 'photo',
      name: 'Take Photos',
      desc: 'Click photos of your menu/products',
      icon: Camera,
      time: '2 mins'
    },
    {
      id: 'excel',
      name: 'Upload Excel',
      desc: 'Import from spreadsheet',
      icon: FileSpreadsheet,
      time: '1 min'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Upload',
      desc: 'Send photos via WhatsApp',
      icon: MessageSquare,
      time: '2 mins'
    },
    {
      id: 'later',
      name: 'Skip for Now',
      desc: 'Add products manually later',
      icon: Clock,
      time: '-'
    }
  ];

  const totalSteps = 4;
  const estimatedTime = 10; // minutes

  const handleSkip = () => {
    setSkippedSteps(prev => [...prev, step]);
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/merchant');
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Store className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome to ReZ!</h2>
              <p className="text-gray-400 mt-2">Let's set up your store in under 10 minutes</p>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center justify-center gap-4 py-4">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    s < step ? 'bg-green-500' :
                    s === step ? 'bg-blue-500' :
                    'bg-gray-700'
                  }`}>
                    {s < step ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white text-sm">{s}</span>
                    )}
                  </div>
                  {s < 4 && <div className={`w-8 h-0.5 ${s < step ? 'bg-green-500' : 'bg-gray-700'}`} />}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Store Name *</label>
                <input
                  type="text"
                  value={formData.storeName}
                  onChange={(e) => setFormData(prev => ({ ...prev, storeName: e.target.value }))}
                  placeholder="e.g., Fresh Mart Grocery"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-4 text-white text-lg"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Mobile Number *</label>
                <div className="flex">
                  <span className="bg-gray-700 border border-gray-700 rounded-l-xl px-4 py-4 text-gray-400">+91</span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="9876543210"
                    maxLength={10}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-r-xl px-4 py-4 text-white text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">What do you sell?</h2>
              <p className="text-gray-400 mt-2">This helps us configure your store</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFormData(prev => ({ ...prev, category: cat.id }))}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.category === cat.id
                      ? 'bg-blue-500/20 border-blue-500 scale-[1.02]'
                      : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <p className="text-white font-medium mt-2">{cat.name}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">Add Your Products</h2>
              <p className="text-gray-400 mt-2">Choose the easiest way for you</p>
            </div>

            <div className="space-y-3">
              {uploadMethods.map(method => {
                const MethodIcon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setFormData(prev => ({ ...prev, menuUploadMethod: method.id }))}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                      formData.menuUploadMethod === method.id
                        ? 'bg-blue-500/20 border-blue-500'
                        : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      formData.menuUploadMethod === method.id ? 'bg-blue-500/30' : 'bg-gray-700'
                    }`}>
                      <MethodIcon className={`w-6 h-6 ${
                        formData.menuUploadMethod === method.id ? 'text-blue-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{method.name}</p>
                      <p className="text-sm text-gray-400">{method.desc}</p>
                    </div>
                    {method.time !== '-' && (
                      <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                        ~{method.time}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {formData.menuUploadMethod === 'photo' && (
              <div className="mt-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-white font-medium mb-3">Upload Product Photos</p>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map(i => (
                    <button
                      key={i}
                      className="aspect-square bg-gray-700 rounded-lg border-2 border-dashed border-gray-600 flex flex-col items-center justify-center hover:border-blue-500 transition-colors"
                    >
                      <Camera className="w-6 h-6 text-gray-400" />
                      <span className="text-xs text-gray-500 mt-1">Add</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Our AI will automatically detect products and prices from photos
                </p>
              </div>
            )}

            {formData.menuUploadMethod === 'whatsapp' && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Send to WhatsApp</p>
                    <p className="text-sm text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Send your menu photos to this number. We'll add them automatically.
                </p>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">Store Location</h2>
              <p className="text-gray-400 mt-2">Help customers find you</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Store Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Shop No., Building, Street, Area, City"
                rows={3}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white resize-none"
              />
            </div>

            <button className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl flex items-center gap-3 hover:border-blue-500 transition-colors">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-medium">Use Current Location</p>
                <p className="text-sm text-gray-400">Auto-detect your store location</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>

            {/* Summary */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="font-medium text-white mb-3">Your Store Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Store Name</span>
                  <span className="text-white">{formData.storeName || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white">
                    {categories.find(c => c.id === formData.category)?.name || '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">{formData.phone ? `+91 ${formData.phone}` : '-'}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Setting Up Your Store...</h2>
          <p className="text-gray-400">This will only take a moment</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
            <span className="text-blue-400">Creating your dashboard</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="p-2 hover:bg-gray-700 rounded-lg">
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
            )}
            <div>
              <p className="text-sm text-gray-400">Step {step} of {totalSteps}</p>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-blue-400">~{Math.max(1, estimatedTime - (step - 1) * 2)} mins left</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleSkip}
            className="text-sm text-gray-400 hover:text-white"
          >
            Skip
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 w-full bg-gray-700 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-32">
        {renderStep()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 border-t border-gray-700">
        <button
          onClick={() => {
            if (step < totalSteps) {
              setStep(step + 1);
            } else {
              completeOnboarding();
            }
          }}
          disabled={
            (step === 1 && (!formData.storeName || !formData.phone)) ||
            (step === 2 && !formData.category)
          }
          className={`w-full py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg font-medium ${
            ((step === 1 && formData.storeName && formData.phone) ||
             (step === 2 && formData.category) ||
             step >= 3)
              ? 'bg-blue-600 text-white hover:bg-blue-500'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {step < totalSteps ? (
            <>
              Continue
              <ArrowRight className="w-5 h-5" />
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              Start Selling!
            </>
          )}
        </button>

        {step === 1 && (
          <p className="text-center text-xs text-gray-500 mt-3">
            Already have an account? <button className="text-blue-400">Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default MerchantQuickOnboarding;
