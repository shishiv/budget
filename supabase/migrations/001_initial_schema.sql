-- Budget App: Initial Schema
-- Accounts, Categories, Transactions, Budgets tables

-- Accounts table
create table public.accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  type text not null check (type in ('checking', 'savings', 'credit_card', 'investment', 'cash')),
  institution text, -- bank name
  balance_cents bigint not null default 0, -- current balance in cents
  currency text not null default 'BRL',
  color text, -- for UI display
  icon text, -- for UI display
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Categories table
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade, -- null for system categories
  name text not null,
  icon text,
  color text,
  parent_id uuid references public.categories(id), -- for subcategories
  is_system boolean not null default false, -- true for default categories
  is_income boolean not null default false, -- income vs expense category
  created_at timestamptz not null default now()
);

-- Transactions table
create table public.transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  account_id uuid references public.accounts(id) on delete cascade not null,
  category_id uuid references public.categories(id),
  amount_cents bigint not null, -- positive = income, negative = expense
  description text not null,
  description_raw text, -- original from import
  date date not null,
  type text not null check (type in ('income', 'expense', 'transfer')),
  payment_method text, -- PIX, CARTAO, BOLETO, etc
  is_recurring boolean not null default false,
  recurring_id uuid, -- links recurring transactions
  import_id text, -- original ID from CSV import
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Budgets table (envelope style)
create table public.budgets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  category_id uuid references public.categories(id) not null,
  month date not null, -- first day of month (2024-01-01)
  allocated_cents bigint not null default 0, -- budgeted amount
  rollover_cents bigint not null default 0, -- carried from previous month
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, category_id, month)
);

-- Add indexes for performance
create index idx_transactions_user_date on public.transactions(user_id, date desc);
create index idx_transactions_account on public.transactions(account_id);
create index idx_transactions_category on public.transactions(category_id);
create index idx_budgets_user_month on public.budgets(user_id, month);
create index idx_accounts_user on public.accounts(user_id);

-- Add updated_at trigger function
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Add triggers for updated_at columns
create trigger accounts_updated_at before update on public.accounts
  for each row execute function public.update_updated_at();

create trigger transactions_updated_at before update on public.transactions
  for each row execute function public.update_updated_at();

create trigger budgets_updated_at before update on public.budgets
  for each row execute function public.update_updated_at();
