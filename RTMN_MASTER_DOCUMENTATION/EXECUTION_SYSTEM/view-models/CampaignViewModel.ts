/**
 * CAMPAIGN VIEWMODEL
 *
 * Transforms campaign data to UI-ready format
 *
 * RULES:
 * - Frontend receives THIS, not raw campaign data
 * - All eligibility checks done server-side
 * - Reward calculations pre-computed
 * - UI states (badge, colors) defined here
 */

import { Campaign } from '../schemas/campaign.schema';

export interface CampaignViewModel {
  // Basic Info
  id: string;
  title: string;
  slug: string;
  description: string;
  banner: string;

  // Visual Elements
  badge: {
    text: string; // "CASHBACK", "50% OFF", "NEW USER BONUS"
    color: string; // "#EF4444"
    icon: string; // "gift"
  };

  // Reward Display
  reward: {
    displayText: string; // "Get ₹100 cashback"
    value: string; // "₹100"
    type: 'coins' | 'cashback' | 'discount';
    coinType: 'promo' | 'branded' | 'rez' | null;
  };

  // Eligibility
  eligibility: {
    eligible: boolean;
    reason: string | null; // "Complete KYC to unlock"
    requirements: Array<{
      label: string;
      met: boolean;
      value: string;
    }>;
  };

  // Validity
  validity: {
    startsAt: Date;
    endsAt: Date;
    displayText: string; // "Valid till 31 Dec 2024"
    daysRemaining: number;
    isActive: boolean;
    isExpired: boolean;
    isUpcoming: boolean;
  };

  // Usage Limits
  limits: {
    maxUses: number | null; // null = unlimited
    userUsed: number;
    userRemaining: number | null;
    displayText: string; // "Use 2 more times" | "Unlimited uses"
  };

  // Terms
  terms: {
    minOrderValue: string | null; // "₹500"
    maxDiscount: string | null; // "₹100"
    categories: string[]; // ["Food", "Grocery"]
    merchants: string[]; // Merchant names or "All merchants"
    fullTerms: string; // Full T&C text
  };

  // Actions
  actions: {
    apply: {
      enabled: boolean;
      buttonText: string; // "Apply Code" | "Claimed" | "Complete KYC"
      couponCode: string | null;
    };
    share: {
      enabled: boolean;
      url: string;
    };
    viewDetails: {
      enabled: boolean;
      url: string;
    };
  };

  // Status Indicators
  status: {
    tag: string; // "ACTIVE", "ENDING SOON", "EXPIRED", "CLAIMED"
    tagColor: string;
    urgency: 'high' | 'medium' | 'low' | null; // For "ending soon" campaigns
  };
}

/**
 * Campaign type to badge mapping
 */
const CAMPAIGN_BADGES: Record<
  Campaign['campaign_type'],
  { text: string; color: string; icon: string }
> = {
  signup_bonus: { text: 'WELCOME BONUS', color: '#8B5CF6', icon: 'gift' },
  referral_reward: { text: 'REFERRAL BONUS', color: '#10B981', icon: 'users' },
  cashback: { text: 'CASHBACK', color: '#3B82F6', icon: 'arrow-left' },
  first_order_bonus: { text: 'FIRST ORDER', color: '#F59E0B', icon: 'star' },
  loyalty_reward: { text: 'LOYALTY REWARD', color: '#EC4899', icon: 'heart' },
  festival_offer: { text: 'FESTIVAL OFFER', color: '#EF4444', icon: 'sparkles' },
  merchant_sponsored: { text: 'SPECIAL OFFER', color: '#14B8A6', icon: 'tag' },
  category_boost: { text: 'CATEGORY BOOST', color: '#6366F1', icon: 'trending-up' }
};

/**
 * Format currency
 */
function formatCurrency(amount: number): string {
  return `₹${amount.toFixed(0)}`;
}

/**
 * Calculate days remaining
 */
function daysRemaining(endDate: Date): number {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Get reward display text
 */
function getRewardText(campaign: Campaign): string {
  switch (campaign.reward_type) {
    case 'fixed_coins':
      return `Get ${formatCurrency(campaign.reward_value)} ${campaign.reward_coin_type.replace('_', ' ')}`;
    case 'percentage_cashback':
      return `Get ${campaign.reward_value}% cashback`;
    case 'multiplier':
      return `${campaign.reward_value}x coins on orders`;
    default:
      return 'Special reward';
  }
}

/**
 * Transform campaign to ViewModel
 */
export function toCampaignViewModel(
  campaign: Campaign,
  userEligibility: {
    eligible: boolean;
    reason: string | null;
    usedCount: number;
    meetsMinOrder: boolean;
    meetsKyc: boolean;
    meetsTier: boolean;
  }
): CampaignViewModel {
  const now = new Date();
  const starts = new Date(campaign.starts_at);
  const ends = new Date(campaign.ends_at);

  const isActive = campaign.status === 'active' && now >= starts && now < ends;
  const isExpired = now >= ends || campaign.status === 'completed';
  const isUpcoming = now < starts;
  const daysLeft = daysRemaining(ends);

  const badge = CAMPAIGN_BADGES[campaign.campaign_type];

  // Determine status tag
  let statusTag = 'ACTIVE';
  let statusTagColor = '#22C55E';
  let urgency: 'high' | 'medium' | 'low' | null = null;

  if (isExpired) {
    statusTag = 'EXPIRED';
    statusTagColor = '#9CA3AF';
  } else if (isUpcoming) {
    statusTag = 'COMING SOON';
    statusTagColor = '#F59E0B';
  } else if (daysLeft <= 2) {
    statusTag = 'ENDING SOON';
    statusTagColor = '#EF4444';
    urgency = 'high';
  } else if (daysLeft <= 7) {
    urgency = 'medium';
  }

  // Build requirements
  const requirements: CampaignViewModel['eligibility']['requirements'] = [];

  if (campaign.eligibility_rules.min_order_value) {
    requirements.push({
      label: 'Min order value',
      met: userEligibility.meetsMinOrder,
      value: formatCurrency(campaign.eligibility_rules.min_order_value)
    });
  }

  if (campaign.eligibility_rules.kyc_required) {
    requirements.push({
      label: 'KYC verification',
      met: userEligibility.meetsKyc,
      value: 'Required'
    });
  }

  if (campaign.eligibility_rules.loyalty_tiers && campaign.eligibility_rules.loyalty_tiers.length > 0) {
    requirements.push({
      label: 'Loyalty tier',
      met: userEligibility.meetsTier,
      value: campaign.eligibility_rules.loyalty_tiers.join(', ')
    });
  }

  // Calculate remaining uses
  const maxUses = campaign.max_uses_per_user;
  const userRemaining = maxUses ? maxUses - userEligibility.usedCount : null;

  return {
    id: campaign.id,
    title: campaign.display_name,
    slug: campaign.slug,
    description: campaign.description,
    banner: campaign.banner_image_url || '',

    badge: {
      text: badge.text,
      color: badge.color,
      icon: badge.icon
    },

    reward: {
      displayText: getRewardText(campaign),
      value: formatCurrency(campaign.reward_value),
      type: campaign.reward_type === 'percentage_cashback' ? 'cashback' : 'coins',
      coinType: campaign.reward_coin_type ? campaign.reward_coin_type.replace('_coins', '') as any : null
    },

    eligibility: {
      eligible: userEligibility.eligible,
      reason: userEligibility.reason,
      requirements
    },

    validity: {
      startsAt: starts,
      endsAt: ends,
      displayText: `Valid till ${ends.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })}`,
      daysRemaining: daysLeft,
      isActive,
      isExpired,
      isUpcoming
    },

    limits: {
      maxUses,
      userUsed: userEligibility.usedCount,
      userRemaining,
      displayText: maxUses
        ? userRemaining && userRemaining > 0
          ? `Use ${userRemaining} more ${userRemaining === 1 ? 'time' : 'times'}`
          : 'Limit reached'
        : 'Unlimited uses'
    },

    terms: {
      minOrderValue: campaign.eligibility_rules.min_order_value
        ? formatCurrency(campaign.eligibility_rules.min_order_value)
        : null,
      maxDiscount: campaign.max_reward_per_transaction
        ? formatCurrency(campaign.max_reward_per_transaction)
        : null,
      categories: campaign.eligibility_rules.categories || [],
      merchants: campaign.eligibility_rules.merchant_ids
        ? [`${campaign.eligibility_rules.merchant_ids.length} selected merchants`]
        : ['All merchants'],
      fullTerms: campaign.terms_and_conditions
    },

    actions: {
      apply: {
        enabled: userEligibility.eligible && isActive,
        buttonText: !isActive
          ? isExpired
            ? 'Expired'
            : 'Coming Soon'
          : !userEligibility.eligible
          ? userEligibility.reason || 'Not Eligible'
          : campaign.coupon_code
          ? 'Apply Code'
          : 'Auto-applied',
        couponCode: campaign.coupon_code
      },
      share: {
        enabled: true,
        url: `${process.env.APP_URL}/offers/${campaign.slug}`
      },
      viewDetails: {
        enabled: true,
        url: `/offers/${campaign.slug}`
      }
    },

    status: {
      tag: statusTag,
      tagColor: statusTagColor,
      urgency
    }
  };
}
