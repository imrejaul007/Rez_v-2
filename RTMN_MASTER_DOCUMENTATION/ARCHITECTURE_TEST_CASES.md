# 🧪 Architecture Test Cases - RTMN Ecosystem

**Date:** 2026-01-04
**Status:** ✅ ENFORCEMENT-READY
**Purpose:** System-level contract tests that enforce business rules permanently

---

## ⚠️ CRITICAL PRINCIPLE

> **These are NOT unit tests.**
> **These are SYSTEM-LEVEL CONTRACT TESTS.**
> **If a feature cannot pass these tests, it does NOT ship.**

---

## 🎯 TEST PHILOSOPHY

### Traditional Unit Tests
✅ Test individual functions
✅ Mock dependencies
✅ Fast execution

### Architecture Contract Tests
✅ Test BUSINESS RULES across systems
✅ No mocks (real services)
✅ Enforce SDK boundaries
✅ Validate state machines
✅ Ensure event integrity

**Both are needed. Architecture tests catch what unit tests miss.**

---

## 🧪 CATEGORY 1: SDK ENFORCEMENT TESTS

### Test 1.1: Direct API Access Rejection

**Objective:** Ensure no app can bypass SDK

**Test:**
```javascript
describe('SDK Enforcement', () => {
  test('Direct API call without SDK headers should be rejected', async () => {
    // Attempt to call API directly
    const response = await fetch('https://api.rabtul.com/wallet/balance', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJ...'  // Valid token, NO SDK headers
      }
    });

    // Expect 403 Forbidden
    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({
      error: 'SDK_REQUIRED',
      message: 'This endpoint requires SDK usage',
      code: 'ERR_SDK_REQUIRED'
    });
  });

  test('API call with SDK headers should succeed', async () => {
    const sdk = new RabtulWalletSDK({
      apiKey: TEST_API_KEY,
      apiSecret: TEST_API_SECRET
    });

    const balance = await sdk.getBalance(TEST_USER_ID);

    expect(balance).toHaveProperty('rez_coins');
    expect(balance).toHaveProperty('branded_coins');
    expect(balance).toHaveProperty('promo_coins');
  });
});
```

**Expected Behavior:**
- ❌ Direct API call → 403 Forbidden
- ✅ SDK call → Success

---

### Test 1.2: SDK Version Enforcement

**Objective:** Ensure outdated SDKs are rejected

**Test:**
```javascript
describe('SDK Version Control', () => {
  test('Outdated SDK version should be rejected', async () => {
    // Mock outdated SDK version
    const oldSDK = new RabtulWalletSDK({
      apiKey: TEST_API_KEY,
      apiSecret: TEST_API_SECRET,
      version: '0.9.0'  // Below minimum 1.0.0
    });

    await expect(
      oldSDK.getBalance(TEST_USER_ID)
    ).rejects.toThrow('SDK_VERSION_TOO_OLD');

    // Check error response
    try {
      await oldSDK.getBalance(TEST_USER_ID);
    } catch (error) {
      expect(error.statusCode).toBe(426);  // Upgrade Required
      expect(error.code).toBe('ERR_SDK_VERSION_TOO_OLD');
      expect(error.message).toContain('Please upgrade to SDK v1.0.0 or higher');
      expect(error.minimumVersion).toBe('1.0.0');
    }
  });

  test('Current SDK version should succeed', async () => {
    const sdk = new RabtulWalletSDK({
      apiKey: TEST_API_KEY,
      apiSecret: TEST_API_SECRET,
      version: '1.2.0'  // Current version
    });

    const balance = await sdk.getBalance(TEST_USER_ID);
    expect(balance).toBeDefined();
  });
});
```

---

### Test 1.3: SDK Request Signing Validation

**Objective:** Ensure all requests are cryptographically signed

**Test:**
```javascript
describe('SDK Request Signing', () => {
  test('Unsigned request should be rejected', async () => {
    const response = await fetch('https://api.rabtul.com/wallet/balance', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJ...',
        'X-SDK-Version': '1.2.0',
        // Missing X-Signature header
      }
    });

    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({
      error: 'INVALID_SIGNATURE',
      message: 'Request signature missing or invalid',
      code: 'ERR_INVALID_SIGNATURE'
    });
  });

  test('Invalid signature should be rejected', async () => {
    const response = await fetch('https://api.rabtul.com/wallet/balance', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJ...',
        'X-SDK-Version': '1.2.0',
        'X-Signature': 'invalid_signature'  // Wrong signature
      }
    });

    expect(response.status).toBe(401);
    expect(await response.json()).toMatchObject({
      error: 'INVALID_SIGNATURE'
    });
  });
});
```

---

## 🧪 CATEGORY 2: WALLET & RULE SAFETY TESTS

### Test 2.1: Frontend Wallet Mutation Attempt

**Objective:** Ensure apps cannot manipulate wallet directly

**Test:**
```javascript
describe('Wallet Security', () => {
  test('Frontend wallet mutation should fail hard', async () => {
    // Attempt to credit wallet directly
    const response = await fetch('https://api.rabtul.com/wallet/credit', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${await getAuthToken()}`,
        'X-SDK-Version': '1.2.0',
        'X-Signature': await signRequest({ user_id: TEST_USER_ID, amount: 1000 })
      },
      body: JSON.stringify({
        user_id: TEST_USER_ID,
        amount: 1000,
        type: 'rez_coins',
        reason: 'MANUAL_CREDIT'  // Attempting manual credit
      })
    });

    // Should fail
    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({
      error: 'FORBIDDEN_OPERATION',
      message: 'Direct wallet mutations are not allowed',
      code: 'ERR_FORBIDDEN_WALLET_MUTATION'
    });

    // Check audit log was created
    const auditLog = await db.audit_logs.findOne({
      where: {
        user_id: TEST_USER_ID,
        action: 'FORBIDDEN_WALLET_MUTATION',
        created_at: { [Op.gte]: new Date(Date.now() - 1000) }
      }
    });

    expect(auditLog).toBeDefined();
    expect(auditLog.severity).toBe('CRITICAL');
  });
});
```

---

### Test 2.2: Coin Priority Enforcement

**Objective:** Ensure coins are always used in correct order (Promo → Branded → ReZ)

**Test:**
```javascript
describe('Coin Priority Rules', () => {
  test('Coins should be used in mandatory order: Promo → Branded → ReZ', async () => {
    // Setup: User has all three coin types
    await setupTestUser({
      user_id: TEST_USER_ID,
      promo_coins: 100,
      branded_coins: 200,
      rez_coins: 300
    });

    // Purchase for 250 INR
    const result = await walletSDK.debit({
      user_id: TEST_USER_ID,
      amount: 250,
      merchant_id: TEST_MERCHANT_ID,
      order_id: TEST_ORDER_ID
    });

    // Expect:
    // 1. Promo coins used first (100)
    // 2. Branded coins used next (150)
    // 3. ReZ coins NOT touched
    expect(result.breakdown).toEqual({
      promo_coins_used: 100,
      branded_coins_used: 150,
      rez_coins_used: 0,
      cash_used: 0,
      total: 250
    });

    // Verify final balances
    const balance = await walletSDK.getBalance(TEST_USER_ID);
    expect(balance.promo_coins).toBe(0);        // All used
    expect(balance.branded_coins).toBe(50);     // 200 - 150 = 50 remaining
    expect(balance.rez_coins).toBe(300);        // Untouched
  });

  test('Wrong coin order should be impossible to create', async () => {
    // Attempt to manually specify coin order
    await expect(
      db.wallet_transactions.create({
        user_id: TEST_USER_ID,
        amount: 250,
        rez_coins_used: 150,      // Using ReZ coins first
        branded_coins_used: 100,  // Then branded (WRONG ORDER)
        promo_coins_used: 0
      })
    ).rejects.toThrow('INVALID_COIN_ORDER');
  });
});
```

---

### Test 2.3: Rule Change Backward Compatibility

**Objective:** Ensure old coins follow old rules

**Test:**
```javascript
describe('Rule Versioning & Backward Compatibility', () => {
  test('Coin earned before rule change should follow old rule', async () => {
    // Day 1: Earn coin with 30-day expiry
    const oldRule = await db.rules.create({
      rule_id: 'coin_expiry_v1',
      rule_type: 'COIN_EXPIRY',
      active_from: new Date('2026-01-01'),
      active_until: new Date('2026-01-10'),
      config: { days: 30 }
    });

    const coin = await walletSDK.credit({
      user_id: TEST_USER_ID,
      amount: 100,
      type: 'rez_coins',
      reason: 'PURCHASE_CASHBACK',
      order_id: 'order_123',
      timestamp: new Date('2026-01-05')  // Earned under old rule
    });

    // Day 10: Rule changes to 60-day expiry
    await db.rules.create({
      rule_id: 'coin_expiry_v2',
      rule_type: 'COIN_EXPIRY',
      active_from: new Date('2026-01-10'),
      active_until: null,
      config: { days: 60 }
    });

    // Check coin expiry
    const coinDetails = await db.wallet_transactions.findByPk(coin.transaction_id);

    // Should expire 30 days from Jan 5 (not 60 days)
    expect(coinDetails.expires_at).toEqual(new Date('2026-02-04'));

    // New coins should get 60-day expiry
    const newCoin = await walletSDK.credit({
      user_id: TEST_USER_ID,
      amount: 100,
      type: 'rez_coins',
      reason: 'PURCHASE_CASHBACK',
      order_id: 'order_456',
      timestamp: new Date('2026-01-11')  // Earned under new rule
    });

    const newCoinDetails = await db.wallet_transactions.findByPk(newCoin.transaction_id);
    expect(newCoinDetails.expires_at).toEqual(new Date('2026-03-12'));  // 60 days
  });
});
```

---

## 🧪 CATEGORY 3: ORDER STATE MACHINE TESTS

### Test 3.1: Invalid State Transition

**Objective:** Ensure invalid state transitions are rejected

**Test:**
```javascript
describe('Order State Machine', () => {
  test('Invalid state transition should be rejected', async () => {
    // Create order in 'initiated' state
    const order = await db.orders.create({
      id: TEST_ORDER_ID,
      status: 'initiated',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID
    });

    // Attempt invalid transition: initiated → settled (skipping all intermediate states)
    await expect(
      orderSDK.updateStatus(TEST_ORDER_ID, 'settled')
    ).rejects.toThrow('INVALID_STATE_TRANSITION');

    // Check error details
    try {
      await orderSDK.updateStatus(TEST_ORDER_ID, 'settled');
    } catch (error) {
      expect(error.code).toBe('ERR_INVALID_STATE_TRANSITION');
      expect(error.message).toContain('Cannot transition from initiated to settled');
      expect(error.current_state).toBe('initiated');
      expect(error.attempted_state).toBe('settled');
      expect(error.allowed_transitions).toEqual(['created', 'failed']);
    }
  });

  test('Valid state transition should succeed', async () => {
    const order = await db.orders.create({
      id: TEST_ORDER_ID,
      status: 'initiated',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID
    });

    // Valid transition: initiated → created
    await orderSDK.updateStatus(TEST_ORDER_ID, 'created');

    const updated = await db.orders.findByPk(TEST_ORDER_ID);
    expect(updated.status).toBe('created');
  });
});
```

---

### Test 3.2: Wallet Success, Order Failure Rollback

**Objective:** Ensure wallet is reversed if order fails

**Test:**
```javascript
describe('Order & Wallet Atomicity', () => {
  test('Wallet debit should reverse if order creation fails', async () => {
    // Setup: User with balance
    await walletSDK.credit({
      user_id: TEST_USER_ID,
      amount: 1000,
      type: 'rez_coins'
    });

    const initialBalance = await walletSDK.getBalance(TEST_USER_ID);
    expect(initialBalance.rez_coins).toBe(1000);

    // Simulate: Wallet debit succeeds, then order fails
    const walletTransaction = await walletSDK.debit({
      user_id: TEST_USER_ID,
      amount: 500,
      merchant_id: TEST_MERCHANT_ID,
      order_id: TEST_ORDER_ID
    });

    expect(walletTransaction.status).toBe('SUCCESS');

    // Check balance after debit
    const afterDebit = await walletSDK.getBalance(TEST_USER_ID);
    expect(afterDebit.rez_coins).toBe(500);

    // Simulate order failure (e.g., inventory out of stock)
    await eventBus.emit('order.failed', {
      order_id: TEST_ORDER_ID,
      reason: 'OUT_OF_STOCK'
    });

    // Wait for reversal to process
    await sleep(1000);

    // Check balance is restored
    const afterReversal = await walletSDK.getBalance(TEST_USER_ID);
    expect(afterReversal.rez_coins).toBe(1000);

    // Check reversal transaction exists
    const reversal = await db.wallet_transactions.findOne({
      where: {
        user_id: TEST_USER_ID,
        type: 'REVERSAL',
        original_transaction_id: walletTransaction.transaction_id
      }
    });

    expect(reversal).toBeDefined();
    expect(reversal.amount).toBe(500);
  });
});
```

---

## 🧪 CATEGORY 4: EVENT CONTRACT TESTS

### Test 4.1: Missing Required Event Field

**Objective:** Ensure malformed events are rejected

**Test:**
```javascript
describe('Event Contract Validation', () => {
  test('Event missing required field should be rejected', async () => {
    // Attempt to emit order.created without order_id
    await expect(
      eventBus.emit('order.created', {
        // Missing order_id (required)
        user_id: TEST_USER_ID,
        merchant_id: TEST_MERCHANT_ID,
        total: 1000
      })
    ).rejects.toThrow('INVALID_EVENT_SCHEMA');

    // Check error details
    try {
      await eventBus.emit('order.created', {
        user_id: TEST_USER_ID,
        merchant_id: TEST_MERCHANT_ID
      });
    } catch (error) {
      expect(error.code).toBe('ERR_INVALID_EVENT_SCHEMA');
      expect(error.event_type).toBe('order.created');
      expect(error.missing_fields).toContain('order_id');
      expect(error.missing_fields).toContain('total');
    }

    // Check event was sent to Dead Letter Queue (DLQ)
    const dlqMessage = await getDLQMessage();
    expect(dlqMessage.event_type).toBe('order.created');
    expect(dlqMessage.error).toBe('INVALID_EVENT_SCHEMA');
  });

  test('Event with all required fields should succeed', async () => {
    await eventBus.emit('order.created', {
      event_id: 'evt_123',
      event_type: 'order.created',
      version: '1.0',
      timestamp: new Date().toISOString(),
      sequence: {
        number: 1,
        entity_id: TEST_ORDER_ID,
        entity_type: 'order'
      },
      data: {
        order_id: TEST_ORDER_ID,
        user_id: TEST_USER_ID,
        merchant_id: TEST_MERCHANT_ID,
        total: 1000,
        status: 'created'
      }
    });

    // Should succeed without errors
  });
});
```

---

### Test 4.2: Event Idempotency

**Objective:** Ensure replayed events don't cause double mutations

**Test:**
```javascript
describe('Event Idempotency', () => {
  test('Same event replayed twice should only mutate once', async () => {
    // Setup: User with initial balance
    await walletSDK.credit({
      user_id: TEST_USER_ID,
      amount: 1000,
      type: 'rez_coins'
    });

    // Emit wallet.credit.confirmed event
    const event = {
      event_id: 'evt_credit_123',
      event_type: 'wallet.credit.confirmed',
      version: '1.0',
      timestamp: new Date().toISOString(),
      sequence: { number: 1, entity_id: TEST_USER_ID, entity_type: 'user' },
      data: {
        user_id: TEST_USER_ID,
        amount: 500,
        type: 'rez_coins',
        transaction_id: 'txn_123'
      }
    };

    // Emit first time
    await eventBus.emit(event.event_type, event);
    await sleep(500);

    const balanceAfterFirst = await walletSDK.getBalance(TEST_USER_ID);
    expect(balanceAfterFirst.rez_coins).toBe(1500);

    // Emit SAME event again (replay/duplicate)
    await eventBus.emit(event.event_type, event);
    await sleep(500);

    const balanceAfterReplay = await walletSDK.getBalance(TEST_USER_ID);
    expect(balanceAfterReplay.rez_coins).toBe(1500);  // Still 1500, NOT 2000

    // Check idempotency log
    const idempotencyLog = await db.event_idempotency.findOne({
      where: { event_id: 'evt_credit_123' }
    });

    expect(idempotencyLog).toBeDefined();
    expect(idempotencyLog.processed_count).toBe(1);  // Processed only once
    expect(idempotencyLog.duplicate_count).toBe(1);  // Rejected once as duplicate
  });
});
```

---

## 🧪 CATEGORY 5: FAILURE & DEGRADED MODE TESTS

### Test 5.1: Wallet Service Down

**Objective:** Ensure checkout is blocked when wallet unavailable

**Test:**
```javascript
describe('Failure Mode: Wallet Service Down', () => {
  test('Checkout should be blocked when wallet service is unavailable', async () => {
    // Simulate wallet service down
    await mockWalletServiceDown();

    // Attempt checkout
    const result = await orderSDK.canCheckout({
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      total: 1000
    });

    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('WALLET_SERVICE_UNAVAILABLE');
    expect(result.user_message).toBe('Checkout temporarily unavailable. Please try again in a few minutes.');

    // Check error is logged
    const errorLog = await db.error_logs.findOne({
      where: {
        error_type: 'WALLET_SERVICE_DOWN',
        created_at: { [Op.gte]: new Date(Date.now() - 1000) }
      }
    });

    expect(errorLog).toBeDefined();
    expect(errorLog.severity).toBe('HIGH');
  });
});
```

---

### Test 5.2: Event Bus Delay

**Objective:** Ensure order continues even if event bus is slow

**Test:**
```javascript
describe('Degraded Mode: Event Bus Slow', () => {
  test('Order should continue if event bus is delayed', async () => {
    // Simulate event bus delay (5 seconds)
    await mockEventBusDelay(5000);

    // Create order
    const startTime = Date.now();
    const order = await orderSDK.createIntent({
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      items: [{ id: 'item_1', quantity: 1, price: 500 }],
      total: 500
    });

    const endTime = Date.now();
    const duration = endTime - startTime;

    // Order should succeed within 2 seconds (not wait for event bus)
    expect(duration).toBeLessThan(2000);
    expect(order.status).toBe('pending_merchant_acceptance');

    // Event should be queued (async)
    const queuedEvent = await getEventQueue();
    expect(queuedEvent).toContainEqual(
      expect.objectContaining({
        event_type: 'order.created',
        status: 'QUEUED'
      })
    );
  });
});
```

---

## 🧪 CATEGORY 6: PERMISSION & AUTHORITY TESTS

### Test 6.1: Merchant Attempts Rule Change

**Objective:** Ensure merchants cannot change rules

**Test:**
```javascript
describe('Permission Boundaries', () => {
  test('Merchant should not be able to change rules', async () => {
    // Merchant authentication token
    const merchantToken = await getMerchantAuthToken(TEST_MERCHANT_ID);

    // Attempt to create rule
    const response = await fetch('https://api.rabtul.com/rules', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${merchantToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rule_type: 'COIN_EXPIRY',
        config: { days: 90 }
      })
    });

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({
      error: 'FORBIDDEN',
      message: 'Only HQ Admins can create rules',
      code: 'ERR_INSUFFICIENT_PERMISSIONS'
    });
  });

  test('HQ Admin should be able to create rules', async () => {
    const adminToken = await getAdminAuthToken('SUPER_ADMIN');

    const response = await fetch('https://api.rabtul.com/rules', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rule_type: 'COIN_EXPIRY',
        config: { days: 90 }
      })
    });

    expect(response.status).toBe(201);
    const rule = await response.json();
    expect(rule.rule_type).toBe('COIN_EXPIRY');
    expect(rule.config.days).toBe(90);
  });
});
```

---

### Test 6.2: Admin Rule Rollback

**Objective:** Ensure rule versioning allows safe rollback

**Test:**
```javascript
describe('Rule Rollback', () => {
  test('Admin should be able to rollback to previous rule version', async () => {
    // Create rule v1
    const ruleV1 = await rulesSDK.createRule({
      rule_id: 'coin_expiry',
      rule_type: 'COIN_EXPIRY',
      config: { days: 30 }
    });

    // Update to v2
    const ruleV2 = await rulesSDK.updateRule('coin_expiry', {
      config: { days: 60 }
    });

    // Rollback to v1
    await rulesSDK.rollbackRule('coin_expiry', ruleV1.version);

    // Check active rule
    const activeRule = await rulesSDK.getActiveRule('coin_expiry');
    expect(activeRule.config.days).toBe(30);  // Back to v1
    expect(activeRule.version).toBe(ruleV1.version);

    // Check rule history
    const history = await rulesSDK.getRuleHistory('coin_expiry');
    expect(history).toHaveLength(3);  // v1 → v2 → v1 (rollback)
    expect(history[2].action).toBe('ROLLBACK');
    expect(history[2].rolled_back_to).toBe(ruleV1.version);
  });
});
```

---

## 🧪 CATEGORY 7: ATTRIBUTION TESTS

### Test 7.1: Multi-App Journey Attribution

**Objective:** Ensure correct attribution in cross-app journeys

**Test:**
```javascript
describe('Multi-App Attribution', () => {
  test('Should attribute to last-touch app by default', async () => {
    // Simulate user journey: BuzzLoop → ReZ → Dinezy

    // 1. User discovers restaurant in BuzzLoop
    await analyticsSDK.track('merchant.viewed', {
      app_id: 'buzzloop',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      source: 'social_feed'
    });

    await sleep(100);

    // 2. User searches in ReZ
    await analyticsSDK.track('merchant.viewed', {
      app_id: 'rez',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      source: 'search'
    });

    await sleep(100);

    // 3. User books in Dinezy
    const booking = await orderSDK.createIntent({
      app_id: 'dinezy',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      type: 'RESTAURANT_BOOKING',
      total: 0  // No payment for booking
    });

    // Check attribution
    const attribution = await analyticsSDK.getAttribution(booking.id);

    // Last-touch attribution (default)
    expect(attribution.credited_app).toBe('dinezy');
    expect(attribution.model).toBe('LAST_TOUCH');

    // Journey should be tracked for analytics
    expect(attribution.journey).toEqual([
      { app_id: 'buzzloop', touchpoint: 'discovery' },
      { app_id: 'rez', touchpoint: 'consideration' },
      { app_id: 'dinezy', touchpoint: 'conversion' }
    ]);
  });

  test('Should use first-touch for social referrals', async () => {
    // 1. User clicks referral link in BuzzLoop (social referral)
    await analyticsSDK.track('social.referral.clicked', {
      app_id: 'buzzloop',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      referrer_id: 'user_456'
    });

    await sleep(100);

    // 2. User purchases in ReZ
    const order = await orderSDK.createIntent({
      app_id: 'rez',
      user_id: TEST_USER_ID,
      merchant_id: TEST_MERCHANT_ID,
      total: 1000
    });

    // Check attribution
    const attribution = await analyticsSDK.getAttribution(order.id);

    // First-touch attribution (social referral exception)
    expect(attribution.credited_app).toBe('buzzloop');
    expect(attribution.model).toBe('FIRST_TOUCH');
    expect(attribution.reason).toBe('SOCIAL_REFERRAL');
  });
});
```

---

## 🎯 TEST EXECUTION STRATEGY

### Phase 1: Core Contract Tests
Run these BEFORE any code is deployed:
- SDK Enforcement
- Wallet Safety
- State Machine Validation

### Phase 2: Integration Tests
Run these in staging environment:
- Event Contracts
- Attribution
- Settlement

### Phase 3: Failure Mode Tests
Run these in chaos engineering sessions:
- Service Down scenarios
- Network delays
- Partial failures

---

## 🚀 CI/CD INTEGRATION

### Required Gates

```yaml
# .github/workflows/architecture-tests.yml
name: Architecture Contract Tests

on:
  pull_request:
  push:
    branches: [main, staging, production]

jobs:
  architecture_tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Run Architecture Tests
        run: npm run test:architecture
        env:
          TEST_ENV: ci
          RABTUL_API_URL: ${{ secrets.RABTUL_TEST_API_URL }}
          RABTUL_API_KEY: ${{ secrets.RABTUL_TEST_API_KEY }}

      - name: Architecture Test Report
        if: always()
        uses: dorny/test-reporter@v1
        with:
          name: Architecture Test Results
          path: 'test-results/architecture-tests.xml'
          reporter: jest-junit

      - name: Fail if Tests Failed
        if: failure()
        run: |
          echo "❌ Architecture tests failed. This PR cannot be merged."
          exit 1
```

### Test Execution Command

```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --testPathPattern=unit",
    "test:integration": "jest --testPathPattern=integration",
    "test:architecture": "jest --testPathPattern=architecture --runInBand",
    "test:all": "npm run test:unit && npm run test:integration && npm run test:architecture"
  }
}
```

---

## 📋 ENFORCEMENT CHECKLIST

### Before ANY Feature Ships:

- [ ] All unit tests pass (80%+ coverage)
- [ ] All integration tests pass
- [ ] All architecture contract tests pass
- [ ] SDK enforcement tests pass
- [ ] Event contract tests pass
- [ ] State machine tests pass
- [ ] Failure mode tests pass
- [ ] Security audit completed
- [ ] Performance benchmarks met
- [ ] Documentation updated

**If ANY test fails → Feature does NOT ship.**

---

## 🎯 SUMMARY

### What These Tests Enforce

✅ **SDK Boundaries** - No app can bypass Rabtul
✅ **Business Rules** - Deterministic, versioned, backward compatible
✅ **State Machines** - Invalid transitions impossible
✅ **Event Integrity** - Schema validation, idempotency
✅ **Wallet Safety** - Atomic, reversible, auditable
✅ **Attribution** - Correct, consistent, verifiable
✅ **Permissions** - Role-based, enforceable

### Why This Matters

Without these tests:
- ❌ Developers will bypass rules
- ❌ Wallet integrity will break
- ❌ Events will be inconsistent
- ❌ Attribution will be wrong
- ❌ Scaling will fail

With these tests:
- ✅ Rules are enforced automatically
- ✅ Wallet is provably correct
- ✅ Events are consistent
- ✅ Attribution is accurate
- ✅ Scaling is safe

---

**Status:** ✅ ENFORCEMENT-READY
**Integration:** CI/CD pipeline
**Rule:** If it doesn't pass tests, it doesn't ship

🎉 **Architecture enforced through code, not documentation!**
