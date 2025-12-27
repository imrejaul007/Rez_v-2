import { useState } from 'react';
import {
  Heart, TreePine, Waves, Users, Award, TrendingUp,
  MapPin, Calendar, Target, CheckCircle, Plus, Eye,
  DollarSign, Droplet, Leaf, Wind, Star, Building2
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSocialImpact() {
  const [activeTab, setActiveTab] = useState('events');

  const [socialEvents, setSocialEvents] = useState([
    {
      id: 1,
      title: 'Blood Donation Drive - Mumbai',
      type: 'blood_donation',
      description: 'Help save lives by donating blood at our upcoming drive',
      location: 'Lilavati Hospital, Bandra',
      date: '2024-02-05',
      time: '09:00 - 17:00',
      participants: 156,
      targetParticipants: 200,
      coinsReward: 500,
      status: 'upcoming',
      organizer: 'Red Cross Society',
      impact: '468 lives potentially saved'
    },
    {
      id: 2,
      title: 'Tree Plantation Drive - Aarey Forest',
      type: 'tree_plantation',
      description: 'Join us to plant 1000+ trees in Aarey Forest',
      location: 'Aarey Colony, Goregaon',
      date: '2024-02-12',
      time: '07:00 - 12:00',
      participants: 234,
      targetParticipants: 300,
      coinsReward: 300,
      status: 'upcoming',
      organizer: 'Green Mumbai Foundation',
      impact: '750+ trees to be planted'
    },
    {
      id: 3,
      title: 'Beach Cleanup - Juhu Beach',
      type: 'beach_cleanup',
      description: 'Clean Juhu Beach and protect marine life',
      location: 'Juhu Beach, Mumbai',
      date: '2024-01-28',
      time: '06:00 - 10:00',
      participants: 189,
      targetParticipants: 150,
      coinsReward: 200,
      status: 'active',
      organizer: 'Clean Ocean Initiative',
      impact: '500+ kg waste collected'
    },
    {
      id: 4,
      title: 'Food Distribution Drive',
      type: 'community_service',
      description: 'Distribute meals to underprivileged communities',
      location: 'Various locations across Mumbai',
      date: '2024-02-08',
      time: '10:00 - 14:00',
      participants: 98,
      targetParticipants: 100,
      coinsReward: 400,
      status: 'upcoming',
      organizer: 'Feeding India',
      impact: '1000+ meals to be served'
    }
  ]);

  const [ngoPartners, setNgoPartners] = useState([
    {
      id: 1,
      name: 'Red Cross Society',
      type: 'Healthcare',
      eventsHosted: 12,
      totalParticipants: 2345,
      rating: 4.9,
      verified: true,
      established: '1920',
      contactPerson: 'Dr. Ramesh Kumar',
      email: 'contact@redcross.org'
    },
    {
      id: 2,
      name: 'Green Mumbai Foundation',
      type: 'Environment',
      eventsHosted: 8,
      totalParticipants: 1876,
      rating: 4.7,
      verified: true,
      established: '2010',
      contactPerson: 'Priya Sharma',
      email: 'info@greenmumbai.org'
    },
    {
      id: 3,
      name: 'Clean Ocean Initiative',
      type: 'Environment',
      eventsHosted: 15,
      totalParticipants: 3421,
      rating: 4.8,
      verified: true,
      established: '2015',
      contactPerson: 'Arjun Patel',
      email: 'hello@cleanocean.org'
    },
    {
      id: 4,
      name: 'Feeding India',
      type: 'Community Service',
      eventsHosted: 24,
      totalParticipants: 5678,
      rating: 4.9,
      verified: true,
      established: '2014',
      contactPerson: 'Sneha Gupta',
      email: 'support@feedingindia.org'
    }
  ]);

  const [impactMetrics, setImpactMetrics] = useState({
    bloodDonations: 1234,
    treesPlanted: 5678,
    wasteCollected: 12345,
    mealsServed: 8901,
    totalVolunteers: 3456,
    totalEvents: 67,
    carbonOffset: 234,
    waterSaved: 45678
  });

  const eventTypeIcons = {
    blood_donation: Droplet,
    tree_plantation: TreePine,
    beach_cleanup: Waves,
    community_service: Heart
  };

  const eventTypeColors = {
    blood_donation: 'bg-red-100 text-red-700',
    tree_plantation: 'bg-green-100 text-green-700',
    beach_cleanup: 'bg-blue-100 text-blue-700',
    community_service: 'bg-purple-100 text-purple-700'
  };

  const stats = {
    totalEvents: socialEvents.length,
    upcomingEvents: socialEvents.filter(e => e.status === 'upcoming').length,
    activeEvents: socialEvents.filter(e => e.status === 'active').length,
    totalParticipants: socialEvents.reduce((sum, e) => sum + e.participants, 0),
    ngoPartners: ngoPartners.length,
    totalImpact: impactMetrics.bloodDonations + impactMetrics.treesPlanted + impactMetrics.mealsServed
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Social Impact Management</h1>
              <p className="text-gray-600 mt-1">Manage CSR events, NGO partnerships, and track impact</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="w-5 h-5" />
              Create Event
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Events</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalEvents}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Upcoming</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stats.upcomingEvents}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Participants</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats.totalParticipants}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">NGO Partners</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.ngoPartners}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Impact</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{(stats.totalImpact / 1000).toFixed(1)}K</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Carbon Offset</p>
                <p className="text-3xl font-bold text-teal-600 mt-2">{impactMetrics.carbonOffset}T</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-lg">
                <Wind className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('events')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'events'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Social Events
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ngo')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'ngo'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Building2 className="w-5 h-5" />
                NGO Partners
              </div>
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'impact'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Impact Dashboard
              </div>
            </button>
          </div>

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="p-6">
              <div className="space-y-6">
                {socialEvents.map((event) => {
                  const EventIcon = eventTypeIcons[event.type];
                  const participationRate = (event.participants / event.targetParticipants * 100).toFixed(0);

                  return (
                    <div key={event.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-200 hover:border-indigo-300 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg">
                            <EventIcon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors[event.type]}`}>
                                {event.type.replace('_', ' ').toUpperCase()}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{event.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                {event.date} | {event.time}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Building2 className="w-4 h-4" />
                                {event.organizer}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          event.status === 'active' ? 'bg-green-100 text-green-700' :
                          event.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-sm text-gray-600">Participants</p>
                          <p className="text-2xl font-bold text-blue-600">{event.participants}/{event.targetParticipants}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-sm text-gray-600">Participation Rate</p>
                          <p className="text-2xl font-bold text-green-600">{participationRate}%</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-sm text-gray-600">Coins Reward</p>
                          <p className="text-2xl font-bold text-orange-600">{event.coinsReward}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-sm text-gray-600">Impact</p>
                          <p className="text-lg font-bold text-purple-600">{event.impact}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Registration Progress</span>
                          <span className="font-medium">{participationRate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              participationRate >= 100 ? 'bg-green-600' :
                              participationRate >= 75 ? 'bg-blue-600' :
                              'bg-yellow-600'
                            }`}
                            style={{ width: `${Math.min(participationRate, 100)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                          Edit Event
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* NGO Partners Tab */}
          {activeTab === 'ngo' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ngoPartners.map((ngo) => (
                  <div key={ngo.id} className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-indigo-300 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-lg">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-900">{ngo.name}</h3>
                            {ngo.verified && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{ngo.type}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium text-gray-900">{ngo.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Events Hosted</p>
                        <p className="text-2xl font-bold text-indigo-600">{ngo.eventsHosted}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Participants</p>
                        <p className="text-2xl font-bold text-purple-600">{ngo.totalParticipants.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">Contact Person: <span className="font-medium text-gray-900">{ngo.contactPerson}</span></p>
                      <p className="text-sm text-gray-600">Email: <span className="font-medium text-gray-900">{ngo.email}</span></p>
                      <p className="text-sm text-gray-600">Established: <span className="font-medium text-gray-900">{ngo.established}</span></p>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        View Profile
                      </button>
                      <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-indigo-500 hover:text-indigo-600 font-medium">
                  + Add New NGO Partner
                </button>
              </div>
            </div>
          )}

          {/* Impact Dashboard Tab */}
          {activeTab === 'impact' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 p-3 rounded-lg">
                      <Droplet className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-red-900">Blood Donations</h3>
                  </div>
                  <p className="text-4xl font-bold text-red-900 mb-2">{impactMetrics.bloodDonations.toLocaleString()}</p>
                  <p className="text-sm text-red-700">Units donated</p>
                  <p className="text-xs text-red-600 mt-2">~{(impactMetrics.bloodDonations * 3).toLocaleString()} lives saved</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500 p-3 rounded-lg">
                      <TreePine className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-green-900">Trees Planted</h3>
                  </div>
                  <p className="text-4xl font-bold text-green-900 mb-2">{impactMetrics.treesPlanted.toLocaleString()}</p>
                  <p className="text-sm text-green-700">Trees planted</p>
                  <p className="text-xs text-green-600 mt-2">{impactMetrics.carbonOffset}T CO2 offset</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">Waste Collected</h3>
                  </div>
                  <p className="text-4xl font-bold text-blue-900 mb-2">{(impactMetrics.wasteCollected / 1000).toFixed(1)}T</p>
                  <p className="text-sm text-blue-700">Total waste</p>
                  <p className="text-xs text-blue-600 mt-2">From beaches & parks</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-900">Meals Served</h3>
                  </div>
                  <p className="text-4xl font-bold text-purple-900 mb-2">{impactMetrics.mealsServed.toLocaleString()}</p>
                  <p className="text-sm text-purple-700">Total meals</p>
                  <p className="text-xs text-purple-600 mt-2">To those in need</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Environmental Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Wind className="w-6 h-6 text-teal-600" />
                      <h4 className="font-bold text-teal-900">Carbon Offset</h4>
                    </div>
                    <p className="text-3xl font-bold text-teal-900">{impactMetrics.carbonOffset} Tons</p>
                    <p className="text-sm text-teal-700 mt-2">CO2 reduced</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Droplet className="w-6 h-6 text-cyan-600" />
                      <h4 className="font-bold text-cyan-900">Water Saved</h4>
                    </div>
                    <p className="text-3xl font-bold text-cyan-900">{(impactMetrics.waterSaved / 1000).toFixed(1)}K</p>
                    <p className="text-sm text-cyan-700 mt-2">Liters conserved</p>
                  </div>

                  <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Leaf className="w-6 h-6 text-lime-600" />
                      <h4 className="font-bold text-lime-900">Green Cover</h4>
                    </div>
                    <p className="text-3xl font-bold text-lime-900">{(impactMetrics.treesPlanted * 0.05).toFixed(1)} Acres</p>
                    <p className="text-sm text-lime-700 mt-2">Area greened</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Volunteer Engagement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-indigo-600" />
                      <h4 className="font-bold text-gray-900">Total Volunteers</h4>
                    </div>
                    <p className="text-4xl font-bold text-indigo-600 mb-2">{impactMetrics.totalVolunteers.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Active participants across all events</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-purple-600" />
                      <h4 className="font-bold text-gray-900">Events Completed</h4>
                    </div>
                    <p className="text-4xl font-bold text-purple-600 mb-2">{impactMetrics.totalEvents}</p>
                    <p className="text-sm text-gray-600">Social impact events organized</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
