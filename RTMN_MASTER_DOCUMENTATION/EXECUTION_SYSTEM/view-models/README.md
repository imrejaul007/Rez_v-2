# VIEW MODELS - THE UI CONTRACT LAYER

**Frontend is a pure renderer. ViewModels make this possible.**

---

## 🎯 THE RULE

```
Backend returns RAW DATA → ViewModel transforms → Frontend renders

Frontend NEVER transforms data.
Frontend NEVER adds business logic.
Frontend ONLY consumes ViewModels.
```

**If you need to add `if/else` in frontend → ViewModel is missing logic.**

---

## 🔒 WHAT IS A VIEWMODEL?

A ViewModel is a **UI-ready data object** that:

1. ✅ Contains ALL data needed to render a screen
2. ✅ Pre-computed values (no calculations in frontend)
3. ✅ Pre-formatted strings (no string manipulation in frontend)
4. ✅ Pre-sorted/filtered arrays (no array operations in frontend)
5. ✅ Display-ready booleans (show/hide logic already resolved)
6. ✅ Localized text (translations already applied)

**ViewModels are the contract between backend and frontend.**

---

## 📂 VIEWMODEL DIRECTORY

```
/EXECUTION_SYSTEM/view-models/
├── README.md (this file)
├── WalletViewModel.ts ⭐ FROZEN
├── OrderViewModel.ts ⭐ FROZEN
├── CheckoutViewModel.ts ⭐ FROZEN
├── MerchantViewModel.ts ⭐ FROZEN
└── CampaignViewModel.ts ⭐ FROZEN
```

**Status Legend:**
- ⭐ FROZEN = Production-ready, changes require approval
- 🚧 DRAFT = Still being designed

---

## 🏗️ ARCHITECTURE

### Data Flow:

```
1. Database (Raw Schema)
   ↓
2. Service Layer (Business Logic)
   ↓
3. API Response (Schema-compliant JSON)
   ↓
4. SDK Method Call
   ↓
5. ✨ ViewModel Transform ✨ ← HAPPENS HERE
   ↓
6. Frontend Component (Pure Render)
```

### Example:

```typescript
// ❌ WRONG - Frontend does transformation
function WalletCard({ user }: { user: User }) {
  // Business logic in frontend!
  const totalCoins = user.promo_coins + user.branded_coins + user.rez_coins;
  const canCheckout = totalCoins >= 100;
  const displayBalance = `₹${totalCoins.toFixed(2)}`;

  return <Card>{displayBalance}</Card>;
}

// ✅ CORRECT - ViewModel does transformation
function WalletCard({ wallet }: { wallet: WalletViewModel }) {
  // Pure rendering only
  return <Card>{wallet.displayBalance}</Card>;
}
```

---

## 📋 VIEWMODEL CONTRACT

Every ViewModel MUST include:

### ✅ Required Properties:

```typescript
interface BaseViewModel {
  // 1. Display-ready strings
  displayTitle: string;
  displaySubtitle?: string;
  displayAmount?: string; // Pre-formatted with currency

  // 2. UI state booleans
  canEdit: boolean;
  canDelete: boolean;
  isLoading: boolean;
  isError: boolean;

  // 3. Pre-computed values
  // (Any calculation frontend would need)

  // 4. Localized text
  // (Already translated, no i18n calls in frontend)

  // 5. Conditional visibility
  showBadge: boolean;
  showWarning: boolean;

  // 6. Arrays (pre-sorted, pre-filtered)
  items: ItemViewModel[]; // Already sorted by priority

  // 7. Source data (raw, for debugging)
  _raw?: any; // Optional, for dev tools
}
```

---

## 🧪 VIEWMODEL EXAMPLES

### Example 1: WalletViewModel

**Raw Schema Data:**
```typescript
// From database
{
  id: 'user_123',
  promo_coins: 200,
  branded_coins: 150,
  rez_coins: 100,
  cash: 50,
  loyalty_tier: 'gold'
}
```

**ViewModel Transform:**
```typescript
export interface WalletViewModel {
  // Display-ready
  displayBalance: string;        // "₹500.00"
  displayPromoBalance: string;   // "200 Promo Coins"
  displayCashBalance: string;    // "₹50.00 Cash"

  // Pre-computed
  totalCoins: number;            // 450 (promo + branded + rez)
  totalValue: number;            // 500 (including cash)

  // UI state
  canCheckout: boolean;          // true (has balance)
  showLowBalanceWarning: boolean; // false

  // Breakdown (pre-sorted by priority)
  coinBreakdown: Array<{
    type: 'promo' | 'branded' | 'rez' | 'cash';
    amount: number;
    displayAmount: string;
    displayLabel: string;
    priority: number;
  }>;

  // Tier info (pre-computed)
  tierBadge: {
    label: string;              // "Gold Member"
    color: string;              // "#FFD700"
    icon: string;               // "crown"
  };

  // Source
  _raw: User;
}
```

**Transform Function:**
```typescript
export function toWalletViewModel(user: User): WalletViewModel {
  const totalCoins = user.promo_coins + user.branded_coins + user.rez_coins;
  const totalValue = totalCoins + user.cash;

  return {
    displayBalance: formatCurrency(totalValue),
    displayPromoBalance: `${user.promo_coins} Promo Coins`,
    displayCashBalance: formatCurrency(user.cash),

    totalCoins,
    totalValue,

    canCheckout: totalValue >= 100,
    showLowBalanceWarning: totalValue < 50,

    coinBreakdown: [
      {
        type: 'promo',
        amount: user.promo_coins,
        displayAmount: `${user.promo_coins}`,
        displayLabel: 'Promo Coins',
        priority: 1
      },
      {
        type: 'branded',
        amount: user.branded_coins,
        displayAmount: `${user.branded_coins}`,
        displayLabel: 'Branded Coins',
        priority: 2
      },
      {
        type: 'rez',
        amount: user.rez_coins,
        displayAmount: `${user.rez_coins}`,
        displayLabel: 'ReZ Coins',
        priority: 3
      },
      {
        type: 'cash',
        amount: user.cash,
        displayAmount: formatCurrency(user.cash),
        displayLabel: 'Cash',
        priority: 4
      }
    ].filter(item => item.amount > 0), // Pre-filtered

    tierBadge: getTierBadge(user.loyalty_tier),

    _raw: user
  };
}
```

**Frontend Usage (Pure Render):**
```tsx
function WalletCard({ wallet }: { wallet: WalletViewModel }) {
  return (
    <Card>
      <h2>{wallet.displayBalance}</h2>
      <Badge color={wallet.tierBadge.color}>
        {wallet.tierBadge.label}
      </Badge>

      {wallet.showLowBalanceWarning && (
        <Alert>Low balance. Add money to continue.</Alert>
      )}

      <ul>
        {wallet.coinBreakdown.map(coin => (
          <li key={coin.type}>
            {coin.displayLabel}: {coin.displayAmount}
          </li>
        ))}
      </ul>

      <Button disabled={!wallet.canCheckout}>
        Checkout
      </Button>
    </Card>
  );
}
```

**See the difference?**
- ✅ No calculations in frontend
- ✅ No conditionals beyond display
- ✅ No string formatting
- ✅ No array operations
- ✅ Pure rendering only

---

### Example 2: OrderViewModel

**Raw Schema Data:**
```typescript
{
  id: 'order_456',
  status: 'shipped',
  created_at: '2026-01-04T10:30:00Z',
  items: [...],
  total_amount: 500,
  delivery_address: {...}
}
```

**ViewModel Transform:**
```typescript
export interface OrderViewModel {
  // Display
  displayOrderId: string;           // "#456"
  displayStatus: string;            // "Out for Delivery"
  displayDate: string;              // "Jan 4, 2026"
  displayTime: string;              // "10:30 AM"
  displayTotal: string;             // "₹500.00"

  // Status indicator
  statusBadge: {
    label: string;                  // "Shipped"
    color: 'green' | 'yellow' | 'red';
    icon: string;
  };

  // Timeline (pre-computed)
  timeline: Array<{
    step: string;
    label: string;
    completed: boolean;
    timestamp?: string;
  }>;

  // UI actions
  canCancel: boolean;
  canTrack: boolean;
  canReorder: boolean;
  showRefundButton: boolean;

  // Items (pre-transformed)
  items: Array<{
    displayName: string;
    displayPrice: string;
    displayQuantity: string;
    imageUrl: string;
  }>;

  // Delivery estimate
  estimatedDelivery: {
    displayDate: string;            // "Tomorrow, 3-5 PM"
    isUrgent: boolean;
    showWarning: boolean;
  };

  _raw: Order;
}
```

---

## 🚨 WHAT BELONGS IN VIEWMODEL

### ✅ BELONGS in ViewModel:

```typescript
// 1. Formatting
amount: 500 → displayAmount: "₹500.00"

// 2. Calculations
coins: {promo: 200, rez: 100} → totalCoins: 300

// 3. Conditionals
balance >= 100 → canCheckout: true

// 4. Sorting
items → items.sort((a,b) => a.priority - b.priority)

// 5. Filtering
allItems → activeItems.filter(i => i.status === 'active')

// 6. Mapping
status: 'shipped' → statusLabel: 'Out for Delivery'

// 7. Localization
'Hello' → 'नमस्ते' (if locale = 'hi')

// 8. Business rules
loyalty_tier: 'gold' → showPremiumFeatures: true
```

### ❌ DOES NOT BELONG in ViewModel:

```typescript
// 1. User interactions (belongs in event handlers)
onClick={() => ...}

// 2. Component state (belongs in useState)
const [isExpanded, setIsExpanded] = useState(false);

// 3. API calls (belongs in SDK)
fetch('/api/...')

// 4. Routing (belongs in router)
navigate('/checkout')

// 5. Side effects (belongs in useEffect)
useEffect(() => { trackPageView() }, []);
```

**Rule of thumb:** If it's about DATA → ViewModel. If it's about INTERACTION → Component.

---

## 🔄 VIEWMODEL UPDATE PROCESS

### When you need to add ViewModel logic:

```markdown
1. Identify the transformation
   Example: "I need to show 'Premium' badge for gold users"

2. Check if schema supports it
   → UserSchema.fields.loyalty_tier exists? ✅

3. Add to ViewModel interface
   → Add: showPremiumBadge: boolean

4. Implement transform logic
   → In toUserViewModel():
     showPremiumBadge: user.loyalty_tier === 'gold' || user.loyalty_tier === 'prive'

5. Update frontend to use it
   → {viewModel.showPremiumBadge && <Badge>Premium</Badge>}

6. Test
   → Architecture tests enforce ViewModel usage
```

### Timeline:
- Simple addition: **15-30 minutes**
- Complex calculation: **30-60 minutes**

---

## 🧪 TESTING VIEWMODELS

### Unit Tests (Required):

```typescript
describe('WalletViewModel', () => {
  test('calculates total correctly', () => {
    const user = {
      promo_coins: 200,
      branded_coins: 150,
      rez_coins: 100,
      cash: 50
    };

    const viewModel = toWalletViewModel(user);

    expect(viewModel.totalCoins).toBe(450);
    expect(viewModel.totalValue).toBe(500);
  });

  test('formats currency correctly', () => {
    const user = { cash: 500 };
    const viewModel = toWalletViewModel(user);

    expect(viewModel.displayBalance).toBe('₹500.00');
  });

  test('determines checkout eligibility', () => {
    const poorUser = { cash: 50 };
    const richUser = { cash: 200 };

    expect(toWalletViewModel(poorUser).canCheckout).toBe(false);
    expect(toWalletViewModel(richUser).canCheckout).toBe(true);
  });
});
```

### Architecture Tests (Enforced):

```typescript
// Test: Frontend cannot do calculations
test('frontend components have no arithmetic operations', () => {
  const componentCode = fs.readFileSync('WalletCard.tsx', 'utf-8');

  // Should not contain: +, -, *, /, Math.
  expect(componentCode).not.toMatch(/\b\d+\s*[\+\-\*\/]\s*\d+\b/);
  expect(componentCode).not.toMatch(/Math\./);
});

// Test: Frontend cannot do conditionals on raw data
test('frontend components use ViewModel booleans', () => {
  const componentCode = fs.readFileSync('CheckoutButton.tsx', 'utf-8');

  // Should not contain: user.balance >= 100
  expect(componentCode).not.toMatch(/user\.\w+\s*[<>=]/);

  // Should contain: viewModel.canCheckout
  expect(componentCode).toMatch(/viewModel\.can\w+/);
});
```

---

## 📞 COMMON QUESTIONS

### "Can I add one small calculation in frontend?"

**NO.** Even `total = a + b` belongs in ViewModel.

**Why?** Slippery slope. One calculation becomes ten. Then frontend has business logic.

---

### "ViewModel is making my API response big"

**That's correct.** ViewModels trade network size for frontend simplicity.

**Benefits:**
- Frontend renders in 1ms (no calculations)
- Backend controls all logic (single source of truth)
- Zero frontend bugs from bad calculations

**Cost:**
- +20-30% response size

**We accept this tradeoff.**

---

### "What if I need different ViewModels for different screens?"

**Create multiple ViewModels.**

```typescript
// List view
toMerchantListItemViewModel(merchant)
  → { displayName, displayRating, thumbnailUrl }

// Detail view
toMerchantDetailViewModel(merchant)
  → { displayName, displayDescription, fullImages, reviews, ... }
```

**Each screen gets exactly what it needs.**

---

### "Can frontend modify ViewModel properties?"

**Only for local UI state.**

```typescript
// ❌ WRONG - Modifying business data
viewModel.totalCoins += 100;

// ✅ CORRECT - Local UI state
const [isExpanded, setIsExpanded] = useState(false);
```

**ViewModels are READ-ONLY for business data.**

---

## 🗺️ WHERE VIEWMODELS LIVE

### In SDK:

```typescript
// SDK returns ViewModel, not raw data
class WalletSDK {
  async getBalance(userId: string): Promise<WalletViewModel> {
    const user = await this.api.get(`/users/${userId}`);
    return toWalletViewModel(user); // ← Transform here
  }
}
```

### In Frontend:

```typescript
// Frontend consumes ViewModel
function WalletPage() {
  const wallet = await walletSDK.getBalance(userId);

  return <WalletCard wallet={wallet} />;
}
```

**SDK is the ViewModel factory.**

---

## ✅ SUCCESS CRITERIA

You're using ViewModels correctly if:

1. ✅ Frontend has ZERO calculations (no +, -, *, /)
2. ✅ Frontend has ZERO business conditionals (only display conditionals)
3. ✅ Frontend has ZERO string formatting
4. ✅ Frontend has ZERO array sort/filter
5. ✅ All data transformations happen in ViewModel
6. ✅ Architecture tests pass 100%
7. ✅ Components are under 100 lines (pure rendering)

**If frontend file has business logic → ViewModel is incomplete.**

---

## 🚨 RED FLAGS

### ❌ Red Flag 1: Calculations in JSX

```tsx
// WRONG
<div>{user.promo_coins + user.rez_coins}</div>
```

**Fix:** Add `totalCoins` to ViewModel

---

### ❌ Red Flag 2: Conditionals on raw data

```tsx
// WRONG
{user.loyalty_tier === 'gold' && <Badge>Premium</Badge>}
```

**Fix:** Add `showPremiumBadge` to ViewModel

---

### ❌ Red Flag 3: String formatting

```tsx
// WRONG
<div>₹{amount.toFixed(2)}</div>
```

**Fix:** Add `displayAmount` to ViewModel

---

### ❌ Red Flag 4: Array operations

```tsx
// WRONG
{items.filter(i => i.active).map(...)}
```

**Fix:** Add `activeItems` to ViewModel (pre-filtered)

---

## 📚 FURTHER READING

- [START_HERE_FOR_DEVS.md](../../START_HERE_FOR_DEVS.md) - General development flow
- [schemas/README.md](../schemas/README.md) - Source data definitions
- [contracts/](../contracts/) - API response formats
- [sdks/](../sdks/) - SDK usage (ViewModel factories)

---

**Generated**: 2026-01-04
**Version**: 1.0 (FROZEN)
**Owner**: Architecture Team
**Status**: PRODUCTION

**Remember: Frontend is a pure renderer. ViewModels make this possible.**
