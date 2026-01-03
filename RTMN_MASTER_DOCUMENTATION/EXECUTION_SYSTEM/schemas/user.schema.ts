/**
 * CANONICAL USER SCHEMA
 *
 * SOURCE OF TRUTH for all user-related data
 *
 * RULES:
 * - If field is not in this schema → it doesn't exist
 * - All apps MUST use these exact field names
 * - NO custom fields allowed without schema update
 * - ORM models are auto-generated from this
 */

export const UserSchema = {
  table: 'users',
  source_of_truth: 'rabtul-auth',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Unique user identifier'
    },

    phone: {
      type: 'string',
      required: true,
      unique: true,
      format: 'E.164',
      example: '+91-9876543210',
      description: 'Primary phone number (verified)'
    },

    email: {
      type: 'string',
      required: false,
      unique: true,
      format: 'email',
      nullable: true,
      description: 'Email address (optional, verified if present)'
    },

    // Status
    status: {
      type: 'enum',
      required: true,
      allowed_values: ['active', 'suspended', 'banned', 'deleted'],
      default: 'active',
      description: 'Account status'
    },

    // Verification
    email_verified: {
      type: 'boolean',
      required: true,
      default: false,
      description: 'Email verification status'
    },

    phone_verified: {
      type: 'boolean',
      required: true,
      default: true,
      description: 'Phone verification status (true after OTP)'
    },

    kyc_status: {
      type: 'enum',
      required: true,
      allowed_values: ['not_started', 'pending', 'verified', 'rejected'],
      default: 'not_started',
      description: 'KYC verification status'
    },

    // Loyalty
    loyalty_tier: {
      type: 'enum',
      required: true,
      allowed_values: ['basic', 'silver', 'gold', 'prive'],
      default: 'basic',
      description: 'User loyalty tier',
      note: 'Controls coin multipliers and perks'
    },

    // Attribution
    joined_via_app: {
      type: 'enum',
      required: true,
      allowed_values: ['rez-app', 'bizone', 'adzy', 'sozy', 'quezy', 'other'],
      description: 'App through which user signed up',
      note: 'Used for attribution and referral tracking'
    },

    referred_by_user_id: {
      type: 'uuid',
      required: false,
      nullable: true,
      foreign_key: 'users.id',
      description: 'User ID of referrer (if any)'
    },

    referral_code: {
      type: 'string',
      required: true,
      unique: true,
      length: 8,
      format: 'alphanumeric',
      description: 'Unique referral code for this user'
    },

    // Timestamps
    created_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      description: 'Account creation timestamp'
    },

    updated_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      auto_update: true,
      description: 'Last update timestamp'
    },

    last_login_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Last login timestamp'
    },

    deleted_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Soft delete timestamp'
    }
  },

  indexes: [
    { fields: ['phone'], unique: true },
    { fields: ['email'], unique: true, where: 'email IS NOT NULL' },
    { fields: ['referral_code'], unique: true },
    { fields: ['status'] },
    { fields: ['loyalty_tier'] },
    { fields: ['created_at'] }
  ],

  validation_rules: {
    phone: {
      regex: /^\+91-\d{10}$/,
      error_code: 'INVALID_PHONE_FORMAT'
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error_code: 'INVALID_EMAIL_FORMAT'
    }
  },

  state_machine: null, // Users don't have states, only status

  domain_rules: [
    'Users can only be created by Auth service',
    'Loyalty tier can only be updated by Rules service',
    'Phone number cannot be changed once verified',
    'Deleted users cannot be reactivated (soft delete is permanent)'
  ],

  related_schemas: [
    'user_profile',
    'user_wallet',
    'user_addresses',
    'user_sessions'
  ]
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 * DO NOT EDIT MANUALLY
 */
export type User = {
  id: string;
  phone: string;
  email: string | null;
  status: 'active' | 'suspended' | 'banned' | 'deleted';
  email_verified: boolean;
  phone_verified: boolean;
  kyc_status: 'not_started' | 'pending' | 'verified' | 'rejected';
  loyalty_tier: 'basic' | 'silver' | 'gold' | 'prive';
  joined_via_app: 'rez-app' | 'bizone' | 'adzy' | 'sozy' | 'quezy' | 'other';
  referred_by_user_id: string | null;
  referral_code: string;
  created_at: Date;
  updated_at: Date;
  last_login_at: Date | null;
  deleted_at: Date | null;
};
