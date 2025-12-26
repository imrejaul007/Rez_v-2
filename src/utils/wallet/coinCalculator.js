/**
 * Coin Calculator Utilities
 * Calculate coin values, conversions, and totals
 */

/**
 * Convert coins to rupee value (1 coin = ₹0.10)
 * @param {number} coins - Number of coins
 * @returns {number} Rupee value
 */
export const coinsToRupees = (coins) => {
  const COIN_TO_RUPEE_RATE = 0.10;
  return Math.round(coins * COIN_TO_RUPEE_RATE * 100) / 100;
};

/**
 * Convert rupees to coins (₹1 = 10 coins)
 * @param {number} rupees - Rupee amount
 * @returns {number} Number of coins
 */
export const rupeesToCoins = (rupees) => {
  const RUPEE_TO_COIN_RATE = 10;
  return Math.round(rupees * RUPEE_TO_COIN_RATE);
};

/**
 * Calculate total coins from all sources
 * @param {object} walletState - Wallet state object
 * @returns {object} Total coins breakdown
 */
export const calculateTotalCoins = (walletState) => {
  const rezCoins = walletState.rezCoins?.balance || 0;
  const promoCoins = walletState.promoCoins?.balance || 0;
  const priveCoins = walletState.priveCoins?.balance || 0;

  const brandedCoins = walletState.brandedCoins?.reduce(
    (sum, brand) => sum + (brand.balance || 0),
    0
  ) || 0;

  const total = rezCoins + promoCoins + priveCoins + brandedCoins;

  return {
    rezCoins,
    brandedCoins,
    promoCoins,
    priveCoins,
    total,
    totalValue: coinsToRupees(total)
  };
};

/**
 * Calculate usable coins for a specific purchase
 * @param {object} walletState - Wallet state object
 * @param {string} merchantId - Merchant ID (optional)
 * @param {string} purpose - Purchase purpose (e.g., 'gift-cards', 'products')
 * @returns {object} Usable coins breakdown
 */
export const calculateUsableCoins = (walletState, merchantId = null, purpose = 'products') => {
  const usable = {
    rez: 0,
    branded: 0,
    promo: 0,
    prive: 0,
    total: 0
  };

  // ReZ coins - usable everywhere except gift cards (unless purpose allows)
  if (purpose !== 'gift-cards') {
    usable.rez = walletState.rezCoins?.balance || 0;
  }

  // Branded coins - only if merchant matches
  if (merchantId && walletState.brandedCoins) {
    const brandCoin = walletState.brandedCoins.find(bc => bc.brandId === merchantId);
    if (brandCoin && purpose !== 'gift-cards') {
      usable.branded = brandCoin.balance;
    }
  }

  // Promo coins - check restrictions
  if (walletState.promoCoins?.balance > 0 && purpose !== 'gift-cards') {
    usable.promo = walletState.promoCoins.balance;
  }

  // Privé coins - usable everywhere including gift cards
  usable.prive = walletState.priveCoins?.balance || 0;

  usable.total = usable.rez + usable.branded + usable.promo + usable.prive;

  return usable;
};

/**
 * Calculate savings from coins on a bill
 * @param {number} billAmount - Original bill amount
 * @param {number} coinsApplied - Coins applied to the bill
 * @returns {object} Savings breakdown
 */
export const calculateSavings = (billAmount, coinsApplied) => {
  const coinValue = coinsToRupees(coinsApplied);
  const percentageSaved = (coinValue / billAmount) * 100;
  const finalAmount = Math.max(0, billAmount - coinValue);

  return {
    originalAmount: billAmount,
    coinsApplied,
    coinValue,
    finalAmount,
    percentageSaved: Math.round(percentageSaved * 100) / 100,
    saved: coinValue
  };
};

/**
 * Calculate potential earnings from a purchase
 * @param {number} billAmount - Bill amount
 * @param {number} cashbackPercent - Cashback percentage (e.g., 5 for 5%)
 * @returns {object} Earnings breakdown
 */
export const calculateEarnings = (billAmount, cashbackPercent = 5) => {
  const cashbackAmount = (billAmount * cashbackPercent) / 100;
  const coinsEarned = rupeesToCoins(cashbackAmount);

  return {
    billAmount,
    cashbackPercent,
    cashbackAmount: Math.round(cashbackAmount * 100) / 100,
    coinsEarned,
    message: `Earn ${coinsEarned} coins (₹${cashbackAmount.toFixed(2)})`
  };
};

/**
 * Calculate brand loyalty progress
 * @param {object} brandCoin - Brand coin object with loyalty data
 * @returns {object} Loyalty progress
 */
export const calculateLoyaltyProgress = (brandCoin) => {
  if (!brandCoin?.loyaltyData) {
    return null;
  }

  const { visitsThisMonth, targetVisitsThisMonth, currentStreak, streakReward } = brandCoin.loyaltyData;
  const progressPercent = (visitsThisMonth / targetVisitsThisMonth) * 100;
  const visitsRemaining = Math.max(0, targetVisitsThisMonth - visitsThisMonth);

  return {
    currentVisits: visitsThisMonth,
    targetVisits: targetVisitsThisMonth,
    visitsRemaining,
    progressPercent: Math.min(100, Math.round(progressPercent)),
    currentStreak,
    nextReward: streakReward,
    isComplete: visitsThisMonth >= targetVisitsThisMonth
  };
};

/**
 * Format coin amount with icon
 * @param {number} amount - Coin amount
 * @param {string} type - Coin type (rez, branded, promo, prive)
 * @returns {string} Formatted string
 */
export const formatCoins = (amount, type = 'rez') => {
  const icons = {
    rez: '🪙',
    branded: '🔵',
    promo: '🔥',
    prive: '👑'
  };

  const icon = icons[type] || icons.rez;
  return `${icon} ${amount.toLocaleString()} coins`;
};

/**
 * Format rupee amount
 * @param {number} amount - Rupee amount
 * @returns {string} Formatted string with rupee symbol
 */
export const formatRupees = (amount) => {
  return `₹${amount.toLocaleString('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })}`;
};

/**
 * Calculate total wallet value (coins + cashback)
 * @param {object} walletState - Wallet state object
 * @returns {object} Total value breakdown
 */
export const calculateTotalWalletValue = (walletState) => {
  const coins = calculateTotalCoins(walletState);
  const cashback = walletState.cashbackBalance || 0;
  const pending = walletState.pendingRewards || 0;

  return {
    coinsValue: coins.totalValue,
    cashbackValue: cashback,
    pendingValue: pending,
    totalValue: coins.totalValue + cashback + pending,
    breakdown: {
      coins: coins.total,
      coinsRupees: coins.totalValue,
      cashback,
      pending
    }
  };
};

/**
 * Calculate monthly savings trend
 * @param {object} savingsStats - Savings stats object
 * @returns {object} Trend analysis
 */
export const calculateSavingsTrend = (savingsStats) => {
  if (!savingsStats?.monthlyTrend || savingsStats.monthlyTrend.length < 2) {
    return null;
  }

  const trend = savingsStats.monthlyTrend;
  const currentMonth = trend[trend.length - 1];
  const previousMonth = trend[trend.length - 2];
  const change = currentMonth - previousMonth;
  const percentChange = (change / previousMonth) * 100;

  const average = trend.reduce((sum, val) => sum + val, 0) / trend.length;

  return {
    currentMonth,
    previousMonth,
    change,
    percentChange: Math.round(percentChange),
    isIncreasing: change > 0,
    average: Math.round(average),
    trend: 'monthlyTrend',
    highestMonth: Math.max(...trend),
    lowestMonth: Math.min(...trend)
  };
};

/**
 * Calculate promo coin max usage for a bill
 * @param {number} billAmount - Bill amount
 * @param {number} maxPercent - Max percentage allowed (default 20)
 * @param {number} availablePromoCoins - Available promo coins
 * @returns {object} Max usage details
 */
export const calculatePromoMaxUsage = (billAmount, maxPercent = 20, availablePromoCoins = 0) => {
  const maxRupees = (billAmount * maxPercent) / 100;
  const maxCoins = rupeesToCoins(maxRupees);
  const actualCoinsToUse = Math.min(maxCoins, availablePromoCoins);
  const actualRupeesDiscount = coinsToRupees(actualCoinsToUse);

  return {
    billAmount,
    maxPercent,
    maxRupees: Math.round(maxRupees * 100) / 100,
    maxCoins,
    availableCoins: availablePromoCoins,
    coinsToUse: actualCoinsToUse,
    discountApplied: actualRupeesDiscount,
    finalAmount: billAmount - actualRupeesDiscount
  };
};
