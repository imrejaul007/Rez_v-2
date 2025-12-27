import { useState } from 'react';
import {
  Layers, MapPin, Calendar, Sparkles, Moon, Star, Sun, Heart,
  ShoppingBag, Store, Crown, Globe, Eye, EyeOff, Palette, Settings,
  Check, X, AlertTriangle, Download, Upload, Save, RefreshCw
} from 'lucide-react';

export default function AdminModeControl() {
  const [selectedCity, setSelectedCity] = useState('all');

  const [cities] = useState([
    { id: 'all', name: 'All Cities', modes: 4, categories: 24, activeThemes: 0 },
    { id: 'mumbai', name: 'Mumbai', modes: 4, categories: 24, activeThemes: 1 },
    { id: 'delhi', name: 'Delhi', modes: 4, categories: 22, activeThemes: 0 },
    { id: 'bangalore', name: 'Bangalore', modes: 4, categories: 23, activeThemes: 2 },
    { id: 'pune', name: 'Pune', modes: 4, categories: 20, activeThemes: 0 },
    { id: 'hyderabad', name: 'Hyderabad', mode: 4, categories: 21, activeThemes: 1 }
  ]);

  const [modes] = useState([
    {
      id: 'near_you',
      name: 'ReZ Near You',
      icon: MapPin,
      description: 'Discover & save at nearby offline stores',
      status: {
        all: true,
        mumbai: true,
        delhi: true,
        bangalore: true,
        pune: true,
        hyderabad: true
      },
      categories: ['Food & Dining', 'Fashion', 'Beauty', 'Groceries', 'Services', 'Entertainment']
    },
    {
      id: 'mall',
      name: 'ReZ Mall',
      icon: ShoppingBag,
      description: 'Online shopping with coins & cashback',
      status: {
        all: true,
        mumbai: true,
        delhi: true,
        bangalore: true,
        pune: false,
        hyderabad: true
      },
      categories: ['Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Toys', 'Sports']
    },
    {
      id: 'cash_store',
      name: 'Cash Store',
      icon: Store,
      description: 'Bill upload & coin earning system',
      status: {
        all: true,
        mumbai: true,
        delhi: true,
        bangalore: true,
        pune: true,
        hyderabad: true
      },
      categories: ['All Categories']
    },
    {
      id: 'prive',
      name: 'ReZ Privé',
      icon: Crown,
      description: 'Exclusive premium experiences',
      status: {
        all: true,
        mumbai: true,
        delhi: true,
        bangalore: true,
        pune: false,
        hyderabad: false
      },
      categories: ['Fine Dining', 'Luxury Fashion', 'Premium Services', 'Exclusive Events']
    }
  ]);

  const [festivalThemes] = useState([
    {
      id: 'diwali',
      name: 'Diwali Mode',
      icon: Sparkles,
      active: false,
      cities: ['mumbai', 'delhi', 'bangalore'],
      startDate: '2024-10-20',
      endDate: '2024-11-05',
      features: [
        'Gold & festive color scheme',
        'Special Diwali offers highlight',
        'Jewelry & sweet shops boosted',
        'Festival greeting messages',
        '2x ReZ Coins on select categories'
      ],
      categoryBoosts: ['Jewelry', 'Sweets', 'Clothing', 'Home Decor', 'Gifts']
    },
    {
      id: 'ramadan',
      name: 'Ramadan Mode',
      icon: Moon,
      active: false,
      cities: ['mumbai', 'delhi', 'hyderabad'],
      startDate: '2024-03-11',
      endDate: '2024-04-10',
      features: [
        'Auto-hide alcohol & non-halal items',
        'Halal certification badge visible',
        'Sehri & Iftar timing integration',
        'Ramadan greeting messages',
        'Charity & donation options'
      ],
      categoryBoosts: ['Halal Food', 'Dates', 'Islamic Books', 'Prayer Items'],
      restrictions: ['Hide Alcohol', 'Hide Adult Content', 'Show only Halal-certified']
    },
    {
      id: 'sawan',
      name: 'Sawan Mode',
      icon: Star,
      active: true,
      cities: ['delhi', 'pune'],
      startDate: '2024-07-22',
      endDate: '2024-08-19',
      features: [
        'Promote vegetarian restaurants',
        'Hide non-veg items in food',
        'Temple & spiritual services highlight',
        'Sawan greeting messages',
        'Fasting-friendly meal options'
      ],
      categoryBoosts: ['Vegetarian Food', 'Spiritual Services', 'Religious Items'],
      restrictions: ['Hide Non-Veg Food', 'Hide Alcohol']
    },
    {
      id: 'christmas',
      name: 'Christmas Mode',
      icon: Star,
      active: false,
      cities: ['all'],
      startDate: '2024-12-15',
      endDate: '2024-12-26',
      features: [
        'Festive red & green theme',
        'Gift & toy categories boosted',
        'Christmas special offers',
        'Holiday greeting messages',
        'Santa coin rewards'
      ],
      categoryBoosts: ['Gifts', 'Toys', 'Cakes', 'Decorations', 'Party Supplies']
    },
    {
      id: 'party',
      name: 'Party Mode',
      icon: Heart,
      active: true,
      cities: ['bangalore', 'mumbai'],
      startDate: 'On-demand',
      endDate: 'On-demand',
      features: [
        'Nightlife & party venues boosted',
        'Adult content visible (age-verified users)',
        'Late-night delivery options',
        'Party package deals',
        'Event ticket integration'
      ],
      categoryBoosts: ['Nightlife', 'Pubs', 'Clubs', 'Party Supplies', 'Fast Food'],
      restrictions: ['Age Verification Required']
    },
    {
      id: 'halal',
      name: 'Halal Mode',
      icon: Moon,
      active: false,
      cities: ['all'],
      startDate: 'Always Available',
      endDate: 'User Toggle',
      features: [
        'Auto-hide alcohol completely',
        'Auto-hide non-halal food',
        'Show halal certification badges',
        'Halal restaurant filter',
        'Islamic finance options'
      ],
      categoryBoosts: ['Halal Food', 'Halal Services'],
      restrictions: ['Hide Alcohol', 'Hide Non-Halal Food', 'Hide Adult Content']
    }
  ]);

  const [categories] = useState([
    {
      name: 'Food & Dining',
      visibility: { all: true, mumbai: true, delhi: true, bangalore: true, pune: true, hyderabad: true },
      ageRestricted: false
    },
    {
      name: 'Fashion & Apparel',
      visibility: { all: true, mumbai: true, delhi: true, bangalore: true, pune: true, hyderabad: true },
      ageRestricted: false
    },
    {
      name: 'Alcohol & Beverages',
      visibility: { all: true, mumbai: true, delhi: false, bangalore: true, pune: true, hyderabad: false },
      ageRestricted: true,
      restrictions: 'Hidden in Halal/Ramadan/Sawan modes'
    },
    {
      name: 'Adult Entertainment',
      visibility: { all: false, mumbai: true, delhi: false, bangalore: true, pune: false, hyderabad: false },
      ageRestricted: true,
      restrictions: 'Age verification required, hidden in family modes'
    },
    {
      name: 'Nightlife & Clubs',
      visibility: { all: true, mumbai: true, delhi: true, bangalore: true, pune: true, hyderabad: true },
      ageRestricted: true,
      restrictions: 'Boosted in Party Mode'
    },
    {
      name: 'Halal Food',
      visibility: { all: true, mumbai: true, delhi: true, bangalore: true, pune: true, hyderabad: true },
      ageRestricted: false,
      restrictions: 'Boosted in Ramadan/Halal modes'
    },
    {
      name: 'Non-Veg Food',
      visibility: { all: true, mumbai: true, delhi: true, bangalore: true, pune: true, hyderabad: true },
      ageRestricted: false,
      restrictions: 'Hidden in Sawan mode for Hindus'
    }
  ]);

  const getModeStatus = (mode, city) => {
    return mode.status[city] || false;
  };

  const toggleMode = (modeId, cityId) => {
    console.log(`Toggle mode ${modeId} for city ${cityId}`);
    // Implementation would update mode status
  };

  const toggleTheme = (themeId) => {
    console.log(`Toggle theme ${themeId}`);
    // Implementation would activate/deactivate festival theme
  };

  const toggleCategory = (categoryName, cityId) => {
    console.log(`Toggle category ${categoryName} for city ${cityId}`);
    // Implementation would update category visibility
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Layers className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Mode & Category Control</h1>
              <p className="text-indigo-100">Manage modes, festival themes, and city-wise visibility</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30"
            >
              {cities.map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5" />
              Export Config
            </button>
          </div>
        </div>

        {/* City Stats */}
        {selectedCity !== 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {cities.filter(c => c.id === selectedCity).map(city => (
              <>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Layers className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{city.modes}</div>
                  <div className="text-sm text-indigo-200">Active Modes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <ShoppingBag className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{city.categories}</div>
                  <div className="text-sm text-indigo-200">Visible Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Sparkles className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{city.activeThemes}</div>
                  <div className="text-sm text-indigo-200">Active Festival Themes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Globe className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{city.name}</div>
                  <div className="text-sm text-indigo-200">Selected City</div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Mode Management */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">ReZ Modes Control</h2>
          <div className="space-y-4">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const isActive = getModeStatus(mode, selectedCity);

              return (
                <div key={mode.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-lg ${isActive ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{mode.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {isActive ? 'ACTIVE' : 'INACTIVE'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{mode.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {mode.categories.map((cat, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleMode(mode.id, selectedCity)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {isActive ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Festival & Vibe Themes */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Festival & Vibe Themes</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Sparkles className="w-4 h-4" />
              Create New Theme
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {festivalThemes.map((theme) => {
              const Icon = theme.icon;
              const isActiveinCity = theme.active && (selectedCity === 'all' || theme.cities.includes(selectedCity));

              return (
                <div key={theme.id} className={`border-2 rounded-lg p-4 ${
                  isActiveinCity ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActiveinCity ? 'bg-indigo-200' : 'bg-gray-100'}`}>
                        <Icon className={`w-5 h-5 ${isActiveinCity ? 'text-indigo-700' : 'text-gray-600'}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{theme.name}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{theme.startDate} to {theme.endDate}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleTheme(theme.id)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        theme.active
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {theme.active ? 'Active' : 'Inactive'}
                    </button>
                  </div>

                  {/* Features */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Features:</h4>
                    <div className="space-y-1">
                      {theme.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Boosts */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Boosted Categories:</h4>
                    <div className="flex flex-wrap gap-1">
                      {theme.categoryBoosts.map((cat, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Restrictions */}
                  {theme.restrictions && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Restrictions:</h4>
                      <div className="flex flex-wrap gap-1">
                        {theme.restrictions.map((restriction, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs flex items-center gap-1">
                            <EyeOff className="w-3 h-3" />
                            {restriction}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Active Cities */}
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span>Active in: {theme.cities.join(', ')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Visibility Control */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Category Visibility Control</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              <span>Age-restricted categories require user verification</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Age Restricted</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Special Restrictions</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => {
                  const isVisible = category.visibility[selectedCity];

                  return (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{category.name}</td>
                      <td className="py-3 px-4 text-center">
                        {isVisible ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            <Eye className="w-3 h-3" />
                            Visible
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            <EyeOff className="w-3 h-3" />
                            Hidden
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {category.ageRestricted ? (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                            18+ Only
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                            All Ages
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {category.restrictions || '-'}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => toggleCategory(category.name, selectedCity)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                            isVisible
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                        >
                          {isVisible ? 'Hide' : 'Show'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
              <Upload className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Bulk Import Config</div>
                <div className="text-xs text-gray-600">Upload city/mode config file</div>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
              <Save className="w-5 h-5 text-green-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Save as Template</div>
                <div className="text-xs text-gray-600">Create reusable configuration</div>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
              <RefreshCw className="w-5 h-5 text-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Reset to Default</div>
                <div className="text-xs text-gray-600">Restore default settings</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
