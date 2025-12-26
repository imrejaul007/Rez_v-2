/**
 * Auto-Apply Coin Logic
 * Automatically applies coins to purchases based on mode-specific priority
 */

import { getCoinPriority } from './coinPriority.js';
import { calculatePromoMaxUsage } from './coinCalculator.js';

/**
 * Auto-apply coins to a bill based on current mode
 * @param {object} walletState - Complete wallet state
 * @param {number} billAmount - Bill amount in rupees
 * @param {string} merchantId - Merchant ID (optional, for branded coins)
 * @param {object} options - Additional options (category, purpose, etc.)
 * @returns {object} Coins to apply with breakdown
 */
export const autoApplyCoins = (walletState, billAmount, merchantId = null, options = {}) => {
  const { currentMode = 'rez', purpose = 'products' } = options;

  let remaining = billAmount;
  const applied = {
    promo: 0,
    branded: 0,
    rez: 0,
    prive: 0,
    total: 0,
    totalValue: 0,
    breakdown: [],
    mode: currentMode
  };

  // Get mode-specific priority
  const priority = getCoinPriority(currentMode);

  // Apply coins based on priority
  priority.forEach((coinType, index) => {
    if (remaining <= 0) return;

    if (coinType === 'promo') {
      const promoResult = applyPromoCoins(walletState.promoCoins, billAmount, remaining);
      if (promoResult.applied > 0) {
        applied.promo = promoResult.applied;
        remaining = promoResult.remaining;
        applied.breakdown.push({
          type: 'promo',
          amount: promoResult.applied,
          value: promoResult.value,
          name: 'Promo Coins',
          icon: '🔥',
          priority: index + 1,
          maxUsed: promoResult.maxUsed,
          restriction: promoResult.restriction
        });
      }
    }

    if (coinType === 'branded') {
      const brandedResult = applyBrandedCoins(walletState.brandedCoins, merchantId, remaining, purpose);
      if (brandedResult.applied > 0) {
        applied.branded = brandedResult.applied;
        remaining = brandedResult.remaining;
        applied.breakdown.push({
          type: 'branded',
          amount: brandedResult.applied,
          value: brandedResult.value,
          name: brandedResult.brandName,
          icon: brandedResult.icon,
          priority: index + 1
        });
      }
    }

    if (coinType === 'rez') {
      const rezResult = applyRezCoins(walletState.rezCoins, remaining, purpose);
      if (rezResult.applied > 0) {
        applied.rez = rezResult.applied;
        remaining = rezResult.remaining;
        applied.breakdown.push({
          type: 'rez',
          amount: rezResult.applied,
          value: rezResult.value,
          name: 'ReZ Coins',
          icon: '🪙',
          priority: index + 1
        });
      }
    }

    if (coinType === 'prive' && currentMode === 'prive') {
      const priveResult = applyPriveCoins(walletState.priveCoins, remaining);
      if (priveResult.applied > 0) {
        applied.prive = priveResult.applied;
        remaining = priveResult.remaining;
        applied.breakdown.push({
          type: 'prive',
          amount: priveResult.applied,
          value: priveResult.value,
          name: 'Privé Coins',
          icon: '👑',
          priority: index + 1
        });
      }
    }
  });

  // Calculate totals
  applied.total = applied.promo + applied.branded + applied.rez + applied.prive;
  applied.totalValue = coinsToRupees(applied.total);
  applied.remainingBill = Math.max(0, remaining);
  applied.discountPercent = ((applied.totalValue / billAmount) * 100).toFixed(1);

  return applied;
};

/**
 * Apply promo coins with restrictions
 */
const applyPromoCoins = (promoCoins, billAmount, remaining) => {
  if (!promoCoins || promoCoins.balance === 0) {
    return { applied: 0, remaining, value: 0, maxUsed: false };
  }

  // Promo coins have max % restriction (default 20%)
  const maxPercent = 20;
  const calculation = calculatePromoMaxUsage(billAmount, maxPercent, promoCoins.balance);

  const coinsToApply = Math.min(calculation.coinsToUse, rupeesToCoins(remaining));
  const value = coinsToRupees(coinsToApply);

  return {
    applied: coinsToApply,
    remaining: remaining - value,
    value,
    maxUsed: coinsToApply >= promoCoins.balance,
    restriction: `Max ${maxPercent}% per bill`
  };
};

/**
 * Apply branded coins (merchant-specific)
 */
const applyBrandedCoins = (brandedCoins, merchantId, remaining, purpose) => {
  if (!merchantId || !brandedCoins || brandedCoins.length === 0) {
    return { applied: 0, remaining, value: 0 };
  }

  if (purpose === 'gift-cards') {
    return { applied: 0, remaining, value: 0 }; // Branded coins can't be used for gift cards
  }

  const brandCoin = brandedCoins.find(bc => bc.brandId === merchantId);
  if (!brandCoin || brandCoin.balance === 0) {
    return { applied: 0, remaining, value: 0 };
  }

  const coinsToApply = Math.min(brandCoin.balance, rupeesToCoins(remaining));
  const value = coinsToRupees(coinsToApply);

  return {
    applied: coinsToApply,
    remaining: remaining - value,
    value,
    brandName: `${brandCoin.merchant} Coins`,
    icon: brandCoin.logo
  };
};

/**
 * Apply ReZ coins (universal)
 */
const applyRezCoins = (rezCoins, remaining, purpose) => {
  const balance = rezCoins?.balance || 0;

  if (balance === 0) {
    return { applied: 0, remaining, value: 0 };
  }

  if (purpose === 'gift-cards') {
    return { applied: 0, remaining, value: 0 }; // ReZ coins can't be used for gift cards
  }

  const coinsToApply = Math.min(balance, rupeesToCoins(remaining));
  const value = coinsToRupees(coinsToApply);

  return {
    applied: coinsToApply,
    remaining: remaining - value,
    value
  };
};

/**
 * Apply Privé coins (most powerful - works everywhere including gift cards)
 */
const applyPriveCoins = (priveCoins, remaining) => {
  const balance = priveCoins?.balance || 0;

  if (balance === 0) {
    return { applied: 0, remaining, value: 0 };
  }

  const coinsToApply = Math.min(balance, rupeesToCoins(remaining));
  const value = coinsToRupees(coinsToApply);

  return {
    applied: coinsToApply,
    remaining: remaining - value,
    value
  };
};

/**
 * Helper: Convert coins to rupees (1 coin = ₹0.10)
 */
const coinsToRupees = (coins) => {
  return Math.round(coins * 0.10 * 100) / 100;
};

/**
 * Helper: Convert rupees to coins (₹1 = 10 coins)
 */
const rupeesToCoins = (rupees) => {
  return Math.round(rupees * 10);
};

/**
 * Preview auto-apply without actually applying
 * Useful for showing users what will be applied before checkout
 */
export const previewAutoApply = (walletState, billAmount, merchantId = null, options = {}) => {
  return autoApplyCoins(walletState, billAmount, merchantId, options);
};

/**
 * Get auto-apply summary message
 */
export const getAutoApplySummary = (appliedCoins) => {
  if (appliedCoins.total === 0) {
    return 'No coins available to apply';
  }

  const parts = [];
  if (appliedCoins.promo > 0) parts.push(`${appliedCoins.promo} promo`);
  if (appliedCoins.branded > 0) parts.push(`${appliedCoins.branded} branded`);
  if (appliedCoins.rez > 0) parts.push(`${appliedCoins.rez} ReZ`);
  if (appliedCoins.prive > 0) parts.push(`${appliedCoins.prive} Privé`);

  return `Applying ${appliedCoins.total} coins (${parts.join(' + ')}) = ₹${appliedCoins.totalValue.toFixed(2)} off`;
};

/**
 * Check if user can manually override auto-apply
 */
export const canOverrideAutoApply = (currentMode) => {
  // In Privé mode, users have full control
  // In other modes, they can adjust but follow priority
  return {
    canChangeAmount: true,
    canChangePriority: currentMode === 'prive',
    message: currentMode === 'prive'
      ? 'You have full control over coin usage'
      : 'Auto-apply follows mode priority, but you can adjust amounts'
  };
};

/**
 * Validate if coin application is allowed
 */
export const validateCoinApplication = (walletState, coinsToApply, billAmount, merchantId, purpose) => {
  const errors = [];

  // Check if enough coins available
  if (coinsToApply.rez > (walletState.rezCoins?.balance || 0)) {
    errors.push('Not enough ReZ coins');
  }
  if (coinsToApply.promo > (walletState.promoCoins?.balance || 0)) {
    errors.push('Not enough promo coins');
  }
  if (coinsToApply.prive > (walletState.priveCoins?.balance || 0)) {
    errors.push('Not enough Privé coins');
  }

  // Check branded coins
  if (coinsToApply.branded > 0 && merchantId) {
    const brandCoin = walletState.brandedCoins?.find(bc => bc.brandId === merchantId);
    if (!brandCoin || coinsToApply.branded > brandCoin.balance) {
      errors.push('Not enough branded coins for this merchant');
    }
  }

  // Check promo coin restrictions
  if (coinsToApply.promo > 0) {
    const maxPercent = 20;
    const maxAllowed = calculatePromoMaxUsage(billAmount, maxPercent, walletState.promoCoins?.balance || 0);
    if (coinsToApply.promo > maxAllowed.coinsToUse) {
      errors.push(`Promo coins limited to ${maxPercent}% of bill (max ${maxAllowed.coinsToUse} coins)`);
    }
  }

  // Check purpose restrictions
  if (purpose === 'gift-cards') {
    if (coinsToApply.rez > 0) errors.push('ReZ coins cannot be used for gift cards');
    if (coinsToApply.branded > 0) errors.push('Branded coins cannot be used for gift cards');
    // Privé coins CAN be used for gift cards
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
