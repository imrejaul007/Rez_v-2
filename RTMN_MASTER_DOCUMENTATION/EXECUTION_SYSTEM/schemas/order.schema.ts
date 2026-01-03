/**
 * CANONICAL ORDER SCHEMA
 *
 * SOURCE OF TRUTH for all order-related data
 *
 * RULES:
 * - Orders follow strict state machine (see state_machine below)
 * - Order + Wallet debit MUST be atomic (same transaction)
 * - Order state can ONLY transition via allowed paths
 * - Merchant can ONLY update orders for their own store
 */

export const OrderSchema = {
  table: 'orders',
  source_of_truth: 'rabtul-order',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Order ID'
    },

    // References
    user_id: {
      type: 'uuid',
      required: true,
      foreign_key: 'users.id',
      indexed: true,
      description: 'User who placed the order'
    },

    merchant_id: {
      type: 'uuid',
      required: true,
      foreign_key: 'merchants.id',
      indexed: true,
      description: 'Merchant fulfilling the order'
    },

    // State
    status: {
      type: 'enum',
      required: true,
      allowed_values: [
        'initiated',
        'created',
        'paid',
        'confirmed',
        'preparing',
        'ready',
        'shipped',
        'delivered',
        'completed',
        'cancelled',
        'failed_wallet',
        'refund_requested',
        'refunded'
      ],
      default: 'initiated',
      description: 'Current order status',
      note: 'MUST follow state machine transitions'
    },

    // Amounts
    subtotal: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Sum of item prices'
    },

    tax_amount: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0,
      description: 'Tax amount (GST, etc.)'
    },

    delivery_fee: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0,
      description: 'Delivery/shipping fee'
    },

    discount_amount: {
      type: 'decimal',
      required: false,
      precision: 10,
      scale: 2,
      min: 0,
      default: 0,
      description: 'Total discount applied'
    },

    total_amount: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Final payable amount',
      note: 'total = subtotal + tax + delivery - discount'
    },

    // Payment Breakdown
    promo_coins_used: {
      type: 'decimal',
      required: false,
      precision: 10,
      scale: 2,
      min: 0,
      default: 0,
      description: 'Promo coins used for payment'
    },

    branded_coins_used: {
      type: 'decimal',
      required: false,
      precision: 10,
      scale: 2,
      min: 0,
      default: 0,
      description: 'Branded coins used for payment'
    },

    rez_coins_used: {
      type: 'decimal',
      required: false,
      precision: 10,
      scale: 2,
      min: 0,
      default: 0,
      description: 'ReZ coins used for payment'
    },

    cash_paid: {
      type: 'decimal',
      required: false,
      precision: 10,
      scale: 2,
      min: 0,
      default: 0,
      description: 'Cash amount paid'
    },

    // Payment Method
    payment_method: {
      type: 'enum',
      required: true,
      allowed_values: ['wallet', 'razorpay', 'cod', 'upi'],
      description: 'Payment method used'
    },

    payment_id: {
      type: 'string',
      required: false,
      nullable: true,
      description: 'External payment gateway transaction ID'
    },

    // Delivery Details
    delivery_address: {
      type: 'jsonb',
      required: true,
      description: 'Delivery address',
      schema: {
        line1: 'string',
        line2: 'string?',
        city: 'string',
        state: 'string',
        pincode: 'string',
        country: 'string',
        phone: 'string',
        lat: 'number?',
        lng: 'number?'
      }
    },

    delivery_instructions: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Special delivery instructions'
    },

    // Timing
    estimated_delivery_time: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Estimated delivery timestamp'
    },

    delivered_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Actual delivery timestamp'
    },

    // Cancellation/Refund
    cancellation_reason: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Reason for cancellation'
    },

    cancelled_by: {
      type: 'enum',
      required: false,
      nullable: true,
      allowed_values: ['user', 'merchant', 'system'],
      description: 'Who cancelled the order'
    },

    refund_amount: {
      type: 'decimal',
      required: false,
      nullable: true,
      precision: 10,
      scale: 2,
      description: 'Amount refunded to user'
    },

    refund_transaction_id: {
      type: 'uuid',
      required: false,
      nullable: true,
      foreign_key: 'wallet_transactions.id',
      description: 'Wallet transaction ID for refund'
    },

    // Metadata
    metadata: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Additional order metadata',
      schema: {
        source_app: 'string',
        campaign_id: 'string?',
        coupon_code: 'string?',
        notes: 'string?'
      }
    },

    // Timestamps
    created_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      description: 'Order creation timestamp'
    },

    updated_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      auto_update: true,
      description: 'Last update timestamp'
    },

    confirmed_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Order confirmation timestamp'
    },

    completed_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Order completion timestamp'
    }
  },

  indexes: [
    { fields: ['user_id', 'created_at'], order: 'desc' },
    { fields: ['merchant_id', 'created_at'], order: 'desc' },
    { fields: ['status', 'merchant_id'] },
    { fields: ['status', 'user_id'] },
    { fields: ['payment_id'], where: 'payment_id IS NOT NULL' },
    { fields: ['created_at'] }
  },

  validation_rules: {
    total_amount: {
      rule: 'subtotal + tax_amount + delivery_fee - discount_amount',
      error_code: 'TOTAL_AMOUNT_MISMATCH'
    },
    payment_breakdown: {
      rule: 'promo_coins + branded_coins + rez_coins + cash_paid = total_amount',
      error_code: 'PAYMENT_BREAKDOWN_MISMATCH'
    },
    coin_priority: {
      rule: 'Promo coins used first, then branded, then rez, then cash',
      error_code: 'COIN_PRIORITY_VIOLATION'
    }
  },

  state_machine: {
    states: [
      'initiated',
      'created',
      'paid',
      'confirmed',
      'preparing',
      'ready',
      'shipped',
      'delivered',
      'completed',
      'cancelled',
      'failed_wallet',
      'refund_requested',
      'refunded'
    ],

    transitions: {
      initiated: ['created', 'failed_wallet'],
      created: ['paid', 'cancelled'],
      paid: ['confirmed', 'refund_requested'],
      confirmed: ['preparing', 'cancelled'],
      preparing: ['ready', 'cancelled'],
      ready: ['shipped', 'cancelled'],
      shipped: ['delivered', 'return_requested'],
      delivered: ['completed', 'refund_requested'],
      completed: [],  // Terminal
      cancelled: [],  // Terminal
      failed_wallet: [],  // Terminal
      refund_requested: ['refunded', 'completed'],
      refunded: []  // Terminal
    },

    terminal_states: ['completed', 'cancelled', 'failed_wallet', 'refunded'],

    ownership: {
      initiated: 'system',
      created: 'system',
      paid: 'system',
      confirmed: 'merchant',
      preparing: 'merchant',
      ready: 'merchant',
      shipped: 'merchant',
      delivered: 'delivery_partner',
      completed: 'system',
      cancelled: 'any',
      failed_wallet: 'system',
      refund_requested: 'user',
      refunded: 'system'
    }
  },

  domain_rules: [
    'Order creation + Wallet debit MUST be atomic (same DB transaction)',
    'State transitions MUST follow state machine',
    'Merchants can ONLY update orders for their merchant_id',
    'Refunds MUST credit back the SAME coin types in reverse order',
    'Completed orders unlock coin rewards after 7 days',
    'Cancelled orders before "confirmed" get instant refund',
    'Cancelled orders after "confirmed" require merchant approval'
  ],

  related_schemas: [
    'order_items',
    'order_status_history',
    'wallet_transactions',
    'merchants',
    'users'
  ]
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 * DO NOT EDIT MANUALLY
 */
export type Order = {
  id: string;
  user_id: string;
  merchant_id: string;
  status:
    | 'initiated'
    | 'created'
    | 'paid'
    | 'confirmed'
    | 'preparing'
    | 'ready'
    | 'shipped'
    | 'delivered'
    | 'completed'
    | 'cancelled'
    | 'failed_wallet'
    | 'refund_requested'
    | 'refunded';
  subtotal: number;
  tax_amount: number;
  delivery_fee: number;
  discount_amount: number;
  total_amount: number;
  promo_coins_used: number;
  branded_coins_used: number;
  rez_coins_used: number;
  cash_paid: number;
  payment_method: 'wallet' | 'razorpay' | 'cod' | 'upi';
  payment_id: string | null;
  delivery_address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phone: string;
    lat?: number;
    lng?: number;
  };
  delivery_instructions: string | null;
  estimated_delivery_time: Date | null;
  delivered_at: Date | null;
  cancellation_reason: string | null;
  cancelled_by: 'user' | 'merchant' | 'system' | null;
  refund_amount: number | null;
  refund_transaction_id: string | null;
  metadata: {
    source_app?: string;
    campaign_id?: string;
    coupon_code?: string;
    notes?: string;
  } | null;
  created_at: Date;
  updated_at: Date;
  confirmed_at: Date | null;
  completed_at: Date | null;
};
