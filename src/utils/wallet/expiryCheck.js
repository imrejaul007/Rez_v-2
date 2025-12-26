/**
 * Expiry Check Utilities
 * Handles promo coin expiry tracking and warnings
 */

/**
 * Check if promo coins are expiring soon
 * @param {object} promoCoins - Promo coins object with expiryDate
 * @param {number} warningDays - Days before expiry to start warning (default: 7)
 * @returns {object} Expiry status with details
 */
export const checkPromoExpiry = (promoCoins, warningDays = 7) => {
  if (!promoCoins || promoCoins.balance === 0) {
    return {
      isExpiring: false,
      isExpired: false,
      daysRemaining: null,
      urgency: 'none'
    };
  }

  const expiryDate = new Date(promoCoins.expiryDate);
  const today = new Date();
  const timeDiff = expiryDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const isExpired = daysRemaining < 0;
  const isExpiring = daysRemaining <= warningDays && !isExpired;

  let urgency = 'none';
  if (isExpired) {
    urgency = 'expired';
  } else if (daysRemaining <= 1) {
    urgency = 'critical'; // Today or tomorrow
  } else if (daysRemaining <= 3) {
    urgency = 'high'; // 2-3 days
  } else if (daysRemaining <= 7) {
    urgency = 'medium'; // 4-7 days
  }

  return {
    isExpiring,
    isExpired,
    daysRemaining: Math.max(0, daysRemaining),
    urgency,
    expiryDate: promoCoins.expiryDate,
    balance: promoCoins.balance
  };
};

/**
 * Get expiry message for display
 * @param {object} expiryStatus - Status from checkPromoExpiry
 * @returns {string} Human-readable expiry message
 */
export const getExpiryMessage = (expiryStatus) => {
  if (!expiryStatus.isExpiring && !expiryStatus.isExpired) {
    return null;
  }

  if (expiryStatus.isExpired) {
    return 'Expired';
  }

  const days = expiryStatus.daysRemaining;
  if (days === 0) {
    return 'Expires today';
  } else if (days === 1) {
    return 'Expires tomorrow';
  } else if (days <= 7) {
    return `Expires in ${days} days`;
  } else {
    return `Expires in ${days} days`;
  }
};

/**
 * Get urgency color for UI
 * @param {string} urgency - Urgency level
 * @returns {string} Tailwind color class
 */
export const getUrgencyColor = (urgency) => {
  const colors = {
    critical: 'text-red-600 dark:text-red-400',
    high: 'text-orange-600 dark:text-orange-400',
    medium: 'text-yellow-600 dark:text-yellow-400',
    none: 'text-gray-600 dark:text-gray-400',
    expired: 'text-gray-400 dark:text-gray-600'
  };

  return colors[urgency] || colors.none;
};

/**
 * Get urgency background color for badges
 * @param {string} urgency - Urgency level
 * @returns {string} Tailwind background color class
 */
export const getUrgencyBgColor = (urgency) => {
  const colors = {
    critical: 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700',
    high: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700',
    none: 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700',
    expired: 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800'
  };

  return colors[urgency] || colors.none;
};

/**
 * Check if coins should be auto-prioritized due to expiry
 * @param {object} expiryStatus - Status from checkPromoExpiry
 * @returns {boolean} Whether to prioritize these coins
 */
export const shouldPrioritizeExpiring = (expiryStatus) => {
  return expiryStatus.urgency === 'critical' || expiryStatus.urgency === 'high';
};

/**
 * Get all expiring coins sorted by urgency
 * @param {object[]} allCoins - Array of all coin objects
 * @returns {object[]} Sorted array of expiring coins
 */
export const getExpiringCoins = (allCoins) => {
  const expiringCoins = allCoins
    .filter(coin => coin.expiryDate)
    .map(coin => ({
      ...coin,
      expiryStatus: checkPromoExpiry(coin)
    }))
    .filter(coin => coin.expiryStatus.isExpiring || coin.expiryStatus.isExpired)
    .sort((a, b) => a.expiryStatus.daysRemaining - b.expiryStatus.daysRemaining);

  return expiringCoins;
};

/**
 * Create expiry alert for user
 * @param {object} promoCoins - Promo coins object
 * @returns {object|null} Alert object or null if no alert needed
 */
export const createExpiryAlert = (promoCoins) => {
  const status = checkPromoExpiry(promoCoins);

  if (!status.isExpiring && !status.isExpired) {
    return null;
  }

  if (status.isExpired) {
    return {
      type: 'expired',
      title: 'Promo coins expired',
      message: `Your ${promoCoins.balance} promo coins have expired`,
      action: null,
      priority: 'low',
      icon: '⚠️'
    };
  }

  const message = getExpiryMessage(status);
  return {
    type: 'expiring',
    title: 'Coins expiring soon',
    message: `You have ${promoCoins.balance} promo coins ${message.toLowerCase()}`,
    action: 'Use Now',
    priority: status.urgency === 'critical' ? 'high' : 'medium',
    icon: status.urgency === 'critical' ? '🚨' : '⚠️',
    daysRemaining: status.daysRemaining
  };
};
