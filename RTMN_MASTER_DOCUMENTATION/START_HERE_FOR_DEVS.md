# START HERE - DEVELOPER ONBOARDING

**If you're a new developer, this is THE ONLY file you need to read first.**

Read this in order. Don't skip ahead.

---

## ⏱️ ONBOARDING TIMELINE

- **Day 1 (4 hours)**: Read this file + set up environment
- **Day 2-3 (2 days)**: Complete 3 starter tasks
- **Week 1**: Ship 5-7 small features
- **Week 2+**: Full velocity (10-15 tasks/week)

---

## 🎯 THE ONLY RULE

```
DATABASE SCHEMA → API CONTRACT → SDK → FRONTEND

Never reverse. Never skip.
```

If you violate this → your code will be rejected.

---

## 📂 REPO STRUCTURE (WHAT YOU NEED TO KNOW)

```
/RTMN_MASTER_DOCUMENTATION/
  ├── START_HERE_FOR_DEVS.md ⭐ YOU ARE HERE
  ├── EXECUTION_SYSTEM/        ← Your daily tools
  │   ├── schemas/             ← SINGLE SOURCE OF TRUTH
  │   ├── contracts/           ← OpenAPI specs (API contracts)
  │   ├── sdks/                ← Frontend uses ONLY these
  │   ├── view-models/         ← UI-ready data transformations
  │   ├── rules/               ← Business logic lives here
  │   ├── TASK_TEMPLATES.md    ← No-thinking checklists
  │   └── DEVELOPER_ONBOARDING.md  ← Full system guide
  │
  ├── reference-implementation/ ← Gold standard flows
  └── 1_ARCHITECTURE/          ← Deep technical specs (read later)
```

**You will spend 90% of your time in `/EXECUTION_SYSTEM/`**

---

## 🚀 QUICK START (30 MINUTES)

### Step 1: Clone & Setup (5 mins)
```bash
git clone <repo-url>
cd RTMN_MASTER_DOCUMENTATION
npm install
```

### Step 2: Read The One-Pager (10 mins)
```bash
cat EXECUTION_SYSTEM/DEVELOPER_ONBOARDING.md
```

**This is the 1-page system overview. Read it completely.**

### Step 3: Understand Schemas (10 mins)
```bash
ls EXECUTION_SYSTEM/schemas/
cat EXECUTION_SYSTEM/schemas/README.md
```

**Schemas are LAW. If it's not in schema → it doesn't exist.**

### Step 4: Pick Your First Task (5 mins)
Go to Jira → Filter: "good-first-issue"

**Recommended first tasks:**
- Fix: Update error message copy
- Add: New campaign display field (already in schema)
- Update: Change button text on checkout screen

---

## 🧭 HOW TO WORK (THE FLOW)

### For EVERY task:

```markdown
1. Read task description in Jira

2. Find matching template in TASK_TEMPLATES.md
   Example: "Add new API endpoint"
           "Fix a bug"
           "Add frontend screen"

3. Follow checklist EXACTLY (don't think)
   [ ] Step 1: Check schema
   [ ] Step 2: Update contract
   [ ] Step 3: Generate SDK
   ... etc

4. Run tests
   npm run test:architecture
   npm test

5. Create PR (use template)

6. DONE. Move to next task.
```

**DO NOT:**
- Design solutions (schema already defines it)
- Make architectural decisions (contracts define it)
- Add business logic in frontend (rules/ defines it)

**DO:**
- Follow checklist
- Use SDK
- Write tests
- Ship

---

## 📝 TASK TYPES (WHICH TEMPLATE TO USE)

| Task Type | Template to Use | Estimated Time |
|-----------|----------------|----------------|
| Add wallet feature | TASK_TEMPLATE_wallet.md | 30 mins |
| Add API endpoint | TASK_TEMPLATE_api.md | 45 mins |
| Add frontend screen | TASK_TEMPLATE_frontend.md | 20 mins |
| Fix bug | TASK_TEMPLATE_bug.md | 30 mins |
| Add business rule | TASK_TEMPLATE_rule.md | 40 mins |

**If no template exists** → Ask in #dev-help channel

---

## 🔒 WHAT YOU CAN/CAN'T CHANGE

### ✅ YOU CAN (no approval needed):
- UI copy (button text, labels)
- CSS/styling
- Component structure
- Test coverage
- Comments/documentation
- Error messages (using existing error codes)

### ⚠️ NEEDS APPROVAL (ask team lead):
- Add optional field to schema
- Add new enum value
- Change API response format (minor)
- Add new ViewModel property

### 🚨 NEVER ALLOWED (will be rejected):
- Add business logic in frontend
- Skip SDK (direct API calls)
- Change database schema without migration
- Add required fields (breaking change)
- Use free-text errors (must use ERROR_CODES)
- Skip state machine transitions

**When in doubt** → Ask BEFORE coding

---

## 🧪 TESTING (MANDATORY)

Before creating PR:

```bash
# 1. Type check
npm run type-check

# 2. Lint
npm run lint

# 3. Unit tests
npm test

# 4. Architecture tests (MOST IMPORTANT)
npm run test:architecture
```

**If ANY test fails** → Fix before PR

Architecture tests enforce:
- SDK usage (no direct API calls)
- Schema compliance (no unknown fields)
- State machine rules (valid transitions only)
- Error codes (no free-text errors)

**Test failure = rule violation**

---

## 💡 EXAMPLE: YOUR FIRST TASK

**Task**: Add "Top Rated" badge to merchant card

### ❌ WRONG WAY (what you might think):
1. Open MerchantCard.tsx
2. Add logic: `if (rating > 4.5) show badge`
3. Create PR

**Why wrong?**
- Business logic in frontend (not allowed)
- Hardcoded threshold (should be in rules/)

### ✅ CORRECT WAY (zero-thinking):

```markdown
1. Open TASK_TEMPLATES.md
2. Find: "TASK TYPE 3: Add frontend screen (20 min)"
3. Follow checklist:

   [x] Step 1: Check schema
       → Open merchant.schema.ts
       → Field `rating` exists ✓
       → Field `tags` exists ✓

   [x] Step 2: Check ViewModel
       → Open MerchantViewModel.ts
       → `tags` already includes top-rated logic ✓

   [x] Step 3: Use ViewModel in component
       → Import toMerchantViewModel
       → Use viewModel.tags (already has badge)

   [x] Step 4: Update UI
       → Map viewModel.tags to Badge components

   [x] Step 5: Test
       → npm run test:architecture ✓
       → npm test ✓

   [x] Step 6: Create PR

4. DONE. 15 minutes.
```

**See the difference?**
- No decisions
- No logic
- Just follow checklist

---

## 🗺️ WHERE THINGS LIVE

### "I need to know what fields a User has"
→ `schemas/user.schema.ts`

### "I need to call the wallet API"
→ `sdks/WalletSDK.ts` (NEVER direct fetch)

### "I need to add business logic"
→ `rules/` (NEVER in frontend)

### "I need UI-ready data"
→ `view-models/` (data pre-transformed)

### "I need to validate a rule"
→ `ERROR_CODES.ts` (all errors predefined)

### "I need to know the flow"
→ `reference-implementation/`

### "I need API documentation"
→ `contracts/*.openapi.yaml`

---

## 🚨 RED FLAGS (STOP IMMEDIATELY)

If you're about to:

### ❌ Add `if/else` logic in frontend
**STOP.** Business logic belongs in `rules/`

### ❌ Type `fetch('/api/...')`
**STOP.** Use SDK only

### ❌ Add a field not in schema
**STOP.** Propose schema change first

### ❌ Skip a state in order flow
**STOP.** State machine defines valid transitions

### ❌ Write `throw new Error('message')`
**STOP.** Use ErrorCode enum

**See a red flag in code review?** → Comment: "Red flag: {type}"

---

## 📞 GETTING HELP

### BEFORE asking:
1. Did you check the schema?
2. Did you check TASK_TEMPLATES.md?
3. Did you check the ViewModel?
4. Did you run `npm run test:architecture`?

### ASK WHEN:
- Schema missing field you need
- Task template doesn't exist
- Tests fail and you don't understand why
- Task takes > 2x estimated time

### HOW TO ASK:

❌ **Bad**: "Wallet not working"

✅ **Good**:
```
Task: Add expiry tracking to promo coins
Blocker: UserSchema.fields.promo_coins missing expiry_date field
Question: Should I update schema or is expiry tracked elsewhere?
What I checked:
- wallet.schema.ts (no expiry field)
- TASK_TEMPLATES.md (followed "Add wallet feature")
- Tests: All pass except wallet-expiry.test.ts
```

---

## 🎯 SUCCESS METRICS

You're doing well if:

### Week 1:
- ✅ Completed 5-7 small tasks
- ✅ All PRs merged in < 2 hours
- ✅ Zero architecture test failures
- ✅ Zero "where do I put this?" questions

### Week 2:
- ✅ Completed 10-12 tasks
- ✅ Can complete tasks in estimated time
- ✅ Can help onboard next new dev

### Week 3+:
- ✅ 15-20 tasks/week
- ✅ Sub-hour task completion
- ✅ Zero blockers

**If you're slower** → You're not following the system

---

## 🧠 MINDSET SHIFT

### Traditional development:
```
1. Understand requirements
2. Design solution
3. Write code
4. Write tests
5. Submit for review
6. Fix feedback
7. Repeat 5-6 until approved
```

**Time: 2-3 days per feature**

### RTMN Execution System:
```
1. Pick task
2. Find template
3. Follow checklist
4. Tests pass
5. Create PR
6. Ship
```

**Time: 30-60 minutes per feature**

### The difference?
**NO THINKING = NO DECISIONS = NO BUGS = FAST**

---

## 📚 FURTHER READING (AFTER YOU'VE SHIPPED 5 TASKS)

Once you're comfortable:

1. **Deep Architecture** (optional)
   → `1_ARCHITECTURE/` folder
   → Only if you want to understand WHY

2. **Advanced Patterns** (optional)
   → State machines deep dive
   → Event sourcing patterns
   → Wallet atomicity guarantees

3. **Business Context** (helpful)
   → Company structure
   → Revenue models
   → User flows

**But remember:** You don't need these to ship code.

---

## ✅ FINAL CHECKLIST

Before you start coding:

- [ ] I read this file (START_HERE_FOR_DEVS.md)
- [ ] I read DEVELOPER_ONBOARDING.md
- [ ] I understand schemas are LAW
- [ ] I know where to find task templates
- [ ] I know I must use SDK (no direct API calls)
- [ ] I know frontend is pure renderer (no business logic)
- [ ] I ran `npm install` successfully
- [ ] I can run `npm run test:architecture` successfully

**All checked?** → Pick your first task from Jira.

**Any unchecked?** → Read that section again.

---

## 🎉 WELCOME TO THE TEAM

**You're about to be 10-20x more productive than traditional development.**

The system makes you fast. Trust it. Follow it. Ship.

**First day goal**: Complete 1 task
**First week goal**: Complete 5-7 tasks
**Steady state**: 10-20 tasks/week

**Questions?** → #dev-help channel

**Let's ship.** 🚀

---

**Generated**: 2026-01-04
**Version**: 1.0
**Owner**: Dev Team
**Next Update**: As needed based on feedback
