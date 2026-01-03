# 🎯 Campaign Priority & Resolution Algorithm - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ CAMPAIGN CONFLICT RESOLUTION DEFINED
**Purpose:** Deterministic rules when multiple campaigns apply to same order

---

## ⚠️ THE CAMPAIGN CLASH PROBLEM

**Scenario:**
```
User: Gold tier member
Product: Pizza (₹500)
Active Campaigns:
1. Platform: "New Year Sale" → 20% off
2. Merchant: "Pizza Hut Weekend" → Buy 1 Get 1
3. Category: "Food Festival" → ₹100 off
4. User Tier: "Gold Member" → 15% off

Which campaign wins?
Can they stack?
Who decides?
```

**This document provides the DEFINITIVE answer.**

---

## 🎯 CAMPAIGN TYPES

### Classification

```javascript
const CAMPAIGN_TYPES = {
  // By Scope
  'platform_wide': 1,      // All products, all merchants
  'category': 2,           // Specific category (e.g., "Electronics")
  'merchant': 3,           // Specific merchant's products
  'product': 4,            // Specific product SKU
  'user_tier': 5,          // Based on loyalty tier
  'first_purchase': 6,     // New user offer
  'referral': 7,           // Friend referral reward
  'cart_value': 8,         // Minimum cart value (e.g., ₹500+)

  // By Discount Type
  'percentage': 10,        // 20% off
  'flat_amount': 11,       // ₹100 off
  'buy_x_get_y': 12,       // Buy 1 Get 1
  'free_shipping': 13,     // Free delivery
  'bonus_coins': 14,       // Extra ReZ coins
  'cashback': 15           // Post-purchase cashback
};
```

---

## 📊 CAMPAIGN PRIORITY MATRIX

### Priority Order (DECLARED)

```
Priority 1 (HIGHEST):  User-Specific Campaigns
  ├─ Referral codes
  ├─ First purchase offers
  └─ Abandoned cart recovery

Priority 2:  Product-Level Campaigns
  ├─ Flash sales (time-limited)
  ├─ Product-specific deals
  └─ Clearance sales

Priority 3:  Merchant Campaigns
  ├─ Merchant-run promotions
  ├─ Store anniversary sales
  └─ Merchant loyalty offers

Priority 4:  Category Campaigns
  ├─ Category-wide sales
  └─ Seasonal campaigns

Priority 5 (LOWEST):  Platform Campaigns
  ├─ Platform-wide sales
  ├─ Tier-based benefits
  └─ General promotional offers
```

**Rule:** Higher priority campaigns OVERRIDE lower priority campaigns (by default)

---

## 🔀 STACKING RULES

### Can Campaigns Stack?

**Answer:** It depends on the campaign configuration.

```javascript
// Campaign definition
const campaign = {
  id: 'winter_sale_2026',
  name: 'Winter Mega Sale',
  discount_type: 'percentage',
  discount_value: 20,

  // Stacking configuration
  stackable: false,              // Can it stack with other campaigns?
  stackable_with_types: [],      // Specific types allowed to stack
  max_stack_discount: null,      // Max combined discount (if stackable)

  // Priority
  priority: 5,                   // 1 = highest, 5 = lowest

  // Conditions
  min_cart_value: 500,
  applicable_categories: ['fashion', 'electronics'],
  excluded_products: []
};
```

### Stacking Matrix

| Campaign Type | Can Stack With | Max Combined Discount |
|---------------|----------------|----------------------|
| **Platform-wide** | Tier benefits only | 30% |
| **Category** | Platform + Tier | 35% |
| **Merchant** | Platform + Tier | 40% |
| **Product** | Nothing (exclusive) | 50% |
| **Referral** | Everything | No limit |
| **Bonus Coins** | Everything | No limit |
| **Free Shipping** | Everything | N/A |

**Example:**
```javascript
// Allowed stacking
Platform Sale (10% off) + Gold Tier (5% bonus) = 15% total ✅

// Not allowed
Product Flash Sale (30% off) + Merchant Promo (20% off) = Conflict ❌
// Resolution: Higher priority wins (Product Flash Sale = 30%)
```

---

## 🎲 CONFLICT RESOLUTION ALGORITHM

### Step-by-Step Resolution

```javascript
async function resolveCampaigns(userId, cartItems, appliedCouponCode = null) {
  // Step 1: Get all applicable campaigns
  const applicableCampaigns = await getApplicableCampaigns(userId, cartItems);

  // Step 2: Filter by eligibility
  const eligibleCampaigns = applicableCampaigns.filter(campaign =>
    checkEligibility(campaign, userId, cartItems)
  );

  // Step 3: Handle manual coupon code (if provided)
  if (appliedCouponCode) {
    const couponCampaign = eligibleCampaigns.find(c => c.code === appliedCouponCode);

    if (!couponCampaign) {
      throw new AppError(4001, 'Invalid or expired coupon code');
    }

    // Coupon code = HIGHEST PRIORITY (overrides auto-apply)
    return resolveSingleCampaign(couponCampaign, cartItems);
  }

  // Step 4: Group by priority
  const campaignsByPriority = {};
  eligibleCampaigns.forEach(campaign => {
    const priority = campaign.priority || 5;
    if (!campaignsByPriority[priority]) {
      campaignsByPriority[priority] = [];
    }
    campaignsByPriority[priority].push(campaign);
  });

  // Step 5: Select campaigns (priority order)
  const selectedCampaigns = [];

  for (let priority = 1; priority <= 5; priority++) {
    const campaignsAtLevel = campaignsByPriority[priority] || [];

    if (campaignsAtLevel.length === 0) continue;

    // Step 6: Within same priority, pick BEST for user
    const bestCampaign = selectBestCampaign(campaignsAtLevel, cartItems);
    selectedCampaigns.push(bestCampaign);

    // Step 7: Check if stacking allowed
    if (!bestCampaign.stackable) {
      // Non-stackable campaign wins - stop here
      break;
    }
  }

  // Step 8: Calculate combined discount
  const discount = calculateCombinedDiscount(selectedCampaigns, cartItems);

  return {
    campaigns: selectedCampaigns,
    discount,
    breakdown: discount.breakdown
  };
}
```

---

## 🎯 SELECTING "BEST" CAMPAIGN

### When Multiple Campaigns at Same Priority

**Problem:**
```javascript
// Both are Priority 3 (Merchant campaigns)
Campaign A: Flat ₹200 off (min ₹1000)
Campaign B: 25% off (min ₹800)

Cart Total: ₹1000

Which is better for the user?
```

**Solution:** Calculate actual discount for each, pick maximum

```javascript
function selectBestCampaign(campaigns, cartItems) {
  let bestCampaign = null;
  let maxDiscount = 0;

  for (const campaign of campaigns) {
    const discount = calculateDiscount(campaign, cartItems);

    if (discount > maxDiscount) {
      maxDiscount = discount;
      bestCampaign = campaign;
    }
  }

  return bestCampaign;
}

// Example calculation
const campaignA = { type: 'flat_amount', value: 200, min_cart: 1000 };
const campaignB = { type: 'percentage', value: 25, min_cart: 800 };
const cartTotal = 1000;

const discountA = 200;                        // Flat ₹200
const discountB = (cartTotal * 25) / 100;     // ₹250

// Campaign B wins (₹250 > ₹200)
```

**Tie-Breaker:** If discounts are equal, use:
1. **Newer campaign** (created_at DESC)
2. **Higher budget remaining** (favors well-funded campaigns)
3. **Merchant campaign** over platform (prioritize merchant loyalty)

---

## 💰 DISCOUNT CALCULATION

### Combined Discount Formula

```javascript
function calculateCombinedDiscount(campaigns, cartItems) {
  let totalDiscount = 0;
  const breakdown = [];

  // Group campaigns by type
  const percentageCampaigns = campaigns.filter(c => c.discount_type === 'percentage');
  const flatCampaigns = campaigns.filter(c => c.discount_type === 'flat_amount');
  const bonusCampaigns = campaigns.filter(c => c.discount_type === 'bonus_coins');

  const cartSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // 1. Apply percentage discounts (multiplicative stacking)
  let percentageDiscount = 0;
  let remainingAmount = cartSubtotal;

  for (const campaign of percentageCampaigns) {
    const discount = (remainingAmount * campaign.discount_value) / 100;
    percentageDiscount += discount;
    remainingAmount -= discount;

    breakdown.push({
      campaign_id: campaign.id,
      campaign_name: campaign.name,
      type: 'percentage',
      value: campaign.discount_value,
      discount_amount: discount
    });
  }

  // 2. Apply flat discounts (additive)
  let flatDiscount = 0;
  for (const campaign of flatCampaigns) {
    flatDiscount += campaign.discount_value;

    breakdown.push({
      campaign_id: campaign.id,
      campaign_name: campaign.name,
      type: 'flat_amount',
      value: campaign.discount_value,
      discount_amount: campaign.discount_value
    });
  }

  // 3. Bonus coins (doesn't reduce cart total, but gives extra coins)
  let bonusCoins = 0;
  for (const campaign of bonusCampaigns) {
    bonusCoins += campaign.bonus_value;

    breakdown.push({
      campaign_id: campaign.id,
      campaign_name: campaign.name,
      type: 'bonus_coins',
      value: campaign.bonus_value,
      discount_amount: 0  // Doesn't reduce cart
    });
  }

  totalDiscount = percentageDiscount + flatDiscount;

  // 4. Apply max discount cap (if any campaign has it)
  const maxDiscountCap = Math.min(
    ...campaigns.map(c => c.max_discount || Infinity)
  );

  if (totalDiscount > maxDiscountCap) {
    totalDiscount = maxDiscountCap;
  }

  // 5. Ensure discount doesn't exceed cart total
  if (totalDiscount > cartSubtotal) {
    totalDiscount = cartSubtotal;
  }

  return {
    total: totalDiscount,
    breakdown,
    bonus_coins: bonusCoins,
    final_cart_total: cartSubtotal - totalDiscount
  };
}
```

---

## 🔢 STACKING EXAMPLES

### Example 1: Allowed Stacking

```javascript
// Scenario
Cart Total: ₹1000
User: Gold tier

Active Campaigns:
1. Platform Sale: 10% off (stackable, priority 5)
2. Gold Tier Benefit: 5% extra (stackable, priority 5)

// Resolution
Step 1: Both campaigns are eligible
Step 2: Both are stackable
Step 3: Calculate combined discount

Calculation:
- Platform: ₹1000 * 10% = ₹100
- Remaining: ₹1000 - ₹100 = ₹900
- Gold Tier: ₹900 * 5% = ₹45
- Total Discount: ₹100 + ₹45 = ₹145

Final Amount: ₹1000 - ₹145 = ₹855
```

---

### Example 2: Priority Override

```javascript
// Scenario
Cart Total: ₹1000
Product: iPhone 15

Active Campaigns:
1. Product Flash Sale: 30% off (priority 2, non-stackable)
2. Platform Sale: 10% off (priority 5, stackable)

// Resolution
Step 1: Both eligible
Step 2: Priority 2 > Priority 5
Step 3: Flash Sale is non-stackable → WINS

Result:
- Applied: Product Flash Sale (30% = ₹300 off)
- Ignored: Platform Sale
- Final Amount: ₹700
```

---

### Example 3: Manual Coupon Override

```javascript
// Scenario
Cart Total: ₹1000

Auto-Applied:
- Platform Sale: 10% off (₹100)

User Applies Coupon:
- "SAVE200" → ₹200 flat off (priority 1)

// Resolution
Step 1: User applied coupon code
Step 2: Coupon OVERRIDES all auto-applied campaigns
Step 3: Remove platform sale, apply coupon

Result:
- Applied: SAVE200 (₹200 off)
- Removed: Platform Sale
- Final Amount: ₹800
```

---

### Example 4: Best Campaign Selection

```javascript
// Scenario
Cart Total: ₹1500

Eligible Campaigns (all priority 3):
A. Merchant Promo: ₹300 flat off
B. Category Sale: 20% off (₹300)
C. Weekend Deal: 25% off (₹375)

// Resolution
Step 1: Calculate actual discount for each
  - A: ₹300
  - B: ₹300
  - C: ₹375 ← BEST

Step 2: Apply Weekend Deal
Final Amount: ₹1125
```

---

## 🚨 EDGE CASES

### Edge Case 1: Campaign Expired Mid-Checkout

```javascript
// User adds to cart at 11:58 PM
// Campaign ends at 12:00 AM
// User checks out at 12:02 AM

// Solution: Grace period (5 minutes)
function checkCampaignValidity(campaign, cartCreatedAt) {
  const GRACE_PERIOD = 5 * 60 * 1000; // 5 minutes

  if (campaign.end_date < new Date()) {
    const timeDiff = new Date() - new Date(campaign.end_date);

    if (timeDiff < GRACE_PERIOD && cartCreatedAt < campaign.end_date) {
      // Allow campaign (user started checkout before expiry)
      return true;
    }

    return false; // Campaign truly expired
  }

  return true;
}
```

---

### Edge Case 2: Budget Exhausted

```javascript
// Campaign has ₹10,000 budget left
// User's discount would be ₹15,000

// Solution: Partial application
async function applyWithBudgetCheck(campaign, discountAmount) {
  const remainingBudget = await getRemainingBudget(campaign.id);

  if (remainingBudget <= 0) {
    // Campaign budget exhausted
    return {
      applied: false,
      reason: 'Campaign budget exhausted'
    };
  }

  if (discountAmount > remainingBudget) {
    // Partial discount
    return {
      applied: true,
      discount: remainingBudget,
      partial: true
    };
  }

  return {
    applied: true,
    discount: discountAmount,
    partial: false
  };
}
```

---

### Edge Case 3: User Not Eligible Anymore

```javascript
// Campaign: "First 100 users only"
// User is #101

// Solution: Real-time eligibility check
async function checkEligibility(campaign, userId, cartItems) {
  // Check user-specific limits
  if (campaign.max_users) {
    const usersCount = await db.campaign_usage.count({
      where: { campaign_id: campaign.id }
    });

    if (usersCount >= campaign.max_users) {
      return false;
    }
  }

  // Check user already used
  if (campaign.usage_limit_per_user) {
    const userUsage = await db.campaign_usage.count({
      where: {
        campaign_id: campaign.id,
        user_id: userId
      }
    });

    if (userUsage >= campaign.usage_limit_per_user) {
      return false;
    }
  }

  // Check cart conditions
  if (campaign.min_cart_value) {
    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotal < campaign.min_cart_value) {
      return false;
    }
  }

  return true;
}
```

---

## 📊 CAMPAIGN REPORTING

### Campaign Performance Metrics

```sql
-- Campaign effectiveness report
SELECT
  c.id,
  c.name,
  c.discount_type,
  COUNT(DISTINCT o.user_id) as unique_users,
  COUNT(o.id) as total_orders,
  SUM(o.discount_amount) as total_discount_given,
  SUM(o.order_total) as total_revenue,
  c.budget,
  (c.budget - SUM(o.discount_amount)) as remaining_budget,
  AVG(o.discount_amount) as avg_discount_per_order
FROM campaigns c
LEFT JOIN orders o ON o.campaign_id = c.id
WHERE c.start_date >= '2026-01-01'
GROUP BY c.id, c.name, c.discount_type, c.budget
ORDER BY total_revenue DESC;
```

---

## ✅ CAMPAIGN CHECKLIST

Before launching a new campaign:

- [ ] Priority level assigned (1-5)?
- [ ] Stackability configured (stackable: true/false)?
- [ ] Eligible products/categories defined?
- [ ] Min/max cart value set?
- [ ] Budget allocated?
- [ ] Usage limits defined (per user, total)?
- [ ] Start/end dates set?
- [ ] Conflict resolution tested?
- [ ] Finance approval obtained?
- [ ] Marketing team aligned?

**If ANY checkbox unchecked → DELAY LAUNCH**

---

## 🎯 SUMMARY

### Campaign Resolution (Quick Reference)

| Scenario | Resolution | Winner |
|----------|-----------|--------|
| **Manual Coupon vs Auto** | Manual wins | User-applied coupon |
| **Same Priority, Different Discount** | Best for user | Higher discount amount |
| **Different Priority** | Higher priority | Priority 1 > Priority 5 |
| **Stackable Campaigns** | Combine | All eligible campaigns |
| **Non-Stackable** | Stop at first | Highest priority non-stackable |
| **Budget Exhausted** | Skip campaign | Next eligible campaign |

### Key Principles

1. **Priority Order:** User > Product > Merchant > Category > Platform
2. **Manual Overrides Auto:** User-applied coupon always wins
3. **Best for User:** Among same priority, pick maximum discount
4. **Stacking Default:** NO (unless explicitly configured)
5. **Budget Check:** Real-time validation before applying
6. **Grace Period:** 5 minutes for campaign expiry
7. **Max Discount Cap:** Enforced at checkout

---

**Status:** ✅ CAMPAIGN RESOLUTION ALGORITHM DEFINED
**Conflict Resolution:** Deterministic & Predictable
**Last Updated:** 2026-01-03

