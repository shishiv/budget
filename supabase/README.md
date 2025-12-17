# Supabase Database Migrations

This directory contains database migrations for the Budget app.

## Migration Files

1. **001_initial_schema.sql** - Creates core tables (accounts, categories, transactions, budgets) with indexes and triggers
2. **002_rls_policies.sql** - Enables Row Level Security and creates policies for user data isolation
3. **003_seed_categories.sql** - Seeds default income and expense categories

## Applying Migrations

### Option 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://wxvxlybwpvpenqveycon.supabase.co
2. Navigate to **SQL Editor**
3. Copy and paste the contents of each migration file in order:
   - First: `001_initial_schema.sql`
   - Second: `002_rls_policies.sql`
   - Third: `003_seed_categories.sql`
4. Execute each migration

### Option 2: Using Supabase CLI

If you have the Supabase CLI installed and linked:

```bash
# Link your project (one time setup)
npx supabase link --project-ref wxvxlybwpvpenqveycon

# Apply all migrations
npx supabase db push
```

### Option 3: Using Local Development

```bash
# Start local Supabase
npx supabase start

# Migrations will be automatically applied to local database
# To push local state to remote:
npx supabase db push
```

## Schema Overview

### Tables

- **accounts** - User bank accounts and wallets
  - Stores balance in cents (bigint) to avoid floating point issues
  - Supports: checking, savings, credit_card, investment, cash

- **categories** - Income and expense categories
  - System categories (is_system=true, user_id=null) visible to all users
  - User custom categories (is_system=false, user_id set) visible only to owner
  - Supports hierarchical categories via parent_id

- **transactions** - Financial transactions
  - amount_cents: positive for income, negative for expenses
  - Supports imported transactions (import_id) and manual entries
  - Links to account and category

- **budgets** - Monthly envelope-style budgets
  - One budget per category per month
  - Tracks allocated amount and rollover from previous month
  - Unique constraint on (user_id, category_id, month)

### Indexes

All tables have optimized indexes for common queries:
- User-scoped queries
- Date-based transaction lookups
- Category and account relationships

### Row Level Security (RLS)

All tables have RLS enabled with policies ensuring:
- Users can only access their own data
- System categories are visible to all authenticated users
- Users cannot modify system categories

## Currency Handling

All monetary amounts are stored as **integer cents** (bigint) to avoid floating point precision issues.

Example:
- R$ 10.00 = 1000 cents
- R$ 123.45 = 12345 cents

Use the helper functions in `src/lib/supabase/types.ts`:
- `reaisToCents(reais)` - Convert R$ to cents
- `centsToReais(cents)` - Convert cents to R$
- `formatCurrency(cents)` - Format as "R$ 10,00"

## Regenerating TypeScript Types

After making schema changes, regenerate types:

```bash
# Using Supabase CLI
npx supabase gen types typescript --linked > src/lib/database.types.ts
```

Or use the MCP tool:
```
mcp__supabase__generate_typescript_types
```
