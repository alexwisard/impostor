import { Container } from "./Container";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-4">
        <span className="font-semibold tracking-tight">Logo</span>
        <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">Про що</a>
          <a href="#program" className="hover:text-foreground transition-colors">Програма</a>
          <a href="#register" className="hover:text-foreground transition-colors">Реєстрація</a>
        </nav>
      </Container>
    </header>
  );
}