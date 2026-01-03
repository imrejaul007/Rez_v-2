# Complete Screen-to-API Mapping

**Total Screens:** 1103
**Generated:** 2026-01-03 22:40:35

This document maps every screen to its required API endpoints, including:
- APIs called on screen mount/load
- APIs called on user actions
- Real-time WebSocket subscriptions
- Loading states and error handling

---

## BizOne (Merchant OS)
**Total Screens:** 222

### Merchant (219 screens)

#### CreateOffer
**Path:** `merchant/CreateOffer.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/createoffer
```

**User Actions:**
```
POST /api/createoffer - Submit form
POST /api/createoffer/validate - Validate input
POST /api/createoffer/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAccountantPortal
**Path:** `merchant/MerchantAccountantPortal.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/merchantaccountantportal
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAccounting
**Path:** `merchant/MerchantAccounting.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantaccounting
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAdzyHub
**Path:** `merchant/MerchantAdzyHub.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantadzyhub
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAggregatorBridge
**Path:** `merchant/MerchantAggregatorBridge.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/merchantaggregatorbridge
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAggregatorReconciliation
**Path:** `merchant/MerchantAggregatorReconciliation.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/merchantaggregatorreconciliation
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAnalytics
**Path:** `merchant/MerchantAnalytics.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantanalytics
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAppointments
**Path:** `merchant/MerchantAppointments.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantappointments
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAutoRestock
**Path:** `merchant/MerchantAutoRestock.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantautorestock
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantAutopilot
**Path:** `merchant/MerchantAutopilot.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantautopilot
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBOGOOffers
**Path:** `merchant/MerchantBOGOOffers.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantbogooffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBarcodeGenerator
**Path:** `merchant/MerchantBarcodeGenerator.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantbarcodegenerator
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBarcodeScanner
**Path:** `merchant/MerchantBarcodeScanner.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantbarcodescanner
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBatchTracking
**Path:** `merchant/MerchantBatchTracking.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/merchantbatchtracking
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBenchmarks
**Path:** `merchant/MerchantBenchmarks.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantbenchmarks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBillHold
**Path:** `merchant/MerchantBillHold.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantbillhold
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBillManagement
**Path:** `merchant/MerchantBillManagement.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantbillmanagement
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBillSplitting
**Path:** `merchant/MerchantBillSplitting.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/merchantbillsplitting
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBirthdayOffers
**Path:** `merchant/MerchantBirthdayOffers.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantbirthdayoffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantBirthdayRewards
**Path:** `merchant/MerchantBirthdayRewards.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/merchantbirthdayrewards
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 199 more screens in this category*

### Partner (3 screens)

#### PartnerDashboard
**Path:** `partner/PartnerDashboard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/partnerdashboard/overview
GET /api/partnerdashboard/stats
GET /api/partnerdashboard/recent
```

**WebSocket Subscriptions:**
```
partnerdashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### PartnerSignup
**Path:** `partner/PartnerSignup.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/partnersignup
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### PartnerSuccess
**Path:** `partner/PartnerSuccess.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/partnersuccess
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

---

## Category-Specific
**Total Screens:** 182

### Beauty (11 screens)

#### BeautyAll
**Path:** `beauty/BeautyAll.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyall?page=1&limit=20
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyClinicDetail
**Path:** `beauty/BeautyClinicDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyclinicdetail/{id}
GET /api/beautyclinicdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyClinics
**Path:** `beauty/BeautyClinics.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyclinics
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyConcierge
**Path:** `beauty/BeautyConcierge.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyconcierge
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyDeals
**Path:** `beauty/BeautyDeals.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautydeals
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyGift
**Path:** `beauty/BeautyGift.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautygift
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyNearby
**Path:** `beauty/BeautyNearby.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautynearby
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyOffers
**Path:** `beauty/BeautyOffers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyoffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyProductDetail
**Path:** `beauty/BeautyProductDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyproductdetail/{id}
GET /api/beautyproductdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyProducts
**Path:** `beauty/BeautyProducts.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyproducts
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyServices
**Path:** `beauty/BeautyServices.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/beautyservices
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Cashstore (9 screens)

#### CashStoreBrandDetail
**Path:** `cashstore/CashStoreBrandDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashstorebranddetail/{id}
GET /api/cashstorebranddetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStoreCategory
**Path:** `cashstore/CashStoreCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashstorecategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStoreCoupons
**Path:** `cashstore/CashStoreCoupons.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashstorecoupons
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStoreGiftCards
**Path:** `cashstore/CashStoreGiftCards.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/cashstoregiftcards
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStoreMissingCashback
**Path:** `cashstore/CashStoreMissingCashback.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashstoremissingcashback
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStoreStores
**Path:** `cashstore/CashStoreStores.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashstorestores
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStoreTrack
**Path:** `cashstore/CashStoreTrack.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/cashstoretrack
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HowItWorks
**Path:** `cashstore/HowItWorks.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/howitworks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### TrackCashback
**Path:** `cashstore/TrackCashback.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/trackcashback
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### College (3 screens)

#### AmbassadorDashboard
**Path:** `college/AmbassadorDashboard.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/ambassadordashboard/overview
GET /api/ambassadordashboard/stats
GET /api/ambassadordashboard/recent
```

**WebSocket Subscriptions:**
```
ambassadordashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CollegeHome
**Path:** `college/CollegeHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/collegehome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StudentVerification
**Path:** `college/StudentVerification.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/studentverification
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Contests (2 screens)

#### ContestDetail
**Path:** `contests/ContestDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/contestdetail/{id}
GET /api/contestdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ContestHub
**Path:** `contests/ContestHub.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/contesthub
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Corporate (7 screens)

#### CorporateAccount
**Path:** `corporate/CorporateAccount.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporateaccount
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporateBulkOrders
**Path:** `corporate/CorporateBulkOrders.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporatebulkorders
```

**WebSocket Subscriptions:**
```
corporatebulkorders.updated
order.statusChanged
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporateInvoices
**Path:** `corporate/CorporateInvoices.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporateinvoices
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporateOrders
**Path:** `corporate/CorporateOrders.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporateorders
```

**WebSocket Subscriptions:**
```
corporateorders.updated
order.statusChanged
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporateReports
**Path:** `corporate/CorporateReports.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporatereports
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporateTeamManagement
**Path:** `corporate/CorporateTeamManagement.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporateteammanagement
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EmployeeVerification
**Path:** `corporate/EmployeeVerification.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/employeeverification
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Creator (5 screens)

#### CollectionDetail
**Path:** `creator/CollectionDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/collectiondetail/{id}
GET /api/collectiondetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CreatorPickDetail
**Path:** `creator/CreatorPickDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/creatorpickdetail/{id}
GET /api/creatorpickdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CreatorProfile
**Path:** `creator/CreatorProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/creatorprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CreatorStoreHome
**Path:** `creator/CreatorStoreHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/creatorstorehome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CreatorsAll
**Path:** `creator/CreatorsAll.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/creatorsall?page=1&limit=20
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Events (12 screens)

#### EventDetails
**Path:** `events/EventDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventdetails/{id}
GET /api/eventdetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventGallery
**Path:** `events/EventGallery.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventgallery
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventTickets
**Path:** `events/EventTickets.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventtickets
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsCalendar
**Path:** `events/EventsCalendar.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventscalendar
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsCheckIn
**Path:** `events/EventsCheckIn.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventscheckin
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsConcerts
**Path:** `events/EventsConcerts.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventsconcerts
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsExperiences
**Path:** `events/EventsExperiences.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventsexperiences
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsGaming
**Path:** `events/EventsGaming.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventsgaming
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsMovies
**Path:** `events/EventsMovies.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventsmovies
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsParks
**Path:** `events/EventsParks.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventsparks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsWorkshops
**Path:** `events/EventsWorkshops.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/eventsworkshops
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MyEvents
**Path:** `events/MyEvents.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/myevents
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Exclusive (12 screens)

#### BirthdaySpecials
**Path:** `exclusive/BirthdaySpecials.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/birthdayspecials
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporatePerks
**Path:** `exclusive/CorporatePerks.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/corporateperks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExclusiveBenefits
**Path:** `exclusive/ExclusiveBenefits.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exclusivebenefits
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExclusiveDeals
**Path:** `exclusive/ExclusiveDeals.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exclusivedeals
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExclusiveEvents
**Path:** `exclusive/ExclusiveEvents.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exclusiveevents
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExclusiveMembership
**Path:** `exclusive/ExclusiveMembership.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exclusivemembership
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExclusiveProducts
**Path:** `exclusive/ExclusiveProducts.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exclusiveproducts
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExclusiveVIPAccess
**Path:** `exclusive/ExclusiveVIPAccess.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exclusivevipaccess
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LoyaltyRewards
**Path:** `exclusive/LoyaltyRewards.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/loyaltyrewards
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SpecialProfiles
**Path:** `exclusive/SpecialProfiles.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/specialprofiles
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StudentZone
**Path:** `exclusive/StudentZone.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/studentzone
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WomenExclusive
**Path:** `exclusive/WomenExclusive.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/womenexclusive
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Experience (7 screens)

#### ExperienceBooking
**Path:** `experience/ExperienceBooking.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencebooking
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExperienceDetail
**Path:** `experience/ExperienceDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencedetail/{id}
GET /api/experiencedetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExperienceGallery
**Path:** `experience/ExperienceGallery.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencegallery
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExperienceGiftCard
**Path:** `experience/ExperienceGiftCard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencegiftcard
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExperiencePackages
**Path:** `experience/ExperiencePackages.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencepackages
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExperienceReviews
**Path:** `experience/ExperienceReviews.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencereviews
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExperienceWishlist
**Path:** `experience/ExperienceWishlist.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/experiencewishlist
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Explore (10 screens)

#### CategoryDetail
**Path:** `explore/CategoryDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/categorydetail/{id}
GET /api/categorydetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ComparePage
**Path:** `explore/ComparePage.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/compare
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CompareSmartFindPage
**Path:** `explore/CompareSmartFindPage.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/comparesmartfind
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### DailyCheckInPage
**Path:** `explore/DailyCheckInPage.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/dailycheckin
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ExploreProductDetail
**Path:** `explore/ExploreProductDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/exploreproductdetail/{id}
GET /api/exploreproductdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FriendsActivityPage
**Path:** `explore/FriendsActivityPage.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/friendsactivity
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MapViewPage
**Path:** `explore/MapViewPage.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/mapview
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ReviewEarnPage
**Path:** `explore/ReviewEarnPage.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/reviewearn
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SpinWinPage
**Path:** `explore/SpinWinPage.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/spinwin
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### TrendingPage
**Path:** `explore/TrendingPage.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/trending
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Fashion (10 screens)

#### FashionBrandDetail
**Path:** `fashion/FashionBrandDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionbranddetail/{id}
GET /api/fashionbranddetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionBrands
**Path:** `fashion/FashionBrands.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionbrands
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionDeals
**Path:** `fashion/FashionDeals.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashiondeals
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionOccasionDetail
**Path:** `fashion/FashionOccasionDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionoccasiondetail/{id}
GET /api/fashionoccasiondetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionOccasions
**Path:** `fashion/FashionOccasions.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionoccasions
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionStores
**Path:** `fashion/FashionStores.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionstores
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionTrendDetail
**Path:** `fashion/FashionTrendDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashiontrenddetail/{id}
GET /api/fashiontrenddetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionTrending
**Path:** `fashion/FashionTrending.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashiontrending
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionVibeDetail
**Path:** `fashion/FashionVibeDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionvibedetail/{id}
GET /api/fashionvibedetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionVibes
**Path:** `fashion/FashionVibes.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fashionvibes
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Financial (9 screens)

#### FinancialBills
**Path:** `financial/FinancialBills.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/financialbills
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialCategory
**Path:** `financial/FinancialCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/financialcategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialGold
**Path:** `financial/FinancialGold.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/financialgold
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialHistory
**Path:** `financial/FinancialHistory.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/financialhistory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialOTT
**Path:** `financial/FinancialOTT.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/financialott
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialOTTDetail
**Path:** `financial/FinancialOTTDetail.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/financialottdetail/{id}
GET /api/financialottdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialOfferDetail
**Path:** `financial/FinancialOfferDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/financialofferdetail/{id}
GET /api/financialofferdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialOffers
**Path:** `financial/FinancialOffers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/financialoffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FinancialPayBill
**Path:** `financial/FinancialPayBill.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/financialpaybill
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Fitcircle (5 screens)

#### FitCircleChallenges
**Path:** `fitcircle/FitCircleChallenges.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/fitcirclechallenges
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitCircleHome
**Path:** `fitcircle/FitCircleHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/fitcirclehome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitCircleNutrition
**Path:** `fitcircle/FitCircleNutrition.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/fitcirclenutrition
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitCircleProfile
**Path:** `fitcircle/FitCircleProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/fitcircleprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitCircleWorkouts
**Path:** `fitcircle/FitCircleWorkouts.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitcircleworkouts
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Fitness (12 screens)

#### FitnessCategory
**Path:** `fitness/FitnessCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnesscategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessChallengeDetail
**Path:** `fitness/FitnessChallengeDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnesschallengedetail/{id}
GET /api/fitnesschallengedetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessChallenges
**Path:** `fitness/FitnessChallenges.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnesschallenges
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessFeed
**Path:** `fitness/FitnessFeed.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnessfeed
```

**WebSocket Subscriptions:**
```
fitnessfeed.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessGymDetail
**Path:** `fitness/FitnessGymDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnessgymdetail/{id}
GET /api/fitnessgymdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessGyms
**Path:** `fitness/FitnessGyms.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnessgyms
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessProductDetail
**Path:** `fitness/FitnessProductDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnessproductdetail/{id}
GET /api/fitnessproductdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessStore
**Path:** `fitness/FitnessStore.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/fitnessstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessStreak
**Path:** `fitness/FitnessStreak.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnessstreak
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessStudios
**Path:** `fitness/FitnessStudios.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnessstudios
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessTrainerDetail
**Path:** `fitness/FitnessTrainerDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnesstrainerdetail/{id}
GET /api/fitnesstrainerdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitnessTrainers
**Path:** `fitness/FitnessTrainers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitnesstrainers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Grocery (9 screens)

#### GroceryCategory
**Path:** `grocery/GroceryCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/grocerycategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryCompare
**Path:** `grocery/GroceryCompare.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/grocerycompare
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryDeals
**Path:** `grocery/GroceryDeals.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/grocerydeals
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryFast
**Path:** `grocery/GroceryFast.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/groceryfast
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryOffers
**Path:** `grocery/GroceryOffers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/groceryoffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryProductDetail
**Path:** `grocery/GroceryProductDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/groceryproductdetail/{id}
GET /api/groceryproductdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryProducts
**Path:** `grocery/GroceryProducts.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/groceryproducts
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryStoreDetail
**Path:** `grocery/GroceryStoreDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/grocerystoredetail/{id}
GET /api/grocerystoredetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GroceryStores
**Path:** `grocery/GroceryStores.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/grocerystores
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Healthcare (13 screens)

#### HealthcareCategory
**Path:** `healthcare/HealthcareCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcarecategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareDental
**Path:** `healthcare/HealthcareDental.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcaredental
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareDentalDetail
**Path:** `healthcare/HealthcareDentalDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcaredentaldetail/{id}
GET /api/healthcaredentaldetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareDiagnostics
**Path:** `healthcare/HealthcareDiagnostics.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcarediagnostics
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareDoctorDetail
**Path:** `healthcare/HealthcareDoctorDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcaredoctordetail/{id}
GET /api/healthcaredoctordetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareDoctors
**Path:** `healthcare/HealthcareDoctors.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcaredoctors
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareEmergency
**Path:** `healthcare/HealthcareEmergency.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcareemergency
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareOffers
**Path:** `healthcare/HealthcareOffers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcareoffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcarePharmacy
**Path:** `healthcare/HealthcarePharmacy.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/healthcarepharmacy
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcarePharmacyDetail
**Path:** `healthcare/HealthcarePharmacyDetail.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/healthcarepharmacydetail/{id}
GET /api/healthcarepharmacydetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareSupport
**Path:** `healthcare/HealthcareSupport.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcaresupport
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareTestDetail
**Path:** `healthcare/HealthcareTestDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcaretestdetail/{id}
GET /api/healthcaretestdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HealthcareUploadBill
**Path:** `healthcare/HealthcareUploadBill.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/healthcareuploadbill
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Home-Services (7 screens)

#### HomeServicesAvailableToday
**Path:** `home-services/HomeServicesAvailableToday.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homeservicesavailabletoday
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeServicesBook
**Path:** `home-services/HomeServicesBook.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homeservicesbook
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeServicesBookings
**Path:** `home-services/HomeServicesBookings.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/homeservicesbookings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeServicesCategory
**Path:** `home-services/HomeServicesCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homeservicescategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeServicesPopular
**Path:** `home-services/HomeServicesPopular.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homeservicespopular
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeServicesProviderDetail
**Path:** `home-services/HomeServicesProviderDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homeservicesproviderdetail/{id}
GET /api/homeservicesproviderdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeServicesProviders
**Path:** `home-services/HomeServicesProviders.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homeservicesproviders
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Homehub (4 screens)

#### HomeHubHome
**Path:** `homehub/HomeHubHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/homehubhome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeHubRoomPlanner
**Path:** `homehub/HomeHubRoomPlanner.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/homehubroomplanner
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeHubServices
**Path:** `homehub/HomeHubServices.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/homehubservices
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### HomeHubShop
**Path:** `homehub/HomeHubShop.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/homehubshop
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Lifestyle (12 screens)

#### CreatorFashionFeed
**Path:** `lifestyle/fashion/CreatorFashionFeed.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/creatorfashionfeed
```

**WebSocket Subscriptions:**
```
creatorfashionfeed.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EventsHub
**Path:** `lifestyle/events/EventsHub.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/eventshub
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FashionTravelPlanner
**Path:** `lifestyle/fashion/FashionTravelPlanner.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/fashiontravelplanner
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FoodHub
**Path:** `lifestyle/food/FoodHub.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/foodhub
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LifestyleProfile
**Path:** `lifestyle/LifestyleProfile.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/lifestyleprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OutfitCalendar
**Path:** `lifestyle/fashion/OutfitCalendar.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/outfitcalendar
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StyleChallenges
**Path:** `lifestyle/fashion/StyleChallenges.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/stylechallenges
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StyleDNAResult
**Path:** `lifestyle/fashion/StyleDNAResult.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/stylednaresult
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StyleQuiz
**Path:** `lifestyle/fashion/StyleQuiz.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/stylequiz
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SustainabilityDashboard
**Path:** `lifestyle/fashion/SustainabilityDashboard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/sustainabilitydashboard/overview
GET /api/sustainabilitydashboard/stats
GET /api/sustainabilitydashboard/recent
```

**WebSocket Subscriptions:**
```
sustainabilitydashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### VirtualWardrobe
**Path:** `lifestyle/fashion/VirtualWardrobe.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/virtualwardrobe
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WardrobeOutfitSuggestions
**Path:** `lifestyle/fashion/WardrobeOutfitSuggestions.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/wardrobeoutfitsuggestions
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Mall (6 screens)

#### MallBrandDetail
**Path:** `mall/MallBrandDetail.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/mallbranddetail/{id}
GET /api/mallbranddetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MallBrands
**Path:** `mall/MallBrands.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/mallbrands
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MallCart
**Path:** `mall/MallCart.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/mallcart
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MallCategories
**Path:** `mall/MallCategories.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/mallcategories
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MallCategory
**Path:** `mall/MallCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/mallcategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MallCollection
**Path:** `mall/MallCollection.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/mallcollection
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Stores (9 screens)

#### ChildrenStore
**Path:** `stores/ChildrenStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/childrenstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GiftingStore
**Path:** `stores/GiftingStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/giftingstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LuxuryStore
**Path:** `stores/LuxuryStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/luxurystore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MenStore
**Path:** `stores/MenStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/menstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OrganicStore
**Path:** `stores/OrganicStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/organicstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### RentalStore
**Path:** `stores/RentalStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/rentalstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StoreDetails
**Path:** `stores/StoreDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/storedetails/{id}
GET /api/storedetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StoresMap
**Path:** `stores/StoresMap.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/storesmap
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WomenStore
**Path:** `stores/WomenStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/womenstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Stylesync (4 screens)

#### StyleSyncCloset
**Path:** `stylesync/StyleSyncCloset.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/stylesynccloset
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StyleSyncHome
**Path:** `stylesync/StyleSyncHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/stylesynchome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StyleSyncLooks
**Path:** `stylesync/StyleSyncLooks.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/stylesynclooks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### StyleSyncShop
**Path:** `stylesync/StyleSyncShop.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/stylesyncshop
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Techhunt (4 screens)

#### TechHuntCompare
**Path:** `techhunt/TechHuntCompare.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/techhuntcompare
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### TechHuntDeals
**Path:** `techhunt/TechHuntDeals.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/techhuntdeals
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### TechHuntHome
**Path:** `techhunt/TechHuntHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/techhunthome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### TechHuntWishlist
**Path:** `techhunt/TechHuntWishlist.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/techhuntwishlist
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

---

## Discovery Layer
**Total Screens:** 31

### Ai (12 screens)

#### AIBudgetAssistant
**Path:** `ai/AIBudgetAssistant.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aibudgetassistant
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIFitnessCoach
**Path:** `ai/AIFitnessCoach.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aifitnesscoach
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIImageSearch
**Path:** `ai/AIImageSearch.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aiimagesearch
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIInsights
**Path:** `ai/AIInsights.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aiinsights
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIMealPlanner
**Path:** `ai/AIMealPlanner.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aimealplanner
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIPredictiveBuying
**Path:** `ai/AIPredictiveBuying.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aipredictivebuying
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIPriceComparison
**Path:** `ai/AIPriceComparison.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/aipricecomparison
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIRecommendations
**Path:** `ai/AIRecommendations.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/airecommendations
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIShoppingAssistant
**Path:** `ai/AIShoppingAssistant.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aishoppingassistant
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AISmartSearch
**Path:** `ai/AISmartSearch.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aismartsearch
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIStyleAdvisor
**Path:** `ai/AIStyleAdvisor.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aistyleadvisor
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIVoiceAssistant
**Path:** `ai/AIVoiceAssistant.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/aivoiceassistant
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Air (6 screens)

#### AIRChat
**Path:** `air/AIRChat.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/airchat
```

**WebSocket Subscriptions:**
```
airchat.updated
chat.newMessage
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIRDiscover
**Path:** `air/AIRDiscover.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/airdiscover
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIRHome
**Path:** `air/AIRHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/airhome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIRProfile
**Path:** `air/AIRProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/airprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIRSaved
**Path:** `air/AIRSaved.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/airsaved
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AIRWallet
**Path:** `air/AIRWallet.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/airwallet
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Buzzloop (5 screens)

#### BuzzLoopCreate
**Path:** `buzzloop/BuzzLoopCreate.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopcreate
```

**User Actions:**
```
POST /api/buzzloopcreate - Submit form
POST /api/buzzloopcreate/validate - Validate input
POST /api/buzzloopcreate/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopExplore
**Path:** `buzzloop/BuzzLoopExplore.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloopexplore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopHome
**Path:** `buzzloop/BuzzLoopHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloophome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopNotifications
**Path:** `buzzloop/BuzzLoopNotifications.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloopnotifications
```

**WebSocket Subscriptions:**
```
buzzloopnotifications.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopProfile
**Path:** `buzzloop/BuzzLoopProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloopprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Coinhunt (4 screens)

#### CoinHuntHome
**Path:** `coinhunt/CoinHuntHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/coinhunthome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHuntMap
**Path:** `coinhunt/CoinHuntMap.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/coinhuntmap
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHuntMyDeals
**Path:** `coinhunt/CoinHuntMyDeals.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/coinhuntmydeals
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHuntWallet
**Path:** `coinhunt/CoinHuntWallet.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/coinhuntwallet
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Localedge (4 screens)

#### LocalEdgeCheckin
**Path:** `localedge/LocalEdgeCheckin.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/localedgecheckin
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LocalEdgeExplore
**Path:** `localedge/LocalEdgeExplore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/localedgeexplore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LocalEdgeHome
**Path:** `localedge/LocalEdgeHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/localedgehome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LocalEdgeProfile
**Path:** `localedge/LocalEdgeProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/localedgeprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

---

## Growth Stack
**Total Screens:** 45

### Growth (45 screens)

#### BuzzLoopAnalytics
**Path:** `growth/buzzloop/BuzzLoopAnalytics.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopanalytics
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopChallenges
**Path:** `growth/buzzloop/BuzzLoopChallenges.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopchallenges
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopCreate
**Path:** `growth/buzzloop/BuzzLoopCreate.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloopcreate
```

**User Actions:**
```
POST /api/buzzloopcreate - Submit form
POST /api/buzzloopcreate/validate - Validate input
POST /api/buzzloopcreate/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopFeed
**Path:** `growth/buzzloop/BuzzLoopFeed.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopfeed
```

**WebSocket Subscriptions:**
```
buzzloopfeed.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopFollowers
**Path:** `growth/buzzloop/BuzzLoopFollowers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopfollowers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopFollowing
**Path:** `growth/buzzloop/BuzzLoopFollowing.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopfollowing
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopHashtags
**Path:** `growth/buzzloop/BuzzLoopHashtags.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloophashtags
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopHome
**Path:** `growth/buzzloop/BuzzLoopHome.jsx`
**Type:** Drawer

**On Mount:**
```
GET /api/buzzloophome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopLive
**Path:** `growth/buzzloop/BuzzLoopLive.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzlooplive
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopMessages
**Path:** `growth/buzzloop/BuzzLoopMessages.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopmessages
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopNotifications
**Path:** `growth/buzzloop/BuzzLoopNotifications.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopnotifications
```

**WebSocket Subscriptions:**
```
buzzloopnotifications.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopProfile
**Path:** `growth/buzzloop/BuzzLoopProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloopprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopSearch
**Path:** `growth/buzzloop/BuzzLoopSearch.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzloopsearch
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopSettings
**Path:** `growth/buzzloop/BuzzLoopSettings.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/buzzloopsettings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BuzzLoopTrending
**Path:** `growth/buzzloop/BuzzLoopTrending.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/buzzlooptrending
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CampusConnectHome
**Path:** `growth/campusconnect/CampusConnectHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/campusconnecthome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ChallengesHome
**Path:** `growth/challenges/ChallengesHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/challengeshome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHuntChallenges
**Path:** `growth/coinhunt/CoinHuntChallenges.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/coinhuntchallenges
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHuntHistory
**Path:** `growth/coinhunt/CoinHuntHistory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/coinhunthistory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHuntHome
**Path:** `growth/coinhunt/CoinHuntHome.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/coinhunthome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 25 more screens in this category*

---

## HQ Admin
**Total Screens:** 178

### Admin (178 screens)

#### AdminABTestResults
**Path:** `admin/AdminABTestResults.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminabtestresults
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAIInsights
**Path:** `admin/AdminAIInsights.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/adminaiinsights
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAIModerationQueue
**Path:** `admin/AdminAIModerationQueue.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/adminaimoderationqueue
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAIRecommendations
**Path:** `admin/AdminAIRecommendations.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminairecommendations
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAPIMonitoring
**Path:** `admin/AdminAPIMonitoring.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminapimonitoring
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAPIQuotas
**Path:** `admin/AdminAPIQuotas.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/adminapiquotas
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAnalytics
**Path:** `admin/AdminAnalytics.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminanalytics
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAnalyticsDashboard
**Path:** `admin/AdminAnalyticsDashboard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminanalyticsdashboard/overview
GET /api/adminanalyticsdashboard/stats
GET /api/adminanalyticsdashboard/recent
```

**WebSocket Subscriptions:**
```
adminanalyticsdashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAppBranding
**Path:** `admin/AdminAppBranding.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminappbranding
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAuditVault
**Path:** `admin/AdminAuditVault.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/adminauditvault
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminAutoBanRules
**Path:** `admin/AdminAutoBanRules.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminautobanrules
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBOGOManagement
**Path:** `admin/AdminBOGOManagement.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/adminbogomanagement
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBackgroundJobs
**Path:** `admin/AdminBackgroundJobs.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/adminbackgroundjobs
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBackupRestore
**Path:** `admin/AdminBackupRestore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminbackuprestore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBankOffers
**Path:** `admin/AdminBankOffers.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/adminbankoffers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBankReconciliation
**Path:** `admin/AdminBankReconciliation.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/adminbankreconciliation
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBarterCampaigns
**Path:** `admin/AdminBarterCampaigns.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/adminbartercampaigns
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminBrandCustomization
**Path:** `admin/AdminBrandCustomization.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/adminbrandcustomization
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminCampaignApproval
**Path:** `admin/AdminCampaignApproval.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/admincampaignapproval
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AdminCampaignBuilder
**Path:** `admin/AdminCampaignBuilder.jsx`
**Type:** Drawer

**On Mount:**
```
GET /api/admincampaignbuilder
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 158 more screens in this category*

---

## ReZ (Customer App)
**Total Screens:** 213

### Root (129 screens)

#### AccountDeletion
**Path:** `AccountDeletion.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/accountdeletion
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AchievementsList
**Path:** `AchievementsList.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/achievementslist?page=1&limit=20
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AddressManagement
**Path:** `AddressManagement.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/addressmanagement
```

**User Actions:**
```
POST /api/addressmanagement - Submit form
POST /api/addressmanagement/validate - Validate input
POST /api/addressmanagement/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BadgeCollection
**Path:** `BadgeCollection.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/badgecollection
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Beauty
**Path:** `Beauty.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/beauty
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyCategory
**Path:** `BeautyCategory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautycategory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BeautyService
**Path:** `BeautyService.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/beautyservice
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BillSplitting
**Path:** `BillSplitting.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/billsplitting
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Bookings
**Path:** `Bookings.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/bookings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BrandLoyalty
**Path:** `BrandLoyalty.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/brandloyalty
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Cart
**Path:** `Cart.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cart
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CartSummary
**Path:** `CartSummary.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cartsummary
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashStore
**Path:** `CashStore.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashstore
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CashbackDetail
**Path:** `CashbackDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cashbackdetail/{id}
GET /api/cashbackdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Categories
**Path:** `Categories.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/categories
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CategoryHub
**Path:** `CategoryHub.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/categoryhub
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ChallengeCenter
**Path:** `ChallengeCenter.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/challengecenter
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ChangePassword
**Path:** `ChangePassword.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/changepassword
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ChatSupport
**Path:** `ChatSupport.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/chatsupport
```

**WebSocket Subscriptions:**
```
chatsupport.updated
chat.newMessage
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CheckoutReview
**Path:** `CheckoutReview.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/checkoutreview
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 109 more screens in this category*

### Earn (21 screens)

#### Achievements
**Path:** `earn/Achievements.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/achievements
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BrandTasks
**Path:** `earn/BrandTasks.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/brandtasks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinHunt
**Path:** `earn/CoinHunt.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/coinhunt
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CollegeAmbassador
**Path:** `earn/CollegeAmbassador.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/collegeambassador
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CorporateEmployee
**Path:** `earn/CorporateEmployee.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/corporateemployee
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GuessPrice
**Path:** `earn/GuessPrice.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/guessprice
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Leaderboard
**Path:** `earn/Leaderboard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/leaderboard
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LuckyDraw
**Path:** `earn/LuckyDraw.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/luckydraw
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MemoryMatch
**Path:** `earn/MemoryMatch.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/memorymatch
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### PlayGames
**Path:** `earn/PlayGames.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/playgames
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Quiz
**Path:** `earn/Quiz.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/quiz
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ReferEarn
**Path:** `earn/ReferEarn.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/referearn
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ReferralPage
**Path:** `earn/ReferralPage.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/referral
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ScratchCard
**Path:** `earn/ScratchCard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/scratchcard
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialImpact
**Path:** `earn/SocialImpact.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialimpact
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialImpactEventDetail
**Path:** `earn/SocialImpactEventDetail.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/socialimpacteventdetail/{id}
GET /api/socialimpacteventdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Surveys
**Path:** `earn/Surveys.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/surveys
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### TournamentDetail
**Path:** `earn/TournamentDetail.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/tournamentdetail/{id}
GET /api/tournamentdetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### UGCCreator
**Path:** `earn/UGCCreator.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/ugccreator
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### UploadBillPage
**Path:** `earn/UploadBillPage.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/uploadbill
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 1 more screens in this category*

### Social (20 screens)

#### SocialActivityDetail
**Path:** `social/SocialActivityDetail.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/socialactivitydetail/{id}
GET /api/socialactivitydetail/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialBookmarks
**Path:** `social/SocialBookmarks.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialbookmarks
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialChat
**Path:** `social/SocialChat.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialchat
```

**WebSocket Subscriptions:**
```
socialchat.updated
chat.newMessage
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialCreatePost
**Path:** `social/SocialCreatePost.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialcreatepost
```

**User Actions:**
```
POST /api/socialcreatepost - Submit form
POST /api/socialcreatepost/validate - Validate input
POST /api/socialcreatepost/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialEditProfile
**Path:** `social/SocialEditProfile.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialeditprofile
```

**User Actions:**
```
PUT /api/socialeditprofile/{id} - Update resource
PATCH /api/socialeditprofile/{id} - Partial update
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialEventDetails
**Path:** `social/SocialEventDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialeventdetails/{id}
GET /api/socialeventdetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialEvents
**Path:** `social/SocialEvents.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialevents
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialFollowers
**Path:** `social/SocialFollowers.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialfollowers
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialFollowing
**Path:** `social/SocialFollowing.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialfollowing
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialGroupDetails
**Path:** `social/SocialGroupDetails.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialgroupdetails/{id}
GET /api/socialgroupdetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialGroups
**Path:** `social/SocialGroups.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialgroups
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialHashtag
**Path:** `social/SocialHashtag.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialhashtag
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialMentions
**Path:** `social/SocialMentions.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialmentions
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialMessages
**Path:** `social/SocialMessages.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialmessages
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialNotifications
**Path:** `social/SocialNotifications.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialnotifications
```

**WebSocket Subscriptions:**
```
socialnotifications.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialProfile
**Path:** `social/SocialProfile.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialprofile
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialReports
**Path:** `social/SocialReports.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialreports
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialSearch
**Path:** `social/SocialSearch.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialsearch
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialSettings
**Path:** `social/SocialSettings.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/socialsettings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SocialTrending
**Path:** `social/SocialTrending.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/socialtrending
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### User (35 screens)

#### AccountDeletionConfirm
**Path:** `user/AccountDeletionConfirm.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/accountdeletionconfirm
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AppThemeSelector
**Path:** `user/AppThemeSelector.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/appthemeselector
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BankLinkingFlow
**Path:** `user/BankLinkingFlow.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/banklinkingflow
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinConverter
**Path:** `user/CoinConverter.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/coinconverter
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinExpiryTracker
**Path:** `user/CoinExpiryTracker.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/coinexpirytracker
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### CoinTypeExplainer
**Path:** `user/CoinTypeExplainer.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/cointypeexplainer
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### DataPrivacySettings
**Path:** `user/DataPrivacySettings.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/dataprivacysettings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### DisputeResolutionForm
**Path:** `user/DisputeResolutionForm.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/disputeresolutionform
```

**User Actions:**
```
POST /api/disputeresolutionform - Submit form
POST /api/disputeresolutionform/validate - Validate input
POST /api/disputeresolutionform/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EarningOpportunities
**Path:** `user/EarningOpportunities.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/earningopportunities
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EmailVerification
**Path:** `user/EmailVerification.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/emailverification
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FeatureHighlights
**Path:** `user/FeatureHighlights.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/featurehighlights
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### GiftCoins
**Path:** `user/GiftCoins.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/giftcoins
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### InviteHistoryList
**Path:** `user/InviteHistoryList.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/invitehistorylist?page=1&limit=20
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### LanguageSelector
**Path:** `user/LanguageSelector.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/languageselector
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### MerchantReviewForm
**Path:** `user/MerchantReviewForm.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/merchantreviewform
```

**User Actions:**
```
POST /api/merchantreviewform - Submit form
POST /api/merchantreviewform/validate - Validate input
POST /api/merchantreviewform/draft - Save draft
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### NotificationPreferencesNew
**Path:** `user/NotificationPreferencesNew.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/notificationpreferencesnew
```

**WebSocket Subscriptions:**
```
notificationpreferencesnew.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OnboardingLocation
**Path:** `user/OnboardingLocation.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/onboardinglocation
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OnboardingPreferences
**Path:** `user/OnboardingPreferences.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/onboardingpreferences
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OnboardingWelcome
**Path:** `user/OnboardingWelcome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/onboardingwelcome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OrderCancellationDetails
**Path:** `user/OrderCancellationDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/ordercancellationdetails/{id}
GET /api/ordercancellationdetails/{id}/related
```

**WebSocket Subscriptions:**
```
ordercancellationdetails.updated
order.statusChanged
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 15 more screens in this category*

### Wallet (8 screens)

#### WalletAutoRecharge
**Path:** `wallet/WalletAutoRecharge.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/walletautorecharge
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletCards
**Path:** `wallet/WalletCards.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/walletcards
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletLimits
**Path:** `wallet/WalletLimits.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/walletlimits
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletRequestMoney
**Path:** `wallet/WalletRequestMoney.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/walletrequestmoney
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletRewards
**Path:** `wallet/WalletRewards.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/walletrewards
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletStatements
**Path:** `wallet/WalletStatements.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/walletstatements
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletTransfer
**Path:** `wallet/WalletTransfer.jsx`
**Type:** Modal

**On Mount:**
```
GET /api/wallettransfer
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### WalletUse
**Path:** `wallet/WalletUse.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/walletuse
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

---

## ReZ Prive (Premium)
**Total Screens:** 142

### Root (1 screens)

#### RezPrive
**Path:** `RezPrive.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/rezprive
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Prive (141 screens)

#### A1_EligibilityScreen
**Path:** `prive/entry/A1_EligibilityScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a1_eligibility
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A2_InvitationScreen
**Path:** `prive/entry/A2_InvitationScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a2_invitation
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A3_RequestAccessScreen
**Path:** `prive/entry/A3_RequestAccessScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a3_requestaccess
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A4_AccessCategoriesScreen
**Path:** `prive/entry/A4_AccessCategoriesScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a4_accesscategories
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A4_OnboardingScreen
**Path:** `prive/entry/A4_OnboardingScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a4_onboarding
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A5_AccessStatusScreen
**Path:** `prive/entry/A5_AccessStatusScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a5_accessstatus
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A5_RulesScreen
**Path:** `prive/entry/A5_RulesScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a5_rules
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A6_StatusUpdateScreen
**Path:** `prive/entry/A6_StatusUpdateScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a6_statusupdate
```

**User Actions:**
```
PUT /api/a6_statusupdate/{id} - Update resource
PATCH /api/a6_statusupdate/{id} - Partial update
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A6_WhyPriveScreen
**Path:** `prive/entry/A6_WhyPriveScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a6_whyprive
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A7_PriveOrientationScreen
**Path:** `prive/entry/A7_PriveOrientationScreen.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/a7_priveorientation
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A8_RequalificationScreen
**Path:** `prive/entry/A8_RequalificationScreen.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/a8_requalification
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### A9_RedCarpetWelcomeScreen
**Path:** `prive/entry/A9_RedCarpetWelcomeScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/a9_redcarpetwelcome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AppealScreen
**Path:** `prive/notifications/AppealScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/appeal
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### B1_DashboardScreen
**Path:** `prive/core/B1_DashboardScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/b1_dashboard/overview
GET /api/b1_dashboard/stats
GET /api/b1_dashboard/recent
```

**WebSocket Subscriptions:**
```
b1_dashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### B2_WalletScreen
**Path:** `prive/core/B2_WalletScreen.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/b2_wallet
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### B3_ImpactScreen
**Path:** `prive/core/B3_ImpactScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/b3_impact
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### B4_TierProgressScreen
**Path:** `prive/core/B4_TierProgressScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/b4_tierprogress
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### B5_ActivityHistoryScreen
**Path:** `prive/core/B5_ActivityHistoryScreen.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/b5_activityhistory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### B6_SettingsScreen
**Path:** `prive/core/B6_SettingsScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/b6_settings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BrandCampaignRulesScreen
**Path:** `prive/offers/BrandCampaignRulesScreen.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/brandcampaignrules
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 121 more screens in this category*

---

## Shared/Common
**Total Screens:** 10

### Root (8 screens)

#### ForgotPassword
**Path:** `ForgotPassword.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/forgotpassword
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Help
**Path:** `Help.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/help
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Login
**Path:** `Login.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/login
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### OTPVerify
**Path:** `OTPVerify.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/otpverify
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Onboarding
**Path:** `Onboarding.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/onboarding
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Privacy
**Path:** `Privacy.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/privacy
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Splash
**Path:** `Splash.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/splash
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### Terms
**Path:** `Terms.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/terms
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

### Support (2 screens)

#### SupportChat
**Path:** `support/SupportChat.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/supportchat
```

**WebSocket Subscriptions:**
```
supportchat.updated
chat.newMessage
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### SupportDashboard
**Path:** `support/SupportDashboard.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/supportdashboard/overview
GET /api/supportdashboard/stats
GET /api/supportdashboard/recent
```

**WebSocket Subscriptions:**
```
supportdashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

---

## Wasil Distribution Apps
**Total Screens:** 80

### Wasil (80 screens)

#### AutoPerksHistory
**Path:** `wasil/autoperks/AutoPerksHistory.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/autoperkshistory
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AutoPerksHome
**Path:** `wasil/autoperks/AutoPerksHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/autoperkshome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AutoPerksServiceDetails
**Path:** `wasil/autoperks/AutoPerksServiceDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/autoperksservicedetails/{id}
GET /api/autoperksservicedetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### AutoPerksServices
**Path:** `wasil/autoperks/AutoPerksServices.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/autoperksservices
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BizoraDashboard
**Path:** `wasil/bizora/BizoraDashboard.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/bizoradashboard/overview
GET /api/bizoradashboard/stats
GET /api/bizoradashboard/recent
```

**WebSocket Subscriptions:**
```
bizoradashboard.updated
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BizoraHome
**Path:** `wasil/bizora/BizoraHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/bizorahome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BizoraServiceDetails
**Path:** `wasil/bizora/BizoraServiceDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/bizoraservicedetails/{id}
GET /api/bizoraservicedetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### BizoraServices
**Path:** `wasil/bizora/BizoraServices.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/bizoraservices
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### DinezyHome
**Path:** `wasil/dinezy/DinezyHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/dinezyhome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### DinezyRestaurant
**Path:** `wasil/dinezy/DinezyRestaurant.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/dinezyrestaurant
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ElitezyBookings
**Path:** `wasil/elitezy/ElitezyBookings.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/elitezybookings
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ElitezyHome
**Path:** `wasil/elitezy/ElitezyHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/elitezyhome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ElitezyServiceDetails
**Path:** `wasil/elitezy/ElitezyServiceDetails.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/elitezyservicedetails/{id}
GET /api/elitezyservicedetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### ElitezyServices
**Path:** `wasil/elitezy/ElitezyServices.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/elitezyservices
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EssentiaCategories
**Path:** `wasil/essentia/EssentiaCategories.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/essentiacategories
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EssentiaHome
**Path:** `wasil/essentia/EssentiaHome.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/essentiahome
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EssentiaProductDetails
**Path:** `wasil/essentia/EssentiaProductDetails.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/essentiaproductdetails/{id}
GET /api/essentiaproductdetails/{id}/related
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### EssentiaSubscription
**Path:** `wasil/essentia/EssentiaSubscription.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/essentiasubscription
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitEarnBooking
**Path:** `wasil/fitearn/FitEarnBooking.jsx`
**Type:** Standard

**On Mount:**
```
GET /api/fitearnbooking
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

#### FitEarnBrowse
**Path:** `wasil/fitearn/FitEarnBrowse.jsx`
**Type:** Tab View

**On Mount:**
```
GET /api/fitearnbrowse
```

**Loading States:**
- Initial load: Skeleton/shimmer (2-3s timeout)
- Pull-to-refresh: Spinner
- Pagination: Bottom loader

**Error Handling:**
- Network error → Retry button
- 401 → Force logout, redirect to login
- 403 → Permission denied message
- 404 → Not found, navigate back
- 500 → Error banner with retry

---

*... and 60 more screens in this category*

---
