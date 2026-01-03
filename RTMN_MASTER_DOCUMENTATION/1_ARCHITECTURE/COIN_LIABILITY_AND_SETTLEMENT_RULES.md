# 💰 Coin Liability & Settlement Rules - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ FINANCIAL ACCOUNTABILITY DEFINED
**Purpose:** Define who bears liability for coins and when settlement occurs

---

## ⚠️ THE CRITICAL QUESTION

**"Who is liable for the coins until they're spent?"**

This determines:
- Who bears the financial burden
- When liability transfers
- What happens on refunds
- Accounting treatment
- Tax implications

**This document provides the DEFINITIVE answer.**

---

## 🎯 COIN LIABILITY OWNERSHIP

### The Answer (DECLARED)

```
┌─────────────────────────────────────────────────────┐
│  Coin Type          │  Liable Party    │  When      │
├─────────────────────────────────────────────────────┤
│  ReZ Coins          │  RTMN Platform   │  Always    │
│  Branded Coins      │  Merchant        │  Always    │
│  Promo Coins        │  Campaign Owner  │  Always    │
└─────────────────────────────────────────────────────┘
```

**Rule:** The entity that ISSUED the coins bears the liability until redemption.

---

## 📊 LIABILITY LIFECYCLE

### ReZ Coins (Platform Liability)

```
┌──────────────────────────────────────────────┐
│  Event                │  Liability          │
├──────────────────────────────────────────────┤
│  User makes purchase  │  0                  │
│  Order delivered      │  +50 coins (RTMN)   │
│  User redeems coins   │  -50 coins (RTMN)   │
│  Coins expire         │  -50 coins (RTMN)   │
│  Order refunded       │  -50 coins (RTMN)   │
└──────────────────────────────────────────────┘
```

**Key Points:**
- RTMN Platform bears 100% liability
- Coins are a platform expense (discount given to customers)
- Recognized as liability on RTMN balance sheet
- Reduced when coins are redeemed or expired

### Accounting Treatment (ReZ Coins)

```javascript
// When ReZ coins are credited (order delivered)
Debit:  Marketing Expense (ReZ Coins)    50 INR
Credit: Deferred Revenue (Coin Liability) 50 INR

// When ReZ coins are redeemed
Debit:  Deferred Revenue (Coin Liability) 50 INR
Credit: Revenue                           50 INR

// When ReZ coins expire (unused)
Debit:  Deferred Revenue (Coin Liability) 50 INR
Credit: Other Income (Breakage)           50 INR
```

---

### Branded Coins (Merchant Liability)

```
┌──────────────────────────────────────────────┐
│  Event                │  Liability          │
├──────────────────────────────────────────────┤
│  User makes purchase  │  0                  │
│  Order delivered      │  +100 coins (Merch) │
│  User redeems coins   │  -100 coins (Merch) │
│  Coins expire         │  -100 coins (Merch) │
│  Order refunded       │  -100 coins (Merch) │
└──────────────────────────────────────────────┘
```

**Key Points:**
- Merchant bears 100% liability
- Coins are a merchant marketing expense
- RTMN is NOT liable (merchant-specific loyalty)
- Merchant absorbs cost when coins are redeemed

### Accounting Treatment (Branded Coins)

```javascript
// Merchant books (when branded coins credited)
Debit:  Marketing Expense (Branded Coins) 100 INR
Credit: Loyalty Liability                 100 INR

// Merchant books (when branded coins redeemed)
Debit:  Loyalty Liability                 100 INR
Credit: Discount Given                    100 INR

// RTMN Platform books (facilitator only)
// NO LIABILITY - just tracking service
```

---

### Promo Coins (Campaign Owner Liability)

```
┌──────────────────────────────────────────────────────┐
│  Campaign Type       │  Liable Party               │
├──────────────────────────────────────────────────────┤
│  Platform Campaign   │  RTMN HQ (Adzy)             │
│  Merchant Campaign   │  Specific Merchant          │
│  Brand Campaign      │  Brand (via Adzy)           │
└──────────────────────────────────────────────────────┘
```

**Example:**
- Diwali Sale (Platform): RTMN HQ liable for all promo coins
- Pizza Hut Campaign: Pizza Hut liable for promo coins
- Coca-Cola Brand Push: Coca-Cola liable (pays Adzy upfront)

### Accounting Treatment (Promo Coins)

```javascript
// Platform campaign (RTMN HQ)
Debit:  Marketing Expense (Promo Campaign)  1000 INR
Credit: Deferred Revenue (Promo Liability)  1000 INR

// Merchant campaign (Pizza Hut)
// Pizza Hut's books:
Debit:  Promotional Expense                 500 INR
Credit: Promo Coin Liability                500 INR

// Brand campaign (Coca-Cola via Adzy)
// Coca-Cola prepays Adzy:
Debit:  Prepaid Marketing (Adzy)            10000 INR
Credit: Cash                                10000 INR

// Adzy books:
Debit:  Cash                                10000 INR
Credit: Deferred Revenue (Brand Campaign)   10000 INR
```

---

## 🔄 LIABILITY TRANSFER EVENTS

### When Liability Transfers

| Event | From | To | Reason |
|-------|------|----|----|
| **Coin Issuance** | None | Issuer | Issuer creates obligation |
| **Coin Redemption** | Issuer | None | Obligation fulfilled (discount given) |
| **Coin Expiry** | Issuer | None | Obligation extinguished (breakage income) |
| **Coin Reversal (Refund)** | Issuer | None | Obligation cancelled (order refunded) |
| **Campaign Handoff** | Brand | RTMN | Brand prepays, RTMN executes |

**CRITICAL:** Liability NEVER transfers to the user. Coins are a liability (obligation to provide future discount), not an asset transfer.

---

## 💸 SETTLEMENT MECHANICS

### ReZ Coins Settlement

**Question:** When does RTMN settle with merchants when ReZ coins are redeemed?

**Answer:** At order settlement time (7 days after delivery)

```javascript
// Order breakdown
Order Total:        1000 INR
ReZ Coins Redeemed: -100 INR (user's discount)
Net Payable:         900 INR

// Settlement calculation (7 days after delivery)
const settlement = {
  gross_sale: 1000,
  rez_coins_discount: 100,  // RTMN absorbs this
  platform_commission: 50,   // 5% of gross
  net_to_merchant: 850       // 1000 - 100 - 50
};

// Who pays what?
// - Customer pays: 900 INR (1000 - 100 coins)
// - RTMN absorbs: 100 INR (ReZ coins discount)
// - RTMN earns: 50 INR (commission on 1000 gross)
// - Merchant receives: 850 INR
```

**Accounting:**
```javascript
// RTMN books (at settlement)
Debit: Deferred Revenue (Coin Liability)   100 INR
Debit: Merchant Payable                    850 INR
Credit: Revenue (Commission)                50 INR
Credit: Cash from Customer                 900 INR

// Merchant books (at settlement)
Debit: Cash                                850 INR
Debit: Marketing Expense (RTMN Commission)  50 INR
Credit: Revenue                           1000 INR
Credit: Discount Given (ReZ Coins)         100 INR (implied)
```

---

### Branded Coins Settlement

**Question:** When merchant's own branded coins are redeemed?

**Answer:** Merchant bears full cost, RTMN takes NO commission on discount

```javascript
// Order breakdown
Order Total:        1000 INR
Branded Coins:      -200 INR (merchant's own coins)
Net Payable:         800 INR

// Settlement calculation
const settlement = {
  gross_sale: 1000,
  branded_coins_discount: 200,  // Merchant absorbs
  platform_commission: 50,       // 5% of gross (still calculated on 1000)
  net_to_merchant: 750           // 1000 - 200 - 50
};

// Who pays what?
// - Customer pays: 800 INR
// - Merchant absorbs: 200 INR (their own loyalty program)
// - RTMN earns: 50 INR (commission on gross)
// - Merchant receives: 750 INR
```

**CRITICAL:** Commission is calculated on GROSS amount (before branded coins), not net.

---

### Promo Coins Settlement

**Question:** Who pays when promo coins are redeemed?

**Answer:** Campaign owner pays RTMN, RTMN pays merchant

```javascript
// Platform Promo Campaign (RTMN HQ funded)
Order Total:        1000 INR
Promo Coins:        -150 INR (RTMN campaign)
Net Payable:         850 INR

// Settlement
const settlement = {
  gross_sale: 1000,
  promo_coins_discount: 150,     // RTMN HQ campaign budget
  platform_commission: 50,        // 5% of gross
  net_to_merchant: 950            // 1000 - 50 (commission waived on promo)
};

// Special rule: RTMN waives commission on promo discount amount
// Merchant gets: 1000 - 150 (promo absorbed by HQ) = 950
// Customer pays: 850
// RTMN HQ pays: 150 (campaign cost) - 50 (commission) = 100 net cost
```

**Merchant Campaign (Merchant funded):**
```javascript
// Merchant pays for their own promo
Order Total:        1000 INR
Merchant Promo:     -100 INR (merchant's campaign)
Net Payable:         900 INR

const settlement = {
  gross_sale: 1000,
  merchant_promo: 100,           // Merchant absorbs
  platform_commission: 50,
  net_to_merchant: 850           // 1000 - 100 - 50
};
```

---

## 📅 SETTLEMENT TIMELINE

### Standard Settlement Flow

```
Day 0: Order placed & paid
Day 0: Payment captured (Razorpay)
Day 1: Order delivered
Day 1: Coins credited to user
Day 7: Settlement window ends (no returns)
Day 7: Merchant payout processed
Day 8: Funds transferred to merchant bank account

┌─────────────────────────────────────────────────┐
│  Day  │  Event                │  Cash Flow      │
├─────────────────────────────────────────────────┤
│  0    │  Customer pays        │  +900 to RTMN   │
│  1    │  Order delivered      │  Coins credited │
│  7    │  Settlement processed │  -850 to Merch  │
│  8    │  Merchant receives    │  Merchant bank  │
└─────────────────────────────────────────────────┘
```

**RTMN holds funds for 7 days:**
- Reason: Return window (customer can return within 7 days)
- If returned: Refund customer, reverse coins, no merchant payout
- If not returned: Process settlement

---

## 🔁 REFUND & REVERSAL RULES

### Complete Refund Scenario

```javascript
// Original order
Order Total: 1000 INR
ReZ Coins Used: -100 INR
Customer Paid: 900 INR

// User returns order (within 7 days)
async function processRefund(orderId) {
  const order = await db.orders.findByPk(orderId);

  // 1. Reverse coins
  await rabtulSDK.wallet.debit({
    userId: order.user_id,
    amount: order.coins_earned,      // Remove earned coins
    type: 'rez_coins',
    reason: 'refund_reversal',
    orderId
  });

  await rabtulSDK.wallet.credit({
    userId: order.user_id,
    amount: order.coins_redeemed,    // Return redeemed coins
    type: order.coin_type_redeemed,
    reason: 'refund_return',
    orderId
  });

  // 2. Refund customer
  await razorpay.refunds.create({
    payment_id: order.payment_id,
    amount: order.amount_paid * 100  // 900 INR
  });

  // 3. Cancel merchant settlement
  await db.settlements.update({
    status: 'cancelled',
    reason: 'order_refunded'
  }, {
    where: { order_id: orderId }
  });

  // 4. Update order status
  await order.update({ status: 'refunded' });
}
```

**Accounting (Refund):**
```javascript
// Reverse all entries

// RTMN books
Debit: Cash                              900 INR  // Refund customer
Debit: Revenue (Commission)               50 INR  // Reverse commission
Credit: Deferred Revenue (Coin Liability) 100 INR  // Restore liability
Credit: Merchant Payable                 850 INR  // Cancel payout

// Merchant books (no impact if not yet settled)
// If already settled: RTMN claws back from next settlement
```

---

## 📊 LIABILITY REPORTING

### Balance Sheet Impact

```sql
-- Coin Liability Report (RTMN Platform)
SELECT
  coin_type,
  SUM(amount) as total_outstanding,
  COUNT(DISTINCT user_id) as users_with_balance,
  SUM(CASE WHEN expires_at > NOW() THEN amount ELSE 0 END) as active_liability,
  SUM(CASE WHEN expires_at <= NOW() THEN amount ELSE 0 END) as expired_unrealized
FROM coins
WHERE status = 'active'
GROUP BY coin_type;

-- Expected output:
-- coin_type       | total_outstanding | users_with_balance | active_liability | expired_unrealized
-- rez_coins       | 10,000,000       | 50,000            | 9,500,000       | 500,000
-- branded_coins   | 2,000,000        | 10,000            | 1,800,000       | 200,000
-- promo_coins     | 5,000,000        | 25,000            | 4,500,000       | 500,000
```

**This is a CRITICAL financial metric:**
- Total Outstanding = Company's liability (must have cash to cover)
- Expired Unrealized = Breakage income opportunity
- Active Liability = Real obligation

---

## ⚖️ REGULATORY & TAX IMPLICATIONS

### Indian Accounting Standards (Ind AS 115)

**Coin Liability Treatment:**

1. **Revenue Recognition:**
   - Coins are NOT revenue when issued
   - Revenue recognized when coins are redeemed (or expired)
   - Deferred revenue account used

2. **Breakage Income:**
   - Coins that expire unused = breakage income
   - Recognized as "Other Income" when expired
   - Taxable income for RTMN

3. **Tax Treatment:**
   - Coins issued: Not taxable (liability created)
   - Coins redeemed: Revenue (taxable)
   - Coins expired: Income (taxable)

### GST Implications

```javascript
// When ReZ coins are redeemed
Order Total (before coins): 1000 INR
GST (18%):                   180 INR
Gross:                      1180 INR
ReZ Coins Applied:          -100 INR
Net Payable:                1080 INR

// GST calculation
const gstCalculation = {
  taxable_amount: 1000,        // Before discount
  gst_rate: 0.18,
  gst_amount: 180,

  // ReZ coins reduce customer payment but NOT GST base
  customer_pays: 1080,         // (1000 + 180) - 100
  gst_payable_to_govt: 180     // Full GST on 1000
};

// RTMN absorbs the coin discount AFTER GST
```

**Rule:** GST is calculated on gross amount (before coin redemption)

---

## 🚨 AUDIT CONTROLS

### Daily Reconciliation

```javascript
// cron/daily-coin-liability-reconciliation.js
async function reconcileCoinLiability() {
  // 1. Calculate total coin liability from ledger
  const ledgerLiability = await db.coins.sum('amount', {
    where: {
      status: 'active',
      expires_at: { [Op.gt]: new Date() }
    }
  });

  // 2. Calculate total from wallet balances
  const walletLiability = await db.wallets.sum('rez_coins_balance');

  // 3. Compare
  const discrepancy = Math.abs(ledgerLiability - walletLiability);

  if (discrepancy > 100) { // 100 INR tolerance
    await alertFinance({
      severity: 'P1',
      alert: 'Coin Liability Mismatch',
      ledger: ledgerLiability,
      wallet: walletLiability,
      discrepancy
    });
  }

  // 4. Record for audit
  await db.liability_reconciliation.create({
    date: new Date(),
    ledger_amount: ledgerLiability,
    wallet_amount: walletLiability,
    discrepancy,
    status: discrepancy > 100 ? 'failed' : 'passed'
  });
}

// Run daily at 2 AM
cron.schedule('0 2 * * *', reconcileCoinLiability);
```

---

## ✅ LIABILITY CHECKLIST

Before launching ANY coin feature:

- [ ] Liability owner declared (Platform, Merchant, Campaign)?
- [ ] Accounting entries defined (Debit/Credit)?
- [ ] Settlement timeline defined?
- [ ] Refund reversal rules defined?
- [ ] GST treatment confirmed?
- [ ] Breakage income handling defined?
- [ ] Reconciliation job scheduled?
- [ ] Finance team approval obtained?
- [ ] Auditor reviewed?
- [ ] Tax implications documented?

**If ANY checkbox unchecked → DO NOT LAUNCH**

---

## 🎯 SUMMARY

### Liability Ownership (Quick Reference)

| Coin Type | Liable Party | When Recognized | Settlement |
|-----------|--------------|----------------|------------|
| **ReZ Coins** | RTMN Platform | On issuance | Day 7 post-delivery |
| **Branded Coins** | Merchant | On issuance | Day 7 post-delivery |
| **Promo Coins** | Campaign Owner | On issuance | Day 7 post-delivery |

### Key Financial Rules

1. **Liability = Company's obligation** to provide future discount
2. **Revenue recognized** when coins redeemed (or expired)
3. **Breakage income** = Expired coins (other income)
4. **GST calculated** on gross (before coins)
5. **Settlement delayed** 7 days for return window
6. **Refunds reverse** ALL coin transactions
7. **Daily reconciliation** mandatory (audit control)

---

**Status:** ✅ FINANCIAL ACCOUNTABILITY DEFINED
**Compliance:** Ind AS 115, GST Act 2017
**Last Updated:** 2026-01-03

