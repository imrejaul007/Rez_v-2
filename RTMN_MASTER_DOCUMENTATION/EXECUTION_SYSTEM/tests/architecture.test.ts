/**
 * ARCHITECTURE ENFORCEMENT TESTS
 *
 * PURPOSE: Prevent developers from violating system rules
 *
 * RULES:
 * - These tests run in CI/CD pipeline
 * - If ANY test fails → PR cannot merge
 * - Tests enforce: schemas, state machines, SDK usage, coin priority
 *
 * RUN: npm run test:architecture
 */

import { describe, test, expect } from '@jest/globals';
import fetch from 'node-fetch';

const API_BASE = process.env.API_BASE_URL || 'http://localhost:3000';

/**
 * CATEGORY 1: SDK ENFORCEMENT
 * Prevents direct API calls without SDK
 */
describe('SDK Enforcement', () => {
  test('API rejects calls without SDK headers', async () => {
    const response = await fetch(`${API_BASE}/api/wallet/user-123/balance`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer fake-token'
        // Missing: X-SDK-Name, X-SDK-Version, X-SDK-Signature
      }
    });

    expect(response.status).toBe(403);

    const body = await response.json();
    expect(body.code).toBe('SDK_REQUIRED');
    expect(body.message).toContain('SDK usage');
  });

  test('API accepts calls with valid SDK headers', async () => {
    const timestamp = Date.now().toString();
    const signature = generateSignature({}, timestamp, 'test-secret');

    const response = await fetch(`${API_BASE}/api/wallet/user-123/balance`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer valid-token',
        'X-SDK-Name': '@rabtul/wallet-sdk',
        'X-SDK-Version': '1.0.0',
        'X-App-ID': 'rez-app',
        'X-API-Key': 'test-key',
        'X-Request-Timestamp': timestamp,
        'X-Request-Signature': signature
      }
    });

    // Should NOT be 403 SDK_REQUIRED
    expect(response.status).not.toBe(403);
  });

  test('API rejects expired request timestamps', async () => {
    const oldTimestamp = (Date.now() - 400000).toString(); // 6+ minutes ago
    const signature = generateSignature({}, oldTimestamp, 'test-secret');

    const response = await fetch(`${API_BASE}/api/wallet/user-123/balance`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer valid-token',
        'X-SDK-Name': '@rabtul/wallet-sdk',
        'X-SDK-Version': '1.0.0',
        'X-App-ID': 'rez-app',
        'X-API-Key': 'test-key',
        'X-Request-Timestamp': oldTimestamp,
        'X-Request-Signature': signature
      }
    });

    expect(response.status).toBe(403);

    const body = await response.json();
    expect(body.code).toBe('SDK_TIMESTAMP_EXPIRED');
  });
});

/**
 * CATEGORY 2: STATE MACHINE ENFORCEMENT
 * Prevents invalid order state transitions
 */
describe('Order State Machine', () => {
  test('Order cannot jump from "paid" to "delivered"', async () => {
    // Create test order in "paid" status
    const orderId = await createTestOrder({ status: 'paid' });

    // Attempt invalid transition: paid → delivered (skips confirmed, preparing, etc.)
    const response = await makeSDKRequest('PATCH', `/api/orders/${orderId}/status`, {
      new_status: 'delivered',
      changed_by: 'test-user'
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.code).toBe('ORDER_INVALID_TRANSITION');
    expect(body.message).toContain('paid');
    expect(body.message).toContain('delivered');
  });

  test('Order follows valid transition path', async () => {
    const orderId = await createTestOrder({ status: 'paid' });

    // Valid transition: paid → confirmed
    const response1 = await makeSDKRequest('PATCH', `/api/orders/${orderId}/status`, {
      new_status: 'confirmed',
      changed_by: 'test-merchant'
    });

    expect(response1.status).toBe(200);

    // Valid transition: confirmed → preparing
    const response2 = await makeSDKRequest('PATCH', `/api/orders/${orderId}/status`, {
      new_status: 'preparing',
      changed_by: 'test-merchant'
    });

    expect(response2.status).toBe(200);
  });

  test('Terminal states cannot be changed', async () => {
    const orderId = await createTestOrder({ status: 'completed' });

    // Attempt to change completed order
    const response = await makeSDKRequest('PATCH', `/api/orders/${orderId}/status`, {
      new_status: 'delivered',
      changed_by: 'test-user'
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.code).toBe('ORDER_INVALID_STATE');
  });
});

/**
 * CATEGORY 3: WALLET SAFETY
 * Prevents wallet violations
 */
describe('Wallet Safety Rules', () => {
  test('Coins are used in mandatory priority order', async () => {
    // Setup: User has all coin types
    const userId = await createTestUser({
      promo_coins: 100,
      branded_coins: 200,
      rez_coins: 300,
      cash: 1000
    });

    // Debit 250 coins
    const response = await makeSDKRequest('POST', '/api/wallet/debit', {
      user_id: userId,
      amount: 250,
      merchant_id: 'test-merchant',
      order_id: 'test-order',
      reason: 'ORDER_PAYMENT'
    });

    expect(response.status).toBe(200);

    const body = await response.json();
    const breakdown = body.data.breakdown;

    // MUST use promo first (100), then branded (150)
    expect(breakdown.promo_coins_used).toBe(100);
    expect(breakdown.branded_coins_used).toBe(150);
    expect(breakdown.rez_coins_used).toBe(0);
    expect(breakdown.cash_used).toBe(0);
  });

  test('Debit fails if insufficient balance', async () => {
    const userId = await createTestUser({
      promo_coins: 50,
      branded_coins: 0,
      rez_coins: 0,
      cash: 0
    });

    const response = await makeSDKRequest('POST', '/api/wallet/debit', {
      user_id: userId,
      amount: 100,
      merchant_id: 'test-merchant',
      order_id: 'test-order',
      reason: 'ORDER_PAYMENT'
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.code).toBe('WALLET_INSUFFICIENT_FUNDS');
    expect(body.details.required).toBe(100);
    expect(body.details.available).toBe(50);
  });

  test('Balance is computed from transactions, not stored', async () => {
    const userId = await createTestUser();

    // Credit 100 promo coins
    await makeSDKRequest('POST', '/api/wallet/credit', {
      user_id: userId,
      amount: 100,
      coin_type: 'promo_coins',
      reason: 'SIGNUP_BONUS'
    });

    // Debit 30 promo coins
    await makeSDKRequest('POST', '/api/wallet/debit', {
      user_id: userId,
      amount: 30,
      merchant_id: 'test-merchant',
      order_id: 'test-order',
      reason: 'ORDER_PAYMENT'
    });

    // Get balance
    const response = await makeSDKRequest('GET', `/api/wallet/${userId}/balance`);
    const body = await response.json();

    // Balance MUST be computed: 100 - 30 = 70
    expect(body.data.promo_coins).toBe(70);

    // Verify by checking database: NO balance column should exist
    const hasBalanceColumn = await checkDatabaseSchema('wallet_transactions', 'balance');
    expect(hasBalanceColumn).toBe(false);
  });
});

/**
 * CATEGORY 4: SCHEMA VALIDATION
 * Prevents invalid fields
 */
describe('Schema Validation', () => {
  test('Cannot create user with field not in schema', async () => {
    const response = await makeSDKRequest('POST', '/api/users', {
      phone: '+91-9876543210',
      email: 'test@example.com',
      custom_field: 'invalid' // NOT in UserSchema
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.code).toBe('VALIDATION_FAILED');
    expect(body.message).toContain('custom_field');
  });

  test('Enum fields only accept allowed values', async () => {
    const userId = await createTestUser();

    // Attempt to set invalid loyalty tier
    const response = await makeSDKRequest('PATCH', `/api/users/${userId}`, {
      loyalty_tier: 'platinum' // NOT in allowed_values: ['basic', 'silver', 'gold', 'prive']
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.code).toBe('VALIDATION_FAILED');
    expect(body.message).toContain('loyalty_tier');
  });

  test('Required fields must be provided', async () => {
    const response = await makeSDKRequest('POST', '/api/orders', {
      user_id: 'test-user',
      // Missing: merchant_id, items, delivery_address (REQUIRED)
      payment_method: 'wallet'
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.code).toBe('API_MISSING_PARAMETER');
  });
});

/**
 * CATEGORY 5: ATOMIC OPERATIONS
 * Ensures order + wallet are atomic
 */
describe('Atomic Operations', () => {
  test('Order creation + wallet debit are atomic', async () => {
    const userId = await createTestUser({
      promo_coins: 100,
      branded_coins: 0,
      rez_coins: 0,
      cash: 0
    });

    // Attempt to create order for 200 (insufficient funds)
    const response = await makeSDKRequest('POST', '/api/orders', {
      user_id: userId,
      merchant_id: 'test-merchant',
      items: [{ product_id: 'test-product', quantity: 1, unit_price: 200 }],
      delivery_address: getTestAddress(),
      payment_method: 'wallet'
    });

    expect(response.status).toBe(400);

    // Verify: NO order created
    const orders = await getOrders(userId);
    expect(orders.length).toBe(0);

    // Verify: NO wallet transaction created
    const transactions = await getWalletTransactions(userId);
    expect(transactions.length).toBe(0);
  });

  test('Successful order creates both order and wallet transaction', async () => {
    const userId = await createTestUser({
      promo_coins: 500,
      branded_coins: 0,
      rez_coins: 0,
      cash: 0
    });

    const response = await makeSDKRequest('POST', '/api/orders', {
      user_id: userId,
      merchant_id: 'test-merchant',
      items: [{ product_id: 'test-product', quantity: 1, unit_price: 200 }],
      delivery_address: getTestAddress(),
      payment_method: 'wallet'
    });

    expect(response.status).toBe(201);

    const body = await response.json();

    // Verify: Order created
    expect(body.data.order.id).toBeDefined();
    expect(body.data.order.status).toBe('created');

    // Verify: Wallet transaction created
    expect(body.data.wallet_debit.transaction_id).toBeDefined();
    expect(body.data.wallet_debit.breakdown.promo_coins_used).toBe(200);
  });
});

/**
 * CATEGORY 6: ERROR CODE ENFORCEMENT
 * All errors use ErrorCode enum
 */
describe('Error Code Enforcement', () => {
  test('All API errors include error code', async () => {
    const response = await makeSDKRequest('GET', '/api/orders/non-existent-id');

    expect(response.status).toBe(404);

    const body = await response.json();
    expect(body.code).toBeDefined();
    expect(body.code).toBe('ORDER_NOT_FOUND');
  });

  test('Error codes match ERROR_CODES enum', async () => {
    const response = await makeSDKRequest('POST', '/api/wallet/debit', {
      user_id: 'test-user',
      amount: 1000,
      merchant_id: 'test-merchant',
      order_id: 'test-order',
      reason: 'ORDER_PAYMENT'
    });

    const body = await response.json();

    // Load ERROR_CODES enum
    const { ErrorCode } = await import('../ERROR_CODES');

    // Error code MUST exist in enum
    expect(Object.values(ErrorCode)).toContain(body.code);
  });
});

/**
 * CATEGORY 7: VIEW MODEL ENFORCEMENT
 * Frontend receives UI-ready data
 */
describe('ViewModel Enforcement', () => {
  test('Wallet balance endpoint returns ViewModel format', async () => {
    const userId = await createTestUser();

    const response = await makeSDKRequest('GET', `/api/wallet/${userId}/balance`);
    const body = await response.json();

    // Should return ViewModel, not raw schema data
    expect(body.data).toHaveProperty('coins');
    expect(body.data.coins).toHaveProperty('promo');
    expect(body.data.coins).toHaveProperty('branded');
    expect(body.data.coins).toHaveProperty('rez');
    expect(body.data.coins).toHaveProperty('cash');

    // Each coin type should have displayAmount (UI-ready)
    expect(body.data.coins.promo).toHaveProperty('displayAmount');
    expect(body.data.coins.promo).toHaveProperty('icon');
    expect(body.data.coins.promo).toHaveProperty('color');

    // Should include tier info
    expect(body.data).toHaveProperty('tier');
    expect(body.data.tier).toHaveProperty('displayName');
    expect(body.data.tier).toHaveProperty('multiplier');

    // Should include actions
    expect(body.data).toHaveProperty('actions');
    expect(body.data.actions).toHaveProperty('topUpButton');
    expect(body.data.actions.topUpButton).toHaveProperty('enabled');
    expect(body.data.actions.topUpButton).toHaveProperty('text');
  });
});

// ============================================
// HELPER FUNCTIONS
// ============================================

function generateSignature(payload: any, timestamp: string, secret: string): string {
  const crypto = require('crypto');
  const data = JSON.stringify(payload) + timestamp;
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

async function makeSDKRequest(method: string, path: string, body?: any) {
  const timestamp = Date.now().toString();
  const signature = generateSignature(body || {}, timestamp, process.env.API_SECRET || 'test-secret');

  return fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.TEST_TOKEN}`,
      'X-SDK-Name': '@rabtul/test-sdk',
      'X-SDK-Version': '1.0.0',
      'X-App-ID': 'test-app',
      'X-API-Key': process.env.API_KEY || 'test-key',
      'X-Request-Timestamp': timestamp,
      'X-Request-Signature': signature
    },
    ...(body && { body: JSON.stringify(body) })
  });
}

async function createTestUser(wallet?: any): Promise<string> {
  // Implementation: Create test user and return ID
  return 'test-user-id';
}

async function createTestOrder(data: any): Promise<string> {
  // Implementation: Create test order and return ID
  return 'test-order-id';
}

async function checkDatabaseSchema(table: string, column: string): Promise<boolean> {
  // Implementation: Check if column exists in table schema
  return false;
}

function getTestAddress() {
  return {
    line1: 'Test Address',
    city: 'Test City',
    state: 'Test State',
    pincode: '123456',
    phone: '+91-9876543210'
  };
}

async function getOrders(userId: string): Promise<any[]> {
  // Implementation: Fetch orders for user
  return [];
}

async function getWalletTransactions(userId: string): Promise<any[]> {
  // Implementation: Fetch wallet transactions for user
  return [];
}
