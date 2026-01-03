# DEVELOPER ONBOARDING - ONE PAGE ONLY

**READ THIS. FOLLOW THIS. ASK IF CONFUSED.**

---

## THE ONLY RULE

```
DATABASE → DOMAIN MODEL → API CONTRACT → SDK → FRONTEND

Never reverse. Never skip.
```

If you violate this → your code will be rejected.

---

## HOW TO BUILD ANY FEATURE (6 STEPS)

### 1. READ THE SCHEMA

**File**: `/schemas/{domain}.schema.ts`

**Question**: Does the data I need exist?

- ✅ Yes → Continue to step 2
- ❌ No → STOP. Update schema first

**Example**:
```typescript
// schemas/user.schema.ts
loyalty_tier: {
  type: 'enum',
  allowed_values: ['basic', 'silver', 'gold', 'prive']
}
```

If field doesn't exist → it doesn't exist. Don't create it in your code.

---

### 2. READ THE STATE MACHINE

**File**: `/schemas/{domain}.schema.ts` → `state_machine`

**Question**: What states/transitions are allowed?

**Example**:
```typescript
// Order state machine
transitions: {
  paid: ['confirmed', 'refund_requested'],  // ✅ Allowed
  paid: ['delivered']  // ❌ NOT allowed - must go through confirmed
}
```

If transition doesn't exist → you can't do it. Don't try.

---

### 3. FOLLOW THE OPENAPI CONTRACT

**File**: `/contracts/{service}.openapi.yaml`

**Question**: Is the endpoint defined?

- ✅ Yes → Use it exactly as specified
- ❌ No → Create OpenAPI spec first

**Example**:
```yaml
/orders/{id}:
  get:
    responses:
      200:
        schema:
          $ref: '#/components/schemas/Order'
```

Response format is LAW. Don't add extra fields. Don't change structure.

---

### 4. USE THE SDK (MANDATORY)

**File**: `/sdks/{service}-sdk/`

**Rule**: Frontend NEVER calls API directly.

**Example**:
```typescript
// ✅ CORRECT
const order = await orderSDK.getOrder(orderId, accessToken);

// ❌ WRONG - API call without SDK
const response = await fetch('/api/orders/' + orderId);
```

If SDK method doesn't exist → generate it from OpenAPI.

---

### 5. RENDER THE VIEWMODEL

**File**: `/view-models/{Feature}ViewModel.ts`

**Rule**: Frontend receives UI-READY data. No calculations. No logic.

**Example**:
```typescript
// ✅ CORRECT - ViewModel has computed values
{
  canCheckout: false,
  disabledReason: "RULE_MAX_REDEMPTION_REACHED",
  buttonText: "Maximum limit reached"
}

// ❌ WRONG - Frontend computes business logic
if (user.ordersThisMonth >= 10) {
  canCheckout = false;  // NO! Backend decides this
}
```

---

### 6. WRITE NO BUSINESS LOGIC IN FRONTEND

**Rule**: Frontend is a RENDERER. Not a calculator.

**What frontend CAN do**:
- Display data
- Handle clicks
- Show loading/error states
- Navigate

**What frontend CANNOT do**:
- Calculate coins
- Validate business rules
- Decide eligibility
- Mutate wallet

---

## TASK WORKFLOW

Every task follows this:

```
1. Pick task from board
2. Find task template in /TASK_TEMPLATES.md
3. Follow checklist exactly
4. Run tests
5. Create PR
6. Done
```

**If confused at any step → STOP and ASK**

---

## COMMON MISTAKES (DON'T DO THESE)

### ❌ Mistake 1: Skip the schema
```typescript
// WRONG
const user = {
  id: '123',
  customField: 'value'  // ← Not in schema = doesn't exist
};
```

### ❌ Mistake 2: Direct API calls
```typescript
// WRONG
fetch('/api/wallet/balance')  // ← Must use SDK
```

### ❌ Mistake 3: Business logic in frontend
```typescript
// WRONG
if (wallet.balance >= order.total) {  // ← Backend decides this
  enableCheckout();
}
```

### ❌ Mistake 4: Free-text errors
```typescript
// WRONG
throw new Error('Not enough coins');  // ← Use ErrorCode enum

// CORRECT
throw new ApplicationError(ErrorCode.WALLET_INSUFFICIENT_FUNDS);
```

### ❌ Mistake 5: Skip state machine
```typescript
// WRONG
order.status = 'delivered';  // ← Can't jump from 'paid' to 'delivered'

// CORRECT
await orderSDK.updateStatus(orderId, 'confirmed');  // Follow transitions
await orderSDK.updateStatus(orderId, 'preparing');
await orderSDK.updateStatus(orderId, 'delivered');
```

---

## TESTING REQUIREMENTS

Before creating PR, run:

```bash
# 1. Unit tests
npm test

# 2. Architecture tests (MOST IMPORTANT)
npm run test:architecture

# 3. Lint
npm run lint

# 4. Type check
npm run type-check
```

**If ANY test fails → PR will be rejected**

---

## ARCHITECTURE TESTS = ENFORCEMENT

These tests PREVENT you from violating rules:

```typescript
// Test 1: SDK enforcement
test('API rejects direct calls without SDK headers', async () => {
  const response = await fetch('/api/wallet/balance');
  expect(response.status).toBe(403);  // SDK_REQUIRED
});

// Test 2: State machine
test('Order cannot jump from paid to delivered', async () => {
  await expect(
    orderSDK.updateStatus(orderId, 'delivered')
  ).rejects.toThrow('ORDER_INVALID_TRANSITION');
});

// Test 3: Coin priority
test('Coins are used in mandatory order', async () => {
  const result = await walletSDK.debit({ amount: 100 });
  expect(result.breakdown.promo_coins_used).toBeGreaterThan(0);
  // Promo coins must be used first
});
```

If architecture test fails → you broke a rule.

---

## FILES YOU'LL WORK WITH

### Always Read:
- `/schemas/*.schema.ts` - Source of truth
- `/contracts/*.openapi.yaml` - API contracts
- `/ERROR_CODES.ts` - Error definitions
- `/TASK_TEMPLATES.md` - Task checklists

### Sometimes Edit:
- `/sdks/*` - When adding new SDK methods
- `/view-models/*` - When creating new screens
- `/rules/*` - When adding business rules
- `/tests/architecture/*` - When adding new rules to enforce

### Never Edit Directly:
- `/models/*` - Auto-generated from schema
- `/migrations/*` - Use migration generator
- `/docs/*` - Auto-generated from OpenAPI

---

## WHEN TO ASK FOR HELP

### ASK if:
- Schema doesn't have field you need
- OpenAPI doesn't define endpoint you need
- State transition you need isn't allowed
- Task template doesn't exist for your task
- Tests fail and you don't know why
- Task takes > 2x estimated time

### DON'T ASK if:
- You didn't read the schema
- You didn't read the task template
- You didn't run tests
- You didn't follow the checklist

**Read first. Try first. Then ask.**

---

## PRODUCTIVITY METRICS

Your velocity is measured by:

1. **Tasks completed per week** (target: 10-15)
2. **PR cycle time** (target: < 2 hours from creation to merge)
3. **Test pass rate** (target: 100% - all tests pass first time)
4. **Architecture test failures** (target: 0 - never break rules)

**If you're slow → you're not following the system**

---

## THE SYSTEM MAKES YOU FAST

```
Schema + OpenAPI + SDK + Templates = No Thinking Required

No Thinking = No Bugs = Fast Delivery
```

Follow the system → ship fast → go home early.

---

## FINAL CHECKLIST (PRINT THIS)

Every day, every task:

- [ ] I read the schema
- [ ] I checked the state machine
- [ ] I followed the OpenAPI contract
- [ ] I used the SDK (no direct API calls)
- [ ] I rendered ViewModels (no business logic in frontend)
- [ ] I wrote no calculations in frontend
- [ ] I used ErrorCode enums (no free-text errors)
- [ ] I followed the task template checklist
- [ ] I ran all tests (unit + architecture + lint)
- [ ] All tests passed
- [ ] I created PR with correct title/description

**If all boxes checked → you're shipping production-ready code**

---

## ONE MORE THING

This system exists because:

- We have 100+ apps to build
- We have limited time
- We can't afford bugs
- We can't afford rewrites

**The system makes you faster. Trust it. Follow it. Ship.**

Welcome to the team. 🚀
