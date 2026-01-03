# Business Logic Specifications - RTMN Backend

**Last Updated:** 2026-01-03
**Status:** Production-Ready Formulas
**Reference:** [RTMN_BUSINESS_RULES_FOR_DEVELOPERS.md](../1_ARCHITECTURE/RTMN_BUSINESS_RULES_FOR_DEVELOPERS.md)

---

## 📋 OVERVIEW

This document provides **exact mathematical formulas** and **step-by-step logic** for implementing all RTMN business rules.

**CRITICAL:** All calculations MUST be done in **Rabtul**, NOT in individual apps.

---

## 💰 REZ COINS CALCULATION

### 1. Coin Earning Logic

#### Base Formula

```javascript
// Step 1: Calculate base coins (5% of order value)
const BASE_COIN_RATE = 0.05; // 5%
const baseCoins = orderSubtotal * BASE_COIN_RATE;

// Step 2: Apply tier multiplier
const TIER_MULTIPLIERS = {
  'basic': 1.0,    // 1x (5 coins per ₹100)
  'silver': 1.2,   // 1.2x (6 coins per ₹100)
  'gold': 1.5,     // 1.5x (7.5 coins per ₹100)
  'prive': 2.0     // 2x (10 coins per ₹100)
};

const tierMultiplier = TIER_MULTIPLIERS[user.tier];
const coinsAfterTier = baseCoins * tierMultiplier;

// Step 3: Apply category bonuses
const CATEGORY_BONUSES = {
  'grocery': 0.02,     // +2% (total 7%)
  'fashion': 0.03,     // +3% (total 8%)
  'electronics': 0.01, // +1% (total 6%)
  'food': 0.02,        // +2% (total 7%)
  'pharmacy': 0.04,    // +4% (total 9%)
  'default': 0         // No bonus
};

const categoryBonus = CATEGORY_BONUSES[product.category] || CATEGORY_BONUSES['default'];
const categoryCoins = orderSubtotal * categoryBonus;
const totalCoins = coinsAfterTier + categoryCoins;

// Step 4: Round to nearest integer (always round up)
const finalCoins = Math.ceil(totalCoins);

// Step 5: Apply maximum cap
const MAX_COINS_PER_ORDER = 1000;
const coinsEarned = Math.min(finalCoins, MAX_COINS_PER_ORDER);

// Step 6: Set expiry (365 days from earning)
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 365);
```

#### Complete Example

```javascript
// Order Details
orderSubtotal = ₹2000
user.tier = 'gold'
product.category = 'grocery'

// Calculation:
baseCoins = 2000 * 0.05 = 100 coins
tierMultiplier = 1.5 (gold)
coinsAfterTier = 100 * 1.5 = 150 coins
categoryBonus = 2000 * 0.02 = 40 coins
totalCoins = 150 + 40 = 190 coins
finalCoins = Math.ceil(190) = 190 coins
coinsEarned = Math.min(190, 1000) = 190 coins
expiryDate = 2027-01-03
```

---

### 2. Coin Redemption Logic

#### Application Order (MANDATORY)

```javascript
// Coins MUST be applied in this order:
// 1. Promo Coins (first)
// 2. Branded Coins (second)
// 3. ReZ Coins (last)

async function calculateCoinDiscount(userId, orderTotal, merchantId) {
  let remainingAmount = orderTotal;
  let discountApplied = 0;
  const breakdown = {};

  // Step 1: Apply Promo Coins
  const promoCoins = await getPromoCoins(userId);
  const promoDiscount = Math.min(promoCoins, remainingAmount);
  remainingAmount -= promoDiscount;
  discountApplied += promoDiscount;
  breakdown.promoCoins = promoDiscount;

  // Step 2: Apply Branded Coins (merchant-specific)
  const brandedCoins = await getBrandedCoins(userId, merchantId);
  const brandedDiscount = Math.min(brandedCoins, remainingAmount);
  remainingAmount -= brandedDiscount;
  discountApplied += brandedDiscount;
  breakdown.brandedCoins = brandedDiscount;

  // Step 3: Apply ReZ Coins
  const rezCoins = await getRezCoins(userId);

  // Maximum ReZ coins allowed: 70% of order total
  const MAX_REZ_COIN_PERCENTAGE = 0.70;
  const maxRezCoinsAllowed = orderTotal * MAX_REZ_COIN_PERCENTAGE;

  const rezDiscount = Math.min(rezCoins, remainingAmount, maxRezCoinsAllowed);
  remainingAmount -= rezDiscount;
  discountApplied += rezDiscount;
  breakdown.rezCoins = rezDiscount;

  // Final amount
  const finalAmount = orderTotal - discountApplied;

  return {
    orderTotal,
    discountApplied,
    finalAmount,
    breakdown,
    minimumPayable: finalAmount // User must pay at least this amount
  };
}
```

#### Example Calculation

```javascript
// Scenario
orderTotal = ₹1000
user.promoCoins = 150
user.brandedCoins['starbucks'] = 50 (if merchant is Starbucks)
user.rezCoins = 300

// Calculation
Step 1: Promo Coins
  - Apply: Math.min(150, 1000) = 150
  - Remaining: 1000 - 150 = 850

Step 2: Branded Coins
  - Apply: Math.min(50, 850) = 50
  - Remaining: 850 - 50 = 800

Step 3: ReZ Coins
  - Max allowed: 1000 * 0.70 = 700
  - Available: 300
  - Remaining amount: 800
  - Apply: Math.min(300, 800, 700) = 300
  - Remaining: 800 - 300 = 500

// Result
Total Discount: 150 + 50 + 300 = 500
Final Amount: ₹500
```

---

### 3. Coin Expiry Logic

```javascript
// Daily Cron Job: Check and expire coins
async function expireCoins() {
  const today = new Date();

  // Find all coins that have expired
  const expiredCoins = await db.coins.findAll({
    where: {
      expires_at: { [Op.lt]: today },
      is_expired: false
    }
  });

  for (const coin of expiredCoins) {
    // Mark as expired
    await coin.update({ is_expired: true });

    // Deduct from wallet
    await rabtulSDK.wallet.debit({
      userId: coin.user_id,
      amount: coin.amount,
      type: coin.coin_type,
      reason: 'expiry',
      metadata: { originalCoinId: coin.id }
    });

    // Emit event
    rabtul.emit('coins.expired', {
      userId: coin.user_id,
      coinId: coin.id,
      amount: coin.amount,
      type: coin.coin_type
    });

    // Send notification
    await sendNotification(coin.user_id, {
      type: 'coin_expiry',
      message: `${coin.amount} ${coin.coin_type} coins expired`,
      data: { coinId: coin.id }
    });
  }
}

// Expiry Rules
const EXPIRY_RULES = {
  'rez_coins': 365,      // 365 days from earning
  'branded_coins': 90,   // 90 days from earning
  'promo_coins': 30      // 30 days from earning (configurable per campaign)
};
```

---

## 🏆 LOYALTY TIER SYSTEM

### Tier Upgrade Logic

```javascript
// Tier Criteria
const TIER_CRITERIA = {
  'basic': {
    minSpend: 0,
    minOrders: 0,
    benefits: {
      coinMultiplier: 1.0,
      freeDeliveryThreshold: 500,
      prioritySupport: false
    }
  },
  'silver': {
    minSpend: 10000,      // ₹10,000 in last 90 days
    minOrders: 5,         // 5 orders in last 90 days
    benefits: {
      coinMultiplier: 1.2,
      freeDeliveryThreshold: 300,
      prioritySupport: false
    }
  },
  'gold': {
    minSpend: 50000,      // ₹50,000 in last 90 days
    minOrders: 15,        // 15 orders in last 90 days
    benefits: {
      coinMultiplier: 1.5,
      freeDeliveryThreshold: 0,
      prioritySupport: true,
      earlyAccessToSales: true
    }
  },
  'prive': {
    // Invitation only OR
    minSpend: 200000,     // ₹2,00,000 in last 90 days
    minOrders: 50,        // 50 orders in last 90 days
    benefits: {
      coinMultiplier: 2.0,
      freeDeliveryThreshold: 0,
      prioritySupport: true,
      dedicatedAccountManager: true,
      exclusiveEvents: true
    }
  }
};

// Daily Cron: Check tier upgrades
async function checkTierUpgrades() {
  const users = await db.users.findAll({ where: { tier: { [Op.ne]: 'prive' } } });

  for (const user of users) {
    const last90Days = new Date();
    last90Days.setDate(last90Days.getDate() - 90);

    // Calculate stats
    const stats = await db.orders.findAll({
      where: {
        user_id: user.id,
        status: 'delivered',
        created_at: { [Op.gte]: last90Days }
      },
      attributes: [
        [db.fn('COUNT', db.col('id')), 'orderCount'],
        [db.fn('SUM', db.col('total_amount')), 'totalSpend']
      ]
    });

    const { orderCount, totalSpend } = stats[0];

    // Check eligibility
    let newTier = user.tier;

    if (totalSpend >= 200000 && orderCount >= 50) {
      newTier = 'prive';
    } else if (totalSpend >= 50000 && orderCount >= 15) {
      newTier = 'gold';
    } else if (totalSpend >= 10000 && orderCount >= 5) {
      newTier = 'silver';
    } else {
      newTier = 'basic';
    }

    // Upgrade if eligible
    if (newTier !== user.tier) {
      await user.update({ tier: newTier });

      // Emit event
      rabtul.emit('user.tierChanged', {
        userId: user.id,
        oldTier: user.tier,
        newTier,
        stats: { orderCount, totalSpend }
      });

      // Send notification
      await sendNotification(user.id, {
        type: 'tier_upgrade',
        message: `Congratulations! You're now a ${newTier.toUpperCase()} member!`,
        data: { newTier }
      });
    }
  }
}
```

---

## 💳 MERCHANT COMMISSION CALCULATION

### Commission Formula

```javascript
// Commission Rates (by category)
const COMMISSION_RATES = {
  'grocery': 0.05,        // 5%
  'fashion': 0.15,        // 15%
  'electronics': 0.10,    // 10%
  'food': 0.20,           // 20%
  'pharmacy': 0.08,       // 8%
  'services': 0.12,       // 12%
  'default': 0.10         // 10% (fallback)
};

// Calculate commission
async function calculateCommission(orderId) {
  const order = await db.orders.findByPk(orderId, {
    include: [{ model: db.products }]
  });

  const merchant = await db.merchants.findByPk(order.merchant_id);

  // Use merchant's custom rate if set, otherwise use category rate
  const commissionRate = merchant.commission_rate ||
                         COMMISSION_RATES[merchant.business_type] ||
                         COMMISSION_RATES['default'];

  // Commission on subtotal (before discounts and delivery)
  const commissionAmount = order.subtotal * commissionRate;

  // Payment gateway fee (2% + ₹3)
  const gatewayFeePercentage = 0.02;
  const gatewayFeeFixed = 3;
  const gatewayFee = (order.total_amount * gatewayFeePercentage) + gatewayFeeFixed;

  // Merchant receives
  const merchantPayout = order.total_amount - commissionAmount - gatewayFee;

  return {
    orderTotal: order.total_amount,
    subtotal: order.subtotal,
    commissionRate,
    commissionAmount,
    gatewayFee,
    merchantPayout,
    breakdown: {
      revenue: order.total_amount,
      commission: commissionAmount,
      gatewayFee,
      netPayout: merchantPayout
    }
  };
}

// Example
orderTotal = ₹1000
subtotal = ₹900 (before delivery fee)
category = 'food'
commissionRate = 0.20 (20%)

commission = 900 * 0.20 = ₹180
gatewayFee = (1000 * 0.02) + 3 = ₹23
merchantPayout = 1000 - 180 - 23 = ₹797
```

---

### Settlement Schedule

```javascript
// Settlement Rules
const SETTLEMENT_CONFIG = {
  frequency: 'weekly',        // Weekly settlements
  dayOfWeek: 'friday',        // Every Friday
  minimumPayout: 1000,        // Minimum ₹1000 to trigger payout
  holdPeriod: 7               // Hold for 7 days (for refunds/disputes)
};

// Weekly Cron: Process settlements
async function processSettlements() {
  const merchants = await db.merchants.findAll({ where: { status: 'active' } });

  for (const merchant of merchants) {
    const holdDate = new Date();
    holdDate.setDate(holdDate.getDate() - SETTLEMENT_CONFIG.holdPeriod);

    // Get all settled orders (delivered > 7 days ago)
    const orders = await db.orders.findAll({
      where: {
        merchant_id: merchant.id,
        status: 'delivered',
        delivered_at: { [Op.lt]: holdDate },
        is_settled: false
      }
    });

    let totalPayout = 0;
    const settlementDetails = [];

    for (const order of orders) {
      const commission = await calculateCommission(order.id);
      totalPayout += commission.merchantPayout;

      settlementDetails.push({
        orderId: order.id,
        orderAmount: order.total_amount,
        commission: commission.commissionAmount,
        payout: commission.merchantPayout
      });

      // Mark as settled
      await order.update({ is_settled: true });
    }

    // Process payout if above minimum
    if (totalPayout >= SETTLEMENT_CONFIG.minimumPayout) {
      const settlement = await db.settlements.create({
        merchant_id: merchant.id,
        amount: totalPayout,
        order_count: orders.length,
        details: settlementDetails,
        status: 'pending'
      });

      // Trigger bank transfer
      await processBankTransfer(merchant, settlement);

      // Emit event
      rabtul.emit('settlement.processed', {
        merchantId: merchant.id,
        settlementId: settlement.id,
        amount: totalPayout
      });
    }
  }
}
```

---

## 🎁 OFFER & DISCOUNT LOGIC

### Offer Stacking Rules

```javascript
// Offer Priority (highest to lowest)
const OFFER_PRIORITY = {
  'flash_sale': 1,           // Highest priority
  'platform_offer': 2,
  'merchant_offer': 3,
  'category_offer': 4,
  'first_order': 5,
  'loyalty_discount': 6      // Lowest priority
};

// Maximum discount cap
const MAX_DISCOUNT_PERCENTAGE = 0.70; // Max 70% discount

async function calculateDiscount(userId, merchantId, cartItems) {
  const user = await db.users.findByPk(userId);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Get all active offers
  const offers = await db.offers.findAll({
    where: {
      is_active: true,
      start_date: { [Op.lte]: new Date() },
      end_date: { [Op.gte]: new Date() },
      [Op.or]: [
        { merchant_id: merchantId },
        { merchant_id: null } // Platform-wide
      ]
    },
    order: [['priority', 'ASC']]
  });

  let totalDiscount = 0;
  const appliedOffers = [];

  for (const offer of offers) {
    // Check eligibility
    if (!await isOfferEligible(userId, offer)) continue;

    // Calculate offer discount
    let offerDiscount = 0;

    if (offer.type === 'percentage') {
      offerDiscount = cartTotal * (offer.value / 100);
    } else if (offer.type === 'fixed') {
      offerDiscount = offer.value;
    } else if (offer.type === 'buy_x_get_y') {
      offerDiscount = calculateBOGODiscount(cartItems, offer);
    }

    // Apply max cap per offer
    if (offer.max_discount) {
      offerDiscount = Math.min(offerDiscount, offer.max_discount);
    }

    totalDiscount += offerDiscount;
    appliedOffers.push({
      offerId: offer.id,
      offerName: offer.name,
      discount: offerDiscount
    });

    // Stop if max discount reached
    const maxAllowedDiscount = cartTotal * MAX_DISCOUNT_PERCENTAGE;
    if (totalDiscount >= maxAllowedDiscount) {
      totalDiscount = maxAllowedDiscount;
      break;
    }

    // Check if offer allows stacking
    if (!offer.allow_stacking) break;
  }

  return {
    cartTotal,
    totalDiscount,
    finalAmount: cartTotal - totalDiscount,
    appliedOffers
  };
}
```

---

## 📊 ORDER TOTAL CALCULATION (Final Formula)

```javascript
async function calculateOrderTotal(userId, merchantId, cartItems, deliveryAddressId) {
  // 1. Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  // 2. Apply offers/discounts
  const discountData = await calculateDiscount(userId, merchantId, cartItems);
  const discountAmount = discountData.totalDiscount;

  // 3. Apply coins
  const amountAfterDiscount = subtotal - discountAmount;
  const coinData = await calculateCoinDiscount(userId, amountAfterDiscount, merchantId);
  const coinsRedeemed = coinData.discountApplied;

  // 4. Calculate delivery fee
  const deliveryAddress = await db.addresses.findByPk(deliveryAddressId);
  const merchant = await db.merchants.findByPk(merchantId);

  const distance = calculateDistance(
    merchant.latitude, merchant.longitude,
    deliveryAddress.latitude, deliveryAddress.longitude
  );

  const DELIVERY_CONFIG = {
    baseCharge: 30,          // ₹30 base
    perKmCharge: 5,          // ₹5 per km
    freeDeliveryAbove: 500   // Free above ₹500 (varies by tier)
  };

  let deliveryFee = DELIVERY_CONFIG.baseCharge + (distance * DELIVERY_CONFIG.perKmCharge);

  // Check tier benefits
  const tierThreshold = TIER_CRITERIA[user.tier].benefits.freeDeliveryThreshold;
  if (subtotal >= tierThreshold) {
    deliveryFee = 0;
  }

  // 5. Calculate tax (GST)
  const amountBeforeTax = amountAfterDiscount - coinsRedeemed;
  const GST_RATE = 0.05; // 5% GST (configurable by category)
  const taxAmount = amountBeforeTax * GST_RATE;

  // 6. Final total
  const totalAmount = amountBeforeTax + deliveryFee + taxAmount;

  // 7. Calculate coins to be earned
  const coinsEarned = await calculateCoinsEarned(userId, subtotal, merchantId);

  return {
    breakdown: {
      subtotal,
      discountAmount,
      discountedSubtotal: subtotal - discountAmount,
      coinsRedeemed,
      amountAfterCoins: amountBeforeTax,
      deliveryFee,
      taxAmount,
      totalAmount
    },
    appliedOffers: discountData.appliedOffers,
    coinsUsed: coinData.breakdown,
    coinsEarned,
    finalPayable: totalAmount
  };
}

// Example Calculation
/*
Cart Items: ₹1000
Discount (offer): -₹150
Coins Redeemed: -₹100
Delivery Fee: +₹40
Tax (5%): +₹37.5 (on ₹750)
-----------------------
Total: ₹827.5
Coins Earned: 50
*/
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Next:** [Third-Party Integration Guide](./THIRD_PARTY_INTEGRATION_GUIDE.md)
