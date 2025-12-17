"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt, Wallet, CreditCard, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    name: "Transações",
    icon: Receipt,
    href: "/transacoes",
  },
  {
    name: "Orçamentos",
    icon: Wallet,
    href: "/orcamentos",
  },
  {
    name: "Contas",
    icon: CreditCard,
    href: "/contas",
  },
];

const bottomItems = [
  {
    name: "Configurações",
    icon: Settings,
    href: "/configuracoes",
  },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const NavItem = ({ item }: { item: typeof navigationItems[0] }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        href={item.href}
        className={cn(
          "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {/* Active indicator */}
        {isActive && (
          <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
        )}

        <Icon className={cn(
          "h-5 w-5 transition-colors",
          isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
        )} />

        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-border bg-card",
        className
      )}
    >
      {/* Main navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Menu
        </div>
        {navigationItems.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>

      {/* Bottom navigation */}
      <div className="border-t border-border p-4">
        {bottomItems.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </aside>
  );
}
