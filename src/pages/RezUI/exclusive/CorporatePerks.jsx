import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Clock, Coffee, Utensils, Car, Dumbbell } from 'lucide-react';
import { corporateDealsExtended } from '../../data/exclusiveDeals';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const CorporatePerks = () => {
  const [selectedTime, setSelectedTime] = useState('all');

  const timeSlots = [
    { id: 'all', label: 'All Day', icon: '🕐' },
    { id: 'morning', label: 'Morning', time: '9 AM - 12 PM', icon: '🌅' },
    { id: 'lunch', label: 'Lunch', time: '12 PM - 3 PM', icon: '🍽️' },
    { id: 'evening', label: 'Evening', time: 'After 6 PM', icon: '🌆' },
  ];

  const filteredDeals = selectedTime === 'all'
    ? corporateDealsExtended
    : corporateDealsExtended.filter(d => {
        if (selectedTime === 'lunch' && d.validTime?.includes('12 PM')) return true;
        if (selectedTime === 'evening' && d.validTime?.includes('6 PM')) return true;
        return false;
      });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800/30 to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link to="/deal-store" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">Corporate Perks</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Office hour specials & team deals</p>
          </div>
          <div className="text-4xl">🏢</div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-4 p-6 rounded-3xl bg-gradient-to-r from-slate-600/30 to-gray-700/30 border border-slate-500/20">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-500/30 flex items-center justify-center">
            <Building2 className="w-8 h-8 text-slate-300" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Work Smarter, Save Better</h2>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Exclusive deals for working professionals</p>
          </div>
        </div>

        {/* Current Time Indicator */}
        <div className="mt-4 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 flex items-center gap-3">
          <Clock className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-sm text-rez-navy dark:text-white">It's Lunch Time!</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Best deals available now</p>
          </div>
          <Badge variant="success" size="sm">Live</Badge>
        </div>
      </div>

      {/* Time-based Filter */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Deals by Time</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">Find deals perfect for your schedule</p>
        </div>
        <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => setSelectedTime(slot.id)}
              className={`flex flex-col items-center p-3 rounded-2xl shrink-0 min-w-[90px] transition-all ${
                selectedTime === slot.id
                  ? 'bg-slate-500/30 border border-slate-400/50'
                  : 'bg-white/5'
              }`}
            >
              <span className="text-2xl mb-1">{slot.icon}</span>
              <span className="text-sm font-medium text-rez-navy dark:text-white">{slot.label}</span>
              {slot.time && (
                <span className="text-xs text-rez-gray-600 dark:text-gray-400">{slot.time}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Access Categories */}
      <div className="grid grid-cols-4 gap-2 px-4 mt-4">
        {[
          { icon: <Coffee className="w-5 h-5" />, label: 'Coffee', color: 'amber' },
          { icon: <Utensils className="w-5 h-5" />, label: 'Lunch', color: 'orange' },
          { icon: <Car className="w-5 h-5" />, label: 'Commute', color: 'blue' },
          { icon: <Dumbbell className="w-5 h-5" />, label: 'Fitness', color: 'green' },
        ].map((cat, i) => (
          <button
            key={i}
            className={`p-3 rounded-2xl bg-${cat.color}-500/10 flex flex-col items-center gap-1`}
          >
            <span className={`text-${cat.color}-400`}>{cat.icon}</span>
            <span className="text-xs text-rez-gray-700 dark:text-gray-300">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Deals List */}
      <div className="mt-6 px-4 space-y-3">
        <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Available Deals</h3>

        {filteredDeals.map((deal) => (
          <Card key={deal.id} className="p-4 overflow-hidden" hover>
            <div className="flex gap-4">
              {deal.image && (
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {deal.storeLogo && (
                        <img
                          src={deal.storeLogo}
                          alt=""
                          className="w-6 h-6 rounded object-contain bg-white"
                        />
                      )}
                      <p className="font-medium text-rez-navy dark:text-white">{deal.store}</p>
                    </div>
                    <p className="text-sm text-rez-gray-700 dark:text-gray-300 mt-1">{deal.title}</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-slate-500/20">
                    <span className="text-sm font-bold text-slate-300">{deal.discount}</span>
                  </div>
                </div>

                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-2">{deal.description}</p>

                <div className="flex items-center gap-2 mt-3">
                  {deal.validTime && (
                    <Badge variant="default" size="xs">
                      <Clock className="w-3 h-3" />
                      {deal.validTime}
                    </Badge>
                  )}
                  <Badge variant="default" size="xs">🏢 Corporate</Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Team Orders Section */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
        <div className="flex items-center gap-3">
          <span className="text-3xl">👥</span>
          <div className="flex-1">
            <p className="font-semibold text-rez-navy dark:text-white">Team Orders</p>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Order for your team & get extra discounts</p>
          </div>
          <Button variant="secondary" size="sm">Explore</Button>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth>
          Connect Work Email for More Deals
        </Button>
      </div>
    </div>
  );
};

export default CorporatePerks;
