# 🛡️ Admin UX Safety Controls - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ MANDATORY FOR ALL ADMIN OPERATIONS
**Purpose:** Prevent catastrophic admin errors through preview, approval, and rollback mechanisms

---

## ⚠️ THE ADMIN DANGER PROBLEM

Admin actions have **massive blast radius**:

```javascript
// One click can:
- Deactivate 10,000 merchants ❌
- Delete all promo campaigns ❌
- Change coin expiry affecting millions ❌
- Refund thousands of orders ❌
```

**Without safety controls:** Human error = Business catastrophe

**This document provides MANDATORY safety mechanisms.**

---

## 🎯 DANGER CLASSIFICATION

### Admin Action Risk Levels

```javascript
const RISK_LEVELS = {
  // Low risk: Reversible, small scope
  LOW: {
    color: 'green',
    requiresPreview: false,
    requiresApproval: false,
    requiresAudit: true,
    examples: [
      'View reports',
      'Export data',
      'Update own profile'
    ]
  },

  // Medium risk: Affects single entity
  MEDIUM: {
    color: 'yellow',
    requiresPreview: true,
    requiresApproval: false,
    requiresAudit: true,
    confirmationRequired: true,
    examples: [
      'Deactivate single merchant',
      'Cancel single order',
      'Edit product details'
    ]
  },

  // High risk: Affects multiple entities
  HIGH: {
    color: 'orange',
    requiresPreview: true,
    requiresApproval: true,
    requiresAudit: true,
    twoFactorRequired: true,
    coolingPeriod: 300000, // 5 minutes
    examples: [
      'Bulk merchant deactivation',
      'Platform-wide campaign changes',
      'Bulk refunds'
    ]
  },

  // Critical risk: Platform-wide, irreversible
  CRITICAL: {
    color: 'red',
    requiresPreview: true,
    requiresApproval: true,
    requiresAudit: true,
    twoFactorRequired: true,
    multiApprovalRequired: 2, // Requires 2 admins
    coolingPeriod: 900000, // 15 minutes
    rollbackRequired: true,
    examples: [
      'Change coin redemption rules',
      'Platform-wide price changes',
      'Delete campaign engine rules',
      'Modify settlement formulas'
    ]
  }
};
```

---

## 🔍 PREVIEW MODE (MANDATORY)

### Preview Before Execute

```javascript
// admin/actions/bulkMerchantUpdate.js
async function bulkUpdateMerchants(filters, updates) {
  // Step 1: PREVIEW MODE (dry run)
  const preview = await previewBulkUpdate(filters, updates);

  // Show preview to admin
  const confirmed = await showPreviewModal({
    title: 'Preview: Bulk Merchant Update',
    summary: {
      totalAffected: preview.affectedCount,
      changes: preview.changes,
      warnings: preview.warnings,
      errors: preview.errors
    },
    detailedView: preview.affectedEntities.slice(0, 10), // Show first 10
    buttons: [
      { label: 'Cancel', style: 'secondary' },
      {
        label: `Apply to ${preview.affectedCount} merchants`,
        style: 'danger',
        requiresConfirmation: true
      }
    ]
  });

  if (!confirmed) return;

  // Step 2: EXECUTE
  const result = await executeBulkUpdate(filters, updates);

  // Step 3: AUDIT LOG
  await logAdminAction({
    action: 'bulk_merchant_update',
    adminId: currentAdmin.id,
    preview,
    result,
    timestamp: new Date()
  });

  return result;
}

// Preview implementation
async function previewBulkUpdate(filters, updates) {
  // Simulate update without committing
  const affectedMerchants = await db.merchants.findAll({
    where: filters,
    transaction: null // Read-only query
  });

  const changes = affectedMerchants.map(merchant => ({
    merchantId: merchant.id,
    merchantName: merchant.business_name,
    before: pick(merchant, Object.keys(updates)),
    after: { ...merchant, ...updates }
  }));

  // Detect warnings
  const warnings = [];
  if (updates.status === 'suspended') {
    const activeOrders = await db.orders.count({
      where: {
        merchant_id: affectedMerchants.map(m => m.id),
        status: ['pending', 'confirmed', 'processing']
      }
    });

    if (activeOrders > 0) {
      warnings.push({
        type: 'ACTIVE_ORDERS',
        message: `${activeOrders} active orders will be affected`,
        severity: 'high'
      });
    }
  }

  return {
    affectedCount: affectedMerchants.length,
    changes,
    warnings,
    errors: [],
    affectedEntities: changes
  };
}
```

---

## ✅ APPROVAL WORKFLOWS

### Multi-Level Approval

```javascript
// Approval system
const APPROVAL_MATRIX = {
  // Action type → Required approvers
  'bulk_merchant_deactivation': {
    minApprovers: 2,
    allowedRoles: ['super_admin', 'admin'],
    timeout: 24 * 60 * 60 * 1000, // 24 hours
    notifyOnRequest: true
  },

  'platform_campaign_change': {
    minApprovers: 1,
    allowedRoles: ['super_admin'],
    timeout: 12 * 60 * 60 * 1000
  },

  'coin_rule_change': {
    minApprovers: 2,
    allowedRoles: ['super_admin'],
    requiresFinanceApproval: true,
    timeout: 48 * 60 * 60 * 1000
  }
};

// Request approval
async function requestApproval(action, details) {
  const approvalConfig = APPROVAL_MATRIX[action.type];

  // Create approval request
  const request = await db.approval_requests.create({
    id: uuidv4(),
    action_type: action.type,
    requested_by: currentAdmin.id,
    details: JSON.stringify(details),
    preview_data: JSON.stringify(action.preview),
    required_approvers: approvalConfig.minApprovers,
    status: 'pending',
    expires_at: new Date(Date.now() + approvalConfig.timeout)
  });

  // Notify eligible approvers
  const approvers = await db.users.findAll({
    where: {
      role: approvalConfig.allowedRoles,
      id: { [Op.ne]: currentAdmin.id } // Exclude requester
    }
  });

  for (const approver of approvers) {
    await sendNotification({
      userId: approver.id,
      type: 'approval_request',
      title: `Approval Required: ${action.type}`,
      body: `${currentAdmin.name} requested approval for ${action.type}`,
      data: {
        requestId: request.id,
        actionType: action.type,
        preview: action.preview
      }
    });
  }

  return request;
}

// Approve/Reject
async function processApproval(requestId, decision, reason) {
  const request = await db.approval_requests.findByPk(requestId);

  if (request.status !== 'pending') {
    throw new Error('Request already processed');
  }

  if (new Date() > request.expires_at) {
    throw new Error('Request expired');
  }

  // Record approval
  await db.approval_decisions.create({
    request_id: requestId,
    approver_id: currentAdmin.id,
    decision, // 'approved' or 'rejected'
    reason,
    timestamp: new Date()
  });

  // Check if enough approvals
  const approvals = await db.approval_decisions.count({
    where: {
      request_id: requestId,
      decision: 'approved'
    }
  });

  if (approvals >= request.required_approvers) {
    // Execute action
    await request.update({ status: 'approved' });
    await executeApprovedAction(request);
  }

  // Check if rejected
  const rejections = await db.approval_decisions.count({
    where: {
      request_id: requestId,
      decision: 'rejected'
    }
  });

  if (rejections > 0) {
    await request.update({ status: 'rejected' });
  }
}
```

---

## 🔄 ROLLBACK MECHANISM

### Rollback Support for Critical Actions

```javascript
// Rollback system
class RollbackManager {
  static async createRollbackPoint(action, beforeState) {
    const rollbackId = uuidv4();

    await db.rollback_points.create({
      id: rollbackId,
      action_type: action.type,
      action_id: action.id,
      before_state: JSON.stringify(beforeState),
      created_by: currentAdmin.id,
      created_at: new Date(),
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });

    return rollbackId;
  }

  static async rollback(rollbackId, reason) {
    const rollbackPoint = await db.rollback_points.findByPk(rollbackId);

    if (!rollbackPoint) {
      throw new Error('Rollback point not found');
    }

    if (new Date() > rollbackPoint.expires_at) {
      throw new Error('Rollback point expired');
    }

    const beforeState = JSON.parse(rollbackPoint.before_state);

    // Begin transaction
    const transaction = await db.sequelize.transaction();

    try {
      // Restore previous state
      switch (rollbackPoint.action_type) {
        case 'bulk_merchant_update':
          await this.rollbackBulkMerchantUpdate(beforeState, transaction);
          break;

        case 'campaign_update':
          await this.rollbackCampaignUpdate(beforeState, transaction);
          break;

        case 'rule_change':
          await this.rollbackRuleChange(beforeState, transaction);
          break;

        default:
          throw new Error(`Rollback not supported for ${rollbackPoint.action_type}`);
      }

      // Record rollback
      await db.rollback_history.create({
        rollback_point_id: rollbackId,
        rolled_back_by: currentAdmin.id,
        reason,
        timestamp: new Date()
      }, { transaction });

      await transaction.commit();

      // Notify stakeholders
      await notifyRollback({
        action: rollbackPoint.action_type,
        reason,
        rolledBackBy: currentAdmin.name
      });

    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async rollbackBulkMerchantUpdate(beforeState, transaction) {
    for (const merchant of beforeState.merchants) {
      await db.merchants.update(merchant.data, {
        where: { id: merchant.id },
        transaction
      });
    }
  }
}

// Usage
async function criticalAdminAction(action, data) {
  // 1. Capture before state
  const beforeState = await captureCurrentState(action, data);

  // 2. Create rollback point
  const rollbackId = await RollbackManager.createRollbackPoint(action, beforeState);

  // 3. Execute action
  try {
    const result = await executeAction(action, data);

    // 4. Show rollback option to admin
    showNotification({
      message: 'Action completed successfully',
      action: {
        label: 'Undo',
        onPress: () => RollbackManager.rollback(rollbackId, 'Admin undo')
      },
      duration: 60000 // 1 minute to undo
    });

    return result;
  } catch (error) {
    // Auto-rollback on error
    await RollbackManager.rollback(rollbackId, 'Auto-rollback on error');
    throw error;
  }
}
```

---

## ⏱️ COOLING PERIOD

### Mandatory Wait Before Execution

```javascript
// Cooling period for dangerous actions
async function executeWithCoolingPeriod(action, coolingPeriod) {
  // 1. Show countdown
  const cooldownEnd = Date.now() + coolingPeriod;

  const modal = showModal({
    title: 'Safety Cooling Period',
    message: `This is a high-risk action. Please review before executing.`,
    countdown: {
      endsAt: cooldownEnd,
      label: 'Execute in'
    },
    preview: action.preview,
    buttons: [
      {
        label: 'Cancel',
        style: 'secondary',
        enabled: true
      },
      {
        label: 'Execute',
        style: 'danger',
        enabled: false, // Disabled during cooling
        enablesAt: cooldownEnd
      }
    ]
  });

  // 2. Wait for cooling period
  await new Promise(resolve => setTimeout(resolve, coolingPeriod));

  // 3. Enable execute button
  modal.enableButton('Execute');

  // 4. Wait for admin decision
  const confirmed = await modal.waitForDecision();

  return confirmed;
}
```

---

## 🔐 TWO-FACTOR AUTHENTICATION

### 2FA for Critical Actions

```javascript
// Require 2FA before execution
async function requireTwoFactor(action) {
  // Check if already verified recently
  const recentVerification = await checkRecentTwoFactorVerification(currentAdmin.id);

  if (recentVerification && Date.now() - recentVerification < 5 * 60 * 1000) {
    // Verified within last 5 minutes
    return true;
  }

  // Request 2FA
  const twoFactorModal = showModal({
    title: '2FA Verification Required',
    message: `Enter your 2FA code to execute: ${action.type}`,
    input: {
      type: 'number',
      placeholder: '6-digit code',
      maxLength: 6
    },
    buttons: [
      { label: 'Cancel', style: 'secondary' },
      { label: 'Verify', style: 'primary' }
    ]
  });

  const code = await twoFactorModal.waitForInput();

  // Verify code
  const verified = await verify2FACode(currentAdmin.id, code);

  if (!verified) {
    showToast({
      type: 'error',
      message: 'Invalid 2FA code'
    });
    return false;
  }

  // Record verification
  await recordTwoFactorVerification(currentAdmin.id);

  return true;
}
```

---

## 📊 IMPACT PREVIEW

### Show Impact Before Execution

```javascript
// Impact calculator
async function calculateImpact(action, data) {
  const impact = {
    scope: {
      merchants: 0,
      products: 0,
      users: 0,
      orders: 0,
      revenue: 0
    },
    risks: [],
    dependencies: []
  };

  switch (action.type) {
    case 'deactivate_merchant':
      const merchant = await db.merchants.findByPk(data.merchantId);

      impact.scope.merchants = 1;
      impact.scope.products = await db.products.count({
        where: { merchant_id: merchant.id }
      });

      const activeOrders = await db.orders.count({
        where: {
          merchant_id: merchant.id,
          status: ['pending', 'confirmed', 'processing']
        }
      });

      if (activeOrders > 0) {
        impact.risks.push({
          type: 'ACTIVE_ORDERS',
          severity: 'high',
          message: `${activeOrders} active orders will be affected`,
          recommendation: 'Wait for orders to complete or contact customers'
        });
      }

      break;

    case 'change_coin_expiry':
      impact.scope.users = await db.users.count({
        where: {
          rez_coins_balance: { [Op.gt]: 0 }
        }
      });

      const affectedCoins = await db.coins.sum('amount', {
        where: {
          expires_at: { [Op.between]: [data.oldExpiry, data.newExpiry] }
        }
      });

      impact.scope.revenue = affectedCoins * 0.05; // Potential liability change

      if (data.newExpiry < data.oldExpiry) {
        impact.risks.push({
          type: 'USER_BACKLASH',
          severity: 'critical',
          message: 'Reducing expiry may cause user complaints',
          recommendation: 'Consider grandfathering existing coins'
        });
      }

      break;
  }

  return impact;
}

// Show impact preview
function showImpactPreview(impact) {
  return showModal({
    title: 'Impact Analysis',
    sections: [
      {
        title: 'Scope',
        items: Object.entries(impact.scope)
          .filter(([_, value]) => value > 0)
          .map(([key, value]) => ({
            label: key,
            value: value.toLocaleString()
          }))
      },
      {
        title: 'Risks',
        items: impact.risks.map(risk => ({
          severity: risk.severity,
          message: risk.message,
          recommendation: risk.recommendation
        }))
      },
      {
        title: 'Dependencies',
        items: impact.dependencies
      }
    ],
    footer: impact.risks.some(r => r.severity === 'critical')
      ? 'CRITICAL RISKS DETECTED - Proceed with caution'
      : 'Review carefully before proceeding'
  });
}
```

---

## ✅ SAFETY CHECKLIST

Before ANY admin action:

- [ ] Risk level classified (LOW/MEDIUM/HIGH/CRITICAL)?
- [ ] Preview mode implemented?
- [ ] Impact analysis shown?
- [ ] Approval workflow configured (if HIGH/CRITICAL)?
- [ ] Rollback point created (if CRITICAL)?
- [ ] Cooling period enforced (if HIGH/CRITICAL)?
- [ ] 2FA required (if HIGH/CRITICAL)?
- [ ] Audit logging enabled?
- [ ] User notifications planned?
- [ ] Recovery plan documented?

**If ANY checkbox unchecked → Action NOT safe to deploy**

---

## 🎯 SUMMARY

### Mandatory Safety Controls

| Risk Level | Preview | Approval | Rollback | Cooling | 2FA | Audit |
|------------|---------|----------|----------|---------|-----|-------|
| **LOW** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **MEDIUM** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **HIGH** | ✅ | ✅ | ✅ | ✅ 5m | ✅ | ✅ |
| **CRITICAL** | ✅ | ✅ (2+) | ✅ | ✅ 15m | ✅ | ✅ |

### Key Principles

✅ **Preview First** → Never execute without showing impact
✅ **Require Approval** → High-risk actions need multiple eyes
✅ **Enable Rollback** → Critical actions must be reversible
✅ **Add Friction** → Cooling periods prevent hasty decisions
✅ **Verify Identity** → 2FA for dangerous operations
✅ **Audit Everything** → All admin actions logged

---

**Status:** ✅ MANDATORY FOR ALL ADMIN OPERATIONS
**Applies To:** HQ Admin, Super Admin, Admin roles
**Last Updated:** 2026-01-03

