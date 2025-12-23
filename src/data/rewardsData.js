// Complete 3-Level Rewards System for ReZ
// Level 1: Brand-specific rewards
// Level 2: Category-wide rewards
// Level 3: App-wide rewards

// ============================================
// LEVEL 1: BRAND-SPECIFIC REWARDS
// ============================================

export const brandRewards = {
  starbucks: [
    { visits: 1, reward: '₹100 cashback', icon: '🎉', type: 'cashback', value: 100, status: 'claimed' },
    { visits: 5, reward: 'Free Grande Drink', icon: '☕', type: 'freebie', value: 350, status: 'current' },
    { visits: 10, reward: '15% Extra Cashback Forever', icon: '🥈', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 25, reward: 'Priority Service + 20% Extra', icon: '🥇', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 50, reward: 'Exclusive Events + VIP Perks', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 100, reward: 'Free Coffee Subscription (1 month)', icon: '🎊', type: 'freebie', value: 2000, status: 'locked' }
  ],

  lakme: [
    { visits: 1, reward: '₹200 off first service', icon: '🎉', type: 'discount', value: 200, status: 'claimed' },
    { visits: 3, reward: 'Free Hair Spa', icon: '💆‍♀️', type: 'freebie', value: 800, status: 'locked' },
    { visits: 5, reward: '20% Extra Cashback', icon: '🥈', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 10, reward: 'Free Facial + Priority Booking', icon: '🥇', type: 'freebie', value: 1500, status: 'locked' },
    { visits: 20, reward: 'VIP Member - 30% Discount', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' }
  ],

  'biryani-blues': [
    { visits: 1, reward: 'Free Raita with order', icon: '🎉', type: 'freebie', value: 50, status: 'claimed' },
    { visits: 5, reward: 'Free Biryani', icon: '🍛', type: 'freebie', value: 300, status: 'locked' },
    { visits: 10, reward: '15% Off Forever', icon: '🥈', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 15, reward: 'Free Family Meal', icon: '🥇', type: 'freebie', value: 1200, status: 'locked' },
    { visits: 25, reward: 'VIP Card - 25% Off Always', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' }
  ],

  dominos: [
    { visits: 1, reward: 'Free Garlic Bread', icon: '🎉', type: 'freebie', value: 99, status: 'claimed' },
    { visits: 5, reward: 'Buy 1 Get 1 Pizza', icon: '🍕', type: 'offer', value: 500, status: 'locked' },
    { visits: 10, reward: 'Free Medium Pizza', icon: '🥈', type: 'freebie', value: 400, status: 'locked' },
    { visits: 20, reward: 'Free Large Pizza + Sides', icon: '🥇', type: 'freebie', value: 800, status: 'locked' },
    { visits: 30, reward: 'Pizza Lover Card - 30% Off', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' }
  ],

  nykaa: [
    { visits: 1, reward: '₹300 off first purchase', icon: '🎉', type: 'discount', value: 300, status: 'claimed' },
    { visits: 3, reward: 'Free Beauty Sample Box', icon: '💄', type: 'freebie', value: 500, status: 'locked' },
    { visits: 5, reward: '20% Extra Cashback', icon: '🥈', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 10, reward: 'Premium Beauty Kit', icon: '🥇', type: 'freebie', value: 2000, status: 'locked' },
    { visits: 15, reward: 'Beauty Insider - Exclusive Access', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' }
  ],

  zara: [
    { visits: 1, reward: '₹500 off first purchase', icon: '🎉', type: 'discount', value: 500, status: 'claimed' },
    { visits: 3, reward: '15% Off Next Purchase', icon: '👗', type: 'discount', value: 0, status: 'locked' },
    { visits: 5, reward: 'Early Access to Sale', icon: '🥈', type: 'perk', value: 0, status: 'locked' },
    { visits: 10, reward: 'Personal Styling Session', icon: '🥇', type: 'freebie', value: 3000, status: 'locked' },
    { visits: 15, reward: 'VIP Shopper - 25% Off Always', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' }
  ],

  ccd: [
    { visits: 1, reward: 'Free Cookie', icon: '🎉', type: 'freebie', value: 50, status: 'claimed' },
    { visits: 5, reward: 'Free Regular Coffee', icon: '☕', type: 'freebie', value: 150, status: 'locked' },
    { visits: 10, reward: 'Coffee Lover Card - 15% Off', icon: '🥈', type: 'tier_upgrade', value: 0, status: 'locked' },
    { visits: 20, reward: 'Free Coffee + Snack (10 times)', icon: '🥇', type: 'freebie', value: 2000, status: 'locked' },
    { visits: 30, reward: 'VIP Card - Free Drink Daily', icon: '👑', type: 'tier_upgrade', value: 0, status: 'locked' }
  ]
};

// ============================================
// LEVEL 2: CATEGORY-WIDE REWARDS
// ============================================

export const categoryRewards = {
  'Food & Dining': {
    categoryName: 'Food & Dining',
    icon: '🍽️',
    color: 'from-orange-500/20 to-red-600/10',
    borderColor: 'border-orange-500/30',
    description: 'Explore different restaurants and unlock rewards',
    rewards: [
      {
        totalVisits: 10,
        reward: '₹200 Food Voucher',
        description: 'Usable at any partner restaurant',
        icon: '🎫',
        type: 'voucher',
        value: 200,
        status: 'claimed'
      },
      {
        totalVisits: 25,
        reward: 'Foodie Badge + 100 Bonus Coins',
        description: 'Show off your foodie status',
        icon: '🍕',
        type: 'badge',
        value: 100,
        status: 'current'
      },
      {
        totalVisits: 50,
        reward: 'Food Explorer - 10% Off All Restaurants',
        description: 'Permanent discount across all food partners',
        icon: '🥈',
        type: 'tier',
        value: 0,
        status: 'locked'
      },
      {
        totalVisits: 100,
        reward: 'Gourmet Card - 15% Off + Priority Seating',
        description: 'VIP treatment everywhere',
        icon: '🥇',
        type: 'tier',
        value: 0,
        status: 'locked'
      },
      {
        totalVisits: 200,
        reward: 'Food Legend - 20% Off + Free Delivery',
        description: 'Ultimate food lover status',
        icon: '👑',
        type: 'tier',
        value: 0,
        status: 'locked'
      }
    ],
    // Track different brands visited
    diversityBonus: [
      { brandsVisited: 3, reward: '+50 Bonus Coins', icon: '🎯', status: 'claimed' },
      { brandsVisited: 5, reward: '+100 Bonus Coins', icon: '🎯', status: 'current' },
      { brandsVisited: 7, reward: '+200 Bonus Coins + Special Badge', icon: '🌟', status: 'locked' }
    ]
  },

  'Beauty & Wellness': {
    categoryName: 'Beauty & Wellness',
    icon: '💄',
    color: 'from-pink-500/20 to-purple-600/10',
    borderColor: 'border-pink-500/30',
    description: 'Pamper yourself and earn beauty rewards',
    rewards: [
      {
        totalVisits: 5,
        reward: '₹300 Beauty Voucher',
        description: 'Usable at any beauty partner',
        icon: '🎫',
        type: 'voucher',
        value: 300,
        status: 'claimed'
      },
      {
        totalVisits: 10,
        reward: 'Beauty Enthusiast Badge + 150 Coins',
        description: 'Show your beauty passion',
        icon: '💅',
        type: 'badge',
        value: 150,
        status: 'locked'
      },
      {
        totalVisits: 20,
        reward: 'Beauty Insider - 15% Off All Services',
        description: 'Permanent beauty discount',
        icon: '🥈',
        type: 'tier',
        value: 0,
        status: 'locked'
      },
      {
        totalVisits: 40,
        reward: 'Beauty VIP - 20% Off + Priority Booking',
        description: 'Skip the queue',
        icon: '🥇',
        type: 'tier',
        value: 0,
        status: 'locked'
      },
      {
        totalVisits: 75,
        reward: 'Beauty Icon - Free Monthly Service',
        description: 'One free service every month',
        icon: '👑',
        type: 'tier',
        value: 0,
        status: 'locked'
      }
    ],
    diversityBonus: [
      { brandsVisited: 2, reward: '+75 Bonus Coins', icon: '🎯', status: 'claimed' },
      { brandsVisited: 3, reward: '+150 Bonus Coins', icon: '🎯', status: 'locked' },
      { brandsVisited: 4, reward: '+300 Bonus Coins + Special Badge', icon: '🌟', status: 'locked' }
    ]
  },

  'Fashion': {
    categoryName: 'Fashion',
    icon: '👗',
    color: 'from-purple-500/20 to-indigo-600/10',
    borderColor: 'border-purple-500/30',
    description: 'Build your wardrobe and unlock style rewards',
    rewards: [
      {
        totalVisits: 3,
        reward: '₹500 Fashion Voucher',
        description: 'Usable at any fashion brand',
        icon: '🎫',
        type: 'voucher',
        value: 500,
        status: 'claimed'
      },
      {
        totalVisits: 7,
        reward: 'Style Badge + 200 Coins',
        description: 'Fashion forward status',
        icon: '👔',
        type: 'badge',
        value: 200,
        status: 'locked'
      },
      {
        totalVisits: 15,
        reward: 'Fashion Lover - 12% Off All Brands',
        description: 'Permanent fashion discount',
        icon: '🥈',
        type: 'tier',
        value: 0,
        status: 'locked'
      },
      {
        totalVisits: 30,
        reward: 'Fashionista - 18% Off + Early Sale Access',
        description: 'Shop before everyone else',
        icon: '🥇',
        type: 'tier',
        value: 0,
        status: 'locked'
      },
      {
        totalVisits: 50,
        reward: 'Style Icon - 25% Off + Personal Styling',
        description: 'Free styling consultation monthly',
        icon: '👑',
        type: 'tier',
        value: 0,
        status: 'locked'
      }
    ],
    diversityBonus: [
      { brandsVisited: 2, reward: '+100 Bonus Coins', icon: '🎯', status: 'locked' },
      { brandsVisited: 4, reward: '+250 Bonus Coins', icon: '🎯', status: 'locked' },
      { brandsVisited: 6, reward: '+500 Bonus Coins + Fashionista Badge', icon: '🌟', status: 'locked' }
    ]
  }
};

// ============================================
// LEVEL 3: APP-WIDE REWARDS (ReZ Master)
// ============================================

export const appWideRewards = {
  programName: 'ReZ Master Journey',
  icon: '🏆',
  description: 'Ultimate rewards across ALL categories',
  color: 'from-amber-500/20 to-orange-600/10',
  borderColor: 'border-amber-500/30',

  // Overall ReZ usage rewards
  rewards: [
    {
      milestone: 'First Week',
      requirement: '3 purchases in 7 days',
      reward: '₹100 ReZ Bonus',
      description: 'Welcome to ReZ!',
      icon: '🎉',
      type: 'cashback',
      value: 100,
      status: 'claimed'
    },
    {
      milestone: '1 Month Active',
      requirement: '10 purchases in 30 days',
      reward: 'Active User Badge + 200 Coins',
      description: 'You\'re getting the hang of it',
      icon: '⭐',
      type: 'badge',
      value: 200,
      status: 'claimed'
    },
    {
      milestone: 'Category Explorer',
      requirement: 'Shop in 3 different categories',
      reward: 'Explorer Badge + 300 Coins',
      description: 'Trying new things!',
      icon: '🗺️',
      type: 'badge',
      value: 300,
      status: 'current'
    },
    {
      milestone: 'ReZ Regular',
      requirement: '50 total purchases',
      reward: '5% Extra Cashback Forever',
      description: 'Permanent boost on all purchases',
      icon: '🥉',
      type: 'tier',
      value: 0,
      status: 'locked'
    },
    {
      milestone: 'ReZ Champion',
      requirement: '100 total purchases',
      reward: '8% Extra Cashback + Priority Support',
      description: 'You\'re a ReZ champion!',
      icon: '🥈',
      type: 'tier',
      value: 0,
      status: 'locked'
    },
    {
      milestone: 'ReZ Legend',
      requirement: '250 total purchases',
      reward: '12% Extra Cashback + VIP Benefits',
      description: 'Legendary status achieved',
      icon: '🥇',
      type: 'tier',
      value: 0,
      status: 'locked'
    },
    {
      milestone: 'ReZ Master',
      requirement: '500 total purchases',
      reward: '15% Extra Cashback + Lifetime VIP',
      description: 'Ultimate ReZ Master',
      icon: '👑',
      type: 'tier',
      value: 0,
      status: 'locked'
    }
  ],

  // Diversity rewards (using multiple categories)
  diversityRewards: [
    {
      categories: 2,
      reward: 'Multi-Category Badge + 100 Coins',
      icon: '🎯',
      status: 'claimed'
    },
    {
      categories: 3,
      reward: 'Category Explorer + 250 Coins',
      icon: '🌟',
      status: 'current'
    },
    {
      categories: 4,
      reward: 'ReZ All-Rounder + 500 Coins',
      icon: '💫',
      status: 'locked'
    },
    {
      categories: 5,
      reward: 'Ultimate Explorer + 1000 Coins + 2% Global Boost',
      icon: '🏅',
      status: 'locked'
    }
  ],

  // Spending milestones
  spendingMilestones: [
    { spent: 5000, reward: '₹250 Bonus', icon: '💰', status: 'claimed' },
    { spent: 10000, reward: '₹500 Bonus + 3% Boost', icon: '💎', status: 'claimed' },
    { spent: 25000, reward: '₹1500 Bonus + 5% Boost', icon: '💰', status: 'current' },
    { spent: 50000, reward: '₹3500 Bonus + 7% Boost', icon: '💎', status: 'locked' },
    { spent: 100000, reward: '₹10000 Bonus + 10% Boost Forever', icon: '👑', status: 'locked' }
  ],

  // Streak rewards (consecutive days/weeks of usage)
  streakRewards: [
    { days: 7, reward: '+50 Coins Daily Bonus', icon: '🔥', status: 'claimed' },
    { days: 14, reward: '+100 Coins Weekly Bonus', icon: '🔥', status: 'current' },
    { days: 30, reward: '+300 Coins Monthly Bonus', icon: '🔥', status: 'locked' },
    { days: 90, reward: '+1000 Coins Quarterly Bonus', icon: '🔥', status: 'locked' },
    { days: 365, reward: '+5000 Coins Yearly Bonus + Lifetime Member', icon: '👑', status: 'locked' }
  ],

  // Referral rewards
  referralRewards: [
    { referrals: 1, reward: '₹100 per friend', icon: '👥', status: 'claimed' },
    { referrals: 5, reward: '₹500 + Influencer Badge', icon: '🌟', status: 'locked' },
    { referrals: 10, reward: '₹1500 + Community Leader', icon: '👑', status: 'locked' },
    { referrals: 25, reward: '₹5000 + ReZ Ambassador', icon: '🏆', status: 'locked' }
  ]
};

// Helper functions
export const getBrandRewards = (brandId) => {
  return brandRewards[brandId] || [];
};

export const getCategoryRewards = (categoryName) => {
  return categoryRewards[categoryName] || null;
};

export const getAppWideRewards = () => {
  return appWideRewards;
};

// Get user's progress for a specific reward level
export const calculateRewardProgress = (userVisits, targetVisits) => {
  return Math.min((userVisits / targetVisits) * 100, 100);
};

// Determine reward status based on user progress
export const getRewardStatus = (userProgress, rewardRequirement) => {
  if (userProgress >= rewardRequirement) return 'claimed';
  if (userProgress >= rewardRequirement * 0.7) return 'current';
  return 'locked';
};
