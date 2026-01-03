# 🎯 Multi-App Attribution Model - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ ATTRIBUTION RULES DEFINED
**Purpose:** Determine which app gets credit when user interacts across multiple touchpoints

---

## ⚠️ THE ATTRIBUTION PROBLEM

**Scenario:**
1. User discovers restaurant on **Discovery App** (Browse)
2. User clicks through to **Wasil Dinezy** (Booking)
3. User books table via **Wasil Dinezy**
4. User earns ReZ coins

**Question:** Which app gets credit for the booking?
- Discovery App (drove awareness)?
- Wasil Dinezy (captured conversion)?
- Both (shared attribution)?

**This document provides the DEFINITIVE answer.**

---

## 🎯 ATTRIBUTION MODELS

### Model 1: Last-Touch Attribution (DEFAULT)

**Rule:** The app where the CONVERSION happened gets 100% credit.

```javascript
// Scenario
User Journey:
1. Discovery App → Browse restaurants
2. Wasil Dinezy → Book table ✅ CONVERSION

Attribution: 100% to Wasil Dinezy
```

**Why Last-Touch?**
- Simple to implement
- Clear ownership (one app responsible)
- Aligns with industry standard (Google Analytics default)
- No disputes between apps

**When to Use:**
- Default for ALL transactions
- Clear conversion point exists
- Simplicity preferred over accuracy

---

### Model 2: First-Touch Attribution

**Rule:** The app where the user FIRST discovered the product gets 100% credit.

```javascript
// Scenario
User Journey:
1. Discovery App → Discover "Pizza Hut" ✅ FIRST TOUCH
2. ReZ App → Search "Pizza Hut"
3. ReZ App → Add to cart & purchase

Attribution: 100% to Discovery App
```

**When to Use:**
- Brand awareness campaigns
- Discovery-focused apps
- Long consideration cycles (high-value products)

**Implementation:**
```javascript
// Track first touch in user session
async function trackFirstTouch(userId, productId, appId) {
  const existingAttribution = await redis.get(`attribution:${userId}:${productId}`);

  if (!existingAttribution) {
    // First touch - record it
    await redis.setex(
      `attribution:${userId}:${productId}`,
      86400 * 7, // 7 days attribution window
      JSON.stringify({
        app_id: appId,
        timestamp: new Date(),
        type: 'first_touch'
      })
    );
  }
}

// At purchase time
async function attributePurchase(userId, productId) {
  const attribution = await redis.get(`attribution:${userId}:${productId}`);

  if (attribution) {
    const { app_id } = JSON.parse(attribution);
    // Credit first-touch app
    await creditApp(app_id, 'purchase', orderId);
  }
}
```

---

### Model 3: Multi-Touch Attribution (ADVANCED)

**Rule:** Credit is SPLIT between all apps in the journey.

```javascript
// Scenario
User Journey:
1. Discovery App → Browse (40%)
2. Wasil Dinezy → Shortlist (30%)
3. ReZ App → Purchase (30%)

Attribution Split:
- Discovery: 40% credit
- Wasil: 30% credit
- ReZ: 30% credit
```

**Attribution Weights:**
```javascript
const ATTRIBUTION_WEIGHTS = {
  'discovery': 0.40,      // Awareness stage
  'consideration': 0.30,  // Evaluation stage
  'conversion': 0.30      // Purchase stage
};
```

**When to Use:**
- Analytics dashboards (understand full journey)
- Campaign ROI measurement
- Cross-app collaboration incentives

**Implementation:**
```javascript
// Track full user journey
async function trackTouchpoint(userId, productId, appId, stage) {
  const journeyKey = `journey:${userId}:${productId}`;

  await redis.rpush(journeyKey, JSON.stringify({
    app_id: appId,
    stage,
    timestamp: new Date()
  }));

  await redis.expire(journeyKey, 86400 * 7); // 7-day window
}

// At purchase time
async function attributePurchaseMultiTouch(userId, productId, orderValue) {
  const journeyKey = `journey:${userId}:${productId}`;
  const touchpoints = await redis.lrange(journeyKey, 0, -1);

  const journey = touchpoints.map(t => JSON.parse(t));

  // Calculate weighted attribution
  const attributions = {};
  journey.forEach(touch => {
    const weight = ATTRIBUTION_WEIGHTS[touch.stage] || 0;
    const credit = orderValue * weight;

    if (!attributions[touch.app_id]) {
      attributions[touch.app_id] = 0;
    }
    attributions[touch.app_id] += credit;
  });

  // Record attributions
  for (const [appId, credit] of Object.entries(attributions)) {
    await db.app_attributions.create({
      order_id: orderId,
      app_id: appId,
      credit_amount: credit,
      attribution_type: 'multi_touch'
    });
  }

  return attributions;
}
```

---

## 📊 ATTRIBUTION BY USE CASE

### E-Commerce Orders (ReZ App)

**Rule:** Last-Touch Attribution

```javascript
// Scenario 1: Direct purchase
User Journey:
1. ReZ App → Browse → Add to cart → Purchase ✅

Attribution: 100% to ReZ App

// Scenario 2: Discovery-assisted purchase
User Journey:
1. Discovery App → Browse products
2. ReZ App → Search product → Purchase ✅

Attribution: 100% to ReZ App (last-touch default)

// Scenario 3: Cross-app journey
User Journey:
1. BuzzLoop → See friend's review
2. Discovery App → Research product
3. ReZ App → Purchase ✅

Attribution: 100% to ReZ App
Analytics Track: BuzzLoop (40%), Discovery (30%), ReZ (30%)
```

**Why Last-Touch for E-Commerce:**
- Clear conversion app (ReZ App owns checkout)
- Simple commission calculation
- No disputes with discovery apps

---

### Restaurant Bookings (Wasil Dinezy)

**Rule:** Last-Touch Attribution

```javascript
// Scenario: Discovery → Booking
User Journey:
1. Discovery App → Browse "Italian Restaurants"
2. Discovery App → Click "La Pinoz" → Redirects to Wasil
3. Wasil Dinezy → Book table ✅

Attribution: 100% to Wasil Dinezy

// Tracking for insights (multi-touch analytics)
await trackJourney({
  user_id: userId,
  touchpoints: [
    { app: 'discovery', action: 'browse', stage: 'awareness' },
    { app: 'discovery', action: 'click', stage: 'consideration' },
    { app: 'wasil', action: 'book', stage: 'conversion' }
  ]
});

// Analytics dashboard shows:
// "40% of Wasil bookings originated from Discovery App"
```

---

### Service Bookings (Wasil Service Apps)

**Rule:** Last-Touch Attribution

```javascript
// Scenario: Salon booking
User Journey:
1. Discovery App → Browse "Salons near me"
2. Wasil Salon App → View stylist profiles
3. Wasil Salon App → Book appointment ✅

Attribution: 100% to Wasil Salon App
```

---

### Social Commerce (BuzzLoop)

**Rule:** First-Touch Attribution (exception to default)

```javascript
// Scenario: Social recommendation
User Journey:
1. BuzzLoop → Friend reviews "Nike Shoes" ✅ FIRST TOUCH
2. ReZ App → Search "Nike Shoes"
3. ReZ App → Purchase

Attribution:
- BuzzLoop: 100% (first-touch credit for social referral)
- Analytics: Track ReZ as conversion app

// Implementation
async function trackSocialReferral(userId, productId, referrerId) {
  // Override default with first-touch
  await redis.setex(
    `attribution:${userId}:${productId}`,
    86400 * 7,
    JSON.stringify({
      app_id: 'buzzloop',
      referrer_id: referrerId,
      type: 'social_referral',
      timestamp: new Date()
    })
  );
}
```

**Why First-Touch for Social:**
- Rewards discovery (friend recommendation)
- Incentivizes content creation
- Aligns with referral program goals

---

### Offline Scan & Pay

**Rule:** Scan & Pay App gets 100% credit

```javascript
// Scenario: Offline purchase with QR scan
User Journey:
1. User visits physical store
2. Scan & Pay App → Scan QR → Pay ✅

Attribution: 100% to Scan & Pay App

// No attribution conflict (single touchpoint)
```

---

## 🔗 CROSS-APP NAVIGATION TRACKING

### Deep Link Attribution

```javascript
// When Discovery App deep-links to Wasil Dinezy
const deepLink = 'wasil://restaurant/123?source=discovery&campaign=weekend';

// Wasil Dinezy receives deep link
async function handleDeepLink(url) {
  const params = new URLSearchParams(url.split('?')[1]);
  const source = params.get('source');        // 'discovery'
  const campaign = params.get('campaign');    // 'weekend'

  // Track referral for analytics (not attribution)
  await db.app_referrals.create({
    source_app: source,
    destination_app: 'wasil',
    campaign,
    user_id: userId,
    timestamp: new Date()
  });

  // Attribution still: Last-touch (Wasil gets credit)
}
```

**Key Distinction:**
- **Referral Tracking:** Which app sent the user (analytics)
- **Attribution:** Which app gets credit (financial)

---

## 💰 COMMISSION & REVENUE SHARE

### Commission Attribution

```javascript
// Order details
Order Total: 1000 INR
Platform Commission: 5% = 50 INR

// Question: Which app earns the commission?
// Answer: The app that handled the CONVERSION

// Example 1: ReZ App purchase
Attribution: ReZ App
Commission: 50 INR to ReZ App's revenue

// Example 2: Wasil booking via Discovery referral
Attribution: Wasil Dinezy (last-touch)
Commission: 50 INR to Wasil
Analytics: Note Discovery referral (for performance tracking)
```

### Revenue Share Model (Future)

```javascript
// Multi-touch revenue share (Phase 2+)
Order Total: 1000 INR
Commission: 50 INR

Multi-Touch Split:
- Discovery App: 20 INR (40% for awareness)
- Wasil Dinezy: 30 INR (60% for conversion)

// Implementation
const revenueShare = {
  discovery: 0.40,
  wasil: 0.60
};

for (const [app, share] of Object.entries(revenueShare)) {
  await db.app_revenue.create({
    app_id: app,
    order_id: orderId,
    revenue: commission * share,
    attribution_type: 'multi_touch'
  });
}
```

---

## 📅 ATTRIBUTION WINDOWS

### Default Attribution Windows

| Touchpoint Type | Attribution Window | Reason |
|-----------------|-------------------|--------|
| **Product Browse** | 7 days | Typical consideration cycle |
| **Social Referral** | 30 days | Longer influence period |
| **Campaign Click** | 24 hours | Short-lived intent |
| **Cart Abandon** | 72 hours | Recovery window |
| **Wishlist Add** | 14 days | Intent signals |

### Implementation

```javascript
const ATTRIBUTION_WINDOWS = {
  'product_browse': 7 * 24 * 60 * 60,      // 7 days
  'social_referral': 30 * 24 * 60 * 60,    // 30 days
  'campaign_click': 24 * 60 * 60,          // 24 hours
  'cart_abandon': 3 * 24 * 60 * 60,        // 72 hours
  'wishlist_add': 14 * 24 * 60 * 60        // 14 days
};

async function trackAttribution(userId, productId, appId, type) {
  const ttl = ATTRIBUTION_WINDOWS[type] || 7 * 24 * 60 * 60;

  await redis.setex(
    `attribution:${userId}:${productId}:${type}`,
    ttl,
    JSON.stringify({
      app_id: appId,
      type,
      timestamp: new Date()
    })
  );
}
```

---

## 📊 ATTRIBUTION REPORTING

### App Performance Dashboard

```sql
-- App Attribution Report
SELECT
  a.app_id,
  a.app_name,
  COUNT(DISTINCT aa.order_id) as attributed_orders,
  SUM(aa.credit_amount) as total_attributed_revenue,
  AVG(aa.credit_amount) as avg_order_value,
  aa.attribution_type
FROM app_attributions aa
JOIN apps a ON aa.app_id = a.id
WHERE aa.created_at BETWEEN '2026-01-01' AND '2026-01-31'
GROUP BY a.app_id, a.app_name, aa.attribution_type
ORDER BY total_attributed_revenue DESC;

-- Expected output:
-- app_id  | app_name       | attributed_orders | total_attributed_revenue | avg_order_value | attribution_type
-- rez     | ReZ App        | 5000             | 2,500,000               | 500            | last_touch
-- wasil   | Wasil Dinezy   | 2000             | 1,000,000               | 500            | last_touch
-- disco   | Discovery App  | 3000             | 600,000                 | 200            | multi_touch
```

### Cross-App Journey Analysis

```sql
-- User Journey Funnel
SELECT
  stage,
  app_id,
  COUNT(DISTINCT user_id) as users,
  COUNT(*) as touchpoints
FROM user_journey_tracking
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY stage, app_id
ORDER BY stage, users DESC;

-- Insights:
-- stage       | app_id  | users  | touchpoints
-- awareness   | disco   | 50000  | 75000
-- consideration | wasil | 20000  | 30000
-- conversion  | rez     | 10000  | 10000
```

---

## 🚨 EDGE CASES & CONFLICT RESOLUTION

### Edge Case 1: Same Session, Multiple Apps

**Problem:**
```javascript
// User switches apps within 5 minutes
1. Discovery App → Browse (12:00 PM)
2. ReZ App → Purchase (12:03 PM)

// Which gets credit?
```

**Solution:** Last-Touch Attribution (ReZ App gets 100% credit)

**Analytics:** Track Discovery as "assisted conversion"

---

### Edge Case 2: Attribution Conflict

**Problem:**
```javascript
// Two attribution records exist
Redis Key 1: attribution:user123:product456 → 'discovery' (first-touch)
Redis Key 2: attribution:user123:product456 → 'buzzloop' (social referral)

// Which wins?
```

**Solution:** Priority Order (Declared)

```javascript
const ATTRIBUTION_PRIORITY = {
  'social_referral': 1,    // Highest (rewards content creators)
  'campaign_click': 2,     // Campaign-driven
  'first_touch': 3,        // Discovery
  'last_touch': 4          // Default (lowest priority)
};

async function resolveAttributionConflict(userId, productId) {
  const allAttributions = await redis.keys(`attribution:${userId}:${productId}:*`);

  let winningAttribution = null;
  let highestPriority = Infinity;

  for (const key of allAttributions) {
    const data = JSON.parse(await redis.get(key));
    const priority = ATTRIBUTION_PRIORITY[data.type] || 999;

    if (priority < highestPriority) {
      highestPriority = priority;
      winningAttribution = data;
    }
  }

  return winningAttribution;
}
```

---

### Edge Case 3: Attribution Expiry

**Problem:**
```javascript
// User browsed product 8 days ago (outside 7-day window)
// User purchases today

// Which app gets credit?
```

**Solution:** No attribution (default to last-touch app at purchase time)

---

## ✅ ATTRIBUTION IMPLEMENTATION CHECKLIST

Before launching cross-app features:

- [ ] Attribution model selected (Last-touch, First-touch, Multi-touch)?
- [ ] Attribution window defined (7 days, 30 days, etc.)?
- [ ] Conflict resolution rules defined?
- [ ] Redis keys structured correctly?
- [ ] Analytics tracking implemented?
- [ ] Revenue share formulas defined (if multi-touch)?
- [ ] App performance dashboards created?
- [ ] Edge cases handled (expiry, conflicts)?
- [ ] Finance team approval (if revenue share)?
- [ ] App teams aligned on attribution logic?

**If ANY checkbox unchecked → DELAY LAUNCH**

---

## 🎯 SUMMARY

### Attribution Rules (Quick Reference)

| Scenario | Attribution Model | Credit To | Analytics Track |
|----------|------------------|-----------|-----------------|
| **E-Commerce Purchase** | Last-Touch | ReZ App (100%) | Full journey |
| **Restaurant Booking** | Last-Touch | Wasil Dinezy (100%) | Discovery referral |
| **Social Referral** | First-Touch | BuzzLoop (100%) | Conversion app |
| **Campaign Click** | Campaign Attribution | Campaign owner (100%) | App referrals |
| **Multi-App Journey** | Last-Touch (default) | Conversion app (100%) | Multi-touch insights |

### Key Principles

1. **Default = Last-Touch** (simplicity, clarity)
2. **Exception = Social Referrals** (first-touch rewards creators)
3. **Analytics ≠ Attribution** (track everything, credit strategically)
4. **Attribution Window = 7 days** (e-commerce standard)
5. **Conflict Resolution = Priority Order** (social > campaign > first > last)
6. **Revenue Share = Future** (Phase 2, multi-touch)

---

**Status:** ✅ ATTRIBUTION RULES DEFINED
**Default Model:** Last-Touch Attribution
**Last Updated:** 2026-01-03

