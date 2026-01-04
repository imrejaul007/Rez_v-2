# REFERENCE IMPLEMENTATIONS - GOLD STANDARD FLOWS

**These are REAL, working examples of complete flows.**

Not documentation. Not theory. **Actual implementation.**

---

## 🎯 PURPOSE

When docs say "follow the pattern," **these show the pattern**.

Each reference implementation includes:
- ✅ Sequence diagrams
- ✅ Actual API calls (with real payloads)
- ✅ Event flows
- ✅ State transitions
- ✅ Error handling
- ✅ Edge cases

**Think of these as "copy-paste templates" for complex flows.**

---

## 📂 AVAILABLE IMPLEMENTATIONS

| Flow | Status | Use When |
|------|--------|----------|
| ReZ to BizOne Order | ✅ COMPLETE | User orders product via ReZ app |
| Wallet Top-Up | ✅ COMPLETE | User adds money to wallet |
| Campaign Cashback | ✅ COMPLETE | User earns cashback from campaign |
| Order Refund | ✅ COMPLETE | Order cancelled, coins refunded |
| Merchant Onboarding | 🚧 IN PROGRESS | New merchant signs up |

---

## 🚀 HOW TO USE

### When building similar feature:

```markdown
1. Find closest reference implementation
2. Copy the sequence diagram
3. Copy API call patterns
4. Adjust for your specific case
5. Follow same error handling
6. Done
```

**Don't reinvent. Copy and modify.**

---

## 📖 IMPLEMENTATION STRUCTURE

Each folder contains:

```
/flow-name/
├── README.md             ← Overview + use case
├── sequence.md           ← Step-by-step flow diagram
├── api-calls.md          ← Exact API requests/responses
├── events.md             ← Events emitted at each step
├── state-transitions.md  ← State machine changes
├── error-handling.md     ← All error scenarios
└── edge-cases.md         ← Rare but important cases
```

---

## 🎓 LEARNING PATH

### New to RTMN?
**Start here:**
1. Read: `rez-to-bizone-order/README.md`
2. Study: `rez-to-bizone-order/sequence.md`
3. Trace: Every API call in `api-calls.md`

**Time: 30 minutes**
**Result:** You understand a complete end-to-end flow

### Building similar feature?
**Use as template:**
1. Copy relevant sections
2. Modify for your use case
3. Keep same patterns
4. Same error handling approach

---

## ⚠️ RULES

### ✅ DO:
- Copy patterns from here
- Use as starting point
- Follow same structure
- Keep error handling similar

### ❌ DON'T:
- Deviate from patterns without reason
- Skip steps shown here
- Add custom error codes (use existing)
- Change state flow without approval

**If reference implementation does X → you should do X too**

---

## 📞 QUESTIONS?

### "Which reference should I use?"
→ Find one with similar:
   - Number of systems involved
   - State transitions
   - Payment flow

### "Reference doesn't cover my case exactly"
→ Use closest match
→ Document differences in your PR
→ May become new reference

### "I disagree with reference approach"
→ That's fine, but follow it anyway
→ If you have better approach, propose in #architecture
→ If approved, reference gets updated

**References are opinionated. That's the point.**

---

**Generated**: 2026-01-04
**Status**: ACTIVE
**Maintainer**: Architecture Team
