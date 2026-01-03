# HQ Admin & Sub-Admins - Complete Documentation

**Generated:** 2026-01-03
**Total Screens:** 178
**Admin Roles:** 4 (Support, Operator, Admin, Super Admin)

---

## Admin Hierarchy

```
HQ Super Admin (Level 100)
    ├── HQ Admin (Level 80)
    │   ├── HQ Operator (Level 70)
    │   │   └── HQ Support (Level 60)
    │
    └── Zone Admins
        ├── North Zone Admin
        ├── South Zone Admin
        └── Metro Zone Admin
```

## Admin Roles & Permissions

### 1. HQ Super Admin (Level 100)
**Access:** Full platform control
**Key Screens:**
- HQCommandCenter.jsx
- AdminSystemConfig.jsx
- AdminUserAccessGovernance.jsx
- AdminZoneManagement.jsx

**Permissions:**
- Create/delete any entity
- System configuration
- Zone management
- User access control
- Full financial access

### 2. HQ Admin (Level 80)
**Access:** Operations & management
**Key Screens:**
- AdminDashboard.jsx
- AdminMerchantGovernance.jsx
- AdminTransactions.jsx
- AdminReports.jsx

**Permissions:**
- Approve/reject merchants
- View all transactions
- Generate reports
- Manage campaigns

### 3. HQ Operator (Level 70)
**Access:** Day-to-day operations
**Key Screens:**
- AdminOperationsDashboard.jsx
- AdminOrderManagement.jsx
- AdminCustomerSupport.jsx

**Permissions:**
- View operations
- Handle escalations
- Moderate content

### 4. HQ Support (Level 60)
**Access:** Customer support
**Key Screens:**
- AdminSupportDashboard.jsx
- AdminTicketManagement.jsx
- AdminCustomerLookup.jsx

**Permissions:**
- View customer details
- Handle support tickets
- Basic refunds

---

## Complete Feature List

### Dashboard & Analytics (15 screens)
- Global dashboard
- Regional dashboards
- Real-time metrics
- Performance analytics

### Merchant Management (35 screens)
- Merchant approval workflow
- Merchant monitoring
- Compliance checks
- Merchant analytics

### User Management (25 screens)
- User lookup
- User governance
- KYC verification
- Ban/suspend users

### Transaction Management (20 screens)
- Transaction monitoring
- Reconciliation
- Refund management
- Dispute resolution

### Campaign & Marketing (18 screens)
- Create campaigns
- Promotion launcher
- Notification management
- A/B testing

### System Configuration (15 screens)
- Zone management
- Rule engine
- System settings
- Emergency controls

### Reports & Analytics (25 screens)
- Financial reports
- Operations reports
- Custom reports
- Export capabilities

### Support & Moderation (25 screens)
- Ticket management
- Content moderation
- Escalation handling
- Chat support

---

## API Requirements

**Total APIs:** 150+ endpoints

**See:** [SCREEN_TO_API_MAPPING.md](SCREEN_TO_API_MAPPING.md)

---

**Status:** ✅ Complete & Ready for Development
