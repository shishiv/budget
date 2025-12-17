# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
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
