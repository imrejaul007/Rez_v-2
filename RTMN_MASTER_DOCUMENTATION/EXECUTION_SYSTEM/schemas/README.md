# CANONICAL SCHEMAS - SINGLE SOURCE OF TRUTH

**THIS DIRECTORY IS LAW.**

Every field, every type, every validation rule starts here.

---

## 🔒 FREEZE POLICY

### ✅ Allowed Without Approval:
- Adding comments/documentation
- Fixing typos in descriptions
- Adding examples

### ⚠️ Requires Team Lead Approval:
- Adding new optional fields
- Changing field descriptions
- Adding new allowed enum values

### 🚨 Requires Architecture Review:
- Adding new required fields (BREAKING CHANGE)
- Changing field types (BREAKING CHANGE)
- Removing fields (BREAKING CHANGE)
- Changing state machine transitions (BREAKING CHANGE)
- Changing validation rules that affect existing data

### ❌ NEVER ALLOWED:
- Renaming fields (use migration + deprecation)
- Changing primary keys
- Removing state machine states that have data

---

## 📂 SCHEMA DIRECTORY STRUCTURE

```
schemas/
├── README.md (this file)
├── user.schema.ts ⭐ FROZEN
├── wallet.schema.ts ⭐ FROZEN
├── order.schema.ts ⭐ FROZEN
├── order_items.schema.ts ⭐ FROZEN
├── merchant.schema.ts ⭐ FROZEN
├── product.schema.ts ⭐ FROZEN
└── campaign.schema.ts ⭐ FROZEN
```

**Status Legend:**
- ⭐ FROZEN = Production-ready, changes require approval
- 🚧 DRAFT = Still being designed
- ⚠️ DEPRECATED = Being phased out

---

## 🎯 DEVELOPER CONTRACT

### BEFORE writing ANY code:

```typescript
// 1. Import the schema
import { UserSchema } from '@/schemas/user.schema';

// 2. Check if field exists
const loyaltyTierField = UserSchema.fields.loyalty_tier;

if (!loyaltyTierField) {
  // ❌ STOP. Field doesn't exist.
  // → File Jira ticket to add field
  // → Wait for approval
  throw new Error('Field not in schema');
}

// 3. Check allowed values
console.log(loyaltyTierField.allowed_values);
// ['basic', 'silver', 'gold', 'prive']

// 4. Use EXACTLY these values
const userTier: 'basic' | 'silver' | 'gold' | 'prive' = 'gold'; // ✅

// ❌ NEVER do this:
const userTier = 'platinum'; // NOT in schema = doesn't exist
```

### Rule: **If it's not in the schema → it doesn't exist**

---

## 🔗 HOW SCHEMAS PROPAGATE

```
1. Schema Definition (HERE)
   ↓
2. Sequelize Model (auto-generated via npm run generate:models)
   ↓
3. Database Migration (generated)
   ↓
4. OpenAPI Contract (references schema types)
   ↓
5. SDK Types (auto-generated from OpenAPI)
   ↓
6. Frontend Types (from SDK)
   ↓
7. UI Components (use types)
```

**ONE CHANGE HERE → CASCADES EVERYWHERE**

That's why we're strict.

---

## 📋 SCHEMA CHECKLIST

Every schema MUST include:

### ✅ Required Sections:
- [ ] `table` - Database table name
- [ ] `source_of_truth` - Which service owns this data
- [ ] `fields` - Complete field definitions
- [ ] `indexes` - Database indexes
- [ ] `validation_rules` - Business validation
- [ ] `domain_rules` - Written rules (for humans)
- [ ] `related_schemas` - Foreign key relationships

### ✅ For Each Field:
- [ ] `type` - Exact data type
- [ ] `required` - Is field mandatory?
- [ ] `description` - What does this field mean?
- [ ] `default` - Default value (if any)
- [ ] `allowed_values` - Enum values (if applicable)
- [ ] `max_length` - String length limit (if string)
- [ ] `min` / `max` - Number limits (if number)
- [ ] `foreign_key` - References table.field (if FK)
- [ ] `indexed` - Should be indexed in DB?

### ✅ For State Machines:
- [ ] `states` - All possible states
- [ ] `transitions` - Allowed state changes
- [ ] `terminal_states` - States you can't exit
- [ ] `ownership` - Who can trigger each transition

---

## 🚨 COMMON MISTAKES

### ❌ Mistake 1: Adding fields in code first
```typescript
// WRONG
user.customRewardTier = 'platinum';
```

**Correct flow:**
1. Add field to `user.schema.ts`
2. Get approval
3. Run `npm run generate:models`
4. Create migration
5. THEN use in code

---

### ❌ Mistake 2: Using free-form strings
```typescript
// WRONG - not in schema
order.status = 'almost_delivered';
```

**Correct:**
```typescript
// Check schema first
OrderSchema.state_machine.states
// ['initiated', 'created', 'paid', ...]

// Use ONLY allowed values
order.status = 'delivered'; // ✅
```

---

### ❌ Mistake 3: Skipping state machine
```typescript
// WRONG - invalid transition
order.status = 'delivered'; // Can't jump from 'paid' to 'delivered'
```

**Correct:**
```typescript
// Check allowed transitions
OrderSchema.state_machine.transitions.paid
// ['confirmed', 'refund_requested']

// Follow the path
order.status = 'confirmed'; // ✅
// ... then 'preparing'
// ... then 'ready'
// ... then 'shipped'
// ... then 'delivered'
```

---

## 🔄 SCHEMA UPDATE PROCESS

### When you need a new field:

```markdown
1. Create Jira ticket: "Add {field_name} to {schema}"

2. In ticket, specify:
   - Field name (snake_case)
   - Type (string, number, boolean, enum, etc.)
   - Required? (yes/no)
   - Default value
   - Validation rules
   - Why you need it (use case)

3. Tag: @architecture-team

4. Wait for approval (usually same day)

5. After approval:
   a. Update schema file
   b. Run npm run generate:models
   c. Create migration
   d. Create PR
   e. Tests must pass
   f. Merge

6. THEN use in your code
```

### Timeline:
- Simple field addition: **2-4 hours**
- Complex change (state machine): **1-2 days**
- Breaking change: **1 week** (needs migration plan)

---

## 📖 READING A SCHEMA

Example: `user.schema.ts`

```typescript
export const UserSchema = {
  table: 'users',  // ← Database table name
  source_of_truth: 'rabtul-auth',  // ← Owning service

  fields: {
    loyalty_tier: {  // ← Field name
      type: 'enum',  // ← Data type
      required: true,  // ← Can't be null
      allowed_values: ['basic', 'silver', 'gold', 'prive'],  // ← ONLY these
      default: 'basic',  // ← New users get this
      description: 'User loyalty tier',  // ← What it means
      note: 'Controls coin multipliers and perks'  // ← Extra context
    }
  },

  validation_rules: {  // ← Business rules
    phone: {
      regex: /^\+91-\d{10}$/,  // ← Must match this pattern
      error_code: 'INVALID_PHONE_FORMAT'  // ← Error to throw
    }
  },

  domain_rules: [  // ← Written rules (for humans)
    'Users can only be created by Auth service',
    'Loyalty tier can only be updated by Rules service'
  ]
}
```

---

## 🧪 TESTING AGAINST SCHEMAS

Architecture tests **enforce** these schemas:

```typescript
// Test: Field must exist in schema
test('user.customField rejects unknown fields', () => {
  const user = { id: '123', customField: 'value' };

  expect(() => createUser(user))
    .toThrow('VALIDATION_FAILED: customField not in schema');
});

// Test: Must use allowed enum values
test('user.loyalty_tier rejects invalid values', () => {
  const user = { loyalty_tier: 'platinum' };

  expect(() => createUser(user))
    .toThrow('VALIDATION_FAILED: platinum not in allowed_values');
});

// Test: State machine enforced
test('order cannot skip states', () => {
  const order = { status: 'paid' };

  expect(() => updateOrderStatus(order.id, 'delivered'))
    .toThrow('ORDER_INVALID_TRANSITION');
});
```

**If test fails → code is wrong, schema is right**

---

## 📞 GETTING HELP

### "I need a field that doesn't exist"
→ Create Jira ticket with proposal
→ Tag @architecture-team
→ Usually approved same day

### "Schema doesn't support my use case"
→ Describe use case in Jira
→ We'll find a schema-compatible solution
→ May need to redesign approach

### "I disagree with the schema"
→ That's fine, but schema is still law
→ Propose change via Jira
→ If approved, schema gets updated
→ Then you can use it

**Remember: Schema is TRUTH, not opinion**

---

## ✅ SUCCESS CRITERIA

You're using schemas correctly if:

1. ✅ Every field you use exists in schema
2. ✅ Every value matches allowed_values
3. ✅ Every state transition is valid
4. ✅ Architecture tests pass 100%
5. ✅ Zero "field not found" runtime errors
6. ✅ Frontend types match backend types exactly

---

**Generated**: 2026-01-04
**Version**: 1.0 (FROZEN)
**Owner**: Architecture Team
**Status**: PRODUCTION

**Questions? Read this file first. Still confused? Ask in #architecture channel.**
