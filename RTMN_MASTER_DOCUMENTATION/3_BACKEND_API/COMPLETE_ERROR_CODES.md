# Complete Error Codes - RTMN Backend

**Last Updated:** 2026-01-03
**Total Codes:** 100+ comprehensive error definitions
**Purpose:** Standardized error handling across all APIs

---

## 📋 ERROR RESPONSE FORMAT

### Standard Error Response

```json
{
  "success": false,
  "error": {
    "code": 1001,
    "httpStatus": 401,
    "name": "AUTHENTICATION_REQUIRED",
    "message": "Access token required",
    "userMessage": "Please log in to continue",
    "field": "authorization",
    "details": null,
    "retryable": false,
    "action": "LOGIN_REQUIRED",
    "timestamp": "2026-01-03T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

---

## 🔐 AUTHENTICATION ERRORS (1000-1099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 1001 | `AUTH_TOKEN_REQUIRED` | 401 | Access token required | Please log in to continue | false | `LOGIN_REQUIRED` |
| 1002 | `OTP_RATE_LIMITED` | 429 | Too many OTP requests | Please wait before requesting new OTP | true | `WAIT_AND_RETRY` |
| 1003 | `INVALID_OTP` | 400 | Invalid OTP | Incorrect OTP entered | true | `RETRY_OTP` |
| 1004 | `TOKEN_EXPIRED` | 401 | Access token expired | Session expired, refreshing... | true | `REFRESH_TOKEN` |
| 1005 | `INVALID_TOKEN` | 403 | Invalid access token | Authentication failed | false | `LOGIN_REQUIRED` |
| 1006 | `REFRESH_TOKEN_REQUIRED` | 400 | Refresh token required | Please log in again | false | `LOGIN_REQUIRED` |
| 1007 | `REFRESH_TOKEN_REVOKED` | 401 | Refresh token revoked | Session invalidated | false | `LOGIN_REQUIRED` |
| 1008 | `USER_NOT_FOUND` | 401 | User not found or inactive | Account not found | false | `CONTACT_SUPPORT` |
| 1009 | `REFRESH_TOKEN_EXPIRED` | 401 | Refresh token expired | Please log in again | false | `LOGIN_REQUIRED` |
| 1010 | `INVALID_REFRESH_TOKEN` | 403 | Invalid refresh token | Authentication failed | false | `LOGIN_REQUIRED` |
| 1011 | `LOGOUT_TOKEN_REQUIRED` | 400 | Refresh token required for logout | Invalid logout request | false | null |
| 1012 | `TOO_MANY_LOGIN_ATTEMPTS` | 429 | Too many login attempts | Account temporarily locked | true | `WAIT_15_MIN` |
| 1013 | `INVALID_PHONE_NUMBER` | 400 | Invalid phone number format | Please enter valid phone | false | `FIX_INPUT` |
| 1014 | `OTP_EXPIRED` | 400 | OTP has expired | OTP expired, request new one | false | `REQUEST_NEW_OTP` |
| 1015 | `OTP_MAX_ATTEMPTS_EXCEEDED` | 429 | Maximum OTP attempts exceeded | Too many wrong attempts | false | `REQUEST_NEW_OTP` |
| 1016 | `ACCOUNT_BANNED` | 403 | Account has been banned | Your account is suspended | false | `CONTACT_SUPPORT` |
| 1017 | `EMAIL_NOT_VERIFIED` | 403 | Email verification required | Please verify your email | false | `VERIFY_EMAIL` |
| 1018 | `PHONE_NOT_VERIFIED` | 403 | Phone verification required | Please verify your phone | false | `VERIFY_PHONE` |

---

## 👤 USER & PROFILE ERRORS (2000-2099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 2001 | `USER_ALREADY_EXISTS` | 409 | User with this phone exists | Account already registered | false | `LOGIN_INSTEAD` |
| 2002 | `INVALID_USER_DATA` | 400 | Invalid user data | Please check your information | false | `FIX_INPUT` |
| 2003 | `USER_UPDATE_FAILED` | 500 | Failed to update user | Update failed, try again | true | `RETRY` |
| 2004 | `INVALID_EMAIL_FORMAT` | 400 | Invalid email format | Please enter valid email | false | `FIX_INPUT` |
| 2005 | `INVALID_DATE_OF_BIRTH` | 400 | Invalid date of birth | Please check date of birth | false | `FIX_INPUT` |
| 2006 | `UNDERAGE_USER` | 403 | User must be 18 or older | You must be 18+ to register | false | `AGE_RESTRICTION` |
| 2007 | `PROFILE_IMAGE_TOO_LARGE` | 413 | Profile image too large | Image must be under 5MB | false | `COMPRESS_IMAGE` |
| 2008 | `INVALID_IMAGE_FORMAT` | 400 | Invalid image format | Only JPEG, PNG allowed | false | `FIX_FORMAT` |

---

## 🛒 CART & PRODUCT ERRORS (3000-3099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 3001 | `PRODUCT_OUT_OF_STOCK` | 409 | Product out of stock | Item is out of stock | false | `REMOVE_FROM_CART` |
| 3002 | `PRODUCT_NOT_FOUND` | 404 | Product not found | Product no longer available | false | `REMOVE_FROM_CART` |
| 3003 | `INSUFFICIENT_STOCK` | 409 | Insufficient stock available | Only X items left | false | `REDUCE_QUANTITY` |
| 3004 | `CART_ITEM_NOT_FOUND` | 404 | Cart item not found | Item not in cart | false | `REFRESH_CART` |
| 3005 | `INVALID_QUANTITY` | 400 | Invalid quantity | Quantity must be 1 or more | false | `FIX_QUANTITY` |
| 3006 | `MAX_QUANTITY_EXCEEDED` | 400 | Maximum quantity exceeded | Max 10 items per product | false | `REDUCE_QUANTITY` |
| 3007 | `CART_EMPTY` | 400 | Cart is empty | Add items to cart first | false | `ADD_ITEMS` |
| 3008 | `PRODUCT_INACTIVE` | 410 | Product is no longer active | Product unavailable | false | `REMOVE_FROM_CART` |
| 3009 | `MERCHANT_INACTIVE` | 410 | Merchant is inactive | Store is closed | false | `CLEAR_CART` |
| 3010 | `PRICE_CHANGED` | 409 | Product price has changed | Price updated since adding | false | `REFRESH_CART` |

---

## 🎁 OFFERS & DISCOUNTS (4000-4099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 4001 | `INVALID_COUPON` | 400 | Invalid or expired coupon | Coupon code invalid | false | `REMOVE_COUPON` |
| 4002 | `COUPON_EXPIRED` | 410 | Coupon has expired | This coupon has expired | false | `REMOVE_COUPON` |
| 4003 | `COUPON_USAGE_LIMIT_REACHED` | 403 | Coupon usage limit reached | Coupon already used | false | `REMOVE_COUPON` |
| 4004 | `MIN_ORDER_NOT_MET` | 400 | Minimum order value not met | Add ₹X more for coupon | false | `ADD_ITEMS` |
| 4005 | `COUPON_NOT_APPLICABLE` | 400 | Coupon not applicable | Can't use on these items | false | `REMOVE_COUPON` |
| 4006 | `OFFER_EXPIRED` | 410 | Offer has expired | This offer ended | false | `REFRESH_CART` |
| 4007 | `OFFER_NOT_STARTED` | 400 | Offer not yet started | Offer starts on [date] | false | `WAIT` |
| 4008 | `MAX_DISCOUNT_EXCEEDED` | 400 | Maximum discount exceeded | Max discount is ₹X | false | `AUTO_ADJUST` |

---

## 📦 ORDER ERRORS (5000-5099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 5001 | `CANNOT_CANCEL_ORDER` | 403 | Order cannot be cancelled | Can't cancel at this stage | false | `CONTACT_SUPPORT` |
| 5002 | `ORDER_NOT_FOUND` | 404 | Order not found | Order doesn't exist | false | `CHECK_ORDER_ID` |
| 5003 | `ORDER_ALREADY_CANCELLED` | 409 | Order already cancelled | Order was cancelled | false | null |
| 5004 | `ORDER_ALREADY_DELIVERED` | 409 | Order already delivered | Order completed | false | null |
| 5005 | `INVALID_ORDER_STATUS` | 400 | Invalid order status | Invalid status transition | false | `REFRESH` |
| 5006 | `DELIVERY_ADDRESS_REQUIRED` | 400 | Delivery address required | Please add delivery address | false | `ADD_ADDRESS` |
| 5007 | `PAYMENT_METHOD_REQUIRED` | 400 | Payment method required | Select payment method | false | `SELECT_PAYMENT` |
| 5008 | `ORDER_CREATION_FAILED` | 500 | Failed to create order | Order failed, try again | true | `RETRY` |
| 5009 | `CANNOT_RETURN_ORDER` | 403 | Order cannot be returned | Return period expired | false | `CONTACT_SUPPORT` |
| 5010 | `RETURN_WINDOW_CLOSED` | 410 | Return window closed | Can return within 7 days | false | null |

---

## 💳 PAYMENT ERRORS (6000-6099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 6001 | `PAYMENT_FAILED` | 402 | Payment processing failed | Payment failed | true | `RETRY_PAYMENT` |
| 6002 | `PAYMENT_GATEWAY_ERROR` | 502 | Payment gateway error | Payment service down | true | `RETRY_LATER` |
| 6003 | `INSUFFICIENT_FUNDS` | 402 | Insufficient funds | Not enough balance | false | `TRY_OTHER_METHOD` |
| 6004 | `CARD_DECLINED` | 402 | Card declined by bank | Card was declined | false | `TRY_OTHER_CARD` |
| 6005 | `INVALID_CARD_DETAILS` | 400 | Invalid card details | Check card information | false | `FIX_CARD_INFO` |
| 6006 | `PAYMENT_TIMEOUT` | 408 | Payment request timeout | Payment timed out | true | `RETRY` |
| 6007 | `REFUND_FAILED` | 500 | Refund processing failed | Refund failed | true | `CONTACT_SUPPORT` |
| 6008 | `REFUND_ALREADY_PROCESSED` | 409 | Refund already processed | Already refunded | false | null |
| 6009 | `PAYMENT_VERIFICATION_FAILED` | 403 | Payment signature verification failed | Payment verification error | false | `CONTACT_SUPPORT` |
| 6010 | `UPI_PAYMENT_FAILED` | 402 | UPI payment failed | UPI payment declined | true | `RETRY` |

---

## 💰 WALLET & COINS ERRORS (7000-7099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 7001 | `INSUFFICIENT_COINS` | 400 | Insufficient coin balance | Not enough coins | false | `REDUCE_COINS` |
| 7002 | `WALLET_NOT_FOUND` | 404 | Wallet not found | Wallet error | false | `CONTACT_SUPPORT` |
| 7003 | `WALLET_FROZEN` | 403 | Wallet is frozen | Account frozen | false | `CONTACT_SUPPORT` |
| 7004 | `INVALID_COIN_AMOUNT` | 400 | Invalid coin amount | Invalid coin value | false | `FIX_AMOUNT` |
| 7005 | `MAX_COIN_REDEMPTION_EXCEEDED` | 400 | Max coin redemption exceeded | Max 70% with coins | false | `REDUCE_COINS` |
| 7006 | `COINS_EXPIRED` | 410 | Coins have expired | These coins expired | false | `USE_OTHER_COINS` |
| 7007 | `WALLET_TRANSACTION_FAILED` | 500 | Wallet transaction failed | Transaction failed | true | `RETRY` |
| 7008 | `DUPLICATE_TRANSACTION` | 409 | Duplicate transaction | Already processed | false | `REFRESH` |

---

## 🏪 MERCHANT ERRORS (8000-8099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 8001 | `MERCHANT_NOT_FOUND` | 404 | Merchant not found | Store not found | false | null |
| 8002 | `MERCHANT_NOT_APPROVED` | 403 | Merchant pending approval | Store pending approval | false | `WAIT_APPROVAL` |
| 8003 | `MERCHANT_SUSPENDED` | 403 | Merchant account suspended | Store is suspended | false | `CONTACT_SUPPORT` |
| 8004 | `INVALID_BUSINESS_DETAILS` | 400 | Invalid business details | Check business information | false | `FIX_DETAILS` |
| 8005 | `DUPLICATE_GSTIN` | 409 | GSTIN already registered | GSTIN already in use | false | `CONTACT_SUPPORT` |
| 8006 | `INVALID_GSTIN_FORMAT` | 400 | Invalid GSTIN format | Check GSTIN format | false | `FIX_GSTIN` |
| 8007 | `MERCHANT_ONBOARDING_INCOMPLETE` | 400 | Onboarding incomplete | Complete registration first | false | `COMPLETE_ONBOARDING` |

---

## 🔐 PERMISSION ERRORS (9000-9099)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 9001 | `PERMISSION_DENIED` | 403 | Permission denied | You don't have access | false | null |
| 9002 | `ADMIN_ACCESS_REQUIRED` | 403 | Admin access required | Admin only feature | false | null |
| 9003 | `MERCHANT_ACCESS_REQUIRED` | 403 | Merchant access required | Merchant only feature | false | null |
| 9004 | `INVALID_ROLE` | 403 | Invalid role for this action | Not authorized | false | null |
| 9005 | `RESOURCE_NOT_OWNED` | 403 | Resource not owned by user | Not your resource | false | null |

---

## 🌐 GENERAL ERRORS (9900-9999)

| Code | Name | HTTP | Message | User Message | Retryable | Action |
|------|------|------|---------|--------------|-----------|--------|
| 9900 | `INTERNAL_SERVER_ERROR` | 500 | Internal server error | Something went wrong | true | `RETRY_LATER` |
| 9901 | `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable | Service down, try later | true | `RETRY_LATER` |
| 9902 | `VALIDATION_ERROR` | 400 | Validation failed | Check your input | false | `FIX_INPUT` |
| 9903 | `RESOURCE_NOT_FOUND` | 404 | Resource not found | Not found | false | null |
| 9904 | `METHOD_NOT_ALLOWED` | 405 | Method not allowed | Invalid request method | false | null |
| 9905 | `TOO_MANY_REQUESTS` | 429 | Too many requests | Slow down, try later | true | `WAIT_AND_RETRY` |
| 9906 | `REQUEST_TIMEOUT` | 408 | Request timeout | Request took too long | true | `RETRY` |
| 9907 | `PAYLOAD_TOO_LARGE` | 413 | Request payload too large | Data too large | false | `REDUCE_SIZE` |
| 9908 | `UNSUPPORTED_MEDIA_TYPE` | 415 | Unsupported media type | Invalid file type | false | `FIX_FORMAT` |
| 9909 | `DATABASE_ERROR` | 500 | Database operation failed | Database error | true | `RETRY_LATER` |
| 9910 | `EXTERNAL_API_ERROR` | 502 | External service error | Third-party service down | true | `RETRY_LATER` |

---

## 🔧 IMPLEMENTATION

### Error Class

```javascript
// src/utils/AppError.js
class AppError extends Error {
  constructor(code, message, userMessage = null, details = null) {
    super(message);
    this.code = code;
    this.userMessage = userMessage || message;
    this.details = details;

    // Get error config
    const config = ERROR_CODES[code];
    this.httpStatus = config?.httpStatus || 500;
    this.name = config?.name || 'UNKNOWN_ERROR';
    this.retryable = config?.retryable || false;
    this.action = config?.action || null;
  }

  toJSON() {
    return {
      success: false,
      error: {
        code: this.code,
        httpStatus: this.httpStatus,
        name: this.name,
        message: this.message,
        userMessage: this.userMessage,
        details: this.details,
        retryable: this.retryable,
        action: this.action,
        timestamp: new Date().toISOString()
      }
    };
  }
}

module.exports = AppError;
```

### Error Handler Middleware

```javascript
// src/middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  // Log error
  console.error('[ERROR]', {
    code: err.code,
    message: err.message,
    url: req.url,
    method: req.method,
    user: req.user?.id,
    stack: err.stack
  });

  // Send to monitoring (Sentry, etc.)
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(err);
  }

  // Send response
  if (err instanceof AppError) {
    return res.status(err.httpStatus).json(err.toJSON());
  }

  // Unknown error
  return res.status(500).json({
    success: false,
    error: {
      code: 9900,
      httpStatus: 500,
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
      userMessage: 'Something went wrong',
      retryable: true,
      timestamp: new Date().toISOString()
    }
  });
}

module.exports = errorHandler;
```

### Usage Example

```javascript
// In controller
const AppError = require('../utils/AppError');

async function verifyOTP(req, res, next) {
  try {
    const { phone, otp } = req.body;

    const storedOTP = await redis.get(`otp:${phone}`);

    if (!storedOTP) {
      throw new AppError(
        1014,
        'OTP has expired or not found',
        'OTP expired. Please request a new one.'
      );
    }

    const { otp: correctOTP, attempts } = JSON.parse(storedOTP);

    if (attempts >= 3) {
      throw new AppError(
        1015,
        'Maximum OTP attempts exceeded',
        'Too many incorrect attempts. Please request a new OTP.',
        { attemptsRemaining: 0 }
      );
    }

    if (otp !== correctOTP) {
      // Increment attempts
      await redis.setex(
        `otp:${phone}`,
        await redis.ttl(`otp:${phone}`),
        JSON.stringify({ otp: correctOTP, attempts: attempts + 1 })
      );

      throw new AppError(
        1003,
        'Invalid OTP provided',
        `Incorrect OTP. ${2 - attempts} attempts remaining.`,
        { attemptsRemaining: 2 - attempts }
      );
    }

    // OTP verified successfully
    // ... rest of logic
  } catch (error) {
    next(error);
  }
}
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Total Error Codes:** 100+
**All documentation complete!**
