import { useState } from 'react';
import {
  Award, Users, Building2, GraduationCap, Heart, Crown, Shield, Sparkles,
  Plus, CheckCircle, XCircle, TrendingUp, Eye, ShoppingCart, DollarSign,
  Target, Zap, Gift, Star, UserCheck, Calendar, Clock, Tag, ArrowRight,
  Bell, Coins, Percent, BadgeCheck, Trophy, Globe, Filter, Search
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantExclusiveDeals() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showCreateOffer, setShowCreateOffer] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const [offerForm, setOfferForm] = useState({
    programId: '',
    title: '',
    discount: '',
    description: '',
    terms: '',
    validUntil: ''
  });

  const [exclusivePrograms, setExclusivePrograms] = useState([
    {
      id: 1,
      name: 'Student Exclusives',
      icon: GraduationCap,
      color: 'blue',
      description: 'Special deals for verified students',
      members: 125000,
      enrolled: true,
      avgDiscount: 30,
      reachMultiplier: 1.5,
      coinBonus: 2,
      benefits: [
        'Access to 125K verified students',
        '2x ReZ Coin earnings on student purchases',
        'Featured in Student Deals section',
        'Campus partnership opportunities',
        'Higher search ranking for student segment'
      ],
      requirements: [
        'Minimum 25% discount for students',
        'Verify student ID at redemption',
        'Valid for 6 months minimum'
      ],
      stats: {
        activeOffers: 3,
        totalRedemptions: 456,
        revenue: 123456,
        avgRating: 4.7
      }
    },
    {
      id: 2,
      name: 'Corporate Perks',
      icon: Building2,
      color: 'indigo',
      description: 'Exclusive offers for corporate employees',
      members: 89000,
      enrolled: true,
      avgDiscount: 25,
      reachMultiplier: 2.0,
      coinBonus: 3,
      benefits: [
        'Access to 89K corporate employees',
        '3x ReZ Coin earnings on corporate orders',
        'B2B partnership opportunities',
        'Bulk order capabilities',
        'Corporate event sponsorship',
        'Priority listing in corporate category'
      ],
      requirements: [
        'Minimum 20% discount for corporate users',
        'Accept bulk orders (10+ items)',
        'Flexible timing for corporate events'
      ],
      stats: {
        activeOffers: 5,
        totalRedemptions: 678,
        revenue: 234567,
        avgRating: 4.8
      }
    },
    {
      id: 3,
      name: 'Women Entrepreneurs',
      icon: Heart,
      color: 'pink',
      description: 'Support women-led businesses',
      members: 67000,
      enrolled: false,
      avgDiscount: 20,
      reachMultiplier: 1.8,
      coinBonus: 2.5,
      benefits: [
        'Access to 67K women entrepreneur community',
        '2.5x ReZ Coin earnings',
        'Featured in Women Entrepreneurs section',
        'Networking event opportunities',
        'Social impact badge on profile',
        'Priority in women-focused campaigns'
      ],
      requirements: [
        'Women-owned or women-led business',
        'Minimum 15% discount',
        'Active community participation'
      ],
      stats: {
        activeOffers: 0,
        totalRedemptions: 0,
        revenue: 0,
        avgRating: 0
      }
    },
    {
      id: 4,
      name: 'Privé Members',
      icon: Crown,
      color: 'yellow',
      description: 'Ultra-premium members',
      members: 12000,
      enrolled: true,
      avgDiscount: 40,
      reachMultiplier: 3.0,
      coinBonus: 5,
      benefits: [
        'Access to 12K high-value Privé members',
        '5x ReZ Coin earnings (highest tier)',
        'White-glove service expected',
        'Premium placement in all listings',
        'Exclusive event invitations',
        'Dedicated account manager support'
      ],
      requirements: [
        'Premium quality products/services',
        'Minimum 30% exclusive discount',
        'VIP customer service standards',
        'Same-day or priority delivery'
      ],
      stats: {
        activeOffers: 2,
        totalRedemptions: 234,
        revenue: 345678,
        avgRating: 4.9
      }
    },
    {
      id: 5,
      name: 'Senior Citizens',
      icon: Shield,
      color: 'purple',
      description: 'Respect and care for seniors',
      members: 45000,
      enrolled: false,
      avgDiscount: 25,
      reachMultiplier: 1.3,
      coinBonus: 2,
      benefits: [
        'Access to 45K senior citizens',
        '2x ReZ Coin earnings',
        'Social responsibility badge',
        'Featured in senior-friendly deals',
        'Community appreciation recognition'
      ],
      requirements: [
        'Minimum 20% senior discount',
        'Accessible facilities',
        'Patient and respectful service'
      ],
      stats: {
        activeOffers: 0,
        totalRedemptions: 0,
        revenue: 0,
        avgRating: 0
      }
    },
    {
      id: 6,
      name: 'Healthcare Workers',
      icon: BadgeCheck,
      color: 'green',
      description: 'Honor frontline heroes',
      members: 34000,
      enrolled: false,
      avgDiscount: 30,
      reachMultiplier: 1.6,
      coinBonus: 3,
      benefits: [
        'Access to 34K verified healthcare workers',
        '3x ReZ Coin earnings',
        'Healthcare Hero badge on profile',
        'Social impact recognition',
        'Media coverage opportunities'
      ],
      requirements: [
        'Minimum 25% healthcare worker discount',
        'Verify healthcare ID',
        'Flexible hours for shift workers'
      ],
      stats: {
        activeOffers: 0,
        totalRedemptions: 0,
        revenue: 0,
        avgRating: 0
      }
    }
  ]);

  const [myExclusiveOffers, setMyExclusiveOffers] = useState([
    {
      id: 1,
      programId: 1,
      programName: 'Student Exclusives',
      title: '40% OFF for Students',
      discount: 40,
      description: 'Special student discount on all menu items',
      status: 'active',
      validUntil: '2024-12-31',
      views: 2345,
      redemptions: 234,
      revenue: 45678,
      rating: 4.7,
      coinEarnings: 4568,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      programId: 2,
      programName: 'Corporate Perks',
      title: 'Corporate Lunch Special',
      discount: 30,
      description: 'Bulk lunch orders for corporate teams',
      status: 'active',
      validUntil: '2024-12-31',
      views: 3456,
      redemptions: 345,
      revenue: 89012,
      rating: 4.8,
      coinEarnings: 8901,
      createdAt: '2024-01-20'
    },
    {
      id: 3,
      programId: 4,
      programName: 'Privé Members',
      title: 'Privé Exclusive: 50% OFF Premium Menu',
      discount: 50,
      description: 'Ultra-premium discount for Privé members',
      status: 'active',
      validUntil: '2024-12-31',
      views: 1234,
      redemptions: 123,
      revenue: 234567,
      rating: 4.9,
      coinEarnings: 23456,
      createdAt: '2024-02-01'
    }
  ]);

  const [coinMultiplierEvents, setCoinMultiplierEvents] = useState([
    {
      id: 1,
      name: 'Weekend Coin Bonanza',
      multiplier: 3,
      startDate: '2024-02-10',
      endDate: '2024-02-11',
      status: 'upcoming',
      enrolled: false,
      requirements: 'Minimum 10 redemptions during event',
      estimatedBonus: 15000
    },
    {
      id: 2,
      name: 'Student Month Special',
      multiplier: 5,
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      status: 'upcoming',
      enrolled: true,
      requirements: 'Active student exclusive offers',
      estimatedBonus: 45000
    },
    {
      id: 3,
      name: 'Corporate Happy Hour',
      multiplier: 4,
      startDate: '2024-02-15',
      endDate: '2024-02-15',
      status: 'upcoming',
      enrolled: false,
      requirements: '5-7 PM only, corporate offers',
      estimatedBonus: 12000
    }
  ]);

  const [sponsoredDeals, setSponsoredDeals] = useState([
    {
      id: 1,
      name: 'ReZ Featured Deal of the Day',
      cost: 5000,
      reach: 50000,
      duration: '24 hours',
      description: 'Top placement on home page for 24 hours',
      estimatedViews: 50000,
      estimatedConversions: 2500,
      projectedRevenue: 125000,
      roi: 2400,
      available: true
    },
    {
      id: 2,
      name: 'Category Hero Banner',
      cost: 3000,
      reach: 25000,
      duration: '7 days',
      description: 'Banner placement in your category',
      estimatedViews: 25000,
      estimatedConversions: 1250,
      projectedRevenue: 62500,
      roi: 1983,
      available: true
    },
    {
      id: 3,
      name: 'Student Newsletter Feature',
      cost: 2000,
      reach: 125000,
      duration: '1 week',
      description: 'Featured in student newsletter (125K subscribers)',
      estimatedViews: 125000,
      estimatedConversions: 3750,
      projectedRevenue: 93750,
      roi: 4587,
      available: true
    }
  ]);

  const [enrollmentStats, setEnrollmentStats] = useState({
    totalPrograms: 6,
    enrolledPrograms: 3,
    totalMembers: 338000,
    accessibleMembers: 226000,
    coinEarningsMultiplier: 3.3,
    monthlyBonusCoins: 36925
  });

  const handleEnroll = (program) => {
    setSelectedProgram(program);
    setShowEnrollModal(true);
  };

  const confirmEnrollment = () => {
    setExclusivePrograms(exclusivePrograms.map(p =>
      p.id === selectedProgram.id ? { ...p, enrolled: true } : p
    ));
    setShowEnrollModal(false);
    setSelectedProgram(null);
  };

  const handleCreateOffer = (e) => {
    e.preventDefault();
    const program = exclusivePrograms.find(p => p.id === parseInt(offerForm.programId));

    const newOffer = {
      id: myExclusiveOffers.length + 1,
      programId: program.id,
      programName: program.name,
      title: offerForm.title,
      discount: parseFloat(offerForm.discount),
      description: offerForm.description,
      status: 'active',
      validUntil: offerForm.validUntil,
      views: 0,
      redemptions: 0,
      revenue: 0,
      rating: 0,
      coinEarnings: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setMyExclusiveOffers([...myExclusiveOffers, newOffer]);
    setShowCreateOffer(false);
    setOfferForm({
      programId: '',
      title: '',
      discount: '',
      description: '',
      terms: '',
      validUntil: ''
    });
  };

  const enrolledPrograms = exclusivePrograms.filter(p => p.enrolled);
  const availablePrograms = exclusivePrograms.filter(p => !p.enrolled);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Exclusive Deal Programs</h1>
                  <p className="text-purple-100 mt-1">Access premium customer segments & earn bonus coins</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowCreateOffer(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Exclusive Offer
            </button>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enrollment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Enrolled</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{enrollmentStats.enrolledPrograms}/{enrollmentStats.totalPrograms}</p>
            <p className="text-sm text-purple-600 mt-1">Programs</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Total Reach</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{(enrollmentStats.accessibleMembers / 1000).toFixed(0)}K</p>
            <p className="text-sm text-blue-600 mt-1">Members</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Coins className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Coin Multiplier</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{enrollmentStats.coinEarningsMultiplier}x</p>
            <p className="text-sm text-yellow-600 mt-1">Avg earnings</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Gift className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Bonus Coins</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{(enrollmentStats.monthlyBonusCoins / 1000).toFixed(0)}K</p>
            <p className="text-sm text-green-600 mt-1">This month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Active Offers</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{myExclusiveOffers.filter(o => o.status === 'active').length}</p>
            <p className="text-sm text-orange-600 mt-1">Live now</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{(myExclusiveOffers.reduce((sum, o) => sum + o.revenue, 0) / 1000).toFixed(0)}K</p>
            <p className="text-sm text-indigo-600 mt-1">Total</p>
          </div>
        </div>

        {/* My Enrolled Programs */}
        {enrolledPrograms.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Enrolled Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledPrograms.map((program) => {
                const Icon = program.icon;
                return (
                  <div
                    key={program.id}
                    className={`bg-white rounded-xl shadow-sm border-2 border-${program.color}-200 p-6 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-${program.color}-100 p-3 rounded-lg`}>
                        <Icon className={`w-8 h-8 text-${program.color}-600`} />
                      </div>
                      <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        ENROLLED
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{program.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Members</p>
                        <p className="text-lg font-bold text-gray-900">{(program.members / 1000).toFixed(0)}K</p>
                      </div>
                      <div className={`bg-${program.color}-50 rounded-lg p-3`}>
                        <p className="text-xs text-gray-600 mb-1">Coin Bonus</p>
                        <p className={`text-lg font-bold text-${program.color}-600`}>{program.coinBonus}x</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Active Offers</span>
                        <span className="font-semibold text-gray-900">{program.stats.activeOffers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Redemptions</span>
                        <span className="font-semibold text-green-600">{program.stats.totalRedemptions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Revenue</span>
                        <span className="font-semibold text-orange-600">₹{(program.stats.revenue / 1000).toFixed(0)}K</span>
                      </div>
                      {program.stats.avgRating > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Rating</span>
                          <span className="font-semibold text-yellow-600 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-500" />
                            {program.stats.avgRating}
                          </span>
                        </div>
                      )}
                    </div>

                    <button className={`w-full py-2 bg-${program.color}-600 text-white rounded-lg hover:bg-${program.color}-700 font-medium`}>
                      View Performance
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Programs */}
        {availablePrograms.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Programs to Join</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availablePrograms.map((program) => {
                const Icon = program.icon;
                return (
                  <div
                    key={program.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`bg-${program.color}-100 p-3 rounded-lg`}>
                        <Icon className={`w-8 h-8 text-${program.color}-600`} />
                      </div>
                      <span className={`px-3 py-1 bg-${program.color}-100 text-${program.color}-700 text-xs font-bold rounded-full`}>
                        {program.coinBonus}x COINS
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{program.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Potential Reach</p>
                        <p className="text-lg font-bold text-gray-900">{(program.members / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Avg Discount</p>
                        <p className="text-lg font-bold text-gray-900">{program.avgDiscount}%</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Key Benefits:</p>
                      <ul className="space-y-1">
                        {program.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleEnroll(program)}
                      className={`w-full py-2 bg-${program.color}-600 text-white rounded-lg hover:bg-${program.color}-700 font-medium flex items-center justify-center gap-2`}
                    >
                      <Plus className="w-4 h-4" />
                      Enroll Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* My Exclusive Offers */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">My Exclusive Offers</h2>
            <button
              onClick={() => setShowCreateOffer(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
            >
              <Plus className="w-4 h-4" />
              Create Offer
            </button>
          </div>

          {myExclusiveOffers.length > 0 ? (
            <div className="space-y-4">
              {myExclusiveOffers.map((offer) => (
                <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                          {offer.programName}
                        </span>
                        <span className={`px-3 py-1 ${
                          offer.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        } text-sm font-medium rounded-full`}>
                          {offer.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Percent className="w-4 h-4" />
                          {offer.discount}% discount
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Valid until {offer.validUntil}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">₹{offer.revenue.toLocaleString()}</p>
                      <p className="text-sm text-yellow-600 flex items-center gap-1 justify-end">
                        <Coins className="w-4 h-4" />
                        {offer.coinEarnings} coins
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Views</p>
                      <p className="text-lg font-bold text-gray-900">{offer.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Redemptions</p>
                      <p className="text-lg font-bold text-green-600">{offer.redemptions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">CVR</p>
                      <p className="text-lg font-bold text-purple-600">
                        {offer.views > 0 ? ((offer.redemptions / offer.views) * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Rating</p>
                      <p className="text-lg font-bold text-yellow-600 flex items-center gap-1">
                        {offer.rating > 0 ? (
                          <>
                            <Star className="w-4 h-4 fill-yellow-500" />
                            {offer.rating}
                          </>
                        ) : '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Created</p>
                      <p className="text-sm font-semibold text-gray-900">{offer.createdAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No exclusive offers yet</h3>
              <p className="text-gray-600 mb-4">Create your first exclusive offer for premium segments</p>
              <button
                onClick={() => setShowCreateOffer(true)}
                className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Plus className="w-5 h-5" />
                Create Exclusive Offer
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coin Multiplier Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl font-bold text-gray-900">Coin Multiplier Events</h2>
            </div>
            <div className="space-y-4">
              {coinMultiplierEvents.map((event) => (
                <div key={event.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{event.name}</h3>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">
                          {event.multiplier}x COINS
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{event.startDate} to {event.endDate}</p>
                      <p className="text-xs text-gray-600">{event.requirements}</p>
                    </div>
                    {event.enrolled ? (
                      <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        ENROLLED
                      </span>
                    ) : (
                      <button className="px-4 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 font-medium">
                        Opt In
                      </button>
                    )}
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Estimated Bonus Earnings</p>
                    <p className="text-lg font-bold text-yellow-600">+{event.estimatedBonus.toLocaleString()} coins</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsored Deal Participation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Sponsored Deal Opportunities</h2>
            </div>
            <div className="space-y-4">
              {sponsoredDeals.map((deal) => (
                <div key={deal.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{deal.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{deal.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {deal.estimatedViews.toLocaleString()} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {deal.reach.toLocaleString()} reach
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {deal.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-white rounded p-2">
                      <p className="text-xs text-gray-600">Cost</p>
                      <p className="font-bold text-gray-900">₹{deal.cost.toLocaleString()}</p>
                    </div>
                    <div className="bg-white rounded p-2">
                      <p className="text-xs text-gray-600">Projected Revenue</p>
                      <p className="font-bold text-green-600">₹{(deal.projectedRevenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div className="bg-white rounded p-2">
                      <p className="text-xs text-gray-600">ROI</p>
                      <p className="font-bold text-purple-600">{deal.roi}%</p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center justify-center gap-2">
                    Participate Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollModal && selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`sticky top-0 bg-gradient-to-r from-${selectedProgram.color}-600 to-${selectedProgram.color}-700 text-white p-6 z-10`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    {(() => {
                      const Icon = selectedProgram.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <h2 className="text-2xl font-bold">Enroll in {selectedProgram.name}</h2>
                </div>
                <button
                  onClick={() => setShowEnrollModal(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Program Benefits</h3>
                <ul className="space-y-2">
                  {selectedProgram.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedProgram.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className={`bg-${selectedProgram.color}-50 rounded-lg p-4 text-center`}>
                  <p className="text-sm text-gray-600 mb-1">Potential Reach</p>
                  <p className="text-2xl font-bold text-gray-900">{(selectedProgram.members / 1000).toFixed(0)}K</p>
                </div>
                <div className={`bg-${selectedProgram.color}-50 rounded-lg p-4 text-center`}>
                  <p className="text-sm text-gray-600 mb-1">Coin Multiplier</p>
                  <p className="text-2xl font-bold text-yellow-600">{selectedProgram.coinBonus}x</p>
                </div>
                <div className={`bg-${selectedProgram.color}-50 rounded-lg p-4 text-center`}>
                  <p className="text-sm text-gray-600 mb-1">Reach Boost</p>
                  <p className="text-2xl font-bold text-green-600">{selectedProgram.reachMultiplier}x</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowEnrollModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmEnrollment}
                  className={`flex-1 px-6 py-3 bg-${selectedProgram.color}-600 text-white rounded-lg hover:bg-${selectedProgram.color}-700 font-semibold`}
                >
                  Confirm Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Offer Modal */}
      {showCreateOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Gift className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Create Exclusive Offer</h2>
                </div>
                <button
                  onClick={() => setShowCreateOffer(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateOffer} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Program *
                </label>
                <select
                  required
                  value={offerForm.programId}
                  onChange={(e) => setOfferForm({ ...offerForm, programId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Choose a program</option>
                  {enrolledPrograms.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name} ({program.coinBonus}x coins)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Title *
                </label>
                <input
                  type="text"
                  required
                  value={offerForm.title}
                  onChange={(e) => setOfferForm({ ...offerForm, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 40% OFF for Students"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount (%) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="99"
                    value={offerForm.discount}
                    onChange={(e) => setOfferForm({ ...offerForm, discount: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valid Until *
                  </label>
                  <input
                    type="date"
                    required
                    value={offerForm.validUntil}
                    onChange={(e) => setOfferForm({ ...offerForm, validUntil: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  value={offerForm.description}
                  onChange={(e) => setOfferForm({ ...offerForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Describe your exclusive offer..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Terms & Conditions
                </label>
                <textarea
                  value={offerForm.terms}
                  onChange={(e) => setOfferForm({ ...offerForm, terms: e.target.value })}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Any specific terms..."
                />
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowCreateOffer(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 font-semibold"
                >
                  Create Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
