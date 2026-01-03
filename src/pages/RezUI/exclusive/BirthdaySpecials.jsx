import { Link } from 'react-router-dom';
import { ArrowLeft, Gift, Cake, PartyPopper, Calendar, Star } from 'lucide-react';
import { birthdayDealsExtended } from '../../data/exclusiveDeals';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const BirthdaySpecials = () => {
  // Mock birthday data
  const userBirthday = {
    date: 'December 25',
    daysUntil: 4,
    isActive: true // Within birthday week
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900/20 via-pink-900/10 to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link to="/deal-store" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">Birthday Specials</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Your special day rewards</p>
          </div>
          <div className="text-4xl">🎂</div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-4 p-6 rounded-3xl bg-gradient-to-r from-amber-500/30 via-pink-500/20 to-red-500/30 border border-amber-500/20 relative overflow-hidden">
        {/* Confetti effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#F59E0B', '#EC4899', '#8B5CF6', '#10B981'][i % 4],
                opacity: 0.6
              }}
            />
          ))}
        </div>

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rez-gray-100 dark:bg-white/10 mb-4">
            <Cake className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-medium">Birthday Week Active!</span>
          </div>

          <h2 className="text-3xl font-bold text-rez-navy dark:text-white">Happy Birthday! 🎉</h2>
          <p className="text-rez-gray-700 dark:text-gray-300 mt-2">Enjoy exclusive gifts & rewards this week</p>

          <div className="flex justify-center gap-4 mt-6">
            <div className="px-5 py-3 rounded-2xl bg-rez-gray-100 dark:bg-white/10">
              <p className="text-2xl font-bold text-amber-400">{birthdayDealsExtended.length}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Free Gifts</p>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-rez-gray-100 dark:bg-white/10">
              <p className="text-2xl font-bold text-pink-400">500</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Bonus Coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Birthday Countdown (if not active) */}
      {!userBirthday.isActive && (
        <div className="mx-4 mt-4 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">
            <Calendar className="w-7 h-7 text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-rez-navy dark:text-white">Your birthday: {userBirthday.date}</p>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">{userBirthday.daysUntil} days until your special day</p>
          </div>
          <Button variant="secondary" size="sm">Update</Button>
        </div>
      )}

      {/* Birthday Gifts */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Your Birthday Gifts</h3>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">Claim within your birthday week</p>
        </div>

        <div className="px-4 space-y-3">
          {birthdayDealsExtended.map((deal) => (
            <Card key={deal.id} className="p-4 relative overflow-hidden" hover>
              {/* Gift ribbon */}
              <div className="absolute -top-1 -right-8 w-24 h-6 bg-gradient-to-r from-amber-500 to-red-500 transform rotate-45 flex items-center justify-center">
                <span className="text-[10px] font-bold text-rez-navy dark:text-white">FREE</span>
              </div>

              <div className="flex gap-4">
                {deal.image && (
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {deal.storeLogo && (
                      <img
                        src={deal.storeLogo}
                        alt=""
                        className="w-5 h-5 rounded object-contain bg-white"
                      />
                    )}
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.store || 'ReZ'}</p>
                  </div>

                  <p className="font-medium text-rez-navy dark:text-white">{deal.title}</p>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1">{deal.description}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" size="xs">🎂 Birthday Gift</Badge>
                    {deal.terms && (
                      <span className="text-xs text-rez-gray-600 dark:text-gray-500">{deal.terms}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Claim button */}
              <div className="mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
                <Button variant="amber" size="sm" fullWidth>
                  Claim Gift
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bonus Coins Card */}
      <div className="mx-4 mt-6 p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/30 flex items-center justify-center">
            <span className="text-4xl">🪙</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-amber-400">500 Bonus Coins</p>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Auto-credited to your wallet</p>
            <Badge variant="success" size="xs" className="mt-1">Credited</Badge>
          </div>
        </div>
      </div>

      {/* Party Mode */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <div className="flex items-center gap-3">
          <PartyPopper className="w-6 h-6 text-purple-400" />
          <div className="flex-1">
            <p className="font-medium text-rez-navy dark:text-white">Share Your Birthday Joy</p>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Invite friends & both get bonus coins</p>
          </div>
          <Button variant="secondary" size="sm">Share</Button>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth className="bg-gradient-to-r from-amber-500 to-pink-500">
          <Gift className="w-5 h-5 mr-2" />
          Claim All Birthday Gifts
        </Button>
      </div>
    </div>
  );
};

export default BirthdaySpecials;
