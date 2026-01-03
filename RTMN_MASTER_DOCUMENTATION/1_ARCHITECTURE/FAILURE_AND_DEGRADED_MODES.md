# 🔄 Failure & Degraded Mode Definitions - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ PRODUCTION RESILIENCE RULES
**Purpose:** Define system behavior when dependencies fail

---

## ⚠️ THE PROBLEM

**What happens when:**
- Razorpay is down during checkout?
- Rabtul Wallet service crashes?
- Redis cache is unavailable?
- PostgreSQL is slow?
- Kafka broker fails?

**Right now: UNCLEAR**

Developers will make wrong assumptions:
- "Just retry forever" (causes cascading failures)
- "Return 500 error" (bad UX)
- "Skip the operation" (data corruption)

**This document provides DEFINITIVE answers.**

---

## 🎯 DEGRADATION STRATEGY

### Graceful Degradation Principle

```
NEVER FAIL COMPLETELY IF YOU CAN DEGRADE GRACEFULLY
```

**Priority Order:**
1. ✅ **Full functionality** (all services healthy)
2. ⚠️ **Degraded mode** (some features disabled, core works)
3. ❌ **Maintenance mode** (read-only, no writes)
4. 🚨 **Emergency mode** (static error page)

---

## 📊 SERVICE DEPENDENCY MATRIX

| Service | Criticality | Fallback | Impact if Down | Max Downtime |
|---------|-------------|----------|----------------|--------------|
| **PostgreSQL** | CRITICAL | None | Complete outage | 0 seconds |
| **Redis** | HIGH | In-memory cache | Slower, no sessions | 5 minutes |
| **Razorpay** | HIGH | COD fallback | No online payments | 30 minutes |
| **Rabtul Wallet** | HIGH | Defer coin credit | No coin operations | 15 minutes |
| **Kafka** | MEDIUM | Local queue | No analytics | 1 hour |
| **Elasticsearch** | MEDIUM | PostgreSQL search | Slower search | 2 hours |
| **Twilio** | MEDIUM | Email fallback | No SMS | 1 hour |
| **S3** | LOW | Local storage | No image uploads | 4 hours |
| **FCM** | LOW | Skip notifications | No push alerts | Indefinite |

---

## 🛡️ FAILURE MODES BY SERVICE

### 1. PostgreSQL Failure

**Status:** CRITICAL - No fallback possible

```javascript
// Health check
async function checkPostgreSQLHealth() {
  try {
    await db.sequelize.authenticate();
    return { status: 'healthy' };
  } catch (error) {
    // CRITICAL FAILURE
    await alertOps({
      severity: 'P0',
      service: 'PostgreSQL',
      message: 'Database connection failed',
      error: error.message
    });

    // Enter emergency mode
    process.env.EMERGENCY_MODE = 'true';

    return {
      status: 'critical',
      action: 'EMERGENCY_MODE'
    };
  }
}

// Emergency mode middleware
function emergencyMode(req, res, next) {
  if (process.env.EMERGENCY_MODE === 'true') {
    return res.status(503).json({
      success: false,
      error: {
        code: 5000,
        message: 'Service temporarily unavailable',
        userMessage: 'We are experiencing technical difficulties. Please try again in a few minutes.',
        retryAfter: 300 // 5 minutes
      }
    });
  }
  next();
}

app.use(emergencyMode);
```

**Action:**
- ✅ Show maintenance page
- ✅ Alert ops team (P0 incident)
- ✅ Return HTTP 503 (Service Unavailable)
- ❌ Do NOT accept new requests
- ❌ Do NOT retry (will cascade)

---

### 2. Redis Failure

**Status:** HIGH - Fallback to in-memory

```javascript
// Resilient cache wrapper
class ResilientCache {
  constructor() {
    this.redis = redis;
    this.memoryCache = new Map(); // In-memory fallback
    this.redisHealthy = true;
  }

  async get(key) {
    if (this.redisHealthy) {
      try {
        return await this.redis.get(key);
      } catch (error) {
        await this.handleRedisFailure(error);
        // Fall through to memory cache
      }
    }

    // Fallback: In-memory cache
    return this.memoryCache.get(key);
  }

  async set(key, value, ttl) {
    // Always set in memory cache
    this.memoryCache.set(key, value);

    // Set TTL for memory cache
    if (ttl) {
      setTimeout(() => this.memoryCache.delete(key), ttl * 1000);
    }

    if (this.redisHealthy) {
      try {
        if (ttl) {
          await this.redis.setex(key, ttl, value);
        } else {
          await this.redis.set(key, value);
        }
      } catch (error) {
        await this.handleRedisFailure(error);
        // Memory cache already set, continue
      }
    }
  }

  async handleRedisFailure(error) {
    this.redisHealthy = false;

    await alertOps({
      severity: 'P1',
      service: 'Redis',
      message: 'Redis connection failed - using in-memory fallback',
      error: error.message
    });

    // Try to reconnect every 30 seconds
    setTimeout(() => this.checkRedisHealth(), 30000);
  }

  async checkRedisHealth() {
    try {
      await this.redis.ping();
      this.redisHealthy = true;
      console.log('[Cache] Redis connection restored');
    } catch (error) {
      // Still down, retry later
      setTimeout(() => this.checkRedisHealth(), 30000);
    }
  }
}

const cache = new ResilientCache();
```

**Impact:**
- ⚠️ Slower performance (no distributed cache)
- ⚠️ Sessions lost on server restart
- ⚠️ Rate limiting inaccurate (per-server instead of global)
- ✅ Core functionality works

**Action:**
- ✅ Fall back to in-memory cache
- ✅ Alert ops team (P1 incident)
- ✅ Log degraded mode
- ✅ Continue serving requests
- ⚠️ Warn users of potential logout

---

### 3. Razorpay Failure

**Status:** HIGH - Fallback to COD

```javascript
// Payment service with fallback
async function createPayment(orderData) {
  // Check Razorpay health
  const razorpayHealthy = await checkRazorpayHealth();

  if (!razorpayHealthy) {
    // Degraded mode: Only allow Cash on Delivery
    return {
      paymentMethod: 'cod',
      degraded: true,
      message: 'Online payments temporarily unavailable. Please use Cash on Delivery.'
    };
  }

  // Normal flow
  try {
    const razorpayOrder = await razorpay.orders.create({
      amount: orderData.amount * 100,
      currency: 'INR',
      receipt: orderData.orderId
    });

    return {
      paymentMethod: 'razorpay',
      orderId: razorpayOrder.id,
      degraded: false
    };
  } catch (error) {
    // Razorpay API error
    await logPaymentError({
      orderId: orderData.orderId,
      error: error.message,
      gateway: 'razorpay'
    });

    // Fall back to COD
    return {
      paymentMethod: 'cod',
      degraded: true,
      message: 'Payment gateway error. Please use Cash on Delivery.',
      retryable: true
    };
  }
}

// Health check
async function checkRazorpayHealth() {
  const cacheKey = 'health:razorpay';
  const cachedHealth = await cache.get(cacheKey);
  if (cachedHealth) return cachedHealth === 'true';

  try {
    // Lightweight health check (fetch payment methods)
    await razorpay.paymentLink.fetch('dummy'); // Will fail but checks connectivity
    await cache.set(cacheKey, 'true', 60);
    return true;
  } catch (error) {
    if (error.statusCode === 400) {
      // API reachable (400 = dummy ID not found, but Razorpay is up)
      await cache.set(cacheKey, 'true', 60);
      return true;
    }

    // Razorpay down
    await cache.set(cacheKey, 'false', 30); // Short TTL to retry sooner
    await alertOps({
      severity: 'P1',
      service: 'Razorpay',
      message: 'Payment gateway unreachable',
      error: error.message
    });
    return false;
  }
}
```

**Impact:**
- ⚠️ No online payments (UPI, cards, wallets)
- ✅ Cash on Delivery still works
- ✅ Orders can be placed
- ⚠️ Revenue impact (COD has lower conversion)

**Action:**
- ✅ Show COD-only mode banner
- ✅ Alert ops + finance teams
- ✅ Log all degraded orders
- ✅ Retry payment later (offer to pay online after delivery)

---

### 4. Rabtul Wallet Service Failure

**Status:** HIGH - Defer coin operations

```javascript
// Wallet service with deferral
async function creditCoins({ userId, amount, type, reason, orderId }) {
  try {
    // Try Rabtul SDK
    return await rabtulSDK.wallet.credit({
      userId,
      amount,
      type,
      reason,
      orderId
    });
  } catch (error) {
    // Wallet service down
    await logWalletError({
      operation: 'credit',
      userId,
      amount,
      orderId,
      error: error.message
    });

    // Defer operation to queue
    await deferWalletOperation({
      operation: 'credit',
      userId,
      amount,
      type,
      reason,
      orderId,
      retryAt: new Date(Date.now() + 5 * 60 * 1000) // Retry in 5 minutes
    });

    // Alert ops
    await alertOps({
      severity: 'P1',
      service: 'Rabtul Wallet',
      message: 'Wallet service unavailable - coins deferred',
      orderId
    });

    return {
      success: true,
      deferred: true,
      message: 'Coins will be credited shortly'
    };
  }
}

// Deferred operations queue
async function deferWalletOperation(operation) {
  await db.wallet_deferred_operations.create({
    id: uuidv4(),
    operation: operation.operation,
    user_id: operation.userId,
    amount: operation.amount,
    coin_type: operation.type,
    reason: operation.reason,
    source_id: operation.orderId,
    retry_at: operation.retryAt,
    status: 'pending',
    attempts: 0
  });
}

// Retry worker
async function retryDeferredWalletOperations() {
  const pending = await db.wallet_deferred_operations.findAll({
    where: {
      status: 'pending',
      retry_at: { [Op.lte]: new Date() },
      attempts: { [Op.lt]: 5 } // Max 5 retries
    },
    limit: 100
  });

  for (const op of pending) {
    try {
      await rabtulSDK.wallet.credit({
        userId: op.user_id,
        amount: op.amount,
        type: op.coin_type,
        reason: op.reason,
        orderId: op.source_id
      });

      // Success
      await op.update({ status: 'completed', completed_at: new Date() });
    } catch (error) {
      // Retry failed
      await op.update({
        attempts: op.attempts + 1,
        retry_at: new Date(Date.now() + Math.pow(2, op.attempts) * 60 * 1000), // Exponential backoff
        last_error: error.message
      });

      if (op.attempts >= 5) {
        // Max retries exceeded
        await op.update({ status: 'failed' });
        await alertOps({
          severity: 'P0',
          service: 'Wallet Retry Worker',
          message: `Failed to credit coins after 5 attempts`,
          userId: op.user_id,
          orderId: op.source_id
        });
      }
    }
  }
}

// Run every minute
setInterval(retryDeferredWalletOperations, 60000);
```

**Impact:**
- ⚠️ Coin credits delayed (not lost)
- ⚠️ Wallet balance queries fail
- ✅ Orders can still be placed
- ✅ Payments work

**Action:**
- ✅ Defer coin operations to queue
- ✅ Show "Coins will be credited shortly"
- ✅ Retry automatically
- ✅ Alert ops if retries fail

---

### 5. Kafka Failure

**Status:** MEDIUM - Use local queue

```javascript
// Event publisher with fallback
class ResilientEventPublisher {
  constructor() {
    this.kafka = kafka;
    this.kafkaHealthy = true;
    this.localQueue = [];
  }

  async publish(event) {
    if (this.kafkaHealthy) {
      try {
        await this.kafka.send({
          topic: event.topic,
          messages: [{ value: JSON.stringify(event.data) }]
        });
        return { success: true, queued: false };
      } catch (error) {
        await this.handleKafkaFailure(error);
        // Fall through to local queue
      }
    }

    // Kafka down - use local queue
    this.localQueue.push({
      event,
      timestamp: new Date(),
      retries: 0
    });

    // Warn if queue is large
    if (this.localQueue.length > 1000) {
      await alertOps({
        severity: 'P2',
        service: 'Kafka',
        message: `Local event queue has ${this.localQueue.length} pending events`,
      });
    }

    return { success: true, queued: true };
  }

  async handleKafkaFailure(error) {
    this.kafkaHealthy = false;

    await alertOps({
      severity: 'P2',
      service: 'Kafka',
      message: 'Kafka unavailable - using local queue',
      error: error.message
    });

    // Try to reconnect
    setTimeout(() => this.checkKafkaHealth(), 60000);
  }

  async checkKafkaHealth() {
    try {
      await this.kafka.admin().listTopics();
      this.kafkaHealthy = true;

      // Flush local queue
      await this.flushLocalQueue();
    } catch (error) {
      setTimeout(() => this.checkKafkaHealth(), 60000);
    }
  }

  async flushLocalQueue() {
    console.log(`[Kafka] Flushing ${this.localQueue.length} queued events`);

    while (this.localQueue.length > 0) {
      const { event } = this.localQueue.shift();

      try {
        await this.kafka.send({
          topic: event.topic,
          messages: [{ value: JSON.stringify(event.data) }]
        });
      } catch (error) {
        // Re-add to queue
        this.localQueue.push({ event, timestamp: new Date(), retries: 0 });
        this.kafkaHealthy = false;
        break;
      }
    }
  }
}

const eventPublisher = new ResilientEventPublisher();
```

**Impact:**
- ⚠️ Analytics delayed
- ⚠️ Real-time dashboards stale
- ✅ Core transactions work
- ✅ Events not lost (queued locally)

**Action:**
- ✅ Queue events locally
- ✅ Flush when Kafka recovers
- ✅ Alert if queue grows large
- ⚠️ Warn analytics team

---

### 6. Elasticsearch Failure

**Status:** MEDIUM - Fall back to PostgreSQL

```javascript
// Search service with fallback
async function searchProducts(query, filters) {
  try {
    // Try Elasticsearch (fast)
    const results = await elasticsearch.search({
      index: 'products',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['name', 'description', 'category']
          }
        },
        ...filters
      }
    });

    return {
      products: results.hits.hits.map(hit => hit._source),
      total: results.hits.total.value,
      source: 'elasticsearch'
    };
  } catch (error) {
    // Elasticsearch down - fallback to PostgreSQL
    await logSearchError({
      query,
      error: error.message,
      fallback: 'postgres'
    });

    // PostgreSQL search (slower)
    const products = await db.products.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { description: { [Op.iLike]: `%${query}%` } },
          { category: { [Op.iLike]: `%${query}%` } }
        ],
        ...filters
      },
      limit: 20
    });

    return {
      products,
      total: products.length,
      source: 'postgres',
      degraded: true
    };
  }
}
```

**Impact:**
- ⚠️ Slower search (PostgreSQL LIKE queries)
- ⚠️ Less accurate results (no ranking, typo tolerance)
- ✅ Search still works
- ✅ No data loss

**Action:**
- ✅ Fall back to PostgreSQL search
- ✅ Show "Search results may be limited"
- ✅ Alert ops team
- ⚠️ Consider caching popular searches

---

### 7. Twilio Failure

**Status:** MEDIUM - Email fallback

```javascript
// Notification service with fallback
async function sendOTP(phone, otp) {
  try {
    // Try Twilio SMS
    await twilio.messages.create({
      body: `Your ReZ verification code is: ${otp}. Valid for 5 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone
    });

    return { channel: 'sms', success: true };
  } catch (error) {
    // Twilio down - fallback to email
    const user = await db.users.findOne({ where: { phone } });

    if (user?.email) {
      await sendEmail({
        to: user.email,
        subject: 'Your ReZ Verification Code',
        body: `Your verification code is: ${otp}. Valid for 5 minutes.`
      });

      return {
        channel: 'email',
        success: true,
        degraded: true,
        message: 'OTP sent to your email'
      };
    }

    // No email available
    throw new Error('Unable to send OTP - SMS failed and no email on file');
  }
}
```

**Impact:**
- ⚠️ Slower OTP delivery (email slower than SMS)
- ⚠️ Users without email can't log in
- ✅ Most users can still authenticate

**Action:**
- ✅ Fall back to email
- ✅ Show "OTP sent to email" message
- ✅ Alert ops team
- ⚠️ Collect email addresses for all users

---

### 8. AWS S3 Failure

**Status:** LOW - Local storage

```javascript
// File upload with fallback
async function uploadImage(file) {
  try {
    // Try S3
    const result = await s3.upload({
      Bucket: process.env.S3_BUCKET,
      Key: `products/${uuidv4()}.jpg`,
      Body: file.buffer,
      ContentType: file.mimetype
    }).promise();

    return {
      url: result.Location,
      storage: 's3'
    };
  } catch (error) {
    // S3 down - store locally
    const filename = `${uuidv4()}.jpg`;
    const localPath = path.join('/uploads', filename);

    await fs.promises.writeFile(localPath, file.buffer);

    // Queue for S3 upload later
    await db.pending_uploads.create({
      local_path: localPath,
      target_bucket: process.env.S3_BUCKET,
      status: 'pending'
    });

    return {
      url: `/uploads/${filename}`,
      storage: 'local',
      degraded: true
    };
  }
}

// Background worker to upload pending files
async function uploadPendingFiles() {
  const pending = await db.pending_uploads.findAll({
    where: { status: 'pending' },
    limit: 10
  });

  for (const upload of pending) {
    try {
      const fileBuffer = await fs.promises.readFile(upload.local_path);

      const result = await s3.upload({
        Bucket: upload.target_bucket,
        Key: path.basename(upload.local_path),
        Body: fileBuffer
      }).promise();

      await upload.update({
        status: 'completed',
        s3_url: result.Location
      });

      // Delete local file
      await fs.promises.unlink(upload.local_path);
    } catch (error) {
      // S3 still down, retry later
    }
  }
}

setInterval(uploadPendingFiles, 5 * 60 * 1000); // Every 5 minutes
```

**Impact:**
- ⚠️ Images served from local server (slower, not CDN)
- ⚠️ Disk space usage increases
- ✅ Image uploads still work

**Action:**
- ✅ Store locally temporarily
- ✅ Queue for S3 upload later
- ✅ Alert ops if disk space low
- ⚠️ Monitor disk usage

---

### 9. Firebase Cloud Messaging (FCM) Failure

**Status:** LOW - Skip notifications

```javascript
// Push notifications (non-critical)
async function sendPushNotification(userId, notification) {
  try {
    const tokens = await db.device_tokens.findAll({
      where: { user_id: userId, is_active: true }
    });

    await fcm.sendMulticast({
      tokens: tokens.map(t => t.token),
      notification
    });

    return { success: true };
  } catch (error) {
    // FCM down - log and skip
    await logNotificationError({
      userId,
      notification,
      error: error.message
    });

    // NOT critical - user can still use app
    return {
      success: false,
      degraded: true,
      message: 'Push notification failed'
    };
  }
}
```

**Impact:**
- ⚠️ No push notifications
- ✅ App still works
- ✅ Users can check in-app notifications

**Action:**
- ✅ Log failure
- ✅ Show in-app notifications instead
- ⚠️ No user impact (non-blocking)

---

## 🚨 CIRCUIT BREAKER PATTERN

Prevent cascading failures by stopping requests to failing services.

```javascript
class CircuitBreaker {
  constructor(service, options = {}) {
    this.service = service;
    this.failureThreshold = options.failureThreshold || 5;
    this.resetTimeout = options.resetTimeout || 60000; // 1 minute
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failures = 0;
    this.nextAttempt = Date.now();
  }

  async execute(fn) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error(`Circuit breaker OPEN for ${this.service}`);
      }
      // Try to close circuit
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await fn();

      // Success - reset failures
      this.failures = 0;
      if (this.state === 'HALF_OPEN') {
        this.state = 'CLOSED';
        console.log(`[CircuitBreaker] ${this.service} circuit CLOSED`);
      }

      return result;
    } catch (error) {
      this.failures++;

      if (this.failures >= this.failureThreshold) {
        this.state = 'OPEN';
        this.nextAttempt = Date.now() + this.resetTimeout;

        await alertOps({
          severity: 'P1',
          service: this.service,
          message: `Circuit breaker OPEN - ${this.failures} consecutive failures`,
          error: error.message
        });

        console.log(`[CircuitBreaker] ${this.service} circuit OPEN for ${this.resetTimeout}ms`);
      }

      throw error;
    }
  }
}

// Usage
const razorpayCircuit = new CircuitBreaker('Razorpay', {
  failureThreshold: 5,
  resetTimeout: 60000
});

async function createPayment(orderData) {
  try {
    return await razorpayCircuit.execute(async () => {
      return await razorpay.orders.create({ ... });
    });
  } catch (error) {
    // Circuit open - fall back immediately
    return { paymentMethod: 'cod', degraded: true };
  }
}
```

---

## 📊 HEALTH CHECK ENDPOINT

```javascript
// GET /health
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date(),
    services: {}
  };

  // Check each dependency
  const checks = [
    { name: 'postgres', check: checkPostgreSQLHealth },
    { name: 'redis', check: checkRedisHealth },
    { name: 'razorpay', check: checkRazorpayHealth },
    { name: 'rabtul_wallet', check: checkWalletHealth },
    { name: 'kafka', check: checkKafkaHealth },
    { name: 'elasticsearch', check: checkElasticsearchHealth }
  ];

  for (const { name, check } of checks) {
    try {
      const result = await Promise.race([
        check(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 5000)
        )
      ]);

      health.services[name] = result.status || 'healthy';
    } catch (error) {
      health.services[name] = 'unhealthy';
      health.status = 'degraded';
    }
  }

  // Determine overall status
  const criticalServices = ['postgres'];
  const criticalDown = criticalServices.some(
    svc => health.services[svc] === 'unhealthy'
  );

  if (criticalDown) {
    health.status = 'critical';
    return res.status(503).json(health);
  }

  const anyDegraded = Object.values(health.services).includes('unhealthy');
  if (anyDegraded) {
    health.status = 'degraded';
    return res.status(200).json(health);
  }

  res.status(200).json(health);
});
```

---

## ✅ DEGRADATION CHECKLIST

Before deploying ANY service:

- [ ] Health check endpoint implemented?
- [ ] Circuit breaker for external services?
- [ ] Fallback strategy defined?
- [ ] Deferred operations queue?
- [ ] Local queue for events?
- [ ] Retry logic with exponential backoff?
- [ ] Ops alerts configured?
- [ ] User-facing error messages?
- [ ] Monitoring dashboard?
- [ ] Runbook for manual intervention?

**If ANY checkbox unchecked → Service NOT production-ready**

---

## 🎯 SUMMARY

### When Services Fail

| Service | Fallback | User Impact | Data Loss? |
|---------|----------|-------------|------------|
| PostgreSQL | None (Emergency mode) | Complete outage | No |
| Redis | In-memory cache | Slower, sessions lost | No |
| Razorpay | COD only | No online payments | No |
| Rabtul Wallet | Defer operations | Delayed coins | No |
| Kafka | Local queue | Delayed analytics | No |
| Elasticsearch | PostgreSQL search | Slower search | No |
| Twilio | Email fallback | Slower OTP | No |
| S3 | Local storage | Slower images | No |
| FCM | Skip notifications | No push alerts | Yes (non-critical) |

### Key Principles

1. **Never lose data** - Queue, defer, retry
2. **Degrade gracefully** - Core features work
3. **Alert operations** - Visibility into failures
4. **Auto-recover** - Retry when service comes back
5. **User communication** - Explain what's happening

---

**Status:** ✅ PRODUCTION RESILIENCE DEFINED
**Coverage:** 9 critical services
**Last Updated:** 2026-01-03

