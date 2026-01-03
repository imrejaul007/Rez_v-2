/**
 * CANONICAL MERCHANT SCHEMA
 *
 * SOURCE OF TRUTH for all merchant-related data
 *
 * RULES:
 * - Merchants have onboarding state machine
 * - Only verified merchants can receive orders
 * - Commission rates based on category and tier
 * - Settlement happens weekly (T+7)
 */

export const MerchantSchema = {
  table: 'merchants',
  source_of_truth: 'rabtul-merchant',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Merchant ID'
    },

    business_name: {
      type: 'string',
      required: true,
      max_length: 200,
      indexed: true,
      description: 'Registered business name'
    },

    display_name: {
      type: 'string',
      required: true,
      max_length: 100,
      description: 'Display name shown to users'
    },

    slug: {
      type: 'string',
      required: true,
      unique: true,
      max_length: 100,
      regex: /^[a-z0-9-]+$/,
      description: 'URL-friendly slug'
    },

    // Category
    category: {
      type: 'enum',
      required: true,
      allowed_values: [
        'food_delivery',
        'grocery',
        'pharmacy',
        'electronics',
        'fashion',
        'beauty',
        'home_services',
        'education',
        'entertainment'
      ],
      indexed: true,
      description: 'Business category'
    },

    subcategory: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 100,
      description: 'Specific subcategory (e.g., "Italian Restaurant")'
    },

    // Status & Verification
    status: {
      type: 'enum',
      required: true,
      allowed_values: [
        'onboarding',
        'pending_verification',
        'active',
        'suspended',
        'closed'
      ],
      default: 'onboarding',
      indexed: true,
      description: 'Current merchant status',
      note: 'Only "active" merchants can receive orders'
    },

    verification_status: {
      type: 'enum',
      required: true,
      allowed_values: ['pending', 'documents_submitted', 'verified', 'rejected'],
      default: 'pending',
      description: 'KYC/KYB verification status'
    },

    // Contact Details
    owner_name: {
      type: 'string',
      required: true,
      max_length: 200,
      description: 'Business owner name'
    },

    owner_phone: {
      type: 'string',
      required: true,
      regex: /^\+91-\d{10}$/,
      indexed: true,
      description: 'Owner phone number'
    },

    owner_email: {
      type: 'string',
      required: true,
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      max_length: 255,
      description: 'Owner email'
    },

    // Business Address
    address: {
      type: 'jsonb',
      required: true,
      description: 'Business address',
      schema: {
        line1: 'string',
        line2: 'string?',
        city: 'string',
        state: 'string',
        pincode: 'string',
        country: 'string',
        lat: 'number',
        lng: 'number'
      }
    },

    // Business Documents
    gstin: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 15,
      regex: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/,
      description: 'GST Identification Number'
    },

    pan: {
      type: 'string',
      required: true,
      max_length: 10,
      regex: /^[A-Z]{5}\d{4}[A-Z]{1}$/,
      description: 'PAN number'
    },

    fssai_license: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 14,
      description: 'FSSAI license (for food businesses)'
    },

    // Settlement Details
    bank_account: {
      type: 'jsonb',
      required: true,
      description: 'Bank account for settlements',
      schema: {
        account_number: 'string',
        ifsc_code: 'string',
        account_holder_name: 'string',
        bank_name: 'string',
        branch: 'string'
      }
    },

    // Commission & Pricing
    commission_rate: {
      type: 'decimal',
      required: true,
      precision: 5,
      scale: 2,
      min: 0,
      max: 100,
      default: 15.0,
      description: 'Commission percentage (e.g., 15.00 = 15%)',
      note: 'Varies by category and negotiation'
    },

    payment_gateway_charges: {
      type: 'decimal',
      required: true,
      precision: 5,
      scale: 2,
      default: 2.0,
      description: 'Payment gateway charges percentage'
    },

    // Operating Hours
    operating_hours: {
      type: 'jsonb',
      required: true,
      description: 'Weekly operating hours',
      schema: {
        monday: '{ open: string, close: string, closed: boolean }',
        tuesday: '{ open: string, close: string, closed: boolean }',
        wednesday: '{ open: string, close: string, closed: boolean }',
        thursday: '{ open: string, close: string, closed: boolean }',
        friday: '{ open: string, close: string, closed: boolean }',
        saturday: '{ open: string, close: string, closed: boolean }',
        sunday: '{ open: string, close: string, closed: boolean }'
      }
    },

    // Service Settings
    accepts_orders: {
      type: 'boolean',
      required: true,
      default: true,
      description: 'Whether currently accepting orders',
      note: 'Merchant can toggle this on/off'
    },

    min_order_value: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0,
      default: 0,
      description: 'Minimum order value in rupees'
    },

    delivery_radius_km: {
      type: 'integer',
      required: true,
      min: 1,
      max: 50,
      default: 5,
      description: 'Delivery radius in kilometers'
    },

    avg_preparation_time_mins: {
      type: 'integer',
      required: true,
      min: 5,
      max: 180,
      default: 30,
      description: 'Average order preparation time'
    },

    // Ratings & Performance
    rating: {
      type: 'decimal',
      required: true,
      precision: 3,
      scale: 2,
      min: 0,
      max: 5,
      default: 0,
      description: 'Average rating (0-5)'
    },

    total_ratings: {
      type: 'integer',
      required: true,
      min: 0,
      default: 0,
      description: 'Total number of ratings'
    },

    total_orders: {
      type: 'integer',
      required: true,
      min: 0,
      default: 0,
      description: 'Lifetime orders fulfilled'
    },

    // Metadata
    logo_url: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Merchant logo URL'
    },

    cover_image_url: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Cover banner image URL'
    },

    description: {
      type: 'text',
      required: false,
      nullable: true,
      max_length: 1000,
      description: 'Business description'
    },

    tags: {
      type: 'array',
      required: false,
      nullable: true,
      description: 'Tags (e.g., ["veg", "halal", "home-delivery"])',
      item_type: 'string'
    },

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
      description: 'Account creation timestamp'
    },

    updated_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      auto_update: true,
      description: 'Last update timestamp'
    },

    verified_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Verification completion timestamp'
    },

    last_order_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Last order received timestamp'
    }
  },

  indexes: [
    { fields: ['status', 'category'] },
    { fields: ['slug'], unique: true },
    { fields: ['owner_phone'] },
    { fields: ['created_at'] },
    { fields: ['rating'], order: 'desc' },
    {
      fields: ['address'],
      type: 'gist',
      expression: '((address->\'lat\')::float, (address->\'lng\')::float)',
      note: 'Geospatial index for nearby merchants'
    }
  ],

  validation_rules: {
    fssai_required: {
      rule: 'FSSAI license required if category = food_delivery',
      error_code: 'MERCHANT_FSSAI_REQUIRED'
    },
    operating_hours: {
      rule: 'At least one day must be open',
      error_code: 'MERCHANT_NO_OPERATING_HOURS'
    }
  },

  state_machine: {
    states: ['onboarding', 'pending_verification', 'active', 'suspended', 'closed'],

    transitions: {
      onboarding: ['pending_verification'],
      pending_verification: ['active', 'onboarding'],
      active: ['suspended', 'closed'],
      suspended: ['active', 'closed'],
      closed: [] // Terminal
    },

    terminal_states: ['closed']
  },

  domain_rules: [
    'Only ACTIVE merchants can receive orders',
    'Commission rate set by category defaults, can be negotiated',
    'Settlement happens weekly (T+7 from order completion)',
    'Merchants can only update their own products/orders',
    'Verification requires: PAN + Bank Account + (FSSAI if food)',
    'Min order value cannot exceed ₹500',
    'Delivery radius cannot exceed 50km'
  ],

  related_schemas: ['products', 'orders', 'merchant_settlements', 'merchant_reviews']
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 */
export type Merchant = {
  id: string;
  business_name: string;
  display_name: string;
  slug: string;
  category:
    | 'food_delivery'
    | 'grocery'
    | 'pharmacy'
    | 'electronics'
    | 'fashion'
    | 'beauty'
    | 'home_services'
    | 'education'
    | 'entertainment';
  subcategory: string | null;
  status: 'onboarding' | 'pending_verification' | 'active' | 'suspended' | 'closed';
  verification_status: 'pending' | 'documents_submitted' | 'verified' | 'rejected';
  owner_name: string;
  owner_phone: string;
  owner_email: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    lat: number;
    lng: number;
  };
  gstin: string | null;
  pan: string;
  fssai_license: string | null;
  bank_account: {
    account_number: string;
    ifsc_code: string;
    account_holder_name: string;
    bank_name: string;
    branch: string;
  };
  commission_rate: number;
  payment_gateway_charges: number;
  operating_hours: Record<string, { open: string; close: string; closed: boolean }>;
  accepts_orders: boolean;
  min_order_value: number;
  delivery_radius_km: number;
  avg_preparation_time_mins: number;
  rating: number;
  total_ratings: number;
  total_orders: number;
  logo_url: string | null;
  cover_image_url: string | null;
  description: string | null;
  tags: string[] | null;
  metadata: Record<string, any> | null;
  created_at: Date;
  updated_at: Date;
  verified_at: Date | null;
  last_order_at: Date | null;
};
