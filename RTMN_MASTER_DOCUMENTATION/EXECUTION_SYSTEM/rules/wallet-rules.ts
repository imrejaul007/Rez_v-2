/**
 * WALLET BUSINESS RULES
 *
 * All wallet-related business logic lives here
 *
 * RULES:
 * - Coin priority: Promo → Branded → ReZ → Cash (MANDATORY)
 * - Promo coins expire after 90 days
 * - Branded coins expire based on campaign
 * - ReZ coins never expire
 * - Cash never expires
 */

import { ErrorCode, ApplicationError } from '../ERROR_CODES';

export interface CoinBreakdown {
  promo_coins_used: number;
  branded_coins_used: number;
  rez_coins_used: number;
  cash_used: number;
  total_used: number;
}

export interface WalletBalance {
  user_id: string;
  promo_coins: number;
  branded_coins: number;
  rez_coins: number;
  cash: number;
  total: number;
}

/**
 * RULE: Calculate coin usage breakdown
 *
 * Priority: Promo → Branded → ReZ → Cash
 * This is MANDATORY and CANNOT be changed
 */
export function calculateCoinBreakdown(
  amount: number,
  balance: WalletBalance
): CoinBreakdown {
  let remaining = amount;

  // Step 1: Use promo coins first
  const promo_coins_used = Math.min(balance.promo_coins, remaining);
  remaining -= promo_coins_used;

  // Step 2: Use branded coins
  const branded_coins_used = Math.min(balance.branded_coins, remaining);
  remaining -= branded_coins_used;

  // Step 3: Use ReZ coins
  const rez_coins_used = Math.min(balance.rez_coins, remaining);
  remaining -= rez_coins_used;

  // Step 4: Use cash
  const cash_used = Math.min(balance.cash, remaining);
  remaining -= cash_used;

  // If still remaining → insufficient funds
  if (remaining > 0) {
    throw new ApplicationError(ErrorCode.WALLET_INSUFFICIENT_FUNDS, {
      required: amount,
      available: balance.total,
      shortfall: remaining
    });
  }

  return {
    promo_coins_used,
    branded_coins_used,
    rez_coins_used,
    cash_used,
    total_used: amount
  };
}

/**
 * RULE: Validate wallet debit request
 *
 * Checks:
 * - Amount > 0
 * - User has sufficient balance
 * - Transaction type is valid
 */
export function validateDebitRequest(
  amount: number,
  balance: WalletBalance,
  transactionType: string
): void {
  // Amount must be positive
  if (amount <= 0) {
    throw new ApplicationError(ErrorCode.VALIDATION_AMOUNT_INVALID, {
      amount,
      reason: 'Amount must be greater than 0'
    });
  }

  // Check sufficient balance
  if (balance.total < amount) {
    throw new ApplicationError(ErrorCode.WALLET_INSUFFICIENT_FUNDS, {
      required: amount,
      available: balance.total,
      shortfall: amount - balance.total
    });
  }

  // Valid transaction types for debit
  const validDebitTypes = [
    'debit_order_payment',
    'debit_withdrawal',
    'debit_transfer'
  ];

  if (!validDebitTypes.includes(transactionType)) {
    throw new ApplicationError(ErrorCode.VALIDATION_FAILED, {
      field: 'transaction_type',
      value: transactionType,
      allowed: validDebitTypes
    });
  }
}

/**
 * RULE: Validate wallet credit request
 *
 * Checks:
 * - Amount > 0
 * - Coin type is valid
 * - Transaction type is valid
 */
export function validateCreditRequest(
  amount: number,
  coinType: string,
  transactionType: string
): void {
  // Amount must be positive
  if (amount <= 0) {
    throw new ApplicationError(ErrorCode.VALIDATION_AMOUNT_INVALID, {
      amount,
      reason: 'Amount must be greater than 0'
    });
  }

  // Valid coin types
  const validCoinTypes = ['promo_coins', 'branded_coins', 'rez_coins', 'cash'];
  if (!validCoinTypes.includes(coinType)) {
    throw new ApplicationError(ErrorCode.VALIDATION_FAILED, {
      field: 'coin_type',
      value: coinType,
      allowed: validCoinTypes
    });
  }

  // Valid transaction types for credit
  const validCreditTypes = [
    'credit_signup_bonus',
    'credit_referral_reward',
    'credit_cashback',
    'credit_refund',
    'credit_topup',
    'credit_merchant_payout'
  ];

  if (!validCreditTypes.includes(transactionType)) {
    throw new ApplicationError(ErrorCode.VALIDATION_FAILED, {
      field: 'transaction_type',
      value: transactionType,
      allowed: validCreditTypes
    });
  }
}

/**
 * RULE: Check coin expiry
 *
 * Promo coins: 90 days
 * Branded coins: Based on campaign
 * ReZ coins: Never expire
 * Cash: Never expires
 */
export function calculateExpiredCoins(
  transactions: Array<{
    id: string;
    coin_type: string;
    amount: number;
    created_at: Date;
    metadata?: any;
  }>
): { expired_amount: number; transaction_ids: string[] } {
  const now = new Date();
  const PROMO_EXPIRY_DAYS = 90;

  let expired_amount = 0;
  const transaction_ids: string[] = [];

  for (const txn of transactions) {
    if (txn.coin_type === 'promo_coins') {
      const daysSinceCreation = Math.floor(
        (now.getTime() - new Date(txn.created_at).getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysSinceCreation > PROMO_EXPIRY_DAYS) {
        expired_amount += txn.amount;
        transaction_ids.push(txn.id);
      }
    }

    if (txn.coin_type === 'branded_coins' && txn.metadata?.expiry_date) {
      const expiryDate = new Date(txn.metadata.expiry_date);
      if (now > expiryDate) {
        expired_amount += txn.amount;
        transaction_ids.push(txn.id);
      }
    }
  }

  return { expired_amount, transaction_ids };
}

/**
 * RULE: Withdrawal limits
 *
 * - Min withdrawal: ₹100
 * - Max withdrawal per day: ₹10,000
 * - Only cash can be withdrawn
 * - KYC required for withdrawals > ₹5,000
 */
export function validateWithdrawal(
  amount: number,
  balance: WalletBalance,
  userKycStatus: string,
  todayWithdrawals: number
): void {
  const MIN_WITHDRAWAL = 100;
  const MAX_DAILY_WITHDRAWAL = 10000;
  const KYC_REQUIRED_THRESHOLD = 5000;

  // Minimum check
  if (amount < MIN_WITHDRAWAL) {
    throw new ApplicationError(ErrorCode.WALLET_MIN_BALANCE_REQUIRED, {
      required: MIN_WITHDRAWAL,
      requested: amount
    });
  }

  // Only cash can be withdrawn
  if (balance.cash < amount) {
    throw new ApplicationError(ErrorCode.WALLET_INSUFFICIENT_CASH, {
      required: amount,
      available: balance.cash,
      message: 'Only cash balance can be withdrawn. Coins cannot be withdrawn.'
    });
  }

  // Daily limit check
  if (todayWithdrawals + amount > MAX_DAILY_WITHDRAWAL) {
    throw new ApplicationError(ErrorCode.WALLET_MAX_BALANCE_EXCEEDED, {
      limit: MAX_DAILY_WITHDRAWAL,
      already_withdrawn: todayWithdrawals,
      requested: amount
    });
  }

  // KYC check
  if (amount > KYC_REQUIRED_THRESHOLD && userKycStatus !== 'verified') {
    throw new ApplicationError(ErrorCode.RULE_VIOLATION_KYC_REQUIRED, {
      threshold: KYC_REQUIRED_THRESHOLD,
      amount,
      current_kyc_status: userKycStatus
    });
  }
}

/**
 * RULE: Refund calculation (reverse of debit)
 *
 * When refunding, credit back in REVERSE order:
 * Cash → ReZ → Branded → Promo
 */
export function calculateRefundBreakdown(originalDebit: CoinBreakdown): {
  refunds: Array<{
    coin_type: 'promo_coins' | 'branded_coins' | 'rez_coins' | 'cash';
    amount: number;
  }>;
} {
  const refunds: Array<{
    coin_type: 'promo_coins' | 'branded_coins' | 'rez_coins' | 'cash';
    amount: number;
  }> = [];

  // Refund in reverse order
  if (originalDebit.cash_used > 0) {
    refunds.push({ coin_type: 'cash', amount: originalDebit.cash_used });
  }

  if (originalDebit.rez_coins_used > 0) {
    refunds.push({ coin_type: 'rez_coins', amount: originalDebit.rez_coins_used });
  }

  if (originalDebit.branded_coins_used > 0) {
    refunds.push({ coin_type: 'branded_coins', amount: originalDebit.branded_coins_used });
  }

  if (originalDebit.promo_coins_used > 0) {
    refunds.push({ coin_type: 'promo_coins', amount: originalDebit.promo_coins_used });
  }

  return { refunds };
}
