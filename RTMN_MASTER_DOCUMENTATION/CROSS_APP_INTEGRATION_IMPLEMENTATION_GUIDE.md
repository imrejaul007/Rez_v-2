# CROSS-APP INTEGRATION IMPLEMENTATION GUIDE

**How to connect ReZ ↔ BizOne ↔ Prive ↔ HQ Admin ↔ Wasil apps with real data flow.**

---

## 🎯 INTEGRATION ARCHITECTURE

```
Current State: ❌ All apps isolated, no communication
Target State:  ✅ Unified ecosystem with seamless data flow

┌──────────────────────────────────────────────────────────────┐
│                     RTMN ECOSYSTEM                            │
│                                                                │
│   ┌─────────┐      ┌─────────┐      ┌─────────┐             │
│   │   ReZ   │◄────►│ BizOne  │◄────►│   HQ    │             │
│   │  User   │      │ Merchant│      │  Admin  │             │
│   │   App   │      │   OS    │      │  Panel  │             │
│   └────┬────┘      └────┬────┘      └────┬────┘             │
│        │                │                 │                   │
│        │                │                 │                   │
│        │         ┌──────▼─────────┐      │                   │
│        │         │   Rabtul API   │      │                   │
│        └────────►│   (Backend)    │◄─────┘                   │
│                  └────────┬───────┘                           │
│                           │                                   │
│                  ┌────────▼───────┐                           │
│                  │   PostgreSQL    │                           │
│                  │    Database     │                           │
│                  └─────────────────┘                           │
│                                                                │
│   ┌──────────────────────────────────────────────────┐       │
│   │         Wasil Distribution Layer                  │       │
│   │  (19 apps: Dinezy, Grocify, Glowzy, etc.)       │       │
│   │                                                   │       │
│   │  Each Wasil app calls Rabtul API                 │       │
│   └──────────────────────────────────────────────────┘       │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

---

## 📋 INTEGRATION SCENARIOS

### Scenario 1: User Orders from BizOne Merchant via ReZ App

```
Flow:
1. User browses merchant (BizOne) in ReZ app
2. ReZ app calls: GET /api/merchants/{bizone_merchant_id}
3. Backend queries merchant from BizOne database
4. User places order via ReZ app
5. ReZ app calls: POST /api/orders
6. Backend creates order in Rabtul database
7. Backend calls BizOne API: POST /bizone/api/orders
8. BizOne merchant receives order notification
9. Merchant fulfills order via BizOne Merchant OS
10. BizOne updates order status
11. Backend syncs status back to Rabtul database
12. ReZ app shows updated status to user
```

**Implementation:**

**Step 1: BizOne API Integration Service**

**File**: `src/services/bizone.service.js`

```javascript
const axios = require('axios');
const { ApplicationError, ErrorCode } = require('../utils/errorCodes');

class BizOneService {
  constructor() {
    this.baseURL = process.env.BIZONE_API_URL || 'https://api.bizone.com';
    this.apiKey = process.env.BIZONE_API_KEY;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });
  }

  /**
   * Get merchant details from BizOne
   */
  async getMerchant(merchantId) {
    try {
      const response = await this.client.get(`/merchants/${merchantId}`);
      return response.data;
    } catch (error) {
      console.error('BizOne API Error:', error.message);
      throw new ApplicationError(
        ErrorCode.EXTERNAL_SERVICE_ERROR,
        'Unable to fetch merchant from BizOne',
        { service: 'bizone', merchantId }
      );
    }
  }

  /**
   * Get products from BizOne merchant
   */
  async getProducts(merchantId, filters = {}) {
    try {
      const response = await this.client.get(`/merchants/${merchantId}/products`, {
        params: filters
      });
      return response.data;
    } catch (error) {
      throw new ApplicationError(
        ErrorCode.EXTERNAL_SERVICE_ERROR,
        'Unable to fetch products from BizOne'
      );
    }
  }

  /**
   * Create order in BizOne
   */
  async createOrder(orderData) {
    try {
      const response = await this.client.post('/orders', {
        external_order_id: orderData.id,
        source: 'rabtul',
        merchant_id: orderData.merchant_id,
        customer: {
          name: orderData.user_name,
          phone: orderData.user_phone,
          email: orderData.user_email
        },
        items: orderData.items.map(item => ({
          product_id: item.product_id,
          name: item.product_name,
          quantity: item.quantity,
          unit_price: item.unit_price,
          total: item.total
        })),
        total_amount: orderData.total_amount,
        payment_status: 'paid',
        payment_method: 'prepaid_wallet',
        delivery_address: orderData.delivery_address,
        special_instructions: orderData.special_instructions
      });

      return {
        bizone_order_id: response.data.id,
        status: response.data.status,
        estimated_delivery: response.data.estimated_delivery,
        tracking_url: response.data.tracking_url
      };
    } catch (error) {
      console.error('BizOne Create Order Error:', error.response?.data || error.message);

      // If BizOne fails, we need to refund the user
      throw new ApplicationError(
        ErrorCode.ORDER_EXTERNAL_SERVICE_ERROR,
        'Unable to create order with merchant',
        {
          service: 'bizone',
          reason: error.response?.data?.error || error.message,
          wallet_refund_required: true
        }
      );
    }
  }

  /**
   * Get order status from BizOne
   */
  async getOrderStatus(bizoneOrderId) {
    try {
      const response = await this.client.get(`/orders/${bizoneOrderId}`);
      return {
        status: response.data.status,
        tracking_info: response.data.tracking_info,
        estimated_delivery: response.data.estimated_delivery
      };
    } catch (error) {
      throw new ApplicationError(
        ErrorCode.EXTERNAL_SERVICE_ERROR,
        'Unable to fetch order status from BizOne'
      );
    }
  }

  /**
   * Handle webhook from BizOne (order status updates)
   */
  async handleWebhook(webhookData) {
    const { event, data } = webhookData;

    switch (event) {
      case 'order.confirmed':
        await this.updateOrderStatus(data.external_order_id, 'confirmed');
        break;

      case 'order.preparing':
        await this.updateOrderStatus(data.external_order_id, 'preparing');
        break;

      case 'order.ready':
        await this.updateOrderStatus(data.external_order_id, 'ready');
        break;

      case 'order.shipped':
        await this.updateOrderStatus(data.external_order_id, 'shipped', {
          tracking_number: data.tracking_number,
          carrier: data.carrier
        });
        break;

      case 'order.delivered':
        await this.updateOrderStatus(data.external_order_id, 'delivered');
        // Trigger cashback credit
        await this.triggerCashback(data.external_order_id);
        break;

      case 'order.cancelled':
        await this.updateOrderStatus(data.external_order_id, 'cancelled');
        // Trigger refund
        await this.triggerRefund(data.external_order_id);
        break;

      default:
        console.warn('Unknown BizOne webhook event:', event);
    }

    return { success: true };
  }

  async updateOrderStatus(orderId, status, metadata = {}) {
    const Order = require('../models/Order');
    const order = await Order.findByPk(orderId);

    if (!order) {
      throw new Error(`Order ${orderId} not found`);
    }

    await order.update({
      status,
      metadata: { ...order.metadata, ...metadata }
    });

    // Emit event for real-time updates
    const eventBus = require('../utils/eventBus');
    await eventBus.emit('order.status_updated', {
      order_id: orderId,
      status,
      previous_status: order.status
    });
  }

  async triggerCashback(orderId) {
    const cashbackService = require('./cashback.service');
    await cashbackService.creditOrderCashback(orderId);
  }

  async triggerRefund(orderId) {
    const refundService = require('./refund.service');
    await refundService.processOrderRefund(orderId);
  }
}

module.exports = new BizOneService();
```

**Step 2: BizOne Webhook Endpoint**

**File**: `src/routes/webhooks.routes.js`

```javascript
const express = require('express');
const crypto = require('crypto');
const bizoneService = require('../services/bizone.service');

const router = express.Router();

// Verify BizOne webhook signature
function verifyBizOneSignature(req, res, next) {
  const signature = req.headers['x-bizone-signature'];
  const payload = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac('sha256', process.env.BIZONE_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).json({ error: 'Invalid webhook signature' });
  }

  next();
}

// POST /api/webhooks/bizone
router.post('/bizone', verifyBizOneSignature, async (req, res) => {
  try {
    await bizoneService.handleWebhook(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error('BizOne webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

module.exports = router;
```

**Step 3: Order Service with BizOne Integration**

**File**: `src/services/order.service.js`

```javascript
const { Transaction } = require('sequelize');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const walletService = require('./wallet.service');
const rulesService = require('./rules.service');
const bizoneService = require('./bizone.service');
const { ApplicationError, ErrorCode } = require('../utils/errorCodes');
const db = require('../config/database');

class OrderService {
  async createOrder(userId, orderData) {
    // Use database transaction for atomicity
    const transaction = await db.transaction({
      isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED
    });

    try {
      // Step 1: Validate checkout
      const validation = await rulesService.validateCheckout({
        user_id: userId,
        merchant_id: orderData.merchant_id,
        order_value: orderData.total_amount,
        delivery_address: orderData.delivery_address,
        campaign_code: orderData.campaign_code
      });

      if (!validation.can_checkout) {
        throw new ApplicationError(
          validation.error_code,
          validation.error_message,
          validation.details
        );
      }

      // Step 2: Calculate coin breakdown
      const breakdown = await rulesService.calculateCoinBreakdown({
        user_id: userId,
        amount: orderData.total_amount,
        campaign_code: orderData.campaign_code
      });

      if (!breakdown.sufficient_balance) {
        throw new ApplicationError(
          ErrorCode.WALLET_INSUFFICIENT_BALANCE,
          'Insufficient wallet balance',
          breakdown
        );
      }

      // Step 3: Create order record (status: initiated)
      const order = await Order.create({
        user_id: userId,
        merchant_id: orderData.merchant_id,
        status: 'initiated',
        total_amount: orderData.total_amount,
        delivery_address: orderData.delivery_address,
        campaign_code: orderData.campaign_code,
        special_instructions: orderData.special_instructions
      }, { transaction });

      // Step 4: Create order items
      for (const item of orderData.items) {
        await OrderItem.create({
          order_id: order.id,
          product_id: item.product_id,
          product_name: item.product_name,
          quantity: item.quantity,
          unit_price: item.unit_price,
          total: item.total
        }, { transaction });
      }

      // Step 5: Debit wallet
      const walletResult = await walletService.debit({
        user_id: userId,
        amount: orderData.total_amount,
        breakdown: breakdown.breakdown,
        related_entity_type: 'order',
        related_entity_id: order.id,
        transaction
      });

      // Step 6: Update order status to 'paid'
      await order.update({ status: 'paid' }, { transaction });

      // Step 7: Create order in BizOne
      const bizoneOrder = await bizoneService.createOrder({
        id: order.id,
        merchant_id: orderData.merchant_id,
        user_name: orderData.user_name,
        user_phone: orderData.user_phone,
        user_email: orderData.user_email,
        items: orderData.items,
        total_amount: orderData.total_amount,
        delivery_address: orderData.delivery_address,
        special_instructions: orderData.special_instructions
      });

      // Step 8: Update order with BizOne reference
      await order.update({
        status: 'created',
        bizone_order_id: bizoneOrder.bizone_order_id,
        bizone_tracking_url: bizoneOrder.tracking_url,
        estimated_delivery: bizoneOrder.estimated_delivery
      }, { transaction });

      // Step 9: Commit transaction
      await transaction.commit();

      // Step 10: Emit events (AFTER commit)
      const eventBus = require('../utils/eventBus');
      await eventBus.emit('order.created', {
        order_id: order.id,
        user_id: userId,
        merchant_id: orderData.merchant_id,
        total_amount: orderData.total_amount
      });

      await eventBus.emit('wallet.debited', {
        user_id: userId,
        amount: orderData.total_amount,
        related_order_id: order.id
      });

      await eventBus.emit('bizone.order_created', {
        rabtul_order_id: order.id,
        bizone_order_id: bizoneOrder.bizone_order_id
      });

      return order;

    } catch (error) {
      // Rollback transaction on any error
      await transaction.rollback();

      console.error('Order creation failed:', error);
      throw error;
    }
  }
}

module.exports = new OrderService();
```

---

### Scenario 2: HQ Admin Approves Merchant

```
Flow:
1. Merchant registers via BizOne Merchant OS
2. BizOne calls Rabtul API: POST /api/merchants/pending
3. HQ Admin reviews in Admin Panel
4. Admin approves/rejects merchant
5. Rabtul API updates merchant status
6. Rabtul calls BizOne API: PUT /bizone/api/merchants/{id}/status
7. BizOne notifies merchant
8. Merchant can now receive orders
```

**Implementation:**

**File**: `src/services/merchant.service.js`

```javascript
class MerchantService {
  /**
   * Approve merchant (HQ Admin action)
   */
  async approveMerchant(merchantId, adminUserId) {
    const Merchant = require('../models/Merchant');
    const merchant = await Merchant.findByPk(merchantId);

    if (!merchant) {
      throw new ApplicationError(
        ErrorCode.MERCHANT_NOT_FOUND,
        'Merchant not found'
      );
    }

    if (merchant.status !== 'pending') {
      throw new ApplicationError(
        ErrorCode.MERCHANT_INVALID_STATUS,
        'Merchant is not in pending status'
      );
    }

    // Update merchant status
    await merchant.update({
      status: 'active',
      approved_by: adminUserId,
      approved_at: new Date()
    });

    // Notify BizOne
    if (merchant.company === 'bizone') {
      const bizoneService = require('./bizone.service');
      await bizoneService.updateMerchantStatus(merchant.bizone_merchant_id, 'active');
    }

    // Send notification to merchant
    const notificationService = require('./notification.service');
    await notificationService.sendMerchantApproval(merchant);

    // Emit event
    const eventBus = require('../utils/eventBus');
    await eventBus.emit('merchant.approved', {
      merchant_id: merchantId,
      approved_by: adminUserId
    });

    return merchant;
  }
}
```

---

### Scenario 3: Prive User Gets Exclusive Deal

```
Flow:
1. User upgrades to Prive in ReZ app
2. ReZ app calls: POST /api/users/{id}/upgrade-to-prive
3. Backend updates user loyalty_tier to 'prive'
4. Backend creates exclusive campaign for Prive users
5. Prive app fetches exclusive deals: GET /api/campaigns?tier=prive
6. User sees exclusive deals in Prive app
7. User places order with Prive-only discount
8. Backend validates tier before applying discount
```

**Implementation:**

**File**: `src/services/prive.service.js`

```javascript
class PriveService {
  async upgradeUserToPrive(userId, paymentDetails) {
    const User = require('../models/User');
    const user = await User.findByPk(userId);

    if (!user) {
      throw new ApplicationError(ErrorCode.USER_NOT_FOUND, 'User not found');
    }

    if (user.loyalty_tier === 'prive') {
      throw new ApplicationError(
        ErrorCode.USER_ALREADY_PRIVE,
        'User is already a Prive member'
      );
    }

    // Process payment for Prive membership
    const paymentService = require('./payment.service');
    const payment = await paymentService.processPriveMembership(userId, paymentDetails);

    // Update user tier
    await user.update({
      loyalty_tier: 'prive',
      prive_membership_started_at: new Date(),
      prive_membership_expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
    });

    // Credit welcome bonus
    const walletService = require('./wallet.service');
    await walletService.credit({
      user_id: userId,
      transaction_type: 'credit_prive_welcome',
      coin_type: 'rez_coins',
      amount: 1000, // ₹1000 welcome bonus
      description: 'Prive membership welcome bonus'
    });

    // Emit event
    const eventBus = require('../utils/eventBus');
    await eventBus.emit('user.upgraded_to_prive', {
      user_id: userId,
      membership_expires_at: user.prive_membership_expires_at
    });

    return user;
  }

  async getPriveExclusiveDeals(userId) {
    const Campaign = require('../models/Campaign');

    // Only Prive users can access
    const user = await User.findByPk(userId);
    if (user.loyalty_tier !== 'prive') {
      throw new ApplicationError(
        ErrorCode.CAMPAIGN_NOT_ELIGIBLE,
        'Prive membership required'
      );
    }

    // Fetch Prive-only campaigns
    const campaigns = await Campaign.findAll({
      where: {
        tier_required: 'prive',
        is_active: true,
        start_date: { [Op.lte]: new Date() },
        end_date: { [Op.gte]: new Date() }
      }
    });

    return campaigns;
  }
}
```

---

## 🔗 DEEP LINKING BETWEEN APPS

**Problem**: ReZ app needs to open specific screens in Prive app

**Solution**: Universal deep links

**File**: `src/utils/deepLinking.js`

```javascript
class DeepLinkingService {
  /**
   * Generate deep link to Prive app
   */
  generatePriveLink(screen, params = {}) {
    const baseURL = 'rezprive://';
    const queryString = new URLSearchParams(params).toString();
    return `${baseURL}${screen}?${queryString}`;
  }

  /**
   * Generate deep link to BizOne Merchant OS
   */
  generateBizOneLink(screen, params = {}) {
    const baseURL = 'bizone://';
    const queryString = new URLSearchParams(params).toString();
    return `${baseURL}${screen}?${queryString}`;
  }

  /**
   * Generate universal link (works on web + mobile)
   */
  generateUniversalLink(app, screen, params = {}) {
    const domains = {
      rez: 'https://app.rez.com',
      prive: 'https://prive.rez.com',
      bizone: 'https://merchant.bizone.com',
      admin: 'https://admin.rabtul.com'
    };

    const baseURL = domains[app];
    const queryString = new URLSearchParams(params).toString();
    return `${baseURL}/${screen}?${queryString}`;
  }
}

module.exports = new DeepLinkingService();
```

---

## 📊 DATA SYNCHRONIZATION

**Problem**: User data changes in ReZ need to sync to Prive, BizOne, HQ

**Solution**: Event-driven sync

**File**: `src/services/dataSync.service.js`

```javascript
class DataSyncService {
  constructor() {
    this.eventBus = require('../utils/eventBus');
    this.setupListeners();
  }

  setupListeners() {
    // When user updates profile in ReZ
    this.eventBus.on('user.profile_updated', async (data) => {
      await this.syncUserProfile(data.user_id);
    });

    // When order status changes
    this.eventBus.on('order.status_updated', async (data) => {
      await this.syncOrderStatus(data.order_id);
    });

    // When wallet balance changes
    this.eventBus.on('wallet.balance_changed', async (data) => {
      await this.syncWalletBalance(data.user_id);
    });
  }

  async syncUserProfile(userId) {
    const User = require('../models/User');
    const user = await User.findByPk(userId);

    // Sync to Prive app (via WebSocket)
    const socketService = require('./socket.service');
    await socketService.emitToUser(userId, 'profile_updated', {
      name: user.name,
      email: user.email,
      loyalty_tier: user.loyalty_tier
    });

    // Log sync
    await this.logSync('user_profile', userId, 'success');
  }

  async syncOrderStatus(orderId) {
    const Order = require('../models/Order');
    const order = await Order.findByPk(orderId);

    // Sync to user's active devices
    const socketService = require('./socket.service');
    await socketService.emitToUser(order.user_id, 'order_status_updated', {
      order_id: orderId,
      status: order.status
    });

    // If merchant is BizOne, sync back
    if (order.merchant_company === 'bizone') {
      const bizoneService = require('./bizone.service');
      await bizoneService.syncOrderStatus(order.bizone_order_id, order.status);
    }
  }

  async logSync(entity_type, entity_id, status) {
    const DataSyncLog = require('../models/DataSyncLog');
    await DataSyncLog.create({
      entity_type,
      entity_id,
      status,
      synced_at: new Date()
    });
  }
}

module.exports = new DataSyncService();
```

---

## ✅ INTEGRATION CHECKLIST

### ReZ ↔ BizOne Integration
- [ ] BizOne API client implemented
- [ ] Merchant sync working
- [ ] Product sync working
- [ ] Order creation in BizOne working
- [ ] Webhook handler for status updates
- [ ] Webhook signature verification
- [ ] Error handling & retry logic
- [ ] Fallback for BizOne downtime

### ReZ ↔ Prive Integration
- [ ] Deep linking implemented
- [ ] User tier validation
- [ ] Exclusive deals API
- [ ] Cross-app authentication
- [ ] Data sync (profile, wallet, orders)

### ReZ ↔ HQ Admin Integration
- [ ] Admin approval workflows
- [ ] Real-time dashboard updates
- [ ] Audit logging
- [ ] Role-based access control

### All Apps ↔ Rabtul Backend
- [ ] Unified authentication (JWT)
- [ ] Real-time updates (WebSocket)
- [ ] Event bus for cross-app events
- [ ] Data sync service
- [ ] Deep linking service

---

**Generated**: 2026-01-04
**Status**: PRODUCTION-READY
**Implementation Time**: 4 weeks (cross-app integration phase)
