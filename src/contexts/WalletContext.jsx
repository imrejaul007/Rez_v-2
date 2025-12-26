import { createContext, useContext, useReducer } from 'react';

const WalletContext = createContext();

const initialState = {
  // Coin balances - Enhanced with detailed metadata
  rezCoins: {
    balance: 1120,
    expiry: '30 days',
    usableAt: 'All partner stores',
    description: 'Universal rewards usable anywhere on ReZ',
    color: '#00C06A',
    icon: '🟢'
  },

  brandedCoins: [
    {
      merchant: 'Starbucks',
      brandId: 'starbucks',
      balance: 120,
      logo: '☕',
      color: '#00704A',
      expiry: 'No expiry',
      usableAt: 'Starbucks only',
      description: 'Earned from Starbucks purchases',
      loyaltyData: {
        lifetimeVisits: 18,
        visitsThisMonth: 4,
        targetVisitsThisMonth: 5,
        memberSince: 'Jan 2024',
        loyaltyLevel: 'silver',
        currentStreak: 2,
        streakReward: 50,
        totalCoinsEarned: 1240,
        cashbackSaved: 980
      }
    },
    {
      merchant: 'Lakmé',
      brandId: 'lakme',
      balance: 80,
      logo: '💄',
      color: '#E91E63',
      expiry: 'No expiry',
      usableAt: 'Lakmé only',
      description: 'Earned from Lakmé purchases',
      loyaltyData: {
        lifetimeVisits: 8,
        visitsThisMonth: 2,
        targetVisitsThisMonth: 5,
        memberSince: 'Mar 2024',
        loyaltyLevel: 'bronze',
        currentStreak: 0,
        streakReward: 30,
        totalCoinsEarned: 420,
        cashbackSaved: 340
      }
    },
    {
      merchant: 'Biryani Blues',
      brandId: 'biryani-blues',
      balance: 120,
      logo: '🍛',
      color: '#FF6B35',
      expiry: 'No expiry',
      usableAt: 'Biryani Blues only',
      description: 'Welcome bonus',
      loyaltyData: {
        lifetimeVisits: 12,
        visitsThisMonth: 3,
        targetVisitsThisMonth: 5,
        memberSince: 'Feb 2024',
        loyaltyLevel: 'silver',
        currentStreak: 1,
        streakReward: 40,
        totalCoinsEarned: 680,
        cashbackSaved: 520
      }
    },
    {
      merchant: 'Dominos',
      brandId: 'dominos',
      balance: 95,
      logo: '🍕',
      color: '#0066FF',
      expiry: 'No expiry',
      usableAt: 'Dominos only',
      description: 'Pizza lover rewards',
      loyaltyData: {
        lifetimeVisits: 15,
        visitsThisMonth: 2,
        targetVisitsThisMonth: 10,
        memberSince: 'Jan 2024',
        loyaltyLevel: 'bronze',
        currentStreak: 0,
        streakReward: 50,
        totalCoinsEarned: 890,
        cashbackSaved: 670
      }
    },
    {
      merchant: 'Nykaa',
      brandId: 'nykaa',
      balance: 60,
      logo: '💅',
      color: '#FC2779',
      expiry: 'No expiry',
      usableAt: 'Nykaa only',
      description: 'Beauty rewards',
      loyaltyData: {
        lifetimeVisits: 6,
        visitsThisMonth: 1,
        targetVisitsThisMonth: 5,
        memberSince: 'Apr 2024',
        loyaltyLevel: 'bronze',
        currentStreak: 0,
        streakReward: 25,
        totalCoinsEarned: 320,
        cashbackSaved: 280
      }
    },
    {
      merchant: 'Zara',
      brandId: 'zara',
      balance: 150,
      logo: '👗',
      color: '#000000',
      expiry: 'No expiry',
      usableAt: 'Zara only',
      description: 'Fashion rewards',
      loyaltyData: {
        lifetimeVisits: 10,
        visitsThisMonth: 1,
        targetVisitsThisMonth: 3,
        memberSince: 'Feb 2024',
        loyaltyLevel: 'silver',
        currentStreak: 0,
        streakReward: 75,
        totalCoinsEarned: 1200,
        cashbackSaved: 1450
      }
    },
    {
      merchant: 'Café Coffee Day',
      brandId: 'ccd',
      balance: 45,
      logo: '☕',
      color: '#6F4E37',
      expiry: 'No expiry',
      usableAt: 'Café Coffee Day only',
      description: 'Coffee rewards',
      loyaltyData: {
        lifetimeVisits: 14,
        visitsThisMonth: 3,
        targetVisitsThisMonth: 5,
        memberSince: 'Jan 2024',
        loyaltyLevel: 'silver',
        currentStreak: 1,
        streakReward: 35,
        totalCoinsEarned: 560,
        cashbackSaved: 420
      }
    }
  ],

  promoCoins: {
    balance: 180,
    expiry: '3 days',
    expiryDate: '2024-12-25',
    maxRedemption: '20% per bill',
    description: 'Special coins from campaigns & events',
    color: '#FFC857',
    icon: '🔥',
    campaign: 'Festival Bonus'
  },

  // Cashback balance (real money)
  cashbackBalance: 522,
  pendingRewards: 200,

  // Savings stats
  savingsStats: {
    totalSaved: 4820,
    thisMonth: 620,
    avgPerVisit: 45,
    monthlyTrend: [320, 450, 380, 520, 590, 620] // Last 6 months
  },

  // Transaction history - Enhanced
  transactions: [
    {
      id: 1,
      type: 'earned',
      amount: 40,
      coinType: 'rez',
      store: "Domino's",
      storeIcon: '🍕',
      date: '2024-12-20',
      time: '14:30',
      description: 'Earned on order #1234',
      orderId: '#1234'
    },
    {
      id: 2,
      type: 'spent',
      amount: 120,
      coinType: 'rez',
      store: 'Nykaa',
      storeIcon: '💄',
      date: '2024-12-19',
      time: '11:20',
      description: 'Redeemed on order #1233',
      orderId: '#1233'
    },
    {
      id: 3,
      type: 'earned',
      amount: 54,
      coinType: 'rez',
      store: 'Biryani Blues',
      storeIcon: '🍛',
      date: '2024-12-18',
      time: '19:45',
      description: 'Cashback earned',
      orderId: '#1232'
    },
    {
      id: 4,
      type: 'earned',
      amount: 180,
      coinType: 'promo',
      store: 'ReZ',
      storeIcon: '✨',
      date: '2024-12-15',
      time: '00:00',
      description: 'Festival bonus - expires Dec 25',
      campaign: 'Christmas Special'
    },
    {
      id: 5,
      type: 'cashback',
      amount: 89,
      coinType: 'cashback',
      store: 'Amazon (via Cash Store)',
      storeIcon: '🛒',
      date: '2024-12-14',
      time: '16:30',
      description: 'Affiliate cashback credited',
      orderId: '#AMZ789'
    },
    {
      id: 6,
      type: 'pending',
      amount: 65,
      coinType: 'cashback',
      store: 'Offline Store',
      storeIcon: '🏪',
      date: '2024-12-21',
      time: '10:15',
      description: 'Pending bill verification',
      status: 'Under review'
    }
  ],

  // Pending cashback (from Cash Store)
  pendingCashback: [
    { store: 'Myntra', amount: 156, status: 'tracking', expectedDate: '2024-12-28', icon: '👕' },
    { store: 'Zomato', amount: 45, status: 'confirmed', expectedDate: '2024-12-25', icon: '🍕' },
  ],

  // Saved payment methods
  paymentMethods: [
    { id: 1, type: 'upi', name: 'Google Pay', default: true },
    { id: 2, type: 'upi', name: 'PhonePe', default: false },
    { id: 3, type: 'card', name: '•••• 4242', cardType: 'Visa', default: false },
  ],

  // Smart alerts
  alerts: [
    {
      id: 1,
      type: 'expiring',
      title: 'Coins expiring soon',
      message: 'You have ₹180 promo coins expiring in 3 days',
      action: 'Use Now',
      priority: 'high',
      icon: '⚠️'
    },
    {
      id: 2,
      type: 'opportunity',
      title: 'Earn extra coins',
      message: 'Pay at Café Coffee Day to earn 2x coins today',
      action: 'View Offer',
      priority: 'medium',
      icon: '🎯'
    },
    {
      id: 3,
      type: 'savings',
      title: 'Savings goal',
      message: 'You can save ₹200 this week with available offers',
      action: 'See How',
      priority: 'low',
      icon: '💡'
    }
  ],

  // Coin usage order (for transparency) - Auto-Apply Priority
  coinUsageOrder: ['Promo Coins', 'Branded Coins', 'ReZ Coins', 'Privé Coins'],

  // Privé Coins (Premium coin for elite users)
  priveCoins: {
    balance: 450, // Elite member balance
    expiry: 'No expiry',
    usableAt: 'Everywhere including gift cards',
    description: 'Premium status currency for elite users',
    color: '#D4AF37',
    icon: '👑',
    exclusive: true,
    tier: 'elite',
    influenceScore: 850
  },

  // Current mode (determines wallet UI and auto-apply priority)
  currentMode: 'rez', // rez | mall | cash-store | prive

  // Coin System Rules
  coinRules: {
    rezCoin: {
      canUseAt: ['all-partners', 'online', 'offline', 'services', 'events'],
      cannotUseFor: ['gift-cards', 'vouchers'],
      maxUsagePercent: 100,
      transferable: false,
      logic: 'ReZ Coin = internal currency. Gift cards = external cash equivalent'
    },
    brandedCoin: {
      canUseAt: ['same-brand-only'],
      cannotUseFor: ['gift-cards', 'vouchers', 'other-brands'],
      maxUsagePercent: 100, // Brand decides
      transferable: false,
      logic: 'Brand coins drive repeat loyalty, not cash leakage'
    },
    priveCoin: {
      canUseAt: ['anywhere', 'gift-cards', 'vouchers', 'luxury', 'experiences', 'events', 'services'],
      cannotUseFor: [],
      maxUsagePercent: 100,
      transferable: false,
      exclusive: true,
      logic: 'Privé Coin = status currency. Must feel superior to all others'
    },
    promoCoin: {
      canUseAt: [], // Varies by campaign
      restrictions: {
        maxPercentPerBill: 20, // Can vary 20-30%
        categoryRestricted: true,
        merchantRestricted: true,
        timeRestricted: true,
        oneTimeUse: true,
        nonTransferable: true
      },
      logic: 'Promo Coin = growth lever, not loyalty currency'
    },

    // Auto-apply priority at checkout
    autoApplyPriority: [
      { order: 1, type: 'promo', reason: 'Use first, expires soon' },
      { order: 2, type: 'branded', reason: 'Merchant loyalty' },
      { order: 3, type: 'rez', reason: 'Universal usage' },
      { order: 4, type: 'prive', reason: 'User can choose to save or use' }
    ]
  }
};

const walletReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REZ_COINS':
      return {
        ...state,
        rezCoins: {
          ...state.rezCoins,
          balance: state.rezCoins.balance + action.payload
        }
      };

    case 'SPEND_REZ_COINS':
      return {
        ...state,
        rezCoins: {
          ...state.rezCoins,
          balance: Math.max(0, state.rezCoins.balance - action.payload)
        }
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };

    case 'SET_DEFAULT_PAYMENT':
      return {
        ...state,
        paymentMethods: state.paymentMethods.map(pm => ({
          ...pm,
          default: pm.id === action.payload
        }))
      };

    case 'DISMISS_ALERT':
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };

    case 'SET_MODE':
      return {
        ...state,
        currentMode: action.payload
      };

    default:
      return state;
  }
};

export const WalletProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  // Calculate total coins value
  const totalCoinsValue = state.rezCoins.balance + state.promoCoins.balance +
    state.brandedCoins.reduce((sum, coin) => sum + coin.balance, 0);

  // Calculate total wallet value (coins + cashback)
  const totalWalletValue = totalCoinsValue + state.cashbackBalance + state.pendingRewards;

  // Helper to get brand loyalty data by brandId
  const getBrandLoyalty = (brandId) => {
    const brand = state.brandedCoins.find(bc => bc.brandId === brandId);
    return brand || null;
  };

  // Get coin priority based on current mode
  const getCoinPriority = (mode) => {
    const priorities = {
      rez: ['promo', 'branded', 'rez'],
      mall: ['branded', 'rez', 'promo'],
      'cash-store': ['rez', 'promo', 'branded'],
      prive: ['prive', 'branded', 'rez', 'promo']
    };
    return priorities[mode] || priorities.rez;
  };

  // Calculate auto-applied coins at checkout (MODE-AWARE)
  const calculateAutoApplyCoins = (billAmount, merchantId = null, category = null) => {
    let remaining = billAmount;
    const applied = {
      promo: 0,
      branded: 0,
      rez: 0,
      prive: 0,
      total: 0,
      breakdown: []
    };

    const priority = getCoinPriority(state.currentMode);

    // Apply coins based on mode-specific priority
    priority.forEach((coinType, index) => {
      if (remaining <= 0) return;

      if (coinType === 'promo' && state.promoCoins.balance > 0) {
        const maxPromoUsage = billAmount * (state.coinRules.promoCoin.restrictions.maxPercentPerBill / 100);
        const promoToApply = Math.min(state.promoCoins.balance, maxPromoUsage, remaining);
        applied.promo = promoToApply;
        remaining -= promoToApply;
        if (promoToApply > 0) {
          applied.breakdown.push({
            type: 'promo',
            amount: promoToApply,
            name: 'Promo Coins',
            icon: '🔥',
            priority: index + 1
          });
        }
      }

      if (coinType === 'branded' && merchantId && remaining > 0) {
        const brandCoin = state.brandedCoins.find(bc => bc.brandId === merchantId);
        if (brandCoin && brandCoin.balance > 0) {
          const brandedToApply = Math.min(brandCoin.balance, remaining);
          applied.branded = brandedToApply;
          remaining -= brandedToApply;
          if (brandedToApply > 0) {
            applied.breakdown.push({
              type: 'branded',
              amount: brandedToApply,
              name: `${brandCoin.merchant} Coins`,
              icon: brandCoin.logo,
              priority: index + 1
            });
          }
        }
      }

      if (coinType === 'rez' && state.rezCoins.balance > 0 && remaining > 0) {
        const rezToApply = Math.min(state.rezCoins.balance, remaining);
        applied.rez = rezToApply;
        remaining -= rezToApply;
        if (rezToApply > 0) {
          applied.breakdown.push({
            type: 'rez',
            amount: rezToApply,
            name: 'ReZ Coins',
            icon: '🪙',
            priority: index + 1
          });
        }
      }

      if (coinType === 'prive' && state.priveCoins.balance > 0 && remaining > 0 && state.currentMode === 'prive') {
        const priveToApply = Math.min(state.priveCoins.balance, remaining);
        applied.prive = priveToApply;
        remaining -= priveToApply;
        if (priveToApply > 0) {
          applied.breakdown.push({
            type: 'prive',
            amount: priveToApply,
            name: 'Privé Coins',
            icon: '👑',
            priority: index + 1
          });
        }
      }
    });

    applied.total = applied.promo + applied.branded + applied.rez + applied.prive;
    applied.remainingBill = Math.max(0, remaining);

    return applied;
  };

  // Check if coin can be used for specific purpose
  const canUseCoinFor = (coinType, purpose, merchantId = null) => {
    const rules = state.coinRules[coinType + 'Coin'];
    if (!rules) return false;

    // Check restrictions
    if (rules.cannotUseFor && rules.cannotUseFor.includes(purpose)) {
      return false;
    }

    // For branded coins, check merchant match
    if (coinType === 'branded' && merchantId) {
      const brandCoin = state.brandedCoins.find(bc => bc.brandId === merchantId);
      return brandCoin && brandCoin.balance > 0;
    }

    return true;
  };

  const value = {
    ...state,
    // Override rezCoins to be just the balance for backward compatibility
    rezCoins: state.rezCoins.balance,
    // Provide full rezCoins object as rezCoinsData
    rezCoinsData: state.rezCoins,
    totalCoinsValue,
    totalWalletValue,
    dispatch,
    addRezCoins: (amount) => dispatch({ type: 'ADD_REZ_COINS', payload: amount }),
    spendRezCoins: (amount) => dispatch({ type: 'SPEND_REZ_COINS', payload: amount }),
    setDefaultPayment: (id) => dispatch({ type: 'SET_DEFAULT_PAYMENT', payload: id }),
    dismissAlert: (id) => dispatch({ type: 'DISMISS_ALERT', payload: id }),
    setMode: (mode) => dispatch({ type: 'SET_MODE', payload: mode }),
    getBrandLoyalty,
    // New coin system functions
    calculateAutoApplyCoins,
    canUseCoinFor,
    getCoinPriority: () => getCoinPriority(state.currentMode),
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
