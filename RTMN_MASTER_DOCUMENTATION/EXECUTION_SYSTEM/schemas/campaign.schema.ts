/**
 * CANONICAL CAMPAIGN SCHEMA
 *
 * SOURCE OF TRUTH for all marketing campaigns and offers
 *
 * RULES:
 * - Campaigns have budget limits (daily, total)
 * - Campaigns have user limits (per user, total users)
 * - Campaigns have eligibility rules (tier, category, merchant)
 * - Active campaigns checked before every coin credit
 */

export const CampaignSchema = {
  table: 'campaigns',
  source_of_truth: 'rabtul-rules',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Campaign ID'
    },

    name: {
      type: 'string',
      required: true,
      max_length: 200,
      description: 'Internal campaign name'
    },

    display_name: {
      type: 'string',
      required: true,
      max_length: 200,
      description: 'User-facing campaign title'
    },

    slug: {
      type: 'string',
      required: true,
      unique: true,
      max_length: 100,
      regex: /^[a-z0-9-]+$/,
      description: 'URL-friendly slug'
    },

    // Type & Scope
    campaign_type: {
      type: 'enum',
      required: true,
      allowed_values: [
        'signup_bonus',
        'referral_reward',
        'cashback',
        'first_order_bonus',
        'loyalty_reward',
        'festival_offer',
        'merchant_sponsored',
        'category_boost'
      ],
      indexed: true,
      description: 'Type of campaign'
    },

    sponsored_by: {
      type: 'enum',
      required: true,
      allowed_values: ['rabtul', 'merchant', 'brand_partner'],
      description: 'Who is paying for this campaign'
    },

    sponsor_merchant_id: {
      type: 'uuid',
      required: false,
      nullable: true,
      foreign_key: 'merchants.id',
      description: 'Merchant ID if merchant_sponsored'
    },

    // Status & Timing
    status: {
      type: 'enum',
      required: true,
      allowed_values: ['draft', 'scheduled', 'active', 'paused', 'completed', 'cancelled'],
      default: 'draft',
      indexed: true,
      description: 'Campaign status'
    },

    starts_at: {
      type: 'timestamp',
      required: true,
      indexed: true,
      description: 'Campaign start timestamp'
    },

    ends_at: {
      type: 'timestamp',
      required: true,
      indexed: true,
      description: 'Campaign end timestamp'
    },

    // Reward Configuration
    reward_type: {
      type: 'enum',
      required: true,
      allowed_values: ['fixed_coins', 'percentage_cashback', 'multiplier'],
      description: 'How reward is calculated'
    },

    reward_coin_type: {
      type: 'enum',
      required: true,
      allowed_values: ['promo_coins', 'branded_coins', 'rez_coins'],
      description: 'Type of coins awarded'
    },

    reward_value: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0,
      description: 'Reward amount (coins or percentage)',
      note: 'For fixed_coins: actual amount. For percentage: 0-100. For multiplier: 1.5, 2.0, etc.'
    },

    max_reward_per_transaction: {
      type: 'decimal',
      required: false,
      nullable: true,
      precision: 10,
      scale: 2,
      description: 'Maximum coins per single transaction',
      note: 'For percentage_cashback campaigns'
    },

    // Budget Limits
    total_budget: {
      type: 'decimal',
      required: true,
      precision: 12,
      scale: 2,
      min: 0,
      description: 'Total campaign budget in coins'
    },

    daily_budget: {
      type: 'decimal',
      required: false,
      nullable: true,
      precision: 12,
      scale: 2,
      description: 'Daily budget limit'
    },

    budget_consumed: {
      type: 'decimal',
      required: true,
      precision: 12,
      scale: 2,
      default: 0,
      description: 'Budget consumed so far'
    },

    // User Limits
    max_uses_per_user: {
      type: 'integer',
      required: false,
      nullable: true,
      min: 1,
      description: 'How many times one user can claim'
    },

    max_total_users: {
      type: 'integer',
      required: false,
      nullable: true,
      min: 1,
      description: 'Maximum unique users who can participate'
    },

    total_users_participated: {
      type: 'integer',
      required: true,
      default: 0,
      description: 'Unique users who claimed so far'
    },

    total_claims: {
      type: 'integer',
      required: true,
      default: 0,
      description: 'Total claims across all users'
    },

    // Eligibility Rules
    eligibility_rules: {
      type: 'jsonb',
      required: true,
      description: 'Who is eligible for this campaign',
      schema: {
        loyalty_tiers: 'string[]?',
        user_ids: 'string[]?',
        excluded_user_ids: 'string[]?',
        min_order_value: 'number?',
        max_order_value: 'number?',
        categories: 'string[]?',
        merchant_ids: 'string[]?',
        excluded_merchant_ids: 'string[]?',
        new_users_only: 'boolean?',
        kyc_required: 'boolean?',
        time_windows: 'Array<{day: string, start: string, end: string}>?'
      }
    },

    // Auto-application
    auto_apply: {
      type: 'boolean',
      required: true,
      default: false,
      description: 'Whether campaign applies automatically',
      note: 'If false, user must enter coupon code'
    },

    coupon_code: {
      type: 'string',
      required: false,
      nullable: true,
      unique: true,
      max_length: 50,
      description: 'Coupon code (if not auto-apply)'
    },

    // Display
    banner_image_url: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Campaign banner image'
    },

    description: {
      type: 'text',
      required: true,
      max_length: 1000,
      description: 'Campaign description'
    },

    terms_and_conditions: {
      type: 'text',
      required: true,
      max_length: 5000,
      description: 'T&C text'
    },

    // Priority (for conflicts)
    priority: {
      type: 'integer',
      required: true,
      default: 0,
      description: 'Campaign priority (higher = applied first)',
      note: 'If multiple campaigns match, highest priority wins'
    },

    // Stacking
    allow_stacking: {
      type: 'boolean',
      required: true,
      default: false,
      description: 'Can be combined with other campaigns'
    },

    // Metadata
    metadata: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Additional metadata'
    },

    // Timestamps
    created_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      description: 'Campaign creation timestamp'
    },

    updated_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      auto_update: true,
      description: 'Last update timestamp'
    },

    created_by: {
      type: 'uuid',
      required: true,
      description: 'Admin user who created campaign'
    }
  },

  indexes: [
    { fields: ['status', 'starts_at', 'ends_at'] },
    { fields: ['campaign_type'] },
    { fields: ['coupon_code'], unique: true, where: 'coupon_code IS NOT NULL' },
    { fields: ['slug'], unique: true },
    { fields: ['priority'], order: 'desc' },
    { fields: ['sponsor_merchant_id'], where: 'sponsor_merchant_id IS NOT NULL' }
  ],

  validation_rules: {
    budget: {
      rule: 'budget_consumed <= total_budget',
      error_code: 'CAMPAIGN_BUDGET_EXCEEDED'
    },
    dates: {
      rule: 'ends_at > starts_at',
      error_code: 'CAMPAIGN_INVALID_DATES'
    },
    coupon: {
      rule: 'coupon_code required if auto_apply = false',
      error_code: 'CAMPAIGN_COUPON_REQUIRED'
    },
    sponsor: {
      rule: 'sponsor_merchant_id required if sponsored_by = merchant',
      error_code: 'CAMPAIGN_SPONSOR_REQUIRED'
    }
  },

  domain_rules: [
    'Only ACTIVE campaigns are evaluated',
    'Campaign must be within starts_at and ends_at window',
    'Budget check happens BEFORE awarding coins',
    'If budget exhausted → campaign auto-pauses',
    'User limits checked per user_id',
    'Eligibility rules checked in order (fail fast)',
    'If multiple campaigns match → highest priority wins (unless stacking allowed)',
    'Cashback campaigns unlock after order completion (T+7)',
    'Signup/Referral campaigns award immediately',
    'Merchant-sponsored campaigns deducted from merchant balance'
  ],

  related_schemas: ['campaign_claims', 'wallet_transactions', 'merchants', 'users']
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 */
export type Campaign = {
  id: string;
  name: string;
  display_name: string;
  slug: string;
  campaign_type:
    | 'signup_bonus'
    | 'referral_reward'
    | 'cashback'
    | 'first_order_bonus'
    | 'loyalty_reward'
    | 'festival_offer'
    | 'merchant_sponsored'
    | 'category_boost';
  sponsored_by: 'rabtul' | 'merchant' | 'brand_partner';
  sponsor_merchant_id: string | null;
  status: 'draft' | 'scheduled' | 'active' | 'paused' | 'completed' | 'cancelled';
  starts_at: Date;
  ends_at: Date;
  reward_type: 'fixed_coins' | 'percentage_cashback' | 'multiplier';
  reward_coin_type: 'promo_coins' | 'branded_coins' | 'rez_coins';
  reward_value: number;
  max_reward_per_transaction: number | null;
  total_budget: number;
  daily_budget: number | null;
  budget_consumed: number;
  max_uses_per_user: number | null;
  max_total_users: number | null;
  total_users_participated: number;
  total_claims: number;
  eligibility_rules: {
    loyalty_tiers?: string[];
    user_ids?: string[];
    excluded_user_ids?: string[];
    min_order_value?: number;
    max_order_value?: number;
    categories?: string[];
    merchant_ids?: string[];
    excluded_merchant_ids?: string[];
    new_users_only?: boolean;
    kyc_required?: boolean;
    time_windows?: Array<{ day: string; start: string; end: string }>;
  };
  auto_apply: boolean;
  coupon_code: string | null;
  banner_image_url: string | null;
  description: string;
  terms_and_conditions: string;
  priority: number;
  allow_stacking: boolean;
  metadata: Record<string, any> | null;
  created_at: Date;
  updated_at: Date;
  created_by: string;
};
