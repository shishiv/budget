// Generated TypeScript types for Budget App Database Schema
// Based on migrations: 001_initial_schema.sql, 002_rls_policies.sql, 003_seed_categories.sql

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          id: string
          user_id: string
          name: string
          type: 'checking' | 'savings' | 'credit_card' | 'investment' | 'cash'
          institution: string | null
          balance_cents: number
          currency: string
          color: string | null
          icon: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          type: 'checking' | 'savings' | 'credit_card' | 'investment' | 'cash'
          institution?: string | null
          balance_cents?: number
          currency?: string
          color?: string | null
          icon?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          type?: 'checking' | 'savings' | 'credit_card' | 'investment' | 'cash'
          institution?: string | null
          balance_cents?: number
          currency?: string
          color?: string | null
          icon?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          user_id: string | null
          name: string
          icon: string | null
          color: string | null
          parent_id: string | null
          is_system: boolean
          is_income: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          icon?: string | null
          color?: string | null
          parent_id?: string | null
          is_system?: boolean
          is_income?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          icon?: string | null
          color?: string | null
          parent_id?: string | null
          is_system?: boolean
          is_income?: boolean
          created_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          account_id: string
          category_id: string | null
          amount_cents: number
          description: string
          description_raw: string | null
          date: string
          type: 'income' | 'expense' | 'transfer'
          payment_method: string | null
          is_recurring: boolean
          recurring_id: string | null
          import_id: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          account_id: string
          category_id?: string | null
          amount_cents: number
          description: string
          description_raw?: string | null
          date: string
          type: 'income' | 'expense' | 'transfer'
          payment_method?: string | null
          is_recurring?: boolean
          recurring_id?: string | null
          import_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          account_id?: string
          category_id?: string | null
          amount_cents?: number
          description?: string
          description_raw?: string | null
          date?: string
          type?: 'income' | 'expense' | 'transfer'
          payment_method?: string | null
          is_recurring?: boolean
          recurring_id?: string | null
          import_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      budgets: {
        Row: {
          id: string
          user_id: string
          category_id: string
          month: string
          allocated_cents: number
          rollover_cents: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category_id: string
          month: string
          allocated_cents?: number
          rollover_cents?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category_id?: string
          month?: string
          allocated_cents?: number
          rollover_cents?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
