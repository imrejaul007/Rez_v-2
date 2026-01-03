/**
 * MIGRATION: Create wallet_transactions table (APPEND-ONLY LEDGER)
 *
 * Generated from: wallet.schema.ts
 * Timestamp: 2024-01-04T00:00:01Z
 *
 * CRITICAL: This is an append-only ledger
 * - NO updates allowed
 * - NO deletes allowed
 * - Balance is COMPUTED from transactions
 */

-- ============================================
-- UP Migration
-- ============================================

CREATE TABLE IF NOT EXISTS wallet_transactions (
  -- Identity
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- References
  user_id UUID NOT NULL REFERENCES users(id),

  -- Transaction Details
  transaction_type VARCHAR(50) NOT NULL CHECK (
    transaction_type IN (
      'credit_signup_bonus',
      'credit_referral_reward',
      'credit_cashback',
      'credit_refund',
      'credit_topup',
      'credit_merchant_payout',
      'debit_order_payment',
      'debit_withdrawal',
      'debit_transfer'
    )
  ),

  coin_type VARCHAR(20) NOT NULL CHECK (
    coin_type IN ('promo_coins', 'branded_coins', 'rez_coins', 'cash')
  ),

  amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),

  -- Status
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (
    status IN ('pending', 'completed', 'failed', 'reversed')
  ),

  -- References
  related_order_id UUID,
  related_campaign_id UUID,
  payment_gateway_txn_id VARCHAR(255),

  -- Metadata
  description TEXT,
  metadata JSONB,

  -- Timestamps (IMMUTABLE)
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
  -- NO updated_at - transactions are immutable
);

-- ============================================
-- Indexes
-- ============================================

CREATE INDEX idx_wallet_transactions_user_id ON wallet_transactions(user_id, created_at DESC);
CREATE INDEX idx_wallet_transactions_status ON wallet_transactions(status);
CREATE INDEX idx_wallet_transactions_type ON wallet_transactions(transaction_type);
CREATE INDEX idx_wallet_transactions_coin_type ON wallet_transactions(coin_type);
CREATE INDEX idx_wallet_transactions_order_id ON wallet_transactions(related_order_id) WHERE related_order_id IS NOT NULL;

-- ============================================
-- Computed View: Current Balance
-- ============================================

CREATE OR REPLACE VIEW wallet_balances AS
SELECT
  user_id,
  -- Promo Coins
  COALESCE(SUM(
    CASE
      WHEN coin_type = 'promo_coins' AND transaction_type LIKE 'credit_%' THEN amount
      WHEN coin_type = 'promo_coins' AND transaction_type LIKE 'debit_%' THEN -amount
      ELSE 0
    END
  ) FILTER (WHERE status = 'completed'), 0) AS promo_coins,

  -- Branded Coins
  COALESCE(SUM(
    CASE
      WHEN coin_type = 'branded_coins' AND transaction_type LIKE 'credit_%' THEN amount
      WHEN coin_type = 'branded_coins' AND transaction_type LIKE 'debit_%' THEN -amount
      ELSE 0
    END
  ) FILTER (WHERE status = 'completed'), 0) AS branded_coins,

  -- ReZ Coins
  COALESCE(SUM(
    CASE
      WHEN coin_type = 'rez_coins' AND transaction_type LIKE 'credit_%' THEN amount
      WHEN coin_type = 'rez_coins' AND transaction_type LIKE 'debit_%' THEN -amount
      ELSE 0
    END
  ) FILTER (WHERE status = 'completed'), 0) AS rez_coins,

  -- Cash
  COALESCE(SUM(
    CASE
      WHEN coin_type = 'cash' AND transaction_type LIKE 'credit_%' THEN amount
      WHEN coin_type = 'cash' AND transaction_type LIKE 'debit_%' THEN -amount
      ELSE 0
    END
  ) FILTER (WHERE status = 'completed'), 0) AS cash,

  -- Total
  COALESCE(SUM(
    CASE
      WHEN transaction_type LIKE 'credit_%' THEN amount
      WHEN transaction_type LIKE 'debit_%' THEN -amount
      ELSE 0
    END
  ) FILTER (WHERE status = 'completed'), 0) AS total

FROM wallet_transactions
GROUP BY user_id;

-- ============================================
-- Prevent Updates/Deletes (APPEND-ONLY ENFORCEMENT)
-- ============================================

CREATE OR REPLACE FUNCTION prevent_wallet_mutations()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'UPDATE' THEN
    RAISE EXCEPTION 'Wallet transactions are immutable. No updates allowed.';
  END IF;

  IF TG_OP = 'DELETE' THEN
    RAISE EXCEPTION 'Wallet transactions cannot be deleted. Append-only ledger.';
  END IF;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_prevent_wallet_update
  BEFORE UPDATE ON wallet_transactions
  FOR EACH ROW
  EXECUTE FUNCTION prevent_wallet_mutations();

CREATE TRIGGER trigger_prevent_wallet_delete
  BEFORE DELETE ON wallet_transactions
  FOR EACH ROW
  EXECUTE FUNCTION prevent_wallet_mutations();

-- ============================================
-- Comments
-- ============================================

COMMENT ON TABLE wallet_transactions IS 'APPEND-ONLY ledger. Balance computed from transactions.';
COMMENT ON COLUMN wallet_transactions.coin_type IS 'Priority: Promo → Branded → ReZ → Cash';
COMMENT ON VIEW wallet_balances IS 'Current balance computed from completed transactions';

-- ============================================
-- DOWN Migration
-- ============================================

-- To rollback:
-- DROP TRIGGER IF EXISTS trigger_prevent_wallet_update ON wallet_transactions;
-- DROP TRIGGER IF EXISTS trigger_prevent_wallet_delete ON wallet_transactions;
-- DROP FUNCTION IF EXISTS prevent_wallet_mutations;
-- DROP VIEW IF EXISTS wallet_balances;
-- DROP TABLE IF EXISTS wallet_transactions CASCADE;
