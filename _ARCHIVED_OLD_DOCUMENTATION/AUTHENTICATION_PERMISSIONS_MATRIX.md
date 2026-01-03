# Authentication & Permissions Matrix

**Generated:** 2026-01-03 22:40:35

## Role Hierarchy

| Role | Level | Inherits From | Description |
|------|-------|---------------|-------------|
| Guest | 0 | None | Unauthenticated user |
| Customer | 10 | Guest | Regular registered user |
| Prive Member | 20 | Customer | Premium tier user |
| Merchant Staff | 30 | None | POS operator, cashier |
| Merchant Manager | 40 | Merchant Staff | Store manager |
| Merchant Owner | 50 | Merchant Manager | Store owner |
| HQ Support | 60 | None | Customer support agent |
| HQ Operator | 70 | HQ Support | Operations team |
| HQ Admin | 80 | HQ Operator | Admin with elevated access |
| HQ Super Admin | 100 | HQ Admin | Full platform access |

## Permission Matrix

### Customer App Endpoints

| Endpoint | Guest | Customer | Prive | Notes |
|----------|-------|----------|-------|-------|
| GET /products | ✅ | ✅ | ✅ | Public access |
| GET /user/profile | ❌ | ✅ | ✅ | Own profile only |
| POST /cart/add | ❌ | ✅ | ✅ | Auth required |
| POST /checkout | ❌ | ✅ | ✅ | Auth required |
| GET /prive/* | ❌ | ❌ | ✅ | Prive only |
| POST /orders/{id}/cancel | ❌ | ✅ | ✅ | Own orders only |

### Merchant App Endpoints

| Endpoint | Staff | Manager | Owner | Notes |
|----------|-------|---------|-------|-------|
| POST /merchant/pos | ✅ | ✅ | ✅ | All can bill |
| GET /merchant/dashboard | ✅ | ✅ | ✅ | View only for staff |
| GET /merchant/financials | ❌ | ❌ | ✅ | Owner only |
| POST /merchant/products | ❌ | ✅ | ✅ | Manager+ |
| POST /merchant/staff | ❌ | ❌ | ✅ | Owner only |

### Admin Endpoints

| Endpoint | Support | Operator | Admin | Super | Notes |
|----------|---------|----------|-------|-------|-------|
| GET /admin/dashboard | ✅ | ✅ | ✅ | ✅ | All can view |
| GET /admin/users | ❌ | ✅ | ✅ | ✅ | Operator+ |
| POST /admin/merchants/approve | ❌ | ❌ | ✅ | ✅ | Admin+ |
| DELETE /admin/users/{id} | ❌ | ❌ | ❌ | ✅ | Super only |
| GET /admin/system-config | ❌ | ❌ | ❌ | ✅ | Super only |

## JWT Token Structure

```json
{
  "userId": "uuid",
  "role": "customer",
  "level": 10,
  "permissions": ["cart.write", "order.write"],
  "tier": "prive",
  "exp": 1234567890
}
```
