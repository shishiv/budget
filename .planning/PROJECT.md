# Budget

## Vision

A personal finance management app that brings clarity to your money. Track transactions across multiple bank accounts (4-6 accounts), see where your money goes, allocate funds using envelope-style budgeting, and watch your net worth grow — all through beautiful, minimal dashboards inspired by modern Brazilian banking apps like Nubank and Inter.

The core experience is visual: charts and dashboards that tell the story of your finances at a glance. Clean whitespace, no clutter, just the information you need.

Built as a web app with cloud-hosted data via Supabase, using BRL (Brazilian Real) as the primary currency with Portuguese locale formatting.

## Problem

Managing finances across multiple bank accounts is fragmented. Each bank has its own app, its own export format, its own limited reporting. You download CSVs, maybe throw them into a spreadsheet, but you never get the full picture.

Existing solutions like Actual Budget are good but require self-hosting and lack the polish of modern fintech apps. You want something that:
- Imports your bank CSVs without friction
- Auto-categorizes transactions so you don't have to manually tag everything
- Uses envelope budgeting to allocate money intentionally
- Shows beautiful dashboards that make you actually want to check your finances

## Success Criteria

How we know this worked:

- [ ] Can import CSV files from Brazilian bank accounts and see transactions
- [ ] Auto-categorization correctly identifies 80%+ of transaction types
- [ ] Envelope budgeting allows allocating income to categories
- [ ] Dashboard shows spending by category, net worth over time, and cash flow
- [ ] Manual transaction entry works for cash and quick logging
- [ ] The UI feels as polished as Nubank/Inter

## Scope

### Building
- CSV import for bank transactions (consistent format)
- Manual transaction entry (cash, quick logging, corrections)
- Auto-categorization of transactions based on descriptions
- Envelope-style budgeting (assign money to categories)
- Multi-account tracking (4-6 accounts)
- Dashboard with spending by category visualization
- Net worth tracking over time
- Cash flow reports (income vs expenses)
- Auto-detection of recurring transactions
- Clean, minimal UI inspired by Brazilian banking apps
- BRL currency with R$ formatting

### Not Building (v1)
- Bank sync via APIs (Plaid, GoCardless) — CSV import only
- Mobile app — web only
- Multi-user/family sharing — single user
- Split transactions — defer to later version
- Offline mode — cloud-hosted, requires internet
- Multi-currency support — BRL only

## Context

Greenfield project. No existing codebase.

User has CSV files from multiple Brazilian bank accounts with consistent formatting. The primary interaction model is:
1. Periodically import CSVs from banks
2. Quick-log cash transactions on the go
3. Review and correct categorization
4. Allocate budget using envelopes
5. Check dashboards to understand spending patterns

Design inspiration: Actual Budget (for functionality), Nubank/Inter (for visual design). The aesthetic goal is clean, minimal, modern fintech — whitespace, simple charts, no clutter.

## Constraints

- **Tech Stack**: Next.js + Supabase (PostgreSQL, auth built-in)
- **Currency**: BRL (Brazilian Real), R$ format, Portuguese locale
- **Platform**: Web app only

## Decisions Made

Key decisions from project exploration:

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Platform | Web app | Accessible from any device, simpler than native |
| Data storage | Supabase (cloud) | Auth + database in one, accessible anywhere |
| Budgeting method | Envelope style | Proven method, like Actual Budget |
| Category system | Auto-categorize | Reduce manual work, AI/rules based |
| Design direction | Clean & minimal | Inspired by Nubank/Inter fintech aesthetic |
| CSV format | Single format | User's banks export consistently |

## Open Questions

Things to figure out during execution:

- [ ] Exact CSV column mapping for user's bank exports
- [ ] Auto-categorization approach (rule-based vs ML)
- [ ] Recurring transaction detection algorithm
- [ ] Specific chart library for dashboards (Recharts, Chart.js, etc.)

---
*Initialized: 2025-12-17*
