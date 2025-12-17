# Roadmap: Budget

## Overview

Build a personal finance app from the ground up. Start with foundation (Next.js + Supabase), then add core transaction management with CSV import. Layer in smart categorization and recurring detection. Build the envelope budgeting system. Finally, create the beautiful dashboards that make finances visible at a glance.

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Foundation** - Next.js + Supabase setup, auth, database schema, UI shell
- [ ] **Phase 2: Accounts & Transactions** - Account management, CSV import, manual entry
- [ ] **Phase 3: Categorization** - Category system, auto-categorization, recurring detection
- [ ] **Phase 4: Budgeting** - Envelope budgeting, allocation UI, budget tracking
- [ ] **Phase 5: Dashboards** - Spending charts, net worth, cash flow reports

## Phase Details

### Phase 1: Foundation
**Goal**: Working Next.js app with Supabase auth, database schema, and minimal UI shell
**Depends on**: Nothing (first phase)
**Research**: Likely (Supabase integration)
**Research topics**: Supabase Auth setup with Next.js App Router, Row Level Security patterns, database schema design for financial apps
**Plans**: TBD

Plans:
- [x] 01-01: Project setup (Next.js, Supabase, Tailwind, shadcn/ui)
- [x] 01-02: Auth flow (login, signup, protected routes)
- [ ] 01-03: Database schema (accounts, transactions, categories, budgets)

### Phase 2: Accounts & Transactions
**Goal**: Full transaction management with multi-account support and CSV import
**Depends on**: Phase 1
**Research**: Unlikely (CRUD operations, file parsing - established patterns)
**Plans**: TBD

Plans:
- [ ] 02-01: Account management (CRUD, balance tracking)
- [ ] 02-02: CSV import (parse, preview, confirm import)
- [ ] 02-03: Manual transaction entry (quick add, edit, delete)
- [ ] 02-04: Transaction list (filtering, search, pagination)

### Phase 3: Categorization
**Goal**: Smart categorization system with auto-categorize and recurring detection
**Depends on**: Phase 2
**Research**: Likely (auto-categorization approach)
**Research topics**: Rule-based categorization patterns, keyword matching algorithms, recurring transaction detection (frequency analysis, amount matching)
**Plans**: TBD

Plans:
- [ ] 03-01: Category management (CRUD, icons, colors)
- [ ] 03-02: Auto-categorization engine (rules, keyword matching)
- [ ] 03-03: Recurring transaction detection

### Phase 4: Budgeting
**Goal**: Envelope-style budgeting with allocation and tracking
**Depends on**: Phase 3
**Research**: Unlikely (internal business logic, UI patterns from Actual Budget)
**Plans**: TBD

Plans:
- [ ] 04-01: Budget periods (monthly setup, rollover handling)
- [ ] 04-02: Envelope allocation UI (assign funds to categories)
- [ ] 04-03: Budget vs actual tracking (progress bars, alerts)

### Phase 5: Dashboards
**Goal**: Beautiful, minimal dashboards showing spending, net worth, and cash flow
**Depends on**: Phase 4
**Research**: Likely (chart library selection)
**Research topics**: Recharts vs Chart.js vs Tremor for Next.js, responsive chart design, dashboard layout patterns (Nubank/Inter inspiration)
**Plans**: TBD

Plans:
- [ ] 05-01: Dashboard shell (layout, navigation, responsive design)
- [ ] 05-02: Spending by category (pie/donut charts, breakdowns)
- [ ] 05-03: Net worth over time (line chart, account breakdown)
- [ ] 05-04: Cash flow report (income vs expenses, trends)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/3 | In progress | - |
| 2. Accounts & Transactions | 0/4 | Not started | - |
| 3. Categorization | 0/3 | Not started | - |
| 4. Budgeting | 0/3 | Not started | - |
| 5. Dashboards | 0/4 | Not started | - |
