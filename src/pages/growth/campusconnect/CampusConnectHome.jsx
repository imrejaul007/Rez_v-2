import React, { useState } from 'react';
import {
  Search, MapPin, Star, Users, Gift, ChevronRight,
  GraduationCap, Trophy, Zap, Crown, Calendar, Target,
  BookOpen, Coffee, Pizza, Shirt, Ticket, PartyPopper
} from 'lucide-react';

// CampusConnect Home: College Ambassador Program
// Backend API: GET /api/growth/campus/home
// Backend API: GET /api/growth/campus/colleges
// Backend API: GET /api/growth/campus/leaderboard
// Backend API: POST /api/growth/campus/ambassador/apply

const CampusConnectHome = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const myProfile = {
    isAmbassador: true,
    college: "VIT University, Vellore",
    role: "Campus Ambassador",
    rank: 3,
    points: 4500,
    referrals: 89,
    events: 5
  };

  const campusDeals = [
    { id: 1, name: "Campus Pizza Party", brand: "Domino's", discount: "50%", icon: "🍕", endsIn: "2 days", forStudents: true },
    { id: 2, name: "Textbook Exchange", brand: "BookMyBook", discount: "40%", icon: "📚", endsIn: "5 days", forStudents: true },
    { id: 3, name: "Student Fashion Sale", brand: "Myntra", discount: "60%", icon: "👕", endsIn: "3 days", forStudents: true },
    { id: 4, name: "Movie Night", brand: "PVR", discount: "Buy 1 Get 1", icon: "🎬", endsIn: "1 day", forStudents: true }
  ];

  const leaderboard = [
    { rank: 1, name: "Arjun K.", college: "IIT Delhi", points: 8900, avatar: "👨‍🎓" },
    { rank: 2, name: "Priya M.", college: "BITS Pilani", points: 7200, avatar: "👩‍🎓" },
    { rank: 3, name: "Rejaul K.", college: "VIT Vellore", points: 4500, avatar: "👨‍🎓", isMe: true },
    { rank: 4, name: "Sneha R.", college: "NIT Trichy", points: 4100, avatar: "👩‍🎓" },
    { rank: 5, name: "Rahul S.", college: "DTU Delhi", points: 3800, avatar: "👨‍🎓" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "ReZ Freshers Fest",
      type: "Event",
      date: "Jan 15, 2025",
      venue: "Campus Auditorium",
      registrations: 450,
      coins: 500
    },
    {
      id: 2,
      name: "Startup Pitch Competition",
      type: "Competition",
      date: "Jan 20, 2025",
      venue: "Main Hall",
      registrations: 120,
      coins: 1000
    }
  ];

  const categories = [
    { id: 1, name: "Food", icon: "🍔", count: 45 },
    { id: 2, name: "Fashion", icon: "👕", count: 32 },
    { id: 3, name: "Books", icon: "📚", count: 28 },
    { id: 4, name: "Electronics", icon: "💻", count: 25 },
    { id: 5, name: "Entertainment", icon: "🎬", count: 18 },
    { id: 6, name: "Travel", icon: "✈️", count: 15 }
  ];

  const ambassadorPerks = [
    { icon: Gift, text: "Exclusive swag", subtext: "ReZ merch kit" },
    { icon: Trophy, text: "Monthly prizes", subtext: "Up to ₹10K" },
    { icon: Ticket, text: "Event passes", subtext: "VIP access" },
    { icon: GraduationCap, text: "Certificate", subtext: "Leadership" }
  ];

  const challenges = [
    { id: 1, name: "Onboard 10 friends", progress: 7, target: 10, reward: 500 },
    { id: 2, name: "Host a meetup", progress: 0, target: 1, reward: 1000 },
    { id: 3, name: "Share 5 deals", progress: 3, target: 5, reward: 250 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">CampusConnect</h1>
            </div>
            <p className="text-indigo-200 text-sm">Student Exclusive Deals</p>
          </div>
          <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-white font-bold">{myProfile.points.toLocaleString()}</span>
          </div>
        </div>

        {/* Ambassador Card */}
        {myProfile.isAmbassador && (
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-2xl">
                🎓
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-white font-bold">{myProfile.role}</h2>
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-bold">
                    #{myProfile.rank}
                  </span>
                </div>
                <p className="text-indigo-200 text-sm">{myProfile.college}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{myProfile.referrals}</p>
                <p className="text-indigo-200 text-xs">Referrals</p>
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mt-4 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search student deals..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button key={cat.id} className="flex-shrink-0 bg-white rounded-xl px-4 py-3 shadow-sm flex items-center gap-2">
              <span className="text-xl">{cat.icon}</span>
              <div className="text-left">
                <p className="font-medium text-gray-800 text-sm">{cat.name}</p>
                <p className="text-xs text-gray-500">{cat.count} deals</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Campus Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Campus Exclusive
          </h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {campusDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-20 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-4xl relative">
                {deal.icon}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount}
                </div>
                {deal.forStudents && (
                  <div className="absolute top-2 left-2 bg-indigo-500 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" />
                    Student
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{deal.name}</h3>
                <p className="text-xs text-gray-500">{deal.brand}</p>
                <p className="text-xs text-orange-600 mt-1">Ends in {deal.endsIn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Top Ambassadors
          </h2>
          <button className="text-indigo-600 text-sm">Full List</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {leaderboard.map((user, idx) => (
            <div key={user.rank} className={`p-4 flex items-center gap-3 ${
              idx !== leaderboard.length - 1 ? 'border-b border-gray-100' : ''
            } ${user.isMe ? 'bg-indigo-50' : ''}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                user.rank === 1 ? 'bg-yellow-500 text-yellow-900' :
                user.rank === 2 ? 'bg-gray-400 text-gray-800' :
                user.rank === 3 ? 'bg-amber-600 text-amber-100' :
                'bg-gray-200 text-gray-600'
              }`}>
                {user.rank}
              </span>
              <span className="text-2xl">{user.avatar}</span>
              <div className="flex-1">
                <h3 className={`font-medium text-sm ${user.isMe ? 'text-indigo-600' : 'text-gray-800'}`}>
                  {user.name} {user.isMe && '(You)'}
                </h3>
                <p className="text-xs text-gray-500">{user.college}</p>
              </div>
              <span className="text-indigo-600 font-bold">{user.points.toLocaleString()} pts</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-500" />
            Campus Events
          </h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                  <h3 className="font-bold text-gray-800 mt-2">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.date} • {event.venue}</p>
                </div>
                <div className="text-right">
                  <p className="text-indigo-600 font-bold">+{event.coins}🪙</p>
                  <p className="text-xs text-gray-500">{event.registrations} joined</p>
                </div>
              </div>
              <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg font-medium text-sm">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ambassador Challenges */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Weekly Challenges</h2>
        <div className="space-y-3">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800">{challenge.name}</h3>
                <span className="text-green-600 font-bold">+{challenge.reward}🪙</span>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>{challenge.progress}/{challenge.target}</span>
                  <span>{Math.round((challenge.progress / challenge.target) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambassador Perks */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3">Ambassador Perks</h3>
          <div className="grid grid-cols-4 gap-2">
            {ambassadorPerks.map((perk, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-3 text-center">
                <perk.icon className="w-6 h-6 text-white mx-auto" />
                <p className="text-white text-xs font-medium mt-1">{perk.text}</p>
                <p className="text-indigo-200 text-xs">{perk.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusConnectHome;
