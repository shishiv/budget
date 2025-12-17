import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-6xl space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Bem-vindo ao Budget</h2>
              <p className="text-muted-foreground mt-2">
                Gerencie suas finanças pessoais de forma simples e eficiente.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard</CardTitle>
                  <CardDescription>
                    Visão geral das suas finanças
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Em breve você terá acesso ao seu painel financeiro completo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transações</CardTitle>
                  <CardDescription>
                    Registre suas receitas e despesas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Acompanhe todas as suas movimentações financeiras.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Orçamentos</CardTitle>
                  <CardDescription>
                    Planeje seus gastos mensais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Defina limites e metas para suas categorias de gastos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
