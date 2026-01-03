# 🔒 Data Retention & Privacy Policies - RTMN Ecosystem

**Last Updated:** 2026-01-04
**Status:** ✅ POLICIES DEFINED
**Purpose:** GDPR/DPDPA compliance implementation guide for developers

---

## ⚠️ THE PRIVACY PROBLEM

**Scenario:**
- User requests account deletion (GDPR Right to Erasure)
- User wants to download all their data (GDPR Right to Portability)
- Merchant requests customer data (requires consent)

**Question:** What data can we keep? For how long? Who can access it?

**This document provides the DEFINITIVE answer.**

---

## 🌍 REGULATORY COMPLIANCE

### GDPR (Europe - General Data Protection Regulation)

**Applies to:** Any user in EU/EEA, regardless of company location

**Key Requirements:**
1. **Lawful Basis** - Must have legal justification for processing data
2. **Consent** - Clear, explicit consent required for non-essential data
3. **Right to Access** - Users can request all data we have about them
4. **Right to Erasure** - Users can request deletion (with exceptions)
5. **Right to Portability** - Users can download data in machine-readable format
6. **Right to Rectification** - Users can correct inaccurate data
7. **Data Minimization** - Collect only necessary data
8. **Storage Limitation** - Keep data only as long as needed

---

### DPDPA (India - Digital Personal Data Protection Act 2023)

**Applies to:** All users in India (primary market)

**Key Requirements:**
1. **Consent** - Clear purpose and consent required
2. **Data Localization** - Critical data must be stored in India
3. **Right to Access** - Users can request their data
4. **Right to Correction** - Users can correct errors
5. **Right to Erasure** - Users can request deletion
6. **Data Breach Notification** - 72 hours to notify users
7. **Parental Consent** - Required for users under 18

---

## 📊 DATA CLASSIFICATION

### Tier 1: Critical Personal Data (Highest Protection)

**Definition:** Data that can cause significant harm if leaked

```javascript
const CRITICAL_PERSONAL_DATA = {
  // Financial data
  financial: [
    'bank_account_number',
    'ifsc_code',
    'upi_id',
    'card_last_4_digits',
    'razorpay_customer_id',
    'wallet_balance',
    'transaction_history'
  ],

  // Authentication credentials
  authentication: [
    'password_hash',
    'otp_code',
    'jwt_refresh_token',
    'api_keys',
    'two_factor_secret'
  ],

  // Government IDs (requires explicit consent)
  government_ids: [
    'aadhaar_number',      // ❌ NEVER store full Aadhaar
    'pan_card',
    'passport_number',
    'driving_license'
  ],

  // Biometric data (if implemented)
  biometric: [
    'fingerprint_hash',
    'face_recognition_data'
  ],

  // Health data (if restaurant preferences include allergies)
  health: [
    'dietary_restrictions',
    'allergies'
  ]
};

// Encryption requirement: AES-256
// Storage: Encrypted at rest AND in transit
// Access: Requires audit log entry
// Retention: Delete immediately on user request (with legal exceptions)
```

---

### Tier 2: Sensitive Personal Data (High Protection)

**Definition:** Data that identifies a person and their behavior

```javascript
const SENSITIVE_PERSONAL_DATA = {
  // Identity data
  identity: [
    'full_name',
    'email',
    'phone_number',
    'date_of_birth',
    'gender',
    'profile_photo_url'
  ],

  // Location data
  location: [
    'home_address',
    'work_address',
    'delivery_addresses',
    'gps_coordinates',    // From delivery tracking
    'ip_address'
  ],

  // Behavioral data
  behavioral: [
    'order_history',
    'search_history',
    'browsing_history',
    'wishlist',
    'favorite_restaurants',
    'review_history'
  ],

  // Communication data
  communication: [
    'chat_messages',
    'support_tickets',
    'email_history',
    'sms_history'
  ]
};

// Encryption: AES-256 (at rest), TLS 1.3 (in transit)
// Access: Role-based (RBAC)
// Retention: Delete after retention period OR user request
// Anonymization: Convert to anonymous data after retention period
```

---

### Tier 3: Non-Personal Data (Standard Protection)

**Definition:** Data that cannot identify a person

```javascript
const NON_PERSONAL_DATA = {
  // Aggregated analytics
  analytics: [
    'total_orders_count',
    'average_order_value',
    'popular_products',
    'peak_hours',
    'conversion_rate'
  ],

  // Product data
  products: [
    'product_name',
    'product_description',
    'product_price',
    'product_category',
    'merchant_name'
  ],

  // System data
  system: [
    'server_logs',
    'performance_metrics',
    'error_logs',
    'api_response_times'
  ]
};

// Encryption: Optional (HTTPS only)
// Access: Internal teams
// Retention: Indefinite (for analytics)
// Anonymization: Already anonymous
```

---

## ⏱️ DATA RETENTION PERIODS

### User Data Retention

```javascript
const USER_DATA_RETENTION = {
  // Active user data
  active_user: {
    profile_data: 'INDEFINITE',          // Until account deletion
    order_history: '7 YEARS',            // Legal requirement (tax)
    wallet_transactions: '7 YEARS',      // Financial audit trail
    search_history: '90 DAYS',           // Behavioral analytics
    browsing_history: '30 DAYS',         // Session analytics
    cart_items: '30 DAYS',               // Cart recovery
    session_logs: '14 DAYS',             // Security audit
    ip_address_logs: '90 DAYS'           // Fraud detection
  },

  // Deleted user data
  deleted_user: {
    profile_data: 'DELETE IMMEDIATELY',  // Name, email, phone
    order_history: '7 YEARS',            // Legal hold (anonymize PII)
    wallet_transactions: '7 YEARS',      // Legal hold (anonymize PII)
    search_history: 'DELETE IMMEDIATELY',
    browsing_history: 'DELETE IMMEDIATELY',
    reviews: 'ANONYMIZE',                // Keep review, remove author
    support_tickets: '3 YEARS'           // Legal disputes
  },

  // Inactive user data (no login for 2 years)
  inactive_user: {
    warning_email: 'SEND AT 18 MONTHS',
    final_warning: 'SEND AT 23 MONTHS',
    deletion: 'AUTO-DELETE AT 24 MONTHS',
    exemption: 'Keep if active orders/wallet balance exists'
  }
};

// Implementation: Scheduled job
async function cleanupInactiveUsers() {
  const twoYearsAgo = new Date();
  twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

  const inactiveUsers = await db.users.findAll({
    where: {
      last_login: { [Op.lt]: twoYearsAgo },
      account_status: 'active'
    }
  });

  for (const user of inactiveUsers) {
    // Check exemptions
    const hasActiveOrders = await db.orders.count({
      where: { user_id: user.id, status: { [Op.in]: ['pending', 'processing'] } }
    });

    const hasWalletBalance = await rabtulWalletSDK.getBalance(user.id);

    if (hasActiveOrders > 0 || hasWalletBalance > 0) {
      console.log(`Skipping user ${user.id} - has active orders or wallet balance`);
      continue;
    }

    // Auto-delete inactive user
    await deleteUserAccount(user.id, 'INACTIVE_ACCOUNT_AUTO_DELETE');
  }
}

// Run daily at 2 AM
cron.schedule('0 2 * * *', cleanupInactiveUsers);
```

---

### Order Data Retention

```javascript
const ORDER_DATA_RETENTION = {
  // Completed orders
  completed_order: {
    order_details: '7 YEARS',        // Tax compliance
    payment_details: '7 YEARS',      // Financial audit
    delivery_address: '7 YEARS',     // Legal disputes
    user_name: '7 YEARS',            // Legal disputes
    merchant_commission: '10 YEARS'  // Accounting
  },

  // Cancelled orders
  cancelled_order: {
    order_details: '3 YEARS',        // Fraud analysis
    cancellation_reason: '3 YEARS',
    payment_refund: '7 YEARS'        // Financial audit
  },

  // Failed orders
  failed_order: {
    order_details: '1 YEAR',         // Debugging
    failure_reason: '1 YEAR',
    payment_attempt: '3 YEARS'       // Fraud detection
  }
};

// Implementation: Anonymization after retention
async function anonymizeExpiredOrders() {
  const sevenYearsAgo = new Date();
  sevenYearsAgo.setFullYear(sevenYearsAgo.getFullYear() - 7);

  const expiredOrders = await db.orders.findAll({
    where: {
      status: 'delivered',
      delivered_at: { [Op.lt]: sevenYearsAgo }
    }
  });

  for (const order of expiredOrders) {
    await db.orders.update(
      {
        // Anonymize PII
        user_name: `User_${order.id}`,
        email: `deleted_${order.id}@anonymized.rtmn`,
        phone: null,
        delivery_address: 'ANONYMIZED',

        // Keep business data
        order_total: order.order_total,
        merchant_id: order.merchant_id,
        platform_commission: order.platform_commission,
        created_at: order.created_at
      },
      { where: { id: order.id } }
    );

    // Mark as anonymized
    await db.data_anonymization_log.create({
      entity_type: 'order',
      entity_id: order.id,
      anonymized_at: new Date(),
      reason: 'RETENTION_PERIOD_EXPIRED'
    });
  }
}

// Run weekly
cron.schedule('0 3 * * 0', anonymizeExpiredOrders);
```

---

### Merchant Data Retention

```javascript
const MERCHANT_DATA_RETENTION = {
  // Active merchant
  active_merchant: {
    business_details: 'INDEFINITE',
    bank_account: 'INDEFINITE',
    gst_number: 'INDEFINITE',
    product_catalog: 'INDEFINITE',
    sales_history: '10 YEARS',       // Accounting
    commission_history: '10 YEARS',  // Accounting
    payout_history: '10 YEARS'       // Financial audit
  },

  // Closed merchant account
  closed_merchant: {
    business_details: '10 YEARS',    // Legal disputes
    sales_history: '10 YEARS',       // Tax audit
    commission_history: '10 YEARS',
    product_catalog: 'DELETE IMMEDIATELY',
    customer_data: 'DELETE IMMEDIATELY'  // No longer has lawful basis
  }
};
```

---

## 🔐 USER RIGHTS IMPLEMENTATION

### Right to Access (Data Export)

```javascript
// GDPR Article 15: Right to Access
class DataExportService {
  async exportUserData(userId) {
    const user = await db.users.findByPk(userId);

    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }

    // Compile all user data
    const userData = {
      personal_info: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        date_of_birth: user.date_of_birth,
        gender: user.gender,
        created_at: user.created_at
      },

      addresses: await db.addresses.findAll({
        where: { user_id: userId },
        attributes: { exclude: ['id', 'user_id'] }
      }),

      orders: await db.orders.findAll({
        where: { user_id: userId },
        include: ['items', 'payment'],
        attributes: { exclude: ['password_hash', 'jwt_refresh_token'] }
      }),

      wallet: await rabtulWalletSDK.getTransactionHistory(userId),

      reviews: await db.reviews.findAll({
        where: { user_id: userId }
      }),

      wishlists: await db.wishlists.findAll({
        where: { user_id: userId }
      }),

      search_history: await redis.lrange(`search_history:${userId}`, 0, -1),

      support_tickets: await db.support_tickets.findAll({
        where: { user_id: userId }
      })
    };

    // Generate JSON file
    const json = JSON.stringify(userData, null, 2);
    const filename = `user_data_${userId}_${Date.now()}.json`;

    // Upload to S3 with expiry
    const url = await s3.upload({
      Bucket: process.env.S3_BUCKET,
      Key: `user-data-exports/${filename}`,
      Body: json,
      Expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      ContentType: 'application/json'
    });

    // Log export request
    await db.gdpr_requests.create({
      user_id: userId,
      request_type: 'DATA_EXPORT',
      status: 'COMPLETED',
      export_url: url.Location,
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    // Send email with download link
    await sendEmail({
      to: user.email,
      subject: 'Your Data Export is Ready',
      template: 'data_export',
      data: {
        download_url: url.Location,
        expires_in: '7 days'
      }
    });

    return { export_url: url.Location };
  }
}

// API endpoint
app.post('/api/v1/users/export-data', authMiddleware, async (req, res) => {
  const service = new DataExportService();
  const result = await service.exportUserData(req.user.id);

  res.json({
    message: 'Data export initiated. You will receive an email with download link.',
    export_url: result.export_url,
    expires_in: '7 days'
  });
});
```

---

### Right to Erasure (Account Deletion)

```javascript
// GDPR Article 17: Right to Erasure
class AccountDeletionService {
  async deleteUserAccount(userId, reason = 'USER_REQUEST') {
    const user = await db.users.findByPk(userId);

    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }

    // Check for legal holds (cannot delete)
    const legalHolds = await this.checkLegalHolds(userId);

    if (legalHolds.length > 0) {
      throw new Error('CANNOT_DELETE_LEGAL_HOLD', {
        holds: legalHolds
      });
    }

    // Start deletion process
    const deletionJob = await db.deletion_jobs.create({
      user_id: userId,
      reason,
      status: 'IN_PROGRESS',
      started_at: new Date()
    });

    try {
      // Step 1: Delete immediate data (no legal requirement to keep)
      await this.deleteImmediateData(userId);

      // Step 2: Anonymize data with legal retention requirements
      await this.anonymizeRetainedData(userId);

      // Step 3: Revoke all access tokens
      await this.revokeAllTokens(userId);

      // Step 4: Delete user account
      await db.users.update(
        {
          email: `deleted_${userId}@anonymized.rtmn`,
          phone: null,
          name: `Deleted User ${userId}`,
          profile_photo_url: null,
          account_status: 'DELETED',
          deleted_at: new Date()
        },
        { where: { id: userId } }
      );

      // Mark deletion job as complete
      await deletionJob.update({
        status: 'COMPLETED',
        completed_at: new Date()
      });

      // Send confirmation email (to original email, before deletion)
      await sendEmail({
        to: user.email,
        subject: 'Account Deletion Confirmation',
        template: 'account_deleted',
        data: { deletion_date: new Date() }
      });

      return { success: true };

    } catch (error) {
      await deletionJob.update({
        status: 'FAILED',
        error_message: error.message
      });

      throw error;
    }
  }

  async checkLegalHolds(userId) {
    const holds = [];

    // Check for active disputes
    const disputes = await db.disputes.count({
      where: { user_id: userId, status: { [Op.in]: ['open', 'investigating'] } }
    });
    if (disputes > 0) {
      holds.push({ type: 'ACTIVE_DISPUTE', count: disputes });
    }

    // Check for active orders
    const activeOrders = await db.orders.count({
      where: { user_id: userId, status: { [Op.in]: ['pending', 'processing', 'shipped'] } }
    });
    if (activeOrders > 0) {
      holds.push({ type: 'ACTIVE_ORDERS', count: activeOrders });
    }

    // Check for wallet balance
    const walletBalance = await rabtulWalletSDK.getBalance(userId);
    if (walletBalance > 0) {
      holds.push({ type: 'WALLET_BALANCE', amount: walletBalance });
    }

    return holds;
  }

  async deleteImmediateData(userId) {
    // Delete data with no retention requirement
    await db.search_history.destroy({ where: { user_id: userId } });
    await db.browsing_history.destroy({ where: { user_id: userId } });
    await db.cart_items.destroy({ where: { user_id: userId } });
    await db.wishlists.destroy({ where: { user_id: userId } });
    await db.notifications.destroy({ where: { user_id: userId } });
    await db.sessions.destroy({ where: { user_id: userId } });

    // Delete from Redis
    await redis.del(`search_history:${userId}`);
    await redis.del(`cart:${userId}`);
    await redis.del(`session:${userId}:*`);
  }

  async anonymizeRetainedData(userId) {
    // Anonymize orders (keep for 7 years)
    await db.orders.update(
      {
        user_name: `User_${userId}`,
        email: `deleted_${userId}@anonymized.rtmn`,
        phone: null
      },
      { where: { user_id: userId } }
    );

    // Anonymize reviews (keep but remove attribution)
    await db.reviews.update(
      {
        user_name: 'Anonymous',
        user_id: null
      },
      { where: { user_id: userId } }
    );

    // Anonymize support tickets (keep for 3 years)
    await db.support_tickets.update(
      {
        user_name: `User_${userId}`,
        email: `deleted_${userId}@anonymized.rtmn`
      },
      { where: { user_id: userId } }
    );
  }

  async revokeAllTokens(userId) {
    // Revoke JWT refresh tokens
    await db.refresh_tokens.destroy({ where: { user_id: userId } });

    // Revoke API keys (if any)
    await db.api_keys.update(
      { status: 'revoked' },
      { where: { user_id: userId } }
    );

    // Delete Redis sessions
    await redis.del(`session:${userId}:*`);
  }
}

// API endpoint
app.delete('/api/v1/users/account', authMiddleware, async (req, res) => {
  const service = new AccountDeletionService();

  try {
    await service.deleteUserAccount(req.user.id, 'USER_REQUEST');

    res.json({
      message: 'Your account has been successfully deleted.',
      deletion_date: new Date()
    });

  } catch (error) {
    if (error.message === 'CANNOT_DELETE_LEGAL_HOLD') {
      return res.status(400).json({
        error: 'CANNOT_DELETE_ACCOUNT',
        message: 'Your account cannot be deleted due to active orders or disputes.',
        legal_holds: error.holds,
        action: 'Please resolve these issues before requesting deletion.'
      });
    }

    throw error;
  }
});
```

---

### Right to Rectification (Data Correction)

```javascript
// GDPR Article 16: Right to Rectification
class DataCorrectionService {
  async correctUserData(userId, corrections) {
    const user = await db.users.findByPk(userId);

    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }

    // Validate corrections
    const allowedFields = ['name', 'email', 'phone', 'date_of_birth', 'gender'];
    const invalidFields = Object.keys(corrections).filter(
      field => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
      throw new Error('INVALID_FIELDS', { fields: invalidFields });
    }

    // Log correction request
    await db.data_correction_log.create({
      user_id: userId,
      old_data: JSON.stringify(user),
      new_data: JSON.stringify(corrections),
      requested_at: new Date()
    });

    // Apply corrections
    await user.update(corrections);

    return { success: true, updated_fields: Object.keys(corrections) };
  }
}

// API endpoint
app.patch('/api/v1/users/profile', authMiddleware, async (req, res) => {
  const service = new DataCorrectionService();
  const result = await service.correctUserData(req.user.id, req.body);

  res.json({
    message: 'Profile updated successfully',
    updated_fields: result.updated_fields
  });
});
```

---

## 🔔 DATA BREACH NOTIFICATION

```javascript
// GDPR Article 33 & DPDPA: Data Breach Notification
class DataBreachNotificationService {
  async reportBreach(breachDetails) {
    const breach = await db.data_breaches.create({
      breach_type: breachDetails.type,      // 'unauthorized_access', 'data_leak', etc.
      affected_users: breachDetails.affected_users,
      data_types: breachDetails.data_types, // ['email', 'phone', 'orders']
      severity: breachDetails.severity,     // 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
      discovered_at: new Date(),
      status: 'INVESTIGATING'
    });

    // Step 1: Immediate internal notification
    await this.notifySecurityTeam(breach);

    // Step 2: Assess severity
    const requiresAuthorityNotification = this.assessSeverity(breach);

    // Step 3: Notify authorities (within 72 hours - GDPR/DPDPA)
    if (requiresAuthorityNotification) {
      await this.notifyAuthorities(breach);
    }

    // Step 4: Notify affected users (if high risk)
    if (breach.severity === 'HIGH' || breach.severity === 'CRITICAL') {
      await this.notifyAffectedUsers(breach);
    }

    return breach;
  }

  assessSeverity(breach) {
    // High severity if:
    // - Financial data exposed
    // - Authentication credentials exposed
    // - > 1000 users affected

    const highSeverityDataTypes = ['bank_account', 'card_details', 'password_hash'];
    const hasHighSeverityData = breach.data_types.some(
      type => highSeverityDataTypes.includes(type)
    );

    return hasHighSeverityData || breach.affected_users > 1000;
  }

  async notifyAuthorities(breach) {
    // GDPR: Notify EU Data Protection Authority
    // DPDPA: Notify Data Protection Board of India

    const notification = {
      breach_id: breach.id,
      organization: 'RTMN Digital Pvt Ltd',
      discovered_at: breach.discovered_at,
      affected_users: breach.affected_users,
      data_types: breach.data_types,
      mitigation_steps: 'Password reset, session revocation, 2FA enforcement',
      contact: 'dpo@rtmn.digital'
    };

    // Send to authorities (implementation depends on country)
    await this.sendToDataProtectionAuthority(notification);

    // Log notification
    await db.compliance_notifications.create({
      type: 'DATA_BREACH_AUTHORITY',
      breach_id: breach.id,
      notified_at: new Date()
    });
  }

  async notifyAffectedUsers(breach) {
    const affectedUsers = await db.users.findAll({
      where: { id: { [Op.in]: breach.affected_users } }
    });

    for (const user of affectedUsers) {
      await sendEmail({
        to: user.email,
        subject: 'Important Security Notice',
        template: 'data_breach_notification',
        data: {
          breach_type: breach.breach_type,
          data_types: breach.data_types,
          mitigation_steps: [
            'We have reset your password',
            'Please log in and set a new password',
            'Enable two-factor authentication',
            'Review your recent account activity'
          ],
          support_email: 'security@rtmn.digital'
        }
      });

      // Force password reset
      await db.users.update(
        { requires_password_reset: true },
        { where: { id: user.id } }
      );

      // Revoke all sessions
      await revokeAllSessions(user.id);
    }
  }
}

// Usage
const breachService = new DataBreachNotificationService();

await breachService.reportBreach({
  type: 'UNAUTHORIZED_ACCESS',
  affected_users: [123, 456, 789],
  data_types: ['email', 'phone', 'order_history'],
  severity: 'HIGH'
});
```

---

## 🔍 AUDIT LOGGING

```javascript
// GDPR Article 5: Accountability Principle
class AuditLogger {
  async logAccess(accessDetails) {
    await db.audit_logs.create({
      user_id: accessDetails.user_id,
      accessed_by: accessDetails.accessed_by,   // Admin/Support user ID
      access_type: accessDetails.access_type,   // 'VIEW', 'EDIT', 'DELETE', 'EXPORT'
      entity_type: accessDetails.entity_type,   // 'user', 'order', 'wallet'
      entity_id: accessDetails.entity_id,
      ip_address: accessDetails.ip_address,
      reason: accessDetails.reason,             // 'SUPPORT_TICKET', 'FRAUD_INVESTIGATION'
      accessed_at: new Date()
    });
  }

  async getAccessHistory(userId) {
    return await db.audit_logs.findAll({
      where: { user_id: userId },
      order: [['accessed_at', 'DESC']],
      limit: 100
    });
  }
}

// Middleware for sensitive data access
async function auditMiddleware(req, res, next) {
  // Only audit access to user data
  if (req.path.includes('/users/') || req.path.includes('/wallet/')) {
    const auditLogger = new AuditLogger();

    await auditLogger.logAccess({
      user_id: req.params.userId,
      accessed_by: req.admin.id,
      access_type: req.method === 'GET' ? 'VIEW' : 'EDIT',
      entity_type: 'user',
      entity_id: req.params.userId,
      ip_address: req.ip,
      reason: req.headers['x-access-reason'] || 'ADMIN_ACCESS'
    });
  }

  next();
}

// API endpoint for users to view access history
app.get('/api/v1/users/access-history', authMiddleware, async (req, res) => {
  const auditLogger = new AuditLogger();
  const history = await auditLogger.getAccessHistory(req.user.id);

  res.json({
    access_history: history.map(log => ({
      accessed_by: log.accessed_by === req.user.id ? 'You' : 'Support Team',
      access_type: log.access_type,
      reason: log.reason,
      accessed_at: log.accessed_at
    }))
  });
});
```

---

## 📋 CONSENT MANAGEMENT

```javascript
// GDPR Article 7: Consent
class ConsentManager {
  async recordConsent(userId, consentType, granted = true) {
    await db.consents.create({
      user_id: userId,
      consent_type: consentType,  // 'marketing_emails', 'analytics', 'location_tracking'
      granted,
      granted_at: new Date(),
      ip_address: req.ip,
      user_agent: req.headers['user-agent']
    });
  }

  async checkConsent(userId, consentType) {
    const consent = await db.consents.findOne({
      where: { user_id: userId, consent_type: consentType },
      order: [['granted_at', 'DESC']]
    });

    return consent?.granted || false;
  }

  async revokeConsent(userId, consentType) {
    await this.recordConsent(userId, consentType, false);
  }
}

// Consent types
const CONSENT_TYPES = {
  ESSENTIAL: [
    'account_creation',
    'order_processing',
    'payment_processing'
  ],

  OPTIONAL: [
    'marketing_emails',
    'promotional_sms',
    'analytics_tracking',
    'location_tracking',
    'personalized_recommendations',
    'third_party_data_sharing'
  ]
};

// API endpoints
app.post('/api/v1/users/consent', authMiddleware, async (req, res) => {
  const { consent_type, granted } = req.body;

  // Cannot revoke essential consents
  if (CONSENT_TYPES.ESSENTIAL.includes(consent_type) && !granted) {
    return res.status(400).json({
      error: 'CANNOT_REVOKE_ESSENTIAL_CONSENT',
      message: 'This consent is required for using the service'
    });
  }

  const consentManager = new ConsentManager();
  await consentManager.recordConsent(req.user.id, consent_type, granted);

  res.json({ message: 'Consent updated successfully' });
});

app.get('/api/v1/users/consents', authMiddleware, async (req, res) => {
  const consents = await db.consents.findAll({
    where: { user_id: req.user.id },
    attributes: ['consent_type', 'granted', 'granted_at'],
    order: [['granted_at', 'DESC']]
  });

  // Group by consent_type (get latest only)
  const latestConsents = {};
  for (const consent of consents) {
    if (!latestConsents[consent.consent_type]) {
      latestConsents[consent.consent_type] = consent;
    }
  }

  res.json({ consents: Object.values(latestConsents) });
});
```

---

## 🎯 DATA RETENTION SUMMARY

### Retention Periods (Quick Reference)

| Data Type | Active User | Deleted User | Legal Basis |
|-----------|-------------|--------------|-------------|
| **Profile Data** | Indefinite | Delete immediately | Contract |
| **Order History** | 7 years | 7 years (anonymized) | Legal obligation (tax) |
| **Wallet Transactions** | 7 years | 7 years (anonymized) | Legal obligation (finance) |
| **Search History** | 90 days | Delete immediately | Legitimate interest |
| **Browsing History** | 30 days | Delete immediately | Legitimate interest |
| **Reviews** | Indefinite | Anonymize | Legitimate interest |
| **Support Tickets** | Indefinite | 3 years | Legal claims |
| **IP Address Logs** | 90 days | Delete immediately | Security |
| **Session Logs** | 14 days | Delete immediately | Security |

### User Rights Implementation Status

| Right | GDPR Article | Status | API Endpoint |
|-------|--------------|--------|--------------|
| **Right to Access** | Article 15 | ✅ Implemented | POST /api/v1/users/export-data |
| **Right to Erasure** | Article 17 | ✅ Implemented | DELETE /api/v1/users/account |
| **Right to Rectification** | Article 16 | ✅ Implemented | PATCH /api/v1/users/profile |
| **Right to Portability** | Article 20 | ✅ Implemented | POST /api/v1/users/export-data |
| **Right to Object** | Article 21 | ✅ Implemented | POST /api/v1/users/consent |
| **Right to Restrict** | Article 18 | ⏳ Pending | - |

### Key Principles

1. **Data Minimization** - Collect only necessary data
2. **Storage Limitation** - Delete after retention period
3. **Anonymization** - Convert to anonymous data when possible
4. **Consent** - Explicit consent for optional data processing
5. **Transparency** - Clear privacy policy, accessible to users
6. **Accountability** - Audit logs for all data access
7. **Security** - AES-256 encryption, TLS 1.3, access controls

---

**Status:** ✅ POLICIES DEFINED
**Compliance:** GDPR + DPDPA (India)
**Last Updated:** 2026-01-04
