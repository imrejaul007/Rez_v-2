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

  // Coin usage order (for transparency)
  coinUsageOrder: ['Promo Coins', 'Branded Coins', 'ReZ Coins']
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
    getBrandLoyalty,
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
