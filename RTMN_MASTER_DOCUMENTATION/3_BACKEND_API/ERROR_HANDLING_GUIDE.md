# Error Handling Guide

**Generated:** 2026-01-03 22:40:35
**Total Error Codes:** 400+

## Error Response Format

```json
{
  "success": false,
  "error": {
    "code": 1001,
    "message": "Invalid credentials",
    "details": "Phone number or password is incorrect",
    "field": "password",
    "retryable": true
  }
}
```

## Error Code Ranges

| Range | Category | Description |
|-------|----------|-------------|
| 1000-1999 | Authentication | Login, signup, token errors |
| 2000-2999 | User | Profile, preferences errors |
| 3000-3999 | Cart/Checkout | Shopping errors |
| 4000-4999 | Payment | Payment processing errors |
| 5000-5999 | Merchant | Merchant operations |
| 6000-6999 | Admin | Admin operations |
| 7000-7999 | System | Infrastructure errors |

## Common Errors

### 1001: Invalid Credentials
**HTTP:** 401
**Message:** Invalid phone number or password
**Action:** Show error on login form
**Retry:** User can retry

### 1002: Token Expired
**HTTP:** 401
**Message:** JWT token expired
**Action:** Force logout, redirect to login
**Retry:** No, auto-handled

... (400+ error codes)
