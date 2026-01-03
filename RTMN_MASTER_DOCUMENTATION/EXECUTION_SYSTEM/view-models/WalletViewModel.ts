/**
 * WALLET VIEW MODEL
 *
 * PURPOSE: Transform backend wallet data into UI-ready format
 *
 * RULE: Frontend receives THIS, not raw API data
 * RULE: All calculations done here, ZERO logic in frontend
 */

import { WalletBalance, WalletTransaction } from '../schemas/wallet.schema';
import { User } from '../schemas/user.schema';

/**
 * Wallet Balance ViewModel
 * Ready to render on wallet screen
 */
export interface WalletBalanceViewModel {
  // Balances
  coins: {
    promo: {
      amount: number;
      displayAmount: string;  // "100.00"
      icon: string;           // "gift"
      color: string;          // "#FF6B6B"
      label: string;          // "Promo Coins"
    };
    branded: {
      amount: number;
      displayAmount: string;
      icon: string;           // "star"
      color: string;          // "#4ECDC4"
      label: string;          // "Branded Coins"
    };
    rez: {
      amount: number;
      displayAmount: string;
      icon: string;           // "coins"
      color: string;          // "#FFD93D"
      label: string;          // "ReZ Coins"
    };
    cash: {
      amount: number;
      displayAmount: string;  // "₹ 1,500.00"
      icon: string;           // "rupee"
      color: string;          // "#6BCF7F"
      label: string;          // "Cash"
    };
  };

  total: {
    amount: number;
    displayAmount: string;    // "₹ 3,500.00"
    label: string;            // "Total Balance"
  };

  // User tier info
  tier: {
    current: 'basic' | 'silver' | 'gold' | 'prive';
    displayName: string;      // "Gold Member"
    icon: string;             // "crown"
    color: string;            // "#FFD700"
    multiplier: number;       // 1.5x for gold
    benefits: string[];       // ["2x coins on weekends", "Priority support"]
  };

  // Actions
  actions: {
    canTopUp: boolean;
    canWithdraw: boolean;
    canTransfer: boolean;
    topUpButton: {
      enabled: boolean;
      text: string;           // "Add Money"
      action: string;         // "navigate_to_topup"
    };
    withdrawButton: {
      enabled: boolean;
      text: string;
      action: string;
      disabledReason?: string; // "Minimum ₹100 required"
    };
  };

  // Metadata
  lastUpdated: string;        // "2 minutes ago"
  lastUpdatedFull: string;    // "Jan 4, 2026 at 10:30 AM"
}

/**
 * Transaction ViewModel
 * Ready to render in transaction list
 */
export interface TransactionViewModel {
  id: string;

  // Display info
  title: string;              // "Birthday Reward"
  subtitle: string;           // "Promotional coins credited"
  description?: string;       // "Happy Birthday! Enjoy 500 bonus coins"

  // Amount
  amount: {
    value: number;
    displayValue: string;     // "+500" or "-200"
    formatted: string;        // "+500 Promo Coins"
    isCredit: boolean;        // true for credits, false for debits
    color: string;            // "#4CAF50" for credit, "#F44336" for debit
  };

  // Coin type
  coinType: {
    type: 'promo_coins' | 'branded_coins' | 'rez_coins' | 'cash';
    displayName: string;      // "Promo Coins"
    icon: string;
    color: string;
  };

  // Status
  status: {
    state: 'pending' | 'completed' | 'failed' | 'reversed';
    displayText: string;      // "Completed"
    icon: string;             // "check-circle"
    color: string;            // "#4CAF50"
  };

  // Timing
  timestamp: {
    absolute: string;         // "2026-01-04T10:30:00Z"
    relative: string;         // "2 hours ago"
    formatted: string;        // "Jan 4, 2026 at 10:30 AM"
  };

  // Balance snapshot
  balanceAfter: {
    amount: number;
    displayAmount: string;
  };

  // Expiry (if applicable)
  expiry?: {
    expiresAt: string;
    expiresIn: string;        // "30 days"
    isExpiringSoon: boolean;  // true if < 7 days
    warningMessage?: string;  // "Expires in 3 days!"
  };

  // Metadata
  tags: string[];             // ["BIRTHDAY", "PROMOTIONAL"]
  relatedOrderId?: string;
  relatedCampaignId?: string;
}

/**
 * Transform functions
 * Called by API layer, consumed by frontend
 */

const TIER_CONFIG = {
  basic: {
    displayName: 'Basic Member',
    icon: 'user',
    color: '#95A5A6',
    multiplier: 1,
    benefits: []
  },
  silver: {
    displayName: 'Silver Member',
    icon: 'medal',
    color: '#C0C0C0',
    multiplier: 1.2,
    benefits: ['1.2x coin earning', 'Free delivery on orders > ₹500']
  },
  gold: {
    displayName: 'Gold Member',
    icon: 'crown',
    color: '#FFD700',
    multiplier: 1.5,
    benefits: ['1.5x coin earning', '2x coins on weekends', 'Priority support']
  },
  prive: {
    displayName: 'Prive Member',
    icon: 'diamond',
    color: '#9B59B6',
    multiplier: 2,
    benefits: ['2x coin earning', 'Exclusive deals', 'Concierge service']
  }
};

export function toWalletBalanceViewModel(
  balance: WalletBalance,
  user: User
): WalletBalanceViewModel {
  const tierConfig = TIER_CONFIG[user.loyalty_tier];

  return {
    coins: {
      promo: {
        amount: balance.promo_coins,
        displayAmount: balance.promo_coins.toFixed(2),
        icon: 'gift',
        color: '#FF6B6B',
        label: 'Promo Coins'
      },
      branded: {
        amount: balance.branded_coins,
        displayAmount: balance.branded_coins.toFixed(2),
        icon: 'star',
        color: '#4ECDC4',
        label: 'Branded Coins'
      },
      rez: {
        amount: balance.rez_coins,
        displayAmount: balance.rez_coins.toFixed(2),
        icon: 'coins',
        color: '#FFD93D',
        label: 'ReZ Coins'
      },
      cash: {
        amount: balance.cash,
        displayAmount: `₹ ${balance.cash.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        icon: 'rupee',
        color: '#6BCF7F',
        label: 'Cash'
      }
    },

    total: {
      amount: balance.total,
      displayAmount: `₹ ${balance.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
      label: 'Total Balance'
    },

    tier: {
      current: user.loyalty_tier,
      displayName: tierConfig.displayName,
      icon: tierConfig.icon,
      color: tierConfig.color,
      multiplier: tierConfig.multiplier,
      benefits: tierConfig.benefits
    },

    actions: {
      canTopUp: true,
      canWithdraw: balance.cash >= 100, // Minimum ₹100 for withdrawal
      canTransfer: balance.total >= 10,  // Minimum ₹10 for transfer
      topUpButton: {
        enabled: true,
        text: 'Add Money',
        action: 'navigate_to_topup'
      },
      withdrawButton: {
        enabled: balance.cash >= 100,
        text: balance.cash >= 100 ? 'Withdraw' : 'Withdraw (Min ₹100)',
        action: 'navigate_to_withdraw',
        disabledReason: balance.cash < 100 ? 'Minimum ₹100 required for withdrawal' : undefined
      }
    },

    lastUpdated: formatRelativeTime(new Date(balance.last_updated)),
    lastUpdatedFull: new Date(balance.last_updated).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
}

export function toTransactionViewModel(
  transaction: WalletTransaction
): TransactionViewModel {
  const isCredit = transaction.transaction_type.startsWith('credit_');

  const coinTypeConfig = {
    promo_coins: { displayName: 'Promo Coins', icon: 'gift', color: '#FF6B6B' },
    branded_coins: { displayName: 'Branded Coins', icon: 'star', color: '#4ECDC4' },
    rez_coins: { displayName: 'ReZ Coins', icon: 'coins', color: '#FFD93D' },
    cash: { displayName: 'Cash', icon: 'rupee', color: '#6BCF7F' }
  };

  const statusConfig = {
    pending: { displayText: 'Pending', icon: 'clock', color: '#FFA726' },
    completed: { displayText: 'Completed', icon: 'check-circle', color: '#4CAF50' },
    failed: { displayText: 'Failed', icon: 'x-circle', color: '#F44336' },
    reversed: { displayText: 'Reversed', icon: 'rotate-ccw', color: '#9E9E9E' }
  };

  // Generate title based on transaction type
  const titles: Record<string, string> = {
    credit_signup_bonus: 'Sign-up Bonus',
    credit_referral_reward: 'Referral Reward',
    credit_cashback: 'Cashback Earned',
    credit_campaign_reward: 'Campaign Reward',
    credit_refund: 'Refund',
    debit_order_payment: 'Order Payment',
    debit_transfer: 'Transfer',
    debit_expiry: 'Coins Expired',
    debit_clawback: 'Reward Clawback'
  };

  const expiry = transaction.expires_at ? {
    expiresAt: transaction.expires_at.toISOString(),
    expiresIn: formatTimeUntil(transaction.expires_at),
    isExpiringSoon: isExpiringSoon(transaction.expires_at),
    warningMessage: isExpiringSoon(transaction.expires_at)
      ? `Expires in ${formatTimeUntil(transaction.expires_at)}!`
      : undefined
  } : undefined;

  return {
    id: transaction.id,
    title: titles[transaction.transaction_type] || transaction.reason,
    subtitle: coinTypeConfig[transaction.coin_type].displayName + (isCredit ? ' credited' : ' debited'),
    description: transaction.reason,

    amount: {
      value: transaction.amount,
      displayValue: (isCredit ? '+' : '-') + transaction.amount.toFixed(0),
      formatted: (isCredit ? '+' : '-') + transaction.amount.toFixed(0) + ' ' + coinTypeConfig[transaction.coin_type].displayName,
      isCredit,
      color: isCredit ? '#4CAF50' : '#F44336'
    },

    coinType: {
      type: transaction.coin_type,
      displayName: coinTypeConfig[transaction.coin_type].displayName,
      icon: coinTypeConfig[transaction.coin_type].icon,
      color: coinTypeConfig[transaction.coin_type].color
    },

    status: {
      state: transaction.status,
      displayText: statusConfig[transaction.status].displayText,
      icon: statusConfig[transaction.status].icon,
      color: statusConfig[transaction.status].color
    },

    timestamp: {
      absolute: transaction.created_at.toISOString(),
      relative: formatRelativeTime(transaction.created_at),
      formatted: transaction.created_at.toLocaleString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    balanceAfter: {
      amount: transaction.balance_after,
      displayAmount: transaction.balance_after.toFixed(2)
    },

    expiry,

    tags: generateTags(transaction),
    relatedOrderId: transaction.metadata?.order_id,
    relatedCampaignId: transaction.metadata?.campaign_id
  };
}

// Helper functions
function formatRelativeTime(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)} days ago`;
  return date.toLocaleDateString('en-IN');
}

function formatTimeUntil(date: Date): string {
  const seconds = Math.floor((date.getTime() - Date.now()) / 1000);

  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours`;
  return `${Math.floor(seconds / 86400)} days`;
}

function isExpiringSoon(date: Date): boolean {
  const days = (date.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  return days < 7;
}

function generateTags(transaction: WalletTransaction): string[] {
  const tags: string[] = [];

  if (transaction.transaction_type.includes('bonus')) tags.push('BONUS');
  if (transaction.transaction_type.includes('campaign')) tags.push('CAMPAIGN');
  if (transaction.transaction_type.includes('referral')) tags.push('REFERRAL');
  if (transaction.expires_at && isExpiringSoon(transaction.expires_at)) tags.push('EXPIRING_SOON');

  return tags;
}
