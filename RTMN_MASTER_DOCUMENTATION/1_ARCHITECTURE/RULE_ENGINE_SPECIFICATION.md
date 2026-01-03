# ⚙️ Rule Engine Specification v1.0 - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ DETERMINISTIC SPECIFICATION
**Purpose:** Exact rule evaluation behavior, versioning, and conflict resolution

---

## ⚠️ CRITICAL: RULE ENGINE IS DETERMINISTIC

**Same inputs → Same outputs (always)**

Rules are:
- ✅ **Versioned** (changes don't affect past)
- ✅ **Audited** (all evaluations logged)
- ✅ **Tested** (simulation mode before live)
- ✅ **Conflict-resolved** (explicit precedence)

---

## 📊 RULE TYPES

### 1. Boolean Rules (True/False)

**Purpose:** Eligibility checks

```javascript
{
  "rule_id": "tier_gold_required",
  "type": "boolean",
  "condition": {
    "field": "user.tier",
    "operator": "in",
    "value": ["gold", "prive"]
  },
  "version": "1.0",
  "created_at": "2026-01-01T00:00:00Z"
}

// Evaluation
evaluate({
  rule_id: "tier_gold_required",
  context: { user: { tier: "silver" } }
})
// Returns: { result: false, reason: "User tier 'silver' not in ['gold', 'prive']" }
```

### 2. Numeric Rules (Calculations)

**Purpose:** Coin calculations, discounts, fees

```javascript
{
  "rule_id": "coin_earning_rate",
  "type": "numeric",
  "formula": "(orderAmount * baseRate * tierMultiplier) + categoryBonus",
  "inputs": {
    "orderAmount": "number",
    "baseRate": "config.base_coin_rate", // 0.05
    "tierMultiplier": "lookup.tier_multipliers[user.tier]", // 1.0, 1.2, 1.5, 2.0
    "categoryBonus": "lookup.category_bonuses[product.category]" // 0.02 for grocery
  },
  "constraints": {
    "min": 0,
    "max": "config.max_coins_per_order" // 1000
  },
  "rounding": "ceil",
  "version": "1.0"
}

// Evaluation
evaluate({
  rule_id: "coin_earning_rate",
  context: {
    orderAmount: 2000,
    user: { tier: "gold" },
    product: { category: "grocery" }
  }
})
// Returns: { result: 190, breakdown: {...}, version: "1.0" }
```

### 3. Priority Rules (Ordered Selection)

**Purpose:** Campaign stacking, offer application

```javascript
{
  "rule_id": "campaign_priority",
  "type": "priority",
  "candidates": [
    { "id": "flash_sale", "priority": 1 },
    { "id": "platform_offer", "priority": 2 },
    { "id": "merchant_offer", "priority": 3 },
    { "id": "user_coupon", "priority": 4 }
  ],
  "selection": "highest_priority", // or "all_applicable"
  "conflict_resolution": "replace", // or "stack", "best_for_user"
  "version": "1.0"
}
```

### 4. Cap Rules (Limits & Thresholds)

**Purpose:** Redemption limits, daily caps, velocity checks

```javascript
{
  "rule_id": "coin_redemption_cap",
  "type": "cap",
  "limits": {
    "per_order": {
      "value": "orderTotal * 0.70",
      "period": "transaction"
    },
    "per_day": {
      "value": 5000,
      "period": "24h",
      "scope": "user"
    },
    "per_month": {
      "value": 50000,
      "period": "30d",
      "scope": "user"
    }
  },
  "exceeded_action": "reject", // or "truncate", "warn"
  "version": "1.0"
}
```

---

## 🔄 RULE EVALUATION ORDER

### Standard Evaluation Pipeline

```
1. Context Validation
   ↓
2. Rule Lookup (by ID + version)
   ↓
3. Input Resolution
   ↓
4. Formula Evaluation
   ↓
5. Constraint Checking
   ↓
6. Conflict Resolution (if multiple rules)
   ↓
7. Result Formatting
   ↓
8. Audit Logging
```

### Example: Coin Earning Evaluation

```javascript
async function evaluateCoinEarning(orderId) {
  // 1. Context Validation
  const order = await getOrder(orderId);
  const user = await getUser(order.user_id);
  const product = await getProduct(order.items[0].product_id);

  // 2. Rule Lookup
  const rule = await getRuleVersion('coin_earning_rate', '1.0');

  // 3. Input Resolution
  const inputs = {
    orderAmount: order.subtotal,
    baseRate: await getConfig('base_coin_rate'), // 0.05
    tierMultiplier: TIER_MULTIPLIERS[user.tier], // 1.5 for gold
    categoryBonus: CATEGORY_BONUSES[product.category] // 0.02 for grocery
  };

  // 4. Formula Evaluation
  let result = (inputs.orderAmount * inputs.baseRate * inputs.tierMultiplier) +
               (inputs.orderAmount * inputs.categoryBonus);
  // = (2000 * 0.05 * 1.5) + (2000 * 0.02)
  // = 150 + 40 = 190

  // 5. Constraint Checking
  result = Math.ceil(result); // Round up
  result = Math.min(result, await getConfig('max_coins_per_order')); // Cap at 1000

  // 6. Conflict Resolution (N/A for single rule)

  // 7. Result Formatting
  const output = {
    coins_earned: result,
    breakdown: {
      base: inputs.orderAmount * inputs.baseRate, // 100
      tier_bonus: 100 * (inputs.tierMultiplier - 1), // 50
      category_bonus: inputs.orderAmount * inputs.categoryBonus // 40
    },
    rule_version: '1.0',
    evaluated_at: new Date()
  };

  // 8. Audit Logging
  await auditLog({
    action: 'rule_evaluation',
    rule_id: 'coin_earning_rate',
    rule_version: '1.0',
    inputs,
    output,
    context: { orderId, userId: user.id }
  });

  return output;
}
```

---

## 🔀 CONFLICT RESOLUTION

### Scenario: Multiple Campaigns Apply

**Rules:**
1. Flash Sale: 50% off
2. Platform Offer: ₹200 off
3. Merchant Offer: 30% off
4. User Coupon: ₹100 off

**Conflict Resolution Strategies:**

#### Strategy 1: Highest Priority (Default)
```javascript
{
  "resolution": "highest_priority",
  "priority_order": ["flash_sale", "platform_offer", "merchant_offer", "user_coupon"],
  "result": "flash_sale" // Only apply this one
}
```

#### Strategy 2: Best for User
```javascript
{
  "resolution": "best_for_user",
  "calculate_all": true,
  "select": "max_discount",
  "result": "flash_sale" // 50% off = ₹1000 vs ₹200 vs 30% = ₹600 vs ₹100
}
```

#### Strategy 3: Stackable (with limits)
```javascript
{
  "resolution": "stack",
  "max_stacked": 2,
  "priority_order": ["flash_sale", "platform_offer"],
  "total_cap": "70% of order total",
  "result": ["flash_sale", "platform_offer"] // Apply both if under cap
}
```

### Code Example

```javascript
function resolveConflict(applicableOffers, orderTotal, strategy = 'best_for_user') {
  switch (strategy) {
    case 'highest_priority':
      return applicableOffers.sort((a, b) => a.priority - b.priority)[0];

    case 'best_for_user':
      const discounts = applicableOffers.map(offer => ({
        offer,
        discount: calculateDiscount(offer, orderTotal)
      }));
      return discounts.sort((a, b) => b.discount - a.discount)[0].offer;

    case 'stack':
      const MAX_DISCOUNT = orderTotal * 0.70;
      let totalDiscount = 0;
      const selected = [];

      for (const offer of applicableOffers.sort((a, b) => a.priority - b.priority)) {
        const discount = calculateDiscount(offer, orderTotal);
        if (totalDiscount + discount <= MAX_DISCOUNT) {
          selected.push(offer);
          totalDiscount += discount;
        }
      }
      return selected;

    default:
      throw new Error(`Unknown resolution strategy: ${strategy}`);
  }
}
```

---

## 📅 RULE VERSIONING & LIFECYCLE

### Versioning Strategy

**Rule changes create NEW versions (not modify existing)**

```javascript
// Version 1.0 (2026-01-01)
{
  "rule_id": "coin_earning_rate",
  "version": "1.0",
  "formula": "orderAmount * 0.05",
  "active_from": "2026-01-01T00:00:00Z",
  "active_until": null // Still active
}

// Version 2.0 (2026-06-01 - increased to 7%)
{
  "rule_id": "coin_earning_rate",
  "version": "2.0",
  "formula": "orderAmount * 0.07",
  "active_from": "2026-06-01T00:00:00Z",
  "active_until": null,
  "migration_note": "Increased base rate from 5% to 7%"
}
```

### Backward Compatibility Rules

**Q: If HQ changes coin expiry today, does it affect yesterday's orders?**

**A: NO - Timestamp-based versioning**

```javascript
async function getCoinExpiry(earnedAt) {
  // Use rule version active AT THE TIME of earning
  const rule = await getRuleAtTimestamp('coin_expiry', earnedAt);

  // If earned on 2026-01-01 with v1.0 (365 days)
  // It expires based on v1.0 EVEN IF v2.0 changed it to 180 days

  return rule.formula; // 365 days for this coin
}

// Implementation
async function getRuleAtTimestamp(ruleId, timestamp) {
  return await db.rules.findOne({
    where: {
      rule_id: ruleId,
      active_from: { [Op.lte]: timestamp },
      [Op.or]: [
        { active_until: null },
        { active_until: { [Op.gt]: timestamp } }
      ]
    },
    order: [['version', 'DESC']]
  });
}
```

### Rule Rollback

```javascript
async function rollbackRule(ruleId, toVersion) {
  const currentRule = await getCurrentRule(ruleId);
  const targetRule = await getRuleVersion(ruleId, toVersion);

  // Deactivate current
  await currentRule.update({
    active_until: new Date()
  });

  // Reactivate target version
  await targetRule.update({
    active_from: new Date(),
    active_until: null
  });

  // Audit
  await auditLog({
    action: 'rule_rollback',
    rule_id: ruleId,
    from_version: currentRule.version,
    to_version: toVersion,
    reason: 'Emergency rollback - production issue'
  });
}
```

---

## 🧪 RULE SIMULATION (DRY RUN)

### Simulation Mode

**Test rules before going live**

```javascript
async function simulateRule(ruleId, ruleConfig, testCases) {
  const results = [];

  for (const testCase of testCases) {
    const result = await evaluateRule(ruleId, testCase.context, {
      mode: 'simulation',
      version: 'draft'
    });

    results.push({
      input: testCase.context,
      expected: testCase.expected,
      actual: result,
      passed: result.value === testCase.expected
    });
  }

  return {
    rule_id: ruleId,
    test_results: results,
    pass_rate: results.filter(r => r.passed).length / results.length,
    ready_for_production: results.every(r => r.passed)
  };
}

// Usage
const simulation = await simulateRule('coin_earning_rate_v2', newRuleConfig, [
  { context: { orderAmount: 1000, user: { tier: 'basic' } }, expected: 70 },
  { context: { orderAmount: 2000, user: { tier: 'gold' } }, expected: 210 },
  { context: { orderAmount: 5000, user: { tier: 'prive' } }, expected: 700 }
]);

if (simulation.ready_for_production) {
  await publishRule('coin_earning_rate_v2');
}
```

---

## 🎯 DETERMINISM GUARANTEES

### Guarantee 1: Idempotency

**Same inputs → Same outputs**

```javascript
const result1 = await evaluateRule('coin_earning', {
  orderId: 'order_123',
  orderAmount: 1000,
  user: { tier: 'gold' }
});

const result2 = await evaluateRule('coin_earning', {
  orderId: 'order_123',
  orderAmount: 1000,
  user: { tier: 'gold' }
});

assert(result1.coins_earned === result2.coins_earned);
// ✅ Always true
```

### Guarantee 2: Snapshot Isolation

**Rules evaluated with context snapshot**

```javascript
// Order created at 10:00 AM
const order = { amount: 1000, created_at: '2026-01-03T10:00:00Z' };

// Rule version active at 10:00 AM: v1.0 (5% rate)
const coinsEarned = await evaluateAtTimestamp('coin_earning', order.created_at, order);
// Uses v1.0 = 50 coins

// Rule updated at 11:00 AM: v2.0 (7% rate)
// ...but order still uses v1.0

const recalculated = await evaluateAtTimestamp('coin_earning', order.created_at, order);
// Still 50 coins (not 70)
```

### Guarantee 3: Audit Trail

**Every evaluation logged**

```javascript
await db.rule_evaluations.create({
  rule_id: 'coin_earning_rate',
  rule_version: '1.0',
  inputs: { orderAmount: 1000, userId: 'user_123' },
  output: { coins_earned: 50 },
  evaluated_at: new Date(),
  evaluation_duration_ms: 12
});
```

---

## 📖 RULE DOCUMENTATION TEMPLATE

**Every rule MUST have:**

```yaml
rule_id: coin_earning_rate
version: 1.0
type: numeric
owner: Rabtul Governance
description: Calculate ReZ coins earned from purchase

inputs:
  - name: orderAmount
    type: number
    required: true
    validation: "> 0"

  - name: user.tier
    type: enum
    values: [basic, silver, gold, prive]
    required: true

formula: "(orderAmount * baseRate * tierMultiplier) + categoryBonus"

constants:
  baseRate: 0.05
  tierMultipliers:
    basic: 1.0
    silver: 1.2
    gold: 1.5
    prive: 2.0

constraints:
  min: 0
  max: 1000
  rounding: ceil

examples:
  - input: { orderAmount: 1000, user: { tier: "basic" }, category: "grocery" }
    output: 70
    explanation: "(1000 * 0.05 * 1.0) + (1000 * 0.02) = 50 + 20 = 70"

test_cases: 25
pass_rate: 100%
last_tested: 2026-01-03
production_ready: true
```

---

## ✅ CHECKLIST FOR NEW RULES

Before deploying ANY rule:

- [ ] Rule ID unique?
- [ ] Version specified?
- [ ] Formula deterministic (no random, no external API)?
- [ ] All inputs validated?
- [ ] Constraints defined?
- [ ] Conflict resolution specified?
- [ ] Test cases written (min 10)?
- [ ] Simulation passed 100%?
- [ ] Rollback plan documented?
- [ ] Audit logging enabled?

**If ANY checkbox fails → DO NOT DEPLOY**

---

**Status:** ✅ DETERMINISTIC SPECIFICATION
**Guarantees:** Idempotency, Snapshot Isolation, Audit Trail
**Last Updated:** 2026-01-03
