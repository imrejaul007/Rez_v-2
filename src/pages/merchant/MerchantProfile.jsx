import { useState } from 'react';
import {
  Building2, Mail, Phone, Globe, MapPin, Clock, Upload,
  FileText, CreditCard, CheckCircle, XCircle, AlertCircle,
  Image as ImageIcon, Video, Camera, Tag, Save, Plus, Trash2,
  Shield, Edit2, ExternalLink, Calendar
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantProfile() {
  const [activeTab, setActiveTab] = useState('basic');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Basic Info State
  const [storeName, setStoreName] = useState('The Coffee House');
  const [category, setCategory] = useState('Food & Beverage');
  const [description, setDescription] = useState('Premium coffee shop offering artisanal coffee, fresh pastries, and a cozy atmosphere for work and relaxation.');
  const [tags, setTags] = useState(['Coffee', 'Cafe', 'Wifi', 'Work-friendly', 'Outdoor Seating']);
  const [logoUrl, setLogoUrl] = useState('/placeholder-logo.jpg');
  const [bannerUrl, setBannerUrl] = useState('/placeholder-banner.jpg');

  // Contact & Location State
  const [contactPhone, setContactPhone] = useState('+91 98765 43210');
  const [contactEmail, setContactEmail] = useState('contact@coffeehouse.com');
  const [website, setWebsite] = useState('https://coffeehouse.com');
  const [address, setAddress] = useState('123 MG Road, Bangalore, Karnataka 560001');
  const [latitude, setLatitude] = useState('12.9716');
  const [longitude, setLongitude] = useState('77.5946');

  // Operating Hours State
  const [operatingHours, setOperatingHours] = useState({
    monday: { open: '09:00', close: '21:00', closed: false },
    tuesday: { open: '09:00', close: '21:00', closed: false },
    wednesday: { open: '09:00', close: '21:00', closed: false },
    thursday: { open: '09:00', close: '21:00', closed: false },
    friday: { open: '09:00', close: '21:00', closed: false },
    saturday: { open: '10:00', close: '22:00', closed: false },
    sunday: { open: '10:00', close: '20:00', closed: false }
  });

  // Multiple Locations State
  const [locations, setLocations] = useState([
    { id: 1, name: 'MG Road', address: '123 MG Road, Bangalore', phone: '+91 98765 43210', isPrimary: true },
    { id: 2, name: 'Koramangala', address: '456 Koramangala, Bangalore', phone: '+91 98765 43211', isPrimary: false }
  ]);

  // Online Brand Settings State
  const [isOnlineBrand, setIsOnlineBrand] = useState(false);
  const [brandWebsite, setBrandWebsite] = useState('https://example.com');
  const [trackingLink, setTrackingLink] = useState('https://example.com/track?ref=rez');
  const [affiliateNetwork, setAffiliateNetwork] = useState('Amazon Associates');
  const [productCategories, setProductCategories] = useState(['Electronics', 'Fashion', 'Home & Kitchen']);
  const [shippingPolicy, setShippingPolicy] = useState('Free shipping on orders above ₹500');
  const [returnPolicy, setReturnPolicy] = useState('30-day return policy');

  // Verification State
  const [gstNumber, setGstNumber] = useState('29ABCDE1234F1Z5');
  const [panNumber, setPanNumber] = useState('ABCDE1234F');
  const [businessLicense, setBusinessLicense] = useState('BL123456789');
  const [ownerIdType, setOwnerIdType] = useState('Aadhaar');
  const [ownerId, setOwnerId] = useState('1234-5678-9012');
  const [bankAccountNumber, setBankAccountNumber] = useState('1234567890');
  const [ifscCode, setIfscCode] = useState('HDFC0001234');
  const [accountHolderName, setAccountHolderName] = useState('The Coffee House Pvt Ltd');
  const [verificationStatus, setVerificationStatus] = useState('verified'); // verified, pending, rejected

  // Store Media State
  const [storePhotos, setStorePhotos] = useState([
    { id: 1, url: '/photo1.jpg', type: 'storefront', caption: 'Main entrance' },
    { id: 2, url: '/photo2.jpg', type: 'interior', caption: 'Seating area' },
    { id: 3, url: '/photo3.jpg', type: 'products', caption: 'Coffee selection' }
  ]);
  const [storeVideos, setStoreVideos] = useState([
    { id: 1, url: '/video1.mp4', thumbnail: '/thumb1.jpg', title: 'Store tour' }
  ]);
  const [virtualTourUrl, setVirtualTourUrl] = useState('https://virtualtour.example.com');

  const handleSaveChanges = (section) => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const toggleStoreDay = (day) => {
    setOperatingHours(prev => ({
      ...prev,
      [day]: { ...prev[day], closed: !prev[day].closed }
    }));
  };

  const updateOperatingHours = (day, field, value) => {
    setOperatingHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addLocation = () => {
    const newLocation = {
      id: locations.length + 1,
      name: '',
      address: '',
      phone: '',
      isPrimary: false
    };
    setLocations([...locations, newLocation]);
  };

  const removeLocation = (id) => {
    setLocations(locations.filter(loc => loc.id !== id));
  };

  const addProductCategory = () => {
    const newCategory = prompt('Enter product category:');
    if (newCategory && !productCategories.includes(newCategory)) {
      setProductCategories([...productCategories, newCategory]);
    }
  };

  const removeProductCategory = (category) => {
    setProductCategories(productCategories.filter(cat => cat !== category));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Store Profile</h1>
              <p className="text-gray-600 mt-1">Manage your business profile and verification</p>
            </div>
            {saveSuccess && (
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Changes saved successfully!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('basic')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'basic'
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  Basic Info
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'contact'
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  Contact & Location
                </button>
                <button
                  onClick={() => setActiveTab('online')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'online'
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  Online Brand
                </button>
                <button
                  onClick={() => setActiveTab('verification')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'verification'
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Shield className="w-5 h-5" />
                  Verification
                </button>
                <button
                  onClick={() => setActiveTab('media')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'media'
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Camera className="w-5 h-5" />
                  Store Media
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Basic Info Tab */}
              {activeTab === 'basic' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>

                  {/* Logo & Banner Upload */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Store Logo</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Click to upload logo</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Click to upload banner</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Store/Brand Name</label>
                      <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Fashion & Apparel">Fashion & Apparel</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                        <option value="Home & Living">Home & Living</option>
                        <option value="Health & Fitness">Health & Fitness</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Services">Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        placeholder="Describe your business..."
                      />
                      <p className="text-xs text-gray-500 mt-1">{description.length}/500 characters</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                          >
                            {tag}
                            <button
                              onClick={() => removeTag(tag)}
                              className="hover:text-indigo-900"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add a tag..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              addTag(e.target.value);
                              e.target.value = '';
                            }
                          }}
                        />
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleSaveChanges('basic')}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                      >
                        <Save className="w-5 h-5" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact & Location Tab */}
              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Contact & Location</h2>

                  <div className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              value={contactPhone}
                              onChange={(e) => setContactPhone(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              value={contactEmail}
                              onChange={(e) => setContactEmail(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="url"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Primary Location */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Location</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <textarea
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              rows={2}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                            <input
                              type="text"
                              value={latitude}
                              onChange={(e) => setLatitude(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                            <input
                              type="text"
                              value={longitude}
                              onChange={(e) => setLongitude(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Map preview will appear here
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
                      <div className="space-y-3">
                        {Object.entries(operatingHours).map(([day, hours]) => (
                          <div key={day} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-28">
                              <p className="font-medium text-gray-900 capitalize">{day}</p>
                            </div>
                            <label className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={hours.closed}
                                onChange={() => toggleStoreDay(day)}
                                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                              />
                              <span className="text-sm text-gray-600">Closed</span>
                            </label>
                            {!hours.closed && (
                              <>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <input
                                    type="time"
                                    value={hours.open}
                                    onChange={(e) => updateOperatingHours(day, 'open', e.target.value)}
                                    className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                  />
                                </div>
                                <span className="text-gray-400">-</span>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="time"
                                    value={hours.close}
                                    onChange={(e) => updateOperatingHours(day, 'close', e.target.value)}
                                    className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Multiple Locations */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Multiple Locations</h3>
                        <button
                          onClick={addLocation}
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                          Add Location
                        </button>
                      </div>
                      <div className="space-y-4">
                        {locations.map((location) => (
                          <div key={location.id} className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-indigo-600" />
                                <input
                                  type="text"
                                  value={location.name}
                                  placeholder="Location name"
                                  className="font-medium text-gray-900 border-b border-transparent hover:border-gray-300 focus:border-indigo-500 outline-none"
                                />
                                {location.isPrimary && (
                                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Primary</span>
                                )}
                              </div>
                              {!location.isPrimary && (
                                <button
                                  onClick={() => removeLocation(location.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                            <div className="space-y-3">
                              <input
                                type="text"
                                value={location.address}
                                placeholder="Address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                              />
                              <input
                                type="tel"
                                value={location.phone}
                                placeholder="Phone"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleSaveChanges('contact')}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                      >
                        <Save className="w-5 h-5" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Online Brand Settings Tab */}
              {activeTab === 'online' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Online Brand Settings</h2>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Enable Online Brand Mode</p>
                        <p className="text-sm text-gray-600">For e-commerce and online-only businesses</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isOnlineBrand}
                          onChange={(e) => setIsOnlineBrand(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>

                    {isOnlineBrand && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="url"
                              value={brandWebsite}
                              onChange={(e) => setBrandWebsite(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Link</label>
                          <div className="relative">
                            <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="url"
                              value={trackingLink}
                              onChange={(e) => setTrackingLink(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Link for tracking referrals from ReZ</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Affiliate Network</label>
                          <select
                            value={affiliateNetwork}
                            onChange={(e) => setAffiliateNetwork(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="Amazon Associates">Amazon Associates</option>
                            <option value="Flipkart Affiliate">Flipkart Affiliate</option>
                            <option value="Commission Junction">Commission Junction</option>
                            <option value="ShareASale">ShareASale</option>
                            <option value="Direct">Direct</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Product Categories</label>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {productCategories.map((category, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                              >
                                {category}
                                <button
                                  onClick={() => removeProductCategory(category)}
                                  className="hover:text-purple-900"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={addProductCategory}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
                          >
                            <Plus className="w-4 h-4" />
                            Add Category
                          </button>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Policy</label>
                          <textarea
                            value={shippingPolicy}
                            onChange={(e) => setShippingPolicy(e.target.value)}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            placeholder="Describe your shipping policy..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Return Policy</label>
                          <textarea
                            value={returnPolicy}
                            onChange={(e) => setReturnPolicy(e.target.value)}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            placeholder="Describe your return policy..."
                          />
                        </div>
                      </>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleSaveChanges('online')}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                      >
                        <Save className="w-5 h-5" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Verification Tab */}
              {activeTab === 'verification' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Business Verification</h2>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      verificationStatus === 'verified' ? 'bg-green-100 text-green-700' :
                      verificationStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {verificationStatus === 'verified' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Verified</span>
                        </>
                      ) : verificationStatus === 'pending' ? (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span className="font-medium">Pending Review</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5" />
                          <span className="font-medium">Rejected</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Business Documents */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Documents</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                          <input
                            type="text"
                            value={gstNumber}
                            onChange={(e) => setGstNumber(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number</label>
                          <input
                            type="text"
                            value={panNumber}
                            onChange={(e) => setPanNumber(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Business License Number</label>
                          <input
                            type="text"
                            value={businessLicense}
                            onChange={(e) => setBusinessLicense(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Upload GST Certificate</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">PDF up to 5MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Owner ID Verification */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner ID Verification</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">ID Type</label>
                          <select
                            value={ownerIdType}
                            onChange={(e) => setOwnerIdType(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="Aadhaar">Aadhaar Card</option>
                            <option value="PAN">PAN Card</option>
                            <option value="Passport">Passport</option>
                            <option value="Driving License">Driving License</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">ID Number</label>
                          <input
                            type="text"
                            value={ownerId}
                            onChange={(e) => setOwnerId(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Upload ID Document</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">PDF or Image up to 5MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bank Account Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Account Details</h3>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-blue-900 mb-2">Account Holder Name</label>
                            <input
                              type="text"
                              value={accountHolderName}
                              onChange={(e) => setAccountHolderName(e.target.value)}
                              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-blue-900 mb-2">Account Number</label>
                              <input
                                type="text"
                                value={bankAccountNumber}
                                onChange={(e) => setBankAccountNumber(e.target.value)}
                                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-blue-900 mb-2">IFSC Code</label>
                              <input
                                type="text"
                                value={ifscCode}
                                onChange={(e) => setIfscCode(e.target.value)}
                                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-blue-900 mb-2">Upload Cancelled Cheque</label>
                            <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer bg-white">
                              <CreditCard className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                              <p className="text-sm text-blue-900">Click to upload or drag and drop</p>
                              <p className="text-xs text-blue-700 mt-1">PDF or Image up to 5MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleSaveChanges('verification')}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                      >
                        <Save className="w-5 h-5" />
                        Submit for Verification
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Store Media Tab */}
              {activeTab === 'media' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Store Media</h2>

                  <div className="space-y-8">
                    {/* Photos */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Store Photos (Max 10)</h3>
                        <span className="text-sm text-gray-600">{storePhotos.length}/10 uploaded</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {storePhotos.map((photo) => (
                          <div key={photo.id} className="relative group">
                            <div className="aspect-square bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-12 h-12 text-gray-400" />
                              </div>
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="mt-2">
                              <p className="text-xs text-gray-600">{photo.type}</p>
                              <p className="text-xs text-gray-500">{photo.caption}</p>
                            </div>
                          </div>
                        ))}
                        {storePhotos.length < 10 && (
                          <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-indigo-500 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">Upload Photo</p>
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-xs text-gray-600">
                        <div className="px-3 py-2 bg-blue-50 rounded text-center">Storefront</div>
                        <div className="px-3 py-2 bg-green-50 rounded text-center">Interior</div>
                        <div className="px-3 py-2 bg-purple-50 rounded text-center">Products</div>
                        <div className="px-3 py-2 bg-orange-50 rounded text-center">Team</div>
                      </div>
                    </div>

                    {/* Videos */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Store Videos (Max 3)</h3>
                        <span className="text-sm text-gray-600">{storeVideos.length}/3 uploaded</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {storeVideos.map((video) => (
                          <div key={video.id} className="relative group">
                            <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                              <div className="w-full h-full flex items-center justify-center">
                                <Video className="w-12 h-12 text-gray-400" />
                              </div>
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="mt-2 text-sm text-gray-900">{video.title}</p>
                          </div>
                        ))}
                        {storeVideos.length < 3 && (
                          <div className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-indigo-500 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">Upload Video</p>
                            <p className="text-xs text-gray-500 mt-1">MP4, MOV up to 50MB</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Virtual Tour */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Virtual Tour (Optional)</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Virtual Tour URL</label>
                          <div className="relative">
                            <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="url"
                              value={virtualTourUrl}
                              onChange={(e) => setVirtualTourUrl(e.target.value)}
                              placeholder="https://virtualtour.example.com"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Link to 360-degree virtual tour (Google Street View, Matterport, etc.)</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => handleSaveChanges('media')}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                      >
                        <Save className="w-5 h-5" />
                        Save Media
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
