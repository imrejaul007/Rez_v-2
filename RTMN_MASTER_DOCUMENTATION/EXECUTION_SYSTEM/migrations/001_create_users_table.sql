/**
 * MIGRATION: Create users table
 *
 * Generated from: user.schema.ts
 * Timestamp: 2024-01-04T00:00:00Z
 *
 * DO NOT EDIT MANUALLY
 * To generate: npm run migration:generate user.schema.ts
 */

-- ============================================
-- UP Migration
-- ============================================

CREATE TABLE IF NOT EXISTS users (
  -- Identity
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Contact
  phone VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(255),

  -- Profile
  name VARCHAR(200) NOT NULL,
  date_of_birth DATE,
  gender VARCHAR(20),
  profile_picture_url VARCHAR(500),

  -- Loyalty
  loyalty_tier VARCHAR(20) NOT NULL DEFAULT 'basic' CHECK (
    loyalty_tier IN ('basic', 'silver', 'gold', 'prive')
  ),
  total_spend DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
  lifetime_orders INTEGER NOT NULL DEFAULT 0,

  -- Verification
  phone_verified BOOLEAN NOT NULL DEFAULT false,
  email_verified BOOLEAN NOT NULL DEFAULT false,
  kyc_status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (
    kyc_status IN ('pending', 'submitted', 'verified', 'rejected')
  ),
  kyc_submitted_at TIMESTAMP,
  kyc_verified_at TIMESTAMP,

  -- Status
  status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (
    status IN ('active', 'suspended', 'banned', 'deleted')
  ),

  -- Referral
  referral_code VARCHAR(10) UNIQUE,
  referred_by_user_id UUID REFERENCES users(id),

  -- Metadata
  metadata JSONB,

  -- Timestamps
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  last_login_at TIMESTAMP
);

-- ============================================
-- Indexes
-- ============================================

CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_email ON users(email) WHERE email IS NOT NULL;
CREATE INDEX idx_users_referral_code ON users(referral_code) WHERE referral_code IS NOT NULL;
CREATE INDEX idx_users_loyalty_tier ON users(loyalty_tier);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created_at ON users(created_at);

-- ============================================
-- Triggers
-- ============================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_users_updated_at();

-- ============================================
-- Comments
-- ============================================

COMMENT ON TABLE users IS 'Canonical user table - source of truth from rabtul-auth';
COMMENT ON COLUMN users.phone IS 'Phone number in format: +91-XXXXXXXXXX';
COMMENT ON COLUMN users.loyalty_tier IS 'Controls coin multipliers and perks';
COMMENT ON COLUMN users.referral_code IS 'Unique code for user referrals';

-- ============================================
-- DOWN Migration
-- ============================================

-- To rollback:
-- DROP TRIGGER IF EXISTS trigger_users_updated_at ON users;
-- DROP FUNCTION IF EXISTS update_users_updated_at;
-- DROP TABLE IF EXISTS users CASCADE;
