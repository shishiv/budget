import { UserMenu } from './user-menu'

interface HeaderProps {
  userEmail: string
}

export function Header({ userEmail }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-foreground">Budget</h1>
        <div className="flex items-center gap-4">
          <UserMenu email={userEmail} />
        </div>
      </div>
    </header>
  );
}
