// Type helpers for Budget App database
export type { Database } from '../database.types'

import type { Database } from '../database.types'

// Row types (data from database)
export type Account = Database['public']['Tables']['accounts']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Transaction = Database['public']['Tables']['transactions']['Row']
export type Budget = Database['public']['Tables']['budgets']['Row']

// Insert types (creating new records)
export type NewAccount = Database['public']['Tables']['accounts']['Insert']
export type NewCategory = Database['public']['Tables']['categories']['Insert']
export type NewTransaction = Database['public']['Tables']['transactions']['Insert']
export type NewBudget = Database['public']['Tables']['budgets']['Insert']

// Update types (updating existing records)
export type AccountUpdate = Database['public']['Tables']['accounts']['Update']
export type CategoryUpdate = Database['public']['Tables']['categories']['Update']
export type TransactionUpdate = Database['public']['Tables']['transactions']['Update']
export type BudgetUpdate = Database['public']['Tables']['budgets']['Update']

// Account type enum
export type AccountType = Account['type']

// Transaction type enum
export type TransactionType = Transaction['type']

// Utility types for working with amounts in BRL cents
export type AmountInCents = number

/**
 * Convert BRL amount from cents to reais
 * @param cents Amount in cents
 * @returns Amount in reais (e.g., 1000 cents = 10.00 reais)
 */
export function centsToReais(cents: AmountInCents): number {
  return cents / 100
}

/**
 * Convert BRL amount from reais to cents
 * @param reais Amount in reais
 * @returns Amount in cents (e.g., 10.00 reais = 1000 cents)
 */
export function reaisToCents(reais: number): AmountInCents {
  return Math.round(reais * 100)
}

/**
 * Format BRL amount in cents to currency string
 * @param cents Amount in cents
 * @returns Formatted string (e.g., "R$ 10,00")
 */
export function formatCurrency(cents: AmountInCents): string {
  const reais = centsToReais(cents)
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(reais)
}
