# Third-Party Integration Guide - RTMN Backend

**Last Updated:** 2026-01-03
**Status:** Production-Ready
**Purpose:** Complete integration specs for all external services

---

## 📋 OVERVIEW

This document provides **complete integration specifications** for all third-party services used in RTMN ecosystem.

### Services Covered
1. **Payments:** Razorpay, Stripe, UPI
2. **SMS/OTP:** Twilio, MSG91
3. **Email:** SendGrid
4. **Push Notifications:** Firebase Cloud Messaging (FCM)
5. **File Storage:** AWS S3 + CloudFront
6. **Maps & Location:** Google Maps API
7. **Analytics:** Mixpanel, Google Analytics

---

## 💳 PAYMENT GATEWAYS

### 1. Razorpay Integration (Primary - India)

#### Setup

```bash
npm install razorpay
```

#### Configuration

```javascript
// config/razorpay.js
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

module.exports = razorpayInstance;
```

#### Create Order

```javascript
const razorpay = require('./config/razorpay');
const crypto = require('crypto');

// Step 1: Create order on Razorpay
async function createRazorpayOrder(orderData) {
  const options = {
    amount: orderData.amount * 100, // Amount in paise (₹100 = 10000 paise)
    currency: 'INR',
    receipt: orderData.orderId,
    notes: {
      order_id: orderData.orderId,
      user_id: orderData.userId,
      merchant_id: orderData.merchantId
    }
  };

  try {
    const razorpayOrder = await razorpay.orders.create(options);

    // Save to database
    await db.payments.create({
      order_id: orderData.orderId,
      payment_gateway: 'razorpay',
      gateway_order_id: razorpayOrder.id,
      amount: orderData.amount,
      currency: 'INR',
      status: 'pending'
    });

    return {
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    };
  } catch (error) {
    throw new Error(`Razorpay order creation failed: ${error.message}`);
  }
}
```

#### Verify Payment Signature (CRITICAL)

```javascript
// Webhook endpoint
app.post('/api/webhooks/razorpay', async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  // Verify signature
  const shasum = crypto.createHmac('sha256', secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest('hex');

  if (digest !== req.headers['x-razorpay-signature']) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const event = req.body.event;
  const payload = req.body.payload.payment.entity;

  if (event === 'payment.captured') {
    await handlePaymentSuccess(payload);
  } else if (event === 'payment.failed') {
    await handlePaymentFailure(payload);
  }

  res.json({ status: 'ok' });
});

async function handlePaymentSuccess(payload) {
  const payment = await db.payments.findOne({
    where: { gateway_order_id: payload.order_id }
  });

  if (!payment) return;

  // Update payment
  await payment.update({
    status: 'success',
    gateway_transaction_id: payload.id,
    gateway_response: payload,
    paid_at: new Date()
  });

  // Update order
  const order = await db.orders.findByPk(payment.order_id);
  await order.update({ status: 'confirmed' });

  // Credit coins
  const coinsEarned = await rabtulSDK.coins.calculateEarnings(order.id);
  await rabtulSDK.wallet.credit({
    userId: order.user_id,
    amount: coinsEarned,
    type: 'rez_coins',
    reason: 'purchase_cashback',
    orderId: order.id
  });

  // Emit event
  rabtul.emit('payment.success', {
    orderId: order.id,
    paymentId: payment.id,
    amount: payment.amount
  });

  // Send notification
  await sendNotification(order.user_id, {
    type: 'payment_success',
    title: 'Payment Successful',
    message: `Your order #${order.order_number} is confirmed!`,
    data: { orderId: order.id }
  });
}
```

#### Refund Processing

```javascript
async function processRefund(paymentId, amount, reason) {
  const payment = await db.payments.findByPk(paymentId);

  if (!payment || payment.status !== 'success') {
    throw new Error('Invalid payment for refund');
  }

  try {
    // Create refund on Razorpay
    const refund = await razorpay.payments.refund(payment.gateway_transaction_id, {
      amount: amount * 100, // Amount in paise
      notes: {
        reason,
        refund_initiated_at: new Date().toISOString()
      }
    });

    // Update payment
    await payment.update({
      status: 'refunded',
      refund_amount: amount,
      refunded_at: new Date(),
      gateway_response: {
        ...payment.gateway_response,
        refund: refund
      }
    });

    // Reverse coins if earned
    const order = await db.orders.findByPk(payment.order_id);
    if (order.coins_earned > 0) {
      await rabtulSDK.wallet.debit({
        userId: order.user_id,
        amount: order.coins_earned,
        type: 'rez_coins',
        reason: 'refund_reversal',
        orderId: order.id
      });
    }

    // Emit event
    rabtul.emit('payment.refunded', {
      orderId: order.id,
      paymentId: payment.id,
      refundAmount: amount
    });

    return refund;
  } catch (error) {
    throw new Error(`Refund failed: ${error.message}`);
  }
}
```

---

### 2. UPI Deep Linking

```javascript
// Generate UPI payment link
function generateUPILink(orderData) {
  const upiId = process.env.UPI_MERCHANT_ID; // merchant@paytm
  const merchantName = process.env.UPI_MERCHANT_NAME;

  const params = new URLSearchParams({
    pa: upiId,                           // Payee address
    pn: merchantName,                    // Payee name
    tr: orderData.orderId,               // Transaction reference
    tn: `Order #${orderData.orderNumber}`, // Transaction note
    am: orderData.amount.toFixed(2),     // Amount
    cu: 'INR'                            // Currency
  });

  return `upi://pay?${params.toString()}`;
}

// Usage in frontend
const upiLink = generateUPILink({
  orderId: 'order_123',
  orderNumber: 'ORD20260103001',
  amount: 500
});

// Open UPI app
window.location.href = upiLink;
// Or QR code
<QRCode value={upiLink} />
```

---

## 📱 SMS & OTP

### 1. Twilio Integration (Primary)

#### Setup

```bash
npm install twilio
```

#### Configuration

```javascript
// config/twilio.js
const twilio = require('twilio');

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = twilioClient;
```

#### Send OTP

```javascript
const twilio = require('./config/twilio');
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

async function sendOTP(phoneNumber) {
  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store in Redis (5 minutes expiry)
  const OTP_EXPIRY_SECONDS = 300;
  const key = `otp:${phoneNumber}`;

  // Check rate limiting (1 OTP per 30 seconds)
  const existing = await redis.get(key);
  if (existing) {
    const ttl = await redis.ttl(key);
    if (ttl > (OTP_EXPIRY_SECONDS - 30)) {
      throw new Error(`Please wait ${ttl - (OTP_EXPIRY_SECONDS - 30)} seconds before requesting new OTP`);
    }
  }

  // Store OTP with metadata
  await redis.setex(
    key,
    OTP_EXPIRY_SECONDS,
    JSON.stringify({
      otp,
      attempts: 0,
      createdAt: new Date().toISOString()
    })
  );

  // Send SMS
  try {
    const message = await twilio.messages.create({
      body: `Your RTMN OTP is ${otp}. Valid for 5 minutes. Do not share with anyone.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });

    console.log(`OTP sent to ${phoneNumber}: ${message.sid}`);

    return {
      success: true,
      expiresIn: OTP_EXPIRY_SECONDS,
      message: 'OTP sent successfully'
    };
  } catch (error) {
    throw new Error(`SMS sending failed: ${error.message}`);
  }
}
```

#### Verify OTP

```javascript
async function verifyOTP(phoneNumber, otpInput) {
  const key = `otp:${phoneNumber}`;
  const data = await redis.get(key);

  if (!data) {
    throw new Error('OTP expired or not found');
  }

  const { otp, attempts } = JSON.parse(data);

  // Check max attempts
  const MAX_ATTEMPTS = 3;
  if (attempts >= MAX_ATTEMPTS) {
    await redis.del(key);
    throw new Error('Maximum attempts exceeded. Please request new OTP.');
  }

  // Verify OTP
  if (otpInput !== otp) {
    // Increment attempts
    await redis.setex(
      key,
      await redis.ttl(key),
      JSON.stringify({ otp, attempts: attempts + 1, createdAt: new Date().toISOString() })
    );

    throw new Error(`Invalid OTP. ${MAX_ATTEMPTS - attempts - 1} attempts remaining.`);
  }

  // OTP verified - delete from Redis
  await redis.del(key);

  return {
    success: true,
    message: 'OTP verified successfully'
  };
}
```

---

## 📧 EMAIL (SendGrid)

#### Setup

```bash
npm install @sendgrid/mail
```

#### Configuration

```javascript
// config/sendgrid.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
```

#### Send Email with Template

```javascript
const sgMail = require('./config/sendgrid');

async function sendWelcomeEmail(user) {
  const msg = {
    to: user.email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: process.env.SENDGRID_FROM_NAME
    },
    templateId: process.env.EMAIL_WELCOME_TEMPLATE_ID,
    dynamicTemplateData: {
      first_name: user.first_name,
      email: user.email,
      tier: user.tier,
      coins_balance: user.wallet?.rez_coins_balance || 0,
      app_url: process.env.APP_URL
    }
  };

  try {
    await sgMail.send(msg);
    console.log(`Welcome email sent to ${user.email}`);
  } catch (error) {
    console.error(`Email sending failed: ${error.message}`);
    // Don't throw - email failures shouldn't block signup
  }
}

// Order confirmation email
async function sendOrderConfirmationEmail(order) {
  const user = await db.users.findByPk(order.user_id);

  const msg = {
    to: user.email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: 'RTMN Orders'
    },
    templateId: process.env.EMAIL_ORDER_CONFIRMATION_TEMPLATE_ID,
    dynamicTemplateData: {
      first_name: user.first_name,
      order_number: order.order_number,
      order_date: order.created_at,
      total_amount: order.total_amount,
      coins_earned: order.coins_earned,
      estimated_delivery: order.estimated_delivery_at,
      tracking_url: `${process.env.APP_URL}/orders/${order.id}`
    }
  };

  await sgMail.send(msg);
}
```

---

## 🔔 PUSH NOTIFICATIONS (Firebase FCM)

#### Setup

```bash
npm install firebase-admin
```

#### Configuration

```javascript
// config/firebase.js
const admin = require('firebase-admin');

const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
```

#### Send Push Notification

```javascript
const admin = require('./config/firebase');

async function sendPushNotification(userId, notification) {
  // Get user's FCM tokens
  const tokens = await db.device_tokens.findAll({
    where: {
      user_id: userId,
      is_active: true
    },
    attributes: ['token']
  });

  if (tokens.length === 0) {
    console.log(`No FCM tokens found for user ${userId}`);
    return;
  }

  const message = {
    notification: {
      title: notification.title,
      body: notification.message,
      imageUrl: notification.image || null
    },
    data: notification.data || {},
    tokens: tokens.map(t => t.token)
  };

  try {
    const response = await admin.messaging().sendMulticast(message);

    console.log(`${response.successCount} notifications sent successfully`);

    // Remove invalid tokens
    if (response.failureCount > 0) {
      const failedTokens = [];
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          failedTokens.push(tokens[idx].token);
        }
      });

      await db.device_tokens.update(
        { is_active: false },
        { where: { token: failedTokens } }
      );
    }

    return response;
  } catch (error) {
    console.error(`Push notification failed: ${error.message}`);
  }
}

// Usage
await sendPushNotification(userId, {
  title: 'Order Delivered!',
  message: `Your order #${orderNumber} has been delivered`,
  image: 'https://cdn.rtmn.in/notifications/delivery.png',
  data: {
    type: 'order_delivered',
    orderId: orderId,
    action: 'VIEW_ORDER'
  }
});
```

#### Deep Link Handling

```javascript
// Notification with deep link
const notification = {
  title: 'Flash Sale Alert! 🔥',
  message: '50% off on electronics - Only 1 hour left!',
  data: {
    type: 'flash_sale',
    deepLink: 'rtmn://deals/flash-sale-123',
    action: 'OPEN_DEAL'
  }
};

// Frontend handling (React Native)
import messaging from '@react-native-firebase/messaging';

messaging().onNotificationOpenedApp(remoteMessage => {
  const deepLink = remoteMessage.data.deepLink;
  navigation.navigate(deepLink);
});
```

---

## ☁️ FILE STORAGE (AWS S3 + CloudFront)

#### Setup

```bash
npm install aws-sdk multer multer-s3
```

#### Configuration

```javascript
// config/aws.js
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

module.exports = { s3, AWS };
```

#### File Upload

```javascript
const multer = require('multer');
const multerS3 = require('multer-s3');
const { s3 } = require('./config/aws');
const path = require('path');

// Configure multer for S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const folder = req.body.folder || 'uploads';
      const filename = `${folder}/${Date.now()}-${file.originalname}`;
      cb(null, filename);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Accept images only
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, WEBP allowed.'));
    }
  }
});

// Upload endpoint
app.post('/api/upload/image', upload.single('image'), async (req, res) => {
  const fileUrl = req.file.location; // S3 URL
  const cdnUrl = fileUrl.replace(
    `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
    process.env.CDN_BASE_URL
  );

  res.json({
    success: true,
    url: cdnUrl,
    filename: req.file.key
  });
});
```

#### Image Optimization (Sharp)

```bash
npm install sharp
```

```javascript
const sharp = require('sharp');

// Upload with optimization
app.post('/api/upload/product-image', upload.single('image'), async (req, res) => {
  const originalImage = req.file.location;

  // Generate thumbnails
  const sizes = [
    { name: 'thumbnail', width: 150, height: 150 },
    { name: 'medium', width: 500, height: 500 },
    { name: 'large', width: 1200, height: 1200 }
  ];

  const variants = {};

  for (const size of sizes) {
    const buffer = await sharp(req.file.buffer)
      .resize(size.width, size.height, { fit: 'cover' })
      .webp({ quality: 80 })
      .toBuffer();

    const key = `products/${Date.now()}-${size.name}.webp`;

    await s3.upload({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: 'image/webp',
      ACL: 'public-read'
    }).promise();

    variants[size.name] = `${process.env.CDN_BASE_URL}/${key}`;
  }

  res.json({
    success: true,
    original: originalImage,
    variants
  });
});
```

---

## 🗺️ GOOGLE MAPS API

#### Setup

```bash
npm install @googlemaps/google-maps-services-js
```

#### Geocoding

```javascript
const { Client } = require('@googlemaps/google-maps-services-js');

const mapsClient = new Client({});

// Convert address to coordinates
async function geocodeAddress(address) {
  try {
    const response = await mapsClient.geocode({
      params: {
        address: address,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng,
        formatted_address: response.data.results[0].formatted_address
      };
    }

    throw new Error('Address not found');
  } catch (error) {
    throw new Error(`Geocoding failed: ${error.message}`);
  }
}

// Calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km

  return distance;
}
```

---

## 🔐 SECURITY BEST PRACTICES

### API Key Rotation

```javascript
// Store API keys in database with version
await db.api_credentials.create({
  service: 'razorpay',
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: encrypted(process.env.RAZORPAY_KEY_SECRET),
  version: 2,
  is_active: true,
  created_at: new Date()
});

// Rotate keys every 90 days (cron job)
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const paymentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max 5 payment attempts
  message: 'Too many payment attempts. Please try again later.'
});

app.post('/api/payments/create', paymentLimiter, createPayment);
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Total Integrations:** 7 services
**Next:** [Complete API Examples](./COMPLETE_API_EXAMPLES.md)
