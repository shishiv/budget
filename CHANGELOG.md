# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Database schema with 4 core tables: accounts, categories, transactions, budgets
- Row Level Security policies for all tables enforcing user data isolation
- TypeScript types and helper utilities for type-safe database operations
- 19 default categories (5 income, 14 expense) with icons and colors
- Currency utility functions (centsToReais, reaisToCents, formatCurrency)
- Database migration files in supabase/migrations/
- Comprehensive indexes for query performance optimization
- Automated updated_at triggers for temporal tracking
- Supabase authentication flow with email/password login and signup
- Protected routes with middleware session refresh
- User menu with avatar and logout functionality
- Login and signup pages with clean card layout
- OAuth callback route for future provider support
- Route group `(authenticated)` for protected pages
- Sidebar navigation with Dashboard, Transações, Orçamentos, Contas, Configurações
- Header with Logo component and UserMenu
- Home page with stats cards, quick actions, and empty state CTA
- TrianguloTEC design system with Outfit font and #E63946 red accent
- Logo component with Budget branding (wallet icon)

### Changed
- Migrated from middleware.ts to proxy.ts (Next.js 16 convention)
- Updated CSS from oklch to hex colors for consistency
- Applied TrianguloTEC brandbook styling across all components

### Technical Decisions
- Store monetary amounts as bigint cents instead of decimal/float to avoid precision errors
- System categories (user_id=null) shared across all users, custom categories user-scoped
- RLS pattern: \`(select auth.uid()) = user_id\` for consistent user data isolation
- Support hierarchical categories via parent_id for future expansion
- Month stored as first day of month (date type) for budget envelope system
