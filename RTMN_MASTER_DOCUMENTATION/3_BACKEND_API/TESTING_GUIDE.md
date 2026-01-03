# Testing Guide - RTMN Backend

**Last Updated:** 2026-01-03
**Frameworks:** Jest, Supertest
**Coverage Target:** 80%+

---

## 📋 TESTING STRATEGY

### Test Pyramid
1. **Unit Tests (70%)** - Individual functions
2. **Integration Tests (20%)** - API endpoints
3. **E2E Tests (10%)** - Complete user flows

---

## 🚀 SETUP

### Install Dependencies

```bash
npm install --save-dev jest supertest @faker-js/faker
```

### jest.config.js

```javascript
module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/config/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};
```

### package.json Scripts

```json
{
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "test:unit": "jest --testPathPattern=unit",
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "jest --testPathPattern=e2e"
  }
}
```

---

## 🧪 UNIT TESTS

### Example: Coin Calculation Logic

```javascript
// src/services/coins.test.js
const { calculateCoinsEarned } = require('./coins');

describe('Coin Calculation Service', () => {
  describe('calculateCoinsEarned', () => {
    test('should calculate base coins correctly', () => {
      const order = {
        subtotal: 1000,
        user: { tier: 'basic' },
        product: { category: 'default' }
      };

      const coins = calculateCoinsEarned(order);

      expect(coins).toBe(50); // 5% of 1000
    });

    test('should apply tier multiplier for gold users', () => {
      const order = {
        subtotal: 1000,
        user: { tier: 'gold' },
        product: { category: 'default' }
      };

      const coins = calculateCoinsEarned(order);

      expect(coins).toBe(75); // 5% * 1.5 = 7.5%, rounded to 75
    });

    test('should apply category bonus for grocery', () => {
      const order = {
        subtotal: 1000,
        user: { tier: 'basic' },
        product: { category: 'grocery' }
      };

      const coins = calculateCoinsEarned(order);

      expect(coins).toBe(70); // 5% + 2% = 70
    });

    test('should cap at maximum coins per order', () => {
      const order = {
        subtotal: 50000,
        user: { tier: 'prive' },
        product: { category: 'default' }
      };

      const coins = calculateCoinsEarned(order);

      expect(coins).toBe(1000); // Capped at 1000
    });
  });
});
```

---

## 🔗 INTEGRATION TESTS

### Example: Auth API Tests

```javascript
// tests/integration/auth.test.js
const request = require('supertest');
const app = require('../../server');
const db = require('../../src/models');
const redis = require('../../src/config/redis');

describe('Authentication API', () => {
  beforeAll(async () => {
    // Setup test database
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await db.sequelize.close();
    await redis.quit();
  });

  beforeEach(async () => {
    // Clear database before each test
    await db.users.destroy({ where: {}, force: true });
    await redis.flushdb();
  });

  describe('POST /api/auth/request-otp', () => {
    test('should send OTP to valid phone number', async () => {
      const response = await request(app)
        .post('/api/auth/request-otp')
        .send({ phone: '+919999999999' })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.expiresIn).toBe(300);

      // Verify OTP stored in Redis
      const otp = await redis.get('otp:+919999999999');
      expect(otp).toBeTruthy();
    });

    test('should reject invalid phone number', async () => {
      const response = await request(app)
        .post('/api/auth/request-otp')
        .send({ phone: 'invalid' })
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error.code).toBe(1013);
    });

    test('should enforce rate limiting', async () => {
      // First request
      await request(app)
        .post('/api/auth/request-otp')
        .send({ phone: '+919999999999' })
        .expect(200);

      // Second request immediately
      const response = await request(app)
        .post('/api/auth/request-otp')
        .send({ phone: '+919999999999' })
        .expect(429);

      expect(response.body.error.code).toBe(1002);
    });
  });

  describe('POST /api/auth/verify-otp', () => {
    beforeEach(async () => {
      // Setup OTP in Redis
      await redis.setex(
        'otp:+919999999999',
        300,
        JSON.stringify({ otp: '123456', attempts: 0 })
      );
    });

    test('should verify correct OTP and create user', async () => {
      const response = await request(app)
        .post('/api/auth/verify-otp')
        .send({
          phone: '+919999999999',
          otp: '123456',
          deviceInfo: {
            deviceId: 'test_device',
            platform: 'android'
          }
        })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.user.phone).toBe('+919999999999');
      expect(response.body.data.tokens.accessToken).toBeTruthy();

      // Verify user created
      const user = await db.users.findOne({
        where: { phone: '+919999999999' }
      });
      expect(user).toBeTruthy();
    });

    test('should reject incorrect OTP', async () => {
      const response = await request(app)
        .post('/api/auth/verify-otp')
        .send({
          phone: '+919999999999',
          otp: '000000'
        })
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error.code).toBe(1003);
    });
  });
});
```

---

### Example: Cart API Tests

```javascript
// tests/integration/cart.test.js
const request = require('supertest');
const app = require('../../server');
const { createTestUser, createTestProduct } = require('../helpers');

describe('Cart API', () => {
  let authToken;
  let userId;
  let productId;

  beforeAll(async () => {
    // Create test user and get token
    const { user, token } = await createTestUser();
    authToken = token;
    userId = user.id;

    // Create test product
    const product = await createTestProduct();
    productId = product.id;
  });

  describe('POST /api/cart/add', () => {
    test('should add product to cart', async () => {
      const response = await request(app)
        .post('/api/cart/add')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId,
          quantity: 2
        })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.cart.items).toHaveLength(1);
      expect(response.body.data.cart.items[0].quantity).toBe(2);
    });

    test('should reject out of stock product', async () => {
      // Create out of stock product
      const outOfStockProduct = await createTestProduct({ stock: 0 });

      const response = await request(app)
        .post('/api/cart/add')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          productId: outOfStockProduct.id,
          quantity: 1
        })
        .expect(409);

      expect(response.body.error.code).toBe(3001);
    });

    test('should require authentication', async () => {
      await request(app)
        .post('/api/cart/add')
        .send({ productId, quantity: 1 })
        .expect(401);
    });
  });
});
```

---

## 🌐 E2E TESTS

### Complete User Flow

```javascript
// tests/e2e/checkout-flow.test.js
const request = require('supertest');
const app = require('../../server');
const { faker } = require('@faker-js/faker');

describe('Complete Checkout Flow', () => {
  test('should complete full purchase flow', async () => {
    // 1. Request OTP
    const phone = faker.phone.number('+91##########');

    await request(app)
      .post('/api/auth/request-otp')
      .send({ phone })
      .expect(200);

    // Get OTP from Redis for testing
    const otpData = await redis.get(`otp:${phone}`);
    const { otp } = JSON.parse(otpData);

    // 2. Verify OTP and register
    const authResponse = await request(app)
      .post('/api/auth/verify-otp')
      .send({
        phone,
        otp,
        deviceInfo: { deviceId: 'test', platform: 'android' }
      })
      .expect(200);

    const { accessToken } = authResponse.body.data.tokens;

    // 3. Add product to cart
    const product = await createTestProduct({ price: 500, stock: 10 });

    await request(app)
      .post('/api/cart/add')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ productId: product.id, quantity: 2 })
      .expect(200);

    // 4. Add delivery address
    const addressResponse = await request(app)
      .post('/api/user/addresses')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        line1: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        phone
      })
      .expect(200);

    const addressId = addressResponse.body.data.address.id;

    // 5. Calculate checkout
    const checkoutResponse = await request(app)
      .post('/api/checkout/calculate')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        deliveryAddressId: addressId,
        coinsToRedeem: 0
      })
      .expect(200);

    expect(checkoutResponse.body.data.breakdown.subtotal).toBe(1000);

    // 6. Place order
    const orderResponse = await request(app)
      .post('/api/orders/create')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        deliveryAddressId: addressId,
        paymentMethod: 'razorpay'
      })
      .expect(200);

    const { order, payment } = orderResponse.body.data;

    expect(order.status).toBe('pending');
    expect(payment.status).toBe('pending');

    // 7. Simulate payment success
    await request(app)
      .post('/api/webhooks/razorpay')
      .send({
        event: 'payment.captured',
        payload: {
          payment: {
            entity: {
              id: payment.gateway_transaction_id,
              order_id: payment.gateway_order_id,
              status: 'captured'
            }
          }
        }
      })
      .expect(200);

    // 8. Verify order confirmed
    const orderCheckResponse = await request(app)
      .get(`/api/orders/${order.id}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(orderCheckResponse.body.data.order.status).toBe('confirmed');

    // 9. Verify coins earned
    const walletResponse = await request(app)
      .get('/api/wallet/balance')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(walletResponse.body.data.wallet.balances.rezCoins).toBeGreaterThan(0);
  });
});
```

---

## 🔧 TEST HELPERS

### tests/helpers.js

```javascript
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../src/models');

async function createTestUser(overrides = {}) {
  const hashedPassword = await bcrypt.hash('Test@123', 12);

  const user = await db.users.create({
    id: uuidv4(),
    phone: overrides.phone || `+91999999${Math.floor(Math.random() * 10000)}`,
    email: overrides.email || `test${Date.now()}@test.com`,
    password_hash: hashedPassword,
    first_name: 'Test',
    last_name: 'User',
    role: overrides.role || 'customer',
    tier: overrides.tier || 'basic',
    is_phone_verified: true,
    is_active: true,
    ...overrides
  });

  // Create wallet
  await db.wallets.create({
    id: uuidv4(),
    user_id: user.id,
    rez_coins_balance: overrides.coins || 0
  });

  // Generate token
  const token = jwt.sign(
    {
      sub: user.id,
      phone: user.phone,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { user, token };
}

async function createTestProduct(overrides = {}) {
  const merchant = await db.merchants.findOne() || await createTestMerchant();

  return await db.products.create({
    id: uuidv4(),
    merchant_id: merchant.id,
    name: overrides.name || 'Test Product',
    price: overrides.price || 500,
    stock_quantity: overrides.stock || 100,
    category: overrides.category || 'default',
    is_active: true,
    ...overrides
  });
}

async function createTestMerchant(overrides = {}) {
  const owner = await createTestUser({ role: 'merchant_owner' });

  return await db.merchants.create({
    id: uuidv4(),
    owner_id: owner.user.id,
    business_name: 'Test Merchant',
    legal_name: 'Test Merchant Pvt Ltd',
    business_type: 'retail_store',
    phone: owner.user.phone,
    address_line1: '123 Test Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    status: 'active',
    ...overrides
  });
}

module.exports = {
  createTestUser,
  createTestProduct,
  createTestMerchant
};
```

---

## 📊 COVERAGE REPORT

```bash
# Run tests with coverage
npm test -- --coverage

# Output example:
-----------------------------|---------|----------|---------|---------|
File                         | % Stmts | % Branch | % Funcs | % Lines |
-----------------------------|---------|----------|---------|---------|
All files                    |   85.32 |    78.45 |   82.11 |   85.89 |
 src/services               |   92.15 |    88.32 |   89.45 |   92.67 |
  coins.js                   |   95.23 |    91.45 |   94.12 |   95.78 |
  auth.js                    |   89.67 |    85.23 |   88.90 |   90.12 |
 src/controllers            |   78.45 |    72.11 |   75.34 |   79.12 |
  orderController.js         |   82.34 |    76.45 |   79.23 |   83.12 |
-----------------------------|---------|----------|---------|---------|
```

---

## 🚨 CONTINUOUS TESTING

### GitHub Actions CI

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
        env:
          DATABASE_URL: postgresql://postgres:test@localhost:5432/test
          REDIS_URL: redis://localhost:6379

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Coverage Target:** 80%+
**Next:** [Complete Error Codes](./COMPLETE_ERROR_CODES.md)
