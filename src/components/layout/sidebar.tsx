"use client";

import { LayoutDashboard, Receipt, Wallet, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "#",
  },
  {
    name: "Transações",
    icon: Receipt,
    href: "#",
  },
  {
    name: "Orçamentos",
    icon: Wallet,
    href: "#",
  },
  {
    name: "Contas",
    icon: CreditCard,
    href: "#",
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-border bg-card",
        className
      )}
    >
      <nav className="flex-1 space-y-1 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
