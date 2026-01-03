# ReZ Admin & Merchant System - Complete Development Plan

## 📋 Executive Summary

This document integrates the comprehensive requirements analysis with the ecosystem control architecture to create a complete, phased development plan for building ReZ's backend management systems.

**Systems to Build:**
1. **Super Admin Dashboard** (ReZ HQ Control Panel)
2. **Operations Admin Dashboard** (City/Category/Team Level)
3. **Merchant Dashboard** (Business Side)

**Timeline:** 9-12 months (with dedicated team)
**Approach:** Phased MVP → Advanced → Enterprise

---

# 🎯 System Architecture Overview

## The 4-Layer ReZ Ecosystem

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: USER APP (Customer Facing)                        │
│  - ReZ Near You, Mall, Cash Store, Privé                    │
│  - Spend, Earn, Save                                         │
└─────────────────────────────────────────────────────────────┘
                            ↕️
┌─────────────────────────────────────────────────────────────┐
│  LAYER 2: MERCHANT DASHBOARD (Business Side)                │
│  - Sell, Grow, Manage Offers                                │
│  - Transaction Management, Analytics                         │
└─────────────────────────────────────────────────────────────┘
                            ↕️
┌─────────────────────────────────────────────────────────────┐
│  LAYER 3: OPERATIONS ADMIN (City & Team Level)              │
│  - Execute, Onboard, Campaign Management                    │
│  - College/Corporate, Events, Marketing                      │
└─────────────────────────────────────────────────────────────┘
                            ↕️
┌─────────────────────────────────────────────────────────────┐
│  LAYER 4: SUPER ADMIN (ReZ HQ)                              │
│  - Control, Scale, Monitor Everything                       │
│  - Coins, Fraud, Finance, Compliance                         │
└─────────────────────────────────────────────────────────────┘
```

---

# 🔐 SYSTEM 1: SUPER ADMIN DASHBOARD (ReZ HQ)

## Access & Role-Based Permissions

### Role Hierarchy

| Role | Access Level | Key Permissions |
|------|--------------|----------------|
| **Super Admin** (Founders) | Full System Access | All permissions, system config, critical decisions |
| **Finance Admin** | Financial Systems | Settlements, refunds, reconciliation, tax reports |
| **Risk & Compliance** | Security & Legal | Fraud detection, KYC, compliance, blacklist |
| **Product Admin** | Features & Config | Feature toggles, mode management, category control |
| **Growth & Marketing** | Campaigns & Analytics | Campaign management, analytics, user insights |
| **Content Moderation** | User Content | UGC approval, review moderation, content policy |
| **Privé Admin** | Privé Ecosystem | Privé approvals, tier management, brand partnerships |
| **Operations Manager** | Daily Operations | Merchant approvals, ticket resolution, reports |

### Permission Matrix
```javascript
const PERMISSIONS = {
  SUPER_ADMIN: ['*'], // All permissions
  FINANCE_ADMIN: [
    'view_transactions',
    'manage_settlements',
    'process_refunds',
    'view_financial_reports',
    'manage_commission'
  ],
  RISK_COMPLIANCE: [
    'view_fraud_alerts',
    'suspend_users',
    'suspend_merchants',
    'manage_kyc',
    'view_compliance_reports'
  ],
  PRODUCT_ADMIN: [
    'manage_categories',
    'manage_modes',
    'feature_toggles',
    'manage_coin_rules',
    'system_configuration'
  ],
  GROWTH_MARKETING: [
    'create_campaigns',
    'view_analytics',
    'send_notifications',
    'manage_offers',
    'view_user_insights'
  ],
  CONTENT_MOD: [
    'moderate_reviews',
    'moderate_ugc',
    'flag_content',
    'ban_users',
    'content_reports'
  ],
  PRIVE_ADMIN: [
    'approve_prive_users',
    'manage_prive_tiers',
    'manage_prive_coins',
    'prive_brand_partnerships',
    'prive_campaigns'
  ],
  OPS_MANAGER: [
    'approve_merchants',
    'view_tickets',
    'resolve_disputes',
    'daily_reports'
  ]
};
```

---

## A. Global Ecosystem Overview (Dashboard Home)

### Live Metrics Display

#### Platform Overview (Top Cards)
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Total Users  │ Active       │ Transactions │ GMV Today    │
│ 50,234       │ Merchants    │ Today        │              │
│ ↑ 2,345      │ 2,456        │ ₹12,45,678   │ ₹45,67,890   │
│ this week    │ 🟢 1,234 live│ 4,567 orders │ ↑ 23% vs ytd │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

#### Coin Economy Overview
```
┌─────────────────────────────────────────────────────────────┐
│ COIN ECONOMY STATUS                                          │
├──────────────────┬──────────────────┬──────────────────────┤
│ ReZ Coins        │ Branded Coins    │ Privé Coins          │
│ Issued: 1.2M     │ Issued: 456K     │ Issued: 89K          │
│ Redeemed: 890K   │ Redeemed: 234K   │ Redeemed: 67K        │
│ Active: 310K     │ Active: 222K     │ Active: 22K          │
│ Expired: 45K     │ Expired: 12K     │ Expired: 3K          │
├──────────────────┴──────────────────┴──────────────────────┤
│ Promo Coins: 234K issued | 156K redeemed | 78K active      │
└─────────────────────────────────────────────────────────────┘
```

#### Mode Usage Split (Real-time Chart)
```
Mode Performance Today:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ReZ Near You    ████████████████░░░░  65% (8,945 txns)
ReZ Mall        ████████░░░░░░░░░░░░  25% (3,456 txns)
Cash Store      ██░░░░░░░░░░░░░░░░░░   8% (1,102 txns)
ReZ Privé       █░░░░░░░░░░░░░░░░░░░   2% (276 txns)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### Filter & Category Analytics
```
Filter Mode Usage (This Week):
- All Mode: 67% (baseline)
- Halal Mode: 18% (strong engagement)
- Vegan Mode: 8%
- Veg Mode: 12%
- Adult Mode: 4%
- Occasion Mode: 23% (weekend spike)
- Vibes Mode: 15%
- Privé Filter: 2%

Top Categories by GMV:
1. Food & Dining - ₹5,67,890 (45%)
2. Electronics - ₹2,34,567 (19%)
3. Fashion - ₹1,89,234 (15%)
4. Beauty & Wellness - ₹98,765 (8%)
5. Fitness & Gym - ₹87,654 (7%)
```

#### Critical Alerts Dashboard
```
🚨 CRITICAL ALERTS (Immediate Action Required)
┌────────────────────────────────────────────────────────┐
│ 🔴 Payment Gateway Down - Paytm (15 mins)              │
│ 🔴 Fraud Alert - User #12345 unusual activity          │
│ 🟡 Server Load High - 87% capacity                     │
└────────────────────────────────────────────────────────┘

⚠️ PENDING APPROVALS (Action Needed)
┌────────────────────────────────────────────────────────┐
│ 🟡 45 Merchant Applications (avg wait: 3 days)         │
│ 🟡 123 Offers Pending Review                           │
│ 🟡 234 Reviews Flagged                                 │
│ 🟡 12 Privé Applications                               │
│ 🟡 8 Dispute Escalations                               │
└────────────────────────────────────────────────────────┘

📊 BUSINESS HEALTH
┌────────────────────────────────────────────────────────┐
│ ✅ DAU/MAU Ratio: 0.42 (Healthy)                       │
│ ✅ Merchant Churn: 2.3% (Low)                          │
│ ⚠️ User Retention (D7): 68% (Target: 75%)              │
│ ✅ GMV Growth: +23% MoM                                │
└────────────────────────────────────────────────────────┘
```

### Quick Actions Panel
```
┌─────────────────────────────────────────────────────────────┐
│ QUICK ACTIONS                                                │
├─────────────────────────────────────────────────────────────┤
│ [📢 Create Platform Announcement]  [🎁 Launch Flash Sale]   │
│ [✅ Approve Pending Merchants]     [🚨 Handle Urgent Tickets]│
│ [💰 Manual Coin Issuance]          [📊 Generate Report]     │
│ [🔒 Freeze Suspicious Account]     [📧 Broadcast Message]   │
└─────────────────────────────────────────────────────────────┘
```

---

## B. Coin Management System (CRITICAL CORE)

This is the **heart of ReZ**. Without proper coin controls, the platform cannot scale.

### 1. Coin Rules Engine

#### A. ReZ Coin Rules
```javascript
// Global ReZ Coin Configuration
const REZ_COIN_RULES = {
  // Earning Rules
  earning: {
    cashStoreRate: '2%',           // 2% of purchase = ReZ Coins
    nearYouRate: '5-15%',          // Variable by merchant
    mallRate: '2-10%',             // Variable by brand
    priveRate: '15-25%',           // Premium rate

    // Special Multipliers
    multipliers: {
      firstPurchase: '2x',
      weekendBonus: '1.5x',
      festivalMode: '2x',
      referralBonus: '500 coins',
      dailyCheckIn: '50 coins',
      reviewBonus: '100 coins',
      ugcBonus: '200 coins'
    },

    // Caps & Limits
    maxPerTransaction: 5000,       // Max 5000 coins per transaction
    maxPerDay: 20000,              // Max 20k coins per day per user
    maxPerMonth: 100000,           // Max 100k coins per month

    // Expiry Rules
    expiryDays: 365,               // Coins expire in 1 year
    expiryWarning: 30              // Warn 30 days before expiry
  },

  // Redemption Rules
  redemption: {
    minBalance: 100,               // Min 100 coins to redeem
    maxPerBill: '50%',             // Max 50% of bill via coins
    conversionRate: 1,             // 1 coin = ₹1

    // Category-specific rules
    categoryLimits: {
      food: { maxPercent: 50 },
      electronics: { maxPercent: 20 },
      fashion: { maxPercent: 30 },
      travel: { maxPercent: 40 }
    },

    // Minimum purchase requirements
    minPurchaseFor: {
      food: 100,                   // Min ₹100 bill
      electronics: 1000,           // Min ₹1000 bill
      fashion: 500                 // Min ₹500 bill
    }
  },

  // Fraud Prevention
  fraudPrevention: {
    velocityCheck: true,           // Check earning velocity
    maxEarningSpike: 3,            // Alert if 3x normal earning
    suspiciousPatterns: [
      'rapid_consecutive_transactions',
      'same_merchant_multiple_times',
      'bill_upload_without_location'
    ],
    autoSuspendThreshold: 10000    // Auto suspend if 10k+ coins in 1 hour
  }
};
```

#### B. Branded Coin Rules (Merchant-Specific)
```javascript
const BRANDED_COIN_RULES = {
  // Merchant can set their own branded coin rules
  merchantControls: {
    issueRate: '1-20%',            // Merchant decides rate
    expiryDays: '30-180',          // 1-6 months expiry
    minPurchase: 'variable',       // Min purchase amount
    redemptionRules: {
      minCoins: 50,
      maxPercentOfBill: 80,        // Can use up to 80% branded coins
      combinableWithRez: true      // Can combine with ReZ coins
    }
  },

  // Example: Starbucks Branded Coins
  merchantExample: {
    name: 'Starbucks',
    issueRate: 10,                 // 10% back as Starbucks coins
    minPurchase: 200,              // Min ₹200 purchase
    expiryDays: 90,                // 3 months validity
    specialOffers: [
      { day: 'Friday', multiplier: 2 },  // 2x on Fridays
      { item: 'Frappuccino', bonus: 50 } // +50 coins bonus
    ]
  }
};
```

#### C. Privé Coin Rules
```javascript
const PRIVE_COIN_RULES = {
  // Only for verified Privé members
  eligibility: {
    minTier: 'Silver',
    influenceScore: 500,
    verificationRequired: true
  },

  earning: {
    baseRate: '15-25%',            // Higher than regular
    campaignBonus: '500-5000',     // Brand collaboration bonus
    contentBonus: {
      reel: 200,
      post: 100,
      review: 150
    }
  },

  redemption: {
    exclusiveBrands: true,         // Access to exclusive brands
    maxPerBill: '70%',             // Can use up to 70%
    priority: 'highest',           // Redeemed first
    transferable: false            // Cannot transfer
  },

  specialPrivileges: {
    earlyAccess: true,             // Early sale access
    inviteOnly: true,              // Invite-only events
    concierge: true                // Privé concierge service
  }
};
```

#### D. Promo Coin Rules
```javascript
const PROMO_COIN_RULES = {
  // Campaign-specific promotional coins
  types: {
    welcomeBonus: {
      amount: 500,
      expiryDays: 30,
      usableOn: ['first_purchase']
    },

    referralBonus: {
      referrer: 500,
      referee: 500,
      conditions: 'referee_completes_first_purchase',
      expiryDays: 60
    },

    campaignBonus: {
      amount: 'variable',
      expiryDays: 7,               // Short expiry for urgency
      specificMerchants: true,     // Can specify merchants
      minPurchase: 'variable'
    },

    festivalBonus: {
      amount: 1000,
      expiryDays: 15,
      occasions: ['Diwali', 'Eid', 'Christmas'],
      multiplier: '2x'
    }
  },

  issuance: {
    manual: true,                  // Admin can issue manually
    bulk: true,                    // Bulk issuance for campaigns
    conditions: 'configurable',    // Custom conditions
    stackable: false               // Cannot stack promo coins
  }
};
```

### 2. Coin Issuance Control Panel

#### Manual Coin Issuance Interface
```
┌─────────────────────────────────────────────────────────────┐
│ MANUAL COIN ISSUANCE                                         │
├─────────────────────────────────────────────────────────────┤
│ Coin Type:    [ReZ Coin ▼]                                  │
│                                                              │
│ Recipient:    ○ Single User    ○ Bulk Users   ○ Segment     │
│                                                              │
│ User ID/Email: [_________________________________]           │
│                                                              │
│ Amount:       [________] coins                               │
│                                                              │
│ Reason:       [Compensation for service issue ▼]            │
│               - Compensation                                 │
│               - Promotion                                    │
│               - Goodwill Gesture                             │
│               - Campaign Reward                              │
│               - Bug Bounty                                   │
│               - Other (specify)                              │
│                                                              │
│ Expiry:       [30 days ▼]                                   │
│                                                              │
│ Internal Note: [________________________________]            │
│                                                              │
│               [Cancel]              [Issue Coins]            │
└─────────────────────────────────────────────────────────────┘
```

#### Bulk Coin Credit (Campaigns/Events)
```
┌─────────────────────────────────────────────────────────────┐
│ BULK COIN CREDIT - Campaign Manager                         │
├─────────────────────────────────────────────────────────────┤
│ Campaign Name: [Diwali 2024 Bonus]                          │
│                                                              │
│ Target Segment:                                              │
│ ☑ Active users (last 30 days)                               │
│ ☑ Users in Mumbai, Delhi, Bangalore                         │
│ ☑ Total transactions > 5                                    │
│ ☐ Privé members only                                        │
│                                                              │
│ Estimated Recipients: 12,456 users                          │
│                                                              │
│ Coin Amount: [1000] coins per user                          │
│ Total Coins: 12,456,000 coins                               │
│ Estimated Cost: ₹12,45,600 (if redeemed at ₹1/coin)        │
│                                                              │
│ Expiry: [15 days ▼]                                         │
│                                                              │
│ Approval Required: ☑ Finance Admin sign-off                 │
│                                                              │
│ [Preview Segment] [Schedule for Later] [Issue Now]          │
└─────────────────────────────────────────────────────────────┘
```

#### Coin Burning (Expiry Management)
```
┌─────────────────────────────────────────────────────────────┐
│ COIN EXPIRY & BURNING                                        │
├─────────────────────────────────────────────────────────────┤
│ Coins Expiring in Next 7 Days:                              │
│ - 45,678 ReZ Coins (234 users affected)                     │
│ - 12,345 Branded Coins (89 users)                           │
│ - 6,789 Promo Coins (156 users)                             │
│                                                              │
│ Actions:                                                     │
│ ☑ Send reminder emails (7 days before)                      │
│ ☑ Send push notifications (3 days before)                   │
│ ☑ Send final reminder (1 day before)                        │
│ ☐ Auto-extend by 30 days (goodwill)                         │
│                                                              │
│ Burned Coins This Month: 234,567 coins (₹2,34,567 saved)   │
│                                                              │
│ [View Expiry Report] [Configure Auto-Extend Rules]          │
└─────────────────────────────────────────────────────────────┘
```

### 3. Coin Abuse & Fraud Detection

#### Fraud Detection Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ 🚨 COIN FRAUD DETECTION ALERTS                              │
├─────────────────────────────────────────────────────────────┤
│ CRITICAL ALERTS (Last 24 Hours)                             │
│                                                              │
│ 🔴 User #12345 - Unusual Earning Spike                      │
│    Earned 8,900 coins in 2 hours (normal: 200/day)         │
│    Pattern: Multiple bills from same merchant               │
│    Action: [View Details] [Suspend] [Investigate]           │
│                                                              │
│ 🔴 User #67890 - Fake Bill Upload Detected                  │
│    Uploaded 5 bills, all flagged by OCR                     │
│    Similarity score: 92% (likely duplicates)                │
│    Action: [View Bills] [Ban User] [Manual Review]          │
│                                                              │
│ 🟡 User #24680 - Referral Abuse Suspected                   │
│    Created 15 referrals in 1 day                            │
│    All referrals from same IP/device fingerprint            │
│    Action: [Investigate] [Block Referrals] [Warning]        │
│                                                              │
│ 🟡 User #13579 - Content Farming Detected                   │
│    Posted 25 reviews in 2 hours                             │
│    Similarity score: 85% (copy-paste suspected)             │
│    Action: [Review Content] [Suspend Earnings] [Warning]    │
└─────────────────────────────────────────────────────────────┘
```

#### Fraud Rules Configuration
```javascript
const FRAUD_DETECTION_RULES = {
  // Velocity-based detection
  velocityRules: {
    maxCoinsPerHour: 2000,
    maxCoinsPerDay: 10000,
    maxTransactionsPerHour: 10,
    alertThreshold: 0.8,           // Alert at 80% of limit
    autoSuspendThreshold: 1.0      // Auto-suspend at 100%
  },

  // Pattern detection
  patternRules: {
    sameMerchantConsecutive: {
      maxCount: 3,                 // Max 3 consecutive at same merchant
      timeWindow: 60,              // Within 60 minutes
      action: 'manual_review'
    },

    billUploadWithoutLocation: {
      enabled: true,
      action: 'flag_for_review'
    },

    duplicateBillDetection: {
      enabled: true,
      ocrSimilarityThreshold: 0.85,
      action: 'auto_reject'
    },

    referralFromSameDevice: {
      maxReferrals: 5,
      timeWindow: 86400,           // 24 hours
      action: 'block_referrals'
    },

    contentFarming: {
      maxReviewsPerHour: 5,
      similarityThreshold: 0.75,
      action: 'suspend_earnings'
    }
  },

  // Machine Learning scores
  mlScoring: {
    enabled: true,
    riskScoreThreshold: 0.7,       // 0-1 scale
    factors: [
      'transaction_velocity',
      'bill_authenticity',
      'location_consistency',
      'device_fingerprint',
      'user_behavior_pattern'
    ]
  },

  // Automated actions
  autoActions: {
    lowRisk: 'allow',
    mediumRisk: 'manual_review',
    highRisk: 'temporary_suspend',
    criticalRisk: 'permanent_ban'
  }
};
```

#### Fraud Investigation Interface
```
┌─────────────────────────────────────────────────────────────┐
│ FRAUD INVESTIGATION - User #12345                           │
├─────────────────────────────────────────────────────────────┤
│ User Profile:                                                │
│ Name: John Doe                                               │
│ Email: john@example.com                                      │
│ Phone: +91 98765 43210                                       │
│ Member Since: 15 Jan 2024                                    │
│ Risk Score: 🔴 0.87 (High Risk)                             │
│                                                              │
│ Suspicious Activity Timeline:                                │
│ 14:23 - Bill upload ₹450 @ Starbucks → 450 coins            │
│ 14:31 - Bill upload ₹680 @ Starbucks → 680 coins            │
│ 14:45 - Bill upload ₹320 @ Starbucks → 320 coins            │
│ 14:52 - Bill upload ₹890 @ Starbucks → 890 coins            │
│ 15:10 - Bill upload ₹1,250 @ Starbucks → 1,250 coins        │
│                                                              │
│ Red Flags:                                                   │
│ ⚠️ 5 transactions in 47 minutes (avg user: 2/day)           │
│ ⚠️ All at same merchant (unusual pattern)                   │
│ ⚠️ Bills show similar formatting (OCR detection)             │
│ ⚠️ Location data missing on 3/5 transactions                │
│                                                              │
│ Device & Location:                                           │
│ Device: iPhone 12 (same throughout)                          │
│ IP: 103.45.67.89 (Consistent)                                │
│ Location: Mumbai, Andheri (claimed)                          │
│                                                              │
│ Evidence:                                                    │
│ [View Bill Images] [OCR Analysis] [Location Logs]           │
│                                                              │
│ Actions Available:                                           │
│ [Approve & Clear] [Request More Info] [Deduct Coins]        │
│ [Temporary Suspend] [Permanent Ban] [Legal Action]          │
│                                                              │
│ Internal Notes: [_________________________________]          │
│                                                              │
│ [Save Decision] [Escalate to Legal] [Close Case]            │
└─────────────────────────────────────────────────────────────┘
```

---

## C. Merchant Ecosystem Control

### Merchant Master Control Panel

#### Merchant List & Filters
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT MANAGEMENT                                          │
├─────────────────────────────────────────────────────────────┤
│ Filters:                                                     │
│ Status: [All ▼] Category: [All ▼] City: [All ▼]            │
│ Package: [All ▼] Mode: [All ▼] Search: [_________]         │
│                                                              │
│ Status Breakdown:                                            │
│ Applied (45) | Verified (1,234) | Trusted (567) |           │
│ Preferred (89) | Signature (23) | Suspended (12)            │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ ID    │ Name          │ Category  │ Status      │ Package │ Actions  │
├──────────────────────────────────────────────────────────────────────┤
│ M1001 │ Starbucks     │ Food      │ ✅ Trusted  │ Gold    │ [View]   │
│       │ Andheri West  │           │ Halal ✓     │         │ [Edit]   │
│       │ ⭐ 4.8 (234)  │           │ Veg ✓       │         │          │
├──────────────────────────────────────────────────────────────────────┤
│ M1002 │ Nike Store    │ Fashion   │ ⭐ Preferred│ Diamond │ [View]   │
│       │ Phoenix Mall  │           │ Privé ✓     │         │ [Edit]   │
│       │ ⭐ 4.9 (567)  │           │             │         │          │
├──────────────────────────────────────────────────────────────────────┤
│ M1003 │ Paradise      │ Food      │ 🕐 Applied  │ -       │ [Review] │
│       │ Biryani       │           │ Pending     │         │ [Approve]│
│       │ No rating     │           │ KYC ✓       │         │ [Reject] │
└──────────────────────────────────────────────────────────────────────┘
```

#### Merchant Status Lifecycle
```
Application Flow:
┌─────────┐   ┌──────────┐   ┌─────────┐   ┌──────────┐   ┌───────────┐
│ Applied │──>│ Verified │──>│ Trusted │──>│Preferred │──>│ Signature │
└─────────┘   └──────────┘   └─────────┘   └──────────┘   └───────────┘
     │             │              │              │               │
     │             │              │              │               │
     └─────────────┴──────────────┴──────────────┴───────────────┘
                              │
                        ┌──────────┐
                        │Suspended │
                        └──────────┘

Status Criteria:
- Applied: Submitted application, awaiting verification
- Verified: KYC done, documents approved, can list offers
- Trusted: 50+ transactions, 4.5+ rating, verified reviews
- ReZ Preferred: 200+ transactions, 4.7+ rating, exclusive deals
- ReZ Signature: 1000+ transactions, 4.9+ rating, premium placement
- Suspended: Policy violation, under investigation
```

#### Mode Eligibility Matrix
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT MODE ELIGIBILITY - Starbucks (M1001)               │
├─────────────────────────────────────────────────────────────┤
│ Mode             │ Eligible │ Verified │ Badge    │ Notes   │
├──────────────────┼──────────┼──────────┼──────────┼─────────┤
│ Halal Mode       │    ✅    │    ✅    │   🥙     │ Cert#   │
│ Vegan Mode       │    ✅    │    ✅    │   🌱     │ Verified│
│ Veg Mode         │    ✅    │    ✅    │   🥗     │ Auto    │
│ Adult Mode       │    ❌    │    -     │    -     │ N/A     │
│ Occasion Mode    │    ✅    │    ✅    │   🎉     │ All     │
│ Vibes Mode       │    ✅    │    ✅    │   ✨     │ All     │
│ Privé Access     │    ✅    │    ✅    │   👑     │ Tier 2  │
│ 60-min Delivery  │    ✅    │    ✅    │   ⚡     │ Active  │
│ Events Only      │    ❌    │    -     │    -     │ N/A     │
└──────────────────┴──────────┴──────────┴──────────┴─────────┘

Actions:
[Edit Eligibility] [Request Verification] [Update Badges]
```

### Merchant Package Management

#### Package Tiers & Commission Structure
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT PACKAGE TIERS                                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ FREE (Starter)                                               │
│ Commission: 15% per transaction                              │
│ Features:                                                    │
│ ✅ Basic listing                                            │
│ ✅ Up to 3 active offers                                    │
│ ✅ Basic analytics                                          │
│ ❌ No premium placement                                     │
│ ❌ No priority support                                      │
│ Target: New merchants, testing                               │
│                                                              │
│ BASIC (₹2,999/month)                                        │
│ Commission: 12% per transaction                              │
│ Features:                                                    │
│ ✅ Enhanced listing + 1 photo banner                        │
│ ✅ Up to 10 active offers                                   │
│ ✅ Advanced analytics                                       │
│ ✅ Email support (24-hour response)                         │
│ ❌ No featured placement                                    │
│ Target: Small businesses, local stores                       │
│                                                              │
│ GOLD (₹9,999/month)                                         │
│ Commission: 10% per transaction                              │
│ Features:                                                    │
│ ✅ Premium listing + photo + video                          │
│ ✅ Unlimited offers                                         │
│ ✅ Full analytics + custom reports                          │
│ ✅ Featured in category (2x visibility)                     │
│ ✅ Priority support (4-hour response)                       │
│ ✅ Push notification credits (100/month)                    │
│ ✅ Branded coins enabled                                    │
│ Target: Established businesses, chains                       │
│                                                              │
│ DIAMOND (₹29,999/month)                                     │
│ Commission: 8% per transaction                               │
│ Features:                                                    │
│ ✅ All Gold features                                        │
│ ✅ Homepage featured placement                              │
│ ✅ Privé program access                                     │
│ ✅ Dedicated account manager                                │
│ ✅ Custom campaign support                                  │
│ ✅ Push notification credits (500/month)                    │
│ ✅ API access for integration                               │
│ ✅ White-label options                                      │
│ Target: Major brands, national chains                        │
└─────────────────────────────────────────────────────────────┘
```

#### Merchant Detail View - Package Control
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT DETAIL - Starbucks (M1001)                         │
├─────────────────────────────────────────────────────────────┤
│ Current Package: GOLD (₹9,999/month)                        │
│ Commission Rate: 10%                                         │
│ Next Billing: 15 Feb 2024                                    │
│ Status: ✅ Active, Auto-renew ON                            │
│                                                              │
│ This Month Usage:                                            │
│ - Transactions: 1,234 (GMV: ₹5,67,890)                      │
│ - Commission Paid: ₹56,789                                  │
│ - Active Offers: 8/Unlimited                                │
│ - Push Notifications Used: 45/100                           │
│                                                              │
│ Package History:                                             │
│ Jan 2024: Gold (₹9,999)                                     │
│ Dec 2023: Basic (₹2,999) - Upgraded                         │
│ Nov 2023: Free                                               │
│                                                              │
│ Actions:                                                     │
│ [Upgrade to Diamond] [Downgrade] [Pause Billing]            │
│ [Custom Package] [Add Credits] [View Invoice]               │
└─────────────────────────────────────────────────────────────┘
```

#### Marketing Spend Tracking
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT MARKETING ANALYTICS - Starbucks                    │
├─────────────────────────────────────────────────────────────┤
│ Total Marketing Investment (This Month)                      │
│ Package Fee: ₹9,999                                         │
│ Commission: ₹56,789 (1,234 txns @ 10%)                      │
│ Ad Spend: ₹15,000 (featured placements)                     │
│ Push Notifications: ₹2,250 (45 sends @ ₹50/send)           │
│ ────────────────────────────────────────────                │
│ Total Spend: ₹84,038                                        │
│                                                              │
│ Returns:                                                     │
│ GMV Generated: ₹5,67,890                                    │
│ New Customers: 234                                           │
│ Repeat Rate: 68%                                             │
│ Avg Order Value: ₹460                                       │
│ Customer Lifetime Value: ₹3,450                             │
│                                                              │
│ ROI Calculation:                                             │
│ Revenue: ₹5,67,890                                          │
│ Marketing Cost: ₹84,038                                     │
│ ROI: 6.76x (676% return)                                    │
│                                                              │
│ Recommendations:                                             │
│ ✅ High ROI - maintain current strategy                     │
│ 💡 Consider upgrading to Diamond for homepage placement     │
│ 💡 Increase push notifications (high engagement)            │
└─────────────────────────────────────────────────────────────┘
```

#### Coin Split Logic Configuration
```
┌─────────────────────────────────────────────────────────────┐
│ COIN DISTRIBUTION CONFIG - Starbucks                        │
├─────────────────────────────────────────────────────────────┤
│ When a customer spends ₹1000 at Starbucks:                  │
│                                                              │
│ ReZ Coins (Platform):                                        │
│ Rate: 10% = 100 coins                                        │
│ Who Pays: ReZ Platform (customer acquisition)               │
│                                                              │
│ Branded Coins (Starbucks):                                   │
│ Rate: 8% = 80 coins (Starbucks loyalty)                     │
│ Who Pays: Starbucks (from their margin)                     │
│                                                              │
│ Total Customer Earns: 180 coins (₹180 value)               │
│                                                              │
│ Cost Breakdown:                                              │
│ - ReZ Cost: ₹100 (platform incentive)                       │
│ - Merchant Cost: ₹80 (loyalty program)                      │
│ - ReZ Commission: ₹100 (10% of ₹1000)                       │
│                                                              │
│ Merchant Net:                                                │
│ Sale: ₹1000                                                 │
│ - Branded Coins: -₹80                                       │
│ - Commission: -₹100                                         │
│ = Net Revenue: ₹820                                         │
│                                                              │
│ [Edit Rates] [Disable Branded Coins] [View Analytics]       │
└─────────────────────────────────────────────────────────────┘
```

---

## D. Mode & Category Control

### Global Mode Management

#### Mode Master Control Panel
```
┌─────────────────────────────────────────────────────────────┐
│ GLOBAL MODE MANAGEMENT                                       │
├─────────────────────────────────────────────────────────────┤
│ Mode             │ Status │ Users    │ Merchants │ Txns/Day │
├──────────────────┼────────┼──────────┼───────────┼──────────┤
│ All Mode         │   🟢   │ 50,234   │   2,456   │  12,345  │
│ Halal Mode       │   🟢   │  9,045   │     567   │   2,234  │
│ Vegan Mode       │   🟢   │  4,012   │     234   │     890  │
│ Veg Mode         │   🟢   │  6,123   │     789   │   1,456  │
│ Adult Mode       │   🟡   │  2,345   │     123   │     456  │
│ Occasion Mode    │   🟢   │ 11,567   │   1,234   │   2,890  │
│ Vibes Mode       │   🟢   │  7,890   │     890   │   1,234  │
│ Privé Mode       │   🟢   │  1,023   │      89   │     234  │
└──────────────────┴────────┴──────────┴───────────┴──────────┘

Status Legend:
🟢 Active | 🟡 Limited (age-restricted) | 🔴 Disabled | 🟠 Beta

[Add New Mode] [Edit Mode Rules] [Mode Analytics]
```

#### Category-wise Mode Availability
```
┌─────────────────────────────────────────────────────────────┐
│ CATEGORY MODE MATRIX                                         │
├─────────────────────────────────────────────────────────────┤
│                   │Halal│Vegan│Veg│Adult│Occasion│Vibes│Privé│
├───────────────────┼─────┼─────┼───┼─────┼────────┼─────┼─────┤
│Food & Dining      │  ✅ │  ✅ │ ✅│  ❌ │   ✅   │  ✅ │  ✅ │
│Electronics        │  ➖ │  ➖ │ ➖│  ❌ │   ✅   │  ✅ │  ✅ │
│Fashion            │  ✅ │  ✅ │ ➖│  ❌ │   ✅   │  ✅ │  ✅ │
│Beauty & Wellness  │  ✅ │  ✅ │ ✅│  ❌ │   ✅   │  ✅ │  ✅ │
│Fitness & Gyms     │  ✅ │  ✅ │ ✅│  ❌ │   ✅   │  ✅ │  ✅ │
│Healthcare         │  ✅ │  ✅ │ ✅│  ❌ │   ➖   │  ➖ │  ✅ │
│Home Services      │  ➖ │  ➖ │ ➖│  ❌ │   ✅   │  ✅ │  ✅ │
│Financial Services │  ✅ │  ➖ │ ➖│  ❌ │   ➖   │  ➖ │  ✅ │
│Travel & Hotels    │  ✅ │  ✅ │ ✅│  ❌ │   ✅   │  ✅ │  ✅ │
│Entertainment      │  ✅ │  ➖ │ ➖│  ⚠️ │   ✅   │  ✅ │  ✅ │
│Alcohol & Nightlife│  ❌ │  ❌ │ ❌│  ✅ │   ✅   │  ✅ │  ✅ │
└───────────────────┴─────┴─────┴───┴─────┴────────┴─────┴─────┘

Legend:
✅ Fully Supported | ⚠️ Age-Restricted | ➖ Not Applicable | ❌ Prohibited

[Edit Matrix] [Add Category] [Export Rules]
```

#### City-wise Category Control
```
┌─────────────────────────────────────────────────────────────┐
│ CITY-WISE CATEGORY AVAILABILITY                             │
├─────────────────────────────────────────────────────────────┤
│ City: [Mumbai ▼]                                            │
│                                                              │
│ Available Categories:                                        │
│ ✅ Food & Dining (567 merchants)                            │
│ ✅ Electronics (123 merchants)                              │
│ ✅ Fashion (234 merchants)                                  │
│ ✅ Beauty & Wellness (89 merchants)                         │
│ ✅ Fitness & Gyms (45 merchants)                            │
│ ✅ Healthcare (67 merchants)                                │
│ ✅ Home Services (34 merchants)                             │
│ ✅ Financial Services (23 merchants)                        │
│ ✅ Travel & Hotels (56 merchants)                           │
│ ✅ Entertainment (78 merchants)                             │
│ ✅ Alcohol & Nightlife (89 merchants) - Age gated           │
│                                                              │
│ Disabled Categories: None                                    │
│                                                              │
│ [Enable All] [Disable Category] [Category Settings]         │
└─────────────────────────────────────────────────────────────┘
```

### Festival & Vibe Overrides

#### Special Mode Configurations
```
┌─────────────────────────────────────────────────────────────┐
│ FESTIVAL & SEASONAL MODE OVERRIDES                          │
├─────────────────────────────────────────────────────────────┤
│ Active Special Modes:                                        │
│                                                              │
│ 🪔 Diwali Mode (Oct 10-15, 2024)                            │
│    - Auto-enable "Occasion" filter                          │
│    - Hide alcohol in default view                           │
│    - 2x coins on sweets, gifts, fashion                     │
│    - Special banners & themes                               │
│    - Featured: Diwali gifts, ethnic wear                    │
│    Cities: All                                               │
│    Status: ✅ Active                                        │
│    [Edit] [Disable] [Analytics]                             │
│                                                              │
│ 🌙 Ramadan Mode (Mar 10 - Apr 10, 2024)                     │
│    - Auto-enable "Halal" filter                             │
│    - Hide all non-halal options                             │
│    - Iftar & Sehri timing-based offers                      │
│    - 2x coins on halal restaurants                          │
│    - Special Ramadan categories                             │
│    Cities: All (auto-detect Muslim-majority areas)          │
│    Status: 🕐 Scheduled                                     │
│    [Edit] [Activate Now] [Preview]                          │
│                                                              │
│ 🕉️ Sawan Mode (Jul 20 - Aug 20, 2024)                      │
│    - Auto-enable "Veg" filter                               │
│    - Hide non-veg options                                   │
│    - Highlight temples, spiritual services                  │
│    - 2x coins on veg restaurants                            │
│    Cities: North India (UP, Uttarakhand, Delhi)             │
│    Status: 🕐 Scheduled                                     │
│    [Edit] [Delete] [Duplicate]                              │
│                                                              │
│ 🎄 Christmas Mode (Dec 20-26, 2024)                         │
│    - Christmas theme & decorations                          │
│    - Featured: Gifts, cakes, party supplies                 │
│    - Special offers on food delivery                        │
│    - 1.5x coins on all purchases                            │
│    Cities: All (Christian-majority areas priority)          │
│    Status: 🕐 Scheduled                                     │
│    [Edit] [Activate Now] [Settings]                         │
│                                                              │
│ [Create New Festival Mode] [View All] [Calendar View]       │
└─────────────────────────────────────────────────────────────┘
```

#### Auto-hide Logic Example
```javascript
// Automatic content filtering based on active modes
const MODE_FILTERING_LOGIC = {
  // Halal Mode - Auto-hide non-halal
  halalMode: {
    autoHide: [
      'pork_products',
      'alcohol',
      'non_halal_meat',
      'gelatin_products'
    ],
    autoShow: [
      'halal_certified',
      'vegetarian',
      'vegan'
    ],
    merchantFilter: {
      requiresCertification: true,
      certTypes: ['Halal Certification', 'Halal Authority']
    }
  },

  // Ramadan Special Override
  ramadanMode: {
    extends: 'halalMode',
    additionalLogic: {
      timing: {
        iftar: '18:30-20:00',    // Iftar deals prominent
        sehri: '04:00-05:30'     // Sehri deals prominent
      },
      autoPromote: [
        'dates',
        'traditional_iftar',
        'ramadan_special'
      ]
    }
  },

  // Adult Mode - Age gating
  adultMode: {
    requiresAgeVerification: true,
    minAge: 21,
    kycRequired: true,
    show: [
      'alcohol',
      'nightclubs',
      'bars',
      'adult_entertainment'
    ],
    timeRestrictions: {
      hideBefore: '12:00',       // Don't show before noon
      hideAfter: '02:00'          // Don't show after 2 AM
    }
  }
};
```

---

## E. Events & Campaign Management

### Event Types Management

#### Event Categories
```
┌─────────────────────────────────────────────────────────────┐
│ EVENT MANAGEMENT DASHBOARD                                   │
├─────────────────────────────────────────────────────────────┤
│ Event Type        │ Active │ Upcoming │ Completed │ Revenue  │
├───────────────────┼────────┼──────────┼───────────┼──────────┤
│ 🎬 Movies         │   12   │    34    │    567    │ ₹12.4L   │
│ 🎵 Concerts       │    5   │    15    │    123    │ ₹45.6L   │
│ 🎓 College Fests  │    8   │    23    │    234    │ ₹8.9L    │
│ 🏟️ Sports Events  │    3   │    12    │     89    │ ₹23.4L   │
│ 🎪 Exhibitions    │    6   │    18    │    156    │ ₹6.7L    │
│ 🎭 Theater/Comedy │    4   │    10    │     78    │ ₹3.4L    │
│ 🏪 Fleamarket     │    2   │     8    │     45    │ ₹2.1L    │
│ 🎉 Festivals      │    1   │     5    │     67    │ ₹15.2L   │
└───────────────────┴────────┴──────────┴───────────┴──────────┘

[Create New Event] [Bulk Import] [Event Calendar] [Analytics]
```

#### Create New Event Interface
```
┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW EVENT                                             │
├─────────────────────────────────────────────────────────────┤
│ Event Type: [College Fest ▼]                               │
│                                                              │
│ Event Name: [Mood Indigo 2024 - IIT Bombay]                │
│                                                              │
│ Organizer: [IIT Bombay]                                     │
│ Contact: [events@iitb.ac.in] [+91 22 2576 xxxx]            │
│                                                              │
│ Date & Time:                                                 │
│ Start: [27 Dec 2024, 10:00 AM]                             │
│ End: [30 Dec 2024, 11:59 PM]                               │
│                                                              │
│ Location:                                                    │
│ Venue: [IIT Bombay Campus, Powai]                          │
│ City: [Mumbai] State: [Maharashtra]                        │
│ 📍 [Select on Map]                                          │
│                                                              │
│ Ticket Configuration:                                        │
│ ☑ Tickets available on ReZ                                  │
│ ☑ ReZ-exclusive (mandatory ticket purchase via app)         │
│                                                              │
│ Ticket Types:                                                │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ 1. Student Pass (3 days)     - ₹500  [500 available]│    │
│ │ 2. Day Pass                   - ₹300  [200/day]     │    │
│ │ 3. VIP Pass                   - ₹2000 [50 available]│    │
│ │ 4. Artist/Crew Pass          - ₹0    [100 available]│    │
│ └─────────────────────────────────────────────────────┘    │
│ [Add Ticket Type]                                            │
│                                                              │
│ Coin Rewards:                                                │
│ Purchase Bonus: [200] coins on ticket purchase              │
│ Check-in Bonus: [50] coins on event check-in                │
│ Daily Check-in: [25] coins per day                          │
│ Review Bonus: [100] coins for event review                  │
│                                                              │
│ Partner Merchants (on-campus):                               │
│ [+ Add Partner Merchant]                                     │
│ - Food Court (10 stalls) - 2x coins                         │
│ - Merch Store - 1.5x coins                                  │
│ - Beverage Partners - Special offers                        │
│                                                              │
│ Event Tags:                                                  │
│ [Music] [Dance] [College] [Youth] [Festival]               │
│                                                              │
│ Media:                                                       │
│ Event Banner: [Upload] (1920x1080)                         │
│ Event Poster: [Upload] (1080x1920)                         │
│ Gallery: [Upload Multiple]                                  │
│                                                              │
│ Description:                                                 │
│ [Rich text editor for event details...]                     │
│                                                              │
│ Special Features:                                            │
│ ☑ Enable live check-in                                      │
│ ☑ Enable QR-based entry                                     │
│ ☑ Enable live updates feed                                  │
│ ☑ Enable photo contest (500 coins for best photo)          │
│ ☐ Enable merchandise store                                  │
│                                                              │
│ Marketing:                                                   │
│ Push Notification: [Schedule] - Send to Mumbai users        │
│ Featured Placement: [Homepage] [Explore] [Events]           │
│ Budget: ₹50,000 for promotion                               │
│                                                              │
│ [Save as Draft] [Preview] [Publish Event]                   │
└─────────────────────────────────────────────────────────────┘
```

#### Event Control - Active Event Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ EVENT LIVE CONTROL - Mood Indigo 2024                       │
├─────────────────────────────────────────────────────────────┤
│ Status: 🔴 LIVE (Day 2 of 4)                                │
│ Time Remaining: 1 day 18 hours                              │
│                                                              │
│ Real-time Stats:                                             │
│ Tickets Sold: 1,234 / 1,500 (82%)                          │
│ Checked-in Now: 567 people                                  │
│ Revenue: ₹6,17,000                                          │
│ Coins Distributed: 2,46,800 coins                           │
│                                                              │
│ Ticket Sales Breakdown:                                      │
│ - Student Pass: 800/500 sold (SOLD OUT) ⚠️                  │
│ - Day Pass (Today): 234/200 (SOLD OUT) ⚠️                   │
│ - VIP Pass: 45/50                                           │
│ - Artist Pass: 67/100                                        │
│                                                              │
│ Live Activity:                                               │
│ Last 10 minutes:                                             │
│ - 23 tickets sold                                            │
│ - 45 check-ins                                               │
│ - 12 merchant transactions (₹4,567)                         │
│ - 8 photos uploaded                                          │
│                                                              │
│ Quick Actions:                                               │
│ [Release More Tickets] [Send Update] [View Check-ins]       │
│ [Merchant Dashboard] [Photo Gallery] [Live Feed]            │
│                                                              │
│ Issues & Alerts:                                             │
│ ⚠️ Student Pass oversold by 300 (fixed with Day Pass conv.) │
│ ✅ All payment gateways operational                         │
│ ✅ QR check-in system working                               │
│                                                              │
│ [Pause Sales] [Emergency Announcement] [End Event]          │
└─────────────────────────────────────────────────────────────┘
```

### Campaign Management

#### Campaign Creator
```
┌─────────────────────────────────────────────────────────────┐
│ CREATE MARKETING CAMPAIGN                                    │
├─────────────────────────────────────────────────────────────┤
│ Campaign Type: [Flash Sale ▼]                              │
│                                                              │
│ Campaign Name: [Weekend Dining Bonanza]                     │
│                                                              │
│ Duration:                                                    │
│ Start: [Sat, 28 Dec 2024, 12:00 PM]                        │
│ End: [Sun, 29 Dec 2024, 11:59 PM]                          │
│                                                              │
│ Target Audience:                                             │
│ ☑ Active users (last 30 days)                               │
│ ☑ Location: Mumbai, Pune, Bangalore                         │
│ ☐ New users (first purchase)                                │
│ ☑ Food category enthusiasts                                 │
│ ☐ Privé members only                                        │
│ Estimated Reach: 12,456 users                               │
│                                                              │
│ Offer Details:                                               │
│ Type: [Extra Coins ▼]                                       │
│ Offer: [3x ReZ Coins on all food orders]                   │
│ Max Bonus: [500 coins per transaction]                      │
│ Valid on: [All participating restaurants]                   │
│                                                              │
│ Budget:                                                      │
│ Total Budget: ₹2,00,000                                     │
│ Expected Coins: 4,00,000 coins                              │
│ Estimated Transactions: 2,000                                │
│ ROI Target: 4x                                              │
│                                                              │
│ Participating Merchants:                                     │
│ [Select All Food Category] or [Choose Specific]             │
│ Selected: 234 merchants                                      │
│                                                              │
│ Marketing Channels:                                          │
│ ☑ Push Notification (₹5,000 - 12,456 users)                │
│ ☑ In-app Banner (₹10,000)                                  │
│ ☑ Email (₹2,000 - 10,234 emails)                           │
│ ☑ WhatsApp (₹8,000 - 8,567 users)                          │
│ ☐ SMS (₹12,000 - 12,456 users)                             │
│                                                              │
│ Creative Assets:                                             │
│ Push Banner: [Upload 1080x1080]                            │
│ In-app Banner: [Upload 1920x600]                           │
│ Email Template: [Select Template ▼]                        │
│                                                              │
│ [Save as Draft] [Schedule Campaign] [Launch Now]            │
└─────────────────────────────────────────────────────────────┘
```

#### Campaign Analytics Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ CAMPAIGN PERFORMANCE - Weekend Dining Bonanza               │
├─────────────────────────────────────────────────────────────┤
│ Status: ✅ Completed (Ran: 28-29 Dec 2024)                  │
│                                                              │
│ Overview:                                                    │
│ Total Spend: ₹1,87,456 (6% under budget)                   │
│ Revenue Generated: ₹8,45,678                                │
│ ROI: 4.51x (Target: 4x) ✅                                  │
│                                                              │
│ Engagement:                                                  │
│ Push Sent: 12,456 | Opened: 6,789 (54.5%)                  │
│ Clicked: 3,456 (27.8% CTR)                                  │
│ Converted: 1,234 (35.7% conversion)                         │
│                                                              │
│ Transaction Metrics:                                         │
│ Total Transactions: 2,134 (107% of target)                  │
│ Unique Users: 1,890                                          │
│ Avg Order Value: ₹396                                       │
│ Total GMV: ₹8,45,678                                        │
│                                                              │
│ Coin Economics:                                              │
│ Coins Issued: 4,23,567 (regular + 3x bonus)                │
│ Bonus Coins: 2,82,378 (campaign cost)                       │
│ Coins Redeemed: 1,23,456 (29.1%)                           │
│ Net Coin Liability: ₹3,00,111                              │
│                                                              │
│ Top Performing Merchants:                                    │
│ 1. Paradise Biryani - 234 orders (₹92,678)                 │
│ 2. Starbucks - 189 orders (₹75,456)                        │
│ 3. Domino's Pizza - 156 orders (₹62,344)                   │
│                                                              │
│ User Behavior:                                               │
│ New Users Acquired: 234                                      │
│ Repeat Purchasers: 890 (47%)                                │
│ Avg Time to Convert: 2.3 hours                              │
│ Peak Hour: 7-9 PM (45% of orders)                          │
│                                                              │
│ [Download Report] [Compare Campaigns] [Clone Campaign]      │
└─────────────────────────────────────────────────────────────┘
```

---

## F. Privé Control Panel (Separate High-Security Section)

### Privé User Management

#### Privé Application Review Interface
```
┌─────────────────────────────────────────────────────────────┐
│ PRIVÉ APPLICATION REVIEW                                     │
├─────────────────────────────────────────────────────────────┤
│ Applicant: Priya Sharma                                     │
│ User ID: U12345                                              │
│ Applied: 25 Dec 2024                                         │
│ Status: 🟡 Pending Review                                   │
│                                                              │
│ Basic Info:                                                  │
│ Name: Priya Sharma                                           │
│ Age: 24                                                      │
│ Location: Mumbai, India                                      │
│ Member Since: 15 Jan 2024 (11 months)                       │
│                                                              │
│ Platform Activity:                                           │
│ Total Spent: ₹2,45,678 (Top 5%)                            │
│ Transactions: 234                                            │
│ Avg Order: ₹1,050                                           │
│ Categories: Fashion (45%), Beauty (30%), Dining (25%)       │
│                                                              │
│ Social Proof:                                                │
│ Instagram: @priyasharma (12.4K followers) ✅ Verified       │
│ Engagement Rate: 6.8% (Good)                                │
│ Content Style: Fashion, Lifestyle, Food                     │
│ Brand Collaborations: 23 (Nike, Sephora, Starbucks)        │
│                                                              │
│ ReZ Engagement:                                              │
│ Reviews Posted: 45 (Avg 4.8★)                              │
│ Helpful Votes: 234                                           │
│ UGC Content: 12 reels (Avg 2.3K views)                      │
│ Referrals: 8 users (6 active)                              │
│                                                              │
│ Influence Score Calculation:                                 │
│ Social Media: 450/500 (12K+ followers)                      │
│ Platform Activity: 380/500 (high transactions)              │
│ Content Quality: 420/500 (good engagement)                  │
│ Trust Score: 480/500 (verified, no violations)             │
│ ─────────────────────────────────                           │
│ Total Score: 1,730/2,000 (86.5%) ✅                         │
│ Required: 1,500 (75%) - QUALIFIED                          │
│                                                              │
│ Recommendation: ✅ APPROVE for Silver Tier                  │
│ Reasoning:                                                   │
│ - Strong social media presence (12K followers)              │
│ - High platform engagement (234 transactions)               │
│ - Quality content creator (good UGC)                        │
│ - No policy violations                                      │
│ - Meets all Silver tier criteria                            │
│                                                              │
│ Suggested Tier: [Silver ▼]                                 │
│ Privé Coin Rate: [20% ▼] (vs 10% regular)                  │
│ Unlock Features:                                             │
│ ☑ Exclusive brand access                                    │
│ ☑ Early sale access                                         │
│ ☑ Campaign invitations                                      │
│ ☑ Privé events                                              │
│ ☐ Concierge service (Gold+ only)                            │
│                                                              │
│ Internal Notes: [Strong fashion & beauty influencer...]     │
│                                                              │
│ [Reject with Reason] [Request More Info] [✅ Approve]       │
└─────────────────────────────────────────────────────────────┘
```

#### Privé Tier System Management
```
┌─────────────────────────────────────────────────────────────┐
│ PRIVÉ TIER SYSTEM CONFIGURATION                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ SILVER TIER (Entry Level)                                    │
│ Requirements:                                                │
│ - Influence Score: 1,500+ (75%)                             │
│ - Social Media: 5K+ followers OR 500+ ReZ engagement       │
│ - Platform Activity: 50+ transactions OR ₹50K+ spent       │
│ - Content: 10+ quality reviews/posts                        │
│ - Trust: No violations, verified account                    │
│                                                              │
│ Benefits:                                                    │
│ - 20% ReZ Coins (vs 10% regular)                           │
│ - Access to 50+ exclusive brands                            │
│ - Early sale access (24 hours)                              │
│ - Campaign invitations (₹500-2K/campaign)                   │
│ - Privé badge on profile                                    │
│                                                              │
│ Current Members: 567                                         │
│ Avg Monthly Spend: ₹12,456                                  │
│ [Edit Requirements] [View Members]                           │
│                                                              │
│ ────────────────────────────────────────────────────────────│
│                                                              │
│ GOLD TIER (Established Influencer)                           │
│ Requirements:                                                │
│ - Influence Score: 1,750+ (87.5%)                           │
│ - Social Media: 25K+ followers OR 2K+ ReZ engagement       │
│ - Platform Activity: 100+ transactions OR ₹1L+ spent       │
│ - Content: 25+ quality posts, 5+ viral (10K+ views)        │
│ - Tenure: 6+ months in Silver                               │
│                                                              │
│ Benefits (All Silver +):                                     │
│ - 25% ReZ Coins                                             │
│ - 100+ exclusive brands                                      │
│ - Early sale access (48 hours)                              │
│ - Campaign priority (₹2K-10K/campaign)                      │
│ - Free product trials                                        │
│ - Monthly brand gift box                                     │
│ - Privé concierge service                                   │
│                                                              │
│ Current Members: 89                                          │
│ Avg Monthly Spend: ₹45,678                                  │
│ [Edit Requirements] [View Members]                           │
│                                                              │
│ ────────────────────────────────────────────────────────────│
│                                                              │
│ PLATINUM TIER (Celebrity/Mega Influencer)                    │
│ Requirements:                                                │
│ - Influence Score: 1,900+ (95%)                             │
│ - Social Media: 100K+ followers OR 10K+ ReZ engagement     │
│ - Platform Activity: ₹5L+ annual spend                      │
│ - Content: Consistent viral content, brand ambassador level │
│ - Invitation Only (hand-picked)                             │
│                                                              │
│ Benefits (All Gold +):                                       │
│ - 30% ReZ Coins                                             │
│ - All brands + invite-only luxury brands                    │
│ - Permanent early access                                     │
│ - Campaign rates: ₹10K-50K/campaign                         │
│ - Dedicated brand manager                                    │
│ - Exclusive events & trips                                   │
│ - Custom collaborations                                      │
│ - Annual ₹1L+ value in perks                                │
│                                                              │
│ Current Members: 12                                          │
│ Avg Monthly Spend: ₹1,23,456                                │
│ [Invite New Member] [View Members]                           │
│                                                              │
│ [Save Changes] [View All Privé Users] [Analytics]           │
└─────────────────────────────────────────────────────────────┘
```

### Privé Brand Partnerships

#### Brand Partnership Management
```
┌─────────────────────────────────────────────────────────────┐
│ PRIVÉ BRAND PARTNERSHIPS                                     │
├─────────────────────────────────────────────────────────────┤
│ Active Partnerships: 127                                     │
│ Pending Approvals: 23                                        │
│ Campaign Budget (This Month): ₹45,67,890                    │
│                                                              │
│ Top Performing Brands:                                       │
│ 1. Sephora - 234 campaigns, ₹12,34,567 spent, 4.8★         │
│ 2. Nike - 189 campaigns, ₹9,87,654 spent, 4.9★             │
│ 3. Starbucks - 156 campaigns, ₹5,43,210 spent, 4.7★        │
│                                                              │
│ [Add Brand Partner] [Pending Approvals] [Analytics]         │
└─────────────────────────────────────────────────────────────┘
```

#### Brand Collaboration Campaign Creator
```
┌─────────────────────────────────────────────────────────────┐
│ CREATE PRIVÉ BRAND CAMPAIGN                                  │
├─────────────────────────────────────────────────────────────┤
│ Brand: [Sephora ▼]                                          │
│                                                              │
│ Campaign Name: [Holiday Makeup Collection Launch]           │
│                                                              │
│ Campaign Type:                                               │
│ ○ Product Launch                                             │
│ ● Store Visit & Review                                       │
│ ○ Content Creation (Reel/Post)                              │
│ ○ Event Attendance                                           │
│ ○ Long-term Brand Ambassador                                │
│                                                              │
│ Campaign Brief:                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Visit any Sephora store, purchase from the new Holiday  │ │
│ │ Collection (min ₹2,000), and create an Instagram reel   │ │
│ │ showcasing the products. Tag @sephoraindia and use      │ │
│ │ #SephoraHoliday #RezPrivé                               │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Target Tier:                                                 │
│ ☐ Silver (567 users)                                        │
│ ☑ Gold (89 users)                                           │
│ ☑ Platinum (12 users)                                       │
│ Estimated Invites: 101 influencers                          │
│                                                              │
│ Rewards:                                                     │
│ - Purchase Cashback: 30% (₹600 on ₹2,000)                  │
│ - Content Bonus: ₹2,000 for approved reel                  │
│ - Privé Coins: 2,000 bonus coins                           │
│ - Product Gift: Free mini makeup set (₹1,500 value)        │
│                                                              │
│ Campaign Budget:                                             │
│ Expected Participation: 50 users (50% of invites)           │
│ Cashback Cost: ₹30,000 (50 × ₹600)                         │
│ Content Bonus: ₹1,00,000 (50 × ₹2,000)                     │
│ Privé Coins: ₹1,00,000 (50 × 2,000 coins)                  │
│ Product Gifts: ₹75,000 (50 × ₹1,500)                       │
│ Total Budget: ₹3,05,000                                     │
│                                                              │
│ Expected ROI:                                                │
│ Sales: ₹1,00,000 (50 × ₹2,000)                             │
│ Social Reach: 5,00,000+ (avg 5K per reel × 101 users)      │
│ Engagement: 25,000+ (5% of reach)                           │
│ Brand Value: High (luxury positioning)                      │
│                                                              │
│ Content Guidelines:                                          │
│ ☑ Minimum reel length: 30 seconds                           │
│ ☑ Must show products clearly                                │
│ ☑ Positive tone only                                        │
│ ☐ FTC disclosure required                                   │
│ ☑ Brand hashtags mandatory                                  │
│                                                              │
│ Approval Workflow:                                           │
│ ○ Auto-approve (influencer posts directly)                  │
│ ● Manual approve (ReZ/brand reviews first)                  │
│ Review SLA: 24 hours                                         │
│                                                              │
│ Duration:                                                    │
│ Campaign Active: [1 Jan - 15 Jan 2025]                     │
│ Content Deadline: [20 Jan 2025]                             │
│                                                              │
│ [Save Draft] [Send to Brand] [Launch Campaign]              │
└─────────────────────────────────────────────────────────────┘
```

### Privé Content Moderation

#### Privé UGC Review Queue
```
┌─────────────────────────────────────────────────────────────┐
│ PRIVÉ CONTENT MODERATION QUEUE                              │
├─────────────────────────────────────────────────────────────┤
│ Pending Review: 23 posts                                     │
│ Avg Review Time: 18 minutes                                  │
│ SLA: 24 hours                                                │
│                                                              │
│ ┌───────────────────────────────────────────────────────┐   │
│ │ POST #1 - Priya Sharma (@priyasharma)                 │   │
│ │ Campaign: Sephora Holiday Collection                  │   │
│ │ Submitted: 2 hours ago                                │   │
│ │                                                         │   │
│ │ [Instagram Reel Preview - 45 sec makeup tutorial]     │   │
│ │ Views: 2,345 | Likes: 234 | Comments: 45              │   │
│ │                                                         │   │
│ │ Hashtags: #SephoraHoliday #RezPrivé #MakeupTutorial   │   │
│ │ Caption: "Obsessed with this new holiday collection..." │   │
│ │                                                         │   │
│ │ Compliance Check:                                      │   │
│ │ ✅ Minimum length (30 sec)                            │   │
│ │ ✅ Products shown clearly                             │   │
│ │ ✅ Brand hashtags present                             │   │
│ │ ✅ Positive tone                                       │   │
│ │ ⚠️ FTC disclosure missing - "Add #ad or #sponsored"   │   │
│ │                                                         │   │
│ │ Quality Score: 8.5/10 (High)                          │   │
│ │                                                         │   │
│ │ Actions:                                               │   │
│ │ [❌ Reject with Feedback] [⚠️ Request Edit] [✅ Approve]│   │
│ └───────────────────────────────────────────────────────┘   │
│                                                              │
│ [Next Post] [Bulk Actions] [Filter by Campaign]             │
└─────────────────────────────────────────────────────────────┘
```

---

## G. Finance & Settlements

### Merchant Payout Management

#### Settlement Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT SETTLEMENTS DASHBOARD                               │
├─────────────────────────────────────────────────────────────┤
│ Pending Settlements: ₹12,45,678 (234 merchants)            │
│ This Week Paid: ₹45,67,890 (567 merchants)                 │
│ This Month Paid: ₹1,23,45,678 (1,234 merchants)            │
│                                                              │
│ Settlement Cycle: Weekly (Every Monday)                      │
│ Next Payout: 30 Dec 2024 (2 days)                          │
│                                                              │
│ Pending This Cycle:                                          │
│ ┌──────────────────────────────────────────────────────┐    │
│ │ Merchant           │ GMV      │ Commission │ Net Payout│   │
│ ├──────────────────────────────────────────────────────┤    │
│ │ Starbucks (M1001) │ ₹1,23,456│ ₹12,346 (10%)│ ₹1,11,110│   │
│ │ Nike Store (M1002)│ ₹89,234  │ ₹7,139 (8%) │ ₹82,095  │   │
│ │ Paradise (M1003)  │ ₹67,890  │ ₹8,147 (12%)│ ₹59,743  │   │
│ │ ... 231 more                                         │    │
│ └──────────────────────────────────────────────────────┘    │
│                                                              │
│ [Preview Payouts] [Generate Reports] [Process Settlement]   │
└─────────────────────────────────────────────────────────────┘
```

#### Individual Merchant Settlement Detail
```
┌─────────────────────────────────────────────────────────────┐
│ SETTLEMENT DETAILS - Starbucks (M1001)                      │
│ Period: 22 Dec - 28 Dec 2024                                │
├─────────────────────────────────────────────────────────────┤
│ Transaction Summary:                                         │
│ Total Transactions: 234                                      │
│ Total GMV: ₹1,23,456                                        │
│ Avg Order Value: ₹527                                       │
│                                                              │
│ Revenue Breakdown:                                           │
│ Gross Sales:                ₹1,23,456                       │
│ - ReZ Commission (10%):     - ₹12,346                       │
│ - Payment Gateway (2%):     - ₹2,469                        │
│ - Coins Redeemed:           - ₹8,945                        │
│ - Refunds:                  - ₹1,200                        │
│ ────────────────────────────────────                        │
│ Net Payout:                 ₹98,496                         │
│                                                              │
│ Coin Economics:                                              │
│ ReZ Coins Earned (by customers): 12,346 coins               │
│ Branded Coins Issued: 9,876 coins (merchant cost)           │
│ Coins Redeemed: 8,945 coins                                 │
│                                                              │
│ Deductions:                                                  │
│ Commission: ₹12,346                                         │
│ Payment Fees: ₹2,469                                        │
│ Coin Liability: ₹9,876 (Branded coins)                     │
│ Refunds: ₹1,200                                             │
│                                                              │
│ Bank Details:                                                │
│ Account: ************1234 (HDFC Bank)                       │
│ IFSC: HDFC0001234                                            │
│ Account Name: Starbucks India Pvt Ltd                       │
│                                                              │
│ Settlement Status: 🟡 Pending (Scheduled for 30 Dec)        │
│                                                              │
│ [View Transactions] [Download Invoice] [Process Now]        │
└─────────────────────────────────────────────────────────────┘
```

### Refund Management

#### Refund Request Queue
```
┌─────────────────────────────────────────────────────────────┐
│ REFUND MANAGEMENT                                            │
├─────────────────────────────────────────────────────────────┤
│ Pending Refunds: 45 (₹67,890)                              │
│ Processed Today: 23 (₹34,567)                              │
│ Avg Processing Time: 2.3 hours                              │
│ SLA: 24 hours                                                │
│                                                              │
│ Priority Queue (Escalated):                                  │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Txn #45678 - User: Rahul K. - ₹1,234                   │ │
│ │ Merchant: Paradise Biryani                              │ │
│ │ Reason: Food quality issue                              │ │
│ │ Requested: 6 hours ago (⚠️ SLA warning)                │ │
│ │ Status: Pending merchant approval                       │ │
│ │ Evidence: [Photo attached], [Review posted]             │ │
│ │                                                          │ │
│ │ Merchant Response: "Customer ordered wrong item"        │ │
│ │ User Reply: "No, I have proof of wrong order"          │ │
│ │                                                          │ │
│ │ Admin Decision Required:                                │ │
│ │ [Full Refund] [Partial Refund] [Reject] [Investigate]  │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [View All Refunds] [Refund Analytics] [Auto-Refund Rules]   │
└─────────────────────────────────────────────────────────────┘
```

### Financial Reports

#### Revenue Analytics Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ FINANCIAL ANALYTICS - December 2024                         │
├─────────────────────────────────────────────────────────────┤
│ Platform Revenue:                                            │
│ Total GMV: ₹5,67,89,012                                     │
│ Commission Earned: ₹56,78,901 (10% avg)                    │
│ Payment Gateway Fees: ₹11,35,780 (2%)                      │
│ Net Revenue: ₹45,43,121                                     │
│                                                              │
│ Revenue Breakdown by Mode:                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ReZ Near You:  ₹3,70,12,458 (65%) - ₹37,01,246 comm.   │ │
│ │ ReZ Mall:      ₹1,41,97,253 (25%) - ₹14,19,725 comm.   │ │
│ │ Cash Store:    ₹45,43,729 (8%)    - ₹4,54,373 comm.    │ │
│ │ ReZ Privé:     ₹11,35,572 (2%)    - ₹1,13,557 comm.    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Category Performance:                                        │
│ 1. Food & Dining - ₹2,55,55,555 GMV (45%) - ₹25,55,556 rev│
│ 2. Electronics - ₹1,08,10,082 GMV (19%) - ₹10,81,008 rev  │
│ 3. Fashion - ₹85,18,412 GMV (15%) - ₹8,51,841 rev         │
│                                                              │
│ Coin Liability:                                              │
│ Coins Issued: 12,45,678 coins (₹12,45,678 liability)       │
│ Coins Redeemed: 5,67,890 coins (₹5,67,890 actual cost)     │
│ Active Coins: 6,77,788 coins (₹6,77,788 future liability)  │
│                                                              │
│ Profitability:                                               │
│ Revenue: ₹45,43,121                                         │
│ - Coin Cost: ₹5,67,890                                     │
│ - Operations: ₹12,00,000                                    │
│ - Marketing: ₹8,00,000                                      │
│ - Tech & Infra: ₹5,00,000                                  │
│ ────────────────────────────────                            │
│ Net Profit: ₹14,75,231 (32.5% margin)                      │
│                                                              │
│ [Download P&L] [Tax Reports] [Investor Dashboard]           │
└─────────────────────────────────────────────────────────────┘
```

---

## H. Trust, Safety & Compliance

### KYC Management

#### KYC Status Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ KYC & VERIFICATION STATUS                                    │
├─────────────────────────────────────────────────────────────┤
│ Users:                                                       │
│ Total Users: 50,234                                          │
│ Email Verified: 48,123 (95.8%)                              │
│ Phone Verified: 47,890 (95.3%)                              │
│ KYC Completed: 12,456 (24.8%)                               │
│ Aadhaar Verified: 8,234 (16.4%)                             │
│ PAN Verified: 3,456 (6.9%)                                  │
│                                                              │
│ Merchants:                                                   │
│ Total Merchants: 2,456                                       │
│ Basic KYC: 2,456 (100%)                                     │
│ Business Verified: 2,123 (86.4%)                            │
│ GST Verified: 1,890 (77.0%)                                 │
│ Bank Verified: 2,345 (95.5%)                                │
│ Trade License: 1,567 (63.8%)                                │
│                                                              │
│ Pending Verifications: 234 users, 45 merchants              │
│ [Review Queue] [Verification Settings] [Analytics]          │
└─────────────────────────────────────────────────────────────┘
```

### Content Moderation

#### Moderation Queue
```
┌─────────────────────────────────────────────────────────────┐
│ CONTENT MODERATION QUEUE                                     │
├─────────────────────────────────────────────────────────────┤
│ Flagged Content: 89 items                                    │
│ Auto-flagged: 56 (AI) | User-reported: 33                   │
│                                                              │
│ Categories:                                                  │
│ - Reviews: 34 (fake/abusive)                                │
│ - UGC Posts: 23 (inappropriate)                             │
│ - UGC Reels: 12 (policy violation)                          │
│ - Merchant Photos: 8 (misleading)                           │
│ - Comments: 12 (spam/abuse)                                 │
│                                                              │
│ Priority Items (Immediate Action):                           │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🔴 REVIEW #12345 - User: Anonymous                      │ │
│ │ For: Starbucks, Andheri                                 │ │
│ │ Rating: 1★                                              │ │
│ │ Text: "Worst coffee ever! The staff was rude and..."   │ │
│ │                                                          │ │
│ │ Flags:                                                   │ │
│ │ ⚠️ Abusive language detected (confidence: 87%)          │ │
│ │ ⚠️ Competitor mentioned ("Go to Cafe Coffee Day")       │ │
│ │ ⚠️ User has 5 similar reviews (pattern)                │ │
│ │                                                          │ │
│ │ Merchant Response: "Flagged as fake - we don't have..." │ │
│ │                                                          │ │
│ │ [View Full] [Approve] [Edit & Approve] [Remove]         │ │
│ │ [Ban User] [Contact User] [Escalate]                   │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Bulk Moderate] [Filter] [AI Assist] [Analytics]            │
└─────────────────────────────────────────────────────────────┘
```

### Dispute Resolution

#### Dispute Management Interface
```
┌─────────────────────────────────────────────────────────────┐
│ DISPUTE RESOLUTION CENTER                                    │
├─────────────────────────────────────────────────────────────┤
│ Open Disputes: 23                                            │
│ Resolved Today: 12                                           │
│ Avg Resolution Time: 4.2 hours                              │
│ SLA: 24 hours                                                │
│                                                              │
│ Active Dispute #D4567:                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ User: Priya Sharma (U12345)                             │ │
│ │ vs                                                       │ │
│ │ Merchant: Paradise Biryani (M1003)                      │ │
│ │                                                          │ │
│ │ Transaction: #T78901 - ₹450                             │ │
│ │ Date: 26 Dec 2024, 8:30 PM                              │ │
│ │ Opened: 27 Dec 2024, 10:00 AM (18 hours ago)           │ │
│ │                                                          │ │
│ │ Issue Type: Wrong order delivered                       │ │
│ │                                                          │ │
│ │ User's Claim:                                            │ │
│ │ "I ordered Chicken Biryani but received Veg Biryani.   │ │
│ │  I'm not vegetarian and this ruined my dinner plans."  │ │
│ │  Evidence: [Photo of veg biryani], [Order screenshot]  │ │
│ │                                                          │ │
│ │ Merchant's Response:                                     │ │
│ │ "Our records show veg biryani was ordered. The         │ │
│ │  customer made a mistake."                              │ │
│ │  Evidence: [Order receipt showing veg biryani]          │ │
│ │                                                          │ │
│ │ Admin Investigation:                                     │ │
│ │ - App logs show: "Chicken Biryani" added to cart       │ │
│ │ - But order placed as: "Veg Biryani" (suspicious)      │ │
│ │ - Possible app bug or user error?                       │ │
│ │ - User history: 45 orders, 0 disputes (credible)       │ │
│ │ - Merchant history: 234 orders, 3 disputes (2 similar) │ │
│ │                                                          │ │
│ │ Recommendation: ⚖️ Partial Merchant Fault               │ │
│ │ - Likely app bug or unclear UI                          │ │
│ │ - Offer full refund + 500 bonus coins (goodwill)       │ │
│ │ - No penalty to merchant (benefit of doubt)            │ │
│ │ - Escalate to tech team (investigate app bug)          │ │
│ │                                                          │ │
│ │ Resolution Options:                                      │ │
│ │ [Full Refund + Coins] [Partial Refund] [Reject Claim]  │ │
│ │ [Escalate to Legal] [Close with Note]                  │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Next Dispute] [Filter] [Analytics] [Export Report]         │
└─────────────────────────────────────────────────────────────┘
```

### Blacklist System

#### Banned Users & Merchants
```
┌─────────────────────────────────────────────────────────────┐
│ BLACKLIST MANAGEMENT                                         │
├─────────────────────────────────────────────────────────────┤
│ Banned Users: 234                                            │
│ Banned Merchants: 12                                         │
│ Suspended (Temporary): 45 users, 8 merchants                │
│                                                              │
│ Recent Bans:                                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ User #12345 - Rahul K.                                  │ │
│ │ Banned: 25 Dec 2024                                     │ │
│ │ Reason: Fake bill uploads (fraud)                       │ │
│ │ Evidence: 8 duplicate bills, OCR 95% match              │ │
│ │ Coins Earned (fraud): 12,456 coins (deducted)           │ │
│ │ Ban Type: Permanent                                     │ │
│ │ Appeals: 1 (Rejected)                                   │ │
│ │ [View Details] [Review Appeal] [Unban]                  │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Add to Blacklist] [Review Appeals] [Export List]           │
└─────────────────────────────────────────────────────────────┘
```

---

## I. COMPREHENSIVE TAG SYSTEM 🏷️

### Overview
Tags are the backbone of ReZ's discovery, filtering, and control system. They enable:
- User discovery and filtering
- Admin control and monitoring
- Merchant marketing and visibility
- Analytics and reporting
- Automated workflows and rules

**Tag Assignment Authority:**
- **Admin-Only Tags**: Platform control, trust indicators, trending
- **Merchant-Managed Tags**: Offers, features, amenities
- **Auto-Generated Tags**: System-generated based on data
- **Hybrid Tags**: Requires merchant input + admin approval

---

### 1. PRODUCT TAGS

#### A. Admin-Assigned Product Tags (Platform Control)

```javascript
const ADMIN_PRODUCT_TAGS = {
  // Discovery & Visibility
  trending: {
    label: '🔥 Trending',
    assignedBy: 'admin',
    criteria: 'Auto + Manual',
    autoLogic: {
      views: '>1000 in 24h',
      saves: '>100 in 24h',
      purchases: '>50 in 24h',
      growthRate: '>200% vs avg'
    },
    manualOverride: true,
    visibility: 'Homepage, Explore, Category',
    expiryLogic: '7 days or metric drop below 50%',
    maxProducts: 100  // Max 100 trending at once
  },

  featured: {
    label: '⭐ Featured',
    assignedBy: 'admin',
    criteria: 'Manual only',
    purpose: 'Editorial picks, partnerships',
    placement: 'Homepage hero, Category top',
    duration: 'Custom (1-30 days)',
    requiresPayment: false  // Can be organic or paid
  },

  bestDeal: {
    label: '💰 Best Deal',
    assignedBy: 'admin',
    criteria: 'Auto + Manual',
    autoLogic: {
      discount: '>40%',
      coinback: '>15%',
      totalSavings: '>₹500',
      merchantRating: '>4.5★'
    },
    badge: 'Green gradient pulse',
    sorting: 'Priority in deals section'
  },

  superDeal: {
    label: '🚀 Super Deal',
    assignedBy: 'admin',
    criteria: 'Auto (strict)',
    autoLogic: {
      discount: '>60%',
      coinback: '>20%',
      totalSavings: '>₹1000',
      merchantRating: '>4.7★',
      stock: '<50 units'
    },
    badge: 'Animated gold gradient',
    notification: 'Push to all nearby users',
    placement: 'Flash sale section'
  },

  staffPick: {
    label: '👍 Staff Pick',
    assignedBy: 'admin',
    criteria: 'Manual only (editorial)',
    team: 'Content team + Category managers',
    requirements: 'Personal testing + review',
    badge: 'Purple with thumb icon',
    reason: 'Must include explanation'
  },

  newArrival: {
    label: '🆕 New',
    assignedBy: 'system',
    criteria: 'Auto',
    autoLogic: {
      productAge: '<30 days',
      categoryFirst: true  // New to category
    },
    badge: 'Blue "NEW" chip',
    autoExpiry: '30 days from listing'
  },

  limitedStock: {
    label: '⏰ Limited Stock',
    assignedBy: 'system',
    criteria: 'Auto',
    autoLogic: {
      stockLevel: '<10 units',
      inventoryPercentage: '<20%'
    },
    badge: 'Red with stock count',
    urgencyText: 'Only X left!',
    hideWhenSoldOut: true
  },

  fastSelling: {
    label: '⚡ Fast Selling',
    assignedBy: 'system',
    criteria: 'Auto',
    autoLogic: {
      salesVelocity: '>20 units/day',
      last24hSales: '>50',
      acceleratingTrend: true
    },
    badge: 'Orange lightning',
    socialProof: 'X people bought in last 24h'
  },

  exclusive: {
    label: '👑 Exclusive',
    assignedBy: 'admin',
    criteria: 'Manual',
    types: [
      'Platform exclusive (only on ReZ)',
      'Launch exclusive (first on ReZ)',
      'Privé exclusive (Privé members only)',
      'City exclusive (select cities)'
    ],
    badge: 'Gold crown',
    restrictions: 'Can limit by user tier, city'
  }
};
```

#### B. Merchant-Assigned Product Tags (Business Control)

```javascript
const MERCHANT_PRODUCT_TAGS = {
  // Product Features
  bestseller: {
    label: '🏆 Bestseller',
    assignedBy: 'merchant',
    verification: 'Auto-verify via sales data',
    criteria: {
      minSales: 100,  // Must have sold 100+ units
      top: '10%'      // Must be in top 10% of merchant products
    },
    badge: 'Gold trophy',
    canFalseClaim: false  // System verifies
  },

  recommended: {
    label: '👌 Recommended',
    assignedBy: 'merchant',
    verification: 'None (merchant discretion)',
    limit: '20% of products max',
    badge: 'Green checkmark',
    purpose: 'Merchant recommendation'
  },

  seasonal: {
    label: '🎃 Seasonal',
    assignedBy: 'merchant',
    verification: 'None',
    examples: [
      'Diwali Special',
      'Summer Collection',
      'Winter Warmer',
      'Monsoon Must-Have'
    ],
    autoSuggest: 'Based on calendar + category',
    duration: 'Merchant sets start/end date'
  },

  combo: {
    label: '🎁 Combo Offer',
    assignedBy: 'merchant',
    verification: 'System checks linked products',
    requirements: 'Must link 2+ products',
    types: [
      'Buy 1 Get 1',
      'Combo Meal',
      'Bundle Deal',
      'Value Pack'
    ]
  },

  madeToOrder: {
    label: '🎨 Made to Order',
    assignedBy: 'merchant',
    verification: 'None',
    badge: 'Custom icon',
    leadTime: 'Merchant specifies (e.g., 2-5 days)',
    categories: ['Food', 'Fashion', 'Jewelry', 'Furniture']
  },

  signature: {
    label: '✨ Signature Dish/Item',
    assignedBy: 'merchant',
    verification: 'Admin can feature',
    limit: '5 per merchant',
    badge: 'Star burst',
    purpose: 'Merchant specialty/famous item',
    adminBoost: 'Can be featured as "Signature Series"'
  }
};
```

#### C. Auto-Generated Product Tags (System Intelligence)

```javascript
const AUTO_PRODUCT_TAGS = {
  // User Behavior Based
  popularInArea: {
    label: '📍 Popular in Your Area',
    assignedBy: 'system',
    logic: {
      radius: '2km',
      minPurchases: 20,
      timeWindow: '7 days'
    },
    personalized: true,
    badge: 'Location pin'
  },

  highlyRated: {
    label: '⭐ Highly Rated',
    assignedBy: 'system',
    criteria: {
      avgRating: '>=4.5',
      minReviews: 50,
      recentRating: '>=4.3 (last 30 days)'
    },
    badge: 'Star burst'
  },

  frequentlyBought: {
    label: '🔁 Frequently Bought',
    assignedBy: 'system',
    criteria: {
      repeatPurchaseRate: '>40%',
      minUniqueBuyers: 30
    },
    badge: 'Repeat icon'
  },

  personalized: {
    label: '🎯 For You',
    assignedBy: 'AI system',
    logic: {
      userHistory: true,
      similarUsers: true,
      preferences: true,
      matchScore: '>85%'
    },
    badge: 'AI sparkle',
    personalized: true  // Different for each user
  },

  // Time-based
  breakfastSpecial: {
    label: '🌅 Breakfast Special',
    assignedBy: 'system',
    activeHours: '06:00-11:00',
    categories: ['Food & Dining'],
    autoHide: 'Outside hours'
  },

  lunchDeal: {
    label: '🍽️ Lunch Deal',
    assignedBy: 'system',
    activeHours: '12:00-15:00',
    categories: ['Food & Dining']
  },

  dinnerFavorite: {
    label: '🌙 Dinner Favorite',
    assignedBy: 'system',
    activeHours: '19:00-23:00',
    categories: ['Food & Dining']
  },

  weekendSpecial: {
    label: '🎉 Weekend Special',
    assignedBy: 'system',
    activeDays: ['Saturday', 'Sunday'],
    autoHide: 'Weekdays'
  }
};
```

---

### 2. MERCHANT TAGS

#### A. Admin-Assigned Merchant Tags (Trust & Status)

```javascript
const ADMIN_MERCHANT_TAGS = {
  // Trust & Verification
  verified: {
    label: '✅ Verified',
    assignedBy: 'admin',
    criteria: {
      kycComplete: true,
      documentsApproved: true,
      businessVerified: true,
      active: '>30 days'
    },
    badge: 'Green checkmark',
    visibility: 'All merchant listings',
    revokable: true
  },

  trusted: {
    label: '🛡️ Trusted',
    assignedBy: 'admin',
    criteria: {
      verified: true,
      minTransactions: 50,
      avgRating: '>=4.5',
      disputeRate: '<2%',
      active: '>90 days'
    },
    badge: 'Blue shield',
    benefits: 'Higher search ranking',
    autoUpgrade: true
  },

  rezPreferred: {
    label: '⭐ ReZ Preferred',
    assignedBy: 'admin',
    criteria: {
      trusted: true,
      minTransactions: 200,
      avgRating: '>=4.7',
      disputeRate: '<1%',
      responseTime: '<2 hours',
      active: '>180 days'
    },
    badge: 'Gold star',
    benefits: [
      'Priority placement',
      'Featured section eligible',
      'Lower commission (-2%)',
      'Dedicated support'
    ],
    autoUpgrade: true
  },

  rezSignature: {
    label: '💎 ReZ Signature',
    assignedBy: 'admin',
    criteria: {
      rezPreferred: true,
      minTransactions: 1000,
      avgRating: '>=4.9',
      gmv: '>₹10L/month',
      zeroDisputes: 'Last 90 days',
      active: '>365 days'
    },
    badge: 'Diamond with animation',
    benefits: [
      'Homepage featuring',
      'Exclusive campaigns',
      'Lowest commission (-5%)',
      'Account manager',
      'API access',
      'White label options'
    ],
    manualOnly: true,  // Must be hand-picked
    maxMerchants: 50   // Limited to top 50
  },

  // Performance & Status
  topRated: {
    label: '🌟 Top Rated',
    assignedBy: 'system',
    criteria: {
      avgRating: '>=4.8',
      minReviews: 100,
      consistency: '4.5+ for 90 days'
    },
    badge: 'Gold stars',
    autoAssign: true,
    autoRevoke: 'If rating drops below 4.6'
  },

  trending: {
    label: '🔥 Trending',
    assignedBy: 'system',
    criteria: {
      viewGrowth: '>300% vs last week',
      saveGrowth: '>200%',
      transactionGrowth: '>150%'
    },
    badge: 'Fire icon',
    duration: '7 days',
    autoExpiry: true
  },

  fastDelivery: {
    label: '⚡ 60-min Delivery',
    assignedBy: 'admin',
    criteria: {
      deliveryCapability: true,
      avgDeliveryTime: '<60 min',
      onTimeRate: '>95%',
      verified: true
    },
    badge: 'Lightning bolt',
    categories: ['Food', 'Groceries', 'Pharmacy']
  },

  // Special Programs
  privePartner: {
    label: '👑 Privé Partner',
    assignedBy: 'admin',
    criteria: {
      manual: true,
      premium: true,
      priveAgreement: true
    },
    badge: 'Crown',
    visibility: 'Visible to Privé members only',
    benefits: 'Access to influencer campaigns'
  },

  studentFriendly: {
    label: '🎓 Student Friendly',
    assignedBy: 'admin',
    criteria: {
      studentDiscount: true,
      campusProximity: '<5km',
      studentVerified: true
    },
    badge: 'Graduation cap',
    visibility: 'Student mode users'
  },

  // Sustainability & Values
  ecoFriendly: {
    label: '♻️ Eco Friendly',
    assignedBy: 'admin',
    criteria: {
      certification: true,
      sustainablePractices: true,
      verification: 'Third-party cert'
    },
    badge: 'Green leaf',
    visibility: 'Vibe filters'
  },

  localBusiness: {
    label: '🏪 Local Business',
    assignedBy: 'admin',
    criteria: {
      ownership: 'Local owner',
      locations: '<=3',
      notChain: true
    },
    badge: 'Local badge',
    visibility: 'Support local filter'
  },

  womenOwned: {
    label: '💪 Women Owned',
    assignedBy: 'admin',
    criteria: {
      ownership: '>=51% women',
      verification: 'Documents verified'
    },
    badge: 'Empowerment icon',
    visibility: 'Values filter'
  }
};
```

#### B. Merchant-Assigned Merchant Tags (Self-Service)

```javascript
const MERCHANT_SELF_TAGS = {
  // Amenities & Features
  amenities: {
    options: [
      { tag: 'WiFi Available', icon: '📶', verify: 'none' },
      { tag: 'Parking Available', icon: '🅿️', verify: 'none' },
      { tag: 'AC', icon: '❄️', verify: 'none' },
      { tag: 'Outdoor Seating', icon: '🪑', verify: 'none' },
      { tag: 'Pet Friendly', icon: '🐕', verify: 'admin' },
      { tag: 'Kid Friendly', icon: '👶', verify: 'none' },
      { tag: 'Wheelchair Accessible', icon: '♿', verify: 'admin' },
      { tag: 'Live Music', icon: '🎵', verify: 'none' },
      { tag: 'TV Screens', icon: '📺', verify: 'none' },
      { tag: 'Private Rooms', icon: '🚪', verify: 'none' }
    ],
    assignedBy: 'merchant',
    verification: 'Mixed (some require admin approval)',
    maxTags: 10
  },

  // Service Features
  services: {
    options: [
      { tag: 'Dine-in', icon: '🍽️' },
      { tag: 'Takeaway', icon: '🥡' },
      { tag: 'Home Delivery', icon: '🛵' },
      { tag: 'Curbside Pickup', icon: '🚗' },
      { tag: 'Catering', icon: '🎉' },
      { tag: 'Bulk Orders', icon: '📦' },
      { tag: '24/7 Open', icon: '🕐' },
      { tag: 'Reservations', icon: '📅' },
      { tag: 'Call Ahead Ordering', icon: '📞' },
      { tag: 'Table Service', icon: '🍴' }
    ],
    assignedBy: 'merchant',
    verification: 'System verifies via features',
    maxTags: 15
  },

  // Payment Options
  paymentMethods: {
    options: [
      { tag: 'UPI', icon: '📱', system: true },
      { tag: 'Cards', icon: '💳', system: true },
      { tag: 'Cash', icon: '💵', merchant: true },
      { tag: 'Sodexo', icon: '🎫', merchant: true },
      { tag: 'Paytm Wallet', icon: '📲', merchant: true }
    ],
    assignedBy: 'merchant',
    verification: 'System auto-detects digital, merchant declares cash',
    systemManaged: ['UPI', 'Cards', 'Digital Wallets']
  },

  // Cuisine/Category Specialization
  specialties: {
    food: [
      'North Indian', 'South Indian', 'Chinese', 'Italian',
      'Mexican', 'Thai', 'Japanese', 'Lebanese',
      'Continental', 'Street Food', 'Desserts', 'Bakery'
    ],
    fashion: [
      'Ethnic Wear', 'Western Wear', 'Formal', 'Casual',
      'Sports Wear', 'Kids Fashion', 'Plus Size', 'Maternity'
    ],
    assignedBy: 'merchant',
    verification: 'Admin can remove if irrelevant',
    maxTags: 5,
    categorySpecific: true
  }
};
```

---

### 3. USER TAGS

#### A. Admin-Assigned User Tags (Behavior & Status)

```javascript
const ADMIN_USER_TAGS = {
  // Tier & Status
  tier: {
    options: [
      { tag: 'Regular', criteria: 'Default', badge: null },
      { tag: 'Active', criteria: '>5 txns/month', badge: '🟢' },
      { tag: 'Premium', criteria: '>₹10k spent/month', badge: '⭐' },
      { tag: 'VIP', criteria: '>₹50k spent/month', badge: '💎' },
      { tag: 'Privé Silver', criteria: 'Privé program', badge: '🥈' },
      { tag: 'Privé Gold', criteria: 'Privé program', badge: '🥇' },
      { tag: 'Privé Platinum', criteria: 'Privé program', badge: '👑' }
    ],
    assignedBy: 'system + admin',
    autoUpgrade: true,
    benefits: 'Tier-based perks'
  },

  // Behavior Segments
  powerUser: {
    label: '🚀 Power User',
    assignedBy: 'system',
    criteria: {
      transactions: '>20/month',
      categories: '>=5',
      reviews: '>=10',
      ugcContent: '>=5',
      referrals: '>=3'
    },
    benefits: 'Early access to features',
    internal: true  // Not visible to user
  },

  earlyAdopter: {
    label: '🌟 Early Adopter',
    assignedBy: 'admin',
    criteria: 'Joined in first 6 months',
    badge: 'Founder badge',
    visibility: 'Profile badge',
    benefits: 'Lifetime perks'
  },

  influencer: {
    label: '📸 Influencer',
    assignedBy: 'admin',
    criteria: {
      socialFollowers: '>5000',
      ugcQuality: 'high',
      engagement: '>5%',
      verified: true
    },
    benefits: 'Campaign invitations',
    internal: false
  },

  // Engagement
  reviewer: {
    label: '✍️ Top Reviewer',
    assignedBy: 'system',
    criteria: {
      reviews: '>=50',
      helpfulVotes: '>=100',
      avgRatingGiven: '3-5',  // Not too harsh, not fake
      verified: 'purchases only'
    },
    badge: 'Pen icon',
    visibility: 'On reviews',
    perks: 'Bonus coins for reviews'
  },

  contentCreator: {
    label: '🎥 Content Creator',
    assignedBy: 'system',
    criteria: {
      reels: '>=20',
      posts: '>=30',
      avgViews: '>1000',
      quality: 'high'
    },
    badge: 'Camera icon',
    benefits: 'Featured content, bonus coins'
  },

  // Spending Patterns
  foodie: {
    label: '🍕 Foodie',
    assignedBy: 'system',
    criteria: {
      foodSpend: '>70% of total',
      foodTxns: '>15/month',
      restaurants: '>=10 different'
    },
    personalization: 'Food-first recommendations',
    internal: true
  },

  fashionista: {
    label: '👗 Fashionista',
    assignedBy: 'system',
    criteria: {
      fashionSpend: '>60% of total',
      brands: '>=5',
      frequency: '>3/month'
    },
    personalization: 'Fashion-first recommendations',
    internal: true
  },

  // Trust & Safety
  verified: {
    label: '✅ Verified User',
    assignedBy: 'system',
    criteria: {
      emailVerified: true,
      phoneVerified: true,
      kycDone: true
    },
    badge: 'Blue checkmark',
    visibility: 'Public profile',
    required: 'For certain features (Privé, high-value)'
  },

  trustedBuyer: {
    label: '🛡️ Trusted Buyer',
    assignedBy: 'admin',
    criteria: {
      transactions: '>=50',
      zeroDisputes: true,
      zeroReturns: '<5%',
      memberSince: '>6 months'
    },
    benefits: 'Priority support, exclusive access',
    internal: true
  },

  // Risk Tags (Internal Only)
  watchlist: {
    label: '⚠️ Watchlist',
    assignedBy: 'admin',
    criteria: 'Manual - suspicious activity',
    actions: 'Enhanced monitoring',
    visibility: 'Internal only',
    autoReview: '30 days'
  },

  suspended: {
    label: '🚫 Suspended',
    assignedBy: 'admin',
    criteria: 'Policy violation',
    actions: 'Account restrictions',
    visibility: 'Internal only',
    appealable: true
  }
};
```

#### B. User Preference Tags (Self-Selected)

```javascript
const USER_PREFERENCE_TAGS = {
  // Dietary Preferences
  dietary: {
    options: [
      { tag: 'Vegetarian', icon: '🥗', filter: 'Veg Mode' },
      { tag: 'Vegan', icon: '🌱', filter: 'Vegan Mode' },
      { tag: 'Halal', icon: '🥙', filter: 'Halal Mode' },
      { tag: 'Jain', icon: '🙏', filter: 'Veg Mode + restrictions' },
      { tag: 'Keto', icon: '🥑', filter: 'Vibes' },
      { tag: 'Gluten-Free', icon: '🌾', filter: 'Vibes' },
      { tag: 'Diabetic-Friendly', icon: '🍬', filter: 'Health' }
    ],
    assignedBy: 'user',
    verification: 'None',
    purpose: 'Personalized filtering',
    autoApply: true  // Auto-applies relevant filters
  },

  // Lifestyle
  lifestyle: {
    options: [
      'Fitness Enthusiast',
      'Health Conscious',
      'Budget Shopper',
      'Luxury Lifestyle',
      'Eco Warrior',
      'Tech Geek',
      'Bookworm',
      'Party Animal',
      'Homebody',
      'Adventure Seeker'
    ],
    assignedBy: 'user',
    maxTags: 5,
    purpose: 'Personalization + recommendations'
  },

  // Interests
  interests: {
    options: [
      'Fashion', 'Beauty', 'Fitness', 'Food',
      'Travel', 'Technology', 'Gaming', 'Music',
      'Movies', 'Sports', 'Reading', 'Art',
      'Photography', 'Cooking', 'Wellness'
    ],
    assignedBy: 'user',
    maxTags: 10,
    purpose: 'Content + offer personalization'
  },

  // Occasion Preferences
  occasions: {
    options: [
      'Date Night', 'Family Outing', 'Friends Hangout',
      'Business Meeting', 'Solo Dining', 'Celebrations',
      'Quick Bite', 'Fine Dining', 'Casual Hangout'
    ],
    assignedBy: 'user',
    context: 'Can select per transaction',
    purpose: 'Occasion-based recommendations'
  }
};
```

---

### 4. OFFER/DEAL TAGS

#### A. Admin-Assigned Offer Tags

```javascript
const ADMIN_OFFER_TAGS = {
  hotDeal: {
    label: '🔥 Hot Deal',
    assignedBy: 'admin',
    criteria: {
      discount: '>50%',
      demand: 'high',
      limited: true
    },
    badge: 'Flame gradient',
    notification: 'Push eligible'
  },

  flashSale: {
    label: '⚡ Flash Sale',
    assignedBy: 'admin',
    criteria: {
      duration: '<6 hours',
      discount: '>40%',
      stock: 'limited'
    },
    badge: 'Lightning + timer',
    urgency: 'Countdown timer',
    notification: 'Push to all'
  },

  featured: {
    label: '⭐ Featured Offer',
    assignedBy: 'admin',
    placement: 'Homepage, push',
    requirements: 'Quality + value',
    duration: 'Custom'
  },

  exclusive: {
    label: '👑 Exclusive',
    assignedBy: 'admin',
    types: [
      'App Exclusive',
      'Privé Exclusive',
      'First-time User',
      'Student Exclusive'
    ],
    restrictions: 'User segment based'
  }
};
```

#### B. Merchant-Assigned Offer Tags

```javascript
const MERCHANT_OFFER_TAGS = {
  // Offer Types
  offerType: {
    options: [
      { tag: 'Flat Discount', icon: '💰', example: '₹100 off' },
      { tag: 'Percentage Off', icon: '%', example: '20% off' },
      { tag: 'Cashback', icon: '💵', example: '10% cashback' },
      { tag: 'BOGO', icon: '🎁', example: 'Buy 1 Get 1' },
      { tag: 'Free Item', icon: '🆓', example: 'Free dessert' },
      { tag: 'Combo Deal', icon: '📦', example: 'Meal combo' },
      { tag: 'Extra Coins', icon: '🪙', example: '2x ReZ Coins' }
    ],
    assignedBy: 'merchant',
    verification: 'System validates offer structure',
    required: true  // Must select type
  },

  // Timing
  timing: {
    options: [
      'All Day',
      'Breakfast Hours',
      'Lunch Hours',
      'Happy Hours',
      'Dinner Hours',
      'Late Night',
      'Weekdays Only',
      'Weekends Only',
      'Monday Madness',
      'Friday Feast'
    ],
    assignedBy: 'merchant',
    enforcement: 'System auto-hides outside hours',
    badge: 'Clock icon with time'
  },

  // User Targeting
  targeting: {
    options: [
      { tag: 'All Users', restriction: 'none' },
      { tag: 'New Users Only', restriction: 'firstPurchase' },
      { tag: 'Returning Customers', restriction: 'previousPurchase' },
      { tag: 'Birthday Special', restriction: 'birthMonth' },
      { tag: 'Students Only', restriction: 'studentVerified' },
      { tag: 'Privé Members', restriction: 'priveOnly' }
    ],
    assignedBy: 'merchant',
    verification: 'System enforces restrictions',
    multiSelect: true
  },

  // Special Occasions
  occasion: {
    options: [
      'Diwali', 'Eid', 'Christmas', 'Holi', 'New Year',
      'Valentine', 'Friendship Day', 'Raksha Bandhan',
      'Mother\'s Day', 'Father\'s Day', 'Anniversary'
    ],
    assignedBy: 'merchant',
    autoSuggest: 'Based on calendar',
    seasonal: true
  }
};
```

---

### 5. CONTENT TAGS (UGC - Reels, Posts, Reviews)

```javascript
const CONTENT_TAGS = {
  // Auto-Generated Content Tags
  contentType: {
    options: ['Reel', 'Post', 'Review', 'Photo', 'Story'],
    assignedBy: 'system',
    automatic: true
  },

  contentQuality: {
    labels: [
      { tag: 'High Quality', criteria: 'Resolution >1080p, clear, well-lit' },
      { tag: 'Medium Quality', criteria: 'Acceptable quality' },
      { tag: 'Low Quality', criteria: 'Blurry, dark, poor composition' }
    ],
    assignedBy: 'AI + admin',
    purpose: 'Filtering + featuring decisions'
  },

  featured: {
    label: '⭐ Featured Content',
    assignedBy: 'admin',
    criteria: {
      quality: 'high',
      engagement: '>1000 views',
      brandSafe: true,
      appropriate: true
    },
    placement: 'Explore page, category highlights'
  },

  viral: {
    label: '🔥 Viral',
    assignedBy: 'system',
    criteria: {
      views: '>10000',
      engagement: '>10%',
      shares: '>100',
      velocity: 'rapid growth'
    },
    badge: 'Flame animation',
    boost: 'Algorithmic promotion'
  },

  verified: {
    label: '✅ Verified Purchase',
    assignedBy: 'system',
    criteria: 'Posted by user who actually purchased',
    badge: 'Checkmark',
    trustIndicator: true
  },

  helpful: {
    label: '👍 Helpful',
    assignedBy: 'system',
    criteria: 'helpfulVotes > 20',
    badge: 'Thumbs up',
    sortingBoost: true
  }
};
```

---

### 6. LOCATION/AREA TAGS

```javascript
const LOCATION_TAGS = {
  // Admin-Assigned Area Tags
  neighborhood: {
    examples: [
      'Koramangala', 'Indiranagar', 'Whitefield',  // Bangalore
      'Bandra', 'Andheri', 'Colaba',                // Mumbai
      'Connaught Place', 'Hauz Khas', 'Cyber City'  // Delhi/NCR
    ],
    assignedBy: 'admin',
    purpose: 'Local recommendations',
    userFacing: true
  },

  landmark: {
    examples: [
      'Near MG Road', 'Phoenix Market City Area',
      'Close to Airport', 'Metro Station Nearby'
    ],
    assignedBy: 'merchant',
    verification: 'Admin verifies',
    searchable: true
  },

  zone: {
    options: [
      { tag: 'College Area', icon: '🎓', boost: 'Student offers' },
      { tag: 'IT Hub', icon: '💼', boost: 'Corporate deals' },
      { tag: 'Residential', icon: '🏘️', boost: 'Family offers' },
      { tag: 'Commercial', icon: '🏢', boost: 'Business hours' },
      { tag: 'Entertainment District', icon: '🎭', boost: 'Nightlife' },
      { tag: 'Mall Area', icon: '🛍️', boost: 'Shopping deals' }
    ],
    assignedBy: 'admin',
    targeting: 'Used for location-based campaigns'
  }
};
```

---

### 7. TAG MANAGEMENT INTERFACES

#### Admin Tag Control Panel

```
┌─────────────────────────────────────────────────────────────┐
│ TAG MANAGEMENT SYSTEM                                        │
├─────────────────────────────────────────────────────────────┤
│ Total Tags: 456                                              │
│ Active: 423 | Inactive: 33                                   │
│                                                              │
│ Tag Categories:                                              │
│ ├─ Product Tags: 87                                          │
│ ├─ Merchant Tags: 52                                         │
│ ├─ User Tags: 123                                            │
│ ├─ Offer Tags: 45                                            │
│ ├─ Content Tags: 67                                          │
│ └─ Location Tags: 82                                         │
│                                                              │
│ [Create New Tag] [Bulk Import] [Tag Analytics] [Export]     │
└─────────────────────────────────────────────────────────────┘

TRENDING TAG EDITOR
┌─────────────────────────────────────────────────────────────┐
│ Tag: 🔥 Trending                                            │
│ Type: Product Tag                                            │
│ Assignment: Auto + Manual Override                           │
│                                                              │
│ Auto-Assignment Criteria:                                    │
│ Views:     [>1000 ▼] in [24 hours ▼]                       │
│ Saves:     [>100 ▼]  in [24 hours ▼]                       │
│ Purchases: [>50 ▼]   in [24 hours ▼]                       │
│ Growth:    [>200% ▼] vs average                             │
│                                                              │
│ Display Settings:                                            │
│ Badge: [🔥 Trending ▼]                                      │
│ Color: [Orange-Red Gradient ▼]                             │
│ Animation: [Pulse ▼]                                        │
│                                                              │
│ Placement:                                                   │
│ ☑ Homepage                                                  │
│ ☑ Explore Page                                              │
│ ☑ Category Pages                                            │
│ ☑ Search Results (boosted)                                  │
│                                                              │
│ Limits:                                                      │
│ Max Active: [100] products at once                          │
│ Auto-Expire: [7 days ▼] or [metrics drop >50% ▼]           │
│                                                              │
│ Currently Tagged: 87 products                                │
│ [View All] [Manual Override] [Add Product] [Remove]         │
│                                                              │
│ [Save Changes] [Reset to Default] [Delete Tag]              │
└─────────────────────────────────────────────────────────────┘
```

#### Merchant Tag Self-Service

```
┌─────────────────────────────────────────────────────────────┐
│ MANAGE YOUR STORE TAGS                                       │
├─────────────────────────────────────────────────────────────┤
│ Starbucks - Andheri West                                     │
│                                                              │
│ Current Tags (15/20 max):                                    │
│ ✅ Verified  🛡️ Trusted  ⚡ 60-min Delivery                │
│ 🥙 Halal  🌱 Vegan  🥗 Veg  ♻️ Eco-Friendly                 │
│ 📶 WiFi  🅿️ Parking  ❄️ AC  🪑 Outdoor Seating              │
│                                                              │
│ Add More Tags (5 available):                                 │
│                                                              │
│ Amenities:                                                   │
│ [ ] Pet Friendly (requires admin approval)                   │
│ [ ] Wheelchair Accessible (requires admin approval)          │
│ [ ] Live Music                                               │
│ [ ] TV Screens                                               │
│ [ ] Private Rooms                                            │
│                                                              │
│ Cuisine Specialties (3/5 used):                              │
│ [x] Coffee  [x] Desserts  [x] Bakery                        │
│ [ ] Sandwiches  [ ] Breakfast  [ ] Lunch Specials           │
│                                                              │
│ Services:                                                    │
│ [x] Dine-in  [x] Takeaway  [ ] Catering  [ ] Bulk Orders    │
│                                                              │
│ Special Features:                                            │
│ [ ] 24/7 Open                                                │
│ [ ] Reservations Available                                   │
│ [ ] Call Ahead Ordering                                      │
│                                                              │
│ [Save Changes]  [Preview Store Page]                         │
└─────────────────────────────────────────────────────────────┘
```

---

### 8. TAG ANALYTICS & MONITORING

```javascript
const TAG_ANALYTICS = {
  // Performance Tracking
  tagPerformance: {
    metrics: [
      'impressions',      // How many times tag was shown
      'clicks',           // Click-through rate
      'conversions',      // Purchases after seeing tag
      'engagement',       // Likes, saves, shares
      'revenueImpact'     // GMV attributed to tag
    ],

    example: {
      tag: 'Trending',
      impressions: 123456,
      clicks: 12345,
      ctr: '10%',
      conversions: 2345,
      conversionRate: '19%',
      revenue: '₹12,34,567',
      roi: '450%'
    }
  },

  // Tag Effectiveness Dashboard
  dashboard: `
  ┌───────────────────────────────────────────────────────────┐
  │ TAG PERFORMANCE ANALYTICS - Last 30 Days                  │
  ├───────────────────────────────────────────────────────────┤
  │                                                            │
  │ Top Performing Tags:                                       │
  │ 1. 🔥 Trending         CTR: 12.3%  Conv: 18.5%  ₹45L     │
  │ 2. ⚡ Flash Sale       CTR: 15.7%  Conv: 24.1%  ₹32L     │
  │ 3. 👑 Privé Exclusive  CTR: 8.9%   Conv: 31.2%  ₹28L     │
  │ 4. 💰 Best Deal        CTR: 10.1%  Conv: 16.8%  ₹25L     │
  │ 5. ⭐ Featured         CTR: 9.3%   Conv: 14.2%  ₹19L     │
  │                                                            │
  │ Underperforming Tags (Review/Remove):                      │
  │ - "New Arrival" - Low CTR (2.1%)                          │
  │ - "Weekend Special" - Low conversion (4.3%)               │
  │                                                            │
  │ Tag Saturation Warning:                                    │
  │ ⚠️ "Trending" tag: 87 products (near limit of 100)       │
  │ ⚠️ "Best Deal" tag: 156 offers (too many, diluted value) │
  │                                                            │
  │ Recommendations:                                           │
  │ ✅ Increase "Flash Sale" usage (+32% conversion)          │
  │ ✅ Review "Trending" criteria (too lenient)               │
  │ ⚠️ Retire "New Arrival" tag (poor performance)            │
  │                                                            │
  │ [Detailed Analytics] [A/B Test Tags] [Optimize Rules]     │
  └───────────────────────────────────────────────────────────┘
  `
};
```

---

### 9. TAG AUTOMATION RULES

```javascript
const TAG_AUTOMATION = {
  // Auto-Assignment Rules
  autoAssign: {
    trending: {
      checkFrequency: 'Every 1 hour',
      criteria: {
        views: '>1000 in 24h',
        saves: '>100 in 24h',
        purchases: '>50 in 24h'
      },
      action: 'Add "Trending" tag',
      expiry: 'Auto-remove if metrics drop >50%',
      notification: 'Notify merchant of trending status'
    },

    lowStock: {
      checkFrequency: 'Real-time',
      criteria: 'inventory < 10 OR inventory < 20% of original',
      action: 'Add "Limited Stock" tag',
      display: 'Show "Only X left!" message',
      autoRemove: 'When restocked'
    },

    fastSelling: {
      checkFrequency: 'Every 6 hours',
      criteria: 'Sales velocity >200% of average',
      action: 'Add "Fast Selling" badge',
      socialProof: 'Display "X bought in last 24h"',
      expiry: '7 days or velocity normalizes'
    }
  },

  // Conflict Resolution
  conflictRules: {
    mutuallyExclusive: [
      ['New Arrival', 'Clearance Sale'],  // Can't be both new and clearance
      ['Limited Stock', 'Bestseller'],     // Contradiction
      ['Vegan', 'Non-Veg']                 // Impossible
    ],

    hierarchical: {
      // If multiple similar tags, show highest priority only
      priority: [
        'ReZ Signature',      // Highest
        'ReZ Preferred',
        'Trusted',
        'Verified'            // Lowest
      ]
    },

    maxTagsPerItem: {
      product: 10,
      merchant: 20,
      offer: 8
    }
  },

  // Tag Lifecycle Management
  lifecycle: {
    autoExpiry: {
      'Trending': '7 days',
      'Flash Sale': 'Offer end time',
      'New Arrival': '30 days',
      'Seasonal': 'Season end date'
    },

    autoRenewal: {
      'Bestseller': 'Monthly review',
      'Top Rated': 'Weekly review',
      'Trusted': 'Quarterly review'
    },

    deprecationWarning: {
      notice: '30 days before tag removal',
      action: 'Email merchant/user',
      reason: 'Low performance or policy change'
    }
  }
};
```

---

## Summary: Tag System Statistics

**Total Tag Types: 200+**

### By Category:
- **Product Tags**: 45 (Admin: 25, Merchant: 15, Auto: 5)
- **Merchant Tags**: 38 (Admin: 28, Merchant: 10)
- **User Tags**: 52 (Admin: 22, User: 30)
- **Offer Tags**: 28 (Admin: 12, Merchant: 16)
- **Content Tags**: 18 (Admin: 8, Auto: 10)
- **Location Tags**: 19 (Admin: 15, Merchant: 4)

### By Assignment Authority:
- **Admin-Only**: 85 tags (42.5%)
- **Merchant-Managed**: 38 tags (19%)
- **User-Selected**: 30 tags (15%)
- **Auto-Generated**: 47 tags (23.5%)

### Control Distribution:
- **Platform Control (Admin)**: 132 tags (66%)
- **Business Control (Merchant)**: 38 tags (19%)
- **User Control**: 30 tags (15%)

This comprehensive tag system enables:
✅ Precise discovery and filtering
✅ Automated quality control
✅ Merchant marketing flexibility
✅ User personalization
✅ Platform-wide consistency
✅ Data-driven optimization

---

## J. Reports & Analytics (Continued from Section I)

### Analytics Dashboard Overview

```
┌─────────────────────────────────────────────────────────────┐
│ SUPER ADMIN ANALYTICS DASHBOARD                             │
├─────────────────────────────────────────────────────────────┤
│ Overview | Users | Merchants | Transactions | Coins | Tags  │
└─────────────────────────────────────────────────────────────┘

USER ANALYTICS
┌─────────────────────────────────────────────────────────────┐
│ User Growth                                                  │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │           📈 User Acquisition (Last 90 Days)            │ │
│ │ 60K ┤                                             ●      │ │
│ │ 50K ┤                                       ●            │ │
│ │ 40K ┤                                 ●                  │ │
│ │ 30K ┤                           ●                        │ │
│ │ 20K ┤                     ●                              │ │
│ │ 10K ┤               ●                                    │ │
│ │   0 └─────────────────────────────────────────────────  │ │
│ │     Oct          Nov          Dec          Jan          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Key Metrics:                                                 │
│ - DAU: 12,456 (↑ 12% vs last week)                         │
│ - MAU: 50,234 (↑ 23% vs last month)                        │
│ - DAU/MAU Ratio: 0.248 (Good engagement)                   │
│ - New Users (30d): 8,234                                    │
│ - Churn Rate: 5.2% (Acceptable)                             │
│                                                              │
│ Cohort Analysis:                                             │
│ Month 1 Retention: 68% | Month 3: 45% | Month 6: 32%       │
│                                                              │
│ User Segmentation:                                           │
│ Regular: 75% | Active: 18% | Premium: 5% | Privé: 2%       │
│                                                              │
│ [View Details] [Export Data] [Custom Report]                │
└─────────────────────────────────────────────────────────────┘
```

---

## K. System Configuration & Advanced Features

### Advanced Security Features

#### Two-Factor Authentication (2FA) System
```
┌─────────────────────────────────────────────────────────────┐
│ 2FA CONFIGURATION                                            │
├─────────────────────────────────────────────────────────────┤
│ Enabled For:                                                 │
│ ☑ Admin Users (Mandatory)                                   │
│ ☑ Merchant Users (Mandatory for payouts)                    │
│ ☑ Regular Users (Optional, recommended for wallet >₹10K)    │
│ ☑ Privé Users (Mandatory)                                   │
│                                                              │
│ 2FA Methods:                                                 │
│ ☑ SMS OTP                                                   │
│ ☑ Email OTP                                                 │
│ ☑ Authenticator App (Google Authenticator, Authy)          │
│ ☑ Biometric (Fingerprint, Face ID) - Mobile only           │
│                                                              │
│ Security Rules:                                              │
│ - 2FA required for:                                         │
│   • Login from new device                                   │
│   • Wallet transactions >₹5,000                             │
│   • Profile email/phone change                              │
│   • Bank account updates                                    │
│   • Admin actions (bulk operations, deletions)              │
│                                                              │
│ Backup Codes:                                                │
│ - Generate 10 one-time backup codes                         │
│ - Allow users to download/print                             │
│ - Track usage                                                │
│                                                              │
│ Trusted Devices:                                             │
│ - Remember device for 30 days                                │
│ - Max 5 trusted devices                                      │
│ - View/revoke trusted devices                               │
│                                                              │
│ [Configure] [Test 2FA] [View Adoption Rate]                 │
└─────────────────────────────────────────────────────────────┘
```

#### Privacy Center & GDPR Compliance
```
┌─────────────────────────────────────────────────────────────┐
│ PRIVACY CENTER MANAGEMENT                                    │
├─────────────────────────────────────────────────────────────┤
│ User Rights Management:                                      │
│                                                              │
│ 1. Right to Access                                           │
│    - Users can download all their data                      │
│    - Format: JSON export                                     │
│    - Includes: profile, transactions, coins, content         │
│    - Processing time: 24 hours                               │
│    - Requests this month: 23                                 │
│                                                              │
│ 2. Right to Deletion (Right to be Forgotten)                │
│    - User-initiated account deletion                         │
│    - 30-day grace period (can cancel)                        │
│    - After 30 days: permanent deletion                       │
│    - Retain: transaction records (legal requirement - 7y)    │
│    - Anonymize: UGC content (keep but remove identity)       │
│    - Deletion requests this month: 12                        │
│                                                              │
│ 3. Right to Rectification                                    │
│    - Users can edit their data                               │
│    - Admin can verify/approve changes                        │
│                                                              │
│ 4. Consent Management                                        │
│    - Marketing emails: ☑ Opt-in required                    │
│    - SMS notifications: ☑ Opt-in required                   │
│    - Push notifications: ☐ Opt-out allowed                  │
│    - Data sharing with partners: ☑ Explicit consent         │
│    - Consent withdrawal: Instant                             │
│                                                              │
│ 5. Data Retention Policies                                   │
│    - Active users: Indefinite                                │
│    - Inactive users (2 years): Email warning → Delete       │
│    - Deleted accounts: 7 years (transaction records only)    │
│    - Logs: 1 year                                            │
│    - Analytics data: 2 years                                 │
│                                                              │
│ GDPR Compliance Dashboard:                                   │
│ ✅ Privacy policy published & version controlled            │
│ ✅ Cookie consent banner implemented                         │
│ ✅ Data processing agreements with vendors                   │
│ ✅ DPO (Data Protection Officer) assigned                    │
│ ✅ Breach notification process documented                    │
│ ✅ Regular privacy audits scheduled                          │
│                                                              │
│ [Export User Data] [Process Deletion] [Audit Trail]         │
└─────────────────────────────────────────────────────────────┘
```

### A/B Testing Platform
```
┌─────────────────────────────────────────────────────────────┐
│ A/B TESTING CONTROL CENTER                                   │
├─────────────────────────────────────────────────────────────┤
│ Active Experiments: 5 | Completed: 23 | Draft: 3            │
│                                                              │
│ EXPERIMENT #AB-045 - Coin Reward Amount Test                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Hypothesis:                                              │ │
│ │ Increasing first-purchase coin reward from 100 to 200   │ │
│ │ will increase conversion rate by 15%+                   │ │
│ │                                                          │ │
│ │ Variants:                                                │ │
│ │ Control (A): 100 coins - 50% traffic                    │ │
│ │ Variant (B): 200 coins - 50% traffic                    │ │
│ │                                                          │ │
│ │ Target Audience:                                         │ │
│ │ New users, first 7 days, Mumbai/Delhi/Bangalore         │ │
│ │ Sample size: 10,000 users (5,000 each)                  │ │
│ │                                                          │ │
│ │ Duration: Jan 1 - Jan 14 (14 days)                      │ │
│ │ Status: 🟢 Running (Day 8 of 14)                        │ │
│ │                                                          │ │
│ │ Results (So Far):                                        │ │
│ │              Control (A)  Variant (B)  Lift             │ │
│ │ Users:       4,234        4,189        -                │ │
│ │ Conversions: 423 (10.0%)  587 (14.0%) +40% ✅          │ │
│ │ Revenue:     ₹2,11,500    ₹2,93,500   +38.8% ✅        │ │
│ │ Coin Cost:   ₹42,340      ₹1,17,400   +177% ⚠️         │ │
│ │ Net Profit:  ₹1,69,160    ₹1,76,100   +4.1% ⚠️         │ │
│ │                                                          │ │
│ │ Statistical Significance: 95% (✅ Significant)           │ │
│ │                                                          │ │
│ │ Recommendation:                                          │ │
│ │ ⚠️ Variant B wins on conversion (+40%) but higher      │ │
│ │    coin cost reduces net profit to only +4%. Consider  │ │
│ │    testing 150 coins as middle ground.                  │ │
│ │                                                          │ │
│ │ [Stop Test] [Declare Winner] [Extend Duration]          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Create New Test] [View All Tests] [Test Templates]         │
└─────────────────────────────────────────────────────────────┘
```

### Marketing Automation Workflows
```
┌─────────────────────────────────────────────────────────────┐
│ MARKETING AUTOMATION - Workflow Builder                      │
├─────────────────────────────────────────────────────────────┤
│ Active Workflows: 12 | Paused: 3 | Draft: 2                │
│                                                              │
│ WORKFLOW: Cart Abandonment Recovery                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                          │ │
│ │ [TRIGGER]                                                │ │
│ │    User adds items to cart                              │ │
│ │    but doesn't checkout                                 │ │
│ │    for 2 hours                                           │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [WAIT: 2 hours]                                          │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [CONDITION]                                              │ │
│ │    Has user completed purchase?                          │ │
│ │         │                                                │ │
│ │    No   │   Yes → Exit                                  │ │
│ │         ▼                                                │ │
│ │ [ACTION 1: Send Push Notification]                       │ │
│ │    "Your cart is waiting! Complete purchase             │ │
│ │     & earn 50 bonus coins"                              │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [WAIT: 6 hours]                                          │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [CONDITION]                                              │ │
│ │    Has user completed purchase?                          │ │
│ │         │                                                │ │
│ │    No   │   Yes → Exit                                  │ │
│ │         ▼                                                │ │
│ │ [ACTION 2: Send Email]                                   │ │
│ │    Subject: "We saved your cart + 10% OFF!"            │ │
│ │    Include: Cart items, 10% discount code               │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [WAIT: 24 hours]                                         │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [CONDITION]                                              │ │
│ │    Has user completed purchase?                          │ │
│ │         │                                                │ │
│ │    No   │   Yes → Exit                                  │ │
│ │         ▼                                                │ │
│ │ [ACTION 3: Send WhatsApp]                                │ │
│ │    "Last chance! Your 10% OFF expires in 2 hours"       │ │
│ │         │                                                │ │
│ │         ▼                                                │ │
│ │ [END]                                                    │ │
│ │                                                          │ │
│ │ Performance (Last 30 Days):                              │ │
│ │ - Triggered: 2,345 times                                 │ │
│ │ - Recovered: 423 carts (18% recovery rate)              │ │
│ │ - Revenue recovered: ₹2,11,500                           │ │
│ │ - Push open rate: 34%                                    │ │
│ │ - Email open rate: 28%                                   │ │
│ │ - WhatsApp open rate: 67%                                │ │
│ │                                                          │ │
│ │ [Edit Workflow] [Pause] [Clone] [Analytics]             │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Other Active Workflows:                                      │
│ • Welcome Series (New users)                                 │
│ • Re-engagement (Dormant users - 30 days inactive)          │
│ • Birthday Campaign                                          │
│ • Referral Reminder (Users who haven't referred)            │
│ • Review Request (7 days post-purchase)                     │
│ • Coin Expiry Warning (30 days before expiry)               │
│ • Win-back (Churned users - 90 days inactive)               │
│                                                              │
│ [Create Workflow] [Templates Library] [View All]            │
└─────────────────────────────────────────────────────────────┘
```

---

# 🔧 SYSTEM 2: OPERATIONS ADMIN DASHBOARD

## Purpose
Used by city managers, onboarding teams, event managers, and marketing teams to execute day-to-day operations.

---

## A. City Dashboard

### City Operations Overview
```
┌─────────────────────────────────────────────────────────────┐
│ CITY OPERATIONS - Mumbai                                     │
├─────────────────────────────────────────────────────────────┤
│ Active Merchants: 567 (Online: 434 | Offline: 133)         │
│ Active Users: 12,456 (DAU) | 45,678 (MAU)                  │
│ Today's GMV: ₹5,67,890                                      │
│ Active Events: 8                                             │
│                                                              │
│ Top Performing Areas:                                        │
│ 1. Bandra - 89 merchants, ₹1,23,456 GMV                    │
│ 2. Andheri - 78 merchants, ₹98,765 GMV                     │
│ 3. Powai - 67 merchants, ₹87,654 GMV                       │
│                                                              │
│ Areas Needing Attention:                                     │
│ ⚠️ Thane - Only 12 merchants (Target: 50)                   │
│ ⚠️ Navi Mumbai - Low user engagement (15% vs 35% avg)      │
│                                                              │
│ This Week Goals:                                             │
│ □ Onboard 20 new merchants (Progress: 12/20)                │
│ □ Launch 2 college events (Progress: 1/2)                   │
│ □ Activate 500 new users (Progress: 234/500)                │
│                                                              │
│ [View All Areas] [Onboarding Pipeline] [Event Calendar]     │
└─────────────────────────────────────────────────────────────┘
```

---

## B. Merchant Onboarding Tool

### Onboarding Pipeline
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT ONBOARDING PIPELINE - Mumbai                        │
├─────────────────────────────────────────────────────────────┤
│ Pipeline Status:                                             │
│ Leads: 45 → Contacted: 23 → Applied: 12 → Verified: 5      │
│                                                              │
│ MY TASKS (Rahul - Onboarding Manager):                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🔴 URGENT (SLA: <24h)                                    │ │
│ │                                                          │ │
│ │ M-234 - Starbucks (Bandra)                               │ │
│ │ Status: Documents uploaded, pending verification        │ │
│ │ Submitted: 18 hours ago                                  │ │
│ │ Action: [Review Documents] [Approve] [Request More]     │ │
│ │                                                          │ │
│ │ M-235 - Paradise Biryani (Andheri)                      │ │
│ │ Status: Applied, pending document upload                │ │
│ │ Submitted: 20 hours ago                                  │ │
│ │ Action: [Send Reminder] [Call Merchant] [Escalate]      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🟡 MEDIUM (SLA: <72h)                                    │ │
│ │                                                          │ │
│ │ M-236 - Nike Store (Phoenix Mall)                        │ │
│ │ Status: Verification done, pending QR generation        │ │
│ │ Submitted: 2 days ago                                    │ │
│ │ Action: [Generate QR] [Schedule Training] [Activate]    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Quick Actions:                                               │
│ [Add New Lead] [Bulk Import Leads] [View All Applications]  │
│ [My Performance] [Team Leaderboard]                         │
└─────────────────────────────────────────────────────────────┘
```

### Merchant Application Review
```
┌─────────────────────────────────────────────────────────────┐
│ MERCHANT APPLICATION REVIEW - M-234 Starbucks               │
├─────────────────────────────────────────────────────────────┤
│ Business Details:                                            │
│ Name: Starbucks Coffee India Pvt Ltd                        │
│ Store Name: Starbucks Bandra West                           │
│ Category: Food & Dining → Cafe                              │
│ Address: Linking Road, Bandra West, Mumbai 400050           │
│ Contact: +91 98765 43210 | manager@starbucks-bandra.com     │
│                                                              │
│ Documents Uploaded:                                          │
│ ✅ Business Registration (PAN: AABCS1234F)                  │
│ ✅ GST Certificate (GSTIN: 27AABCS1234F1Z5)                 │
│ ✅ FSSAI License (Lic#: 12345678901234)                     │
│ ✅ Trade License (TL/2024/12345)                             │
│ ✅ Bank Account Proof (HDFC Bank, A/c: ****1234)            │
│ ✅ Store Photos (5 uploaded)                                │
│                                                              │
│ Verification Checklist:                                      │
│ ☑ Business name matches PAN                                 │
│ ☑ GST number verified via GSTN portal                       │
│ ☑ FSSAI license valid (expires: Dec 2025)                   │
│ ☑ Bank account name matches business name                   │
│ ☑ Store location verified on Google Maps                    │
│ ☑ Phone number verified (OTP sent & confirmed)              │
│ ☐ Physical verification (Schedule visit)                    │
│                                                              │
│ Proposed Package: Gold (₹9,999/month, 10% commission)       │
│ Modes Eligible:                                              │
│ ☑ Halal ☑ Vegan ☑ Veg ☐ Adult ☑ Occasion ☑ Vibes          │
│                                                              │
│ Onboarding Manager Notes:                                    │
│ [Premium brand, verified location, all docs in order...]    │
│                                                              │
│ Actions:                                                     │
│ [❌ Reject with Reason] [⚠️ Request More Info] [✅ Approve] │
└─────────────────────────────────────────────────────────────┘
```

---

## C. College & Corporate Module

### College Partnership Management
```
┌─────────────────────────────────────────────────────────────┐
│ COLLEGE PARTNERSHIPS - Mumbai Region                         │
├─────────────────────────────────────────────────────────────┤
│ Active Partnerships: 12 colleges                             │
│ Student Ambassadors: 45                                      │
│ Student Users: 8,234                                         │
│ Student GMV (This Month): ₹4,56,789                         │
│                                                              │
│ Partnership List:                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ IIT Bombay                                               │ │
│ │ Partnership Status: ✅ Active (MoU signed: Jan 2024)    │ │
│ │ Student Ambassadors: 5                                   │ │
│ │ Registered Students: 2,345 / ~8,000 (29% penetration)   │ │
│ │ This Month GMV: ₹1,23,456                                │ │
│ │ Active Offers: Student discount 15% at campus stores    │ │
│ │ Upcoming Events:                                         │ │
│ │ - Mood Indigo 2024 (Dec 27-30) - 🔴 LIVE               │ │
│ │ - Sports Fest (Feb 2024) - 🟡 Planning                  │ │
│ │                                                          │ │
│ │ Ambassadors:                                             │ │
│ │ - Rahul Sharma (Lead) - 234 referrals, ₹23K GMV        │ │
│ │ - Priya Patel - 189 referrals, ₹18K GMV                │ │
│ │ - Arjun Mehta - 156 referrals, ₹15K GMV                │ │
│ │                                                          │ │
│ │ [View Details] [Manage Ambassadors] [Create Event]      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Add New College] [Ambassador Recruitment] [Event Calendar] │
└─────────────────────────────────────────────────────────────┘
```

### Student Ambassador Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ STUDENT AMBASSADOR MANAGEMENT                                │
├─────────────────────────────────────────────────────────────┤
│ Top Performers (This Month):                                 │
│ 1. Rahul Sharma (IIT-B) - 234 referrals, ₹23K GMV          │
│    Reward: ₹5,000 bonus + 5,000 coins                       │
│ 2. Priya Patel (IIT-B) - 189 referrals, ₹18K GMV           │
│    Reward: ₹4,000 bonus + 4,000 coins                       │
│ 3. Sneha Kumar (VJTI) - 176 referrals, ₹17K GMV            │
│    Reward: ₹3,500 bonus + 3,500 coins                       │
│                                                              │
│ Ambassador Tasks:                                            │
│ • Share referral code on campus WhatsApp groups              │
│ • Organize ReZ awareness events                              │
│ • Collect merchant leads near campus                         │
│ • Create content (reels, posts) about ReZ                    │
│ • Coordinate with college administration                     │
│                                                              │
│ Commission Structure:                                         │
│ - ₹50 per successful referral (first purchase)               │
│ - 2% of referee's GMV (first 3 months)                       │
│ - Bonus: ₹5,000 for 200+ referrals/month                    │
│                                                              │
│ [Recruit Ambassadors] [Track Performance] [Pay Commissions]  │
└─────────────────────────────────────────────────────────────┘
```

---

## D. Campaign Execution

### Campaign Creator (Operations Level)
```
┌─────────────────────────────────────────────────────────────┐
│ CREATE CITY-SPECIFIC CAMPAIGN                                │
├─────────────────────────────────────────────────────────────┤
│ Campaign Name: [Weekend Food Fest - Mumbai]                 │
│                                                              │
│ Duration:                                                    │
│ Start: [Sat, 28 Dec 2024, 6:00 PM]                         │
│ End: [Sun, 29 Dec 2024, 11:59 PM]                          │
│                                                              │
│ Target Audience:                                             │
│ ☑ City: Mumbai only                                         │
│ ☑ Active users (last 30 days)                               │
│ ☑ Foodies segment                                           │
│ ☐ New users                                                 │
│ Estimated Reach: 8,234 users                                 │
│                                                              │
│ Participating Merchants:                                     │
│ [Select from Mumbai merchants]                               │
│ Selected: 45 restaurants                                     │
│                                                              │
│ Offer:                                                       │
│ Type: [2x ReZ Coins ▼]                                      │
│ Details: Earn 2x coins on all food orders                   │
│                                                              │
│ Marketing Channels:                                          │
│ ☑ Push Notification (₹2,000 - 8,234 users)                 │
│ ☑ In-app Banner (₹3,000)                                   │
│ ☑ WhatsApp (₹3,000 - 5,678 users with consent)             │
│ ☐ Email (₹1,000)                                            │
│                                                              │
│ Budget:                                                      │
│ Marketing: ₹8,000                                            │
│ Estimated Coins: ₹50,000 (assuming 500 orders × ₹100 avg)  │
│ Total Budget: ₹58,000                                        │
│                                                              │
│ Approval Required: ☑ City Manager sign-off                  │
│                                                              │
│ [Save Draft] [Request Approval] [Schedule]                  │
└─────────────────────────────────────────────────────────────┘
```

---

## E. Team Performance Tracking

### Operations Team Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ OPERATIONS TEAM PERFORMANCE - Mumbai                         │
├─────────────────────────────────────────────────────────────┤
│ Team Size: 12 (6 Onboarding, 3 Events, 2 Marketing, 1 Mgr) │
│                                                              │
│ This Month Performance:                                      │
│                                                              │
│ Onboarding Team:                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Name          Role      Target  Achieved  Status         │ │
│ │ Rahul K.      Sr. Mgr   20      24        ✅ 120%        │ │
│ │ Priya S.      Manager   15      18        ✅ 120%        │ │
│ │ Arjun M.      Manager   15      12        ⚠️ 80%         │ │
│ │ Sneha P.      Executive 10      11        ✅ 110%        │ │
│ │ Amit T.       Executive 10      7         ❌ 70%         │ │
│ │ Neha R.       Executive 10      9         ⚠️ 90%         │ │
│ │                                                          │ │
│ │ Total Target: 80 | Achieved: 81 (101%) ✅               │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Events Team:                                                 │
│ - Events organized: 3 (Target: 2) ✅                        │
│ - Tickets sold: 1,234 (Target: 1,000) ✅                    │
│ - Revenue: ₹6,17,000 (Target: ₹5,00,000) ✅                │
│                                                              │
│ Marketing Team:                                              │
│ - Campaigns launched: 5 (Target: 4) ✅                      │
│ - New user acquisition: 734 (Target: 500) ✅                │
│ - Campaign ROI: 3.8x (Target: 3x) ✅                        │
│                                                              │
│ Incentives This Month: ₹45,000 (team bonuses)               │
│                                                              │
│ [Individual Reports] [Set Targets] [Process Incentives]     │
└─────────────────────────────────────────────────────────────┘
```

---

# 🏪 SYSTEM 3: MERCHANT DASHBOARD

## Purpose
Dashboard for individual merchants to manage their ReZ presence, offers, transactions, and analytics.

---

## A. Merchant Home Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│ WELCOME BACK, STARBUCKS BANDRA WEST                          │
├─────────────────────────────────────────────────────────────┤
│ Today's Overview (Live)                                      │
│ ┌──────────────┬──────────────┬──────────────┬────────────┐ │
│ │ Revenue      │ Orders       │ Coins Issued │ Avg Order  │ │
│ │ ₹12,456      │ 34           │ 1,245        │ ₹366       │ │
│ │ ↑ 12% vs ytd │ ↑ 8% vs ytd  │ ↑ 15% vs ytd │ ↓ 3% vs ytd│ │
│ └──────────────┴──────────────┴──────────────┴────────────┘ │
│                                                              │
│ Quick Stats:                                                 │
│ - This Week: ₹67,890 revenue (234 orders)                   │
│ - This Month: ₹2,45,678 revenue (890 orders)                │
│ - ReZ-driven customers: 67% of total orders                  │
│                                                              │
│ Quick Actions:                                               │
│ [Create New Offer] [View Today's Orders] [Check Settlements]│
│ [Respond to Reviews] [Update Menu] [View Analytics]         │
│                                                              │
│ Pending Actions (3):                                         │
│ ⚠️ 12 new reviews awaiting response                         │
│ ⚠️ Settlement pending (₹98,496 - processes Monday)          │
│ ✅ Offer "Happy Hours 20% OFF" expires in 2 days            │
│                                                              │
│ Performance This Month:                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │        📈 Revenue Trend (Last 30 Days)                   │ │
│ │ 15K ┤                                           ●        │ │
│ │ 12K ┤                                     ●              │ │
│ │ 10K ┤                               ●                    │ │
│ │  8K ┤                         ●                          │ │
│ │  5K ┤                   ●                                │ │
│ │  2K ┤             ●                                      │ │
│ │   0 └───────────────────────────────────────────────    │ │
│ │     Nov 28    Dec 5     Dec 12    Dec 19    Dec 26     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Top Selling Items Today:                                     │
│ 1. Caffe Latte - 12 orders (₹1,680)                        │
│ 2. Cappuccino - 8 orders (₹1,120)                          │
│ 3. Chocolate Muffin - 6 orders (₹720)                      │
└─────────────────────────────────────────────────────────────┘
```

---

## B. Merchant Offer Management

### Create New Offer Wizard
```
┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW OFFER - Step 1 of 6                              │
├─────────────────────────────────────────────────────────────┤
│ STEP 1: Offer Details                                       │
│                                                              │
│ Offer Title: [Happy Hour - 20% OFF on all beverages]       │
│ (max 50 characters)                                          │
│                                                              │
│ Offer Type:                                                  │
│ ○ Flat Discount (₹X off)                                    │
│ ● Percentage Off (X% off)                                   │
│ ○ Cashback (X% cashback)                                    │
│ ○ Buy 1 Get 1 (BOGO)                                        │
│ ○ Free Item (with purchase)                                 │
│ ○ Combo Deal (bundle pricing)                               │
│ ○ Extra Coins (bonus ReZ Coins)                             │
│                                                              │
│ [Cancel] [Next: Discount Configuration →]                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW OFFER - Step 2 of 6                              │
├─────────────────────────────────────────────────────────────┤
│ STEP 2: Discount Configuration                              │
│                                                              │
│ Discount: [20] %                                             │
│                                                              │
│ Maximum Discount Cap: ₹ [100]                                │
│ (Optional - leave blank for no cap)                         │
│                                                              │
│ Minimum Order Value: ₹ [200]                                 │
│ (Minimum purchase required to avail offer)                  │
│                                                              │
│ Additional ReZ Coins (Optional):                             │
│ ☐ Offer bonus ReZ Coins: [0] coins                          │
│                                                              │
│ Applies To:                                                  │
│ ○ Entire bill                                                │
│ ● Specific items: [Select items ▼]                          │
│   Selected: All beverages (23 items)                        │
│                                                              │
│ [← Back] [Next: Validity & Timing →]                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW OFFER - Step 3 of 6                              │
├─────────────────────────────────────────────────────────────┤
│ STEP 3: Validity & Timing                                   │
│                                                              │
│ Start Date: [27 Dec 2024] Time: [17:00]                    │
│ End Date: [31 Dec 2024] Time: [20:00]                      │
│                                                              │
│ Active Hours (Daily):                                        │
│ ☐ All Day                                                   │
│ ● Specific Hours: From [17:00] To [20:00]                  │
│   (5:00 PM to 8:00 PM - Happy Hours)                        │
│                                                              │
│ Active Days:                                                 │
│ ☑ Mon ☑ Tue ☑ Wed ☑ Thu ☑ Fri □ Sat □ Sun                 │
│ (Weekdays only)                                              │
│                                                              │
│ Auto-Renew:                                                  │
│ ☐ Automatically renew this offer weekly                     │
│                                                              │
│ [← Back] [Next: User Targeting →]                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW OFFER - Step 4 of 6                              │
├─────────────────────────────────────────────────────────────┤
│ STEP 4: User Targeting (Who can use this offer?)            │
│                                                              │
│ Target Audience:                                             │
│ ● All Users                                                  │
│ ○ New Users Only (first purchase at your store)             │
│ ○ Returning Customers (previous purchase required)          │
│ ○ Birthday Special (user's birth month)                     │
│ ○ Students Only (student verified)                          │
│ ○ Privé Members Only                                        │
│                                                              │
│ Usage Limits:                                                │
│ Max uses per user: [1] per day                              │
│ Total redemption limit: [500] (optional)                     │
│                                                              │
│ [← Back] [Next: Preview & Tags →]                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW OFFER - Step 5 of 6                              │
├─────────────────────────────────────────────────────────────┤
│ STEP 5: Offer Tags & Categories                             │
│                                                              │
│ Timing Tags (Auto-suggested based on your hours):            │
│ ☑ Happy Hours                                               │
│ ☐ Lunch Deal                                                │
│ ☐ Dinner Special                                            │
│ ☐ Weekend Special                                           │
│                                                              │
│ Occasion Tags:                                               │
│ ☐ Diwali    ☐ Christmas  ☐ New Year  ☐ Valentine           │
│ ☐ Eid       ☐ Holi       ☐ Other                           │
│                                                              │
│ Offer Image (Optional but recommended):                      │
│ [Upload Image] (1080x1080, max 2MB)                         │
│ ☐ Use our template designer                                │
│                                                              │
│ Terms & Conditions:                                          │
│ [Not valid with other offers. Subject to availability...]   │
│                                                              │
│ [← Back] [Next: Review & Publish →]                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CREATE NEW OFFER - Step 6 of 6                              │
├─────────────────────────────────────────────────────────────┤
│ STEP 6: Review & Publish                                    │
│                                                              │
│ Offer Summary:                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Happy Hour - 20% OFF on all beverages                   │ │
│ │                                                          │ │
│ │ 💰 Discount: 20% OFF (max ₹100)                         │ │
│ │ 📋 Min Order: ₹200                                       │ │
│ │ 📅 Valid: 27-31 Dec 2024                                │ │
│ │ 🕐 Hours: 5:00 PM - 8:00 PM (Weekdays only)             │ │
│ │ 👥 Target: All users                                     │ │
│ │ 🔢 Limit: 1 per user/day, 500 total                     │ │
│ │ 🏷️ Tags: Happy Hours                                    │ │
│ │                                                          │ │
│ │ Estimated Cost (if fully redeemed):                      │ │
│ │ - 500 users × ₹100 avg discount = ₹50,000              │ │
│ │ - Expected revenue: ₹1,50,000 (500 × ₹300 avg order)   │ │
│ │ - Net revenue after discount: ₹1,00,000                 │ │
│ │ - ROI: 2x                                                │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Visibility:                                                  │
│ ☑ Show on your store page                                   │
│ ☑ Show in "Offers Near You"                                 │
│ ☑ Push notification to nearby users (₹2,000 - req approval)│
│                                                              │
│ [← Back] [Save as Draft] [Publish Offer ✅]                │
└─────────────────────────────────────────────────────────────┘
```

---

## C. Merchant Transaction Management

### Transaction List
```
┌─────────────────────────────────────────────────────────────┐
│ TRANSACTIONS                                                 │
├─────────────────────────────────────────────────────────────┤
│ Filters: [Today ▼] [All Status ▼] [All Types ▼]            │
│ Search: [Order ID, Customer name, phone...]                 │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ #T78901 - 2:45 PM - ₹450 - ✅ Completed                 ││
│ │ Customer: Priya S. (+91 98765 xxxxx)                     ││
│ │ Items: Caffe Latte × 2, Chocolate Muffin × 1            ││
│ │ Payment: UPI (Google Pay)                                ││
│ │ Coins Earned: 45 ReZ Coins + 36 Starbucks Coins         ││
│ │ Offer Used: Happy Hour 20% OFF (-₹90)                   ││
│ │ Your Net: ₹360 (after ₹45 commission, ₹36 branded coins)││
│ │ [View Details] [Download Invoice] [Issue Refund]         ││
│ └──────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ #T78900 - 2:30 PM - ₹680 - ✅ Completed                 ││
│ │ Customer: Rahul K. (+91 98765 xxxxx)                     ││
│ │ Items: Cappuccino × 1, Sandwich × 2, Brownie × 1        ││
│ │ Payment: ReZ Wallet (₹200 coins) + UPI (₹480)           ││
│ │ Coins Redeemed: 200 ReZ Coins                            ││
│ │ Coins Earned: 68 new coins                               ││
│ │ Your Net: ₹612                                           ││
│ │ [View Details] [Download Invoice]                        ││
│ └──────────────────────────────────────────────────────────┘│
│                                                              │
│ [Export CSV] [Print Report] [View Analytics]                │
└─────────────────────────────────────────────────────────────┘
```

---

## D. Customer Insights (Merchant View)

```
┌─────────────────────────────────────────────────────────────┐
│ CUSTOMER INSIGHTS                                            │
├─────────────────────────────────────────────────────────────┤
│ Total Customers: 1,234                                       │
│ New This Month: 89                                           │
│ Repeat Rate: 68%                                             │
│                                                              │
│ Customer Segments:                                           │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ VIP Customers (Top 10%)                                  │ │
│ │ 123 customers | Avg spend: ₹3,456/month                 │ │
│ │ Contribution: 45% of revenue                             │ │
│ │ Retention: 92%                                           │ │
│ │                                                          │ │
│ │ Top VIP: Arjun M. - 45 visits, ₹15,678 total           │ │
│ │ Action: [Send Thank You Message] [Exclusive Offer]      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Regular Customers                                        │ │
│ │ 567 customers | Avg spend: ₹890/month                   │ │
│ │ Contribution: 40% of revenue                             │ │
│ │ Retention: 65%                                           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ At-Risk Customers (Haven't visited in 30+ days)         │ │
│ │ 234 customers | Last avg spend: ₹456                    │ │
│ │ Potential lost revenue: ₹1,06,704/month                 │ │
│ │                                                          │ │
│ │ Recommended Action:                                      │ │
│ │ [Send Win-Back Offer] (Template: "We miss you! 25% OFF")│ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Customer Demographics:                                       │
│ - Age: 18-24 (45%) | 25-34 (35%) | 35-44 (15%) | 45+ (5%) │
│ - Gender: Female (55%) | Male (42%) | Other (3%)            │
│ - Top Locations: Bandra (34%), Andheri (28%), Powai (18%) │
│                                                              │
│ Purchase Behavior:                                           │
│ - Avg Order Value: ₹366                                     │
│ - Avg Items per Order: 2.3                                  │
│ - Peak Hours: 8-10 AM (breakfast), 5-8 PM (evening)        │
│ - Peak Days: Friday, Saturday                               │
│                                                              │
│ [View Full List] [Export Data] [Create Segment Campaign]    │
└─────────────────────────────────────────────────────────────┘
```

---

## E. Reviews & Ratings Management

```
┌─────────────────────────────────────────────────────────────┐
│ REVIEWS & RATINGS                                            │
├─────────────────────────────────────────────────────────────┤
│ Overall Rating: ⭐ 4.8 / 5.0 (234 reviews)                  │
│ This Month: 23 new reviews (↑ 12% vs last month)           │
│                                                              │
│ Rating Breakdown:                                            │
│ 5★ ████████████████████████████████░░ 78% (182)            │
│ 4★ ███████████░░░░░░░░░░░░░░░░░░░░░░ 15% (35)             │
│ 3★ ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4% (9)              │
│ 2★ █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2% (5)              │
│ 1★ █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1% (3)              │
│                                                              │
│ Pending Response (12):                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ⭐⭐⭐⭐⭐ by Priya S. - 2 hours ago                      │ │
│ │ "Amazing coffee! The ambiance is perfect and staff is   │ │
│ │  very friendly. Got 20% off via ReZ. Will visit again!" │ │
│ │                                                          │ │
│ │ Response: [____________________________________]         │ │
│ │ Template: ▼ Thank you for positive review              │ │
│ │ [Cancel] [Post Response ✅]                             │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ⭐⭐ by Rahul K. - 5 hours ago                           │ │
│ │ "Service was slow today. Waited 15 minutes for my      │ │
│ │  order. Coffee was good but the wait ruined it."        │ │
│ │                                                          │ │
│ │ ⚠️ Negative Review - Priority Response Required         │ │
│ │                                                          │ │
│ │ Response: [We sincerely apologize for the wait...]     │ │
│ │ Template: ▼ Apology for service issue                   │ │
│ │                                                          │ │
│ │ Internal Action:                                         │ │
│ │ ☐ Issue resolved (staff trained)                        │ │
│ │ ☐ Send goodwill offer to customer (20% OFF next visit) │ │
│ │                                                          │ │
│ │ [Flag as Fake] [Post Response ✅] [Send Offer]         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ Review Insights:                                             │
│ Most Mentioned (Positive):                                   │
│ • Coffee quality (89 mentions) ☕                           │
│ • Ambiance (67 mentions) 🏠                                 │
│ • Staff friendliness (56 mentions) 😊                       │
│                                                              │
│ Most Mentioned (Negative):                                   │
│ • Slow service (12 mentions) ⏰                             │
│ • Parking issues (8 mentions) 🅿️                           │
│                                                              │
│ [Request Reviews from Recent Customers] [View All Reviews]   │
└─────────────────────────────────────────────────────────────┘
```

---

**[Document continues with remaining sections...]**

I'll continue adding:
- F. Merchant Analytics & Reports
- G. Financial Management
- H. Marketing Tools
- I. Loyalty Program Builder (NEW - Missing Feature)
- J. Settings
- Technical Architecture (React Native)
- Database Schema
- API Architecture
- Development Roadmap
- Team & Budget

The file is getting very large (3,200+ lines). Should I continue in the same file or would you like me to create separate documentation files for each major section?
