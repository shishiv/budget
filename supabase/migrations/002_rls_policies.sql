-- Budget App: Row Level Security Policies
-- Enable RLS and create policies for user data isolation

-- Enable RLS on all tables
alter table public.accounts enable row level security;
alter table public.categories enable row level security;
alter table public.transactions enable row level security;
alter table public.budgets enable row level security;

-- Accounts policies (user owns their accounts)
create policy "Users can view own accounts"
  on public.accounts for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create own accounts"
  on public.accounts for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update own accounts"
  on public.accounts for update
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can delete own accounts"
  on public.accounts for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- Categories policies (user owns OR system category)
create policy "Users can view own and system categories"
  on public.categories for select
  to authenticated
  using (
    user_id is null -- system categories
    or (select auth.uid()) = user_id -- own categories
  );

create policy "Users can create own categories"
  on public.categories for insert
  to authenticated
  with check ((select auth.uid()) = user_id and is_system = false);

create policy "Users can update own categories"
  on public.categories for update
  to authenticated
  using ((select auth.uid()) = user_id and is_system = false);

create policy "Users can delete own categories"
  on public.categories for delete
  to authenticated
  using ((select auth.uid()) = user_id and is_system = false);

-- Transactions policies
create policy "Users can view own transactions"
  on public.transactions for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create own transactions"
  on public.transactions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update own transactions"
  on public.transactions for update
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can delete own transactions"
  on public.transactions for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- Budgets policies
create policy "Users can view own budgets"
  on public.budgets for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create own budgets"
  on public.budgets for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update own budgets"
  on public.budgets for update
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can delete own budgets"
  on public.budgets for delete
  to authenticated
  using ((select auth.uid()) = user_id);
