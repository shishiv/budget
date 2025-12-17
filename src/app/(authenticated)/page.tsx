import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { LayoutDashboard, Receipt, Wallet, CreditCard, TrendingUp, PiggyBank } from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    title: "Dashboard",
    description: "Visão geral das suas finanças",
    detail: "Acompanhe saldos, gastos e metas em tempo real.",
    icon: LayoutDashboard,
    href: "/",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Transações",
    description: "Registre receitas e despesas",
    detail: "Importe extratos CSV ou adicione manualmente.",
    icon: Receipt,
    href: "/transacoes",
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Orçamentos",
    description: "Planeje seus gastos mensais",
    detail: "Defina limites por categoria e acompanhe o progresso.",
    icon: Wallet,
    href: "/orcamentos",
    color: "text-violet-600",
    bgColor: "bg-violet-500/10",
  },
  {
    title: "Contas",
    description: "Gerencie suas contas bancárias",
    detail: "Conecte contas e veja todos os saldos em um só lugar.",
    icon: CreditCard,
    href: "/contas",
    color: "text-amber-600",
    bgColor: "bg-amber-500/10",
  },
];

const stats = [
  {
    label: "Saldo Total",
    value: "R$ 0,00",
    icon: PiggyBank,
    change: null,
  },
  {
    label: "Gastos do Mês",
    value: "R$ 0,00",
    icon: TrendingUp,
    change: null,
  },
];

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const firstName = user?.email?.split('@')[0] || 'usuário';

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Olá, {firstName}
        </h1>
        <p className="text-muted-foreground">
          Bem-vindo ao Budget. Organize suas finanças de forma simples.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          Acesso Rápido
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <Card className="group h-full border-border transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className={`rounded-lg ${action.bgColor} p-2.5`}>
                        <Icon className={`h-5 w-5 ${action.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {action.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {action.detail}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Empty State / Getting Started */}
      <Card className="border-dashed border-2 border-border bg-muted/30">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-primary/10 p-4 mb-4">
            <Receipt className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Comece importando suas transações
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mb-6">
            Importe um arquivo CSV do seu banco para começar a organizar suas finanças automaticamente.
          </p>
          <Link
            href="/transacoes"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Importar Transações
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
