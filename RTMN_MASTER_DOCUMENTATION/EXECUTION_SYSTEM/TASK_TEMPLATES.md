# TASK TEMPLATES - NO-THINKING DEVELOPER CHECKLISTS

**PURPOSE**: Every developer follows the SAME checklist for every task type. No decisions. Just execute.

**RULE**: If a step doesn't exist → stop and ask. Don't guess.

---

## TASK TYPE 1: Add New Wallet Transaction Type

**Example**: Add "credit_birthday_reward" transaction type

### Checklist

```
[ ] 1. UPDATE SCHEMA
    File: /schemas/wallet.schema.ts
    Action: Add new value to transaction_type enum
    Example: 'credit_birthday_reward'

[ ] 2. UPDATE ERROR CODES (if needed)
    File: /ERROR_CODES.ts
    Action: Add error code if new failure mode exists
    Example: WALLET_BIRTHDAY_REWARD_ALREADY_CLAIMED

[ ] 3. UPDATE DOMAIN MODEL
    Command: npm run generate:models
    Action: Re-generate ORM models from schema
    Verify: Check models/WalletTransaction.ts has new type

[ ] 4. UPDATE OPENAPI CONTRACT
    File: /contracts/wallet.openapi.yaml
    Action: Add new transaction type to enum
    Path: /wallet/credit endpoint

[ ] 5. UPDATE SDK
    File: /sdks/wallet-sdk/src/types.ts
    Action: Add new type to TransactionType enum
    File: /sdks/wallet-sdk/src/WalletSDK.ts
    Action: Add helper method: creditBirthdayReward(userId, amount)

[ ] 6. UPDATE VIEW MODEL
    File: /view-models/WalletViewModel.ts
    Action: Add display name and icon for new type
    Example: {
      type: 'credit_birthday_reward',
      displayName: 'Birthday Reward',
      icon: 'gift',
      color: 'purple'
    }

[ ] 7. UPDATE BUSINESS RULES
    File: /rules/wallet-rules.ts
    Action: Add validation rule if needed
    Example: User can only claim birthday reward once per year

[ ] 8. WRITE ARCHITECTURE TEST
    File: /tests/architecture/wallet.test.ts
    Action: Add test that enforces new rule
    Example: test('birthday reward can only be claimed once per year')

[ ] 9. UPDATE MIGRATION
    Command: npm run migration:generate -- add-birthday-reward-type
    Action: Create migration that adds enum value

[ ] 10. TEST LOCALLY
    Command: npm run test:architecture
    Verify: All tests pass
    Command: npm run test:wallet
    Verify: Unit tests pass

[ ] 11. UPDATE DOCUMENTATION
    File: SKIP (auto-generated from schema)

[ ] 12. CREATE PR
    Title: "feat(wallet): add birthday reward transaction type"
    Description: Follow PR template
    Link to: Schema change, OpenAPI change, tests
```

**Expected Time**: 30 minutes
**Files Changed**: 6
**Lines of Code**: ~50

---

## TASK TYPE 2: Add New API Endpoint

**Example**: Add GET /api/orders/{id}/timeline

### Checklist

```
[ ] 1. CHECK SCHEMA EXISTS
    File: /schemas/order.schema.ts
    Verify: Data needed for endpoint exists in schema
    If not: STOP. Update schema first (use Task Type 1)

[ ] 2. DEFINE OPENAPI CONTRACT
    File: /contracts/order.openapi.yaml
    Action: Add new endpoint specification
    ```yaml
    /orders/{id}/timeline:
      get:
        summary: Get order status timeline
        parameters:
          - name: id
            in: path
            required: true
            schema:
              type: string
              format: uuid
        responses:
          200:
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/OrderTimeline'
          404:
            $ref: '#/components/responses/NotFound'
    ```

[ ] 3. DEFINE RESPONSE SCHEMA
    File: Same as above
    Action: Add OrderTimeline schema
    ```yaml
    OrderTimeline:
      type: object
      properties:
        order_id:
          type: string
          format: uuid
        events:
          type: array
          items:
            $ref: '#/components/schemas/TimelineEvent'
    ```

[ ] 4. GENERATE SDK CLIENT
    Command: npm run generate:sdk -- order
    Verify: SDK method exists: orderSDK.getTimeline(orderId)

[ ] 5. IMPLEMENT CONTROLLER
    File: /controllers/order.controller.ts
    Action: Add getTimeline method
    ```typescript
    export async function getTimeline(req, res, next) {
      try {
        const { id } = req.params;
        const timeline = await OrderService.getTimeline(id);
        res.json({ data: timeline });
      } catch (error) {
        next(error);
      }
    }
    ```

[ ] 6. IMPLEMENT SERVICE
    File: /services/order.service.ts
    Action: Add getTimeline method
    ```typescript
    async getTimeline(orderId: string): Promise<OrderTimeline> {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new ApplicationError(ErrorCode.ORDER_NOT_FOUND);
      }

      const history = await OrderStatusHistory.findAll({
        where: { order_id: orderId },
        order: [['changed_at', 'ASC']]
      });

      return {
        order_id: orderId,
        events: history.map(h => ({
          from_status: h.from_status,
          to_status: h.to_status,
          changed_at: h.changed_at,
          changed_by: h.changed_by
        }))
      };
    }
    ```

[ ] 7. ADD ROUTE
    File: /routes/order.routes.ts
    Action: Add route
    ```typescript
    router.get(
      '/:id/timeline',
      validateSDK,
      authenticate,
      orderController.getTimeline
    );
    ```

[ ] 8. CREATE VIEW MODEL
    File: /view-models/OrderTimelineViewModel.ts
    Action: Map backend data to UI-ready format
    ```typescript
    export function toOrderTimelineViewModel(timeline) {
      return {
        orderId: timeline.order_id,
        steps: timeline.events.map(e => ({
          status: e.to_status,
          displayName: ORDER_STATUS_DISPLAY[e.to_status],
          icon: ORDER_STATUS_ICON[e.to_status],
          timestamp: e.changed_at,
          isCompleted: true
        })),
        currentStep: timeline.events.length - 1
      };
    }
    ```

[ ] 9. WRITE TESTS
    File: /tests/api/order.test.ts
    Action: Add endpoint tests
    ```typescript
    describe('GET /orders/:id/timeline', () => {
      test('returns timeline for valid order', async () => {
        const order = await createTestOrder();
        const response = await request(app)
          .get(`/api/orders/${order.id}/timeline`)
          .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.data.events).toHaveLength(3);
      });

      test('returns 404 for non-existent order', async () => {
        const response = await request(app)
          .get('/api/orders/invalid-id/timeline')
          .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(404);
      });
    });
    ```

[ ] 10. RUN ARCHITECTURE TESTS
    Command: npm run test:architecture
    Verify: SDK enforcement test passes
    Verify: OpenAPI contract test passes

[ ] 11. TEST WITH SDK
    File: /tests/sdk/order-sdk.test.ts
    Action: Test SDK method
    ```typescript
    test('SDK getTimeline method works', async () => {
      const timeline = await orderSDK.getTimeline(
        testOrderId,
        accessToken
      );
      expect(timeline.events).toBeDefined();
    });
    ```

[ ] 12. UPDATE POSTMAN COLLECTION
    Command: npm run generate:postman
    Verify: New endpoint appears in collection

[ ] 13. CREATE PR
    Title: "feat(order): add timeline endpoint"
    Files changed: 7
    Tests added: 5
```

**Expected Time**: 45 minutes
**Files Changed**: 7
**Lines of Code**: ~100

---

## TASK TYPE 3: Add New Frontend Screen

**Example**: Add "Order Timeline" screen

### Checklist

```
[ ] 1. VERIFY API EXISTS
    File: /contracts/order.openapi.yaml
    Verify: Endpoint GET /orders/{id}/timeline exists
    If not: STOP. Create API first (use Task Type 2)

[ ] 2. VERIFY VIEW MODEL EXISTS
    File: /view-models/OrderTimelineViewModel.ts
    Verify: ViewModel definition exists
    If not: STOP. Create ViewModel (use Task Type 2, step 8)

[ ] 3. CHOOSE TEMPLATE
    File: /templates/DetailScreen.tsx
    Reason: Showing details of a single order
    Alternative: If list of items → use ListScreen.tsx

[ ] 4. CREATE SCREEN FILE
    File: /pages/orders/OrderTimeline.tsx
    Action: Copy template and modify
    ```typescript
    import { DetailScreen } from '@/templates/DetailScreen';
    import { OrderTimelineHeader } from '@/components/orders';
    import { OrderTimelineBody } from '@/components/orders';

    export const OrderTimelineScreen = () => (
      <DetailScreen
        endpoint={(id) => `/api/orders/${id}/timeline`}
        headerComponent={OrderTimelineHeader}
        bodyComponent={OrderTimelineBody}
      />
    );
    ```

[ ] 5. CREATE HEADER COMPONENT
    File: /components/orders/OrderTimelineHeader.tsx
    Action: Create component
    ```typescript
    export const OrderTimelineHeader = ({ data }) => (
      <div className="bg-white p-6">
        <h1 className="text-2xl font-bold">Order #{data.orderId.slice(0, 8)}</h1>
        <p className="text-gray-600">Track your order status</p>
      </div>
    );
    ```

[ ] 6. CREATE BODY COMPONENT
    File: /components/orders/OrderTimelineBody.tsx
    Action: Create component
    ```typescript
    export const OrderTimelineBody = ({ data }) => {
      const viewModel = toOrderTimelineViewModel(data);

      return (
        <div className="max-w-2xl mx-auto p-6">
          {viewModel.steps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              isActive={index === viewModel.currentStep}
              isCompleted={step.isCompleted}
            />
          ))}
        </div>
      );
    };
    ```

[ ] 7. ADD ROUTE
    File: /routes/index.tsx
    Action: Add route
    ```typescript
    import { OrderTimelineScreen } from '@/pages/orders/OrderTimeline';

    {
      path: '/orders/:id/timeline',
      component: OrderTimelineScreen,
      auth: true
    }
    ```

[ ] 8. ADD NAVIGATION
    File: /pages/orders/OrderDetail.tsx
    Action: Add button
    ```typescript
    <Button onClick={() => navigate(`/orders/${orderId}/timeline`)}>
      View Timeline
    </Button>
    ```

[ ] 9. VERIFY SDK USAGE
    Check: Component uses SDK hook (NOT direct fetch)
    File: DetailScreen template already uses useAPI hook
    Verify: useAPI hook calls SDK internally

[ ] 10. TEST LOCALLY
    Action: Open http://localhost:3000/orders/{test-order-id}/timeline
    Verify: Screen renders
    Verify: Data loads
    Verify: Loading state shows
    Verify: Error state works (try invalid ID)

[ ] 11. TEST ERROR STATES
    Action: Disconnect internet
    Verify: Error message shows
    Verify: Retry button appears
    Verify: Retry works

[ ] 12. CREATE PR
    Title: "feat(ui): add order timeline screen"
    Files changed: 4
    Screenshots: Include 3 (normal, loading, error)
```

**Expected Time**: 20 minutes
**Files Changed**: 4
**Lines of Code**: ~60

---

## TASK TYPE 4: Fix a Bug

**Example**: Wallet balance showing incorrect amount

### Checklist

```
[ ] 1. REPRODUCE BUG
    Action: Write failing test FIRST
    File: /tests/wallet/balance.test.ts
    ```typescript
    test('balance calculation includes all coin types', async () => {
      // Setup
      await createTestTransaction({ type: 'credit', coin_type: 'promo_coins', amount: 100 });
      await createTestTransaction({ type: 'credit', coin_type: 'rez_coins', amount: 200 });

      // Act
      const balance = await walletSDK.getBalance(userId);

      // Assert
      expect(balance.total).toBe(300); // Currently failing
    });
    ```

[ ] 2. VERIFY SCHEMA
    File: /schemas/wallet.schema.ts
    Check: Is balance calculation correct in schema?
    Check: Are all coin types included?

[ ] 3. CHECK COMPUTED VIEW
    File: /schemas/wallet.schema.ts → computed_views.wallet_balance
    Action: Verify SQL query is correct
    Bug found: Missing branded_coins in SUM

[ ] 4. FIX SCHEMA
    File: /schemas/wallet.schema.ts
    Action: Update computed view query
    ```sql
    SUM(CASE
      WHEN transaction_type LIKE 'credit_%' THEN amount
      WHEN transaction_type LIKE 'debit_%' THEN -amount
      ELSE 0
    END) as balance
    ```
    Change to include all types explicitly

[ ] 5. UPDATE MIGRATION
    Command: npm run migration:generate -- fix-balance-calculation
    Action: Migration updates view definition

[ ] 6. RUN MIGRATION
    Command: npm run migration:run
    Verify: View updated in database

[ ] 7. VERIFY FIX
    Command: npm test -- balance.test.ts
    Verify: Test now passes

[ ] 8. ADD REGRESSION TEST
    File: /tests/architecture/wallet.test.ts
    Action: Add test that prevents this bug in future
    ```typescript
    test('balance view includes all coin types', async () => {
      const viewDefinition = await getViewSQL('wallet_balance');
      expect(viewDefinition).toContain('promo_coins');
      expect(viewDefinition).toContain('branded_coins');
      expect(viewDefinition).toContain('rez_coins');
      expect(viewDefinition).toContain('cash');
    });
    ```

[ ] 9. RUN ALL TESTS
    Command: npm run test:all
    Verify: All tests pass

[ ] 10. CREATE PR
    Title: "fix(wallet): include all coin types in balance calculation"
    Description:
      - Bug: Balance was missing branded_coins
      - Fix: Updated computed view to include all types
      - Test: Added regression test
    Link to: Original bug report issue
```

**Expected Time**: 30 minutes
**Files Changed**: 3
**Tests Added**: 2

---

## TASK TYPE 5: Add New Business Rule

**Example**: Users in "Gold" tier get 2x coins on weekends

### Checklist

```
[ ] 1. UPDATE RULE SPEC
    File: /rules/coin-earning-rules.ts
    Action: Add new rule
    ```typescript
    export const WEEKEND_MULTIPLIER_RULE = {
      id: 'weekend_gold_multiplier',
      version: '1.0',
      active: true,
      conditions: {
        user_tier: ['gold', 'prive'],
        day_of_week: ['saturday', 'sunday']
      },
      action: {
        type: 'multiply_coins',
        factor: 2
      },
      priority: 10
    };
    ```

[ ] 2. UPDATE RULE ENGINE
    File: /services/rule-engine.service.ts
    Action: Add rule to evaluation
    (Usually auto-loaded from rules/ folder)

[ ] 3. UPDATE SCHEMA (if needed)
    File: Check if new fields needed in transactions
    Example: Add metadata.rule_applied field

[ ] 4. UPDATE SDK
    File: /sdks/rules-sdk/src/RulesSDK.ts
    Action: Add method to check eligibility
    ```typescript
    async isWeekendMultiplierEligible(userId: string): Promise<boolean> {
      return this.validateRule('weekend_gold_multiplier', {
        user_id: userId,
        timestamp: new Date()
      });
    }
    ```

[ ] 5. WRITE ARCHITECTURE TEST
    File: /tests/architecture/rules.test.ts
    Action: Test rule enforcement
    ```typescript
    test('weekend multiplier only applies to gold/prive on weekends', async () => {
      // Test 1: Gold user on Saturday → 2x coins
      const result1 = await earnCoins({
        user: { tier: 'gold' },
        amount: 100,
        date: new Date('2026-01-04') // Saturday
      });
      expect(result1.coins_earned).toBe(200);

      // Test 2: Gold user on Monday → 1x coins
      const result2 = await earnCoins({
        user: { tier: 'gold' },
        amount: 100,
        date: new Date('2026-01-06') // Monday
      });
      expect(result2.coins_earned).toBe(100);

      // Test 3: Basic user on Saturday → 1x coins
      const result3 = await earnCoins({
        user: { tier: 'basic' },
        amount: 100,
        date: new Date('2026-01-04') // Saturday
      });
      expect(result3.coins_earned).toBe(100);
    });
    ```

[ ] 6. UPDATE VIEW MODEL
    File: /view-models/WalletViewModel.ts
    Action: Show multiplier indicator
    ```typescript
    {
      isWeekendMultiplierActive: user.tier in ['gold', 'prive'] && isWeekend,
      multiplierBadge: isWeekendMultiplierActive ? '2x' : null
    }
    ```

[ ] 7. UPDATE FRONTEND
    File: /components/wallet/EarningBadge.tsx
    Action: Show 2x badge when applicable
    (Uses ViewModel, no logic needed)

[ ] 8. RUN TESTS
    Command: npm run test:rules
    Verify: All rule tests pass

[ ] 9. CREATE PR
    Title: "feat(rules): add weekend 2x multiplier for gold tier"
    Description: Rule spec, tests, frontend indicator
```

**Expected Time**: 40 minutes
**Files Changed**: 5
**Tests Added**: 3

---

## GENERAL RULES FOR ALL TASKS

### Before Starting ANY Task:

1. **Read the schema** - If data doesn't exist in schema, task is invalid
2. **Check OpenAPI** - If endpoint doesn't exist, create it first
3. **Verify SDK** - Frontend MUST use SDK, never direct API calls
4. **Check ViewModel** - Backend data MUST be mapped to UI-ready format

### During Task:

1. **Follow checklist exactly** - Don't skip steps
2. **Write tests first** - Failing test → Fix → Passing test
3. **Use templates** - Don't write code from scratch
4. **No business logic in frontend** - All logic in backend/rules

### After Task:

1. **Run architecture tests** - MUST pass before PR
2. **Run all tests** - Unit + Integration + Architecture
3. **Update Postman** - If API changed
4. **Create PR** - Follow template

### If Stuck:

1. **Stop** - Don't guess
2. **Check schema** - Is source of truth missing?
3. **Check OpenAPI** - Is contract defined?
4. **Ask** - Don't waste time debugging, ask team

---

## ESTIMATED TIMES

| Task Type | Time | Complexity |
|-----------|------|------------|
| Add transaction type | 30 min | Low |
| Add API endpoint | 45 min | Medium |
| Add frontend screen | 20 min | Low |
| Fix bug | 30 min | Varies |
| Add business rule | 40 min | Medium |
| Add new domain | 2-3 hours | High |

**If task takes longer than 2x estimate → something is wrong, ask for help**

---

## SUCCESS CRITERIA

Task is complete ONLY when:

- [ ] All checklist items checked
- [ ] All tests pass (unit + integration + architecture)
- [ ] PR created with correct title and description
- [ ] No lint errors
- [ ] No TypeScript errors
- [ ] Postman collection updated (if API changed)

**If ANY criterion fails → task is NOT complete**
