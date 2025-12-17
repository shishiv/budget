'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { signIn } from '@/lib/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Logo from '@/components/shared/Logo'

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(signIn, null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardHeader className="space-y-4 text-center pb-2">
          <div className="flex justify-center">
            <Logo size="xl" variant="full" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl font-semibold">Bem-vindo de volta</CardTitle>
            <CardDescription>
              Entre com sua conta para continuar
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                autoComplete="email"
                disabled={isPending}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                disabled={isPending}
                className="h-11"
              />
            </div>
            {state?.error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                {state.error}
              </div>
            )}
            <Button type="submit" className="w-full h-11 font-semibold" disabled={isPending}>
              {isPending ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Não tem uma conta? </span>
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Criar conta
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
