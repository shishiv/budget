# Known Issues and Enhancements

## Phase 01-03: Database Schema (2025-12-17)

### Issue: Migrations Not Applied Automatically

**Status:** Pending Manual Action

**Description:**
The database migrations created in Phase 01-03 need to be applied manually to the Supabase project. The Supabase MCP tools experienced connection timeout errors during automated migration application.

**Migration Files Created:**
- `supabase/migrations/001_initial_schema.sql` - Core tables, indexes, and triggers
- `supabase/migrations/002_rls_policies.sql` - Row Level Security policies
- `supabase/migrations/003_seed_categories.sql` - Default category seeding

**Action Required:**
Apply migrations using one of the methods documented in `supabase/README.md`:
1. Supabase Dashboard SQL Editor (recommended for first-time setup)
2. Supabase CLI: `npx supabase link` then `npx supabase db push`
3. Local development: `npx supabase start`

**Related Files:**
- `supabase/README.md` - Complete migration instructions
- `src/lib/database.types.ts` - TypeScript types (generated, ready to use)
- `src/lib/supabase/types.ts` - Type helpers and currency utilities

**Priority:** High (blocks Phase 2 development)

---

## Future Enhancements

### ISS-001: User Name Normalization (Capital First Letter)

**Status:** Planned
**Priority:** Low
**Requested:** 2025-12-17

**Description:**
Normalize user display names to always capitalize the first letter (e.g., "myke" → "Myke").

**Implementation:**
- Add utility function in `src/lib/utils.ts`:
  ```typescript
  export function capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  ```
- Apply in welcome message and user display components
- Consider applying to email prefix extraction: `user.email.split('@')[0]`

**Files to modify:**
- `src/app/(authenticated)/page.tsx` - Welcome message
- `src/components/layout/user-menu.tsx` - User initials
- `src/lib/utils.ts` - Add utility function

---

_This section will track potential improvements and feature requests identified during development._
