import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Coins,
  Award,
  Crown,
  Tag,
  ShoppingBag,
  Users,
  Calendar,
  Heart,
  Camera,
  Share2,
  Gift,
  Check,
  X,
  ChevronRight,
  Info,
  Sparkles,
  Lock,
  Unlock,
  TrendingUp,
  Clock
} from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

const CoinSystemGuide = () => {
  const navigate = useNavigate();
  const [selectedCoin, setSelectedCoin] = useState(null);

  const coinTypes = [
    {
      id: 'rez-coin',
      name: 'ReZ Coin',
      icon: '💰',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      description: 'Universal Utility Coin - Most flexible coin',
      tagline: 'Earn from everything you do',

      howToEarn: [
        {
          category: '🛍️ Purchases & Transactions',
          items: [
            'Paying at partner stores (offline & online)',
            'Scan & Pay at stores',
            'Pay via ReZ QR',
            'Bill upload (if applicable)'
          ]
        },
        {
          category: '🤝 Referrals & Growth',
          items: [
            'User referral → when friend completes first transaction',
            'Merchant referral → onboard a new store',
            'College ambassador referrals',
            'Company employee referrals'
          ]
        },
        {
          category: '🎓 College & Community Programs',
          items: [
            'College ambassador tasks',
            'Campus fest participation',
            'College business fest purchases',
            'Event check-ins',
            'Event volunteering'
          ]
        },
        {
          category: '🧠 Tasks & Engagement',
          items: [
            'Daily app open',
            'Daily "Smart Save Task"',
            'Quizzes (brand / general)',
            'Polls & voting',
            'Streak completion',
            'Games inside app',
            'Feature discovery tasks'
          ]
        },
        {
          category: '📢 Social & UGC',
          items: [
            'Sharing offers',
            'Sharing purchase screenshots',
            'Creating UGC (reviews, reels, posts)',
            'Rating stores',
            'Product feedback',
            '"Hero or Trash" product review'
          ]
        },
        {
          category: '🌍 Social Impact / Volunteering',
          badge: 'Powerful Differentiator',
          items: [
            'Blood donation drives',
            'Tree plantation',
            'Cleaning drives',
            'NGO volunteering',
            '💡 Sponsors may add Branded Coins alongside ReZ Coins here'
          ]
        }
      ],

      howToUse: {
        allowed: [
          'Can be used anywhere on ReZ',
          'No upper usage limit',
          'Can cover 100% of payable amount',
          'Maximum flexibility'
        ],
        restricted: [
          'Cannot be used to buy Gift Cards/Vouchers'
        ],
        logic: 'ReZ Coin = internal currency. Gift cards = external cash equivalent → restricted'
      }
    },
    {
      id: 'branded-coin',
      name: 'Branded Coin',
      icon: '🏪',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Merchant/Brand-Specific - Drive loyalty',
      tagline: 'Earn loyalty from your favorite brands',

      howToEarn: [
        {
          category: '🏪 Brand Purchases',
          items: [
            'Buying from a specific brand/store',
            'In-store or online via ReZ'
          ]
        },
        {
          category: '📦 Brand Tasks',
          items: [
            'Product reviews',
            'Brand quizzes',
            'Feedback forms',
            'Mystery shopper tasks',
            'Try & review programs',
            'Sample / trial store participation'
          ]
        },
        {
          category: '🎥 Content & Influence',
          items: [
            'Brand UGC creation',
            'Reels, stories, posts',
            'Campaign participation',
            'Influencer-style tasks (even for nano creators)'
          ]
        },
        {
          category: '🤝 Sponsored Social Impact',
          items: [
            'Blood donation sponsored by brand',
            'Tree plantation sponsored by brand',
            'Cleaning drives with brand partner',
            'Example: Blood donation by Apollo → Apollo Branded Coin'
          ]
        }
      ],

      howToUse: {
        allowed: [
          'Redeemable only at that specific brand',
          'Can be used without any upper limit',
          'Can cover 100% of the bill (brand decides)',
          'Builds deep brand loyalty'
        ],
        restricted: [
          'Cannot be used to buy Gift Cards/Vouchers',
          'Cannot be used at other brands'
        ],
        logic: 'Brand coins drive repeat loyalty, not cash leakage'
      }
    },
    {
      id: 'prive-coin',
      name: 'Privé Coin',
      icon: '👑',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-500/10 to-orange-500/10',
      borderColor: 'border-amber-500/30',
      description: 'Premium, Status-Driven Coin - Most powerful',
      tagline: 'Elite status currency for top users',
      exclusive: true,

      howToEarn: [
        {
          category: '👑 Privé Eligibility & Status',
          badge: 'Not for everyone',
          items: [
            'Invited to ReZ Privé',
            'High engagement score',
            'High trust & spending behavior',
            'Influence & content quality',
            'Brand trust score'
          ]
        },
        {
          category: '💎 Premium Actions',
          items: [
            'High-value purchases',
            'Luxury store transactions',
            'Privé-only campaigns',
            'Elite brand collaborations',
            'Signature events participation'
          ]
        },
        {
          category: '🎯 Campaigns & Influence',
          items: [
            'Privé brand campaigns',
            'Premium content approvals',
            'High-quality content bonuses',
            'Early task completion bonuses'
          ]
        },
        {
          category: '🏆 Performance & Loyalty',
          items: [
            'Monthly elite performance bonus',
            'Top influencer recognition',
            'High conversion brand campaigns'
          ]
        }
      ],

      howToUse: {
        allowed: [
          'Can be used ANYWHERE',
          'No category restriction',
          'No merchant restriction',
          'No upper usage limit',
          'Can be used for Gift cards',
          'Can be used for Vouchers',
          'Luxury stores',
          'Experiences',
          'Events',
          'Services'
        ],
        restricted: [],
        logic: 'Privé Coin = status currency. Must feel superior to all others.'
      }
    },
    {
      id: 'promo-coin',
      name: 'Promo Coin',
      icon: '🎁',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      description: 'System-Controlled, Not Earned - Growth lever',
      tagline: 'Special rewards from ReZ',
      systemControlled: true,

      howToEarn: [
        {
          category: '🎁 How Promo Coins Are Given (NOT earned)',
          badge: 'System Controlled',
          items: [
            'New user onboarding',
            'College fest campaigns',
            'Company onboarding',
            'Special occasions (Diwali, Eid, etc.)',
            'Flash sales',
            'Retention campaigns',
            'Win-back campaigns',
            'Event-based rewards'
          ]
        }
      ],

      howToUse: {
        allowed: [
          'Time-bound usage',
          'Purpose-specific',
          'Controlled by ReZ'
        ],
        restricted: [
          'Max % per bill (e.g. 20-30%)',
          'Category-restricted',
          'Merchant-restricted',
          'Time-restricted',
          'One-time use',
          'Non-transferable'
        ],
        logic: 'Promo Coin = growth lever, not loyalty currency'
      }
    }
  ];

  const autoApplyPriority = [
    { order: 1, coin: 'Promo Coin', reason: 'Use it first, expires soon', icon: '🎁', color: 'text-blue-500' },
    { order: 2, coin: 'Branded Coin', reason: 'Merchant loyalty', icon: '🏪', color: 'text-purple-500' },
    { order: 3, coin: 'ReZ Coin', reason: 'Universal usage', icon: '💰', color: 'text-emerald-500' },
    { order: 4, coin: 'Privé Coin', reason: 'User can choose to save or use', icon: '👑', color: 'text-amber-500' }
  ];

  const systemStrengths = [
    {
      title: 'Clear Separation of Roles',
      points: [
        'ReZ Coin → daily habit & scale',
        'Branded Coin → merchant loyalty',
        'Privé Coin → aspiration & exclusivity',
        'Promo Coin → growth & activation'
      ]
    },
    {
      title: 'No Coin Cannibalization',
      points: [
        'Different earning paths',
        'Different redemption psychology',
        'Each serves unique purpose'
      ]
    },
    {
      title: 'Merchants Are Happy',
      points: [
        'Brand coins don\'t leak outside',
        'Discounts feel controlled',
        'Loyalty increases'
      ]
    },
    {
      title: 'Users Feel Powerful',
      points: [
        '"I can pay fully with coins"',
        '"I\'m earning from everything I do"',
        '"Even volunteering pays me back"'
      ]
    }
  ];

  const CoinDetailView = ({ coin }) => (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-black border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => setSelectedCoin(null)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{coin.icon}</span>
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">{coin.name}</h1>
            </div>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{coin.tagline}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Overview Card */}
        <div className={`p-6 rounded-rez-xl bg-gradient-to-br ${coin.bgColor} border ${coin.borderColor}`}>
          <p className="text-body text-rez-navy dark:text-white font-medium">{coin.description}</p>
          {coin.exclusive && (
            <div className="mt-3 flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Crown className="w-4 h-4" />
              <span className="text-caption font-semibold">Exclusive to elite users</span>
            </div>
          )}
          {coin.systemControlled && (
            <div className="mt-3 flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Lock className="w-4 h-4" />
              <span className="text-caption font-semibold">Controlled by ReZ System</span>
            </div>
          )}
        </div>

        {/* How to Earn */}
        <div>
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            How to Earn {coin.name}
          </h2>
          <div className="space-y-4">
            {coin.howToEarn.map((section, idx) => (
              <div key={idx} className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-rez-navy dark:text-white">{section.category}</h3>
                  {section.badge && (
                    <span className="px-2 py-1 rounded-full bg-rez-green-500/20 text-xs font-bold text-rez-green-600 dark:text-rez-green-400">
                      {section.badge}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-rez-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div>
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            How to Use {coin.name}
          </h2>

          {/* Allowed */}
          {coin.howToUse.allowed.length > 0 && (
            <div className="mb-4 p-4 rounded-rez-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Unlock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-300">Where You Can Use</h3>
              </div>
              <ul className="space-y-2">
                {coin.howToUse.allowed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-body-sm text-emerald-800 dark:text-emerald-300">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Restricted */}
          {coin.howToUse.restricted.length > 0 && (
            <div className="mb-4 p-4 rounded-rez-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-semibold text-red-900 dark:text-red-300">Restrictions</h3>
              </div>
              <ul className="space-y-2">
                {coin.howToUse.restricted.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-body-sm text-red-800 dark:text-red-300">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Logic */}
          <div className="p-4 rounded-rez-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-blue-900 dark:text-blue-300">Why?</h3>
            </div>
            <p className="text-body-sm text-blue-800 dark:text-blue-300 italic">{coin.howToUse.logic}</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedCoin) {
    const coin = coinTypes.find(c => c.id === selectedCoin);
    return <CoinDetailView coin={coin} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">ReZ Coin System</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Understanding all 4 coin types</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Hero */}
        <div className="mb-8 p-6 rounded-rez-xl bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-amber-500/10 border border-rez-gray-200 dark:border-white/10 text-center">
          <div className="text-5xl mb-3">💰🏪👑🎁</div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">4 Types of Coins</h2>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
            Each coin has a unique purpose and power
          </p>
        </div>

        {/* Coin Cards */}
        <div className="space-y-3 mb-8">
          {coinTypes.map((coin) => (
            <button
              key={coin.id}
              onClick={() => setSelectedCoin(coin.id)}
              className={`w-full p-5 rounded-rez-xl bg-gradient-to-br ${coin.bgColor} border ${coin.borderColor} hover:shadow-rez-card transition-all text-left`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-rez-lg bg-gradient-to-br ${coin.color} flex items-center justify-center shrink-0`}>
                  <span className="text-3xl">{coin.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">{coin.name}</h3>
                    {coin.exclusive && <Crown className="w-4 h-4 text-amber-500" />}
                    {coin.systemControlled && <Lock className="w-4 h-4 text-blue-500" />}
                  </div>
                  <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-2">{coin.description}</p>
                  <p className="text-caption text-rez-gray-500 dark:text-gray-500 italic">"{coin.tagline}"</p>
                </div>
                <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 shrink-0" />
              </div>
            </button>
          ))}
        </div>

        {/* Auto-Apply Priority */}
        <div className="mb-8">
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Auto-Apply Priority at Checkout
          </h2>
          <div className="p-5 rounded-rez-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-200 dark:border-amber-500/30">
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
              When you checkout, coins are applied in this smart order:
            </p>
            <div className="space-y-3">
              {autoApplyPriority.map((item) => (
                <div key={item.order} className="flex items-start gap-3 p-3 rounded-rez-md bg-white dark:bg-white/5">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.order === 1 ? 'from-amber-500 to-orange-500' : 'from-rez-gray-200 to-rez-gray-300 dark:from-white/10 dark:to-white/5'} flex items-center justify-center shrink-0`}>
                    <span className={`text-sm font-bold ${item.order === 1 ? 'text-white' : 'text-rez-gray-600 dark:text-gray-400'}`}>{item.order}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{item.icon}</span>
                      <h3 className="font-semibold text-rez-navy dark:text-white">{item.coin}</h3>
                    </div>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-caption text-rez-gray-500 dark:text-gray-500 mt-4 text-center italic">
              Advanced users can override manually
            </p>
          </div>
        </div>

        {/* System Strengths */}
        <div className="mb-8">
          <h2 className="text-h4 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Why This System Works
          </h2>
          <div className="space-y-3">
            {systemStrengths.map((strength, idx) => (
              <div key={idx} className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
                <h3 className="font-semibold text-rez-navy dark:text-white mb-3">{strength.title}</h3>
                <ul className="space-y-2">
                  {strength.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-rez-green-50 to-purple-50 dark:from-rez-green-500/10 dark:to-purple-500/10 border border-rez-green-200 dark:border-rez-green-500/20 text-center">
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Ready to Start Earning?</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            "Smart people use ReZ to save money"
          </p>
          <button
            onClick={() => navigate('/earn')}
            className="px-6 py-3 rounded-rez-lg bg-gradient-to-r from-rez-green-500 to-rez-teal-500 hover:from-rez-green-600 hover:to-rez-teal-600 text-white font-semibold transition-all"
          >
            Explore Ways to Earn
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CoinSystemGuide;
