-- Budget App: Seed Default Categories
-- System categories available to all users

-- Income categories (is_income = true)
insert into public.categories (name, icon, color, is_system, is_income) values
  ('Salary', 'briefcase', '#22c55e', true, true),
  ('Freelance', 'laptop', '#22c55e', true, true),
  ('Investments', 'trending-up', '#22c55e', true, true),
  ('Gifts', 'gift', '#22c55e', true, true),
  ('Other Income', 'plus-circle', '#22c55e', true, true);

-- Expense categories (is_income = false)
insert into public.categories (name, icon, color, is_system, is_income) values
  ('Housing', 'home', '#ef4444', true, false),
  ('Transportation', 'car', '#f97316', true, false),
  ('Food & Dining', 'utensils', '#eab308', true, false),
  ('Groceries', 'shopping-cart', '#84cc16', true, false),
  ('Utilities', 'zap', '#06b6d4', true, false),
  ('Healthcare', 'heart', '#ec4899', true, false),
  ('Entertainment', 'tv', '#8b5cf6', true, false),
  ('Shopping', 'shopping-bag', '#f43f5e', true, false),
  ('Education', 'book-open', '#3b82f6', true, false),
  ('Personal Care', 'smile', '#14b8a6', true, false),
  ('Subscriptions', 'repeat', '#a855f7', true, false),
  ('Travel', 'plane', '#0ea5e9', true, false),
  ('Transfers', 'arrow-right-left', '#6b7280', true, false),
  ('Other Expenses', 'more-horizontal', '#6b7280', true, false);
