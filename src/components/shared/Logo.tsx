"use client";

/**
 * Logo Budget - Baseado no Brandbook TriânguloTEC
 *
 * Variantes:
 * - full: Budget (com ícone de wallet)
 * - compact: B (ícone compacto)
 * - icon: wallet icon only
 */

import { Wallet } from "lucide-react";

export const LOGO_SIZES = {
  xs: 'text-sm',
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
  xxl: 'text-3xl',
} as const;

const ICON_SIZES = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 30,
} as const;

interface LogoProps {
  size?: keyof typeof LOGO_SIZES;
  variant?: 'full' | 'compact' | 'icon';
  className?: string;
}

export default function Logo({
  size = 'lg',
  variant = 'full',
  className = "",
}: LogoProps) {
  const sizeClass = LOGO_SIZES[size];
  const iconSize = ICON_SIZES[size];

  const baseClasses = `font-bold tracking-tight ${sizeClass} ${className}`;

  if (variant === 'icon') {
    return (
      <span className={`${baseClasses} text-primary`} aria-label="Budget">
        <Wallet size={iconSize} />
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <span className={`${baseClasses} flex items-center gap-1`} aria-label="Budget">
        <Wallet size={iconSize} className="text-primary" />
        <span className="text-foreground">B</span>
      </span>
    );
  }

  return (
    <span className={`${baseClasses} flex items-center gap-2`} aria-label="Budget">
      <Wallet size={iconSize} className="text-primary" />
      <span className="text-foreground">Budget</span>
    </span>
  );
}
