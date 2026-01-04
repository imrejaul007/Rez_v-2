/**
 * CAMPAIGN BUSINESS RULES
 *
 * All campaign-related business logic
 *
 * RULES:
 * - Budget checks before every claim
 * - Eligibility validated on every request
 * - Time window checks (day + hour restrictions)
 * - User limits enforced
 */

import { ErrorCode, ApplicationError } from '../ERROR_CODES';
import { Campaign } from '../schemas/campaign.schema';

export interface CampaignEligibility {
  eligible: boolean;
  reason: string | null;
  reward_amount: number | null;
}

/**
 * RULE: Check if campaign is currently active
 */
export function isCampaignActive(campaign: Campaign): boolean {
  if (campaign.status !== 'active') return false;

  const now = new Date();
  const starts = new Date(campaign.starts_at);
  const ends = new Date(campaign.ends_at);

  return now >= starts && now < ends;
}

/**
 * RULE: Check campaign budget availability
 */
export function checkBudgetAvailability(
  campaign: Campaign,
  requestedAmount: number
): void {
  // Check total budget
  const remainingBudget = campaign.total_budget - campaign.budget_consumed;
  if (remainingBudget < requestedAmount) {
    throw new ApplicationError(ErrorCode.CAMPAIGN_BUDGET_EXHAUSTED, {
      campaign_id: campaign.id,
      requested: requestedAmount,
      remaining: remainingBudget
    });
  }

  // Check daily budget if exists
  if (campaign.daily_budget) {
    // Would check today's consumption from DB
    // Simplified here
    throw new ApplicationError(ErrorCode.CAMPAIGN_DAILY_LIMIT_REACHED);
  }
}

/**
 * RULE: Check user eligibility
 */
export function checkUserEligibility(
  campaign: Campaign,
  user: {
    id: string;
    loyalty_tier: string;
    kyc_status: string;
    created_at: Date;
  },
  userClaimCount: number
): CampaignEligibility {
  const rules = campaign.eligibility_rules;

  // Check loyalty tier
  if (rules.loyalty_tiers && rules.loyalty_tiers.length > 0) {
    if (!rules.loyalty_tiers.includes(user.loyalty_tier)) {
      return {
        eligible: false,
        reason: `Only for ${rules.loyalty_tiers.join(', ')} members`,
        reward_amount: null
      };
    }
  }

  // Check KYC requirement
  if (rules.kyc_required && user.kyc_status !== 'verified') {
    return {
      eligible: false,
      reason: 'Complete KYC verification to unlock',
      reward_amount: null
    };
  }

  // Check new users only
  if (rules.new_users_only) {
    const daysSinceSignup = Math.floor(
      (Date.now() - user.created_at.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (daysSinceSignup > 7) {
      return {
        eligible: false,
        reason: 'This offer is for new users only',
        reward_amount: null
      };
    }
  }

  // Check user-specific inclusion/exclusion
  if (rules.user_ids && rules.user_ids.length > 0) {
    if (!rules.user_ids.includes(user.id)) {
      return {
        eligible: false,
        reason: 'Not eligible for this campaign',
        reward_amount: null
      };
    }
  }

  if (rules.excluded_user_ids && rules.excluded_user_ids.includes(user.id)) {
    return {
      eligible: false,
      reason: 'Not eligible for this campaign',
      reward_amount: null
    };
  }

  // Check max uses per user
  if (campaign.max_uses_per_user !== null) {
    if (userClaimCount >= campaign.max_uses_per_user) {
      return {
        eligible: false,
        reason: `Maximum ${campaign.max_uses_per_user} uses reached`,
        reward_amount: null
      };
    }
  }

  return {
    eligible: true,
    reason: null,
    reward_amount: campaign.reward_value
  };
}

/**
 * RULE: Check order eligibility
 */
export function checkOrderEligibility(
  campaign: Campaign,
  order: {
    total_amount: number;
    merchant_id: string;
    category: string;
  }
): { eligible: boolean; reason: string | null } {
  const rules = campaign.eligibility_rules;

  // Check min order value
  if (rules.min_order_value && order.total_amount < rules.min_order_value) {
    return {
      eligible: false,
      reason: `Add ₹${(rules.min_order_value - order.total_amount).toFixed(0)} more to cart`
    };
  }

  // Check max order value
  if (rules.max_order_value && order.total_amount > rules.max_order_value) {
    return {
      eligible: false,
      reason: `Not applicable for orders above ₹${rules.max_order_value}`
    };
  }

  // Check merchant eligibility
  if (rules.merchant_ids && rules.merchant_ids.length > 0) {
    if (!rules.merchant_ids.includes(order.merchant_id)) {
      return {
        eligible: false,
        reason: 'Not applicable for this merchant'
      };
    }
  }

  if (rules.excluded_merchant_ids && rules.excluded_merchant_ids.includes(order.merchant_id)) {
    return {
      eligible: false,
      reason: 'Not applicable for this merchant'
    };
  }

  // Check category eligibility
  if (rules.categories && rules.categories.length > 0) {
    if (!rules.categories.includes(order.category)) {
      return {
        eligible: false,
        reason: `Only for ${rules.categories.join(', ')} orders`
      };
    }
  }

  return { eligible: true, reason: null };
}

/**
 * RULE: Calculate reward amount
 */
export function calculateReward(
  campaign: Campaign,
  orderValue: number
): number {
  let reward = 0;

  switch (campaign.reward_type) {
    case 'fixed_coins':
      reward = campaign.reward_value;
      break;

    case 'percentage_cashback':
      reward = (orderValue * campaign.reward_value) / 100;
      // Apply max cap if exists
      if (campaign.max_reward_per_transaction) {
        reward = Math.min(reward, campaign.max_reward_per_transaction);
      }
      break;

    case 'multiplier':
      // Base coins * multiplier
      const baseCoins = orderValue * 0.01; // 1% base
      reward = baseCoins * campaign.reward_value;
      break;
  }

  return Math.floor(reward);
}

/**
 * RULE: Check time window eligibility
 */
export function isWithinTimeWindow(campaign: Campaign): boolean {
  const rules = campaign.eligibility_rules;

  if (!rules.time_windows || rules.time_windows.length === 0) {
    return true; // No time restrictions
  }

  const now = new Date();
  const currentDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][
    now.getDay()
  ];
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeInMins = currentHour * 60 + currentMinute;

  for (const window of rules.time_windows) {
    if (window.day !== currentDay) continue;

    const [startHour, startMin] = window.start.split(':').map(Number);
    const [endHour, endMin] = window.end.split(':').map(Number);
    const startTimeInMins = startHour * 60 + startMin;
    const endTimeInMins = endHour * 60 + endMin;

    if (currentTimeInMins >= startTimeInMins && currentTimeInMins < endTimeInMins) {
      return true;
    }
  }

  return false;
}
