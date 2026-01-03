/**
 * CANONICAL WALLET SCHEMA
 *
 * SOURCE OF TRUTH for all wallet-related data
 *
 * RULES:
 * - Wallet can ONLY be mutated by Rabtul Wallet Service
 * - All coin operations MUST create transactions
 * - Balance = sum(transactions) NOT a direct field
 * - Append-only ledger (NO updates/deletes)
 */

export const WalletSchema = {
  table: 'wallet_transactions',
  source_of_truth: 'rabtul-wallet',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Transaction ID'
    },

    user_id: {
      type: 'uuid',
      required: true,
      foreign_key: 'users.id',
      indexed: true,
      description: 'User who owns this transaction'
    },

    // Transaction Type
    transaction_type: {
      type: 'enum',
      required: true,
      allowed_values: [
        'credit_signup_bonus',
        'credit_referral_reward',
        'credit_cashback',
        'credit_campaign_reward',
        'credit_refund',
        'debit_order_payment',
        'debit_transfer',
        'debit_expiry',
        'debit_clawback'
      ],
      description: 'Type of transaction',
      note: 'Credits add coins, debits remove coins'
    },

    // Coin Type
    coin_type: {
      type: 'enum',
      required: true,
      allowed_values: ['promo_coins', 'branded_coins', 'rez_coins', 'cash'],
      description: 'Type of coin affected',
      note: 'Must be used in priority order: Promo → Branded → ReZ → Cash'
    },

    // Amount
    amount: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Transaction amount (always positive)',
      note: 'Sign is determined by transaction_type (credit/debit)'
    },

    // Balances (snapshot at time of transaction)
    balance_before: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      description: 'Balance before this transaction'
    },

    balance_after: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      description: 'Balance after this transaction',
      note: 'balance_after = balance_before +/- amount'
    },

    // Status
    status: {
      type: 'enum',
      required: true,
      allowed_values: ['pending', 'completed', 'failed', 'reversed'],
      default: 'pending',
      description: 'Transaction status'
    },

    // Metadata
    reason: {
      type: 'string',
      required: true,
      max_length: 255,
      description: 'Human-readable reason for transaction'
    },

    metadata: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Additional transaction metadata',
      schema: {
        source: 'string',           // App that triggered transaction
        campaign_id: 'string?',      // Campaign ID (if applicable)
        order_id: 'string?',         // Order ID (if payment/refund)
        merchant_id: 'string?',      // Merchant ID (if applicable)
        rule_version: 'string?',     // Rule version used
        attribution_app: 'string?'   // App credited for attribution
      }
    },

    // Expiry (for promo/branded coins)
    expires_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'Expiry timestamp for this transaction',
      note: 'Only applicable for credit transactions of promo/branded coins'
    },

    // References
    related_transaction_id: {
      type: 'uuid',
      required: false,
      nullable: true,
      foreign_key: 'wallet_transactions.id',
      description: 'Related transaction (e.g., refund references original debit)'
    },

    // Timestamps
    created_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      description: 'Transaction creation timestamp',
      note: 'Immutable - used for transaction ordering'
    }
  },

  indexes: [
    { fields: ['user_id', 'created_at'], order: 'desc' },
    { fields: ['user_id', 'coin_type'] },
    { fields: ['status'] },
    { fields: ['transaction_type'] },
    { fields: ['expires_at'], where: 'expires_at IS NOT NULL' },
    { fields: ['metadata'], type: 'gin' } // JSONB index
  ],

  validation_rules: {
    amount: {
      min: 0.01,
      error_code: 'AMOUNT_MUST_BE_POSITIVE'
    },
    balance_integrity: {
      rule: 'balance_after = balance_before +/- amount',
      error_code: 'BALANCE_MISMATCH'
    }
  },

  state_machine: {
    states: ['pending', 'completed', 'failed', 'reversed'],
    transitions: {
      pending: ['completed', 'failed'],
      completed: ['reversed'],
      failed: [],
      reversed: []
    },
    terminal_states: ['failed', 'reversed']
  },

  domain_rules: [
    'ONLY Rabtul Wallet Service can write to this table',
    'Transactions are APPEND-ONLY (no updates/deletes)',
    'Balance is COMPUTED from transactions, not stored',
    'Coin priority MUST be enforced: Promo → Branded → ReZ → Cash',
    'Expired coins are debited via debit_expiry transaction',
    'All debit transactions MUST check balance first'
  ],

  computed_views: {
    // View: Current wallet balance per user
    wallet_balance: {
      query: `
        SELECT
          user_id,
          coin_type,
          SUM(CASE
            WHEN transaction_type LIKE 'credit_%' THEN amount
            WHEN transaction_type LIKE 'debit_%' THEN -amount
            ELSE 0
          END) as balance
        FROM wallet_transactions
        WHERE status = 'completed'
          AND (expires_at IS NULL OR expires_at > NOW())
        GROUP BY user_id, coin_type
      `,
      note: 'This is the ONLY way to get current balance'
    }
  },

  related_schemas: [
    'users',
    'orders',
    'campaigns'
  ]
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 * DO NOT EDIT MANUALLY
 */
export type WalletTransaction = {
  id: string;
  user_id: string;
  transaction_type:
    | 'credit_signup_bonus'
    | 'credit_referral_reward'
    | 'credit_cashback'
    | 'credit_campaign_reward'
    | 'credit_refund'
    | 'debit_order_payment'
    | 'debit_transfer'
    | 'debit_expiry'
    | 'debit_clawback';
  coin_type: 'promo_coins' | 'branded_coins' | 'rez_coins' | 'cash';
  amount: number;
  balance_before: number;
  balance_after: number;
  status: 'pending' | 'completed' | 'failed' | 'reversed';
  reason: string;
  metadata: {
    source?: string;
    campaign_id?: string;
    order_id?: string;
    merchant_id?: string;
    rule_version?: string;
    attribution_app?: string;
  } | null;
  expires_at: Date | null;
  related_transaction_id: string | null;
  created_at: Date;
};

export type WalletBalance = {
  user_id: string;
  promo_coins: number;
  branded_coins: number;
  rez_coins: number;
  cash: number;
  total: number;
};
