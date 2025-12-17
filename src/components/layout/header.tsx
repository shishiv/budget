"use client";

import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { UserMenu } from "./user-menu";

interface HeaderProps {
  userEmail: string;
}

export function Header({ userEmail }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="transition-opacity hover:opacity-80"
        >
          <Logo size="lg" variant="full" />
        </Link>

        {/* Right side - User Menu */}
        <div className="flex items-center gap-4">
          <UserMenu email={userEmail} />
        </div>
      </div>
    </header>
  );
}
