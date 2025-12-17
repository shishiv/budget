export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-foreground">Budget</h1>
        <div className="flex items-center gap-4">
          {/* Placeholder for user menu */}
          <div className="h-8 w-8 rounded-full bg-muted" />
        </div>
      </div>
    </header>
  );
}
