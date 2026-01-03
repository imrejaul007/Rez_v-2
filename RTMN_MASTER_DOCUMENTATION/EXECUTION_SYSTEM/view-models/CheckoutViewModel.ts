/**
 * CHECKOUT VIEWMODEL
 *
 * Transforms checkout eligibility and options to UI-ready format
 *
 * RULES:
 * - Frontend receives THIS, not raw eligibility data
 * - All business rule violations → user-friendly messages
 * - Payment breakdown pre-calculated
 * - Button states determined server-side
 */

import { WalletBalance } from '../view-models/WalletViewModel';

export interface CheckoutViewModel {
  // Can user checkout?
  canCheckout: boolean;
  blockers: Array<{
    code: string;
    message: string;
    action: 'FIX_CART' | 'ADD_MONEY' | 'COMPLETE_KYC' | 'NONE';
    actionText?: string;
  }>;

  // Cart Summary
  cart: {
    itemCount: number;
    subtotal: string;
    tax: string;
    deliveryFee: string;
    total: string;
  };

  // Available Payment Options
  paymentOptions: {
    wallet: {
      enabled: boolean;
      disabledReason?: string;

      // Coin breakdown if user pays with wallet
      breakdown: {
        promoCoins: {
          available: string;
          willUse: string;
          remaining: string;
        };
        brandedCoins: {
          available: string;
          willUse: string;
          remaining: string;
        };
        rezCoins: {
          available: string;
          willUse: string;
          remaining: string;
        };
        cash: {
          available: string;
          willUse: string;
          remaining: string;
        };
      };

      shortfall: {
        amount: string;
        message: string; // "Add ₹50 to wallet to complete payment"
      } | null;
    };

    razorpay: {
      enabled: boolean;
      disabledReason?: string;
    };

    cod: {
      enabled: boolean;
      disabledReason?: string;
    };
  };

  // Applied Campaigns/Offers
  offers: {
    applied: Array<{
      campaignId: string;
      name: string;
      description: string;
      savings: string; // "₹50 cashback"
      badge: string; // "CASHBACK"
    }>;

    available: Array<{
      campaignId: string;
      name: string;
      description: string;
      potentialSavings: string;
      eligibility: {
        eligible: boolean;
        reason?: string; // "Add ₹100 more to cart"
      };
      couponCode: string | null;
    }>;
  };

  // Delivery
  delivery: {
    available: boolean;
    estimatedTime: string; // "30-40 mins"
    fee: string;
    minimumOrderValue: string | null;
    outOfZone: boolean;
  };

  // Actions
  actions: {
    checkout: {
      enabled: boolean;
      buttonText: string; // "Place Order" or "Add ₹50 to continue"
      loadingText: string; // "Processing..."
    };

    applyCoupon: {
      enabled: boolean;
    };
  };

  // User notifications
  notifications: Array<{
    type: 'info' | 'warning' | 'error' | 'success';
    message: string;
  }>;
}

/**
 * Calculate coin breakdown for wallet payment
 */
function calculateCoinBreakdown(
  orderTotal: number,
  walletBalance: {
    promo_coins: number;
    branded_coins: number;
    rez_coins: number;
    cash: number;
  }
): {
  promoCoinsUsed: number;
  brandedCoinsUsed: number;
  rezCoinsUsed: number;
  cashUsed: number;
  shortfall: number;
} {
  let remaining = orderTotal;

  // Priority: Promo → Branded → ReZ → Cash
  const promoCoinsUsed = Math.min(walletBalance.promo_coins, remaining);
  remaining -= promoCoinsUsed;

  const brandedCoinsUsed = Math.min(walletBalance.branded_coins, remaining);
  remaining -= brandedCoinsUsed;

  const rezCoinsUsed = Math.min(walletBalance.rez_coins, remaining);
  remaining -= rezCoinsUsed;

  const cashUsed = Math.min(walletBalance.cash, remaining);
  remaining -= cashUsed;

  return {
    promoCoinsUsed,
    brandedCoinsUsed,
    rezCoinsUsed,
    cashUsed,
    shortfall: Math.max(0, remaining)
  };
}

/**
 * Format currency
 */
function formatCurrency(amount: number): string {
  return `₹${amount.toFixed(2)}`;
}

/**
 * Transform checkout data to ViewModel
 */
export function toCheckoutViewModel(data: {
  cart: {
    itemCount: number;
    subtotal: number;
    tax: number;
    deliveryFee: number;
    total: number;
  };
  walletBalance: {
    promo_coins: number;
    branded_coins: number;
    rez_coins: number;
    cash: number;
  };
  merchant: {
    min_order_value: number;
    delivery_radius_km: number;
    accepts_orders: boolean;
  };
  userAddress: {
    lat: number;
    lng: number;
  };
  merchantAddress: {
    lat: number;
    lng: number;
  };
  appliedCampaigns: any[];
  availableCampaigns: any[];
  ruleViolations: Array<{ code: string; message: string }>;
}): CheckoutViewModel {
  const breakdown = calculateCoinBreakdown(data.cart.total, data.walletBalance);

  // Check if wallet has enough
  const walletSufficient = breakdown.shortfall === 0;

  // Check delivery zone (simplified)
  const isInDeliveryZone = true; // Would calculate distance in real implementation

  // Build blockers array
  const blockers: CheckoutViewModel['blockers'] = [];

  if (!data.merchant.accepts_orders) {
    blockers.push({
      code: 'MERCHANT_NOT_ACCEPTING',
      message: 'Merchant is not accepting orders right now',
      action: 'NONE'
    });
  }

  if (data.cart.total < data.merchant.min_order_value) {
    blockers.push({
      code: 'MIN_ORDER_VALUE',
      message: `Minimum order value is ${formatCurrency(data.merchant.min_order_value)}`,
      action: 'FIX_CART',
      actionText: `Add ${formatCurrency(
        data.merchant.min_order_value - data.cart.total
      )} more`
    });
  }

  if (!isInDeliveryZone) {
    blockers.push({
      code: 'OUT_OF_DELIVERY_ZONE',
      message: 'Address is outside delivery zone',
      action: 'NONE'
    });
  }

  data.ruleViolations.forEach(violation => {
    blockers.push({
      code: violation.code,
      message: violation.message,
      action: 'NONE'
    });
  });

  const canCheckout = blockers.length === 0;

  return {
    canCheckout,
    blockers,

    cart: {
      itemCount: data.cart.itemCount,
      subtotal: formatCurrency(data.cart.subtotal),
      tax: formatCurrency(data.cart.tax),
      deliveryFee: formatCurrency(data.cart.deliveryFee),
      total: formatCurrency(data.cart.total)
    },

    paymentOptions: {
      wallet: {
        enabled: true,
        breakdown: {
          promoCoins: {
            available: formatCurrency(data.walletBalance.promo_coins),
            willUse: formatCurrency(breakdown.promoCoinsUsed),
            remaining: formatCurrency(
              data.walletBalance.promo_coins - breakdown.promoCoinsUsed
            )
          },
          brandedCoins: {
            available: formatCurrency(data.walletBalance.branded_coins),
            willUse: formatCurrency(breakdown.brandedCoinsUsed),
            remaining: formatCurrency(
              data.walletBalance.branded_coins - breakdown.brandedCoinsUsed
            )
          },
          rezCoins: {
            available: formatCurrency(data.walletBalance.rez_coins),
            willUse: formatCurrency(breakdown.rezCoinsUsed),
            remaining: formatCurrency(
              data.walletBalance.rez_coins - breakdown.rezCoinsUsed
            )
          },
          cash: {
            available: formatCurrency(data.walletBalance.cash),
            willUse: formatCurrency(breakdown.cashUsed),
            remaining: formatCurrency(data.walletBalance.cash - breakdown.cashUsed)
          }
        },
        shortfall: breakdown.shortfall > 0
          ? {
              amount: formatCurrency(breakdown.shortfall),
              message: `Add ${formatCurrency(breakdown.shortfall)} to wallet to complete payment`
            }
          : null
      },

      razorpay: {
        enabled: true
      },

      cod: {
        enabled: data.cart.total <= 2000,
        disabledReason:
          data.cart.total > 2000 ? 'COD not available for orders above ₹2000' : undefined
      }
    },

    offers: {
      applied: data.appliedCampaigns.map(campaign => ({
        campaignId: campaign.id,
        name: campaign.display_name,
        description: campaign.description,
        savings: `${formatCurrency(campaign.reward_value)} ${campaign.reward_type}`,
        badge: 'APPLIED'
      })),

      available: data.availableCampaigns.map(campaign => ({
        campaignId: campaign.id,
        name: campaign.display_name,
        description: campaign.description,
        potentialSavings: `${formatCurrency(campaign.reward_value)} cashback`,
        eligibility: {
          eligible: true,
          reason: undefined
        },
        couponCode: campaign.coupon_code
      }))
    },

    delivery: {
      available: isInDeliveryZone,
      estimatedTime: '30-40 mins',
      fee: formatCurrency(data.cart.deliveryFee),
      minimumOrderValue: data.merchant.min_order_value > 0
        ? formatCurrency(data.merchant.min_order_value)
        : null,
      outOfZone: !isInDeliveryZone
    },

    actions: {
      checkout: {
        enabled: canCheckout,
        buttonText: canCheckout
          ? 'Place Order'
          : blockers[0]?.actionText || 'Cannot Checkout',
        loadingText: 'Processing Order...'
      },

      applyCoupon: {
        enabled: true
      }
    },

    notifications: [
      ...(breakdown.promoCoinsUsed > 0
        ? [
            {
              type: 'success' as const,
              message: `${formatCurrency(breakdown.promoCoinsUsed)} promo coins will be used`
            }
          ]
        : []),
      ...(breakdown.shortfall > 0
        ? [
            {
              type: 'warning' as const,
              message: `Insufficient wallet balance. Add ${formatCurrency(
                breakdown.shortfall
              )} to continue.`
            }
          ]
        : [])
    ]
  };
}
